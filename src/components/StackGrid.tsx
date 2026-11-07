import React from "react";
import { Code2, Server, Database, Terminal } from "@/components/Icons";
import { SKILL_CATEGORIES } from "@/data/projects";

interface StackGridProps {
  lang?: "th" | "en";
}

const categoryIcons = [Code2, Server, Database, Terminal];

export default function StackGrid({ lang = "th" }: StackGridProps) {
  return (
    <section aria-labelledby="skills-heading" className="pt-4 pb-12 w-full">
      <div className="mb-8">
        <p className="text-xs tracking-[0.3em] uppercase mb-2 font-mono text-foreground/55 font-semibold">
          {lang === "th" ? "ความเชี่ยวชาญและเครื่องมือ" : "Technical Expertise"}
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2
            id="skills-heading"
            className="font-black uppercase font-display text-3xl md:text-5xl tracking-tight"
          >
            {lang === "th" ? "ทักษะและเทคโนโลยีที่ใช้จริง" : "Skills & Production Stack"}
          </h2>
          <p className="text-xs font-mono text-foreground/60">
            {lang === "th"
              ? "แยกตามความถี่ในการใช้งานจริงในโปรเจกต์ Production"
              : "Grouped by production usage vs. supporting familiarity"}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-foreground/15 bg-white/45">
        {SKILL_CATEGORIES.map((group, idx) => {
          const Icon = categoryIcons[idx % categoryIcons.length];
          const isCore = group.tier === "core";
          return (
            <div
              key={group.cat}
              className="p-6 md:p-8 border-r border-b border-foreground/15 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                  <div className="flex items-center gap-2">
                    <Icon size={15} className="text-foreground/70" />
                    <h3 className="text-sm tracking-wider uppercase font-mono font-bold text-foreground">
                      {lang === "th" ? group.cat : group.catEn}
                    </h3>
                  </div>
                  <span
                    className={`text-[10px] font-mono px-2.5 py-0.5 uppercase tracking-wider font-semibold ${
                      isCore
                        ? "bg-[#060d1f] text-[#c8ff00]"
                        : "bg-foreground/10 text-foreground/70"
                    }`}
                  >
                    {lang === "th" ? group.tierLabel : group.tierLabelEn}
                  </span>
                </div>

                <ul className="space-y-3.5">
                  {group.items.map((item) => (
                    <li key={item.name} className="text-sm">
                      <div className="flex items-center gap-2.5 font-mono font-bold text-foreground">
                        <span
                          className={`inline-block w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                            isCore ? "bg-[#060d1f]" : "bg-foreground/40"
                          }`}
                        />
                        <span>{item.name}</span>
                      </div>
                      <p className="text-xs text-foreground/65 pl-4 mt-0.5 leading-relaxed">
                        {lang === "th" ? item.usageNote : item.usageNoteEn}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
