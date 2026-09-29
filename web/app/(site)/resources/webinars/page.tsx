import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WebinarsView } from "@/components/resources/sections";
import { SectionHero } from "@/components/resources/shared";
import { getResourceSection, getWebinars } from "@/lib/data/resources";

/** CMS edits show on the site within a minute. */
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const d = await getResourceSection("webinars");
  return d ? { title: d.name, description: d.description } : {};
}

export default async function WebinarsPage() {
  const [d, webinars] = await Promise.all([getResourceSection("webinars"), getWebinars()]);
  if (!d) notFound();
  return (
    <>
      <SectionHero hero={d.hero} />
      <WebinarsView d={d} webinars={webinars} />
    </>
  );
}
