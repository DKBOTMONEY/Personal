import React from "react";
import Link from "next/link";
import { Github, Linkedin } from "@/components/Icons";
import { PROFILE } from "@/data/projects";

interface NavbarProps {
  lang?: "th" | "en";
  variant?: "hero" | "page";
}

export default function Navbar({ lang = "th", variant = "page" }: NavbarProps) {
  const githubLink =
    PROFILE.social.find((s) => s.url.includes("github"))?.url ||
    "https://github.com/DKBOTMONEY";
  const linkedinLink =
    PROFILE.social.find((s) => s.url.includes("linkedin"))?.url ||
    "https://www.linkedin.com/in/pl1999patipan";

  const navItems =
    lang === "th"
      ? [
          { href: "/", label: "หน้าแรก" },
          { href: "/about", label: "เกี่ยวกับฉัน" },
          { href: "/projects", label: "โปรเจกต์" },
          { href: "/blog", label: "บทความ" },
          { href: "/contact", label: "ติดต่อ" },
        ]
      : [
          { href: "/en", label: "Home" },
          { href: "/en/about", label: "About" },
          { href: "/projects", label: "Projects" },
          { href: "/blog", label: "Blog" },
          { href: "/contact", label: "Contact" },
        ];

  return (
    <header
      className={`relative z-30 w-full ${
        variant === "page"
          ? "border-b border-foreground/10 bg-[#E4E3DB]/90 backdrop-blur-sm"
          : ""
      }`}
    >
      <nav
        aria-label={lang === "th" ? "เมนูหลัก" : "Main navigation"}
        className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4 px-6 md:px-16 py-6"
      >
        <Link
          href={lang === "th" ? "/" : "/en"}
          className="text-xs tracking-[0.25em] uppercase font-mono font-bold text-[#060d1f] hover:opacity-80 transition-opacity"
        >
          {PROFILE.nameEn.toUpperCase()} · PL
        </Link>

        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <ul className="flex flex-wrap items-center gap-4 md:gap-6 text-xs font-mono font-semibold uppercase tracking-wider">
            {navItems.map((item) => (
              <li key={item.href + item.label}>
                <Link
                  href={item.href}
                  className="text-[#060d1f]/75 hover:text-[#060d1f] transition-colors py-1"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="h-4 w-px bg-[#060d1f]/15 hidden sm:block" />

          <div className="flex items-center gap-3">
            <Link
              href={lang === "th" ? "/en" : "/"}
              className="px-2.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider border border-[#060d1f]/25 hover:border-[#060d1f] bg-white/40 text-[#060d1f] transition-colors"
              title={lang === "th" ? "Switch to English version" : "สลับเป็นภาษาไทย"}
            >
              {lang === "th" ? "EN" : "TH"}
            </Link>

            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#060d1f]/65 hover:text-[#060d1f] transition-colors"
              aria-label="GitHub ของ ปฏิภาณ พลยิ่ง (Patipan Plonying)"
            >
              <Github size={18} />
            </a>
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#060d1f]/65 hover:text-[#060d1f] transition-colors"
              aria-label="LinkedIn ของ ปฏิภาณ พลยิ่ง (Patipan Plonying)"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

