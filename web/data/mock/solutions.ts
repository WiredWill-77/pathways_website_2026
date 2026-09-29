/* Mock data for the solutions domain (prototype: solution-page.jsx, INDUSTRIES and ROLES).
   Copy and figures are illustrative, confirm before publishing. */
import { routes } from "@/lib/routes";
import type { IconItem, Stat, Step, TitledText } from "@/types/blocks";
import type { Solution, SolutionClosing } from "@/types/solutions";

const H30 = "clamp(23px,4.6vw,30px)";
const H32 = "clamp(23px,4.6vw,32px)";
const SEE_ALL_SOLUTIONS = { label: "See All Solutions", href: routes.home };

const stepsFrom90 = (rows: { kicker: string; line: string }[]): Step[] =>
  rows.map(({ kicker, line }) => {
    const [title, text] = line.split(":");
    return { kicker, title, text: (text ?? line).trim() };
  });

const industryMeta = (name: string) => ({
  title: `${name} Solutions`,
  description: `Data platforms, analytics and automation for ${name}, built in your tenancy by Pathways Technologies.`,
});

const roleMeta = (label: string, who: string) => ({
  title: label,
  description: `How Pathways Technologies supports the ${who}: the outcomes you own, what we build, and your first ninety days.`,
});

const roleClosing = (label: string): SolutionClosing => ({
  title: label.replace(/^For /, "Built For ") + ".",
  text: "Tell us the report you rebuild every month. We will show you what it looks like when it maintains itself.",
  secondary: { label: "Browse By Industry", href: routes.home },
  credit: "",
});

const heroMeta = (ttv: string, coverage: string, first: Stat): Stat[] => [
  { label: "Median Time To Value", value: ttv },
  { label: "Data Coverage", value: coverage },
  first,
];

/* ------------------------------------------------------------------ industries */

const BANKING_CHALLENGES: IconItem[] = [
  { icon: "shield-alert", title: "Reporting That Cannot Be Audited", text: "Month-end assembled from spreadsheets, with no lineage from figure back to source." },
  { icon: "scale", title: "Model Governance", text: "Credit and fraud models built in isolation, then blocked at approval because nobody can explain them." },
  { icon: "users", title: "Fragmented Customer View", text: "Product silos mean the same customer is counted three times and served once." },
];
const BANKING_DELIVERS: TitledText[] = [
  { title: "Regulatory Reporting Layer", text: "Definitions agreed once, versioned, and traceable from report to raw record." },
  { title: "Credit & Fraud Models", text: "Built with your risk team, documented for approval, monitored in production." },
  { title: "Customer 360", text: "One identity across accounts, channels and products, with consent tracked." },
  { title: "Finance Automation", text: "Reconciliation and close automated with Automation Anywhere bots." },
];
const BANKING_OUTCOMES: Stat[] = [
  { label: "Close Cycle", value: "−62%" },
  { label: "Reports Retired", value: "41" },
  { label: "Model Approval Rate", value: "91%" },
  { label: "Straight-Through Processing", value: "74%" },
];

const HEALTH_CHALLENGES: IconItem[] = [
  { icon: "lock", title: "Consent And Access", text: "Clinical data that cannot be analysed because access rules were never modelled." },
  { icon: "activity", title: "Capacity Blind Spots", text: "Bed, theatre and staffing decisions made on yesterday's paper report." },
  { icon: "package", title: "Supply Visibility", text: "Stock-outs discovered at the dispensary, well past the point planning could have caught them." },
];
const HEALTH_DELIVERS: TitledText[] = [
  { title: "Governed Clinical Warehouse", text: "Row-level access, consent flags and full audit history on every extract." },
  { title: "Capacity & Flow Analytics", text: "Bed utilisation, theatre scheduling and staffing forecasts by site." },
  { title: "Commercial Analytics", text: "Territory, formulary and distributor performance in one scorecard." },
  { title: "Regulatory Reporting", text: "Submissions assembled once from the warehouse and reused every cycle." },
];
const HEALTH_OUTCOMES: Stat[] = [
  { label: "Records Governed", value: "77%" },
  { label: "Readout Lag", value: "−41%" },
  { label: "Pathways Instrumented", value: "128" },
  { label: "Sites Live", value: "9" },
];

const GOV_CHALLENGES: IconItem[] = [
  { icon: "building", title: "Data Across Agencies", text: "Twenty-three agencies, twenty-three definitions of the same service." },
  { icon: "file-clock", title: "Manual Publication", text: "Open-data commitments met by hand, quarterly, at high cost." },
  { icon: "banknote", title: "Budget Variance", text: "Spend reported late enough that correction is no longer possible." },
];
const GOV_DELIVERS: TitledText[] = [
  { title: "Shared Definitions Layer", text: "One agreed set of service and beneficiary definitions across agencies." },
  { title: "Citizen Service Dashboards", text: "Case volumes, resolution times and backlog by service and region." },
  { title: "Open Data Pipelines", text: "Scheduled publication with provenance, so transparency is not a manual project." },
  { title: "Programme Disbursement", text: "eVoucher for issuance, redemption and daily reconciliation at national scale." },
];
const GOV_OUTCOMES: Stat[] = [
  { label: "Datasets Published", value: "68%" },
  { label: "Median Resolution", value: "5.8 Days" },
  { label: "Agencies Aligned", value: "23" },
  { label: "Citizen Requests Closed", value: "91%" },
];
const GOV_COMPLIANCE: string[][] = [
  ["Data Residency", "Hosted at Konza Technopolis, Kenya"],
  ["Legal Basis", "Kenya Data Protection Act 2019"],
  ["Publication", "Scheduled, with provenance metadata"],
  ["Audit", "Every figure traceable to source record"],
];

const MFG_CHALLENGES: IconItem[] = [
  { icon: "trending-down", title: "Forecast Error", text: "Demand plans built in spreadsheets that nobody trusts by week three." },
  { icon: "wrench", title: "Unplanned Downtime", text: "Line stoppages explained after the fact, never predicted." },
  { icon: "truck", title: "Supplier Performance", text: "No comparable score across suppliers, so negotiation runs on anecdote." },
];
const MFG_DELIVERS: TitledText[] = [
  { title: "Demand Planning Models", text: "SKU-week forecasting with accuracy tracked against the plan of record." },
  { title: "Plant Performance Analytics", text: "OEE, first-pass yield and downtime by line, shift and cause." },
  { title: "Supplier Scorecards", text: "P-Score benchmarking across price, quality and reliability." },
  { title: "Route To Market", text: "Distributor and retail execution reporting down to the outlet." },
];
const MFG_OUTCOMES: Stat[] = [
  { label: "Forecast Accuracy", value: "81%" },
  { label: "Downtime", value: "−28%" },
  { label: "First-Pass Yield", value: "96%" },
  { label: "Stockouts", value: "−34%" },
];
const MFG_SIGNALS = ["Line Telemetry", "MES Events", "Quality Inspections", "Goods Receipts", "Distributor Sell-Out", "Maintenance Logs"];

const TRANSPORT_CHALLENGES: IconItem[] = [
  { icon: "split", title: "Telemetry In Silos", text: "Each vendor portal tells part of the story, none tells the route economics." },
  { icon: "clock", title: "On-Time Performance", text: "Delays reported by exception, after the customer has already called." },
  { icon: "fuel", title: "Cost Per Kilometre", text: "Fuel, maintenance and utilisation tracked separately, never combined." },
];
const TRANSPORT_DELIVERS: TitledText[] = [
  { title: "Live Network Board", text: "On-time arrival, corridor status and exception alerts on one screen." },
  { title: "Route Economics", text: "Cost per kilometre by vehicle, route and driver, reconciled to finance." },
  { title: "Predictive Maintenance", text: "Failure risk scoring from telemetry, scheduled into the maintenance window." },
  { title: "Customer Notifications", text: "Arrival and exception messaging through Infobip channels." },
];
const TRANSPORT_OUTCOMES: Stat[] = [
  { label: "On-Time Arrival", value: "88%" },
  { label: "Cost Per Km", value: "−17%" },
  { label: "Events Ingested", value: "12B / mo" },
  { label: "Fleet Uptime", value: "97%" },
];

const plain = (items: IconItem[]): TitledText[] => items.map(({ title, text }) => ({ title, text }));

const INDUSTRY_SOLUTIONS: Solution[] = [
  {
    slug: "banking-finance",
    type: "industry",
    name: "Banking & Finance",
    label: "Banking & Finance",
    intro:
      "Retail banks, insurers and microfinance lenders run on data that has to satisfy a regulator, a risk committee and a branch manager at the same time. We build the layer that satisfies all three.",
    image: "/uploads/pasted-1789830216776-0.png",
    products: ["Insight Grid", "P-Score"],
    href: routes.solution("banking-finance"),
    meta: industryMeta("Banking & Finance"),
    hero: {
      eyebrow: "Solutions · Banking & Finance",
      lead: "Risk, Regulation And Revenue,",
      rest: "On One Set Of Numbers.",
      intro:
        "Retail banks, insurers and microfinance lenders run on data that has to satisfy a regulator, a risk committee and a branch manager at the same time. We build the layer that satisfies all three.",
      img: "/uploads/pasted-1789830216776-0.png",
      imgPosition: "center",
      meta: heroMeta("9 weeks", "92%", BANKING_OUTCOMES[0]),
      secondary: SEE_ALL_SOLUTIONS,
    },
    sections: [
      {
        kind: "section",
        index: "01",
        label: "Console",
        right: "The Operating Picture",
        subtle: true,
        blocks: [
          {
            kind: "columns",
            stack: true,
            template: "minmax(0,1.1fr) minmax(0,0.9fr)",
            gap: 40,
            align: "start",
            items: [
              { kind: "dashboard", sector: "Banking & Finance" },
              {
                kind: "stack",
                blocks: [
                  { kind: "heading", size: H30, lead: "Risk And Finance, One Screen.", rest: "Exposure, straight-through processing and the alert queue in one governed view." },
                  { kind: "stats", mt: 26, stats: BANKING_OUTCOMES, tone: "dark" },
                  { kind: "figure", mt: 24, id: "banking-finance-scene", caption: "Photography: the risk and reporting team at work", ratio: "16 / 9" },
                ],
              },
            ],
          },
        ],
      },
      {
        kind: "section",
        index: "02",
        label: "Challenges",
        right: "What We Usually Find",
        blocks: [
          { kind: "heading", size: H32, maxWidth: 820, lead: "Three Things We Find In Every Bank.", rest: "Named plainly, because the fix depends on which one is worst." },
          { kind: "rail", mt: 32, items: plain(BANKING_CHALLENGES) },
        ],
      },
      {
        kind: "quote",
        quote: {
          quote: "We stopped arguing about whose number was right in the first month. Risk and finance now open the same report.",
          name: "Group Financial Controller",
          role: "Union Bank",
        },
      },
      {
        kind: "section",
        index: "03",
        label: "Delivery",
        right: "What We Build",
        subtle: true,
        blocks: [
          { kind: "dashedGrid", items: BANKING_DELIVERS, cols: 2 },
          { kind: "products", mt: 32, names: ["Insight Grid", "P-Score"] },
        ],
      },
    ],
    closing: {
      title: "Start With A Two-Week Banking Discovery.",
      text: "We map your reporting estate, name the three highest-value use cases, and return a costed delivery plan you can take to your risk committee.",
    },
  },
  {
    slug: "healthcare-pharmaceuticals",
    type: "industry",
    name: "Healthcare & Pharmaceuticals",
    label: "Healthcare & Pharmaceuticals",
    intro:
      "Hospital groups, insurers and pharmaceutical distributors hold some of the most sensitive data in any sector. We make it usable without loosening a single control.",
    image: "/uploads/lobby-sign-english-2800px.png",
    products: ["Insight Grid", "P-Score"],
    href: routes.solution("healthcare-pharmaceuticals"),
    meta: industryMeta("Healthcare & Pharmaceuticals"),
    hero: {
      eyebrow: "Solutions · Healthcare & Pharmaceuticals",
      lead: "Clinical & Commercial Data,",
      rest: "Governed End To End.",
      intro:
        "Hospital groups, insurers and pharmaceutical distributors hold some of the most sensitive data in any sector. We make it usable without loosening a single control.",
      img: "/uploads/lobby-sign-english-2800px.png",
      imgPosition: "center",
      meta: heroMeta("12 weeks", "77%", HEALTH_OUTCOMES[0]),
      secondary: SEE_ALL_SOLUTIONS,
    },
    sections: [
      {
        kind: "section",
        index: "01",
        label: "Challenges",
        right: "Where Governance Bites",
        blocks: [
          { kind: "heading", size: H32, maxWidth: 820, lead: "Sensitive Data Is Not Unusable Data.", rest: "Three constraints we model before any analysis begins." },
          { kind: "iconCards", mt: 40, items: HEALTH_CHALLENGES, cols: 3 },
          { kind: "figure", mt: 36, id: "healthcare-pharmaceuticals-scene", caption: "Photography: Kenya Climate Change Knowledge Portal" },
        ],
      },
      {
        kind: "section",
        index: "02",
        label: "Delivery",
        right: "What We Build",
        subtle: true,
        blocks: [{ kind: "splitList", label: "Workstreams", items: HEALTH_DELIVERS }],
      },
      {
        kind: "section",
        index: "03",
        label: "Board",
        right: "Illustrative View",
        blocks: [
          {
            kind: "columns",
            stack: true,
            template: "1fr 1fr",
            gap: 36,
            align: "start",
            items: [
              { kind: "dashboard", sector: "Healthcare & Pharmaceuticals" },
              {
                kind: "stack",
                gap: 20,
                blocks: [
                  { kind: "figure", id: "healthcare-pharmaceuticals-team", caption: "Photography: the Healthcare & Pharmaceuticals team using the output", ratio: "4 / 3" },
                  { kind: "stats", stats: HEALTH_OUTCOMES },
                ],
              },
            ],
          },
        ],
      },
      {
        kind: "quote",
        quote: {
          quote: "Governance was the reason we had never analysed this data. They modelled the consent rules first, and everything else followed.",
          name: "Chief Medical Information Officer",
          role: "Kelo Health",
        },
      },
      {
        kind: "section",
        index: "04",
        label: "Products",
        right: "What Runs Underneath",
        subtle: true,
        blocks: [{ kind: "products", names: ["Insight Grid", "P-Score"] }],
      },
    ],
    closing: {
      title: "Model The Consent Rules First.",
      text: "A two-week discovery maps your clinical and commercial estate against the access rules that govern it, and returns a costed plan.",
    },
  },
  {
    slug: "government-public-sector",
    type: "industry",
    name: "Government & Public Sector",
    label: "Government & Public Sector",
    intro:
      "Ministries, counties and agencies are measured on service delivery and transparency. We build the reporting spine that makes both defensible, hosted in Kenya where residency demands it.",
    image: "/uploads/Kenya Government.avif",
    products: ["eVoucher", "Insight Grid"],
    href: routes.solution("government-public-sector"),
    meta: industryMeta("Government & Public Sector"),
    hero: {
      eyebrow: "Solutions · Government & Public Sector",
      lead: "Service Delivery Data,",
      rest: "Made Public By Default.",
      intro:
        "Ministries, counties and agencies are measured on service delivery and transparency. We build the reporting spine that makes both defensible, hosted in Kenya where residency demands it.",
      img: "/uploads/Kenya Government.avif",
      imgPosition: "center",
      meta: heroMeta("14 weeks", "68%", GOV_OUTCOMES[0]),
      secondary: SEE_ALL_SOLUTIONS,
    },
    sections: [
      {
        kind: "section",
        index: "01",
        label: "Monitor",
        right: "Service Delivery View",
        blocks: [
          { kind: "dashboard", sector: "Government & Public Sector" },
          { kind: "stats", mt: 32, stats: GOV_OUTCOMES },
        ],
      },
      {
        kind: "section",
        index: "02",
        label: "Compliance",
        right: "Residency And Legal Basis",
        subtle: true,
        blocks: [
          { kind: "heading", size: H30, maxWidth: 780, lead: "Hosted In Kenya, Auditable By Design.", rest: "The questions a permanent secretary asks first, answered before we start." },
          { kind: "table", mt: 36, head: ["Requirement", "How It Is Met"], rows: GOV_COMPLIANCE },
        ],
      },
      {
        kind: "section",
        index: "03",
        label: "Challenges",
        right: "What We Usually Find",
        blocks: [
          { kind: "dashedGrid", items: plain(GOV_CHALLENGES), cols: 3 },
          { kind: "figure", mt: 36, id: "government-public-sector-scene", caption: "Photography: a citizen service centre in operation" },
        ],
      },
      {
        kind: "section",
        index: "04",
        label: "Delivery",
        right: "What We Build",
        subtle: true,
        blocks: [
          { kind: "checkRows", items: GOV_DELIVERS.map((d) => d.title), cols: 2 },
          { kind: "products", mt: 32, names: ["eVoucher", "Insight Grid"] },
        ],
      },
    ],
    closing: {
      title: "Start With One Service.",
      text: "We instrument a single public service end to end, publish it, then use that pattern across the rest of the programme.",
      credit: "",
    },
  },
  {
    slug: "manufacturing-consumer-goods",
    type: "industry",
    name: "Manufacturing & Consumer Goods",
    label: "Manufacturing & Consumer Goods",
    intro:
      "Plants and distributors lose margin in the gap between what was planned and what actually happened. We close that gap down to a single shift.",
    image: "/uploads/manufacturing.jpg",
    products: ["P-Score", "Insight Grid"],
    href: routes.solution("manufacturing-consumer-goods"),
    meta: industryMeta("Manufacturing & Consumer Goods"),
    hero: {
      eyebrow: "Solutions · Manufacturing & Consumer Goods",
      lead: "Demand, Quality And Supply,",
      rest: "Visible While You Can Still Act.",
      intro:
        "Plants and distributors lose margin in the gap between what was planned and what actually happened. We close that gap down to a single shift.",
      img: "/uploads/manufacturing.jpg",
      imgPosition: "center",
      meta: heroMeta("8 weeks", "81%", MFG_OUTCOMES[0]),
      secondary: SEE_ALL_SOLUTIONS,
    },
    sections: [
      {
        kind: "section",
        index: "01",
        label: "Signals",
        right: "What We Ingest",
        blocks: [
          {
            kind: "columns",
            stack: true,
            template: "minmax(0,0.9fr) minmax(0,1.1fr)",
            gap: 44,
            align: "stretch",
            items: [
              {
                kind: "stack",
                blocks: [
                  { kind: "heading", size: H30, lead: "Six Signals, One Plant View.", rest: "Telemetry, quality and sell-out data joined to the plan of record." },
                  { kind: "chips", mt: 26, items: MFG_SIGNALS },
                  { kind: "stats", mt: 28, stats: MFG_OUTCOMES, tone: "dark" },
                ],
              },
              { kind: "figure", id: "manufacturing-consumer-goods-scene", caption: "Photography: the production line and shift board", fill: true },
            ],
          },
        ],
      },
      {
        kind: "section",
        index: "02",
        label: "Delivery",
        right: "Four Builds",
        subtle: true,
        blocks: [
          { kind: "heading", size: H32, maxWidth: 820, lead: "Sequenced By Payback.", rest: "Forecasting first, then plant performance, then supply and route to market." },
          { kind: "stepper", mt: 44, steps: MFG_DELIVERS.map((d, i) => ({ kicker: "Build 0" + (i + 1), title: d.title, text: d.text })) },
        ],
      },
      {
        kind: "section",
        index: "03",
        label: "Wall",
        right: "Illustrative View",
        blocks: [
          {
            kind: "columns",
            template: "minmax(0,0.85fr) minmax(0,1.15fr)",
            gap: 36,
            align: "stretch",
            items: [
              { kind: "iconCards", items: MFG_CHALLENGES, cols: 1, stretch: true },
              { kind: "dashboard", sector: "Manufacturing & Consumer Goods" },
            ],
          },
        ],
      },
      {
        kind: "section",
        index: "04",
        label: "Products",
        right: "What Runs Underneath",
        subtle: true,
        blocks: [{ kind: "products", names: ["P-Score", "Insight Grid"] }],
      },
    ],
    closing: {
      title: "Start On One Line.",
      text: "We instrument a single production line and prove the payback in a quarter, then roll the pattern across the plant.",
    },
  },
  {
    slug: "transport-logistics",
    type: "industry",
    name: "Transport & Logistics",
    label: "Transport & Logistics",
    intro:
      "Operators sit on telemetry from three vendor portals and still cannot answer which corridor lost money last week. We consolidate it into one live operating picture.",
    image: "/uploads/fleet-management.webp",
    products: ["Insight Grid", "P-Score"],
    href: routes.solution("transport-logistics"),
    meta: industryMeta("Transport & Logistics"),
    hero: {
      eyebrow: "Solutions · Transport & Logistics",
      lead: "Fleet & Network Performance,",
      rest: "In Near Real Time.",
      intro:
        "Operators sit on telemetry from three vendor portals and still cannot answer which corridor lost money last week. We consolidate it into one live operating picture.",
      img: "/uploads/fleet-management.webp",
      imgPosition: "center",
      meta: heroMeta("7 weeks", "88%", TRANSPORT_OUTCOMES[0]),
      secondary: SEE_ALL_SOLUTIONS,
    },
    sections: [
      {
        kind: "inkBand",
        eyebrow: "Live Network Board · Illustrative",
        blocks: [
          {
            kind: "columns",
            stack: true,
            template: "minmax(0,1fr) minmax(0,0.8fr)",
            gap: 32,
            align: "start",
            items: [
              { kind: "dashboard", sector: "Transport & Logistics" },
              {
                kind: "stack",
                blocks: [
                  { kind: "stats", stats: TRANSPORT_OUTCOMES, tone: "dark" },
                  { kind: "figure", mt: 24, id: "transport-logistics-scene", caption: "Photography: the control room and fleet", ratio: "16 / 10", showCaption: false },
                ],
              },
            ],
          },
        ],
      },
      {
        kind: "section",
        index: "01",
        label: "Challenges",
        right: "Why The Data Is Split",
        blocks: [
          { kind: "heading", size: H32, maxWidth: 820, lead: "Three Portals, No Answer.", rest: "Every operator we meet has the data and none of the picture." },
          { kind: "iconCards", mt: 40, items: TRANSPORT_CHALLENGES, cols: 3 },
        ],
      },
      {
        kind: "section",
        index: "02",
        label: "Delivery",
        right: "What We Build",
        subtle: true,
        blocks: [{ kind: "rail", items: TRANSPORT_DELIVERS }],
      },
      {
        kind: "quote",
        quote: {
          quote: "The board runs on the corridor view now. Nobody opens the vendor portals any more.",
          name: "Network Operations Director",
          role: "NORTHPORT",
        },
      },
      {
        kind: "section",
        index: "03",
        label: "Products",
        right: "What Runs Underneath",
        blocks: [{ kind: "products", names: ["Insight Grid", "P-Score"] }],
      },
    ],
    closing: {
      title: "Consolidate One Corridor.",
      text: "We join your telemetry, cost and schedule data for a single corridor, then extend the pattern across the network.",
      credit: "",
    },
  },
];

/* ------------------------------------------------------------------ roles */

const BUSINESS_HELP: TitledText[] = [
  { title: "Executive Scorecard", text: "A single page per function, built on definitions your leadership team signed off." },
  { title: "Scenario Views", text: "Compare plan, forecast and actual without a modelling exercise each time." },
  { title: "Data Investment Case", text: "A costed roadmap with the value of each use case, ready for the board pack." },
  { title: "Adoption Tracking", text: "See which teams actually use the output, and where the gap is widest." },
];
const BUSINESS_90 = [
  { kicker: "Weeks 1 to 2", line: "Discovery: interviews with each function, definition inventory, use-case shortlist." },
  { kicker: "Weeks 3 to 8", line: "Build: the scorecard and its pipeline, with weekly reviews against your questions." },
  { kicker: "Weeks 9 to 12", line: "Embed: leadership enablement, target-setting and the next quarter's roadmap." },
];
const BUSINESS_STATS: Stat[] = [
  { label: "Reporting Cycle", value: "−62%" },
  { label: "Definitions Certified", value: "260+" },
  { label: "Board Pack Prep", value: "1 Day" },
  { label: "Time To Value", value: "9 Weeks" },
];

const DATAIT_OWNS = ["Platform architecture and cost", "Security, access and residency", "Delivery standards and handover"];
const DATAIT_HELP: TitledText[] = [
  { title: "Reference Architecture", text: "Azure, Microsoft Fabric or BigQuery, documented, reviewed with your team before a line is written." },
  { title: "Governance & Access", text: "Row-level policy, consent flags and audit trails modelled from day one." },
  { title: "Cost Control", text: "Workload sizing, storage tiering and a monthly cost review you can defend." },
  { title: "Capability Transfer", text: "Your engineers pair with ours, then take the platform over on a fixed date." },
];
const DATAIT_HANDOVER: string[][] = [
  ["Infrastructure As Code", "Terraform for every environment, in your repository"],
  ["Runbooks", "Operational procedures, alert thresholds and escalation paths"],
  ["Access Model", "Documented roles, policies and review cadence"],
  ["Exit Terms", "Handover at any notice point, no proprietary lock"],
];

const ANALYST_HELP: TitledText[] = [
  { title: "Governed Semantic Layer", text: "Certified measures you can query without rebuilding the joins each time." },
  { title: "Self-Service Modelling", text: "Sanctioned datasets, version control and a review path to production." },
  { title: "Quality Monitoring", text: "Freshness and completeness checks that alert before a stakeholder does." },
  { title: "Skills Programme", text: "SQL, modelling and visualisation tracks that take you from extract to insight." },
];
const ANALYST_90: TitledText[] = [
  { title: "Weeks 1 to 2", text: "Audit: what you report today, where the time goes, which sources conflict." },
  { title: "Weeks 3 to 8", text: "Build: certified measures and the first three reports retired from manual assembly." },
  { title: "Weeks 9 to 12", text: "Enable: training cohort, documentation and a working request queue." },
];
const ANALYST_TOOLS = ["SQL & dbt", "Power BI", "Looker", "Python Notebooks", "Insight Grid Semantic Layer", "Version Control"];

const DEV_HELP: TitledText[] = [
  { title: "Documented APIs", text: "Versioned endpoints over the semantic layer, with contracts and sandbox access." },
  { title: "Embedded Analytics", text: "Insight Grid views embedded in your app with row-level security intact." },
  { title: "Event Instrumentation", text: "A schema for product events that survives more than one release." },
  { title: "Automation Hooks", text: "Trigger Automation Anywhere bots and Infobip journeys from your own services." },
];
const DEV_90 = [
  { kicker: "Weeks 1 to 2", line: "Integration review: current services, auth model, event inventory." },
  { kicker: "Weeks 3 to 8", line: "Build: API layer, sandbox tenancy and the first embedded view in your product." },
  { kicker: "Weeks 9 to 12", line: "Harden: load testing, monitoring, and CI wired into your existing pipeline." },
];
const DEV_TOOLS = ["OpenAPI Contracts", "OAuth 2.0 / OIDC", "Webhooks", "SDKs (JS, Python)", "Sandbox Tenancy", "GitHub Actions"];

const ROLE_SOLUTIONS: Solution[] = [
  {
    slug: "role-business-leader",
    type: "role",
    name: "Business Leader",
    label: "For The Business Leader",
    icon: "briefcase",
    intro: "You do not need another dashboard. You need the three figures that decide next quarter, agreed across functions and available on demand.",
    image: "/uploads/business-leader-hero.jpg",
    products: ["Insight Grid", "P-Score"],
    href: routes.solution("role-business-leader"),
    meta: roleMeta("For The Business Leader", "business leader"),
    hero: {
      eyebrow: "Solutions · For The Business Leader",
      lead: "One Version Of The Numbers,",
      rest: "Ready Before The Board Meeting.",
      intro: "You do not need another dashboard. You need the three figures that decide next quarter, agreed across functions and available on demand.",
      img: "/uploads/business-leader-hero.jpg",
      imgPosition: "center",
      secondary: SEE_ALL_SOLUTIONS,
    },
    sections: [
      {
        kind: "section",
        index: "01",
        label: "Outcome",
        right: "What Changes First",
        blocks: [
          { kind: "stats", stats: BUSINESS_STATS },
          { kind: "dashedGrid", mt: 40, items: BUSINESS_HELP, cols: 2 },
        ],
      },
      {
        kind: "section",
        index: "02",
        label: "First 90 Days",
        right: "How It Runs",
        subtle: true,
        blocks: [
          { kind: "heading", size: H30, maxWidth: 780, lead: "Ninety Days To A Trusted Scorecard.", rest: "Weekly reviews against the questions you actually get asked." },
          { kind: "stepper", mt: 44, steps: stepsFrom90(BUSINESS_90) },
          { kind: "figure", mt: 40, id: "business-leader-portrait", caption: "Photography: a business leader reviewing the executive scorecard" },
        ],
      },
      { kind: "section", index: "03", label: "Products", right: "What You Would Use", blocks: [{ kind: "products", names: ["Insight Grid", "P-Score"] }] },
    ],
    closing: roleClosing("For The Business Leader"),
  },
  {
    slug: "role-data-it-leader",
    type: "role",
    name: "Data & IT Leader",
    label: "For The Data & IT Leader",
    icon: "server",
    intro: "You carry the risk for whatever we build. So we build in your tenancy, with your standards, and give you the infrastructure code at the end.",
    image: "/uploads/data-it-leader-hero.jpg",
    products: ["Insight Grid"],
    href: routes.solution("role-data-it-leader"),
    meta: roleMeta("For The Data & IT Leader", "data and IT leader"),
    hero: {
      eyebrow: "Solutions · For The Data & IT Leader",
      lead: "A Platform You Can Hand Over,",
      rest: "And Still Sleep At Night.",
      intro: "You carry the risk for whatever we build. So we build in your tenancy, with your standards, and give you the infrastructure code at the end.",
      img: "/uploads/data-it-leader-hero.jpg",
      imgPosition: "center",
      secondary: SEE_ALL_SOLUTIONS,
    },
    sections: [
      {
        kind: "section",
        index: "01",
        label: "Approach",
        right: "Built In Your Tenancy",
        blocks: [{ kind: "splitList", label: "Workstreams", items: DATAIT_HELP }],
      },
      {
        kind: "section",
        index: "02",
        label: "Handover",
        right: "What You Receive",
        subtle: true,
        blocks: [
          { kind: "heading", size: H30, maxWidth: 780, lead: "Handover Is A Deliverable.", rest: "Not a conversation at the end of the engagement." },
          { kind: "table", mt: 36, head: ["Artefact", "What It Contains"], rows: DATAIT_HANDOVER },
          { kind: "checkRows", mt: 36, items: DATAIT_OWNS, cols: 3 },
        ],
      },
      {
        kind: "section",
        index: "03",
        label: "Products",
        right: "What You Would Run",
        blocks: [
          {
            kind: "columns",
            stack: true,
            template: "minmax(0,1fr) minmax(0,1fr)",
            gap: 32,
            align: "start",
            items: [
              { kind: "products", names: ["Insight Grid"] },
              { kind: "figure", id: "data-it-leader-portrait", caption: "Photography: a data and IT leader reviewing the platform architecture", ratio: "4 / 3" },
            ],
          },
        ],
      },
    ],
    closing: roleClosing("For The Data & IT Leader"),
  },
  {
    slug: "role-analyst",
    type: "role",
    name: "Analyst",
    label: "For The Analyst",
    icon: "chart-spline",
    intro: "Most analysts spend their week reconciling sources instead of analysing them. We remove that week.",
    image: "/uploads/analyst-hero.jpg",
    products: ["Insight Grid"],
    href: routes.solution("role-analyst"),
    meta: roleMeta("For The Analyst", "analyst"),
    hero: {
      eyebrow: "Solutions · For The Analyst",
      lead: "Stop Rebuilding The Same Extract,",
      rest: "Start Answering The Question.",
      intro: "Most analysts spend their week reconciling sources instead of analysing them. We remove that week.",
      img: "/uploads/analyst-hero.jpg",
      imgPosition: "center",
      secondary: SEE_ALL_SOLUTIONS,
    },
    sections: [
      {
        kind: "section",
        index: "01",
        label: "Your Week",
        right: "Where The Time Goes",
        blocks: [
          {
            kind: "columns",
            stack: true,
            template: "minmax(0,1.05fr) minmax(0,0.95fr)",
            gap: 44,
            align: "start",
            items: [
              {
                kind: "stack",
                blocks: [
                  { kind: "heading", size: H30, lead: "Four Fewer Reconciliations.", rest: "What we put in place so the extract stops being your job." },
                  { kind: "rail", mt: 28, items: ANALYST_HELP },
                ],
              },
              {
                kind: "stack",
                gap: 24,
                sticky: true,
                blocks: [
                  { kind: "figure", id: "analyst-portrait", caption: "Photography: an analyst working with certified measures", ratio: "4 / 3" },
                  { kind: "chips", label: "What You Work In", items: ANALYST_TOOLS },
                ],
              },
            ],
          },
        ],
      },
      {
        kind: "section",
        index: "02",
        label: "First 90 Days",
        right: "How It Runs",
        subtle: true,
        blocks: [{ kind: "dashedGrid", items: ANALYST_90, cols: 3 }],
      },
      { kind: "section", index: "03", label: "Products", right: "What You Would Use", blocks: [{ kind: "products", names: ["Insight Grid"] }] },
    ],
    closing: roleClosing("For The Analyst"),
  },
  {
    slug: "role-developer",
    type: "role",
    name: "Developer",
    label: "For The Developer",
    icon: "code-xml",
    intro: "If analytics only exists in a BI tool, your product cannot use it. We expose it where your code can reach it.",
    image: "/uploads/developer-hero.jpg",
    products: ["Insight Grid", "eVoucher"],
    href: routes.solution("role-developer"),
    meta: roleMeta("For The Developer", "developer"),
    hero: {
      eyebrow: "Solutions · For The Developer",
      lead: "Working APIs,",
      rest: "Data Your Product Can Consume.",
      intro: "If analytics only exists in a BI tool, your product cannot use it. We expose it where your code can reach it.",
      img: "/uploads/developer-hero.jpg",
      imgPosition: "80% center",
      secondary: SEE_ALL_SOLUTIONS,
    },
    sections: [
      {
        kind: "section",
        index: "01",
        label: "Integration",
        right: "What You Get",
        blocks: [
          { kind: "heading", size: H32, maxWidth: 820, lead: "Working Contracts.", rest: "Everything reachable from your own services, with a sandbox to build against." },
          { kind: "chips", mt: 36, items: DEV_TOOLS },
          { kind: "dashedGrid", mt: 40, items: DEV_HELP, cols: 2 },
        ],
      },
      {
        kind: "section",
        index: "02",
        label: "First 90 Days",
        right: "How It Runs",
        subtle: true,
        blocks: [
          { kind: "figure", id: "developer-portrait", caption: "Photography: a developer integrating the analytics API", ratio: "16 / 7" },
          { kind: "stepper", mt: 36, steps: stepsFrom90(DEV_90) },
        ],
      },
      { kind: "section", index: "03", label: "Products", right: "What You Would Build On", blocks: [{ kind: "products", names: ["Insight Grid", "eVoucher"] }] },
    ],
    closing: roleClosing("For The Developer"),
  },
];

/** Every solutions destination page, industries first, in header-menu order. */
export const SOLUTIONS: Solution[] = [...INDUSTRY_SOLUTIONS, ...ROLE_SOLUTIONS];
