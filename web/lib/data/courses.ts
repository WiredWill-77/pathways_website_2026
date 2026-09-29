import { COURSE_PAGE_CONTENT } from "@/data/mockData";
import { courseRecords } from "./cms-content";
import { mockQuery } from "./mock-client";
import type { Course, CoursePageContent, CourseSummary } from "@/types/courses";

const published = async () => (await courseRecords()).filter((c) => c.status === "published").sort((a, b) => a.order - b.order);

/** Published courses in ladder order, full records. */
export async function getCourses(): Promise<Course[]> {
  const rows = await published();
  return mockQuery(() => rows);
}

/** Card-level fields for the curriculum grid, the ladder and the checkout picker. */
export async function getCourseSummaries(): Promise<CourseSummary[]> {
  const rows = await published();
  return mockQuery(() =>
    rows.map(({ slug, order, title, audience, length, level, summary, cover, status }) => ({ slug, order, title, audience, length, level, summary, cover, status })),
  );
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
  const rows = await published();
  return mockQuery(() => rows.find((c) => c.slug === slug) ?? null);
}

export async function getCourseSlugs(): Promise<string[]> {
  const rows = await published();
  return mockQuery(() => rows.map((c) => c.slug));
}

/** FAQ, quote and track record shared by every course page. */
export async function getCoursePageContent(): Promise<CoursePageContent> {
  return mockQuery(() => COURSE_PAGE_CONTENT);
}
