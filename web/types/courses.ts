import type { Quote, Stat } from "./blocks";

/** One part of a course syllabus. */
export type SyllabusPart = { title: string; text: string; meta: string };

export type CourseLevel = "Foundation" | "Intermediate" | "Advanced" | "Executive";

/** Card-level fields, enough for the Data Skills Training curriculum grid and the checkout picker. */
export type CourseSummary = {
  slug: string;
  /** Position in the module ladder, 1-based. */
  order: number;
  title: string;
  audience: string;
  length: string;
  level: CourseLevel;
  summary: string;
  /** Cover image. The designer-dropped slot art (course-cover-<slug>) takes precedence when present. */
  cover?: string;
  status: "published" | "draft";
};

/** A Data Skills Training module page. */
export type Course = CourseSummary & {
  eyebrow: string;
  lead: string;
  rest: string;
  intro: string;
  skills: string[];
  prereqs: string;
  outline: SyllabusPart[];
  outcomes: string[];
  seo: { title: string; description: string };
};

export type FaqEntry = { question: string; answer: string };

/** Copy shared by every course page (the same FAQ, track record and quote on each module). */
export type CoursePageContent = {
  format: string;
  faqs: FaqEntry[];
  quote: Quote;
  trackRecord: Stat[];
  deliveryNote: string;
};
