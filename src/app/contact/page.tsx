import type { Metadata } from "next";
import React from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { PROFILE } from "@/data/projects";

export const metadata: Metadata = {
  title: `ติดต่อ ${PROFILE.nameTh} (${PROFILE.nameEn}) — ช่องทางติดต่อและร่วมงาน`,
  description: `ติดต่อ ${PROFILE.nameTh} (${PROFILE.nameEn}) Full-Stack Developer สำหรับงานพัฒนาเว็บแอปพลิเคชัน Next.js, TypeScript, การวางโครงสร้างระบบ หรือตำแหน่งงาน Full-Stack`,
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#f4efe6] text-[#060d1f]">
      <Navbar lang="th" variant="page" />

      <main className="max-w-5xl w-full mx-auto px-6 md:px-16 py-14 md:py-20">
        <header className="mb-8">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-foreground/55 font-semibold mb-3">
            Contact · ติดต่อสอบถามและร่วมงาน
          </p>
          <h1 className="font-black font-display text-4xl md:text-6xl uppercase tracking-tight leading-tight mb-4">
            ติดต่อ {PROFILE.nameTh} ({PROFILE.nameEn})
          </h1>
          <p className="text-base md:text-lg text-foreground/80 max-w-2xl leading-relaxed">
            พร้อมพูดคุยเกี่ยวกับการพัฒนาเว็บแอปพลิเคชัน โครงสร้างพื้นฐานเซิร์ฟเวอร์ หรือโอกาสร่วมงานในตำแหน่ง Full-Stack Developer
          </p>
        </header>

        <Contact lang="th" />
      </main>

      <Footer lang="th" />
    </div>
  );
}

