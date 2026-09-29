import { cache } from "react";
import { BLOG_POSTS, CASE_STUDIES, COURSES, RESOURCE_ARTICLE_TEASERS, RESOURCE_EVENTS, RESOURCE_SECTIONS, RESOURCE_WEBINARS, WHITEPAPERS } from "@/data/mockData";
import { createPublicClient } from "@/lib/supabase/server";
import type { BlogPost } from "@/types/blog";
import type { CaseStudy } from "@/types/case-studies";
import type { CmsCollectionKey } from "@/types/cms";
import type { Course, SyllabusPart } from "@/types/courses";
import type { ArticleTeaser, LearnSection, ResourceEvent, Webinar } from "@/types/resources";
import type { TrainingService } from "@/types/services";
import type { Whitepaper } from "@/types/whitepapers";
import type { Stat } from "@/types/blocks";

/*
 * Site side of the CMS. The admin stores each entry as flat strings in `cms_records`
 * (see lib/data/cms.ts, which builds the same shape from the mock records). Everything here turns
 * those rows back into the typed records the pages use.
 *
 * Rules:
 *  - Only published rows reach the site. Once a collection has rows in the database, the database is
 *    the source of truth for which entries exist, their order and their editable fields.
 *  - Fields the CMS does not edit (solution cards, syllabus meta, SEO, and so on) come from the
 *    mock record with the same slug. New entries get plain defaults for those.
 *  - If the database is unreachable or a collection has no rows, the mock records are used, so the
 *    site keeps working before the first admin sign-in seeds the table.
 */

type Fields = Record<string, string>;
type Row = { id: string; slug: string; fields: Fields };

/** Published rows for one collection, in display order. `null` when the database has nothing to say. */
const publishedRows = cache(async (collection: CmsCollectionKey): Promise<Row[] | null> => {
  try {
    const { data, error } = await createPublicClient()
      .from("cms_records")
      .select("id,slug,status,fields,sort_order,updated_at")
      .eq("collection", collection)
      .order("sort_order")
      .order("updated_at", { ascending: false });
    if (error) throw error;
    /* Anon only sees published rows. An empty result means either never seeded (use mock) or all drafts. */
    if (!data.length) return (await isSeeded(collection)) ? [] : null;
    return data.map((r) => ({ id: r.id, slug: r.slug || r.id, fields: (r.fields ?? {}) as Fields }));
  } catch (e) {
    console.error(`cms_records(${collection}) read failed, using mock data:`, e instanceof Error ? e.message : e);
    return null;
  }
});

/** True when the collection has any rows, drafts included. The RPC exposes only that boolean. */
async function isSeeded(collection: CmsCollectionKey): Promise<boolean> {
  const { data, error } = await createPublicClient().rpc("cms_collection_seeded", { p_collection: collection });
  return !error && data === true;
}

/* ------------------------------------------------------------------ parsing helpers */

const str = (f: Fields, k: string) => (f[k] ?? "").trim();
const opt = (f: Fields, k: string) => str(f, k) || undefined;
const lines = (f: Fields, k: string) => (f[k] ?? "").split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
const tags = (f: Fields, k: string) => (f[k] ?? "").split(",").map((t) => t.trim()).filter(Boolean);
const pairs = (f: Fields, k: string): [string, string][] =>
  lines(f, k).map((l) => {
    const i = l.indexOf(" | ");
    return i < 0 ? [l, ""] : [l.slice(0, i).trim(), l.slice(i + 3).trim()];
  });

/** Maps rows onto records, starting each one from the mock record with the same slug when there is one. */
function overlay<T>(mock: readonly T[], rows: Row[] | null, slugOf: (t: T) => string, build: (row: Row, base: T | undefined, index: number) => T): T[] {
  if (!rows) return mock.slice();
  const bySlug = new Map(mock.map((m) => [slugOf(m), m]));
  return rows.map((r, i) => build(r, bySlug.get(r.slug), i));
}

/* ------------------------------------------------------------------ collections */

export async function blogRecords(): Promise<BlogPost[]> {
  return overlay(BLOG_POSTS, await publishedRows("insights"), (p) => p.slug, ({ slug, fields: f }, base) => ({
    ...base,
    slug,
    status: "published",
    title: str(f, "title"),
    date: str(f, "date"),
    categories: tags(f, "categories"),
    excerpt: str(f, "excerpt"),
    hero: opt(f, "hero"),
    thumb: opt(f, "thumb"),
    body: lines(f, "body"),
  }));
}

export async function caseStudyRecords(): Promise<CaseStudy[]> {
  return overlay(CASE_STUDIES, await publishedRows("cases"), (c) => c.slug, ({ slug, fields: f }, base) => ({
    solution: [],
    ...base,
    slug,
    status: "published",
    client: str(f, "title"),
    category: str(f, "category"),
    published: str(f, "published"),
    hero: opt(f, "hero"),
    lead: str(f, "lead"),
    rest: str(f, "rest"),
    intro: str(f, "intro"),
    overview: str(f, "overview"),
    challenge: str(f, "challenge"),
    outcomes: lines(f, "outcomes"),
    conclusion: str(f, "conclusion"),
  }));
}

export async function whitepaperRecords(): Promise<Whitepaper[]> {
  return overlay(WHITEPAPERS, await publishedRows("papers"), (w) => w.slug, ({ slug, fields: f }, base) => ({
    length: "",
    published: "",
    ...base,
    slug,
    status: "published",
    title: str(f, "title"),
    type: str(f, "type"),
    strap: str(f, "strap"),
    summary: str(f, "summary"),
    sections: pairs(f, "sections").map(([title, body]) => ({ title, body })),
    takeaways: lines(f, "takeaways"),
    pdfUrl: opt(f, "pdfUrl"),
  }));
}

export async function courseRecords(): Promise<Course[]> {
  const mock = [...COURSES].sort((a, b) => a.order - b.order);
  const list = overlay(mock, await publishedRows("courses"), (c) => c.slug, ({ slug, fields: f }, base, i) => {
    const outline: SyllabusPart[] = pairs(f, "outline").map(([title, text], n) => ({
      title,
      text,
      meta: base?.outline.find((o) => o.title === title)?.meta ?? base?.outline[n]?.meta ?? "",
    }));
    const summary = str(f, "summary");
    return {
      level: "Foundation" as Course["level"],
      skills: [],
      prereqs: "",
      seo: { title: str(f, "title"), description: summary },
      ...base,
      slug,
      status: "published" as const,
      order: i + 1,
      title: str(f, "title"),
      audience: str(f, "audience"),
      length: str(f, "length"),
      summary,
      eyebrow: str(f, "eyebrow"),
      lead: str(f, "lead"),
      rest: str(f, "rest"),
      intro: str(f, "intro"),
      outline,
      outcomes: lines(f, "outcomes"),
    };
  });
  return list;
}

export async function webinarRecords(): Promise<Webinar[]> {
  return overlay(RESOURCE_WEBINARS, await publishedRows("webinars"), (w) => w.slug, ({ slug, fields: f }, base) => ({
    ...base,
    slug,
    status: "published",
    title: str(f, "session"),
    kind: base?.kind ?? (str(f, "date") ? "live" : "on-demand"),
    date: str(f, "date"),
    where: str(f, "where"),
    summary: str(f, "covered"),
    length: str(f, "length"),
    image: opt(f, "hero"),
    about: lines(f, "about"),
    learn: lines(f, "learn"),
    speakers: pairs(f, "speakers").map(([name, role]) => ({ name, role })),
  }));
}

export async function articleTeaserRecords(): Promise<ArticleTeaser[]> {
  return overlay(RESOURCE_ARTICLE_TEASERS, await publishedRows("articles"), (a) => a.slug, ({ slug, fields: f }, base) => ({
    ...base,
    slug,
    status: "published",
    title: str(f, "title"),
    category: str(f, "category"),
    excerpt: str(f, "excerpt"),
  }));
}

export async function eventRecords(): Promise<ResourceEvent[]> {
  return overlay(RESOURCE_EVENTS, await publishedRows("events"), (e) => e.slug, ({ slug, fields: f }, base) => ({
    ...base,
    slug,
    status: "published",
    name: str(f, "name"),
    date: str(f, "date"),
    time: str(f, "time"),
    city: str(f, "city"),
    venue: str(f, "venue"),
    format: str(f, "format"),
    summary: str(f, "summary"),
    image: opt(f, "hero"),
    about: lines(f, "about"),
    agenda: pairs(f, "agenda").map(([time, item]) => ({ time, item })),
    audience: lines(f, "audience"),
  }));
}

const stats = (f: Fields, k: string): Stat[] => pairs(f, k).map(([label, value]) => ({ label, value }));

/** The Data Skills Training service page: hero copy and metrics are editable, the rest stays as authored. */
export async function trainingServiceOverride(): Promise<Partial<TrainingService> | null> {
  const row = (await publishedRows("dataSkillsTraining"))?.[0];
  if (!row) return null;
  const f = row.fields;
  return { name: str(f, "title"), eyebrow: str(f, "eyebrow"), lead: str(f, "lead"), rest: str(f, "rest"), intro: str(f, "intro"), hero: str(f, "hero"), meta: stats(f, "metrics") };
}

/** The Learn section hero: editable copy and metrics over the authored track list. Null when hidden. */
export async function learnSectionRecord(): Promise<LearnSection | null> {
  const mock = RESOURCE_SECTIONS.learn;
  const rows = await publishedRows("learn");
  if (!rows) return mock.status === "published" ? mock : null;
  const row = rows[0];
  if (!row) return null;
  const f = row.fields;
  return {
    ...mock,
    status: "published",
    name: str(f, "title"),
    hero: { ...mock.hero, eyebrow: str(f, "eyebrow"), lead: str(f, "lead"), rest: str(f, "rest"), intro: str(f, "intro"), image: str(f, "hero") || mock.hero.image, meta: stats(f, "metrics") },
  };
}
