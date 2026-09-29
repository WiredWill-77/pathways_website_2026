import type { IconItem, Quote, Stat, Step, TitledText } from "./blocks";

/** A two-sentence section heading: bold statement, then the blue elaboration. */
export type HeadingCopy = { lead: string; rest: string };

export type ClosingCopy = {
  title: string;
  text: string;
  secondary?: { label: string; href: string };
};

/** A framed placeholder figure (prototype <image-slot>), resolved by slot id. */
export type SlotCopy = { id: string; caption: string };

export type ServiceSlug =
  | "data-science"
  | "analytics-bi"
  | "apps-software-development"
  | "data-skills-training"
  | "staff-augmentation"
  | "digital-transformation-advisory";

/** Fields every service page has: the hero, the stat band, the products it uses and the closing band. */
type ServiceBase = {
  slug: ServiceSlug;
  name: string;
  eyebrow: string;
  lead: string;
  rest: string;
  intro: string;
  hero: string;
  heroPos?: string;
  meta: Stat[];
  stats: Stat[];
  products: string[];
  closing: ClosingCopy;
  seo: { title: string; description: string };
};

export type DataScienceService = ServiceBase & {
  layout: "data-science";
  lifecycleHeading: HeadingCopy;
  lifecycle: Step[];
  aiHeading: HeadingCopy;
  aiServices: IconItem[];
  capabilitiesHeading: HeadingCopy;
  capabilities: string[];
  figure: SlotCopy;
};

export type AnalyticsService = ServiceBase & {
  layout: "analytics-bi";
  layersLabel: string;
  layers: TitledText[];
  figure: SlotCopy;
  quote: Quote;
  outcomesHeading: HeadingCopy;
};

export type AppsService = ServiceBase & {
  layout: "apps-software-development";
  phasesHeading: HeadingCopy;
  phases: TitledText[];
  figures: { screen: SlotCopy; team: SlotCopy };
  stackHeading: HeadingCopy;
  stack: string[];
};

export type TrainingService = ServiceBase & {
  layout: "data-skills-training";
  curriculumHeading: HeadingCopy;
  approachHeading: HeadingCopy;
  outcomes: IconItem[];
  figure: SlotCopy;
};

export type StaffRole = { role: string; focus: string; rate: string; leadTime: string };

export type StaffAugService = ServiceBase & {
  layout: "staff-augmentation";
  rolesHeading: HeadingCopy;
  roles: StaffRole[];
  quote: Quote;
  guaranteesHeading: HeadingCopy;
  guarantees: string[];
  figure: SlotCopy;
};

export type AdvisoryService = ServiceBase & {
  layout: "digital-transformation-advisory";
  ladderHeading: HeadingCopy;
  ladder: TitledText[];
  workstreamsHeading: HeadingCopy;
  workstreams: IconItem[];
  figure: SlotCopy;
};

export type Service = DataScienceService | AnalyticsService | AppsService | TrainingService | StaffAugService | AdvisoryService;

export type ServiceLayout = Service["layout"];

/** List-level fields for menus and the admin list. */
export type ServiceSummary = Pick<Service, "slug" | "name" | "eyebrow" | "intro" | "hero">;
