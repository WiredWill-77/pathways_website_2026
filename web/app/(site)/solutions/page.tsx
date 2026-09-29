import type { Metadata } from "next";
import { SolutionsHubView } from "@/components/hubs/HubViews";
import { getHub } from "@/lib/data/hubs";

export async function generateMetadata(): Promise<Metadata> {
  const hub = await getHub("solutions");
  return { title: hub.seo.title, description: hub.seo.description };
}

export default async function SolutionsHubPage() {
  return <SolutionsHubView hub={await getHub("solutions")} />;
}
