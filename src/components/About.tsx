import React from "react";
import Link from "next/link";
import { PROFILE, EXPERIENCE } from "@/data/projects";
import { ArrowRight } from "@/components/Icons";

interface AboutProps {
  lang?: "th" | "en";
  showFullLink?: boolean;
}

export default function About({ lang = "th", showFullLink = true }: AboutProps) {
  return (
    <section aria-labelledby="about-heading" className="pt-4 pb-12 w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-foreground/15 pb-6 mb-10">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase mb-2 font-mono text-foreground/55 font-semibold">
            {lang === "th" ? "ประวัติและแนวคิดการทำงาน" : "Engineer Profile"}
          </p>
          <h2
            id="about-heading"
            className="font-black uppercase font-display text-3xl md:text-5xl tracking-tight"
          >
            {lang === "th"
              ? `เกี่ยวกับ ${PROFILE.nameTh}`
              : `About ${PROFILE.nameEn}`}
          </h2>
        </div>

        {showFullLink && (
          <Link
            href={lang === "th" ? "/about" : "/en/about"}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider px-4 py-2.5 border border-foreground/25 hover:border-foreground bg-white/50 text-foreground transition-colors self-start sm:self-auto"
          >
            <span>{lang === "th" ? "อ่านประวัติฉบับเต็ม" : "Full Biography"}</span>
            <ArrowRight size={14} />
          </Link>
        )}
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Quick Facts */}
        <div className="space-y-6 md:border-r md:border-foreground/15 md:pr-8">
          <div>
            <span className="text-xs font-mono text-foreground/55 uppercase tracking-widest block mb-1">
              {lang === "th" ? "ชื่อ-นามสกุล" : "Full Name"}
            </span>
            <span className="text-sm font-bold text-foreground font-sans block">
              {PROFILE.nameTh} ({PROFILE.nameEn})
            </span>
            <span className="text-xs text-foreground/65 font-mono">
              {lang === "th"
                ? `ชื่อเล่น: ${PROFILE.nicknameTh} (${PROFILE.nicknameEn})`
                : `Nickname: ${PROFILE.nicknameEn} (${PROFILE.nicknameTh})`}
            </span>
          </div>

          <div>
            <span className="text-xs font-mono text-foreground/55 uppercase tracking-widest block mb-1">
              {lang === "th" ? "ความเชี่ยวชาญหลัก" : "Development Focus"}
            </span>
            <span className="text-sm font-semibold text-foreground font-sans">
              {lang === "th" ? PROFILE.focusTh : PROFILE.focusEn}
            </span>
          </div>

          <div>
            <span className="text-xs font-mono text-foreground/55 uppercase tracking-widest block mb-1">
              {lang === "th" ? "ประสบการณ์ทำงานจริง" : "Production Experience"}
            </span>
            <span className="text-sm font-semibold text-foreground font-sans block">
              {lang === "th"
                ? PROFILE.yearsExperience
                : `Since ${PROFILE.startYear} – Present (2+ years)`}
            </span>
            <span className="text-xs text-foreground/65 font-sans">
              Hundee Group &amp; Web Application Projects
            </span>
          </div>

          <div>
            <span className="text-xs font-mono text-foreground/55 uppercase tracking-widest block mb-2">
              {lang === "th" ? "สถานะการรับงาน" : "Availability"}
            </span>
            <span className="inline-flex items-center gap-2 text-xs font-mono bg-[#060d1f] text-[#c8ff00] px-3 py-1.5 uppercase tracking-wider font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#c8ff00]" />
              {lang === "th"
                ? "พร้อมรับงาน (Full-time / Freelance)"
                : "Available for Work"}
            </span>
          </div>
        </div>

        {/* Right Column: Narrative & Timeline */}
        <div className="md:col-span-2 space-y-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold font-display uppercase text-foreground mb-3">
              {lang === "th"
                ? `${PROFILE.nameTh} (${PROFILE.nameEn}) — ${PROFILE.role}`
                : `${PROFILE.nameEn} (${PROFILE.nameTh}) — ${PROFILE.role}`}
            </h3>
            <p className="text-base text-foreground/85 leading-relaxed font-sans mb-4">
              {lang === "th" ? PROFILE.aboutTh : PROFILE.aboutEn}
            </p>
            <p className="text-base text-foreground/80 leading-relaxed font-sans">
              {lang === "th" ? PROFILE.aboutSecondaryTh : PROFILE.aboutSecondaryEn}
            </p>
          </div>

          {/* Experience Timeline Card */}
          <div className="border border-foreground/15 bg-white/55 p-6 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-foreground/60 font-bold">
              {lang === "th" ? "เส้นทางการทำงานและโปรเจกต์สำคัญ" : "Experience & Project Timeline"}
            </h4>
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-bold text-sm text-foreground">
                    {lang === "th" ? exp.role : exp.roleEn} · {exp.organization}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-0.5 bg-[#060d1f]/10 text-foreground font-semibold">
                    {lang === "th" ? exp.period : exp.periodEn}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-foreground/75 leading-relaxed">
                  {lang === "th" ? exp.description : exp.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
