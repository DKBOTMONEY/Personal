import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROFILE, SITE_URL, BLOG_POSTS, getBlogPostBySlug } from "@/data/projects";
import { ArrowRight } from "@/components/Icons";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "ไม่พบบทความ",
    };
  }

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: `${post.title} | ${PROFILE.nameTh} (${PROFILE.nameEn})`,
      description: post.summary,
      authors: [PROFILE.nameTh, PROFILE.nameEn],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: post.title,
    alternativeHeadline: post.titleEn,
    description: post.summary,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: PROFILE.nameTh,
      alternateName: PROFILE.nameEn,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: PROFILE.nameTh,
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    keywords: post.tags.join(", "),
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#f4efe6] text-[#060d1f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar lang="th" variant="page" />

      <main className="max-w-3xl w-full mx-auto px-6 md:px-12 py-14 md:py-20 space-y-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-foreground/60">
          <Link href="/" className="hover:text-foreground">
            หน้าแรก
          </Link>{" "}
          /{" "}
          <Link href="/blog" className="hover:text-foreground">
            บทความทั้งหมด
          </Link>{" "}
          / <span className="text-foreground font-semibold">{post.title}</span>
        </nav>

        {/* Article Header */}
        <header className="border-b border-foreground/15 pb-8 space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 bg-[#060d1f] text-[#c8ff00] text-xs font-mono font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-black font-display text-3xl md:text-5xl leading-tight tracking-tight">
            {post.title}
          </h1>
          <p className="text-xs md:text-sm font-mono text-foreground/65">{post.titleEn}</p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-foreground/70">
            <span>
              ผู้เขียน: <strong>{post.author}</strong>
            </span>
            <span>·</span>
            <time dateTime={post.publishedAt}>วันที่เผยแพร่: {post.publishedAt}</time>
            <span>·</span>
            <time dateTime={post.updatedAt}>อัปเดตล่าสุด: {post.updatedAt}</time>
            <span>·</span>
            <span>อ่านประมาณ {post.readingTime}</span>
          </div>
        </header>

        {/* Article Sections */}
        <article className="space-y-10">
          {post.sections.map((sec, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold font-display text-foreground">
                {sec.heading}
              </h2>
              {sec.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-base text-foreground/85 leading-relaxed font-sans"
                >
                  {p}
                </p>
              ))}

              {sec.code && (
                <div className="border border-foreground/20 bg-[#060d1f] text-[#f4efe6] overflow-hidden">
                  {sec.code.filename && (
                    <div className="px-4 py-2 bg-white/10 border-b border-white/10 text-xs font-mono text-[#c8ff00] flex items-center justify-between">
                      <span>{sec.code.filename}</span>
                      <span className="uppercase text-[10px] text-[#f4efe6]/60">
                        {sec.code.language}
                      </span>
                    </div>
                  )}
                  <pre className="p-4 md:p-5 text-xs md:text-sm font-mono overflow-x-auto leading-relaxed">
                    <code>{sec.code.snippet}</code>
                  </pre>
                </div>
              )}
            </section>
          ))}
        </article>

        {/* Author Bio Box */}
        <aside className="p-6 md:p-8 border border-foreground/20 bg-white/70 space-y-3">
          <p className="text-xs font-mono uppercase tracking-widest text-foreground/55 font-bold">
            เกี่ยวกับผู้เขียน (About the Author)
          </p>
          <h3 className="text-xl font-bold font-display">
            {PROFILE.nameTh} ({PROFILE.nameEn}) — {PROFILE.role}
          </h3>
          <p className="text-sm text-foreground/80 leading-relaxed">
            {PROFILE.taglineTh}
          </p>
          <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono font-bold uppercase tracking-wider">
            <Link href="/about" className="underline hover:text-foreground/70">
              อ่านประวัติของ {PROFILE.nameTh} →
            </Link>
            <Link href="/projects" className="underline hover:text-foreground/70">
              ดูโปรเจกต์ที่พัฒนา →
            </Link>
          </div>
        </aside>

        {/* Footer Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-foreground/15">
          <Link
            href="/blog"
            className="text-xs font-mono font-bold uppercase tracking-wider text-foreground hover:underline"
          >
            ← กลับไปหน้ารวมบทความ
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#060d1f] text-[#f4efe6] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#0c1a3b]"
          >
            <span>ติดต่อพูดคุยกับ {PROFILE.nameTh}</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </main>

      <Footer lang="th" />
    </div>
  );
}

