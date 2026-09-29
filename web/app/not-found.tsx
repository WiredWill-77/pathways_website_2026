import type { Metadata } from "next";
import { NotFoundContent } from "@/components/layout/NotFoundContent";
import { SiteChrome } from "@/components/layout/SiteChrome";

export const metadata: Metadata = { title: "Page Not Found" };

/** Unmatched URL anywhere in the app. The root layout has no chrome, so add it here. */
export default function NotFound() {
  return (
    <SiteChrome>
      <NotFoundContent />
    </SiteChrome>
  );
}
