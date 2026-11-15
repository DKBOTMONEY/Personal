import type { Metadata } from "next";
import React from "react";
import Navbar from "@/components/Navbar";
import ReleaseList from "@/components/ReleaseList";
import Footer from "@/components/Footer";
import { PROFILE, PROJECTS, SITE_URL } from "@/data/projects";

export const metadata: Metadata = {
  title: `Projects & Case Studies — ${PROFILE.nameEn} (${PROFILE.nameTh})`,
  description: `Production web applications and engineering case studies by ${PROFILE.nameEn} (${PROFILE.nameTh}), including NexiCloud Cloud Gaming Platform, Hundee Group, and container infrastructure built with Next.js, TypeScript, WebSocket, and Docker.`,
  alternates: {
    canonical: "/en/projects",
    languages: {
      "th-TH": "/projects",
      "en-US": "/en/projects",
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/en/projects`,
    siteName: `${PROFILE.nameEn} (${PROFILE.nameTh})`,
    title: `Projects & Case Studies | ${PROFILE.nameEn} (${PROFILE.nameTh})`,
    description: `Production web engineering projects and case studies by ${PROFILE.nameEn} (${PROFILE.nameTh}).`,
    locale: "en_US",
  },
};

export default function EnglishProjectsPage() {
  return (
    <div lang="en" className="min-h-screen flex flex-col justify-between bg-[#f4efe6] text-[#060d1f]">
      <Navbar lang="en" variant="page" switchHref="/projects" />

      <main className="max-w-5xl w-full mx-auto px-6 md:px-16 py-14 md:py-20 space-y-12">
        <header className="border-b border-foreground/15 pb-8">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-foreground/55 font-semibold mb-3">
            Portfolio &amp; Case Studies
          </p>
          <h1 className="font-black font-display text-4xl md:text-6xl uppercase tracking-tight leading-tight mb-4">
            Projects &amp; Case Studies by {PROFILE.nameEn}
          </h1>
          <p className="text-base md:text-lg text-foreground/80 max-w-3xl leading-relaxed">
            Every project engineered by {PROFILE.nameEn} ({PROFILE.nameTh}) is documented with a structured breakdown: Business Challenge &gt; Architectural Solution &gt; Core Stack &gt; and Measurable Production Results.
          </p>
        </header>

        <ReleaseList projects={PROJECTS} lang="en" showAllLink={false} />
      </main>

      <Footer lang="en" />
    </div>
  );
}
