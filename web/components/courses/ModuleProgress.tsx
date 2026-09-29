import { Frame } from "@/components/layout/Frame";
import type { CourseSummary } from "@/types/courses";

/** "Module 2 of 5 in the ladder" strip under the course hero. */
export function ModuleProgress({ slug, courses }: { slug: string; courses: CourseSummary[] }) {
  const i = courses.findIndex((c) => c.slug === slug);
  const n = courses.length;
  return (
    <Frame bg="var(--bg-page)">
      <div style={{ padding: "20px 0", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
        <span style={{ fontSize: 12.5, color: "var(--text-muted)", whiteSpace: "nowrap" }}>
          Module {i + 1} of {n} in the ladder
        </span>
        <div
          role="progressbar"
          aria-label="Position in the module ladder"
          aria-valuemin={1}
          aria-valuemax={n}
          aria-valuenow={i + 1}
          style={{ flex: "0 1 260px", height: 4, borderRadius: 99, background: "var(--grid-line)", overflow: "hidden" }}
        >
          <div style={{ height: "100%", width: ((i + 1) / n) * 100 + "%", background: "var(--primary)" }} />
        </div>
        <div style={{ display: "flex", gap: 6, marginLeft: "auto" }}>
          {courses.map((c, j) => (
            <span key={c.slug} title={c.title} style={{ width: 7, height: 7, borderRadius: 99, background: j === i ? "var(--primary)" : "var(--grid-line)" }} />
          ))}
        </div>
      </div>
    </Frame>
  );
}
