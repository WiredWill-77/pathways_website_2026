import type { IconName } from "@/components/ui/Icon";

/** A link inside a mega-menu group. */
export type NavMenuLink = {
  icon?: IconName;
  title: string;
  href?: string;
  description?: string;
};

export type NavMenuGroup = {
  label: string;
  /** Which of the two menu columns this group sits in (1 by default). */
  col?: 1 | 2;
  links: NavMenuLink[];
  note?: string;
  chips?: boolean;
  chipCols?: number;
  cols?: number;
  divider?: boolean;
};

export type NavFeatured = { kicker: string; title: string; img?: string; href?: string };

export type NavMenu = {
  columns: 1 | 2;
  wide?: boolean;
  featuredCols?: number;
  featuredBelow?: boolean;
  featuredStack?: boolean;
  stacked?: boolean;
  groups: NavMenuGroup[];
  featured: NavFeatured[];
  footer: string;
  footerHref?: string;
};

export type NavItem = { label: string; href?: string; hasMenu?: boolean; hubHref?: string };

export type Navigation = {
  items: NavItem[];
  menus: Record<string, NavMenu>;
  cta: { label: string; href: string };
};

export type FooterColumn = { title: string; links: { label: string; href: string }[] };

export type Footer = {
  address: string;
  email: string;
  phone: string;
  phoneHref: string;
  columns: FooterColumn[];
  legal: { label: string; href: string }[];
  copyright: string;
};

export type ClientLogo = { name: string; src: string; maxHeight: number };

export type Announcement = { message: string; linkLabel: string; href: string };

export type SiteSettings = {
  name: string;
  description: string;
  announcement: Announcement;
  trustMarks: string[];
  clients: ClientLogo[];
};
