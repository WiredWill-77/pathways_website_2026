import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WhitepaperDocument } from "@/components/whitepapers/WhitepaperDocument";
import { getWhitepaperBySlug, getWhitepaperSlugs } from "@/lib/data/whitepapers";

/** CMS edits show on the site within a minute. */
export const revalidate = 60;

export async function generateStaticParams() {
  return (await getWhitepaperSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/whitepapers/[slug]">): Promise<Metadata> {
  const d = await getWhitepaperBySlug((await props.params).slug);
  return d ? { title: { absolute: `${d.title} | Pathways Technologies Whitepaper` }, description: d.strap } : {};
}

/** Printable four-page document with no site header or footer (prototype: whitepaper-<slug>.html). */
export default async function WhitepaperPage(props: PageProps<"/whitepapers/[slug]">) {
  const { slug } = await props.params;
  const paper = await getWhitepaperBySlug(slug);
  if (!paper) notFound();
  return <WhitepaperDocument paper={paper} />;
}
