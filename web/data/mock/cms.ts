import type { CmsCollection, CmsUser } from "@/types/cms";

/* Admin CMS schemas and team. Prototype: cms-store.jsx CMS_COLLECTIONS and CMS_USERS.
   The records themselves are seeded from the other mock files by lib/data/cms.ts. */

const col = (pairs: [key: string, label: string][]) => pairs.map(([key, label]) => ({ key, label }));
const fields = (defs: [key: string, label: string, type: CmsCollection["fields"][number]["type"]][]) =>
  defs.map(([key, label, type]) => ({ key, label, type }));

const PAGE_HERO_FIELDS = fields([
  ["title", "Title", "text"],
  ["eyebrow", "Eyebrow", "text"],
  ["lead", "Heading (line 1)", "text"],
  ["rest", "Heading (line 2, accent)", "text"],
  ["intro", "Intro", "markdown"],
  ["hero", "Hero image", "image"],
  ["metrics", "Hero metrics (one per line, Label | Value)", "list"],
]);

export const CMS_COLLECTIONS: CmsCollection[] = [
  {
    key: "insights",
    label: "Blogs",
    icon: "newspaper",
    singular: "Post",
    columns: col([["title", "Post"], ["date", "Date"], ["categories", "Categories"], ["status", "Status"]]),
    fields: fields([
      ["title", "Title", "text"],
      ["slug", "Slug", "slug"],
      ["date", "Date", "text"],
      ["categories", "Categories (comma separated)", "tags"],
      ["excerpt", "Excerpt", "textarea"],
      ["hero", "Hero image", "image"],
      ["thumb", "List thumbnail (optional)", "image"],
      ["body", "Body", "markdown"],
    ]),
  },
  {
    key: "cases",
    label: "Case Studies",
    icon: "briefcase",
    singular: "Case study",
    columns: col([["title", "Client"], ["category", "Category"], ["published", "Published"], ["status", "Status"]]),
    fields: fields([
      ["title", "Client", "text"],
      ["slug", "Slug", "slug"],
      ["category", "Category", "text"],
      ["published", "Year published", "text"],
      ["lead", "Headline (line 1, accent)", "text"],
      ["rest", "Headline (line 2)", "text"],
      ["intro", "Intro", "textarea"],
      ["hero", "Hero image", "image"],
      ["overview", "Overview", "markdown"],
      ["challenge", "Challenge", "markdown"],
      ["outcomes", "Outcomes (one per line)", "list"],
      ["conclusion", "Conclusion", "textarea"],
    ]),
  },
  {
    key: "papers",
    label: "Whitepapers",
    icon: "file-text",
    singular: "Whitepaper",
    columns: col([["title", "Paper"], ["type", "Type"], ["updated", "Updated"], ["status", "Status"]]),
    fields: fields([
      ["title", "Title", "text"],
      ["slug", "Slug", "slug"],
      ["type", "Type", "select:Research,Architecture,Governance,Case Study,Method"],
      ["strap", "Strapline", "textarea"],
      ["summary", "Executive summary", "markdown"],
      ["sections", "Sections (Heading | body, one per line)", "list"],
      ["takeaways", "Recommendations (one per line)", "list"],
      ["pdfUrl", "PDF Download URL (sent after the form is submitted)", "pdf"],
    ]),
  },
  {
    key: "courses",
    label: "Courses",
    icon: "book-open",
    singular: "Course",
    columns: col([["title", "Module"], ["audience", "Audience"], ["length", "Length"], ["status", "Status"]]),
    fields: fields([
      ["title", "Title", "text"],
      ["slug", "Slug", "slug"],
      ["audience", "Audience", "text"],
      ["length", "Length", "text"],
      ["summary", "Card summary / what is covered", "textarea"],
      ["eyebrow", "Eyebrow", "text"],
      ["lead", "Heading (line 1)", "text"],
      ["rest", "Heading (line 2, accent)", "text"],
      ["intro", "Intro", "markdown"],
      ["outline", "Module outline (Heading | body, one per line)", "list"],
      ["outcomes", "Outcomes (one per line)", "list"],
    ]),
  },
  {
    key: "webinars",
    label: "Webinars",
    icon: "radio",
    singular: "Webinar",
    columns: col([["session", "Session"], ["date", "Date"], ["where", "Where"], ["status", "Status"]]),
    fields: fields([
      ["session", "Session Title", "text"],
      ["slug", "Slug", "slug"],
      ["date", "Date", "text"],
      ["where", "Where (Place · Time)", "text"],
      ["length", "Length", "text"],
      ["covered", "What Is Covered", "textarea"],
      ["hero", "Hero image", "image"],
      ["about", "About (one paragraph per line)", "markdown"],
      ["learn", "What you will learn (one per line)", "list"],
      ["speakers", "Speakers (Name | Role, one per line)", "list"],
    ]),
  },
  {
    key: "articles",
    label: "Articles",
    icon: "pen-line",
    singular: "Article",
    columns: col([["title", "Article"], ["category", "Category"], ["status", "Status"]]),
    fields: fields([
      ["title", "Title", "text"],
      ["slug", "Slug", "slug"],
      ["category", "Category", "text"],
      ["excerpt", "Excerpt", "textarea"],
    ]),
  },
  {
    key: "events",
    label: "Events",
    icon: "calendar-days",
    singular: "Event",
    columns: col([["name", "Event"], ["date", "Date"], ["city", "City"], ["status", "Status"]]),
    fields: fields([
      ["name", "Event Name", "text"],
      ["slug", "Slug", "slug"],
      ["date", "Date", "text"],
      ["time", "Time", "text"],
      ["city", "City", "text"],
      ["venue", "Venue", "text"],
      ["format", "Format", "text"],
      ["summary", "Summary", "textarea"],
      ["hero", "Hero image", "image"],
      ["about", "About (one paragraph per line)", "markdown"],
      ["agenda", "Agenda (Time | item, one per line)", "list"],
      ["audience", "Who should attend (one per line)", "list"],
    ]),
  },
  {
    key: "dataSkillsTraining",
    label: "Data Skills Training",
    icon: "graduation-cap",
    singular: "Page",
    columns: col([["title", "Page"], ["updated", "Updated"], ["status", "Status"]]),
    fields: PAGE_HERO_FIELDS,
  },
  {
    key: "learn",
    label: "Learn",
    icon: "library",
    singular: "Page",
    columns: col([["title", "Page"], ["updated", "Updated"], ["status", "Status"]]),
    fields: PAGE_HERO_FIELDS,
  },
];

/** Mock team. Any password signs in; the role decides who can delete content and see the Team page. */
export const CMS_USERS: CmsUser[] = [
  { email: "admin@pathwaystechnologies.com", name: "William Ombura", role: "Admin" },
  { email: "editor@pathwaystechnologies.com", name: "Loren Anduvare", role: "Editor" },
];
