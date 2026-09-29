import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionHero } from "@/components/resources/shared";
import { WhitepapersView } from "@/components/whitepapers/WhitepapersView";
import { getResourceSection } from "@/lib/data/resources";
import { getWhitepapers } from "@/lib/data/whitepapers";
import { requestWhitepaperAction } from "./actions";

/** CMS edits show on the site within a minute. */
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const d = await getResourceSection("whitepapers");
  return d ? { title: d.name, description: d.description } : {};
}

export default async function WhitepapersPage() {
  const [d, papers] = await Promise.all([getResourceSection("whitepapers"), getWhitepapers()]);
  if (!d) notFound();
  return (
    <>
      <SectionHero hero={d.hero} />
      <WhitepapersView d={d} papers={papers} requestAction={requestWhitepaperAction} />
    </>
  );
}
