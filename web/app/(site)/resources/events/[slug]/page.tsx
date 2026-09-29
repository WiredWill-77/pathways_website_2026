import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EventDetail } from "@/components/resources/details";
import { getEventBySlug, getEventSlugs, getEvents, getResourceSection } from "@/lib/data/resources";

/** CMS edits show on the site within a minute. */
export const revalidate = 60;

export async function generateStaticParams() {
  return (await getEventSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/resources/events/[slug]">): Promise<Metadata> {
  const e = await getEventBySlug((await props.params).slug);
  return e ? { title: e.name, description: e.summary } : {};
}

export default async function EventPage(props: PageProps<"/resources/events/[slug]">) {
  const { slug } = await props.params;
  const [e, all, section] = await Promise.all([getEventBySlug(slug), getEvents(), getResourceSection("events")]);
  if (!e) notFound();
  const others = all.filter((o) => o.slug !== slug).slice(0, 3);
  return <EventDetail e={e} others={others} sectionHero={section?.hero.image ?? ""} />;
}
