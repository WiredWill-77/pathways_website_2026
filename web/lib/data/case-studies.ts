import type { CaseStudy, CaseStudySummary } from "@/types/case-studies";
import { caseStudyRecords } from "./cms-content";
import { mockQuery } from "./mock-client";

const live = async () => (await caseStudyRecords()).filter((c) => c.status === "published");

/** Published case studies in display order. */
export async function getCaseStudies(): Promise<CaseStudySummary[]> {
  const rows = await live();
  return mockQuery(() =>
    rows.map(({ slug, status, client, category, published, hero, intro }) => ({ slug, status, client, category, published, hero, intro })),
  );
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const rows = await live();
  return mockQuery(() => rows.find((c) => c.slug === slug) ?? null);
}

export async function getCaseStudySlugs(): Promise<string[]> {
  const rows = await live();
  return mockQuery(() => rows.map((c) => c.slug));
}
