import { SiteChrome } from "@/components/layout/SiteChrome";

/** Header and footer for every marketing page except the landing page. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <SiteChrome>{children}</SiteChrome>;
}
