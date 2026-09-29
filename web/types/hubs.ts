import type { IconName } from "@/components/ui/Icon";
import type { HeroContent, Stat, Step } from "./blocks";
import type { ClosingCopy, HeadingCopy, SlotCopy } from "./services";

export type HubKind = "services" | "solutions" | "resources";

type HubBase = {
  kind: HubKind;
  hero: HeroContent;
  closing: ClosingCopy;
  seo: { title: string; description: string };
};

export type HubServiceCard = { slug: string; icon: IconName; name: string; blurb: string; points: string[]; href: string };

export type ServicesHub = HubBase & {
  kind: "services";
  clientWallLabel: string;
  services: HubServiceCard[];
  howHeading: HeadingCopy;
  how: Step[];
  stats: Stat[];
  figure: SlotCopy;
};

export type HubIndustry = { slug: string; name: string; href: string; img: string; line: string; stat: Stat };
export type HubRole = { slug: string; title: string; href: string; icon: IconName; line: string };

export type SolutionsHub = HubBase & {
  kind: "solutions";
  industriesHeading: HeadingCopy;
  industries: HubIndustry[];
  rolesHeading: HeadingCopy;
  roles: HubRole[];
  stats: Stat[];
  clientWallLabel: string;
};

export type HubFeatured = { kicker: string; title: string; img: string; note: string; href: string };
export type HubLibraryItem = { icon: IconName; title: string; text: string; meta: string; href: string };
export type HubEvent = { date: string; where: string; session: string; audience: string };

export type ResourcesHub = HubBase & {
  kind: "resources";
  featured: HubFeatured[];
  library: HubLibraryItem[];
  eventsHeading: HeadingCopy;
  events: HubEvent[];
  invitations: { badge: string; text: string; cta: { label: string; href: string } };
};

export type Hub = ServicesHub | SolutionsHub | ResourcesHub;
export type HubByKind<K extends HubKind> = Extract<Hub, { kind: K }>;
