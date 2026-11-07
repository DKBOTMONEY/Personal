import { ImageResponse } from "next/og";
import { PROFILE } from "@/data/projects";

export const alt = `${PROFILE.nameTh} (${PROFILE.nameEn}) — ${PROFILE.role}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#060d1f",
          color: "#f4efe6",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <span
            style={{
              fontSize: 22,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#c8ff00",
              fontWeight: 700,
            }}
          >
            www.pl-patipan.in.th
          </span>
          <span
            style={{
              fontSize: 18,
              padding: "8px 18px",
              border: "1px solid rgba(200,255,0,0.45)",
              color: "#c8ff00",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            Full-Stack Developer
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: 82,
              fontWeight: 900,
              lineHeight: 1.05,
              color: "#f4efe6",
              letterSpacing: "-0.02em",
            }}
          >
            Patipan Plonying
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "#c8ff00",
              letterSpacing: "0.04em",
            }}
          >
            Patipan PL. (Bank) — Full-Stack Engineer
          </div>
          <div
            style={{
              fontSize: 24,
              color: "rgba(244,239,230,0.78)",
              maxWidth: "920px",
              lineHeight: 1.4,
              marginTop: "8px",
            }}
          >
            Next.js · TypeScript · React · Node.js · PostgreSQL · Docker · Nginx
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(244,239,230,0.18)",
            paddingTop: "24px",
            fontSize: 18,
            color: "rgba(244,239,230,0.65)",
          }}
        >
          <span>linkedin.com/in/pl1999patipan</span>
          <span>github.com/DKBOTMONEY</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
