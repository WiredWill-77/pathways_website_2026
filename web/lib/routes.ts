/**
 * Single source of truth for URLs. The prototype linked between flat .html files; every one of
 * those maps to a clean App Router path here. Components call these helpers instead of writing
 * paths inline, and next.config.ts redirects the legacy file names so old links keep working.
 */

export const routes = {
  home: "/",
  about: "/about",
  contact: "/contact",
  partnerships: "/partnerships",
  pricing: "/pricing",
  services: "/services",
  service: (slug: string) => `/services/${slug}`,
  solutions: "/solutions",
  solution: (slug: string) => `/solutions/${slug}`,
  caseStudies: "/case-studies",
  caseStudy: (slug: string) => `/case-studies/${slug}`,
  insights: "/insights",
  insight: (slug: string) => `/insights/${slug}`,
  resources: "/resources",
  resourceSection: (section: ResourceSection) => `/resources/${section}`,
  webinar: (slug: string) => `/resources/webinars/${slug}`,
  event: (slug: string) => `/resources/events/${slug}`,
  article: (slug: string) => `/resources/articles/${slug}`,
  whitepaper: (slug: string) => `/whitepapers/${slug}`,
  course: (slug: string) => `/courses/${slug}`,
  checkout: "/checkout",
  admin: "/admin",
  riskConsole: "/risk-console",
} as const;

export type ResourceSection = "webinars" | "whitepapers" | "articles" | "learn" | "blog" | "events";

/** Slug helper matching the prototype's own: lower-case, runs of non-alphanumerics become "-". */
export function slugify(s: string): string {
  return String(s || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Static legacy file → route pairs. Prefix families (blog-*, case-study-*, ...) are handled in legacyHref. */
export const LEGACY_PAGES: Record<string, string> = {
  "Pathways Landing Page.html": routes.home,
  "About Us.html": routes.about,
  "Contact Us.html": routes.contact,
  "Partnerships.html": routes.partnerships,
  "Pricing.html": routes.pricing,
  "Services.html": routes.services,
  "Solutions.html": routes.solutions,
  "Case Studies.html": routes.caseStudies,
  "Insights.html": routes.insights,
  "Resources.html": routes.resources,
  "checkout.html": routes.checkout,
  "admin.html": routes.admin,
  "Risk Console (shadcn).html": routes.riskConsole,
  "blog.html": routes.insights,
  "case-study.html": routes.caseStudies,
  "course.html": routes.service("data-skills-training"),
  "resources-webinars.html": routes.resourceSection("webinars"),
  "resources-whitepapers.html": routes.resourceSection("whitepapers"),
  "resources-articles.html": routes.resourceSection("articles"),
  "resources-learn.html": routes.resourceSection("learn"),
  "resources-blog.html": routes.resourceSection("blog"),
  "resources-events.html": routes.resourceSection("events"),
  "webinar.html": routes.resourceSection("webinars"),
  "event.html": routes.resourceSection("events"),
  "post.html": routes.resourceSection("articles"),
  "whitepaper.html": routes.resourceSection("whitepapers"),
};

const PREFIX_FAMILIES: [prefix: string, to: (slug: string) => string][] = [
  ["blog-", routes.insight],
  ["case-study-", routes.caseStudy],
  ["services-", routes.service],
  ["solutions-", routes.solution],
  ["course-", routes.course],
  ["whitepaper-", routes.whitepaper],
];

/**
 * Converts any href found in the prototype ("Contact Us.html", "blog-foo.html", "#", external URLs)
 * into the app route. Unknown values pass through unchanged, so it is safe to wrap every href.
 */
export function legacyHref(href: string | undefined | null): string {
  if (!href) return "#";
  if (/^(https?:|mailto:|tel:|#|\/)/.test(href)) return href;
  const [file, query = ""] = href.split("?");
  const hash = file.includes("#") ? file.slice(file.indexOf("#")) : "";
  const name = decodeURIComponent(file.replace(/#.*$/, ""));
  if (LEGACY_PAGES[name]) {
    const slug = new URLSearchParams(query).get("slug");
    if (slug && name === "blog.html") return routes.insight(slug) + hash;
    if (slug && name === "case-study.html") return routes.caseStudy(slug) + hash;
    if (slug && name === "course.html") return routes.course(slug) + hash;
    if (slug && name === "whitepaper.html") return routes.whitepaper(slug) + hash;
    return LEGACY_PAGES[name] + hash;
  }
  for (const [prefix, to] of PREFIX_FAMILIES) {
    if (name.startsWith(prefix) && name.endsWith(".html")) return to(name.slice(prefix.length, -5)) + hash;
  }
  return href;
}

/** Top-level nav section that owns a pathname, for the active pill in the header. */
export function activeNavSection(pathname: string): string | null {
  if (pathname === routes.about) return "About Us";
  if (pathname === routes.partnerships) return "Partnerships";
  if (pathname.startsWith(routes.services)) return "Services";
  if (pathname.startsWith(routes.solutions)) return "Solutions";
  if (pathname.startsWith(routes.resources)) return "Resources";
  return null;
}
