import { PtButton } from "@/components/brand/PtButton";
import { Frame } from "@/components/layout/Frame";
import { TwoToneHeading } from "@/components/ui/TwoToneHeading";
import type { CompanyHero as CompanyHeroData } from "@/types/company";

type Props = {
  hero: CompanyHeroData;
  /** Padding of the copy block (each prototype page used its own). */
  padding: string;
  maxWidth: number;
  size: string;
  headingMaxWidth?: number;
  actionsGap?: number;
  introMaxWidth?: number;
};

/**
 * Photographic hero of the Contact, Partnerships and Pricing pages. Lighter than PageHero:
 * pill, two-tone H1, intro and optional buttons, no meta row.
 */
export function CompanyHero({ hero, padding, maxWidth, size, headingMaxWidth, actionsGap = 30, introMaxWidth = 620 }: Props) {
  return (
    <Frame bg="transparent" hero={{ photo: hero.photo }}>
      <div style={{ padding }}>
        <div style={{ maxWidth }}>
          <span
            style={{ display: "inline-flex", alignItems: "center", height: 28, padding: "0 12px", borderRadius: "var(--radius-pill)", border: "1px solid rgba(255,255,255,.35)", color: "#FFFFFF", fontSize: 12 }}
          >
            {hero.eyebrow}
          </span>
          <TwoToneHeading as="h1" accent size={size} maxWidth={headingMaxWidth} style={{ marginTop: 20, fontWeight: 700, color: "#FFFFFF" }} lead={hero.lead} rest={hero.rest} />
          <p style={{ color: "rgba(255,255,255,.78)", fontSize: 17, marginTop: 22, maxWidth: introMaxWidth }}>{hero.intro}</p>
          {(hero.primary || hero.secondary) && (
            <div style={{ display: "flex", gap: 12, marginTop: actionsGap, flexWrap: "wrap" }}>
              {hero.primary && (
                <PtButton tone="primary" size="lg" arrow href={hero.primary.href}>
                  {hero.primary.label}
                </PtButton>
              )}
              {hero.secondary && (
                <PtButton tone="ghost" onDark size="lg" href={hero.secondary.href}>
                  {hero.secondary.label}
                </PtButton>
              )}
            </div>
          )}
        </div>
      </div>
    </Frame>
  );
}
