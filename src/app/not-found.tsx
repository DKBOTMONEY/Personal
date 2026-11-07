import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "@/components/Icons";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#f4efe6] text-[#060d1f]">
      <Navbar lang="th" variant="page" />

      <main className="max-w-3xl mx-auto px-6 md:px-16 py-24 text-center space-y-6">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-foreground/55 font-semibold">
          Error 404 · Page Not Found
        </p>
        <h1 className="font-black font-display text-5xl md:text-7xl uppercase tracking-tight">
          ไม่พบหน้าที่คุณต้องการ
        </h1>
        <p className="text-base text-foreground/75 leading-relaxed max-w-xl mx-auto">
          ลิงก์ที่คุณเข้ามาอาจถูกย้ายหรือพิมพ์ไม่ถูกต้อง คุณสามารถกลับไปยังหน้าหลักของ ปฏิภาณ พลยิ่ง (Patipan Plonying) หรือเลือกดูหน้าอื่นๆ ด้านล่างได้ครับ
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#060d1f] text-[#f4efe6] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#0c1a3b] transition-colors"
          >
            <span>กลับหน้าแรก (Home)</span>
            <ArrowRight size={14} />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-3.5 border border-foreground/25 bg-white/50 text-foreground font-mono text-xs font-semibold uppercase tracking-wider hover:border-foreground transition-colors"
          >
            ดูโปรเจกต์
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-3.5 border border-foreground/25 bg-white/50 text-foreground font-mono text-xs font-semibold uppercase tracking-wider hover:border-foreground transition-colors"
          >
            อ่านบทความ
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3.5 border border-foreground/25 bg-white/50 text-foreground font-mono text-xs font-semibold uppercase tracking-wider hover:border-foreground transition-colors"
          >
            ติดต่อ
          </Link>
        </div>
      </main>

      <Footer lang="th" />
    </div>
  );
}

