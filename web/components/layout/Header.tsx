"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { PtButton } from "@/components/brand/PtButton";
import { PtLogo } from "@/components/brand/PtLogo";
import { ThemeToggle } from "@/components/brand/ThemeToggle";
import { Icon } from "@/components/ui/Icon";
import { activeNavSection, routes } from "@/lib/routes";
import { cn } from "@/lib/utils";
import type { NavFeatured, NavItem, NavMenu, NavMenuLink, Navigation } from "@/types/site";

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const caret = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m6 9 6 6 6-6" />
  </svg>
);
const arrow = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);
const eyebrow: CSSProperties = {
  fontSize: "var(--text-xs)",
  letterSpacing: "var(--tracking-eyebrow)",
  textTransform: "uppercase",
  color: "var(--text-secondary)",
};

function MenuLink({ l, current }: { l: NavMenuLink; current: boolean }) {
  return (
    <Link
      href={l.href || "#"}
      aria-current={current ? "page" : undefined}
      className="pt-menulink"
      style={{ textDecoration: "none", color: "inherit", display: "grid", gridTemplateColumns: l.icon ? "34px minmax(0,1fr)" : "minmax(0,1fr)", gap: 12, alignItems: "start" }}
    >
      {l.icon && (
        <span
          className="pt-menulink-icon"
          style={{ width: 34, height: 34, borderRadius: "var(--radius-sm)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto", marginTop: 1, color: "var(--secondary-text)" }}
        >
          <Icon name={l.icon} size={17} />
        </span>
      )}
      <span style={{ minWidth: 0 }}>
        <span className="pt-menulink-title" style={{ display: "block", fontSize: 16.5, fontWeight: 500, letterSpacing: "-0.01em", marginBottom: l.description ? 5 : 0 }}>
          {l.title}
        </span>
        {l.description && <span style={{ display: "block", fontSize: "var(--text-sm)", color: "var(--text-secondary)" }}>{l.description}</span>}
      </span>
    </Link>
  );
}

function RoleChip({ l }: { l: NavMenuLink }) {
  return (
    <Link
      href={l.href || "#"}
      className="pt-rolechip"
      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: 36, padding: "0 12px", borderRadius: "var(--radius-pill)", minWidth: 0, fontSize: 13.5, textDecoration: "none", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
    >
      {l.title}
    </Link>
  );
}

function FeaturedRow({ c }: { c: NavFeatured }) {
  return (
    <Link
      href={c.href || "#"}
      className="pt-featrow"
      style={{ display: "grid", gridTemplateColumns: "84px minmax(0,1fr)", gap: 14, alignItems: "center", textDecoration: "none", color: "inherit", padding: 10, borderRadius: "var(--radius-sm)" }}
    >
      <div style={{ height: 60, borderRadius: "var(--radius-sm)", border: "1px solid var(--grid-line)", overflow: "hidden", background: "var(--bg-blue-soft)" }}>
        {c.img && <img src={c.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />}
      </div>
      <div>
        <div style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", marginBottom: 3 }}>{c.kicker}</div>
        <div style={{ fontSize: 14.5, fontWeight: 500, lineHeight: 1.35 }}>{c.title}</div>
      </div>
    </Link>
  );
}

function FeaturedCard({ c }: { c: NavFeatured }) {
  return (
    <Link href={c.href || "#"} style={{ textDecoration: "none", color: "inherit" }}>
      <div
        style={{ height: 150, borderRadius: "var(--radius-sm)", border: "1px solid var(--grid-line)", overflow: "hidden", background: "var(--bg-blue-soft)", backgroundImage: "var(--dot-grid)", backgroundSize: "var(--dot-grid-size)" }}
      >
        {c.img && <img src={c.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />}
      </div>
      <div style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", margin: "14px 0 4px" }}>{c.kicker}</div>
      <div style={{ fontSize: 16, fontWeight: 500 }}>{c.title}</div>
    </Link>
  );
}

function MenuPanel({ m, pathname }: { m: NavMenu; pathname: string }) {
  const multi = m.groups.length > 1 && !m.featuredBelow && !m.stacked;
  const columns = multi ? [1, 2].map((n) => m.groups.filter((g) => (g.col ?? 1) === n)) : [m.groups];
  return (
    <div
      className="pt-megamenu"
      style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "var(--stone-50)", borderBottom: "1px solid var(--grid-line)", boxShadow: "var(--shadow-raised)", maxHeight: "calc(100vh - 120px)", overflowY: "auto", zIndex: 19 }}
    >
      <div
        style={{ maxWidth: 1216, margin: "0 auto", padding: "32px 48px 40px", display: "grid", gridTemplateColumns: m.featuredBelow ? "1fr" : m.wide ? "1.85fr 1px 1fr" : "1fr 1px 1fr", gap: 44 }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: m.featuredBelow ? "minmax(0,1fr) minmax(0,1.35fr)" : m.stacked ? "1fr" : m.groups.length > 1 ? (m.wide ? "1.05fr 1fr" : "1fr 1fr") : "1fr",
            gap: m.stacked ? 28 : 44,
            alignContent: "start",
            alignItems: "start",
          }}
        >
          {columns.map((col, ci) => (
            <div key={ci} style={{ display: "grid", gap: 40 }}>
              {col.map((g) => (
                <div key={g.label} style={g.divider ? { paddingTop: 24, borderTop: "1px solid var(--grid-line)" } : undefined}>
                  <div style={{ ...eyebrow, marginBottom: g.note ? 6 : 20 }}>{g.label}</div>
                  {g.note && <div style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", marginBottom: 16 }}>{g.note}</div>}
                  {g.chips ? (
                    <div style={{ display: "grid", gridTemplateColumns: `repeat(${g.chipCols || 2},minmax(0,1fr))`, gap: 8 }}>
                      {g.links.map((l) => (
                        <RoleChip key={l.title} l={l} />
                      ))}
                    </div>
                  ) : (
                    <div
                      style={{
                        display: "grid",
                        ...(g.cols && g.cols > 1
                          ? { gridTemplateColumns: "repeat(2,minmax(0,1fr))", gridTemplateRows: `repeat(${Math.ceil(g.links.length / 2)},auto)`, gridAutoFlow: "column" }
                          : { gridTemplateColumns: m.columns === 2 && m.groups.length === 1 ? "repeat(2,minmax(0,1fr))" : "1fr" }),
                        gap: g.links[0]?.description ? "22px 36px" : "18px 36px",
                      }}
                    >
                      {g.links.map((l) => (
                        <MenuLink key={l.title} l={l} current={!!l.href && l.href === pathname} />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
          <Link
            href={m.footerHref || "#"}
            style={{ gridColumn: "1/-1", marginTop: 8, height: 52, borderRadius: "var(--radius-md)", background: "var(--bg-muted)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", fontSize: 15, color: "var(--text-primary)", textDecoration: "none" }}
          >
            {m.footer}
            {arrow}
          </Link>
        </div>
        <div style={{ background: "var(--grid-line)", display: m.featuredBelow ? "none" : "block" }} />
        <div style={m.featuredBelow ? { paddingTop: 28, borderTop: "1px solid var(--grid-line)" } : undefined}>
          <div style={{ fontSize: "var(--text-xs)", color: "var(--text-secondary)", marginBottom: 20 }}>Featured</div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: m.featuredBelow ? "repeat(3,minmax(0,1fr))" : m.featuredStack || m.featuredCols === 1 ? "1fr" : m.featured.length > 1 ? "1fr 1fr" : "1fr",
              gap: m.featuredStack ? 6 : 24,
              alignItems: "stretch",
            }}
          >
            {m.featured.map((c) => (m.featuredStack ? <FeaturedRow key={c.title} c={c} /> : <FeaturedCard key={c.title} c={c} />))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileGroup({ it, m, open, onToggle, active, pathname, onNavigate }: { it: NavItem; m: NavMenu; open: boolean; onToggle: () => void; active: boolean; pathname: string; onNavigate: () => void }) {
  return (
    <div style={{ borderBottom: "1px solid var(--grid-line)" }}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "14px 4px", background: "none", border: "none", cursor: "pointer", font: "inherit", fontSize: 16, fontWeight: 500, color: active ? "var(--secondary-text)" : "var(--text-primary)", textAlign: "left" }}
      >
        {it.hubHref ? (
          <Link href={it.hubHref} onClick={onNavigate} style={{ color: "inherit", textDecoration: "none" }}>
            {it.label}
          </Link>
        ) : (
          it.label
        )}
        <span style={{ color: "var(--text-muted)", display: "inline-flex", transform: open ? "rotate(180deg)" : "none", transition: "transform var(--duration-base) var(--ease-standard)" }}>{caret}</span>
      </button>
      {open && (
        <div style={{ paddingBottom: 14, display: "grid", gap: 14 }}>
          {m.groups.map((g) => (
            <div key={g.label}>
              <div style={{ ...eyebrow, marginBottom: 10 }}>{g.label}</div>
              <div style={{ display: g.chips ? "flex" : "grid", flexWrap: "wrap", gap: g.chips ? 8 : 12 }}>
                {g.links.map((l) => {
                  if (g.chips) return <RoleChip key={l.title} l={l} />;
                  const cur = !!l.href && l.href === pathname;
                  return (
                    <Link
                      key={l.title}
                      href={l.href || "#"}
                      onClick={onNavigate}
                      aria-current={cur ? "page" : undefined}
                      style={{ display: "flex", alignItems: "center", gap: 10, minHeight: 44, textDecoration: "none", color: cur ? "var(--secondary-text)" : "var(--text-primary)", fontSize: 15 }}
                    >
                      {l.icon && (
                        <span style={{ color: "var(--secondary-text)", display: "inline-flex" }}>
                          <Icon name={l.icon} size={16} />
                        </span>
                      )}
                      {l.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Sticky site header with mega menus. Transparent and floating over a dark opening band
 * (.pt-darkband / .pt-herodark / .pt-hero); it takes its surface back once the page turns light.
 */
export function Header({ navigation }: { navigation: Navigation }) {
  const pathname = usePathname() || "/";
  const active = activeNavSection(pathname);
  const [menu, setMenu] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [onDark, setOnDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const barRef = useRef<HTMLElement>(null);

  // Close menus on navigation.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMenu(null);
    setMobile(false);
    setOpen(null);
  }

  useIsoLayoutEffect(() => {
    const sync = () => {
      const band = document.querySelector(".pt-darkband") || document.querySelector(".pt-herodark") || document.querySelector(".pt-hero");
      const over = !!band && band.getBoundingClientRect().bottom > 76;
      setOnDark(over);
      setScrolled((window.scrollY || document.documentElement.scrollTop || 0) > 4);
      const h = barRef.current ? Math.round(barRef.current.getBoundingClientRect().height) : 0;
      if (h) document.documentElement.style.setProperty("--pt-headerh", h + "px");
      document.body.classList.toggle("pt-navover", over);
    };
    sync();
    // The hero can commit after the header does, so re-check a few times after navigation.
    const ts = [0, 200, 800, 1600].map((d) => window.setTimeout(sync, d));
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      ts.forEach(clearTimeout);
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
      document.body.classList.remove("pt-navover");
    };
  }, [pathname]);

  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menu]);

  const transparent = onDark && !menu && !mobile;
  const navText: CSSProperties = { color: "var(--text-primary)", fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 500, textDecoration: "none" };

  return (
    <div className="pt-header-wrap" onMouseLeave={() => setMenu(null)} style={{ position: "sticky", top: 0, zIndex: 20 }}>
      <header
        ref={barRef}
        className={cn("pt-header", transparent && "is-ondark", scrolled && "is-scrolled")}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          background: transparent ? "transparent" : "var(--stone-0)",
          borderBottom: "1px solid " + (transparent ? "transparent" : "var(--grid-line)"),
        }}
      >
        <div className="pt-header-inner" style={{ maxWidth: 1216, width: "100%", margin: "0 auto", padding: "32px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <div className="pt-header-left" style={{ display: "flex", alignItems: "center", gap: 26, minWidth: 0, flex: "1 1 auto" }}>
            <Link href={routes.home} aria-label="Pathways Technologies home" style={{ display: "inline-flex", flex: "0 0 auto" }}>
              <PtLogo height={44} />
            </Link>
            <nav className="pt-nav" aria-label="Main" style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: "1 1 auto", gap: 2, minWidth: 0, flexWrap: "nowrap", whiteSpace: "nowrap" }}>
              {navigation.items.map((it) => {
                const on = menu === it.label;
                const cur = active === it.label;
                const base: CSSProperties = { display: "inline-flex", alignItems: "center", height: 36, padding: "0 13px", flex: "0 0 auto", whiteSpace: "nowrap", borderRadius: "var(--radius-pill)", ...navText };
                if (!it.hasMenu) {
                  return (
                    <Link key={it.label} className={cn("pt-navitem", cur && "is-active")} href={it.href || "#"} aria-current={cur ? "page" : undefined} onMouseEnter={() => setMenu(null)} style={base}>
                      {it.label}
                    </Link>
                  );
                }
                const style: CSSProperties = { ...base, gap: 6, border: "none", cursor: "pointer", background: on ? "var(--stone-200)" : "transparent", transition: "var(--transition-base)" };
                const inner = (
                  <>
                    {it.label}
                    <span style={{ color: "var(--text-muted)", display: "inline-flex", transform: on ? "rotate(180deg)" : "none", transition: "transform var(--duration-base) var(--ease-standard)" }}>{caret}</span>
                  </>
                );
                return it.hubHref ? (
                  <Link
                    key={it.label}
                    href={it.hubHref}
                    className={cn("pt-navitem", cur && "is-active")}
                    aria-current={cur ? "page" : undefined}
                    aria-expanded={on}
                    aria-haspopup="true"
                    onMouseEnter={() => setMenu(it.label)}
                    onFocus={() => setMenu(it.label)}
                    style={style}
                  >
                    {inner}
                  </Link>
                ) : (
                  <button
                    key={it.label}
                    type="button"
                    className={cn("pt-navitem", cur && "is-active")}
                    aria-expanded={on}
                    aria-haspopup="true"
                    onMouseEnter={() => setMenu(it.label)}
                    onClick={() => setMenu(on ? null : it.label)}
                    style={style}
                  >
                    {inner}
                  </button>
                );
              })}
            </nav>
          </div>
          <div className="pt-header-right" style={{ display: "flex", alignItems: "center", gap: 10, flex: "0 0 auto" }}>
            <button
              type="button"
              className="pt-menubtn"
              onClick={() => setMobile(!mobile)}
              aria-label={mobile ? "Close Menu" : "Open Menu"}
              aria-expanded={mobile}
              style={{ display: "none", width: 38, height: 38, alignItems: "center", justifyContent: "center", cursor: "pointer", borderRadius: "var(--radius-pill)", border: "1px solid var(--border-hairline)", background: "var(--stone-0)", color: "var(--text-primary)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
            <ThemeToggle />
            <PtButton tone="primary" size="md" href={navigation.cta.href}>
              {navigation.cta.label}
            </PtButton>
          </div>
        </div>
      </header>
      {menu && navigation.menus[menu] && <MenuPanel m={navigation.menus[menu]} pathname={pathname} />}
      {mobile && (
        <div
          className="pt-mobile-menu"
          style={{ background: "var(--stone-0)", borderBottom: "1px solid var(--grid-line)", padding: "12px 24px 20px", display: "flex", flexDirection: "column", gap: 2, boxShadow: "var(--shadow-raised)", maxHeight: "calc(100vh - 76px)", overflowY: "auto" }}
        >
          {navigation.items.map((it) =>
            it.hasMenu && navigation.menus[it.label] ? (
              <MobileGroup
                key={it.label}
                it={it}
                m={navigation.menus[it.label]}
                active={active === it.label}
                open={open === it.label}
                pathname={pathname}
                onToggle={() => setOpen(open === it.label ? null : it.label)}
                onNavigate={() => setMobile(false)}
              />
            ) : (
              <Link
                key={it.label}
                href={it.href || "#"}
                onClick={() => setMobile(false)}
                aria-current={active === it.label ? "page" : undefined}
                style={{ padding: "14px 4px", fontSize: 16, fontWeight: 500, color: active === it.label ? "var(--secondary-text)" : "var(--text-primary)", textDecoration: "none", borderBottom: "1px solid var(--grid-line)" }}
              >
                {it.label}
              </Link>
            ),
          )}
          <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
            <PtButton tone="primary" size="md" href={navigation.cta.href}>
              {navigation.cta.label}
            </PtButton>
          </div>
        </div>
      )}
    </div>
  );
}
