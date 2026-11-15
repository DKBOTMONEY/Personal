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
      title: "Article Not Found",
    };
  }

  return {
    title: post.titleEn,
    description: post.summaryEn,
    alternates: {
      canonical: `/en/blog/${post.slug}`,
      languages: {
        "th-TH": `/blog/${post.slug}`,
        "en-US": `/en/blog/${post.slug}`,
      },
    },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/en/blog/${post.slug}`,
      title: `${post.titleEn} | ${PROFILE.nameEn} (${PROFILE.nameTh})`,
      description: post.summaryEn,
      authors: [PROFILE.nameEn, PROFILE.nameTh],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      locale: "en_US",
    },
  };
}

export default async function EnglishBlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: post.titleEn,
    alternativeHeadline: post.title,
    description: post.summaryEn,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      name: PROFILE.nameEn,
      alternateName: PROFILE.nameTh,
      url: `${SITE_URL}/en`,
    },
    publisher: {
      "@type": "Person",
      name: PROFILE.nameEn,
      url: `${SITE_URL}/en`,
    },
    mainEntityOfPage: `${SITE_URL}/en/blog/${post.slug}`,
    keywords: post.tags.join(", "),
  };

  return (
    <div lang="en" className="min-h-screen flex flex-col justify-between bg-[#f4efe6] text-[#060d1f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar lang="en" variant="page" switchHref={`/blog/${post.slug}`} />

      <main className="max-w-3xl w-full mx-auto px-6 md:px-12 py-14 md:py-20 space-y-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-foreground/60">
          <Link href="/en" className="hover:text-foreground">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/en/blog" className="hover:text-foreground">
            All Articles
          </Link>{" "}
          / <span className="text-foreground font-semibold">{post.titleEn}</span>
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
            {post.titleEn}
          </h1>
          <p className="text-xs md:text-sm font-mono text-foreground/65">{post.title}</p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-foreground/70">
            <span>
              Author: <strong>{post.authorEn}</strong>
            </span>
            <span>·</span>
            <time dateTime={post.publishedAt}>Published: {post.publishedAt}</time>
            <span>·</span>
            <time dateTime={post.updatedAt}>Updated: {post.updatedAt}</time>
            <span>·</span>
            <span>{post.readingTimeEn}</span>
          </div>
        </header>

        {/* Article Sections */}
        <article className="space-y-10">
          {post.sectionsEn.map((sec, idx) => (
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
            About the Author
          </p>
          <h3 className="text-xl font-bold font-display">
            {PROFILE.nameEn} ({PROFILE.nameTh}) — {PROFILE.role}
          </h3>
          <p className="text-sm text-foreground/80 leading-relaxed">
            {PROFILE.taglineEn}
          </p>
          <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono font-bold uppercase tracking-wider">
            <Link href="/en/about" className="underline hover:text-foreground/70">
              Read {PROFILE.nameEn}&apos;s Biography →
            </Link>
            <Link href="/en/projects" className="underline hover:text-foreground/70">
              View Production Projects →
            </Link>
          </div>
        </aside>

        {/* Footer Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-foreground/15">
          <Link
            href="/en/blog"
            className="text-xs font-mono font-bold uppercase tracking-wider text-foreground hover:underline"
          >
            ← Back to All Articles
          </Link>
          <Link
            href="/en/contact"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#060d1f] text-[#f4efe6] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#0c1a3b]"
          >
            <span>Get in Touch with {PROFILE.nameEn}</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </main>

      <Footer lang="en" />
    </div>
  );
}
