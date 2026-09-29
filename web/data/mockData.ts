/**
 * Mock data entry point. Every structured record the UI renders (navigation, pages, posts,
 * case studies, courses, dashboards, CMS records) is defined under data/mock/ and re-exported here.
 *
 * Components never import this file. They call the async accessors in lib/data/*, which read from
 * here through mockQuery(). To move to Supabase, replace those accessors; this file then becomes
 * seed data for the database (see data/README.md).
 */
export * from "./mock/site";
export * from "./mock/home";
export * from "./mock/dashboards";
export * from "./mock/services";
export * from "./mock/courses";
export * from "./mock/hubs";
export * from "./mock/solutions";
export * from "./mock/blog";
export * from "./mock/case-studies";
export * from "./mock/resources";
export * from "./mock/whitepapers";
export * from "./mock/company";
export * from "./mock/risk-console";
export * from "./mock/cms";
