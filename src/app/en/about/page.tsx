import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StackGrid from "@/components/StackGrid";
import { PROFILE, EXPERIENCE, SITE_URL } from "@/data/projects";
import { ArrowRight, Github, Linkedin } from "@/components/Icons";

export const metadata: Metadata = {
  title: `About ${PROFILE.nameEn} (${PROFILE.nameTh}) — Full-Stack Developer`,
  description: `Biography, engineering philosophy, and production experience of ${PROFILE.nameEn} (${PROFILE.nameTh}, Bank), a Full-Stack Developer specializing in Next.js, TypeScript, Node.js, PostgreSQL, and Docker.`,
  alternates: {
    canonical: "/en/about",
    languages: {
      "th-TH": "/about",
      "en-US": "/en/about",
    },
  },
  openGraph: {
    type: "profile",
    url: `${SITE_URL}/en/about`,
    siteName: `${PROFILE.nameEn} (${PROFILE.nameTh})`,
    title: `About ${PROFILE.nameEn} (${PROFILE.nameTh}) | ${PROFILE.role}`,
    description: `Biography and technical stack of ${PROFILE.nameEn} (${PROFILE.nameTh}), Full-Stack Developer.`,
    locale: "en_US",
  },
};

export default function EnglishAboutPage() {
  const githubLink =
    PROFILE.social.find((s) => s.url.includes("github"))?.url ||
    "https://github.com/DKBOTMONEY";
  const linkedinLink =
    PROFILE.social.find((s) => s.url.includes("linkedin"))?.url ||
    "https://www.linkedin.com/in/pl1999patipan";

  return (
    <div lang="en" className="min-h-screen flex flex-col justify-between bg-[#f4efe6] text-[#060d1f]">
      <Navbar lang="en" variant="page" />

      <main className="max-w-5xl w-full mx-auto px-6 md:px-16 py-14 md:py-20 space-y-16">
        {/* Page Header */}
        <header className="border-b border-foreground/15 pb-8">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-foreground/55 font-semibold mb-3">
            About · Biography &amp; Engineering Philosophy
          </p>
          <h1 className="font-black font-display text-4xl md:text-6xl uppercase tracking-tight leading-tight mb-4">
            About {PROFILE.nameEn} ({PROFILE.nameTh})
          </h1>
          <p className="text-base md:text-lg text-foreground/80 max-w-3xl leading-relaxed">
            {PROFILE.role} focused on building fast, type-safe web applications with Next.js and TypeScript alongside reliable Docker and Linux server infrastructure.
          </p>
        </header>

        {/* Biography & Core Philosophy */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 space-y-6 bg-white/60 border border-foreground/15 p-7 self-start">
            <div>
              <span className="text-xs font-mono text-foreground/55 uppercase tracking-wider block mb-1">
                Full Name
              </span>
              <p className="font-bold text-base text-foreground">
                Mr. {PROFILE.nameEn}
              </p>
              <p className="font-mono text-xs text-foreground/75">
                นาย {PROFILE.nameTh} ({PROFILE.nicknameEn} / {PROFILE.nicknameTh})
              </p>
            </div>

            <div>
              <span className="text-xs font-mono text-foreground/55 uppercase tracking-wider block mb-1">
                Primary Role
              </span>
              <p className="font-semibold text-sm text-foreground">{PROFILE.role}</p>
            </div>

            <div>
              <span className="text-xs font-mono text-foreground/55 uppercase tracking-wider block mb-1">
                Experience
              </span>
              <p className="font-semibold text-sm text-foreground">
                Since {PROFILE.startYear} – Present (2+ years)
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
                Background &amp; Software Engineering Approach
              </h2>
              <p className="text-base text-foreground/85 leading-relaxed">
                {PROFILE.aboutEn}
              </p>
              <p className="text-base text-foreground/85 leading-relaxed">
                {PROFILE.aboutSecondaryEn}
              </p>
              <p className="text-base text-foreground/85 leading-relaxed">
                Across every project, {PROFILE.nameEn} ({PROFILE.nameTh}) prioritizes three pillars: 1) User experience and Core Web Vitals performance, 2) End-to-end TypeScript and database schema safety with Prisma and PostgreSQL, and 3) Reproducible deployments powered by Docker, Nginx, and automated CI/CD pipelines.
              </p>
            </div>

            {/* Experience Section */}
            <div className="bg-white/60 border border-foreground/15 p-7 md:p-8 space-y-6">
              <h2 className="text-2xl font-bold font-display uppercase">
                Production Experience
              </h2>
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-bold text-lg text-foreground">
                      {exp.roleEn} — Hundee Group &amp; Business Web Platforms
                    </h3>
                    <span className="text-xs font-mono px-3 py-1 bg-[#060d1f] text-[#c8ff00] font-semibold">
                      {exp.periodEn}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {exp.descriptionEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills breakdown */}
        <StackGrid lang="en" />

        {/* CTA */}
        <section className="p-8 bg-[#060d1f] text-[#f4efe6] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#c8ff00] mb-1">
              Ready to collaborate
            </p>
            <h2 className="text-2xl md:text-3xl font-bold font-display uppercase">
              Interested in working with {PROFILE.nameEn}?
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#c8ff00] text-[#060d1f] font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90"
            >
              <span>View Projects</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 border border-[#f4efe6]/35 text-[#f4efe6] font-mono text-xs font-semibold uppercase tracking-wider hover:border-[#f4efe6]"
            >
              Contact {PROFILE.nameEn}
            </Link>
          </div>
        </section>
      </main>

      <Footer lang="en" />
    </div>
  );
}

