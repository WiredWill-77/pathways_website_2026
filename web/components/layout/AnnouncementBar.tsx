import Link from "next/link";
import type { Announcement } from "@/types/site";

/** Blue strip above the header on the landing page. */
export function AnnouncementBar({ announcement }: { announcement: Announcement }) {
  return (
    <div
      style={{ background: "var(--announce-bg)", color: "var(--announce-fg)", minHeight: 42, display: "flex", alignItems: "center", justifyContent: "center", gap: 16, fontSize: "var(--text-sm)", fontWeight: 500, flexWrap: "wrap", padding: "8px 16px", textAlign: "center" }}
    >
      <span>{announcement.message}</span>
      <Link href={announcement.href} style={{ color: "var(--announce-fg)", textDecoration: "underline", textUnderlineOffset: 3, display: "inline-flex", alignItems: "center", gap: 6 }}>
        {announcement.linkLabel}
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
