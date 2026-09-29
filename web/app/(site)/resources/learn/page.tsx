import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LearnView } from "@/components/resources/sections";
import { SectionHero } from "@/components/resources/shared";
import { getResourceSection } from "@/lib/data/resources";

/** CMS edits show on the site within a minute. */
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const d = await getResourceSection("learn");
  return d ? { title: d.name, description: d.description } : {};
}

export default async function LearnPage() {
  const d = await getResourceSection("learn");
  if (!d) notFound();
  return (
    <>
      <SectionHero hero={d.hero} />
      <LearnView d={d} />
    </>
  );
}
