import type { Metadata } from "next";
import React from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { PROFILE, SITE_URL } from "@/data/projects";

export const metadata: Metadata = {
  title: `Contact ${PROFILE.nameEn} (${PROFILE.nameTh}) — Full-Stack Developer`,
  description: `Get in touch with ${PROFILE.nameEn} (${PROFILE.nameTh}) for full-stack web application development with Next.js and TypeScript, infrastructure consulting, or engineering roles.`,
  alternates: {
    canonical: "/en/contact",
    languages: {
      "th-TH": "/contact",
      "en-US": "/en/contact",
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/en/contact`,
    siteName: `${PROFILE.nameEn} (${PROFILE.nameTh})`,
    title: `Contact ${PROFILE.nameEn} (${PROFILE.nameTh}) | ${PROFILE.role}`,
    description: `Contact ${PROFILE.nameEn} (${PROFILE.nameTh}) for web development and infrastructure projects.`,
    locale: "en_US",
  },
};

export default function EnglishContactPage() {
  return (
    <div lang="en" className="min-h-screen flex flex-col justify-between bg-[#f4efe6] text-[#060d1f]">
      <Navbar lang="en" variant="page" switchHref="/contact" />

      <main className="max-w-5xl w-full mx-auto px-6 md:px-16 py-14 md:py-20">
        <header className="mb-8">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-foreground/55 font-semibold mb-3">
            Contact · Project Inquiries &amp; Collaboration
          </p>
          <h1 className="font-black font-display text-4xl md:text-6xl uppercase tracking-tight leading-tight mb-4">
            Contact {PROFILE.nameEn} ({PROFILE.nameTh})
          </h1>
          <p className="text-base md:text-lg text-foreground/80 max-w-2xl leading-relaxed">
            Available for full-stack web application development, cloud/container infrastructure architecture, or Full-Stack Developer roles.
          </p>
        </header>

        <Contact lang="en" />
      </main>

      <Footer lang="en" />
    </div>
  );
}
