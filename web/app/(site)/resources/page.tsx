import type { Metadata } from "next";
import { ResourcesHubView } from "@/components/hubs/HubViews";
import { getHub } from "@/lib/data/hubs";

export async function generateMetadata(): Promise<Metadata> {
  const hub = await getHub("resources");
  return { title: hub.seo.title, description: hub.seo.description };
}

export default async function ResourcesHubPage() {
  return <ResourcesHubView hub={await getHub("resources")} />;
}
