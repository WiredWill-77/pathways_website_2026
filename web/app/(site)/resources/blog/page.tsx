import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogView } from "@/components/resources/sections";
import { SectionHero } from "@/components/resources/shared";
import { getArticles, getResourceSection } from "@/lib/data/resources";

/** CMS edits show on the site within a minute. */
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const d = await getResourceSection("blog");
  return d ? { title: d.name, description: d.description } : {};
}

export default async function BlogPage() {
  const [d, posts] = await Promise.all([getResourceSection("blog"), getArticles()]);
  if (!d) notFound();
  return (
    <>
      <SectionHero hero={d.hero} />
      <BlogView d={d} posts={posts} />
    </>
  );
}
