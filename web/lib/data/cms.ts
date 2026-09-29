import {
  BLOG_POSTS,
  CASE_STUDIES,
  CMS_COLLECTIONS,
  CMS_USERS,
  COURSES,
  RESOURCE_ARTICLE_TEASERS,
  RESOURCE_EVENTS,
  RESOURCE_SECTIONS,
  RESOURCE_WEBINARS,
  SERVICES,
  WHITEPAPERS,
} from "@/data/mockData";
import type { Stat } from "@/types/blocks";
import type { CmsCollection, CmsRecord, CmsSeed, CmsUser } from "@/types/cms";
import { mockQuery } from "./mock-client";

/*
 * Server-side reads for the admin CMS: the collection schemas, the team, and the starting content
 * for every collection, flattened from the site's own mock records into editor form. The admin page
 * passes these to the browser, where lib/data/cms-repository.ts keeps edits.
 *
 * With Supabase, getCmsSeed() goes away: the repository reads the same tables the site pages read.
 */

const lines = (a: readonly string[] | undefined) => (a ?? []).join("\n");
const pairLines = <T,>(a: readonly T[] | undefined, pick: (x: T) => [string, string]) =>
  lines((a ?? []).map((x) => pick(x).join(" | ")));
const metrics = (m: Stat[] | undefined) => pairLines(m, (s) => [s.label, s.value]);
const today = () => new Date().toISOString().slice(0, 10);

function row(slug: string, status: CmsRecord["status"] | undefined, fields: Record<string, string | undefined>): CmsRecord {
  const clean: Record<string, string> = {};
  for (const [k, v] of Object.entries(fields)) clean[k] = v ?? "";
  return { ...clean, id: slug, slug, status: status ?? "published", updated: today() };
}

function buildSeed(): CmsSeed {
  const training = SERVICES.find((s) => s.slug === "data-skills-training");
  const learn = RESOURCE_SECTIONS.learn;
  return {
    insights: BLOG_POSTS.map((p) =>
      row(p.slug, p.status, {
        title: p.title,
        date: p.date,
        categories: p.categories.join(", "),
        excerpt: p.excerpt,
        hero: p.hero,
        thumb: p.thumb,
        body: lines(p.body),
      }),
    ),
    cases: CASE_STUDIES.map((c) =>
      row(c.slug, c.status, {
        title: c.client,
        category: c.category,
        published: c.published,
        lead: c.lead,
        rest: c.rest,
        intro: c.intro,
        hero: c.hero,
        overview: c.overview,
        challenge: c.challenge,
        outcomes: lines(c.outcomes),
        conclusion: c.conclusion,
      }),
    ),
    papers: WHITEPAPERS.map((w) =>
      row(w.slug, w.status, {
        title: w.title,
        type: w.type,
        strap: w.strap,
        summary: w.summary,
        sections: pairLines(w.sections, (s) => [s.title, s.body]),
        takeaways: lines(w.takeaways),
        pdfUrl: w.pdfUrl,
      }),
    ),
    courses: [...COURSES]
      .sort((a, b) => a.order - b.order)
      .map((c) =>
        row(c.slug, c.status, {
          title: c.title,
          audience: c.audience,
          length: c.length,
          summary: c.summary,
          eyebrow: c.eyebrow,
          lead: c.lead,
          rest: c.rest,
          intro: c.intro,
          outline: pairLines(c.outline, (o) => [o.title, o.text]),
          outcomes: lines(c.outcomes),
        }),
      ),
    webinars: RESOURCE_WEBINARS.map((w) =>
      row(w.slug, w.status, {
        session: w.title,
        date: w.date,
        where: w.where,
        length: w.length,
        covered: w.summary,
        hero: w.image,
        about: lines(w.about),
        learn: lines(w.learn),
        speakers: pairLines(w.speakers, (s) => [s.name, s.role]),
      }),
    ),
    articles: RESOURCE_ARTICLE_TEASERS.map((a) =>
      row(a.slug, a.status, { title: a.title, category: a.category, excerpt: a.excerpt }),
    ),
    events: RESOURCE_EVENTS.map((e) =>
      row(e.slug, e.status, {
        name: e.name,
        date: e.date,
        time: e.time,
        city: e.city,
        venue: e.venue,
        format: e.format,
        summary: e.summary,
        hero: e.image,
        about: lines(e.about),
        agenda: pairLines(e.agenda, (a) => [a.time, a.item]),
        audience: lines(e.audience),
      }),
    ),
    dataSkillsTraining: training
      ? [
          row(training.slug, "published", {
            title: training.name,
            eyebrow: training.eyebrow,
            lead: training.lead,
            rest: training.rest,
            intro: training.intro,
            hero: training.hero,
            metrics: metrics(training.meta),
          }),
        ]
      : [],
    learn: [
      row("learn", learn.status, {
        title: learn.name,
        eyebrow: learn.hero.eyebrow,
        lead: learn.hero.lead,
        rest: learn.hero.rest,
        intro: learn.hero.intro,
        hero: learn.hero.image,
        metrics: metrics(learn.hero.meta),
      }),
    ],
  };
}

/** Collection schemas in sidebar order. */
export async function getCmsCollections(): Promise<CmsCollection[]> {
  return mockQuery(() => CMS_COLLECTIONS);
}

export async function getCmsUsers(): Promise<CmsUser[]> {
  return mockQuery(() => CMS_USERS);
}

/** Starting content for every collection, used the first time a browser opens the admin. */
export async function getCmsSeed(): Promise<CmsSeed> {
  return mockQuery(buildSeed);
}
