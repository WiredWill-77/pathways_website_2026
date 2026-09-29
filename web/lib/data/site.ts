import { FOOTER, NAVIGATION, SITE_SETTINGS } from "@/data/mockData";
import { mockQuery } from "./mock-client";
import type { Footer, Navigation, SiteSettings } from "@/types/site";

export async function getNavigation(): Promise<Navigation> {
  return mockQuery(() => NAVIGATION);
}

export async function getFooter(): Promise<Footer> {
  return mockQuery(() => FOOTER);
}

export async function getSiteSettings(): Promise<SiteSettings> {
  return mockQuery(() => SITE_SETTINGS);
}
