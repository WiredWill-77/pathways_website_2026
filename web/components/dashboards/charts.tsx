/**
 * Chart primitives for the sector dashboards (prototype: dashboards.jsx). Token driven and
 * animated on mount with the .pt-draw / .pt-growy / .pt-wgrow / .pt-ringdraw classes in site.css.
 * Pure render functions, safe in server and client components.
 *
 * Colour roles: blue owns the product (every primary series, gauge, bar and KPI figure). Orange is
 * reserved for the single companion/target series. #4EBAFC and #FFAA4B are the tints that clear the
 * 3:1 non-text contrast floor on the dark panels.
 */
import { Fragment, type CSSProperties, type ReactNode } from "react";

export const DARK_ACCENT = "#4EBAFC";
export const DARK_FILL = "rgba(78,186,252,.16)";
/** Companion series. Named BLUE in the prototype for historical reasons; it is the orange tint. */
export const COMPANION = "#FFAA4B";
export const BLUE_BASE = "#1B87C9";
export const BLUE_FILL = "rgba(27,135,201,.22)";
export const BLUE_TRACK = "rgba(255,255,255,.14)";

/** Catmull-Rom to cubic bezier; k>1 exaggerates the curve for a softer line. */
function curve(pts: [number, number][], k = 1.25): string {
  if (pts.length < 3) return pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
  let d = "M" + pts[0][0].toFixed(1) + " " + pts[0][1].toFixed(1);
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i],
      p1 = pts[i],
      p2 = pts[i + 1],
      p3 = pts[i + 2] || pts[i + 1];
    const c1 = [p1[0] + ((p2[0] - p0[0]) / 6) * k, p1[1] + ((p2[1] - p0[1]) / 6) * k];
    const c2 = [p2[0] - ((p3[0] - p1[0]) / 6) * k, p2[1] - ((p3[1] - p1[1]) / 6) * k];
    d += ` C${c1[0].toFixed(1)} ${c1[1].toFixed(1)}, ${c2[0].toFixed(1)} ${c2[1].toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d;
}

export function Legend({ a = "Actual", b = "Plan", aC = "var(--chart-bar)", bC = BLUE_BASE }: { a?: string; b?: string; aC?: string; bC?: string }) {
  return (
    <span style={{ display: "inline-flex", gap: 10, fontSize: 10 }}>
      {[
        [a, aC],
        [b, bC],
      ].map(([t, c]) => (
        <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "var(--text-muted)" }}>
          <i style={{ width: 6, height: 6, borderRadius: 99, background: c, display: "block" }} />
          {t}
        </span>
      ))}
    </span>
  );
}

type LineProps = { s: number[]; cmp?: number[]; color?: string; fill?: string; cmpColor?: string; h?: number; area?: boolean; delay?: number };

/** Smoothed line with an area fill, a dotted companion series and a pulsing live head. */
export function Line({ s, cmp, color = "var(--chart-bar)", fill = "var(--chart-fill)", cmpColor = COMPANION, h = 74, area = true, delay = 0 }: LineProps) {
  const all = cmp ? s.concat(cmp) : s;
  const mn = Math.min(...all),
    mx = Math.max(...all),
    w = 300,
    xe = w - 16;
  const y = (v: number) => h - ((v - mn) / (mx - mn || 1)) * (h - 18) - 9;
  const pts: [number, number][] = s.map((v, i) => [(i / (s.length - 1)) * xe, y(v)]);
  const d = curve(pts),
    end = pts[pts.length - 1];
  const dc = cmp ? curve(cmp.map((v, i) => [(i / (cmp.length - 1)) * xe, y(v)] as [number, number])) : null;
  return (
    <div style={{ position: "relative" }}>
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" height={h} preserveAspectRatio="none" style={{ display: "block", overflow: "visible" }} aria-hidden="true">
        {/* fill runs flat to the right edge so there is no hard vertical wall mid-panel */}
        {area && <path className="pt-fade" style={{ animationDelay: delay + 120 + "ms" }} d={`${d} L ${w} ${end[1].toFixed(1)} L ${w} ${h} L 0 ${h} Z`} fill={fill} />}
        {dc && (
          <path className="pt-fade" style={{ animationDelay: delay + 240 + "ms" }} d={dc} fill="none" stroke={cmpColor} strokeWidth="2" strokeDasharray="0.1 3" strokeLinecap="round" opacity=".9" />
        )}
        {/* pathLength=1 pairs with .pt-draw's stroke-dasharray:1 */}
        <path className="pt-draw" style={{ animationDelay: delay + "ms" }} d={d} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" pathLength={1} />
      </svg>
      {/* live head is HTML, since preserveAspectRatio="none" would stretch an SVG circle */}
      <span className="pt-blip" style={{ left: (end[0] / w) * 100 + "%", top: (end[1] / h) * 100 + "%", color, animationDelay: delay + 800 + "ms" }}>
        <i className="pt-blip-halo" />
        <i className="pt-blip-dot" />
      </span>
    </div>
  );
}

export function Columns({ s, target, h = 110, color = "var(--chart-bar)", soft = "var(--chart-bar-soft)", labels }: { s: number[]; target?: number; h?: number; color?: string; soft?: string; labels?: string[] }) {
  const mx = Math.max(...s, target || 0);
  return (
    <div>
      <div style={{ position: "relative", height: h, display: "flex", alignItems: "flex-end", gap: 8 }}>
        {target != null && (
          <div className="pt-fade" style={{ position: "absolute", left: 0, right: 0, bottom: (target / mx) * h + "px", borderTop: "1px dotted var(--chart-bar)", animationDelay: "500ms" }}>
            <span style={{ position: "absolute", right: 0, top: -16, fontSize: 10, color: "var(--chart-bar)" }}>Target</span>
          </div>
        )}
        {s.map((v, i) => (
          <span
            key={i}
            className="pt-growy"
            style={{ flex: 1, height: (v / mx) * 100 + "%", borderRadius: "2px 2px 0 0", background: i === s.length - 1 ? color : soft, animationDelay: i * 70 + "ms" }}
          />
        ))}
      </div>
      {labels && (
        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          {labels.map((l, i) => (
            <span key={i} style={{ flex: 1, textAlign: "center", fontSize: 10, color: "var(--text-muted)" }}>
              {l}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function Ring({ v, size = 104, stroke = 11, color = "var(--chart-bar)", track = "var(--chart-track)", children }: { v: number; size?: number; stroke?: number; color?: string; track?: string; children?: ReactNode }) {
  const r = (size - stroke) / 2,
    c = 2 * Math.PI * r;
  return (
    <div style={{ position: "relative", width: size, height: size, flex: "0 0 auto" }}>
      <svg width={size} height={size} aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
        <circle
          className="pt-ringdraw"
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          style={{ "--to": c * (1 - v / 100), "--from": c } as CSSProperties}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", textAlign: "center" }}>{children}</div>
    </div>
  );
}

export function Gauge({ v, label, color = "var(--chart-bar)" }: { v: number; label: string; color?: string; track?: string }) {
  const r = 44,
    c = Math.PI * r;
  return (
    <div style={{ textAlign: "center" }}>
      <svg viewBox="0 0 108 62" width="108" height="62" role="img" aria-label={`${label}: ${v}%`}>
        <path d="M8 54a46 46 0 0 1 92 0" fill="none" stroke="var(--chart-track)" strokeWidth="9" strokeLinecap="round" />
        <path
          className="pt-ringdraw"
          d="M8 54a46 46 0 0 1 92 0"
          fill="none"
          stroke={color}
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={c}
          style={{ "--to": c * (1 - v / 100), "--from": c } as CSSProperties}
        />
        <text x="54" y="50" textAnchor="middle" fill="currentColor" fontSize="20" fontWeight="500">
          {v}%
        </text>
      </svg>
      <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>{label}</div>
    </div>
  );
}

export function HBars({ rows, color = "var(--chart-bar)" }: { rows: { label: string; value: string | number }[]; color?: string }) {
  const mx = Math.max(...rows.map((r) => Number(r.value)));
  return (
    <div style={{ display: "grid", gap: 10 }}>
      {rows.map((r, i) => (
        <div key={r.label} style={{ display: "grid", gridTemplateColumns: "minmax(0,104px) 1fr 40px", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 12, color: "var(--text-secondary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.label}</span>
          <span style={{ height: 8, borderRadius: 99, background: "var(--chart-track)", overflow: "hidden", display: "block" }}>
            <span className="pt-wgrow" style={{ display: "block", height: "100%", borderRadius: 99, width: (Number(r.value) / mx) * 100 + "%", background: color, animationDelay: i * 80 + "ms" }} />
          </span>
          <span style={{ fontSize: 12, textAlign: "right", fontVariantNumeric: "tabular-nums", color: "var(--text-primary)" }}>{r.value}</span>
        </div>
      ))}
    </div>
  );
}

export function HeatGrid({ matrix, rows, cols }: { matrix: number[][]; rows: string[]; cols: string[] }) {
  const mx = Math.max(...matrix.flat());
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: `76px repeat(${cols.length},1fr)`, gap: 4, alignItems: "center" }}>
        <span />
        {cols.map((c) => (
          <span key={c} style={{ fontSize: 10, color: "var(--text-muted)", textAlign: "center" }}>
            {c}
          </span>
        ))}
        {matrix.map((row, ri) => (
          <Fragment key={rows[ri]}>
            <span style={{ fontSize: 11, color: "var(--text-secondary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{rows[ri]}</span>
            {row.map((v, ci) => (
              <span
                key={ci}
                className="pt-fade"
                title={`${rows[ri]} ${cols[ci]}: ${v}`}
                style={{ height: 22, borderRadius: 2, animationDelay: (ri * cols.length + ci) * 24 + "ms", background: `color-mix(in oklab, ${BLUE_BASE} ${Math.round((v / mx) * 100)}%, var(--chart-track))` }}
              />
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
