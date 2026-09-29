import { validateContactFields } from "@/components/resources/validation";
import { RESOURCE_ARTICLES, RESOURCE_SECTIONS } from "@/data/mockData";
import { articleTeaserRecords, eventRecords, learnSectionRecord, webinarRecords } from "@/lib/data/cms-content";
import { mockQuery } from "@/lib/data/mock-client";
import type {
  Article,
  ArticleTeaser,
  EventRegistrationInput,
  EventRegistrationResult,
  ResourceEvent,
  ResourceSectionKey,
  ResourceSectionMap,
  Webinar,
} from "@/types/resources";

const live = <T extends { status: string }>(rows: T[]) => rows.filter((r) => r.status === "published");

/** Hero, headings, stats and closing copy for one resource section page. */
export async function getResourceSection<K extends ResourceSectionKey>(section: K): Promise<ResourceSectionMap[K] | null> {
  if (section === "learn") return (await learnSectionRecord().then((v) => mockQuery(() => v))) as ResourceSectionMap[K] | null;
  return mockQuery(() => {
    const s = RESOURCE_SECTIONS[section];
    return s && s.status === "published" ? s : null;
  });
}

/* ------------------------------------------------------------------ Webinars */

export async function getWebinars(): Promise<Webinar[]> {
  const rows = live(await webinarRecords());
  return mockQuery(() => rows);
}

export async function getWebinarBySlug(slug: string): Promise<Webinar | null> {
  const rows = live(await webinarRecords());
  return mockQuery(() => rows.find((w) => w.slug === slug) ?? null);
}

export async function getWebinarSlugs(): Promise<string[]> {
  const rows = live(await webinarRecords());
  return mockQuery(() => rows.map((w) => w.slug));
}

/* ------------------------------------------------------------------ Articles */

/** Featured cards on the Articles section page. */
export async function getArticleTeasers(): Promise<ArticleTeaser[]> {
  const rows = live(await articleTeaserRecords());
  return mockQuery(() => rows);
}

/** Field notes, newest first as authored. Listed on the Blog section, read at /resources/articles/[slug]. */
export async function getArticles(): Promise<Article[]> {
  return mockQuery(() => live(RESOURCE_ARTICLES));
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  return mockQuery(() => live(RESOURCE_ARTICLES).find((a) => a.slug === slug) ?? null);
}

export async function getArticleSlugs(): Promise<string[]> {
  return mockQuery(() => live(RESOURCE_ARTICLES).map((a) => a.slug));
}

/* ------------------------------------------------------------------ Events */

export async function getEvents(): Promise<ResourceEvent[]> {
  const rows = live(await eventRecords());
  return mockQuery(() => rows);
}

export async function getEventBySlug(slug: string): Promise<ResourceEvent | null> {
  const rows = live(await eventRecords());
  return mockQuery(() => rows.find((e) => e.slug === slug) ?? null);
}

export async function getEventSlugs(): Promise<string[]> {
  const rows = live(await eventRecords());
  return mockQuery(() => rows.map((e) => e.slug));
}

/**
 * Mock seat request for an event. Validates and returns a reference; nothing is stored or logged.
 * The event pages currently route "Request A Seat" to the contact page, as the design does.
 */
export async function registerForEvent(input: EventRegistrationInput): Promise<EventRegistrationResult> {
  const events = live(await eventRecords());
  return mockQuery((): EventRegistrationResult => {
    const errors: Extract<EventRegistrationResult, { ok: false }>["errors"] = validateContactFields(input);
    if (!events.some((e) => e.slug === input.eventSlug)) errors.form = "This event is no longer taking requests.";
    if (Object.keys(errors).length) return { ok: false, errors };
    return { ok: true, id: "evt_" + Math.random().toString(36).slice(2, 10) };
  });
}
