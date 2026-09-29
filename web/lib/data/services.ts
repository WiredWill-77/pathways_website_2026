import { SERVICE_ORDER, SERVICES } from "@/data/mockData";
import { trainingServiceOverride } from "./cms-content";
import { mockQuery } from "./mock-client";
import type { Service, ServiceSummary } from "@/types/services";

/** Service records with the CMS-edited Data Skills Training copy applied over the authored page. */
async function allServices(): Promise<Service[]> {
  const training = await trainingServiceOverride();
  return SERVICES.map((s) => (training && s.slug === "data-skills-training" ? ({ ...s, ...training } as Service) : s));
}

const ordered = async () => {
  const all = await allServices();
  return SERVICE_ORDER.map((slug) => all.find((s) => s.slug === slug)).filter((s): s is Service => !!s);
};

/** Every service page record, in menu order. */
export async function getServices(): Promise<Service[]> {
  const rows = await ordered();
  return mockQuery(() => rows);
}

/** Card-level fields for lists (admin, menus). */
export async function getServiceSummaries(): Promise<ServiceSummary[]> {
  const rows = await ordered();
  return mockQuery(() => rows.map(({ slug, name, eyebrow, intro, hero }) => ({ slug, name, eyebrow, intro, hero })));
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const all = await allServices();
  return mockQuery(() => all.find((s) => s.slug === slug) ?? null);
}

export async function getServiceSlugs(): Promise<string[]> {
  return mockQuery(() => [...SERVICE_ORDER]);
}
