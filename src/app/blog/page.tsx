import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROFILE, BLOG_POSTS } from "@/data/projects";
import { ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: `บทความทางเทคนิค (Technical Blog) — ${PROFILE.nameTh} (${PROFILE.nameEn})`,
  description: `บทความและแนวทางการพัฒนาเว็บแอปพลิเคชันด้วย Next.js, TypeScript, Prisma, PostgreSQL และการดูแลระบบด้วย Docker/Nginx เขียนโดย ${PROFILE.nameTh} (${PROFILE.nameEn})`,
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#f4efe6] text-[#060d1f]">
      <Navbar lang="th" variant="page" />

      <main className="max-w-5xl w-full mx-auto px-6 md:px-16 py-14 md:py-20 space-y-12">
        <header className="border-b border-foreground/15 pb-8">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-foreground/55 font-semibold mb-3">
            Engineering Blog · บันทึกจากงานจริง
          </p>
          <h1 className="font-black font-display text-4xl md:text-6xl uppercase tracking-tight leading-tight mb-4">
            บทความโดย {PROFILE.nameTh} ({PROFILE.nameEn})
          </h1>
          <p className="text-base md:text-lg text-foreground/80 max-w-3xl leading-relaxed">
            รวบรวมแนวทางการเขียนโค้ด การออกแบบฐานข้อมูล และการตั้งค่าโครงสร้างพื้นฐาน (Docker, Nginx, CI/CD) จากประสบการณ์ทำงานจริงของ {PROFILE.nameTh}
          </p>
        </header>

        <div className="space-y-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="p-7 md:p-8 border border-foreground/15 bg-white/60 hover:border-foreground/45 transition-all"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-foreground/60 mb-3">
                <time dateTime={post.publishedAt}>เผยแพร่: {post.publishedAt}</time>
                <span>·</span>
                <span>เวลาอ่าน {post.readingTime}</span>
                <span>·</span>
                <span>ผู้เขียน: {post.author}</span>
              </div>

              <h2 className="font-bold font-display text-2xl md:text-3xl text-foreground leading-snug mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-xs font-mono text-foreground/55 mb-4">{post.titleEn}</p>

              <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-5">
                {post.summary}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-foreground/10">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[11px] font-mono bg-[#060d1f] text-[#c8ff00]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#060d1f] text-[#f4efe6] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#0c1a3b] transition-colors"
                >
                  <span>อ่านบทความฉบับเต็ม</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer lang="th" />
    </div>
  );
}

