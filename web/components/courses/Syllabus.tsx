"use client";

import { useId, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { pad2 } from "@/lib/utils";
import type { SyllabusPart } from "@/types/courses";

/** Numbered accordion of syllabus parts. The first part starts open; one part is open at a time. */
export function Syllabus({ items }: { items: SyllabusPart[] }) {
  const [open, setOpen] = useState(0);
  const base = useId();
  return (
    <div style={{ border: "1px solid var(--grid-line)", borderRadius: "var(--radius-md)", overflow: "hidden", background: "var(--stone-0)" }}>
      {items.map((it, i) => {
        const isOpen = open === i;
        const panel = `${base}-${i}`;
        return (
          <div key={it.title} style={{ borderTop: i ? "1px solid var(--grid-line)" : "none" }}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              aria-controls={panel}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                width: "100%",
                padding: "18px 22px",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                font: "inherit",
                color: "inherit",
              }}
            >
              <span style={{ fontSize: 22, fontWeight: 600, color: "var(--primary)", letterSpacing: "-0.02em", flex: "0 0 30px" }}>{pad2(i + 1)}</span>
              <span style={{ flex: 1 }}>
                <span style={{ display: "block", fontSize: 16.5, fontWeight: 500 }}>{it.title}</span>
                <span style={{ display: "block", fontSize: 12.5, color: "var(--text-muted)", marginTop: 3 }}>{it.meta}</span>
              </span>
              <Icon name={isOpen ? "chevron-up" : "chevron-down"} size={18} style={{ color: "var(--text-muted)", flex: "0 0 auto" }} />
            </button>
            {isOpen && (
              <p id={panel} style={{ margin: "0 22px 20px 68px", fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 640 }}>
                {it.text}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
