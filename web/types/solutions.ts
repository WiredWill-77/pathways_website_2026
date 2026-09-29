import type { IconName } from "@/components/ui/Icon";
import type { HeroContent, IconItem, Quote, Stat, Step, TitledText } from "@/types/blocks";
import type { SectorName } from "@/types/dashboards";

/** Solutions destination pages (prototype: solution-page.jsx). Every page shares the hero and
 *  the closing band, but composes its body from a different run of blocks. */

export type SolutionType = "industry" | "role";

type Spaced = {
  /** Top margin in px. The prototype wraps the block in `<div style={{ marginTop }}>`. */
  mt?: number;
};

export type SolutionBlock = Spaced &
  (
    | { kind: "heading"; lead: string; rest: string; size: string; maxWidth?: number }
    | { kind: "stats"; stats: Stat[]; tone?: "light" | "dark" }
    | { kind: "dashedGrid"; items: TitledText[]; cols: 2 | 3 }
    | { kind: "iconCards"; items: IconItem[]; cols: 1 | 2 | 3; stretch?: boolean }
    | { kind: "rail"; items: TitledText[] }
    | { kind: "stepper"; steps: Step[] }
    | { kind: "splitList"; label: string; items: TitledText[] }
    | { kind: "checkRows"; items: string[]; cols: 1 | 2 | 3 }
    /** `label` adds the small uppercase caption the analyst page puts above its tool chips. */
    | { kind: "chips"; items: string[]; label?: string }
    | { kind: "table"; head: string[]; rows: string[][] }
    | { kind: "figure"; id: string; caption: string; ratio?: string; fill?: boolean; showCaption?: boolean }
    | { kind: "dashboard"; sector: SectorName }
    | { kind: "products"; names: string[] }
    /** A plain wrapper: `gap` makes it a grid, `sticky` pins it while the other column scrolls. */
    | { kind: "stack"; blocks: SolutionBlock[]; gap?: number; sticky?: boolean }
    /** A grid row. `stack: true` adds `pt-2col`, which collapses it to one column on mobile. */
    | { kind: "columns"; template: string; gap: number; align: "start" | "stretch"; stack?: boolean; items: SolutionBlock[] }
  );

export type SolutionSection =
  | { kind: "section"; index: string; label: string; right: string; subtle?: boolean; blocks: SolutionBlock[] }
  | { kind: "quote"; quote: Quote }
  /** Full-bleed ink band that opens the transport page, holding the live board. */
  | { kind: "inkBand"; eyebrow: string; blocks: SolutionBlock[] };

export type SolutionClosing = {
  title: string;
  text: string;
  secondary?: { label: string; href: string };
  credit?: string;
};

export type SolutionSummary = {
  slug: string;
  type: SolutionType;
  /** "Banking & Finance", "Business Leader". */
  name: string;
  /** Eyebrow label: the sector name, or "For The Business Leader". */
  label: string;
  intro: string;
  /** Hero photograph. */
  image: string;
  /** Role pages carry an icon; industry pages do not. */
  icon?: IconName;
  products: string[];
  href: string;
};

export type Solution = SolutionSummary & {
  meta: { title: string; description: string };
  hero: HeroContent;
  sections: SolutionSection[];
  closing: SolutionClosing;
};

