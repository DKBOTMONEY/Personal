import React from "react";
import { PROFILE, SITE_URL } from "@/data/projects";

export default function PersonJsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: PROFILE.nameTh,
    alternateName: [
      PROFILE.nameEn,
      `นาย ${PROFILE.nameTh}`,
      `Mr. ${PROFILE.nameEn}`,
      PROFILE.shortName,
      PROFILE.nicknameEn,
      PROFILE.nicknameTh,
    ],
    url: SITE_URL,
    jobTitle: PROFILE.role,
    description: PROFILE.taglineTh,
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Docker",
      "Nginx",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
    ],
    sameAs: PROFILE.social.map((s) => s.url),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: `${PROFILE.nameTh} (${PROFILE.nameEn}) | ${PROFILE.role}`,
    inLanguage: ["th-TH", "en-US"],
    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}

