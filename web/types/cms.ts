import type { IconName } from "@/components/ui/Icon";
import type { PublishStatus } from "./blog";

/** Collections the admin edits. Keys match the prototype's cms-store.jsx so stored content carries over. */
export type CmsCollectionKey =
  | "insights"
  | "cases"
  | "papers"
  | "courses"
  | "webinars"
  | "articles"
  | "events"
  | "dataSkillsTraining"
  | "learn";

/**
 * How a field is edited. "list" is one entry per line ("Heading | body" where the label says so),
 * "tags" is comma separated, "select:A,B" is a fixed option list.
 */
export type CmsFieldType = "text" | "slug" | "textarea" | "tags" | "image" | "markdown" | "list" | "pdf" | `select:${string}`;

export type CmsFieldDef = { key: string; label: string; type: CmsFieldType };
export type CmsColumn = { key: string; label: string };

export type CmsCollection = {
  key: CmsCollectionKey;
  label: string;
  icon: IconName;
  singular: string;
  columns: CmsColumn[];
  fields: CmsFieldDef[];
};

/**
 * One editable entry. Every field is stored as a string, the way the editor holds it: lists are
 * newline separated and pairs use " | ". The site-side mapping back to typed records splits them.
 */
export type CmsRecord = {
  id: string;
  slug: string;
  status: PublishStatus;
  /** ISO date (YYYY-MM-DD) of the last save. */
  updated: string;
  [field: string]: string;
};

export type CmsSeed = Record<CmsCollectionKey, CmsRecord[]>;

export type CmsRole = "Admin" | "Editor";
export type CmsUser = { email: string; name: string; role: CmsRole };
