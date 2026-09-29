"use client";

import { useEffect } from "react";
import { PtButton } from "@/components/brand/PtButton";
import { Section } from "@/components/layout/Frame";
import { TwoToneHeading } from "@/components/ui/TwoToneHeading";
import { routes } from "@/lib/routes";

/**
 * Error boundary for marketing pages. With mock data this should never show; once accessors call
 * Supabase it catches failed queries and lets the visitor retry without losing the header and footer.
 */
export default function SiteError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section index="500" label="Error" right="Something Went Wrong">
      <TwoToneHeading as="h1" size="clamp(28px,4vw,44px)" maxWidth={760} lead="This page didn't load." rest="Please try again in a moment." />
      <p style={{ marginTop: 20, maxWidth: 560, color: "var(--text-secondary)" }}>
        If it keeps happening, email info@pathwaystechnologies.com and tell us which page you were on.
        {error.digest && <span style={{ display: "block", marginTop: 8, fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>Reference: {error.digest}</span>}
      </p>
      <div className="pt-cta-actions" style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
        <PtButton tone="primary" arrow onClick={() => reset()}>
          Try Again
        </PtButton>
        <PtButton tone="ghost" href={routes.home}>
          Back To Home
        </PtButton>
      </div>
    </Section>
  );
}
