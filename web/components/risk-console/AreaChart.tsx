import type { RiskAreaChart } from "@/types/risk-console";

const W = 720;
type Pt = [number, number];

/* Monotone cubic interpolation (Fritsch–Carlson): smooth curves that never overshoot a data
   point, so the line reads as ordered rather than wobbly. Ported verbatim from the prototype. */
function mono(p: Pt[]): string {
  const n = p.length;
  if (n < 3) return p.map((q, i) => (i ? "L" : "M") + q[0].toFixed(1) + " " + q[1].toFixed(1)).join(" ");
  const dx: number[] = [];
  const dy: number[] = [];
  const m: number[] = [];
  const t: number[] = [];
  for (let i = 0; i < n - 1; i++) {
    dx[i] = p[i + 1][0] - p[i][0];
    dy[i] = p[i + 1][1] - p[i][1];
    m[i] = dy[i] / dx[i];
  }
  t[0] = m[0];
  for (let i = 1; i < n - 1; i++) t[i] = m[i - 1] * m[i] <= 0 ? 0 : (m[i - 1] + m[i]) / 2;
  t[n - 1] = m[n - 2];
  for (let i = 0; i < n - 1; i++) {
    if (m[i] === 0) {
      t[i] = 0;
      t[i + 1] = 0;
      continue;
    }
    const a = t[i] / m[i];
    const b = t[i + 1] / m[i];
    const s = a * a + b * b;
    if (s > 9) {
      const tau = 3 / Math.sqrt(s);
      t[i] = tau * a * m[i];
      t[i + 1] = tau * b * m[i];
    }
  }
  let d = "M" + p[0][0].toFixed(1) + " " + p[0][1].toFixed(1);
  for (let i = 0; i < n - 1; i++) {
    const hx = dx[i] / 3;
    d +=
      " C" +
      (p[i][0] + hx).toFixed(1) +
      " " +
      (p[i][1] + t[i] * hx).toFixed(1) +
      ", " +
      (p[i + 1][0] - hx).toFixed(1) +
      " " +
      (p[i + 1][1] - t[i + 1] * hx).toFixed(1) +
      ", " +
      p[i + 1][0].toFixed(1) +
      " " +
      p[i + 1][1].toFixed(1);
  }
  return d;
}

const TrendUp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 7h6v6" />
    <path d="m22 7-8.5 8.5-5-5L2 17" />
  </svg>
);

/**
 * One gradient-filled series (the measure) under one clean reference line (the target), so the two
 * never muddy each other where they cross. Rendered on the server; no chart library.
 */
export function AreaChart({ chart }: { chart: RiskAreaChart }) {
  const h = chart.height;
  const a = chart.points.map((p) => p.actual);
  const b = chart.points.map((p) => p.reference);
  const all = a.concat(b);
  const mn = Math.min(...all);
  const mx = Math.max(...all);
  const d = mx - mn || 1;
  const lo = mn - d * 0.45;
  const span = mx + d * 0.22 - lo;
  const y = (v: number) => h - ((v - lo) / span) * h;
  const pts = (s: number[]): Pt[] => s.map((v, i) => [(i / (s.length - 1)) * W, y(v)]);
  const pa = pts(a);
  const da = mono(pa);
  const db = mono(pts(b));
  const end = pa[pa.length - 1];
  const fill = `fill-${chart.id}`;

  return (
    <div className="rc-card">
      <div className="rc-card-head">
        <div>
          <h2 className="rc-card-title">{chart.title}</h2>
          <p className="rc-card-desc">{chart.description}</p>
        </div>
        <span className="rc-legend">
          <span>
            <i style={{ background: "var(--area-lower-line)" }} />
            {chart.legend.actual}
          </span>
          <span>
            <i className="is-dash" style={{ background: "var(--area-upper-line)" }} />
            {chart.legend.reference}
          </span>
        </span>
      </div>
      <div className="rc-card-body is-tight">
        <div className="rc-chart-wrap">
          <svg className="rc-chart" height={h} viewBox={`0 0 ${W} ${h}`} preserveAspectRatio="none" role="img" aria-label={chart.ariaLabel}>
            <defs>
              <linearGradient id={fill} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--area-lower)" stopOpacity="0.62" />
                <stop offset="100%" stopColor="var(--area-lower)" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            {[1, 2, 3].map((g) => {
              const gy = ((h / 4) * g).toFixed(1);
              return <line key={g} x1="0" x2={W} y1={gy} y2={gy} stroke="var(--border)" strokeWidth="1" vectorEffect="non-scaling-stroke" />;
            })}
            <path d={`${da} L ${W} ${h} L 0 ${h} Z`} fill={`url(#${fill})`} />
            <path d={db} fill="none" stroke="var(--area-upper-line)" strokeWidth="1.5" strokeDasharray="6 5" strokeLinecap="round" opacity="0.8" vectorEffect="non-scaling-stroke" />
            <path d={da} fill="none" stroke="var(--area-lower-line)" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
          </svg>
          <span className="rc-chart-dot" style={{ left: "100%", top: ((end[1] / h) * 100).toFixed(2) + "%" }} />
        </div>
        {chart.axis.kind === "ticks" ? (
          <div className="rc-axis is-ticks">
            {chart.axis.labels.map((t) => (
              <span key={t.label} style={{ left: t.at + "%" }}>
                {t.label}
              </span>
            ))}
          </div>
        ) : (
          <div className="rc-axis">
            {chart.axis.labels.map((l, i) => (
              <span key={i}>{l}</span>
            ))}
          </div>
        )}
      </div>
      <div className="rc-card-foot">
        <div className="rc-trend">
          {chart.trend} <TrendUp />
        </div>
        <div className="rc-range">{chart.range}</div>
      </div>
    </div>
  );
}
