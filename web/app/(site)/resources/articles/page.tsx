import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlesView } from "@/components/resources/sections";
import { SectionHero } from "@/components/resources/shared";
import { getArticleTeasers, getResourceSection } from "@/lib/data/resources";

/** CMS edits show on the site within a minute. */
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const d = await getResourceSection("articles");
  return d ? { title: d.name, description: d.description } : {};
}

export default async function ArticlesPage() {
  const [d, teasers] = await Promise.all([getResourceSection("articles"), getArticleTeasers()]);
  if (!d) notFound();
  return (
    <>
      <SectionHero hero={d.hero} />
      <ArticlesView d={d} teasers={teasers} />
    </>
  );
}
