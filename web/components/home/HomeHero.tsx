import { PtButton } from "@/components/brand/PtButton";
import { Frame } from "@/components/layout/Frame";
import { Icon } from "@/components/ui/Icon";
import { TwoToneHeading } from "@/components/ui/TwoToneHeading";
import type { SectorBoards } from "@/types/dashboards";
import type { HomeHero as HomeHeroData } from "@/types/home";
import { HeroBrowser } from "./HeroBrowser";

/**
 * Product-led hero (the prototype's chosen "product" treatment): dark photographic band, left-aligned
 * copy, partner marks, and a browser-framed live dashboard the visitor can switch between sectors.
 */
export function HomeHero({ hero, boards }: { hero: HomeHeroData; boards: SectorBoards }) {
  return (
    <div className="pt-herodark pt-hero-intro">
      <span className="pt-herodark-bg" style={{ backgroundImage: `url("${hero.background}")` }} />
      <Frame bg="transparent">
        <div className="pt-heroprod is-dark">
          <span className="pt-eyebrow-rule">{hero.eyebrow}</span>
          <TwoToneHeading
            as="h1"
            size="clamp(36px,4.4vw,58px)"
            maxWidth={700}
            restColor="rgba(255,255,255,.62)"
            stopColor="rgba(255,255,255,.62)"
            style={{ fontWeight: 700, lineHeight: 1.06, margin: "18px 0 0", color: "#FFFFFF" }}
            lead={hero.lead}
            rest={
              <>
                {hero.rest}
                <span style={{ color: "#ec8425" }}>.</span>
              </>
            }
          />
          <p className="pt-heroprod-lede">{hero.intro}</p>
          <div className="pt-heroprod-cta">
            <PtButton tone="secondary" size="lg" href={hero.secondaryCta.href} style={{ background: "#1B87C9", borderColor: "#4EBAFC", color: "#FFFFFF" }}>
              {hero.secondaryCta.label}
            </PtButton>
            <PtButton tone="primary" size="lg" arrow href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </PtButton>
          </div>
          <p className="pt-heroprod-trial">
            <span className="tick">
              <Icon name="check" size={15} />
            </span>
            {hero.trial.text} <strong>{hero.trial.price}</strong>
          </p>
          <div className="pt-heroprod-marks">
            <span>{hero.marksNote}</span>
            <span className="marks">
              {hero.marks.map((m) => (
                <img key={m.name} src={m.src} alt={m.name} />
              ))}
            </span>
          </div>
          <HeroBrowser tabs={hero.dashboardTabs} url={hero.browserUrl} boards={boards} />
        </div>
      </Frame>
    </div>
  );
}
