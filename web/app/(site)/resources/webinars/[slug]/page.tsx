import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WebinarDetail } from "@/components/resources/details";
import { getResourceSection, getWebinarBySlug, getWebinarSlugs, getWebinars } from "@/lib/data/resources";

/** CMS edits show on the site within a minute. */
export const revalidate = 60;

export async function generateStaticParams() {
  return (await getWebinarSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/resources/webinars/[slug]">): Promise<Metadata> {
  const w = await getWebinarBySlug((await props.params).slug);
  return w ? { title: w.title, description: w.summary } : {};
}

export default async function WebinarPage(props: PageProps<"/resources/webinars/[slug]">) {
  const { slug } = await props.params;
  const [w, all, section] = await Promise.all([getWebinarBySlug(slug), getWebinars(), getResourceSection("webinars")]);
  if (!w) notFound();
  const others = all.filter((o) => o.slug !== slug).slice(0, 3);
  return <WebinarDetail w={w} others={others} sectionHero={section?.hero.image ?? ""} />;
}
