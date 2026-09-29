"use client";

import { useId, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type FaqItemProps = {
  question: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
  style?: CSSProperties;
};

/** Disclosure row. The open question turns orange (see .pt-faq-item in styles/components.css). */
export function FaqItem({ question, children, defaultOpen = false, className, style }: FaqItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  return (
    <div className={cn("pt-faq-item", className)} style={{ borderBottom: "1px solid var(--border-hairline)", ...style }}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={id}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          padding: "20px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-body)",
          color: "var(--text-primary)",
          textAlign: "left",
        }}
      >
        {question}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--text-muted)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          style={{
            flex: "0 0 auto",
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform var(--duration-base) var(--ease-standard)",
          }}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div
          id={id}
          style={{ padding: "0 0 22px", fontSize: "var(--text-sm)", lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: 720 }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
