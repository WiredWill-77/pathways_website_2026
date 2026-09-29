import type { ResourceSection } from "@/lib/routes";
import type { IconItem, Quote, Stat, TitledText } from "@/types/blocks";

/** Every CMS-editable record carries a publish state. Only published records reach the site. */
export type PublishStatus = "published" | "draft";

export type ResourceSectionKey = ResourceSection;

/** Hero block at the top of each resource section page (prototype: RESOURCES[section] hero fields). */
export type ResourceHero = {
  eyebrow: string;
  lead: string;
  rest: string;
  intro: string;
  meta: Stat[];
  /** Hero photograph (path under /public or an absolute URL). */
  image: string;
  /** Ken Burns start and end scale, when a section overrides the default drift. */
  zoomFrom?: number;
  zoomTo?: number;
  /** One-off styling for the primary hero button (the whitepapers page uses a blue fill). */
  ctaStyle?: { background: string; borderColor: string };
  ctaClassName?: string;
};

export type TwoTone = { lead: string; rest: string };
export type ClosingBand = { title: string; text: string; secondary: { label: string; href: string } };

type SectionBase<K extends ResourceSectionKey> = {
  key: K;
  status: PublishStatus;
  name: string;
  /** Meta description for the page. */
  description: string;
  hero: ResourceHero;
  stats: Stat[];
  closing: ClosingBand;
};

export type WebinarsSection = SectionBase<"webinars"> & {
  upcomingHeading: TwoTone;
  onDemandHeading: TwoTone;
};

export type WhitepapersSection = SectionBase<"whitepapers"> & {
  libraryHeading: TwoTone;
  quote: Quote;
};

export type ArticlesSection = SectionBase<"articles"> & {
  topics: string[];
  readingHeading: TwoTone;
};

export type LearnTrack = {
  title: string;
  audience: string;
  length: string;
  summary: string;
  /** Course detail page this track opens, when there is one. */
  courseSlug?: string;
};

export type LearnSection = SectionBase<"learn"> & {
  tracksHeading: TwoTone;
  tracks: LearnTrack[];
  how: IconItem[];
  labs: string[];
};

export type BlogSection = SectionBase<"blog"> & {
  voices: TitledText[];
};

export type EventsSection = SectionBase<"events"> & {
  scheduleHeading: TwoTone;
  quote: Quote;
  formats: IconItem[];
};

export type ResourceSectionMap = {
  webinars: WebinarsSection;
  whitepapers: WhitepapersSection;
  articles: ArticlesSection;
  learn: LearnSection;
  blog: BlogSection;
  events: EventsSection;
};

export type ResourceSectionContent = ResourceSectionMap[ResourceSectionKey];

/* ------------------------------------------------------------------ Webinars */

export type Speaker = { name: string; role: string };

export type Webinar = {
  slug: string;
  status: PublishStatus;
  title: string;
  /** Live sessions have a date and place; on-demand sessions are recordings. */
  kind: "live" | "on-demand";
  /** Display date, e.g. "12 Aug 2026". Empty for on-demand recordings. */
  date: string;
  /** "Nairobi · 14:00 EAT" style: place, then an optional time after " · ". */
  where: string;
  /** One-line description used on cards and as the hero intro. */
  summary: string;
  length: string;
  /** Optional hero and cover photograph. Falls back to the section hero and the cover slot. */
  image?: string;
  about: string[];
  learn: string[];
  speakers: Speaker[];
};

/* ------------------------------------------------------------------ Articles */

/** Featured cards on the Articles section (CMS collection "articles"). No detail page in the design. */
export type ArticleTeaser = {
  slug: string;
  status: PublishStatus;
  title: string;
  category: string;
  excerpt: string;
};

/** A field note from the delivery teams, with a detail page at /resources/articles/[slug]. */
export type Article = {
  slug: string;
  status: PublishStatus;
  title: string;
  /** Writing team, e.g. "Data Science Practice". */
  team: string;
  date: string;
  excerpt: string;
  readTime: string;
  image?: string;
  body: string[];
  takeaways: string[];
};

/* ------------------------------------------------------------------ Events */

export type AgendaItem = { time: string; item: string };

export type ResourceEvent = {
  slug: string;
  status: PublishStatus;
  name: string;
  date: string;
  city: string;
  /** "Conference · Keynote and two workshop tracks": the kind, then detail after " · ". */
  format: string;
  time: string;
  venue: string;
  summary: string;
  image?: string;
  about: string[];
  agenda: AgendaItem[];
  audience: string[];
};

export type EventRegistrationInput = {
  eventSlug: string;
  name: string;
  email: string;
  company: string;
};

export type FieldErrors<K extends string> = Partial<Record<K, string>>;

export type EventRegistrationResult =
  | { ok: true; id: string }
  | { ok: false; errors: FieldErrors<keyof EventRegistrationInput | "form"> };
