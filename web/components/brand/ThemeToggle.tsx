"use client";

import { useTheme } from "@/hooks/use-theme";

/** Light / dark switch. The initial theme is applied before paint by the script in app/layout.tsx. */
export function ThemeToggle() {
  const [theme, setTheme] = useTheme();
  const dark = theme === "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={dark ? "Switch To Light Mode" : "Switch To Dark Mode"}
      title={dark ? "Light Mode" : "Dark Mode"}
      className="pt-themetoggle"
      style={{
        width: 38,
        height: 38,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        borderRadius: "var(--radius-pill)",
        border: "1px solid var(--border-hairline)",
        background: "var(--stone-0)",
        color: "var(--text-secondary)",
        transition: "background var(--duration-base) var(--ease-standard)",
      }}
    >
      {dark ? (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4" />
        </svg>
      ) : (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  );
}
