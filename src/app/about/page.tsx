import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StackGrid from "@/components/StackGrid";
import { PROFILE, EXPERIENCE } from "@/data/projects";
import { ArrowRight, Github, Linkedin } from "@/components/Icons";

export const metadata: Metadata = {
  title: `เกี่ยวกับ ${PROFILE.nameTh} (${PROFILE.nameEn}) — ประวัติและทักษะ Full-Stack Developer`,
  description: `ประวัติ แนวคิดการทำงาน และประสบการณ์ของ ${PROFILE.nameTh} (${PROFILE.nameEn} / ${PROFILE.nicknameTh}) Full-Stack Developer ผู้เชี่ยวชาญ Next.js, TypeScript, Node.js, PostgreSQL และ Docker`,
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const githubLink =
    PROFILE.social.find((s) => s.url.includes("github"))?.url ||
    "https://github.com/DKBOTMONEY";
  const linkedinLink =
    PROFILE.social.find((s) => s.url.includes("linkedin"))?.url ||
    "https://www.linkedin.com/in/pl1999patipan";

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#f4efe6] text-[#060d1f]">
      <Navbar lang="th" variant="page" />

      <main className="max-w-5xl w-full mx-auto px-6 md:px-16 py-14 md:py-20 space-y-16">
        {/* Page Header */}
        <header className="border-b border-foreground/15 pb-8">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-foreground/55 font-semibold mb-3">
            About · ประวัติและแนวทางการทำงาน
          </p>
          <h1 className="font-black font-display text-4xl md:text-6xl uppercase tracking-tight leading-tight mb-4">
            เกี่ยวกับ {PROFILE.nameTh} ({PROFILE.nameEn})
          </h1>
          <p className="text-base md:text-lg text-foreground/80 max-w-3xl leading-relaxed">
            {PROFILE.role} ที่มุ่งเน้นการสร้างเว็บแอปพลิเคชันคุณภาพสูงด้วย Next.js และ TypeScript ควบคู่กับการจัดการ Infrastructure ที่มั่นคงและพร้อมขยายตัว
          </p>
        </header>

        {/* Biography & Core Philosophy */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 space-y-6 bg-white/60 border border-foreground/15 p-7 self-start">
            <div>
              <span className="text-xs font-mono text-foreground/55 uppercase tracking-wider block mb-1">
                ชื่อ-นามสกุล
              </span>
              <p className="font-bold text-base text-foreground">
                นาย {PROFILE.nameTh}
              </p>
              <p className="font-mono text-xs text-foreground/75">
                Mr. {PROFILE.nameEn} ({PROFILE.nicknameTh} / {PROFILE.nicknameEn})
              </p>
            </div>

            <div>
              <span className="text-xs font-mono text-foreground/55 uppercase tracking-wider block mb-1">
                บทบาทหลัก
              </span>
              <p className="font-semibold text-sm text-foreground">{PROFILE.role}</p>
            </div>

            <div>
              <span className="text-xs font-mono text-foreground/55 uppercase tracking-wider block mb-1">
                ประสบการณ์
              </span>
              <p className="font-semibold text-sm text-foreground">
                {PROFILE.yearsExperience}
              </p>
            </div>

            <div className="pt-4 border-t border-foreground/10 flex flex-wrap gap-3">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono uppercase bg-[#060d1f] text-[#f4efe6] hover:bg-[#0c1a3b]"
              >
                <Github size={14} /> GitHub
              </a>
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono uppercase border border-foreground/25 hover:border-foreground"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="md:col-span-8 space-y-6">
            <div className="bg-white/60 border border-foreground/15 p-7 md:p-8 space-y-4">
              <h2 className="text-2xl font-bold font-display uppercase">
                จุดเริ่มต้นและแนวคิดด้านวิศวกรรมซอฟต์แวร์
              </h2>
              <p className="text-base text-foreground/85 leading-relaxed">
                {PROFILE.aboutTh}
              </p>
              <p className="text-base text-foreground/85 leading-relaxed">
                {PROFILE.aboutSecondaryTh}
              </p>
              <p className="text-base text-foreground/85 leading-relaxed">
                ในการทำงานแต่ละโปรเจกต์ {PROFILE.nameTh} ({PROFILE.nameEn}) ให้ความสำคัญกับ 3 แกนหลักเสมอ ได้แก่ 1) ประสบการณ์ผู้ใช้และความเร็วในการโหลดหน้าเว็บ (Performance &amp; Core Web Vitals) 2) โครงสร้างโค้ดและฐานข้อมูลที่มี Type Safety ชัดเจน ดูแลรักษาต่อได้ง่าย และ 3) กระบวนการส่งมอบงาน (Deployment &amp; Infrastructure) ที่ตรวจสอบซ้ำได้ผ่าน Docker และ CI/CD
              </p>
            </div>

            {/* Experience Section */}
            <div className="bg-white/60 border border-foreground/15 p-7 md:p-8 space-y-6">
              <h2 className="text-2xl font-bold font-display uppercase">
                ประสบการณ์และผลงานในระบบ Production
              </h2>
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-bold text-lg text-foreground">
                      {exp.role} — {exp.organization}
                    </h3>
                    <span className="text-xs font-mono px-3 py-1 bg-[#060d1f] text-[#c8ff00] font-semibold">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="space-y-2 pt-2">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/85">
                        <span className="font-bold text-[#060d1f]">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills breakdown */}
        <StackGrid lang="th" />

        {/* CTA */}
        <section className="p-8 bg-[#060d1f] text-[#f4efe6] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#c8ff00] mb-1">
              Ready to collaborate
            </p>
            <h2 className="text-2xl md:text-3xl font-bold font-display uppercase">
              สนใจดูผลงานจริงหรือพูดคุยเรื่องโปรเจกต์?
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#c8ff00] text-[#060d1f] font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90"
            >
              <span>ดูโปรเจกต์ทั้งหมด</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 border border-[#f4efe6]/35 text-[#f4efe6] font-mono text-xs font-semibold uppercase tracking-wider hover:border-[#f4efe6]"
            >
              ติดต่อ {PROFILE.nameTh}
            </Link>
          </div>
        </section>
      </main>

      <Footer lang="th" />
    </div>
  );
}

