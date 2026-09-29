import type { IconName } from "@/components/ui/Icon";

/** Shapes consumed by the shared content blocks (components/blocks). Mock data and, later,
 *  database rows should be mapped into these before reaching a component. */

export type Stat = { label: string; value: string };
export type TitledText = { title: string; text: string };
export type IconItem = { icon: IconName; title: string; text: string };
export type Step = { kicker: string; title: string; text: string };
export type Quote = { quote: string; name: string; role: string };
export type TableData = { head: string[]; rows: string[][] };

export type HeroContent = {
  /** Pill above the heading. " · " separators render as orange dots. */
  eyebrow: string;
  lead: string;
  rest: string;
  intro: string;
  meta?: Stat[];
  /** Hero photograph (path under /public or an absolute URL). */
  img?: string;
  imgPosition?: string;
  imgFlip?: boolean;
  cta?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export type Product = { name: string; blurb: string; features: string[] };
