/* Body of /resources/whitepapers (prototype: ResWhitepapers). Each card's download button opens the gate. */
import { ClosingCta, QuoteBand, StatBand } from "@/components/blocks";
import { Section } from "@/components/layout/Frame";
import { CoverCard, cardGrid, slotId } from "@/components/resources/shared";
import { TwoToneHeading } from "@/components/ui/TwoToneHeading";
import type { WhitepapersSection } from "@/types/resources";
import type { WhitepaperSummary } from "@/types/whitepapers";
import { WhitepaperGateButton, type RequestWhitepaperAction } from "./WhitepaperGate";

export function WhitepapersView({ d, papers, requestAction }: { d: WhitepapersSection; papers: WhitepaperSummary[]; requestAction: RequestWhitepaperAction }) {
  return (
    <>
      <Section index="01" label="Library" right="Five Papers">
        <TwoToneHeading size="clamp(21px,4vw,28px)" maxWidth={760} lead={d.libraryHeading.lead} rest={d.libraryHeading.rest} />
        <div style={{ marginTop: 36, ...cardGrid() }}>
          {papers.map((p) => (
            <CoverCard
              key={p.slug}
              slot={slotId("wp-cover-", p.title)}
              title={p.title}
              badges={[p.type, p.length]}
              text={p.strap}
              coverStyle={p.coverBackground ? { backgroundColor: p.coverBackground } : undefined}
              action={<WhitepaperGateButton paper={p} action={requestAction} />}
            />
          ))}
        </div>
      </Section>
      <QuoteBand {...d.quote} />
      <Section index="02" label="Reach" right="Who Reads Them" bg="var(--bg-subtle)">
        <StatBand stats={d.stats} />
      </Section>
      <ClosingCta title={d.closing.title} secondary={d.closing.secondary}>
        {d.closing.text}
      </ClosingCta>
    </>
  );
}
