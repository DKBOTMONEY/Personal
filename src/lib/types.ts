export type Project = {
  slug: string;
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
  role: string;
  period: string;
  clientOrContext: string;
  problem: string;
  problemEn: string;
  solution: string[];
  solutionEn: string[];
  results: string[];
  resultsEn: string[];
  tech: string[];
  url?: string;
  repoUrl?: string;
  featured?: boolean;
};

export type SkillCategory = {
  cat: string;
  catEn: string;
  tier: "core" | "familiar";
  tierLabel: string;
  tierLabelEn: string;
  items: {
    name: string;
    usageNote: string;
    usageNoteEn: string;
  }[];
};

export type ExperienceItem = {
  period: string;
  periodEn: string;
  role: string;
  roleEn: string;
  organization: string;
  description: string;
  descriptionEn: string;
  highlights: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  tags: string[];
  author: string;
  authorEn: string;
  sections: {
    heading: string;
    paragraphs: string[];
    code?: {
      language: string;
      filename?: string;
      snippet: string;
    };
  }[];
};

export type Profile = {
  nameTh: string;
  nameEn: string;
  nicknameTh: string;
  nicknameEn: string;
  displayName: string;
  shortName: string;
  role: string;
  taglineTh: string;
  taglineEn: string;
  aboutTh: string;
  aboutSecondaryTh: string;
  aboutEn: string;
  aboutSecondaryEn: string;
  startYear: number;
  yearsExperience: string;
  focusTh: string;
  focusEn: string;
  locationTh: string;
  locationEn: string;
  emailUser: string;
  emailDomain: string;
  resumeUrl: string;
  siteUrl: string;
  social: { label: string; platform: string; url: string }[];
};
