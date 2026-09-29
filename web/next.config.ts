import type { NextConfig } from "next";
import { LEGACY_PAGES } from "./lib/routes";

/** Prototype file names (e.g. "/Contact Us.html", "/blog-foo.html") redirect to their clean routes. */
function legacyRedirects() {
  const fixed = Object.entries(LEGACY_PAGES).map(([file, destination]) => ({
    source: "/" + encodeURI(file).replace(/[()]/g, (c) => "\\" + c),
    destination,
    permanent: true,
  }));
  const families: [string, string][] = [
    ["blog-", "/insights/"],
    ["case-study-", "/case-studies/"],
    ["services-", "/services/"],
    ["solutions-", "/solutions/"],
    ["course-", "/courses/"],
    ["whitepaper-", "/whitepapers/"],
  ];
  const prefixed = families.map(([prefix, to]) => ({
    source: `/${prefix}:slug.html`,
    destination: `${to}:slug`,
    permanent: true,
  }));
  /* Template pages that took ?slug=… (blog.html?slug=x) go to that record's page. These must come
     before the fixed entries, which would otherwise send them to the index. */
  const templated: [string, string][] = [
    ["blog.html", "/insights/"],
    ["case-study.html", "/case-studies/"],
    ["course.html", "/courses/"],
    ["whitepaper.html", "/whitepapers/"],
  ];
  const bySlug = templated.map(([file, to]) => ({
    source: "/" + file,
    has: [{ type: "query" as const, key: "slug", value: "(?<slug>[a-z0-9-]+)" }],
    destination: `${to}:slug`,
    permanent: true,
  }));
  return [...bySlug, ...fixed, ...prefixed];
}

const nextConfig: NextConfig = {
  async redirects() {
    return legacyRedirects();
  },
};

export default nextConfig;
