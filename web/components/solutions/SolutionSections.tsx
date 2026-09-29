/**
 * Renders a solution page's body (prototype: the Ind* and Role* compositions in solution-page.jsx).
 * Each page is a list of sections, and each section a list of blocks, so the nine pages can compose
 * the shared blocks differently while the markup stays identical to the prototype.
 */
import { Fragment, type CSSProperties, type ReactNode } from "react";
import { Chips, CheckRows, DashedGrid, DataTable, IconCards, ProductStrip, QuoteBand, Rail, SlotFigure, SplitList, StatBand, Stepper } from "@/components/blocks";
import { SectorDashboard } from "@/components/dashboards/SectorDashboard";
import { Section } from "@/components/layout/Frame";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { TwoToneHeading } from "@/components/ui/TwoToneHeading";
import type { IconItem } from "@/types/blocks";
import type { SectorBoards } from "@/types/dashboards";
import type { SolutionBlock, SolutionSection } from "@/types/solutions";

type Ctx = { boards: SectorBoards | null };

const smallCaps: CSSProperties = {
  fontSize: "var(--text-xs)",
  letterSpacing: "var(--tracking-eyebrow)",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  marginBottom: 12,
};

/** Single-column IconCards (the manufacturing wall). The shared block only takes 2 or 3 columns. */
function IconCardColumn({ items, stretch }: { items: IconItem[]; stretch?: boolean }) {
  return (
    <div className="pt-2col" style={{ display: "grid", gridTemplateColumns: "repeat(1,minmax(0,1fr))", gap: 24, height: stretch ? "100%" : undefined }}>
      {items.map((it) => (
        <Card key={it.title} padding={28} style={stretch ? { display: "flex", flexDirection: "column", justifyContent: "center" } : undefined}>
          <span style={{ color: "var(--secondary-text)", display: "inline-flex", marginBottom: 14 }}>
            <Icon name={it.icon} size={22} />
          </span>
          <div style={{ fontSize: 18, fontWeight: 500, marginBottom: 8 }}>{it.title}</div>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", margin: 0 }}>{it.text}</p>
        </Card>
      ))}
    </div>
  );
}

function renderBlock(b: SolutionBlock, ctx: Ctx): ReactNode {
  switch (b.kind) {
    case "heading":
      return <TwoToneHeading size={b.size} maxWidth={b.maxWidth} lead={b.lead} rest={b.rest} />;
    case "stats":
      return <StatBand stats={b.stats} tone={b.tone} />;
    case "dashedGrid":
      return <DashedGrid items={b.items} cols={b.cols} />;
    case "iconCards":
      return b.cols === 1 ? <IconCardColumn items={b.items} stretch={b.stretch} /> : <IconCards items={b.items} cols={b.cols} stretch={b.stretch} />;
    case "rail":
      return <Rail items={b.items} />;
    case "stepper":
      return <Stepper steps={b.steps} />;
    case "splitList":
      return <SplitList label={b.label} items={b.items} />;
    case "checkRows":
      return <CheckRows items={b.items} cols={b.cols} />;
    case "chips":
      return b.label ? (
        <div>
          <div style={smallCaps}>{b.label}</div>
          <Chips items={b.items} />
        </div>
      ) : (
        <Chips items={b.items} />
      );
    case "table":
      return <DataTable head={b.head} rows={b.rows} />;
    case "figure":
      return <SlotFigure id={b.id} caption={b.caption} ratio={b.ratio} fill={b.fill} showCaption={b.showCaption} />;
    case "dashboard":
      if (!ctx.boards) throw new Error(`Solution block needs sector boards: ${b.sector}`);
      return <SectorDashboard sector={b.sector} boards={ctx.boards} role={null} />;
    case "products":
      return <ProductStrip names={b.names} />;
    case "stack": {
      const grid = b.gap !== undefined || b.sticky;
      return (
        <div
          className={b.sticky ? "pt-sticky" : undefined}
          style={grid ? { display: "grid", gap: b.gap, ...(b.sticky ? { position: "sticky", top: 110 } : null) } : undefined}
        >
          <Blocks blocks={b.blocks} ctx={ctx} />
        </div>
      );
    }
    case "columns":
      return (
        <div className={b.stack ? "pt-2col" : undefined} style={{ display: "grid", gridTemplateColumns: b.template, gap: b.gap, alignItems: b.align }}>
          <Blocks blocks={b.items} ctx={ctx} />
        </div>
      );
  }
}

function Blocks({ blocks, ctx }: { blocks: SolutionBlock[]; ctx: Ctx }) {
  return blocks.map((b, i) => {
    const node = renderBlock(b, ctx);
    return b.mt !== undefined ? (
      <div key={i} style={{ marginTop: b.mt }}>
        {node}
      </div>
    ) : (
      <Fragment key={i}>{node}</Fragment>
    );
  });
}

/** The dark band that opens the transport page, above its first section. */
function InkBand({ eyebrow, children }: { eyebrow: string; children: ReactNode }) {
  return (
    <div style={{ background: "var(--ink-700)", padding: "64px 24px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div
          style={{
            color: "rgba(255,255,255,.62)",
            fontSize: "var(--text-eyebrow)",
            letterSpacing: "var(--tracking-eyebrow)",
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          {eyebrow}
        </div>
        {children}
      </div>
    </div>
  );
}

export function SolutionSections({ sections, boards }: { sections: SolutionSection[]; boards: SectorBoards | null }) {
  const ctx: Ctx = { boards };
  return sections.map((s, i) => {
    switch (s.kind) {
      case "quote":
        return <QuoteBand key={i} {...s.quote} />;
      case "inkBand":
        return (
          <InkBand key={i} eyebrow={s.eyebrow}>
            <Blocks blocks={s.blocks} ctx={ctx} />
          </InkBand>
        );
      case "section":
        return (
          <Section key={i} index={s.index} label={s.label} right={s.right} bg={s.subtle ? "var(--bg-subtle)" : undefined}>
            <Blocks blocks={s.blocks} ctx={ctx} />
          </Section>
        );
    }
  });
}

/** True when any block on the page embeds a sector board, so the page only fetches figures it shows. */
export function needsBoards(sections: SolutionSection[]): boolean {
  const walk = (blocks: SolutionBlock[]): boolean =>
    blocks.some((b) => b.kind === "dashboard" || ((b.kind === "stack" || b.kind === "columns") && walk(b.kind === "stack" ? b.blocks : b.items)));
  return sections.some((s) => s.kind !== "quote" && walk(s.blocks));
}
