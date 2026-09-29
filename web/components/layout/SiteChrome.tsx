import type { ReactNode } from "react";
import { getFooter, getNavigation, getSiteSettings } from "@/lib/data/site";
import { AnnouncementBar } from "./AnnouncementBar";
import { Footer } from "./Footer";
import { Header } from "./Header";

/** Skip link, header, main landmark and footer shared by every marketing page. */
export async function SiteChrome({ children, announcement = false }: { children: ReactNode; announcement?: boolean }) {
  const [navigation, footer, settings] = await Promise.all([getNavigation(), getFooter(), getSiteSettings()]);
  return (
    <>
      <a className="pt-skip" href="#main">
        Skip To Main Content
      </a>
      {announcement && <AnnouncementBar announcement={settings.announcement} />}
      <Header navigation={navigation} />
      <main id="main">{children}</main>
      <Footer footer={footer} trustMarks={settings.trustMarks} />
    </>
  );
}
