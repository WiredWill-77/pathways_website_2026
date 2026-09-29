import type { BlogPost, BlogPostSummary } from "@/types/blog";
import { blogRecords } from "./cms-content";
import { mockQuery } from "./mock-client";

const live = async () => (await blogRecords()).filter((p) => p.status === "published");

/** Published posts, latest first, without bodies. */
export async function getBlogPosts(): Promise<BlogPostSummary[]> {
  const posts = await live();
  return mockQuery(() =>
    posts.map(({ slug, status, title, date, categories, excerpt, hero, thumb }) => ({ slug, status, title, date, categories, excerpt, hero, thumb })),
  );
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await live();
  return mockQuery(() => posts.find((p) => p.slug === slug) ?? null);
}

export async function getBlogSlugs(): Promise<string[]> {
  const posts = await live();
  return mockQuery(() => posts.map((p) => p.slug));
}

/** Distinct categories across published posts, in first-seen order. */
export async function getBlogCategories(): Promise<string[]> {
  const posts = await live();
  return mockQuery(() => [...new Set(posts.flatMap((p) => p.categories))]);
}
