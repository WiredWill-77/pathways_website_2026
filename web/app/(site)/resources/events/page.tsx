import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EventsView } from "@/components/resources/sections";
import { SectionHero } from "@/components/resources/shared";
import { getEvents, getResourceSection } from "@/lib/data/resources";

/** CMS edits show on the site within a minute. */
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const d = await getResourceSection("events");
  return d ? { title: d.name, description: d.description } : {};
}

export default async function EventsPage() {
  const [d, events] = await Promise.all([getResourceSection("events"), getEvents()]);
  if (!d) notFound();
  return (
    <>
      <SectionHero hero={d.hero} />
      <EventsView d={d} events={events} />
    </>
  );
}
