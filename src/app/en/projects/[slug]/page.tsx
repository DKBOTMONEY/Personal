import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROFILE, PROJECTS, SITE_URL, getProjectBySlug } from "@/data/projects";
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
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.titleEn} — Case Study by ${PROFILE.nameEn} (${PROFILE.nameTh})`,
    description: `${project.summaryEn} Engineered by ${PROFILE.nameEn} (${PROFILE.nameTh}) using ${project.tech.join(", ")}.`,
    alternates: {
      canonical: `/en/projects/${project.slug}`,
      languages: {
        "th-TH": `/projects/${project.slug}`,
        "en-US": `/en/projects/${project.slug}`,
      },
    },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/en/projects/${project.slug}`,
      title: `${project.titleEn} | ${PROFILE.nameEn} (${PROFILE.nameTh})`,
      description: project.summaryEn,
      locale: "en_US",
    },
  };
}

export default async function EnglishProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div lang="en" className="min-h-screen flex flex-col justify-between bg-[#f4efe6] text-[#060d1f]">
      <Navbar lang="en" variant="page" switchHref={`/projects/${project.slug}`} />

      <main className="max-w-4xl w-full mx-auto px-6 md:px-16 py-14 md:py-20 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-foreground/60">
          <Link href="/en" className="hover:text-foreground">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/en/projects" className="hover:text-foreground">
            All Projects
          </Link>{" "}
          / <span className="text-foreground font-semibold">{project.titleEn}</span>
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
            {project.titleEn}
          </h1>
          <p className="text-sm font-mono text-foreground/65">{project.title}</p>

          <p className="text-base md:text-lg text-foreground/85 leading-relaxed pt-2">
            {project.summaryEn}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#060d1f] text-[#f4efe6] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#0c1a3b] transition-colors"
              >
                <span>Open Live Website (Demo)</span>
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
              Lead Engineer &amp; Architect
            </span>
            <p className="text-sm font-bold text-foreground">
              {PROFILE.nameEn} ({PROFILE.nameTh})
            </p>
            <p className="text-xs text-foreground/70">{project.roleEn}</p>
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-foreground/55 block mb-1">
              Timeline
            </span>
            <p className="text-sm font-bold text-foreground">{project.period}</p>
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-foreground/55 block mb-1">
              Core Tech Stack
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
                    Synchronizes live Host PC status, relays 4-digit Moonlight pairing PINs, and streams session expiry alerts with exponential backoff reconnection.
                  </p>
                </div>
                <div className="p-4 border border-[#f4efe6]/15 bg-white/5 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#c8ff00]">
                    Layer 02 · Wallet, Auth &amp; Security
                  </span>
                  <p className="font-bold text-sm">Stripe PromptPay + TOTP 2FA</p>
                  <p className="text-xs text-[#f4efe6]/70 leading-relaxed">
                    Automated 3–5 second QR top-ups backed by a decimal-precision Audit Ledger, Google OAuth, httpOnly cookies, and Admin TOTP 2FA.
                  </p>
                </div>
                <div className="p-4 border border-[#f4efe6]/15 bg-white/5 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#c8ff00]">
                    Layer 03 · Host PC Orchestration
                  </span>
                  <p className="font-bold text-sm">Moonlight/Sunshine + WOL &amp; SSH</p>
                  <p className="text-xs text-[#f4efe6]/70 leading-relaxed">
                    Streams 4K 60fps games with ~1ms overhead, manages remote power via Wake-on-LAN/SSH, and sanitizes sessions automatically.
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
                    Server-rendered views via React Server Components to minimize client JS bundles and deliver responsive Tailwind CSS layouts.
                  </p>
                </div>
                <div className="p-4 border border-[#f4efe6]/15 bg-white/5 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#c8ff00]">
                    Layer 02 · Application Logic
                  </span>
                  <p className="font-bold text-sm">TypeScript &amp; Structured SEO</p>
                  <p className="text-xs text-[#f4efe6]/70 leading-relaxed">
                    End-to-end TypeScript safety alongside automated per-route metadata, dynamic sitemaps, and Schema.org JSON-LD.
                  </p>
                </div>
                <div className="p-4 border border-[#f4efe6]/15 bg-white/5 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#c8ff00]">
                    Layer 03 · Deployment
                  </span>
                  <p className="font-bold text-sm">Automated CI/CD &amp; Hosting</p>
                  <p className="text-xs text-[#f4efe6]/70 leading-relaxed">
                    Automated build verification from Git repositories and resilient delivery over edge networks or Docker/Nginx containers.
                  </p>
                </div>
              </>
            )}
          </div>

          <figcaption className="text-xs font-mono text-[#f4efe6]/60 pt-2 border-t border-[#f4efe6]/10">
            System architecture overview for {project.titleEn} — designed and engineered by {PROFILE.nameEn} ({PROFILE.nameTh})
          </figcaption>
        </figure>

        {/* 1. Problem */}
        <section className="bg-white/60 border border-foreground/15 p-7 md:p-8 space-y-3">
          <h2 className="text-xl md:text-2xl font-bold font-display uppercase text-foreground">
            1. The Engineering Challenge
          </h2>
          <p className="text-base text-foreground/85 leading-relaxed">
            {project.problemEn}
          </p>
        </section>

        {/* 2. Solution */}
        <section className="bg-white/60 border border-foreground/15 p-7 md:p-8 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold font-display uppercase text-foreground">
            2. Solution &amp; Technical Execution
          </h2>
          <ul className="space-y-3">
            {project.solutionEn.map((step, i) => (
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
            3. Production Results &amp; Impact
          </h2>
          <ul className="space-y-3">
            {project.resultsEn.map((res, i) => (
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
            href="/en/projects"
            className="text-xs font-mono font-bold uppercase tracking-wider text-foreground hover:underline"
          >
            ← Back to All Projects
          </Link>
          <Link
            href="/en/contact"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#060d1f] text-[#f4efe6] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#0c1a3b]"
          >
            <span>Discuss a Similar Project with {PROFILE.nameEn}</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </main>

      <Footer lang="en" />
    </div>
  );
}
