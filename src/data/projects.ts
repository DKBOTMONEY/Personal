import type { Profile, Project, SkillCategory, ExperienceItem, BlogPost } from "@/lib/types";

export const SITE_URL = "https://www.pl-patipan.in.th";

export const PROFILE: Profile = {
  nameTh: "ปฏิภาณ พลยิ่ง",
  nameEn: "Patipan Plonying",
  nicknameTh: "แบงค์",
  nicknameEn: "Bank",
  displayName: "ปฏิภาณ พลยิ่ง (Patipan Plonying)",
  shortName: "Patipan PL. (Bank)",
  role: "Full-Stack Developer",
  taglineTh:
    "พัฒนาเว็บแอปพลิเคชันสำหรับธุรกิจและองค์กรด้วย Next.js, TypeScript และ Node.js พร้อมวางโครงสร้างพื้นฐานระบบด้วย Docker, Nginx และฐานข้อมูล PostgreSQL ให้พร้อมใช้งานจริงในระดับ Production",
  taglineEn:
    "Building fast, type-safe web applications for businesses using Next.js, TypeScript, and Node.js, backed by resilient Docker, Nginx, and PostgreSQL infrastructure.",
  aboutTh:
    "ผมชื่อ ปฏิภาณ พลยิ่ง (Patipan Plonying หรือ แบงค์) เป็น Full-Stack Developer ที่มุ่งเน้นการพัฒนาเว็บแอปพลิเคชันตั้งแต่การออกแบบหน้าบ้าน (Frontend) ที่ตอบสนองรวดเร็ว ไปจนถึงการวางโครงสร้างระบบหลังบ้าน (Backend) และ Infrastructure ที่เสถียรและดูแลรักษาง่าย",
  aboutSecondaryTh:
    "แนวทางการทำงานของผมคือการเปลี่ยนโจทย์ธุรกิจที่ซับซ้อนให้กลายเป็นโค้ดที่สะอาด มี Type Safety ชัดเจน และวัดผลลัพธ์ได้จริง ไม่ว่าจะเป็นความเร็วในการโหลดหน้าเว็บ (Core Web Vitals), ความปลอดภัยของ API หรือการทำระบบอัตโนมัติ (CI/CD & Containerization) เพื่อลดภาระในการดูแลเซิร์ฟเวอร์",
  aboutEn:
    "I am Patipan Plonying (ปฏิภาณ พลยิ่ง, nicknamed Bank), a Full-Stack Developer specializing in modern web application development and production infrastructure management.",
  aboutSecondaryEn:
    "My engineering philosophy centers around turning business requirements into clean, modular, and type-safe systems that scale—bridging responsive frontend interfaces with automated backend and container infrastructure.",
  startYear: 2024,
  yearsExperience: "ตั้งแต่ปี 2024 – ปัจจุบัน (2+ ปี)",
  focusTh: "เว็บแอปพลิเคชัน · โครงสร้างพื้นฐานระบบ (Infrastructure)",
  focusEn: "Web Applications · Cloud & Server Infrastructure",
  locationTh: "ประเทศไทย",
  locationEn: "Thailand",
  emailUser: "Patipan.nb30",
  emailDomain: "gmail.com",
  resumeUrl: "/resume.pdf",
  siteUrl: SITE_URL,
  social: [
    {
      platform: "LinkedIn",
      label: "linkedin.com/in/pl1999patipan",
      url: "https://www.linkedin.com/in/pl1999patipan",
    },
    {
      platform: "GitHub",
      label: "github.com/DKBOTMONEY",
      url: "https://github.com/DKBOTMONEY",
    },
  ],
};

export const STACK: string[] = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "Nginx",
  "Tailwind CSS",
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    cat: "Frontend (ใช้งานหลัก)",
    catEn: "Frontend (Core Stack)",
    tier: "core",
    tierLabel: "ใช้เป็นประจำในโปรเจกต์จริง",
    tierLabelEn: "Used regularly in production",
    items: [
      {
        name: "Next.js (App Router)",
        usageNote: "ใช้พัฒนา Hundee Group และเว็บพอร์ตโฟลิโอ (SSR/SSG, SEO)",
        usageNoteEn: "Used in Hundee Group & Portfolio (App Router, SSR/SSG, SEO)",
      },
      {
        name: "TypeScript",
        usageNote: "ใช้คุม Type Safety ทั้งฝั่ง Frontend และ API",
        usageNoteEn: "Strict end-to-end type safety across UI and APIs",
      },
      {
        name: "React",
        usageNote: "พัฒนา Server & Client Components ที่แยกส่วนชัดเจน",
        usageNoteEn: "Modular Server & Client Component architecture",
      },
      {
        name: "Tailwind CSS",
        usageNote: "ออกแบบ Responsive UI ที่โหลดเร็วและคุม Design System",
        usageNoteEn: "Responsive design systems with minimal CSS bundle size",
      },
    ],
  },
  {
    cat: "Backend & API (ใช้งานหลัก)",
    catEn: "Backend & API (Core Stack)",
    tier: "core",
    tierLabel: "ใช้เป็นประจำในโปรเจกต์จริง",
    tierLabelEn: "Used regularly in production",
    items: [
      {
        name: "Node.js",
        usageNote: "รันไทม์หลักสำหรับบริการหลังบ้านและสคริปต์ประมวลผล",
        usageNoteEn: "Primary runtime for backend services and automation scripts",
      },
      {
        name: "REST APIs / Route Handlers",
        usageNote: "ออกแบบ API ที่ตรวจสอบข้อมูลและป้องกันสแปม",
        usageNoteEn: "Validated API endpoints with rate/spam protection",
      },
      {
        name: "Prisma ORM",
        usageNote: "จัดการ Database Schema และทำ Migration แบบ Type-safe",
        usageNoteEn: "Type-safe database schema modeling and migrations",
      },
      {
        name: "Python",
        usageNote: "เขียนสคริปต์ระบบอัตโนมัติ (Automation) และประมวลผลข้อมูล",
        usageNoteEn: "Backend automation scripts and data processing",
      },
    ],
  },
  {
    cat: "Database & Infrastructure",
    catEn: "Database & Infrastructure",
    tier: "core",
    tierLabel: "ใช้เป็นประจำในโปรเจกต์จริง",
    tierLabelEn: "Used regularly in production",
    items: [
      {
        name: "PostgreSQL",
        usageNote: "ฐานข้อมูลเชิงสัมพันธ์หลักสำหรับระบบเว็บแอปพลิเคชัน",
        usageNoteEn: "Primary relational database for transactional systems",
      },
      {
        name: "Docker & Docker Compose",
        usageNote: "ทำ Containerization ให้สภาพแวดล้อม Dev และ Prod ตรงกัน",
        usageNoteEn: "Containerized workflows for consistent deployment",
      },
      {
        name: "Nginx & Linux",
        usageNote: "ตั้งค่า Reverse Proxy, SSL/TLS และดูแลเซิร์ฟเวอร์ Linux",
        usageNoteEn: "Reverse proxy configuration, SSL termination, Linux administration",
      },
      {
        name: "Vercel & GitHub Actions",
        usageNote: "ตั้งค่า CI/CD ตรวจสอบโค้ดและ Deploy อัตโนมัติ",
        usageNoteEn: "Automated CI/CD pipelines and edge deployments",
      },
    ],
  },
  {
    cat: "เทคโนโลยีที่เคยใช้งาน / เสริม",
    catEn: "Familiar & Supporting Tools",
    tier: "familiar",
    tierLabel: "เคยใช้งาน / ใช้ตามโจทย์โปรเจกต์",
    tierLabelEn: "Familiar / Project-specific usage",
    items: [
      {
        name: "Express.js",
        usageNote: "แยกบริการ REST API เฉพาะทางเมื่อไม่ใช้พึ่งพาตัวตนบน Next.js",
        usageNoteEn: "Standalone microservice and REST API servers",
      },
      {
        name: "Redis",
        usageNote: "ทำ Caching และจัดการ Rate Limiting เบื้องต้น",
        usageNoteEn: "In-memory caching and API rate limiting",
      },
      {
        name: "MongoDB",
        usageNote: "จัดเก็บข้อมูลกึ่งโครงสร้าง (Document Store)",
        usageNoteEn: "Document storage for flexible schema workloads",
      },
      {
        name: "Vue.js / GraphQL",
        usageNote: "เคยศึกษาและใช้งานในโปรเจกต์ทดลอง/ระบบย่อย",
        usageNoteEn: "Used in exploratory and secondary module integrations",
      },
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: "2024 – ปัจจุบัน",
    periodEn: "2024 – Present",
    role: "Full-Stack Developer (อิสระ / โปรเจกต์ลูกค้า)",
    roleEn: "Full-Stack Developer (Independent & Client Projects)",
    organization: "Hundee Group & ระบบเว็บแอปพลิเคชันธุรกิจ",
    description:
      "รับผิดชอบการออกแบบ พัฒนา และดูแลระบบเว็บแอปพลิเคชันแบบครบวงจร ตั้งแต่การวางโครงสร้างหน้าเว็บด้วย Next.js และ TypeScript ไปจนถึงการตั้งค่าเซิร์ฟเวอร์และการปล่อยระบบขึ้นใช้งานจริง",
    descriptionEn:
      "End-to-end architecture, development, and deployment of production web applications using Next.js, TypeScript, PostgreSQL, and Docker.",
    highlights: [
      "พัฒนาและส่งมอบแพลตฟอร์มเว็บ Hundee Group ให้โหลดหน้าแรกได้รวดเร็ว รองรับการใช้งานทั้งมือถือและเดสก์ท็อป",
      "วางโครงสร้างโค้ดแบบแยกคอมโพเนนต์ (Modular Architecture) ลดขนาด JavaScript ฝั่งผู้ใช้ด้วย React Server Components",
      "ตั้งค่าระบบ Deployment อัตโนมัติ, การทำ SEO เชิงเทคนิค (Structured Data, Sitemap, Canonical) และดูแลความเสถียรของระบบ",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "hundee-group",
    title: "แพลตฟอร์มเว็บแอปพลิเคชัน Hundee Group",
    titleEn: "Hundee Group Web Application Platform",
    summary:
      "พัฒนาเว็บแพลตฟอร์มสำหรับนำเสนอข้อมูลและบริการของ Hundee Group ด้วย Next.js และ TypeScript เน้นโครงสร้างที่โหลดเร็ว รองรับมือถือ 100% และรองรับการค้นหาบน Google (Technical SEO)",
    summaryEn:
      "Developed a modern corporate and service web platform for Hundee Group using Next.js and TypeScript, engineered for sub-second page transitions, mobile responsiveness, and technical SEO.",
    role: "Full-Stack Developer (รับผิดชอบตั้งแต่โครงสร้างหน้าเว็บจนถึงการ Deploy)",
    period: "2025 – 2026",
    clientOrContext: "Hundee Group",
    problem:
      "ธุรกิจต้องการแพลตฟอร์มเว็บไซต์ที่สร้างความน่าเชื่อถือ สามารถแสดงข้อมูลบริการและรายละเอียดได้อย่างชัดเจนบนทุกอุปกรณ์ (โดยเฉพาะผู้ใช้งานผ่านสมาร์ตโฟน) พร้อมทั้งต้องโหลดหน้าเว็บได้อย่างรวดเร็วและมีโครงสร้างที่เอื้อต่อการติดอันดับการค้นหา",
    problemEn:
      "Hundee Group needed a credible, high-speed web presence capable of presenting service offerings clearly across mobile and desktop devices while maintaining strong Core Web Vitals and search visibility.",
    solution: [
      "ออกแบบและพัฒนาสถาปัตยกรรมด้วย Next.js (App Router) และ TypeScript เพื่อแยกส่วนการเรนเดอร์ฝั่งเซิร์ฟเวอร์ (SSR/SSG) ลดภาระการประมวลผลบนเบราว์เซอร์ของผู้ใช้",
      "จัดทำระบบ UI ด้วย Tailwind CSS โดยกำหนด Design Tokens ที่คุมโทนสีและลำดับความสำคัญของเนื้อหา (Visual Hierarchy) ให้อ่านง่ายและตอบสนองไวบนทุกขนาดหน้าจอ",
      "ปรับแต่งประสิทธิภาพการโหลดทรัพยากร (ฟอนต์, รูปภาพ, และโค้ดแยกส่วน) พร้อมตั้งค่าการ Deploy บน Vercel ให้ทำงานเชื่อมต่อกับ Git Repository อย่างเป็นระบบ",
    ],
    solutionEn: [
      "Architected the application with Next.js App Router and TypeScript, leveraging Server Components to minimize client-side JavaScript bundles.",
      "Built a responsive design system using Tailwind CSS optimized for mobile viewports and clear visual hierarchy.",
      "Configured automated CI/CD deployment pipelines on Vercel with asset and font optimization.",
    ],
    results: [
      "คะแนนโครงสร้างหน้าเว็บและประสิทธิภาพบนมือถืออยู่ในเกณฑ์ดีเยี่ยม โหลดเนื้อหาหลัก (LCP) ได้อย่างรวดเร็ว",
      "รองรับการแสดงผลแบบ Responsive ครบทุกขนาดหน้าจอ (Mobile, Tablet, Desktop) โดยไม่มีปัญหา Layout เคลื่อน (CLS ต่ำ)",
      "โครงสร้างโค้ดมีความชัดเจน (Type-safe 100%) สามารถต่อยอดเพิ่มฟีเจอร์หรือหน้าบริการใหม่ได้ทันทีโดยไม่กระทบส่วนเดิม",
    ],
    resultsEn: [
      "Achieved fast Largest Contentful Paint (LCP) and near-zero Cumulative Layout Shift (CLS) across mobile and desktop viewports.",
      "100% TypeScript coverage enabling rapid feature iteration and maintainable component reuse.",
      "Streamlined production deployment workflow via automated Git-based previews and releases.",
    ],
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel"],
    url: "https://hundee-group001.vercel.app/",
    repoUrl: "https://github.com/DKBOTMONEY",
    featured: true,
  },
  {
    slug: "pl-patipan-portfolio",
    title: "เว็บไซต์พอร์ตโฟลิโอและระบบบทความ (pl-patipan.in.th)",
    titleEn: "Personal Engineering Portfolio & Technical Blog (pl-patipan.in.th)",
    summary:
      "เว็บไซต์นำเสนอผลงานและบทความเทคนิคของ ปฏิภาณ พลยิ่ง พัฒนาด้วย Next.js 16 App Router รองรับ 2 ภาษา (ไทย/อังกฤษ) พร้อมโครงสร้าง JSON-LD, Dynamic Sitemap และระบบป้องกันสแปม",
    summaryEn:
      "Bilingual portfolio and engineering blog for Patipan Plonying built with Next.js 16 App Router, featuring Person/Article JSON-LD structured data, dynamic sitemaps, and zero-external-CDN SVG icons.",
    role: "Full-Stack Developer (Owner & Architect)",
    period: "2026",
    clientOrContext: "Personal Brand & Technical Knowledge Base",
    problem:
      "เว็บไซต์เวอร์ชันเดิมเป็นหน้าเดียว (Single Page) ที่มีเฉพาะภาษาอังกฤษ ใช้ชื่อย่อ และโหลดไอคอนจาก CDN ภายนอก ทำให้ Google เชื่อมโยงชื่อจริง (ปฏิภาณ พลยิ่ง / Patipan Plonying) เข้ากับตัวตนและผลงานได้ยาก",
    problemEn:
      "The initial single-page portfolio lacked Thai localization, full-name entity mapping, and dedicated case study routes, limiting organic search discoverability.",
    solution: [
      "ปรับโครงสร้างเป็น Multi-page Architecture (/, /about, /projects/[slug], /blog/[slug], /contact, /en) ที่แต่ละหน้ามี Metadata, Canonical URL และ H1 เฉพาะตัว",
      "เพิ่มข้อมูล Structured Data (Schema.org Person และ Article) แบบ JSON-LD เพื่อเชื่อมโยงชื่อ ปฏิภาณ พลยิ่ง (Patipan Plonying) กับโปรไฟล์ GitHub และ LinkedIn",
      "เปลี่ยนการโหลดไอคอนจาก CDN ภายนอกมาเป็น Inline SVG และปรับแอนิเมชันให้เคารพค่า prefers-reduced-motion ของผู้ใช้",
    ],
    solutionEn: [
      "Refactored into a multi-route App Router architecture with per-page canonical URLs, hreflang alternates, and dynamic OpenGraph image generation.",
      "Implemented Schema.org Person and TechArticle JSON-LD scripts linking verified GitHub and LinkedIn profiles.",
      "Replaced unpinned external CDN assets with self-contained inline SVGs and reduced-motion-safe animations.",
    ],
    results: [
      "มีหน้าเนื้อหาคุณภาพให้ Google จัดทำดัชนี (Index) ครบถ้วนทั้งภาษาไทยและภาษาอังกฤษ",
      "ตัดการพึ่งพาไฟล์ไอคอนจาก CDN ภายนอก 100% ลดความเสี่ยงเรื่องลิงก์เสียและเพิ่มความเร็วในการเรนเดอร์",
      "ระบบฟอร์มติดต่อมี Honeypot ป้องกันบอทสแปม พร้อมการเข้ารหัส/ซ่อนอีเมลจากตัวดูดข้อมูลอัตโนมัติ",
    ],
    resultsEn: [
      "Expanded indexable pages from 1 to 10+ structured Thai and English routes.",
      "Eliminated external icon CDN dependencies and improved accessibility compliance.",
      "Added honeypot spam filtering and client-side email obfuscation.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "JSON-LD SEO", "Docker", "Nginx"],
    url: "https://www.pl-patipan.in.th",
    repoUrl: "https://github.com/DKBOTMONEY",
    featured: true,
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "deploy-nextjs-docker-nginx",
    title: "แนวทางการ Deploy Next.js ขึ้น Production ด้วย Docker และ Nginx Reverse Proxy",
    titleEn: "Deploying Next.js to Production with Docker Standalone and Nginx Reverse Proxy",
    summary:
      "สรุปขั้นตอนการทำ Multi-stage Dockerfile สำหรับ Next.js โหมด Standalone เพื่อลดขนาด Image พร้อมวิธีตั้งค่า Nginx เป็น Reverse Proxy สำหรับใช้งานจริงบนเซิร์ฟเวอร์ Linux",
    summaryEn:
      "A practical guide by Patipan Plonying on building lightweight multi-stage Docker images for Next.js standalone mode and configuring Nginx as a production reverse proxy.",
    publishedAt: "2026-11-05",
    updatedAt: "2026-11-07",
    readingTime: "6 นาที",
    tags: ["Next.js", "Docker", "Nginx", "Infrastructure"],
    author: "ปฏิภาณ พลยิ่ง (Patipan Plonying)",
    authorEn: "Patipan Plonying",
    sections: [
      {
        heading: "ทำไมต้องใช้โหมด Standalone เมื่อรัน Next.js บน Docker?",
        paragraphs: [
          "เวลาเรานำเว็บแอปพลิเคชันที่พัฒนาด้วย Next.js ไปรันบน VPS หรือเซิร์ฟเวอร์ Linux ของตัวเอง ปัญหาที่พบบ่อยคือขนาดของ Docker Image ที่ใหญ่มาก (บางครั้งเกิน 1 GB) หากเราคัดลอกโฟลเดอร์ node_modules ทั้งหมดเข้าไปใน Container โดยตรง",
          "ปฏิภาณ พลยิ่ง (Patipan Plonying) แนะนำให้เปิดใช้งานตัวเลือก output: 'standalone' ในไฟล์ next.config.ts ซึ่งจะให้ Next.js วิเคราะห์และคัดแยกเฉพาะไฟล์ที่จำเป็นต่อการรันบน Production ออกมาไว้ในโฟลเดอร์ .next/standalone ทำให้ขนาด Image ลดลงเหลือเพียงไม่กี่ร้อยเมกะไบต์และสตาร์ทระบบได้เร็วขึ้นมาก",
        ],
        code: {
          language: "typescript",
          filename: "next.config.ts",
          snippet: `import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
};

export default nextConfig;`,
        },
      },
      {
        heading: "ตัวอย่าง Multi-stage Dockerfile ที่ใช้งานจริง",
        paragraphs: [
          "การแบ่ง Dockerfile ออกเป็น 3 ขั้นตอน ได้แก่ deps (ติดตั้งแพ็กเกจ), builder (สั่ง build โปรเจกต์) และ runner (อิมเมจสำหรับรันจริง) ช่วยให้สามารถใช้ Docker Layer Cache ได้อย่างคุ้มค่า และปลอดภัยขึ้นด้วยการรันผ่านผู้ใช้ที่ไม่ใช่ root (non-root user)",
        ],
        code: {
          language: "dockerfile",
          filename: "Dockerfile",
          snippet: `FROM node:20-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs && \\
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]`,
        },
      },
      {
        heading: "การตั้งค่า Nginx เป็น Reverse Proxy และจัดการโดเมน",
        paragraphs: [
          "เมื่อ Container ของ Next.js รันอยู่ที่พอร์ต 3000 ภายในเครื่อง เราจะใช้ Nginx รับทราฟฟิกจากพอร์ต 80/443 ด้านหน้า เพื่อทำหน้าที่จัดการ SSL/TLS (HTTPS), บังคับ Redirect จากโดเมนไม่มี www ไปยัง www อย่างถาวร (301 Redirect) และส่งต่อคำขอไปยังพอร์ต 3000",
        ],
        code: {
          language: "nginx",
          filename: "/etc/nginx/conf.d/pl-patipan.conf",
          snippet: `server {
    listen 80;
    server_name pl-patipan.in.th;
    return 301 https://www.pl-patipan.in.th$request_uri;
}

server {
    listen 443 ssl http2;
    server_name www.pl-patipan.in.th;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}`,
        },
      },
    ],
  },
  {
    slug: "prisma-postgresql-schema-design",
    title: "การออกแบบ Database Schema ด้วย Prisma และ PostgreSQL ให้รองรับการขยายตัว",
    titleEn: "Designing Scalable PostgreSQL Schemas with Prisma ORM in TypeScript",
    summary:
      "เทคนิคการจัดโครงสร้างตารางฐานข้อมูล PostgreSQL ด้วย Prisma ORM การตั้งดัชนี (Index) ให้ตรงกับรูปแบบการค้นหาจริง และข้อควรระวังในการจัดการ Connection Pool บนระบบไร้เซิร์ฟเวอร์",
    summaryEn:
      "Best practices for modeling relational schemas with Prisma and PostgreSQL, indexing strategies for real-world queries, and singleton connection pooling in Next.js.",
    publishedAt: "2026-11-06",
    updatedAt: "2026-11-07",
    readingTime: "5 นาที",
    tags: ["PostgreSQL", "Prisma", "TypeScript", "Database"],
    author: "ปฏิภาณ พลยิ่ง (Patipan Plonying)",
    authorEn: "Patipan Plonying",
    sections: [
      {
        heading: "หลักการออกแบบ Schema ที่ชัดเจนและตรวจสอบได้ตั้งแต่ตอนเขียนโค้ด",
        paragraphs: [
          "ข้อดีสำคัญของการใช้ Prisma คู่กับ PostgreSQL ในโปรเจกต์ TypeScript คือการที่ Schema ของฐานข้อมูลกลายเป็นแหล่งความจริงเดียว (Single Source of Truth) ที่สร้าง Type ให้โค้ดฝั่ง Backend อัตโนมัติ ลดความผิดพลาดจากการพิมพ์ชื่อคอลัมน์ผิดหรือการแปลงชนิดข้อมูลไม่ตรงกัน",
          "จากการทำงานจริงของ ปฏิภาณ พลยิ่ง (Patipan Plonying) สิ่งที่ควรกำหนดตั้งแต่วันแรกคือการใส่เวลาสร้างและแก้ไข (`createdAt`, `updatedAt`), การใช้ Enum สำหรับสถานะที่มีขอบเขตชัดเจน และการสร้าง Composite Index ในคอลัมน์ที่ใช้กรองและเรียงลำดับข้อมูลบ่อยๆ",
        ],
        code: {
          language: "prisma",
          filename: "prisma/schema.prisma",
          snippet: `datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

enum InquiryStatus {
  PENDING
  REPLIED
  ARCHIVED
}

model ContactInquiry {
  id        String        @id @default(cuid())
  name      String
  email     String
  message   String        @db.Text
  status    InquiryStatus @default(PENDING)
  createdAt DateTime      @default(now()) @map("created_at")
  updatedAt DateTime      @updatedAt @map("updated_at")

  @@index([status, createdAt(sort: Desc)])
  @@map("contact_inquiries")
}`,
        },
      },
      {
        heading: "การป้องกันปัญหา Connection เต็มในสภาพแวดล้อม Next.js",
        paragraphs: [
          "ในระหว่างการพัฒนาด้วย Next.js ระบบ Hot Reload อาจสร้างอินสแตนซ์ของ PrismaClient ซ้ำซ้อนทุกครั้งที่บันทึกไฟล์จนทำให้ PostgreSQL แจ้งเตือนเรื่องจำนวน Connection เกินกำหนด การใช้รูปแบบ Singleton ผูกไว้กับตัวแปร globalThis จะช่วยแก้ปัญหานี้ได้อย่างสมบูรณ์",
        ],
        code: {
          language: "typescript",
          filename: "src/lib/prisma.ts",
          snippet: `import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}`,
        },
      },
    ],
  },
  {
    slug: "github-actions-cicd-pipeline",
    title: "ตั้งค่า CI/CD Pipeline อัตโนมัติสำหรับโปรเจกต์ Next.js และ TypeScript",
    titleEn: "Automating CI/CD Pipelines for Next.js and TypeScript with GitHub Actions",
    summary:
      "วิธีสร้างเวิร์กโฟลว์ GitHub Actions เพื่อตรวจสอบ TypeScript Type-check, ESLint และทดสอบการ Build อัตโนมัติทุกครั้งก่อนรวมโค้ดเข้าสู่สาขาหลัก ช่วยลดบั๊กหลุดขึ้น Production",
    summaryEn:
      "How Patipan Plonying sets up automated GitHub Actions workflows for strict TypeScript checking, linting, and production build verification before deployment.",
    publishedAt: "2026-11-07",
    updatedAt: "2026-11-07",
    readingTime: "5 นาที",
    tags: ["CI/CD", "GitHub Actions", "TypeScript", "Next.js"],
    author: "ปฏิภาณ พลยิ่ง (Patipan Plonying)",
    authorEn: "Patipan Plonying",
    sections: [
      {
        heading: "ทำไมต้องแยกขั้นตอนตรวจสอบโค้ดอัตโนมัติ (CI) ก่อนปล่อยขึ้นเซิร์ฟเวอร์?",
        paragraphs: [
          "แม้ว่าจะทำงานคนเดียวหรือทีมขนาดเล็ก การรันคำสั่งตรวจสอบ Type (`tsc --noEmit`) และทดสอบการสั่ง `npm run build` ด้วยมือทุกครั้งอาจเกิดการตกหล่นได้ง่าย การตั้งค่า GitHub Actions ให้ทำงานอัตโนมัติทุกครั้งที่มีการ Push หรือเปิด Pull Request จะช่วยรับประกันว่าโค้ดในสาขา `main` พร้อมสำหรับการ Deploy เสมอ",
          "ในแนวทางที่ ปฏิภาณ พลยิ่ง (Patipan Plonying) ใช้งานเป็นมาตรฐาน จะเน้นให้เวิร์กโฟลว์ทำงานเสร็จภายใน 1–2 นาที โดยเปิดใช้งานระบบ Cache ของ npm และโฟลเดอร์ `.next/cache`",
        ],
        code: {
          language: "yaml",
          filename: ".github/workflows/ci.yml",
          snippet: `name: Production Readiness CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js 20 with npm cache
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies cleanly
        run: npm ci

      - name: Run TypeScript type check
        run: npx tsc --noEmit

      - name: Run linter
        run: npm run lint

      - name: Verify production build
        run: npm run build`,
        },
      },
      {
        heading: "การเชื่อมต่อจาก CI สู่ขั้นตอนการ Deploy",
        paragraphs: [
          "เมื่อขั้นตอน Verify ผ่านทั้งหมดแล้ว หากโฮสต์อยู่บน Vercel ระบบจะสามารถดึงโค้ดที่ผ่านการตรวจสอบไปสร้าง Production Deployment ได้ทันที หรือหากโฮสต์บน VPS ด้วย Docker ก็สามารถเพิ่ม Job ถัดไปเพื่อสั่ง Build Image และรีสตาร์ท Container ผ่าน SSH ได้อย่างปลอดภัยโดยที่เว็บไซต์ไม่ล่มกลางคัน",
        ],
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((b) => b.slug === slug);
}
