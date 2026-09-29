import { SOLUTIONS } from "@/data/mockData";
import { mockQuery } from "./mock-client";
import type { Solution, SolutionSummary, SolutionType } from "@/types/solutions";

const summarise = ({ slug, type, name, label, intro, image, icon, products, href }: Solution): SolutionSummary => ({
  slug,
  type,
  name,
  label,
  intro,
  image,
  icon,
  products,
  href,
});

/** Every solutions page (industries first, then roles), optionally filtered by type. */
export async function getSolutions(type?: SolutionType): Promise<SolutionSummary[]> {
  return mockQuery(() => SOLUTIONS.filter((s) => !type || s.type === type).map(summarise));
}

export async function getSolutionBySlug(slug: string): Promise<Solution | null> {
  return mockQuery(() => SOLUTIONS.find((s) => s.slug === slug) ?? null);
}

export async function getSolutionSlugs(): Promise<string[]> {
  return mockQuery(() => SOLUTIONS.map((s) => s.slug));
}
