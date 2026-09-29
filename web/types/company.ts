import type { IconName } from "@/components/ui/Icon";
import type { HeroContent, IconItem, Stat, TitledText } from "./blocks";
import type { FaqEntry } from "./home";

/** Records for the company pages: About, Contact, Partnerships and Pricing. */

export type LinkRef = { label: string; href: string };

/** Heading pair rendered by TwoToneHeading. */
export type HeadingPair = { lead: string; rest: string };

export type FigureRef = { id: string; src?: string; caption: string; ratio?: string; credit?: string };

/** Hero used by Contact, Partnerships and Pricing (a lighter variant of PageHero, no meta row). */
export type CompanyHero = HeadingPair & {
  eyebrow: string;
  intro: string;
  photo: string;
  primary?: LinkRef;
  secondary?: LinkRef;
};

/* ------------------------------------------------------------------ About */

export type AboutLeader = {
  name: string;
  role: string;
  portrait: string;
  bio: string;
  focus: string[];
};

export type Office = { city: string; lines: string[]; area: string };

export type AboutContent = {
  hero: HeroContent;
  whoWeAre: HeadingPair & { paragraphs: string[]; figure: FigureRef; stats: Stat[] };
  leadership: HeadingPair & { intro: string; leaders: AboutLeader[]; note: string };
  beliefs: TitledText[];
  story: HeadingPair & { chapters: TitledText[]; figure: FigureRef; officesLabel: string; officeHead: string[]; offices: Office[] };
  clientWallLabel: string;
  careers: HeadingPair & { text: string; primary: LinkRef; secondary: LinkRef; figure: FigureRef };
  closing: { title: string; text: string; secondary: LinkRef };
};

/* ------------------------------------------------------------------ Contact */

export type ContactLine = { icon: IconName; text: string };

export type ContactRoute = { title: string; text: string; cta: LinkRef };

export type ContactContent = {
  hero: CompanyHero;
  interests: string[];
  roles: string[];
  office: { title: string; hours: string };
  routes: ContactRoute[];
  existingClient: { title: string; text: string; cta: string };
};

export type ContactRequestInput = {
  name: string;
  email: string;
  company: string;
  role: string;
  interest: string;
  message: string;
};

export type ContactField = keyof ContactRequestInput;
export type ContactFieldErrors = Partial<Record<ContactField, string>>;

export type ContactRequestResult =
  | { ok: true; id: string }
  | { ok: false; errors: ContactFieldErrors; formError?: string };

/* ------------------------------------------------------------------ Partnerships */

export type Partner = {
  slug: string;
  name: string;
  logo: string;
  status: string;
  summary: string;
  capabilities: string[];
  proof: string[];
};

export type PartnershipsContent = {
  hero: CompanyHero;
  partnersHeading: HeadingPair;
  partners: Partner[];
  stackHeading: HeadingPair;
  stack: IconItem[];
  benefits: IconItem[];
  ctaBand: { title: string; text: string; email: string };
  clientsHeading: HeadingPair;
  become: HeadingPair & { text: string; cta: LinkRef; tracks: IconItem[] };
  faqs: FaqEntry[];
};

/* ------------------------------------------------------------------ Pricing */

export type PricingPlan = {
  name: string;
  price: string;
  per: string;
  blurb: string;
  items: string[];
  featured?: boolean;
  cta: string;
};

export type ProductRate = { name: string; rate: string; description: string; note: string };

export type EngagementRate = { icon: IconName; title: string; rate: string; text: string };

export type PricingContent = {
  hero: CompanyHero;
  plans: PricingPlan[];
  plansNote: string;
  productsHeading: HeadingPair;
  productRates: ProductRate[];
  engagementsHeading: HeadingPair;
  engagements: EngagementRate[];
  ctaBand: { title: string; text: string };
  faqs: FaqEntry[];
};
