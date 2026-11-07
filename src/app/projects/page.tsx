import type { Metadata } from "next";
import React from "react";
import Navbar from "@/components/Navbar";
import ReleaseList from "@/components/ReleaseList";
import Footer from "@/components/Footer";
import { PROFILE, PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: `ผลงานและกรณีศึกษา (Projects) — ${PROFILE.nameTh} (${PROFILE.nameEn})`,
  description: `รวมโปรเจกต์และกรณีศึกษาการพัฒนาเว็บแอปพลิเคชันของ ${PROFILE.nameTh} (${PROFILE.nameEn}) เช่น แพลตฟอร์ม Hundee Group และระบบโครงสร้างพื้นฐานด้วย Next.js, TypeScript และ Docker`,
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#f4efe6] text-[#060d1f]">
      <Navbar lang="th" variant="page" />

      <main className="max-w-5xl w-full mx-auto px-6 md:px-16 py-14 md:py-20 space-y-12">
        <header className="border-b border-foreground/15 pb-8">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-foreground/55 font-semibold mb-3">
            Portfolio &amp; Case Studies
          </p>
          <h1 className="font-black font-display text-4xl md:text-6xl uppercase tracking-tight leading-tight mb-4">
            ผลงานและกรณีศึกษาของ {PROFILE.nameTh}
          </h1>
          <p className="text-base md:text-lg text-foreground/80 max-w-3xl leading-relaxed">
            ทุกโปรเจกต์ของ {PROFILE.nameTh} ({PROFILE.nameEn}) สรุปตามโครงสร้าง โจทย์ธุรกิจ &gt; แนวทางแก้ปัญหาเชิงวิศวกรรม &gt; เทคโนโลยีที่ใช้ &gt; และผลลัพธ์ที่วัดผลได้จริง
          </p>
        </header>

        <ReleaseList projects={PROJECTS} lang="th" showAllLink={false} />
      </main>

      <Footer lang="th" />
    </div>
  );
}

