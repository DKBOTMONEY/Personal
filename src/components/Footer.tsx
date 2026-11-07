import React from "react";
import Link from "next/link";
import { Github, Linkedin } from "@/components/Icons";
import { PROFILE } from "@/data/projects";

interface FooterProps {
  lang?: "th" | "en";
}

export default function Footer({ lang = "th" }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const githubLink =
    PROFILE.social.find((s) => s.url.includes("github"))?.url ||
    "https://github.com/DKBOTMONEY";
  const linkedinLink =
    PROFILE.social.find((s) => s.url.includes("linkedin"))?.url ||
    "https://www.linkedin.com/in/pl1999patipan";

  return (
    <footer className="w-full border-t border-foreground/15 py-12 px-6 md:px-16 bg-[#E4E3DB]/60 text-foreground">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="text-xs tracking-widest uppercase mb-1 font-mono text-foreground/55 font-semibold">
            {PROFILE.nameTh} ({PROFILE.nameEn})
          </p>
          <p className="font-black uppercase font-display text-2xl md:text-3xl text-foreground">
            {PROFILE.role}
          </p>
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-4 mt-4 text-xs font-mono font-semibold uppercase tracking-wider text-foreground/70"
          >
            <Link href="/" className="hover:text-foreground">
              {lang === "th" ? "หน้าแรก" : "Home (TH)"}
            </Link>
            <Link href="/about" className="hover:text-foreground">
              {lang === "th" ? "เกี่ยวกับฉัน" : "About"}
            </Link>
            <Link href="/projects" className="hover:text-foreground">
              {lang === "th" ? "โปรเจกต์" : "Projects"}
            </Link>
            <Link href="/blog" className="hover:text-foreground">
              {lang === "th" ? "บทความ" : "Blog"}
            </Link>
            <Link href="/contact" className="hover:text-foreground">
              {lang === "th" ? "ติดต่อ" : "Contact"}
            </Link>
            <Link href="/en" className="hover:text-foreground">
              English (/en)
            </Link>
          </nav>
        </div>

        <div className="flex gap-3 flex-wrap">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-wide transition-colors font-mono bg-[#060d1f] text-[#f4efe6] hover:bg-[#0c1a3b]"
          >
            <Github size={14} /> GitHub
          </a>
          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-wide transition-colors font-mono border border-foreground/25 text-foreground hover:border-foreground bg-white/40"
          >
            <Linkedin size={14} /> LinkedIn
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-wide transition-colors font-mono border border-foreground/25 text-foreground hover:border-foreground bg-white/40"
          >
            {lang === "th" ? "ส่งข้อความ" : "Contact Form"}
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-foreground/50">
        <span>
          © {currentYear} {PROFILE.nameTh} ({PROFILE.nameEn}) — {PROFILE.role}
        </span>
        <span>pl-patipan.in.th · Next.js &amp; TypeScript</span>
      </div>
    </footer>
  );
}
