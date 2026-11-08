import React from "react";
import Link from "next/link";
import { Project } from "@/lib/types";
import { ArrowRight } from "@/components/Icons";
import ReleaseCard from "./ReleaseCard";

interface ReleaseListProps {
  projects: Project[];
  lang?: "th" | "en";
  showAllLink?: boolean;
}

export default function ReleaseList({
  projects,
  lang = "th",
  showAllLink = true,
}: ReleaseListProps) {
  return (
    <section aria-labelledby="projects-heading" className="pt-4 pb-12 w-full space-y-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-foreground/15 pb-6">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase mb-2 font-mono text-foreground/55 font-semibold">
            {lang === "th" ? "ผลงานและกรณีศึกษา" : "Selected Works"}
          </p>
          <h2
            id="projects-heading"
            className="font-black uppercase font-display text-3xl md:text-5xl tracking-tight"
          >
            {lang === "th" ? "โปรเจกต์ที่พัฒนาจริง" : "Production Projects"}
          </h2>
        </div>

        {showAllLink && (
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider px-4 py-2.5 border border-foreground/25 hover:border-foreground bg-white/50 text-foreground transition-colors self-start sm:self-auto"
          >
            <span>{lang === "th" ? "ดูโปรเจกต์ทั้งหมด" : "View All Projects"}</span>
            <ArrowRight size={14} />
          </Link>
        )}
      </div>

      {/* Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.slug}
            className={projects.length % 2 === 1 && index === 0 ? "md:col-span-2" : ""}
          >
            <ReleaseCard project={project} lang={lang} />
          </div>
        ))}
      </div>
    </section>
  );
}
