import { AreaChart } from "@/components/risk-console/AreaChart";
import { ExportCsvButton } from "@/components/risk-console/ExportCsvButton";
import { getRiskConsole } from "@/lib/data/risk-console";

/* Semicircle gauge: arc length of a 92px-radius half circle, rounded as in the prototype. */
const ARC = 289;

export default async function RiskConsolePage() {
  const d = await getRiskConsole();
  const openAlerts = d.alerts.items.reduce((n, a) => n + a.count, 0);
  const g = d.straightThrough;

  return (
    <main className="rc-wrap">
      <div className="rc-head">
        <div>
          <h1>{d.title}</h1>
          <p>{d.description}</p>
        </div>
        <div className="rc-head-actions">
          <span className="rc-badge">
            <span className="rc-dot" />
            {d.status}
          </span>
          <ExportCsvButton data={d} label={d.exportLabel} />
        </div>
      </div>

      <div className="rc-kpis">
        {d.kpis.map((k) => (
          <div key={k.label} className="rc-card">
            <div className="rc-card-body">
              <div className="rc-kpi-label">{k.label}</div>
              <div className="rc-kpi-value">{k.value}</div>
              <div className="rc-kpi-delta">
                {k.delta && <b>{k.delta}</b>} {k.deltaText}
              </div>
            </div>
          </div>
        ))}
      </div>

      <AreaChart chart={d.exposure} />

      <div className="rc-grid-2">
        <div className="rc-card">
          <div className="rc-card-head">
            <div>
              <h2 className="rc-card-title">{g.title}</h2>
              <p className="rc-card-desc">{g.description}</p>
            </div>
          </div>
          <div className="rc-card-body">
            <div className="rc-gauge">
              <svg width="220" height="122" viewBox="0 0 220 122" role="img" aria-label={g.ariaLabel}>
                <path d="M18 108a92 92 0 0 1 184 0" fill="none" stroke="var(--muted)" strokeWidth="16" />
                <path
                  d="M18 108a92 92 0 0 1 184 0"
                  fill="none"
                  stroke="var(--area-lower-line)"
                  strokeWidth="16"
                  strokeDasharray={ARC}
                  strokeDashoffset={Math.round(ARC * (1 - g.value / 100))}
                />
              </svg>
              <div className="rc-gauge-readout">
                <div className="rc-gauge-fig">{g.value}%</div>
                <div className="rc-gauge-cap">{g.caption}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="rc-card">
          <div className="rc-card-head">
            <div>
              <h2 className="rc-card-title">{d.alerts.title}</h2>
              <p className="rc-card-desc">{d.alerts.description}</p>
            </div>
            <span className="rc-badge is-secondary">{openAlerts} open</span>
          </div>
          <div className="rc-card-body">
            <div className="rc-rows">
              {d.alerts.items.map((a) => (
                <div key={a.label} className="rc-row">
                  <span className="rc-row-k">{a.label}</span>
                  <span className="rc-badge is-secondary">{a.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rc-grid-2">
        <AreaChart chart={d.provisioning} />
        <div className="rc-card">
          <div className="rc-card-head">
            <div>
              <h2 className="rc-card-title">{d.pipelines.title}</h2>
              <p className="rc-card-desc">{d.pipelines.description}</p>
            </div>
          </div>
          <div className="rc-card-body">
            <div className="rc-rows">
              {d.pipelines.items.map((p) => (
                <div key={p.label} className="rc-row">
                  <span className="rc-row-k">{p.label}</span>
                  <span className="rc-meter">
                    <span className="rc-track">
                      <i style={{ width: p.availability + "%" }} />
                    </span>
                    <span className="rc-num">{p.availability}%</span>
                  </span>
                </div>
              ))}
            </div>
            <div className="rc-foot-note">{d.pipelines.note}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
