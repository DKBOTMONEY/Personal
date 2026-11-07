import React from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "@/components/Icons";
import { Project } from "@/lib/types";

interface ReleaseCardProps {
  project: Project;
  lang?: "th" | "en";
}

export default function ReleaseCard({ project, lang = "th" }: ReleaseCardProps) {
  const title = lang === "th" ? project.title : project.titleEn;
  const summary = lang === "th" ? project.summary : project.summaryEn;
  const results = lang === "th" ? project.results : project.resultsEn;

  return (
    <article
      className="group flex flex-col justify-between p-7 md:p-8 transition-all duration-200 border border-foreground/15 bg-white/60 hover:border-foreground/45 relative"
      style={{
        boxShadow: "0 4px 20px -4px rgba(6,13,31,0.03)",
      }}
    >
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className="text-[11px] font-mono text-foreground/60 uppercase tracking-wider font-semibold">
            {project.clientOrContext} · {project.period}
          </span>
          <span className="px-2 py-0.5 bg-[#060d1f] text-[#c8ff00] text-[10px] font-bold font-mono tracking-wider uppercase">
            Case Study
          </span>
        </div>

        <h3 className="font-bold font-display text-2xl md:text-3xl text-foreground leading-snug tracking-tight mb-2">
          <Link href={`/projects/${project.slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>

        <p className="text-xs mb-4 font-mono text-foreground/55 uppercase tracking-wider">
          {project.role}
        </p>

        <p className="text-sm leading-relaxed mb-5 text-foreground/80 font-sans">
          {summary}
        </p>

        {/* Key outcomes preview */}
        {results && results.length > 0 && (
          <div className="mb-6 p-4 bg-[#f4efe6]/70 border border-foreground/10">
            <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-foreground/65 mb-2">
              {lang === "th" ? "ผลลัพธ์สำคัญ:" : "Key Outcomes:"}
            </p>
            <ul className="space-y-1.5 text-xs text-foreground/80">
              {results.slice(0, 2).map((res, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#060d1f] font-bold">✓</span>
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Chips */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-[11px] font-mono bg-[#060d1f]/90 text-[#f4efe6]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-foreground/10">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#060d1f] text-[#f4efe6] hover:bg-[#0c1a3b] text-xs font-semibold transition-colors font-mono uppercase tracking-wider"
        >
          <span>{lang === "th" ? "อ่านกรณีศึกษาฉบับเต็ม" : "Read Case Study"}</span>
          <ArrowRight size={13} />
        </Link>

        <div className="flex items-center gap-4">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-foreground hover:text-foreground/75 inline-flex items-center gap-1.5 font-mono tracking-wider uppercase border-b border-foreground/30 hover:border-foreground pb-0.5 transition-all"
            >
              <span>{lang === "th" ? "เว็บจริง (Demo)" : "Live Demo"}</span>
              <ExternalLink size={12} />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-foreground/60 hover:text-foreground inline-flex items-center gap-1 font-mono tracking-wider uppercase transition-colors"
            >
              <span>GitHub</span>
              <span className="font-mono text-xs">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
