import React from "react";
import Hero from "@/components/Hero";
import StackGrid from "@/components/StackGrid";
import ReleaseList from "@/components/ReleaseList";
import BlogPreview from "@/components/BlogPreview";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { PROJECTS } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#060d1f] overflow-x-hidden">
      {/* Hero Section */}
      <Hero lang="th" />

      {/* Wave Divider */}
      <div style={{ background: "#E4E3DB", lineHeight: 0 }} aria-hidden="true">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
          style={{ display: "block" }}
        >
          <path
            d="M0,40 C200,110 400,0 600,55 C800,110 1000,10 1200,65 C1320,95 1400,45 1440,35 L1440,120 L0,120 Z"
            fill="#f4efe6"
          />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 pb-20 space-y-16">
        <StackGrid lang="th" />
        <ReleaseList projects={PROJECTS} lang="th" showAllLink={true} />
        <BlogPreview lang="th" />
        <About lang="th" showFullLink={true} />
        <Contact lang="th" />
      </div>

      <Footer lang="th" />
    </main>
  );
}
