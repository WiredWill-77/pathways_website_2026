import type { IconName } from "@/components/ui/Icon";
import type { Stat } from "./blocks";
import type { SectorName } from "./dashboards";

export type HomeHero = {
  eyebrow: string;
  lead: string;
  rest: string;
  intro: string;
  trial: { text: string; price: string };
  marksNote: string;
  marks: { name: string; src: string }[];
  background: string;
  dashboardTabs: SectorName[];
  browserUrl: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  stats: Stat[];
};

export type ServiceSummary = { icon: IconName; title: string; text: string; href: string };

export type CaseHighlight = {
  sector: string;
  title: string;
  problem: string;
  photo: string;
  stats: Stat[];
  href: string;
};

export type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export type Leader = { name: string; role: string; portrait: string; bio: string };

export type Testimonial = { logo: string; quote: string; name: string; role: string };

export type FaqEntry = { question: string; answer: string };

export type HomeContent = {
  hero: HomeHero;
  services: ServiceSummary[];
  cases: CaseHighlight[];
  tiers: PricingTier[];
  leaders: Leader[];
  testimonials: Testimonial[];
  governance: { icon: IconName; title: string; text: string }[];
  faqs: FaqEntry[];
  discoveryCta: { title: string; text: string };
  assessment: { title: string; text: string; background: string };
};
