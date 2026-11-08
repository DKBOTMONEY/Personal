import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROFILE, PROJECTS, getProjectBySlug } from "@/data/projects";
import { ExternalLink, ArrowRight } from "@/components/Icons";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "ไม่พบโปรเจกต์",
    };
  }

  return {
    title: `${project.title} — กรณีศึกษาโดย ${PROFILE.nameTh} (${PROFILE.nameEn})`,
    description: `${project.summary} พัฒนาโดย ${PROFILE.nameTh} (${PROFILE.nameEn}) ด้วย ${project.tech.join(", ")}`,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      type: "article",
      title: `${project.title} | ${PROFILE.nameTh} (${PROFILE.nameEn})`,
      description: project.summary,
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#f4efe6] text-[#060d1f]">
      <Navbar lang="th" variant="page" />

      <main className="max-w-4xl w-full mx-auto px-6 md:px-16 py-14 md:py-20 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-foreground/60">
          <Link href="/" className="hover:text-foreground">
            หน้าแรก
          </Link>{" "}
          /{" "}
          <Link href="/projects" className="hover:text-foreground">
            โปรเจกต์ทั้งหมด
          </Link>{" "}
          / <span className="text-foreground font-semibold">{project.title}</span>
        </nav>

        {/* Header */}
        <header className="border-b border-foreground/15 pb-8 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-2.5 py-1 bg-[#060d1f] text-[#c8ff00] text-xs font-mono font-bold uppercase tracking-wider">
              Case Study
            </span>
            <span className="text-xs font-mono text-foreground/65 font-semibold uppercase">
              {project.clientOrContext} · {project.period}
            </span>
          </div>

          <h1 className="font-black font-display text-3xl md:text-5xl leading-tight tracking-tight">
            {project.title}
          </h1>
          <p className="text-sm font-mono text-foreground/65">{project.titleEn}</p>

          <p className="text-base md:text-lg text-foreground/85 leading-relaxed pt-2">
            {project.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#060d1f] text-[#f4efe6] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#0c1a3b] transition-colors"
              >
                <span>เปิดดูเว็บไซต์จริง (Live Demo)</span>
                <ExternalLink size={14} />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-foreground/25 bg-white/50 text-foreground font-mono text-xs font-semibold uppercase tracking-wider hover:border-foreground transition-colors"
              >
                <span>GitHub Repository ↗</span>
              </a>
            )}
          </div>
        </header>

        {/* Meta Overview Bar */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white/60 border border-foreground/15 p-6">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-foreground/55 block mb-1">
              ผู้รับผิดชอบและพัฒนา
            </span>
            <p className="text-sm font-bold text-foreground">
              {PROFILE.nameTh} ({PROFILE.nameEn})
            </p>
            <p className="text-xs text-foreground/70">{project.role}</p>
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-foreground/55 block mb-1">
              ช่วงเวลาดำเนินงาน
            </span>
            <p className="text-sm font-bold text-foreground">{project.period}</p>
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-foreground/55 block mb-1">
              เทคโนโลยีหลัก (Stack)
            </span>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-[11px] font-mono bg-[#060d1f] text-[#c8ff00]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Architectural / Screen Preview Diagram */}
        <figure className="border border-foreground/15 bg-[#060d1f] text-[#f4efe6] p-6 md:p-8 space-y-4">
          <div className="flex items-center justify-between border-b border-[#f4efe6]/15 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#c8ff00]" />
            </div>
            <span className="text-xs font-mono text-[#f4efe6]/60">
              {project.url || "https://www.pl-patipan.in.th"}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
            {project.slug === "nexicloud" ? (
              <>
                <div className="p-4 border border-[#f4efe6]/15 bg-white/5 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#c8ff00]">
                    Layer 01 · Client &amp; Real-Time Signaling
                  </span>
                  <p className="font-bold text-sm">Next.js + WebSocket (wss://)</p>
                  <p className="text-xs text-[#f4efe6]/70 leading-relaxed">
                    ซิงค์สถานะเครื่องโฮสต์แบบเรียลไทม์ ส่งรหัสจับคู่ PIN 4 หลัก และแจ้งเตือนเวลาเช่าผ่าน WebSocket พร้อม Exponential Backoff
                  </p>
                </div>
                <div className="p-4 border border-[#f4efe6]/15 bg-white/5 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#c8ff00]">
                    Layer 02 · Wallet, Auth &amp; Security
                  </span>
                  <p className="font-bold text-sm">Stripe PromptPay + TOTP 2FA</p>
                  <p className="text-xs text-[#f4efe6]/70 leading-relaxed">
                    เติมเงินอัตโนมัติใน 3–5 วินาทีพร้อม Audit Ledger, Google OAuth, httpOnly Cookie และระบบ 2FA สำหรับผู้ดูแล
                  </p>
                </div>
                <div className="p-4 border border-[#f4efe6]/15 bg-white/5 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#c8ff00]">
                    Layer 03 · Host PC Orchestration
                  </span>
                  <p className="font-bold text-sm">Moonlight/Sunshine + WOL &amp; SSH</p>
                  <p className="text-xs text-[#f4efe6]/70 leading-relaxed">
                    สตรีมเกม 4K 60fps ความหน่วงต่ำ สั่งเปิด-ปิดเครื่องระยะไกลด้วย Wake-on-LAN/SSH และล้างข้อมูลเซสชันอัตโนมัติ
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="p-4 border border-[#f4efe6]/15 bg-white/5 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#c8ff00]">
                    Layer 01 · Client &amp; Edge
                  </span>
                  <p className="font-bold text-sm">Responsive UI &amp; App Router</p>
                  <p className="text-xs text-[#f4efe6]/70 leading-relaxed">
                    เรนเดอร์หน้าเว็บด้วย React Server Components ลดขนาด JS และรองรับทุกหน้าจอด้วย Tailwind CSS
                  </p>
                </div>
                <div className="p-4 border border-[#f4efe6]/15 bg-white/5 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#c8ff00]">
                    Layer 02 · Application Logic
                  </span>
                  <p className="font-bold text-sm">TypeScript &amp; Structured SEO</p>
                  <p className="text-xs text-[#f4efe6]/70 leading-relaxed">
                    ควบคุม Type Safety ทั้งระบบ พร้อมสร้าง Metadata, Sitemap และ Schema.org JSON-LD อัตโนมัติ
                  </p>
                </div>
                <div className="p-4 border border-[#f4efe6]/15 bg-white/5 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#c8ff00]">
                    Layer 03 · Deployment
                  </span>
                  <p className="font-bold text-sm">Automated CI/CD &amp; Hosting</p>
                  <p className="text-xs text-[#f4efe6]/70 leading-relaxed">
                    ตรวจสอบ Build อัตโนมัติจาก Git Repository และเผยแพร่ผ่าน CDN/Container ที่มีความเสถียรสูง
                  </p>
                </div>
              </>
            )}
          </div>

          <figcaption className="text-xs font-mono text-[#f4efe6]/60 pt-2 border-t border-[#f4efe6]/10">
            แผนภาพโครงสร้างสถาปัตยกรรมของโปรเจกต์ {project.title} ออกแบบและพัฒนาโดย {PROFILE.nameTh} ({PROFILE.nameEn})
          </figcaption>
        </figure>

        {/* 1. Problem */}
        <section className="bg-white/60 border border-foreground/15 p-7 md:p-8 space-y-3">
          <h2 className="text-xl md:text-2xl font-bold font-display uppercase text-foreground">
            1. โจทย์และความท้าทาย (The Challenge)
          </h2>
          <p className="text-base text-foreground/85 leading-relaxed">
            {project.problem}
          </p>
          <p className="text-sm text-foreground/65 leading-relaxed pt-1 border-t border-foreground/10">
            <strong>EN:</strong> {project.problemEn}
          </p>
        </section>

        {/* 2. Solution */}
        <section className="bg-white/60 border border-foreground/15 p-7 md:p-8 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold font-display uppercase text-foreground">
            2. แนวทางการออกแบบและสิ่งที่ลงมือทำ (Solution &amp; Execution)
          </h2>
          <ul className="space-y-3">
            {project.solution.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-base text-foreground/85 leading-relaxed">
                <span className="font-mono font-bold text-xs px-2 py-0.5 bg-[#060d1f] text-[#c8ff00] mt-1">
                  0{i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 3. Results */}
        <section className="bg-white/60 border border-foreground/15 p-7 md:p-8 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold font-display uppercase text-foreground">
            3. ผลลัพธ์ที่ได้ (Results &amp; Impact)
          </h2>
          <ul className="space-y-3">
            {project.results.map((res, i) => (
              <li key={i} className="flex items-start gap-3 text-base text-foreground/85 leading-relaxed">
                <span className="font-bold text-[#060d1f]">✓</span>
                <span>{res}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-foreground/15">
          <Link
            href="/projects"
            className="text-xs font-mono font-bold uppercase tracking-wider text-foreground hover:underline"
          >
            ← กลับไปหน้ารวมโปรเจกต์
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#060d1f] text-[#f4efe6] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#0c1a3b]"
          >
            <span>ปรึกษาโปรเจกต์ลักษณะนี้กับ {PROFILE.nameTh}</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </main>

      <Footer lang="th" />
    </div>
  );
}

