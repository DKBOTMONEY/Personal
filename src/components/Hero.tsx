import React from "react";
import Link from "next/link";
import { Github, Linkedin, ChevronDown, TechStackIcon, ArrowRight } from "@/components/Icons";
import { PROFILE } from "@/data/projects";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";

const DARK = "#060d1f";
const TOP_BG = "#E4E3DB";

const marqueeSkills = [
  { name: "NextJS", label: "Next.js" },
  { name: "TS", label: "TypeScript" },
  { name: "React", label: "React" },
  { name: "Tailwind", label: "Tailwind" },
  { name: "NodeJS", label: "Node.js" },
  { name: "Postgres", label: "PostgreSQL" },
  { name: "Docker", label: "Docker" },
];

interface HeroProps {
  lang?: "th" | "en";
}

export default function Hero({ lang = "th" }: HeroProps) {
  const githubLink =
    PROFILE.social.find((s) => s.url.includes("github"))?.url ||
    "https://github.com/DKBOTMONEY";
  const linkedinLink =
    PROFILE.social.find((s) => s.url.includes("linkedin"))?.url ||
    "https://www.linkedin.com/in/pl1999patipan";

  return (
    <section
      className="relative flex flex-col min-h-[88vh] justify-between"
      style={{ background: TOP_BG, color: DARK }}
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${DARK} 1px, transparent 1px), linear-gradient(90deg, ${DARK} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Vertical Tech Stack Marquee on the top-right (CSS-based, respects prefers-reduced-motion) */}
      <div
        aria-hidden="true"
        className="absolute top-28 right-8 md:right-16 h-[380px] w-24 z-20 hidden lg:flex flex-col items-center border-l border-r border-foreground/10 bg-white/25"
      >
        <Marquee vertical={true} reverse={true} repeat={2} className="h-full px-2 py-4">
          {marqueeSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center bg-white/75 border border-foreground/10 text-foreground"
              style={{ width: "68px", height: "68px", flexShrink: 0 }}
              title={skill.label}
            >
              <TechStackIcon name={skill.name} size={28} />
              <span className="text-[8px] font-mono mt-1.5 font-semibold uppercase tracking-wider">
                {skill.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Navigation */}
      <Navbar lang={lang} variant="hero" />

      {/* Hero body */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-5xl w-full mx-auto px-6 md:px-16 py-14 md:py-20">
        <div className="max-w-3xl">
          <p className="text-xs tracking-[0.25em] uppercase mb-4 font-mono text-foreground/65 font-semibold">
            {lang === "th" ? PROFILE.focusTh : PROFILE.focusEn}
          </p>

          <h1
            className="leading-[1.08] font-black mb-4 font-display tracking-tight"
            style={{
              fontSize: lang === "th" ? "clamp(3rem, 8.5vw, 6.25rem)" : "clamp(3.2rem, 9vw, 6.75rem)",
              color: DARK,
            }}
          >
            {lang === "th" ? PROFILE.nameTh : PROFILE.nameEn}
          </h1>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="h-px w-10 md:w-14 bg-[#060d1f]" />
            <p className="text-sm md:text-base font-mono font-bold tracking-wide text-[#060d1f]/85">
              {lang === "th"
                ? `${PROFILE.nameEn} (${PROFILE.nicknameTh} / ${PROFILE.nicknameEn}) — ${PROFILE.role}`
                : `${PROFILE.nameTh} (${PROFILE.nicknameEn}) — ${PROFILE.role}`}
            </p>
          </div>

          <p className="text-base md:text-lg max-w-2xl leading-relaxed font-sans text-[#060d1f]/80">
            {lang === "th" ? PROFILE.taglineTh : PROFILE.taglineEn}
          </p>

          <div className="flex flex-wrap gap-3.5 mt-9">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs md:text-sm font-semibold uppercase tracking-wider transition-colors font-mono bg-[#060d1f] text-[#E4E3DB] hover:bg-[#0c1a3b]"
            >
              <span>{lang === "th" ? "ดูโปรเจกต์และกรณีศึกษา" : "View Case Studies"}</span>
              <ArrowRight size={15} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs md:text-sm font-semibold uppercase tracking-wider transition-colors font-mono border border-[#060d1f]/35 text-[#060d1f] bg-white/40 hover:border-[#060d1f]"
            >
              <span>{lang === "th" ? "ติดต่อพูดคุยงาน" : "Contact Me"}</span>
            </Link>

            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-xs md:text-sm uppercase tracking-wider transition-colors font-mono border border-[#060d1f]/25 text-[#060d1f]/80 hover:border-[#060d1f] hover:text-[#060d1f]"
            >
              <Github size={15} />
              <span>GitHub</span>
            </a>

            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-xs md:text-sm uppercase tracking-wider transition-colors font-mono border border-[#060d1f]/25 text-[#060d1f]/80 hover:border-[#060d1f] hover:text-[#060d1f]"
            >
              <Linkedin size={15} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="relative pb-6 flex justify-center w-full text-[#060d1f]/35">
        <ChevronDown size={22} />
      </div>
    </section>
  );
}
