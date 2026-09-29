/**
 * Per-industry dashboards (prototype: dashboards.jsx). Each sector has its own composition and
 * visual treatment; the figures come from the data layer (types/dashboards.ts).
 *
 * `role` highlights the panel that role owns and dims the rest. `compact` trims series so the board
 * fits beside the By Industry list on the home page.
 */
import type { CSSProperties, ReactNode } from "react";
import { fmt } from "@/lib/utils";
import type {
  BankingBoardData,
  GovernmentBoardData,
  HealthcareBoardData,
  KeyValue,
  KpiTile,
  ManufacturingBoardData,
  RoleName,
  SectorBoards,
  SectorName,
  TransportBoardData,
} from "@/types/dashboards";
import { BLUE_BASE, BLUE_FILL, BLUE_TRACK, COMPANION, Columns, DARK_ACCENT, DARK_FILL, Gauge, HBars, HeatGrid, Legend, Line, Ring } from "./charts";

type BoardProps<D> = { data: D; role: RoleName | null; compact?: boolean };

const cut = <T,>(arr: T[], n: number, compact?: boolean) => (compact ? arr.slice(0, n) : arr);
const MONO = "var(--font-mono)";

/* ---------- shared chrome ---------- */

function PanelHead({ title, note, live }: { title: string; note: string; live?: boolean }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginBottom: 12, paddingBottom: 10, borderBottom: "1px solid " + BLUE_BASE }}>
      <div style={{ fontSize: 13, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "rgba(255,255,255,.55)" }}>{title}</div>
      <div style={{ fontSize: 11, color: "rgba(255,255,255,.55)", display: "inline-flex", alignItems: "center", gap: 6, whiteSpace: "nowrap" }}>
        {live && <span className="pt-pulse" style={{ width: 6, height: 6, borderRadius: 99, background: DARK_ACCENT }} />}
        {note}
      </div>
    </div>
  );
}
const PANEL_LAB: CSSProperties = { fontSize: 11.5, color: "rgba(255,255,255,.62)", marginBottom: 6 };

function Chip({ children, on }: { children: ReactNode; on?: boolean }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        height: 24,
        padding: "0 10px",
        borderRadius: "var(--radius-pill)",
        fontSize: 11,
        whiteSpace: "nowrap",
        border: "1px solid " + (on ? "var(--primary)" : "var(--border-hairline)"),
        color: on ? "var(--primary)" : "var(--text-secondary)",
      }}
    >
      {children}
    </span>
  );
}

/** Wraps a panel owned by one or more roles: outlined when selected, dimmed when another role is. */
function Owned({ role, owner, children }: { role: RoleName | null; owner: RoleName | RoleName[]; children: ReactNode }) {
  const on = Array.isArray(owner) ? !!role && owner.includes(role) : role === owner;
  const dim = !!role && !on;
  return (
    <div
      className="pt-tile"
      style={{ opacity: dim ? 0.45 : 1, outline: on ? "1px solid var(--primary)" : "none", outlineOffset: 2, borderRadius: "var(--radius-sm)", transition: "opacity 200ms var(--ease-standard),outline-color 200ms" }}
    >
      {children}
    </div>
  );
}

function MiniStats({ items }: { items: KpiTile[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 12 }}>
      {items.map((k, i) => (
        <div key={k.label} className="pt-up" style={{ animationDelay: i * 60 + "ms", minWidth: 0 }}>
          <div style={{ fontSize: 10.5, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)", lineHeight: 1.25 }}>{k.label}</div>
          <div style={{ fontSize: 17, fontWeight: 500, letterSpacing: "-0.02em", marginTop: 1, color: "var(--text-primary)" }}>{k.value}</div>
          {k.delta && <div style={{ fontSize: 10, color: COMPANION }}>{k.delta}</div>}
        </div>
      ))}
    </div>
  );
}

function DarkStats({ items, panel = "#1B222A", rule = "#232B32" }: { items: KpiTile[]; panel?: string; rule?: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(146px,1fr))", gap: 8 }}>
      {items.map((k, i) => (
        <div key={k.label} className="pt-up" style={{ animationDelay: i * 70 + "ms", background: panel, borderRadius: 8, padding: "8px 10px", border: "1px solid " + rule, minWidth: 0 }}>
          <div style={{ fontSize: 10.5, color: "rgba(255,255,255,.55)", lineHeight: 1.2 }}>{k.label}</div>
          <div style={{ fontSize: 17, fontWeight: 500, marginTop: 1, letterSpacing: "-0.02em" }}>{k.value}</div>
          <div style={{ fontSize: 10, color: i % 2 ? COMPANION : DARK_ACCENT }}>{k.delta}</div>
        </div>
      ))}
    </div>
  );
}

function DarkRows({ rows, rule = "#232B32", accentIf }: { rows: KeyValue[]; rule?: string; accentIf?: (v: string | number) => boolean }) {
  return (
    <div>
      {rows.map((r, i) => (
        <div
          key={r.label}
          className="pt-up"
          style={{ animationDelay: 180 + i * 60 + "ms", display: "flex", justifyContent: "space-between", gap: 12, fontSize: 11.5, padding: "4px 0", borderBottom: i < rows.length - 1 ? "1px solid " + rule : "none" }}
        >
          <span style={{ color: "rgba(255,255,255,.78)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.label}</span>
          <span style={{ color: accentIf && !accentIf(r.value) ? COMPANION : DARK_ACCENT, fontVariantNumeric: "tabular-nums" }}>{r.value}</span>
        </div>
      ))}
    </div>
  );
}

const rule = (extra?: CSSProperties): CSSProperties => ({ paddingTop: 16, borderTop: "1px solid var(--grid-line)", ...extra });

/* ============ 1. Banking & Finance, dense dark risk console ============ */
function BankingBoard({ data: d, role, compact }: BoardProps<BankingBoardData>) {
  const panel: CSSProperties = { background: "#1B222A", borderRadius: 10, padding: "10px 12px" };
  return (
    <div style={{ background: "#141A20", color: "#EEF2F6", borderRadius: "var(--radius-lg)", padding: "14px 16px 16px", border: "1px solid #232B32" }}>
      <PanelHead title="Risk & Reporting Console" note="Live" live />
      <div style={{ marginBottom: 8 }}>
        <DarkStats items={cut(d.kpis, 2, compact)} />
      </div>
      {!compact && (
        <div style={{ marginBottom: 10 }}>
          <DarkStats items={d.kpisExtra} />
        </div>
      )}
      <Owned role={role} owner={compact ? ["Analyst", "Business Leader"] : "Analyst"}>
        <div style={{ ...panel, padding: "10px 12px 4px", marginBottom: 10 }}>
          <div style={{ ...PANEL_LAB, display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
            <span>Exposure Vs. Limit</span>
            <Legend a="Exposure" b="Limit" aC={DARK_ACCENT} />
          </div>
          <Line s={d.exposure.actual} cmp={d.exposure.plan} color={DARK_ACCENT} fill={DARK_FILL} h={64} />
        </div>
      </Owned>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
        <Owned role={role} owner={compact ? ["Finance", "Developer"] : "Finance"}>
          <div style={{ ...panel, color: "#EEF2F6" }}>
            <div style={PANEL_LAB}>Straight-Through Rate</div>
            <Gauge v={d.straightThrough} label="Payments Automated" color={DARK_ACCENT} track={BLUE_TRACK} />
          </div>
        </Owned>
        <Owned role={role} owner={compact ? ["Support & Service", "Data & IT Leader"] : "Support & Service"}>
          <div style={panel}>
            <div style={PANEL_LAB}>Alert Queue</div>
            <DarkRows rows={cut(d.alerts, 3, compact)} />
          </div>
        </Owned>
      </div>
      {!compact && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <Owned role={role} owner="Business Leader">
            <div style={{ ...panel, padding: "10px 12px 4px" }}>
              <div style={{ ...PANEL_LAB, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>Provisioning Coverage</span>
                <Legend aC={DARK_ACCENT} />
              </div>
              <Line s={d.provisioning.actual} cmp={d.provisioning.plan} color={DARK_ACCENT} fill={DARK_FILL} h={58} />
            </div>
          </Owned>
          <Owned role={role} owner="Developer">
            <div style={panel}>
              <div style={PANEL_LAB}>Pipelines Under SLA</div>
              <DarkRows rows={d.pipelines} />
            </div>
          </Owned>
        </div>
      )}
    </div>
  );
}

/* ============ 2. Healthcare, airy clinical board, ring-led ============ */
function HealthcareBoard({ data: d, role, compact }: BoardProps<HealthcareBoardData>) {
  return (
    <div style={{ background: "var(--stone-0)", border: "1px solid var(--grid-line)", borderRadius: "var(--radius-lg)", padding: "16px 18px" }}>
      <PanelHead title="Care Operations Board" note="Consent-Tracked Data" live />
      <div style={{ marginBottom: 18, paddingBottom: 16, borderBottom: "1px solid var(--grid-line)" }}>
        <MiniStats items={cut(d.kpis, 2, compact)} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 22, alignItems: "center", marginBottom: 18 }}>
        <Owned role={role} owner="Data & IT Leader">
          <Ring v={d.governed}>
            <div>
              <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em" }}>{d.governed}%</div>
              <div style={{ fontSize: 10, color: "var(--text-muted)" }}>Governed</div>
            </div>
          </Ring>
        </Owned>
        <Owned role={role} owner="Business Leader">
          <div>
            <div style={PANEL_LAB}>Bed Utilisation By Site</div>
            <HBars rows={compact ? d.bedUtilisation.slice(0, 3) : d.bedUtilisation} />
          </div>
        </Owned>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, ...rule() }}>
        <Owned role={role} owner="Analyst">
          <div>
            <div style={PANEL_LAB}>
              Trial Readout Lag <strong style={{ color: "var(--primary)", fontWeight: 500 }}>{d.trialLag.change}</strong>
            </div>
            <Line s={d.trialLag.actual} cmp={d.trialLag.plan} cmpColor={BLUE_BASE} h={62} />
          </div>
        </Owned>
        <Owned role={role} owner={compact ? ["Support & Service", "Developer"] : "Support & Service"}>
          <div>
            <div style={PANEL_LAB}>Pathways Instrumented</div>
            <div style={{ fontSize: 34, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1, color: "var(--secondary-text)" }}>{d.pathwaysInstrumented}</div>
            <div style={{ display: "flex", gap: 6, marginTop: 12, flexWrap: "wrap" }}>
              {d.pathwayChips.map((c) => (
                <Chip key={c}>{c}</Chip>
              ))}
            </div>
          </div>
        </Owned>
      </div>
      {!compact && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, ...rule({ marginTop: 16 }) }}>
          <Owned role={role} owner="Finance">
            <div style={{ display: "flex", gap: 18, justifyContent: "space-around" }}>
              <Gauge v={d.formulary} label="Formulary Adherence" />
              <Gauge v={d.claimsAutoCoded} label="Claims Auto-Coded" />
            </div>
          </Owned>
          <Owned role={role} owner="Developer">
            <div>
              <div style={PANEL_LAB}>Data Quality By Domain</div>
              <HBars rows={d.dataQuality} />
            </div>
          </Owned>
        </div>
      )}
    </div>
  );
}

/* ============ 3. Government, hairline grid + heat map, monospaced ============ */
function MonoKpis({ items, delayStart = 0, marginBottom }: { items: KpiTile[]; delayStart?: number; marginBottom: number }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", border: "1px dotted var(--border-hairline)", overflow: "hidden", marginBottom }}>
      {items.map((k, i) => (
        <div key={k.label} className="pt-up" style={{ padding: "12px 14px", animationDelay: delayStart + i * 70 + "ms", minWidth: 0, borderRight: "1px dotted var(--border-hairline)" }}>
          <div style={{ fontSize: 10.5, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)", lineHeight: 1.25 }}>{k.label}</div>
          <div style={{ fontFamily: MONO, fontSize: 20, marginTop: 4 }}>{k.value}</div>
        </div>
      ))}
    </div>
  );
}

function GovernmentBoard({ data: d, role, compact }: BoardProps<GovernmentBoardData>) {
  const cv = d.caseVolume;
  return (
    <div style={{ background: "var(--bg-subtle)", border: "1px solid var(--grid-line)", borderRadius: "var(--radius-lg)", padding: "16px 18px" }}>
      <PanelHead title="Service Delivery Monitor" note="Quarterly Publication" />
      <MonoKpis items={cut(d.kpis, 2, compact)} marginBottom={12} />
      {!compact && <MonoKpis items={d.kpisExtra} delayStart={280} marginBottom={16} />}
      <Owned role={role} owner={compact ? ["Support & Service", "Data & IT Leader"] : "Support & Service"}>
        <div style={{ marginTop: 16, marginBottom: 18 }}>
          <div style={PANEL_LAB}>Case Volume By Service And Quarter</div>
          <HeatGrid rows={compact ? cv.rows.slice(0, 3) : cv.rows} cols={cv.cols} matrix={compact ? cv.matrix.slice(0, 3) : cv.matrix} />
        </div>
      </Owned>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, ...rule() }}>
        <Owned role={role} owner={compact ? ["Finance", "Analyst"] : "Finance"}>
          <div>
            <div style={PANEL_LAB}>Budget Variance Accuracy</div>
            <Columns s={d.budgetAccuracy.values} labels={d.budgetAccuracy.labels} h={84} />
          </div>
        </Owned>
        <Owned role={role} owner={compact ? ["Business Leader", "Developer"] : "Business Leader"}>
          <div>
            <div style={PANEL_LAB}>Transparency Commitments</div>
            <HBars rows={d.transparency} />
          </div>
        </Owned>
      </div>
      {!compact && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, ...rule({ marginTop: 16 }) }}>
          <Owned role={role} owner="Analyst">
            <div>
              <div style={PANEL_LAB}>
                Online Service Uptake <strong style={{ color: "var(--primary)", fontWeight: 500 }}>{d.onlineUptake.change}</strong>
              </div>
              <Line s={d.onlineUptake.actual} cmp={d.onlineUptake.plan} cmpColor={BLUE_BASE} h={62} />
            </div>
          </Owned>
          <Owned role={role} owner="Developer">
            <div>
              <div style={PANEL_LAB}>Portal Availability</div>
              <div style={{ display: "flex", gap: 18, justifyContent: "space-around" }}>
                <Gauge v={d.uptime} label="Uptime" />
                <Gauge v={d.apisDocumented} label="APIs Documented" />
              </div>
            </div>
          </Owned>
        </div>
      )}
    </div>
  );
}

/* ============ 4. Manufacturing, plant wall, columns + gauges ============ */
function ManufacturingBoard({ data: d, role, compact }: BoardProps<ManufacturingBoardData>) {
  const fpy = d.firstPassYield;
  return (
    <div style={{ background: "var(--stone-0)", border: "1px solid var(--grid-line)", borderRadius: "var(--radius-sm)", padding: "16px 18px" }}>
      <PanelHead title="Plant Throughput Wall" note="Shift 2 · 3 Lines" live />
      <div style={{ marginBottom: 18, paddingBottom: 16, borderBottom: "1px solid var(--grid-line)" }}>
        <MiniStats items={cut(d.kpis, 2, compact)} />
      </div>
      <Owned role={role} owner={compact ? ["Developer", "Data & IT Leader"] : "Developer"}>
        <div style={{ marginBottom: 18 }}>
          <div style={{ ...PANEL_LAB, display: "flex", justifyContent: "space-between" }}>
            <span>First-Pass Yield By Quarter</span>
            <span style={{ color: "var(--primary)" }}>{fpy.current}</span>
          </div>
          <Columns s={fpy.values} target={fpy.target} labels={fpy.labels} h={compact ? 78 : 110} />
        </div>
      </Owned>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 14, marginBottom: compact ? 0 : 18, ...rule() }}>
        <Owned role={role} owner="Analyst">
          <Gauge v={d.forecastAccuracy} label="Forecast Accuracy" />
        </Owned>
        <Owned role={role} owner="Business Leader">
          <Gauge v={d.oee} label="OEE" />
        </Owned>
        <Owned role={role} owner="Sales">
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-0.03em", color: "var(--secondary-text)" }}>{fmt(d.suppliersScored)}</div>
            <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Suppliers Scored Weekly</div>
          </div>
        </Owned>
      </div>
      {!compact && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, ...rule() }}>
          <Owned role={role} owner="Marketing">
            <div>
              <div style={PANEL_LAB}>
                Unplanned Downtime Hours <strong style={{ color: "var(--primary)", fontWeight: 500 }}>{d.downtime.change}</strong>
              </div>
              <Line s={d.downtime.actual} cmp={d.downtime.plan} cmpColor={BLUE_BASE} h={62} />
            </div>
          </Owned>
          <Owned role={role} owner="Data & IT Leader">
            <div>
              <div style={PANEL_LAB}>Defects Per Million By Line</div>
              <HBars rows={d.defects} />
            </div>
          </Owned>
        </div>
      )}
      {!compact && (
        <Owned role={role} owner="Finance">
          <div style={rule({ marginTop: 16 })}>
            <div style={PANEL_LAB}>
              Unit Cost Trend <strong style={{ color: "var(--primary)", fontWeight: 500 }}>{d.unitCost.change}</strong>
            </div>
            <Line s={d.unitCost.actual} cmp={d.unitCost.plan} cmpColor={BLUE_BASE} h={58} />
          </div>
        </Owned>
      )}
    </div>
  );
}

/* ============ 5. Transport & Logistics, live network board ============ */
function TransportBoard({ data: d, role, compact }: BoardProps<TransportBoardData>) {
  const darkRule: CSSProperties = { paddingTop: 14, borderTop: "1px solid #232B32" };
  return (
    <div style={{ background: "#141A20", color: "#EEF2F6", borderRadius: "var(--radius-lg)", padding: "14px 16px 16px", border: "1px solid #232B32" }}>
      <PanelHead title="Network Live Board" note="Updated 40s Ago" live />
      <div style={{ marginBottom: 10 }}>
        <DarkStats panel="#1B222A" rule="#232B32" items={cut(d.kpis, 2, compact)} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 20, alignItems: "center", marginBottom: 16 }}>
        <Owned role={role} owner="Business Leader">
          <Ring v={d.onTime} size={84} color={DARK_ACCENT} track={BLUE_TRACK}>
            <div>
              <div style={{ fontSize: 22, fontWeight: 500 }}>{d.onTime}%</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,.55)" }}>On Time</div>
            </div>
          </Ring>
        </Owned>
        <Owned role={role} owner={compact ? ["Finance", "Analyst"] : "Finance"}>
          <div>
            <div style={{ ...PANEL_LAB, marginBottom: 6 }}>
              Cost Per Kilometre <strong style={{ color: DARK_ACCENT, fontWeight: 500 }}>{d.costPerKm.change}</strong>
            </div>
            <Line s={d.costPerKm.actual} cmp={d.costPerKm.plan} color={DARK_ACCENT} fill={DARK_FILL} h={62} />
          </div>
        </Owned>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, ...darkRule }}>
        <Owned role={role} owner="Data & IT Leader">
          <div>
            <div style={PANEL_LAB}>Fleet Utilisation</div>
            <Columns s={d.fleetUtilisation.values} labels={d.fleetUtilisation.labels} h={66} color={DARK_ACCENT} soft={BLUE_FILL} />
          </div>
        </Owned>
        <Owned role={role} owner="Developer">
          <div>
            <div style={PANEL_LAB}>Corridor Status</div>
            <DarkRows rows={cut(d.corridors, 3, compact)} rule="#232B32" accentIf={(v) => v !== "On Time"} />
          </div>
        </Owned>
      </div>
      {!compact && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 14, ...darkRule }}>
          <Owned role={role} owner="Analyst">
            <div>
              <div style={PANEL_LAB}>Volume Vs. Forecast</div>
              <Line s={d.volume.actual} cmp={d.volume.plan} color={DARK_ACCENT} fill={DARK_FILL} h={60} />
            </div>
          </Owned>
          <Owned role={role} owner="Support & Service">
            <div>
              <div style={PANEL_LAB}>Exceptions Today</div>
              <DarkRows rows={d.exceptions} rule="#232B32" />
            </div>
          </Owned>
        </div>
      )}
    </div>
  );
}

/* Every board renders on a dark surface (house style). Scoped token overrides mean the shared
   primitives inherit dark-correct tracks, rules and text without prop plumbing. */
const DARK_BOARD_VARS = {
  "--chart-bar": "#4EBAFC",
  "--chart-bar-soft": "rgba(78,186,252,.30)",
  "--chart-bar-dim": "rgba(255,255,255,.16)",
  "--chart-track": "rgba(255,255,255,.14)",
  "--chart-line": "#4EBAFC",
  "--chart-fill": "rgba(78,186,252,.16)",
  "--text-primary": "#E7EDF3",
  "--text-secondary": "rgba(255,255,255,.72)",
  "--text-muted": "rgba(255,255,255,.55)",
  "--grid-line": "#242C34",
  "--border-hairline": "#2C353D",
  "--primary": "#4EBAFC",
  "--secondary-text": "#8ED2FF",
  "--stone-0": "#161D24",
  "--stone-400": "rgba(255,255,255,.28)",
  "--bg-subtle": "#12181E",
  "--bg-muted": "#1B222A",
} as CSSProperties;

type SectorDashboardProps = {
  sector: SectorName;
  boards: SectorBoards;
  role?: RoleName | null;
  compact?: boolean;
};

/** Renders the board for a sector. Keyed on the sector so every switch replays the entry animation. */
export function SectorDashboard({ sector, boards, role = null, compact }: SectorDashboardProps) {
  let board: ReactNode;
  switch (sector) {
    case "Banking & Finance":
      board = <BankingBoard data={boards[sector]} role={role} compact={compact} />;
      break;
    case "Healthcare & Pharmaceuticals":
      board = <HealthcareBoard data={boards[sector]} role={role} compact={compact} />;
      break;
    case "Government & Public Sector":
      board = <GovernmentBoard data={boards[sector]} role={role} compact={compact} />;
      break;
    case "Manufacturing & Consumer Goods":
      board = <ManufacturingBoard data={boards[sector]} role={role} compact={compact} />;
      break;
    case "Transport & Logistics":
      board = <TransportBoard data={boards[sector]} role={role} compact={compact} />;
      break;
  }
  return (
    <div key={sector} className="pt-board" style={{ ...DARK_BOARD_VARS, color: "#E7EDF3" }} role="img" aria-label={`Illustrative ${sector} dashboard`}>
      {board}
    </div>
  );
}
