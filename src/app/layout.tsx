import type { Metadata } from "next";
import {
  Barlow_Condensed,
  DM_Sans,
  JetBrains_Mono,
  Noto_Sans_Thai,
} from "next/font/google";
import { PROFILE, SITE_URL } from "@/data/projects";
import PersonJsonLd from "@/components/PersonJsonLd";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-thai",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PROFILE.nameTh} (${PROFILE.nameEn}) | ${PROFILE.role}`,
    template: `%s | ${PROFILE.nameTh} (${PROFILE.nameEn})`,
  },
  description: `${PROFILE.nameTh} (${PROFILE.nameEn}) Full-Stack Developer พัฒนาเว็บแอปพลิเคชันด้วย Next.js, TypeScript และดูแลโครงสร้างพื้นฐานด้วย Docker, Nginx และ PostgreSQL`,
  alternates: {
    canonical: "/",
    languages: {
      "th-TH": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: `${PROFILE.nameTh} (${PROFILE.nameEn})`,
    title: `${PROFILE.nameTh} (${PROFILE.nameEn}) | ${PROFILE.role}`,
    description: `พอร์ตโฟลิโอ กรณีศึกษา และบทความทางเทคนิคของ ${PROFILE.nameTh} (${PROFILE.nameEn}) Full-Stack Developer`,
    locale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.nameTh} (${PROFILE.nameEn}) | ${PROFILE.role}`,
    description: `พอร์ตโฟลิโอและบทความของ ${PROFILE.nameTh} (${PROFILE.nameEn}) Full-Stack Developer`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth">
      <body
        className={`${notoSansThai.variable} ${dmSans.variable} ${barlowCondensed.variable} ${jetbrainsMono.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <PersonJsonLd />
        {children}
      </body>
    </html>
  );
}
