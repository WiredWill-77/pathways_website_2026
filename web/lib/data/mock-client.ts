/**
 * The only place the app touches mock data at runtime. Every accessor in lib/data/* returns
 * through `mockQuery`, so each one already has the shape of a real async query:
 *
 *   // today
 *   export async function getCaseStudy(slug: string) {
 *     return mockQuery(() => CASE_STUDIES.find((c) => c.slug === slug) ?? null);
 *   }
 *
 *   // with Supabase
 *   export async function getCaseStudy(slug: string) {
 *     const { data, error } = await supabase.from("case_studies").select("*").eq("slug", slug).maybeSingle();
 *     if (error) throw error;
 *     return data;
 *   }
 *
 * Results are deep-cloned so callers can never mutate the shared mock arrays, which mirrors a
 * network boundary. Set MOCK_LATENCY_MS to simulate a slow backend while building loading states.
 */
const LATENCY = Number(process.env.NEXT_PUBLIC_MOCK_LATENCY_MS ?? process.env.MOCK_LATENCY_MS ?? 0);

export async function mockQuery<T>(read: () => T): Promise<T> {
  if (LATENCY > 0) await new Promise((r) => setTimeout(r, LATENCY));
  const value = read();
  return value === undefined ? value : structuredClone(value);
}

/** Error thrown by accessors for a missing record, so pages can map it to notFound(). */
export class NotFoundError extends Error {
  constructor(what: string) {
    super(`${what} not found`);
    this.name = "NotFoundError";
  }
}
