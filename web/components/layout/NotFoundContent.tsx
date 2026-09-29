import { PtButton } from "@/components/brand/PtButton";
import { Section } from "@/components/layout/Frame";
import { TwoToneHeading } from "@/components/ui/TwoToneHeading";
import { routes } from "@/lib/routes";

/** 404 body shared by app/not-found.tsx (unmatched URLs) and app/(site)/not-found.tsx (unknown slugs). */
export function NotFoundContent() {
  return (
    <Section index="404" label="Not Found" right="Page Missing">
      <TwoToneHeading as="h1" size="clamp(28px,4vw,44px)" maxWidth={760} lead="We couldn't find that page." rest="It may have moved when the site was rebuilt." />
      <p style={{ marginTop: 20, maxWidth: 560, color: "var(--text-secondary)" }}>
        Try the services or insights pages, or get in touch and we will point you to the right place.
      </p>
      <div className="pt-cta-actions" style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
        <PtButton tone="primary" arrow href={routes.home}>
          Back To Home
        </PtButton>
        <PtButton tone="secondary" href={routes.services}>
          See All Services
        </PtButton>
        <PtButton tone="ghost" href={routes.contact}>
          Contact Us
        </PtButton>
      </div>
    </Section>
  );
}
