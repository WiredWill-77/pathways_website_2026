import type { IconItem } from "./blocks";
import type { PublishStatus } from "./blog";

/** Case study records. Prototype: case-study-page.jsx CASE_STUDIES. The admin CMS edits these. */
export type CaseStudy = {
  slug: string;
  /** Only published case studies are returned by the accessors. Defaults to "published". */
  status: PublishStatus;
  client: string;
  category: string;
  /** Year published, as displayed. */
  published: string;
  /** Hero photograph: a path under /public or an absolute URL. */
  hero?: string;
  /** Two-tone hero heading: `lead` in the accent colour, then `rest`. */
  lead: string;
  rest: string;
  intro: string;
  overview: string;
  challenge: string;
  solution: IconItem[];
  outcomes?: string[];
  /** Closing band title. */
  conclusion: string;
  /** Meta description for the detail page. */
  description?: string;
};

/** Index row fields. */
export type CaseStudySummary = Pick<CaseStudy, "slug" | "status" | "client" | "category" | "published" | "hero" | "intro">;
