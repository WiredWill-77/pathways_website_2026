import type { Metadata } from "next";
import { CheckoutView } from "@/components/checkout/CheckoutView";
import { getCheckoutConfig } from "@/lib/data/checkout";
import { getCourseSummaries } from "@/lib/data/courses";
import { submitEnrolment } from "./actions";

/** CMS edits show on the site within a minute. */
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Checkout | Data Skills Training",
  description: "Reserve a Data Skills Training cohort: choose a module, confirm learners and dates, and book by invoice or card.",
};

export default async function CheckoutPage(props: PageProps<"/checkout">) {
  const [{ course }, courses, config] = await Promise.all([props.searchParams, getCourseSummaries(), getCheckoutConfig()]);
  const wanted = Array.isArray(course) ? course[0] : course;
  const initialSlug = courses.some((c) => c.slug === wanted) ? wanted! : courses[0].slug;
  return <CheckoutView key={initialSlug} courses={courses} config={config} initialSlug={initialSlug} submit={submitEnrolment} />;
}
