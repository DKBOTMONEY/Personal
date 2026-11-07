import { NextRequest, NextResponse } from "next/server";

// In-memory IP rate limiter (max 3 submissions per 10 minutes per IP)
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 3;
const ipRequestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = ipRequestLog.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    ipRequestLog.set(ip, recent);
    return true;
  }

  recent.push(now);
  ipRequestLog.set(ip, recent);

  // Prevent unbounded memory growth
  if (ipRequestLog.size > 1000) {
    const oldestKey = ipRequestLog.keys().next().value;
    if (oldestKey) ipRequestLog.delete(oldestKey);
  }

  return false;
}

function sanitizeText(input: unknown, maxLength: number): string {
  if (typeof input !== "string") return "";
  // Strip control characters (except newline/tab) to prevent log injection & XSS payloads
  return input
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    .trim()
    .slice(0, maxLength);
}

export async function POST(req: NextRequest) {
  try {
    // 1. Content-Type check
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { ok: false, error: "Unsupported Content-Type." },
        { status: 415 }
      );
    }

    // 2. Origin / CSRF protection
    const origin = req.headers.get("origin") || "";
    const allowedOrigins = [
      "https://www.pl-patipan.in.th",
      "https://pl-patipan.in.th",
      "http://localhost:3000",
      "http://127.0.0.1:3000",
    ];
    if (
      process.env.NODE_ENV === "production" &&
      origin &&
      !allowedOrigins.some((allowed) => origin.startsWith(allowed)) &&
      !origin.endsWith(".vercel.app")
    ) {
      return NextResponse.json(
        { ok: false, error: "Forbidden origin." },
        { status: 403 }
      );
    }

    // 3. Rate limiting by IP
    const forwardedFor = req.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown";
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, message, website_url, form_loaded_at } = body;

    // 4. Honeypot check: if hidden website_url field is filled by a bot, silently drop
    if (website_url && String(website_url).trim().length > 0) {
      return NextResponse.json({ ok: true, status: "Filtered." });
    }

    // 5. Time-based bot check: reject submissions faster than 1.5 seconds after form mount
    if (typeof form_loaded_at === "number") {
      const elapsedMs = Date.now() - form_loaded_at;
      if (elapsedMs >= 0 && elapsedMs < 1500) {
        return NextResponse.json({ ok: true, status: "Filtered." });
      }
    }

    // 6. Sanitize & validate inputs
    const cleanName = sanitizeText(name, 80);
    const cleanEmail = sanitizeText(email, 120);
    const cleanMessage = sanitizeText(message, 2000);

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email format." },
        { status: 400 }
      );
    }

    // Log safely without raw multi-line log injection
    console.info(
      JSON.stringify({
        event: "contact_inquiry",
        timestamp: new Date().toISOString(),
        senderName: cleanName,
        senderEmail: cleanEmail,
        messageLength: cleanMessage.length,
      })
    );

    return NextResponse.json({ ok: true, status: "Transmission verified." });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request payload." },
      { status: 400 }
    );
  }
}
