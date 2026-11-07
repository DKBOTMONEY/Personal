import type { MetadataRoute } from "next";
import { SITE_URL, PROJECTS, BLOG_POSTS } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "", priority: 1.0 },
    { path: "/about", priority: 0.9 },
    { path: "/projects", priority: 0.9 },
    { path: "/blog", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
    { path: "/en", priority: 0.9 },
    { path: "/en/about", priority: 0.85 },
  ].map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority,
  }));

  const projectRoutes = PROJECTS.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}

