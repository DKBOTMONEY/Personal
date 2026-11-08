import React from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/projects";
import { ArrowRight } from "@/components/Icons";

interface BlogPreviewProps {
  lang?: "th" | "en";
}

export default function BlogPreview({ lang = "th" }: BlogPreviewProps) {
  return (
    <section aria-labelledby="blog-preview-heading" className="pt-4 pb-12 w-full space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-foreground/15 pb-6">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase mb-2 font-mono text-foreground/55 font-semibold">
            {lang === "th" ? "บทความทางเทคนิค" : "Engineering Articles"}
          </p>
          <h2
            id="blog-preview-heading"
            className="font-black uppercase font-display text-3xl md:text-5xl tracking-tight"
          >
            {lang === "th" ? "บทความและบันทึกจากงานจริง" : "Technical Blog"}
          </h2>
        </div>

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider px-4 py-2.5 border border-foreground/25 hover:border-foreground bg-white/50 text-foreground transition-colors self-start sm:self-auto"
        >
          <span>{lang === "th" ? "อ่านบทความทั้งหมด" : "All Articles"}</span>
          <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.slug}
            className="flex flex-col justify-between p-6 border border-foreground/15 bg-white/60 hover:border-foreground/45 transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2 text-[11px] font-mono text-foreground/55 mb-3">
                <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                <span>{post.readingTime}</span>
              </div>

              <h3 className="font-bold font-display text-xl text-foreground leading-snug mb-3">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {lang === "th" ? post.title : post.titleEn}
                </Link>
              </h3>

              <p className="text-xs text-foreground/75 leading-relaxed mb-4">
                {lang === "th" ? post.summary : post.summaryEn}
              </p>
            </div>

            <div className="pt-4 border-t border-foreground/10 flex items-center justify-between">
              <span className="text-[11px] font-mono text-foreground/60">
                {lang === "th" ? post.author : post.authorEn}
              </span>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-foreground hover:underline"
              >
                <span>{lang === "th" ? "อ่านต่อ" : "Read"}</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

