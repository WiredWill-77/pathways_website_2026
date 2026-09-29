import type { Metadata } from "next";
import { ServicesHubView } from "@/components/hubs/HubViews";
import { getHub } from "@/lib/data/hubs";

export async function generateMetadata(): Promise<Metadata> {
  const hub = await getHub("services");
  return { title: hub.seo.title, description: hub.seo.description };
}

export default async function ServicesHubPage() {
  return <ServicesHubView hub={await getHub("services")} />;
}
