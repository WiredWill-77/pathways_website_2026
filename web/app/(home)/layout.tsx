import { SiteChrome } from "@/components/layout/SiteChrome";

/** The landing page is the only page with the announcement bar above the header. */
export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <SiteChrome announcement>{children}</SiteChrome>;
}
