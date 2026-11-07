"use client";

import React, { useState } from "react";
import { PROFILE } from "@/data/projects";
import { Mail, Copy, Check } from "@/components/Icons";

interface ContactProps {
  lang?: "th" | "en";
}

export default function Contact({ lang = "th" }: ContactProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // Honeypot field for spam protection (bots fill this, humans don't see it)
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [formLoadedAt] = useState<number>(() => Date.now());

  const [emailRevealed, setEmailRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  // Reconstruct email client-side only when requested to prevent spam scrapers
  const getFullEmail = () => `${PROFILE.emailUser}@${PROFILE.emailDomain}`;

  const handleCopyEmail = async () => {
    const fullEmail = getFullEmail();
    setEmailRevealed(true);
    try {
      await navigator.clipboard.writeText(fullEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard permission denied
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus("submitting");
    setFeedbackMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          website_url: websiteUrl, // honeypot
          form_loaded_at: formLoadedAt, // anti-bot timing check
        }),
      });

      const data = await response.json();

      if (response.ok && data.ok) {
        setStatus("success");
        setFeedbackMessage(
          lang === "th"
            ? "ขอบคุณสำหรับข้อความ! ปฏิภาณ พลยิ่ง ได้รับข้อมูลแล้วและจะติดต่อกลับทางอีเมลโดยเร็วที่สุด"
            : "Thank you! Patipan Plonying has received your message and will get back to you shortly."
        );
        setName("");
        setEmail("");
        setMessage("");
        setWebsiteUrl("");
      } else {
        setStatus("error");
        setFeedbackMessage(
          lang === "th"
            ? "ไม่สามารถส่งข้อความได้ในขณะนี้ กรุณาลองใหม่อีกครั้งหรือติดต่อผ่าน LinkedIn"
            : "Unable to send message right now. Please try again or reach out via LinkedIn."
        );
      }
    } catch {
      setStatus("error");
      setFeedbackMessage(
        lang === "th"
          ? "เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาลองใหม่อีกครั้ง"
          : "Network error occurred. Please try again."
      );
    }
  };

  return (
    <section aria-labelledby="contact-heading" className="pt-4 pb-16 w-full">
      {/* Header */}
      <div className="border-b border-foreground/15 pb-6 mb-10">
        <p className="text-xs tracking-[0.3em] uppercase mb-2 font-mono text-foreground/55 font-semibold">
          {lang === "th" ? "ช่องทางติดต่อ" : "Connect"}
        </p>
        <h2
          id="contact-heading"
          className="font-black uppercase font-display text-3xl md:text-5xl tracking-tight"
        >
          {lang === "th"
            ? `ติดต่อ ${PROFILE.nameTh} (${PROFILE.nameEn})`
            : `Contact ${PROFILE.nameEn}`}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left info panel */}
        <div className="lg:col-span-5 space-y-6 bg-white/55 border border-foreground/15 p-7">
          <h3 className="text-xl font-bold font-display uppercase text-foreground">
            {lang === "th" ? "ร่วมงานหรือปรึกษาโปรเจกต์" : "Let's Build Together"}
          </h3>
          <p className="text-sm text-foreground/80 leading-relaxed font-sans">
            {lang === "th"
              ? `หากคุณกำลังมองหา Full-Stack Developer สำหรับพัฒนาเว็บแอปพลิเคชันด้วย Next.js, TypeScript หรือวางโครงสร้างระบบเซิร์ฟเวอร์ สามารถส่งข้อความถึง ปฏิภาณ พลยิ่ง (${PROFILE.nameEn}) ได้ผ่านแบบฟอร์มนี้โดยตรง`
              : `Looking for a Full-Stack Developer to build or scale your Next.js & TypeScript web application? Send a message directly to ${PROFILE.nameEn} (${PROFILE.nameTh}).`}
          </p>

          {/* Obfuscated Email Box (Spam Protection) */}
          <div className="pt-2 border-t border-foreground/10">
            <span className="text-xs font-mono text-foreground/55 uppercase tracking-wider block mb-2">
              {lang === "th" ? "อีเมลติดต่อโดยตรง (ป้องกันบอทสแปม):" : "Direct Email (Spam-Protected):"}
            </span>

            {!emailRevealed ? (
              <button
                type="button"
                onClick={() => setEmailRevealed(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-semibold border border-foreground/25 hover:border-foreground bg-[#f4efe6] text-foreground transition-colors cursor-pointer"
              >
                <Mail size={14} />
                <span>
                  {lang === "th" ? "คลิกเพื่อแสดงที่อยู่อีเมล" : "Click to reveal email address"}
                </span>
              </button>
            ) : (
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={`mailto:${getFullEmail()}`}
                  className="px-3.5 py-2 bg-[#060d1f] text-[#c8ff00] font-mono text-xs font-semibold hover:underline"
                >
                  {getFullEmail()}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-2 border border-foreground/20 hover:border-foreground bg-white text-xs font-mono cursor-pointer"
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copied ? (lang === "th" ? "คัดลอกแล้ว" : "Copied") : lang === "th" ? "คัดลอก" : "Copy"}</span>
                </button>
              </div>
            )}
          </div>

          <div className="pt-2 border-t border-foreground/10 space-y-2 text-xs font-mono">
            <span className="text-foreground/55 uppercase tracking-wider block">
              {lang === "th" ? "โปรไฟล์ทางการ:" : "Official Profiles:"}
            </span>
            <div className="flex flex-wrap gap-3">
              {PROFILE.social.map((s) => (
                <a
                  key={s.url}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-foreground/80 hover:text-foreground font-semibold"
                >
                  {s.platform} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Form Container */}
        <div className="lg:col-span-7 bg-white/60 border border-foreground/15 p-7 md:p-8">
          <h3 className="text-xl font-bold font-display uppercase text-foreground mb-2">
            {lang === "th" ? "ส่งข้อความติดต่อ (Send a Message)" : "Send a Message"}
          </h3>
          <p className="text-xs text-foreground/60 mb-6 font-mono leading-relaxed">
            {lang === "th"
              ? "กรอกข้อมูลด้านล่าง ระบบจะส่งข้อความพร้อมแจ้งผลการส่งทันที"
              : "Fill out the fields below and you will receive an immediate confirmation."}
          </p>

          <form onSubmit={handleSendMessage} className="space-y-5 text-xs font-sans">
            {/* Honeypot field — hidden from real users */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "-9999px",
                top: "-9999px",
                opacity: 0,
                height: 0,
                overflow: "hidden",
              }}
            >
              <label htmlFor="website_url">Website URL (Leave blank)</label>
              <input
                id="website_url"
                name="website_url"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-1.5 font-mono"
                >
                  {lang === "th" ? "ชื่อของคุณ *" : "Your Name *"}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  maxLength={80}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={lang === "th" ? "เช่น สมชาย ใจดี" : "e.g., Jane Doe"}
                  className="w-full px-3.5 py-2.5 border border-foreground/20 bg-white/70 focus:outline-none focus:ring-1 focus:ring-foreground focus:border-foreground text-foreground text-sm rounded-none transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-1.5 font-mono"
                >
                  {lang === "th" ? "อีเมลติดต่อกลับ *" : "Email Address *"}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  maxLength={120}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 border border-foreground/20 bg-white/70 focus:outline-none focus:ring-1 focus:ring-foreground focus:border-foreground text-foreground text-sm rounded-none transition-all"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-1.5 font-mono"
              >
                {lang === "th" ? "รายละเอียดงานหรือข้อความ *" : "Message *"}
              </label>
              <textarea
                id="contact-message"
                required
                maxLength={2000}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={
                  lang === "th"
                    ? "ระบุรายละเอียดโปรเจกต์ ขอบเขตงาน หรือคำถามที่ต้องการพูดคุย..."
                    : "Tell me about your project, timeline, or question..."
                }
                rows={4}
                className="w-full px-3.5 py-2.5 border border-foreground/20 bg-white/70 focus:outline-none focus:ring-1 focus:ring-foreground focus:border-foreground text-foreground text-sm rounded-none transition-all"
              />
            </div>

            {feedbackMessage && (
              <div
                role="status"
                aria-live="polite"
                className={`p-3.5 border text-xs font-mono leading-relaxed ${
                  status === "success"
                    ? "bg-[#e9f5e8] border-[#3b5e39]/40 text-[#234221]"
                    : "bg-rose-50 border-rose-400/40 text-rose-800"
                }`}
              >
                {status === "success" ? "✓ " : "⚠ "}
                {feedbackMessage}
              </div>
            )}

            <div className="flex items-center justify-end pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="px-6 py-3.5 bg-[#060d1f] hover:bg-[#0c1a3b] disabled:bg-[#060d1f]/40 text-[#f4efe6] rounded-none font-semibold text-xs font-mono tracking-wider transition-all duration-200 shadow-sm cursor-pointer uppercase"
              >
                {status === "submitting"
                  ? lang === "th"
                    ? "กำลังส่งข้อความ..."
                    : "Sending..."
                  : lang === "th"
                  ? "ส่งข้อความ (Send Message)"
                  : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
