/* Mock data for the whitepapers domain (prototype: whitepaper-pdf.jsx WP_DOCS and RESOURCES.whitepapers.library).
   The library order on /resources/whitepapers follows this array. */
import type { Whitepaper } from "@/types/whitepapers";

export const WHITEPAPERS: Whitepaper[] = [
  {
    slug: "data-skills-gap",
    status: "published",
    title: "The 2026 Data Skills Gap",
    type: "Research",
    length: "4 pages",
    published: "2026",
    strap: "Survey of 240 East African data teams: hiring, retention and the roles that stay unfilled.",
    summary:
      "Across 240 data teams in Kenya, Uganda, Tanzania and Rwanda, the shortage is not of junior analysts. It is of the mid-level engineers and analytics leads who turn a platform into a working reporting practice. This paper sets out where the gap sits, what it costs, and what a realistic training ladder looks like inside an organisation that cannot hire its way out.",
    sections: [
      {
        title: "Where The Shortage Bites",
        body: "Roles that stay open longest are analytics engineer, data platform engineer and analytics lead. Entry-level applications outnumber openings by a wide margin, while mid-level roles sit unfilled for months and are often closed by promoting someone who is not yet ready for the scope.",
      },
      {
        title: "What It Costs",
        body: "Teams reported delivery slipping by one to two quarters per unfilled senior role. The second cost is rework: platforms built without a lead who owns definitions tend to be rebuilt within eighteen months.",
      },
      {
        title: "What Works",
        body: "Organisations that closed the gap did it with an internal ladder: hire at entry level against a defined curriculum, pair every learner with live delivery work, and hold a named person accountable for definitions and review.",
      },
    ],
    takeaways: [
      "Hire for the mid-level gap, train for the entry level",
      "Budget training against delivery work, not classroom hours",
      "Name an owner for metric definitions before buying tooling",
      "Measure retention at 12 and 24 months, not at probation",
    ],
  },
  {
    slug: "governed-warehouse",
    status: "published",
    title: "Reference Architecture: Governed Warehouse",
    type: "Architecture",
    length: "4 pages",
    published: "2026",
    strap: "Azure and Microsoft Fabric patterns for a regulated warehouse, with cost and access models.",
    summary:
      "A reference architecture for organisations that have to prove who touched what. It covers ingestion, the medallion layers, access control, lineage and the cost model, written so an architect can lift the patterns and a risk reviewer can follow the controls.",
    sections: [
      {
        title: "Layers And Boundaries",
        body: "Bronze holds raw source extracts with no transformation and a retention rule. Silver holds conformed entities with tested keys. Gold holds the certified marts the business reports from. Each boundary has an owner, a test suite and a refresh contract.",
      },
      {
        title: "Access And Audit",
        body: "Access is granted to roles at the gold layer and to service principals below it. Every query path is logged and lineage is captured from source to report, so an auditor can trace a number on a dashboard back to a source record.",
      },
      {
        title: "Cost Model",
        body: "Capacity is sized against the refresh schedule rather than peak concurrency, with reserved capacity for the certified layer and on-demand for exploration. The paper includes the cost breakdown we use in planning workshops.",
      },
    ],
    takeaways: [
      "Certify a small gold layer rather than the whole warehouse",
      "Log lineage from day one; retrofitting it is the expensive path",
      "Separate exploration capacity from the certified refresh",
      "Write the refresh contract down and test against it",
    ],
  },
  {
    slug: "model-documentation",
    status: "published",
    title: "Model Documentation For Approval",
    type: "Governance",
    length: "4 pages",
    published: "2026",
    strap: "The pack a risk committee needs, and the sections that get rejected most often.",
    summary:
      "Model approval stalls on documentation more often than on the model. This paper sets out the pack a risk committee actually reads, the evidence each section has to carry, and the three sections that get sent back most often in the reviews we have supported.",
    sections: [
      {
        title: "What The Pack Contains",
        body: "Purpose and scope, data lineage, feature definitions, training and validation evidence, performance by segment, monitoring plan, fallback procedure and an owner. Anything outside that list is appendix material.",
      },
      {
        title: "Where Packs Get Rejected",
        body: "Three sections cause most rejections: segment-level performance that hides a weak cohort, a monitoring plan with no thresholds, and a fallback procedure that names no human decision-maker.",
      },
      {
        title: "Keeping It Current",
        body: "Documentation written once at approval goes stale within two release cycles. Tie each section to a system of record so the pack can be regenerated rather than rewritten.",
      },
    ],
    takeaways: [
      "Report performance by segment, not in aggregate",
      "Give every monitoring metric a threshold and an owner",
      "Name the human who acts when the model is wrong",
      "Generate the pack from source, do not maintain it by hand",
    ],
  },
  {
    slug: "digital-disbursement",
    status: "published",
    title: "Digital Disbursement At National Scale",
    type: "Case Study",
    length: "4 pages",
    published: "2026",
    strap: "eVoucher issuance, redemption and daily reconciliation across a public programme.",
    summary:
      "How a national eVoucher programme issues, redeems and reconciles at scale, written from delivery experience. The paper covers the issuance model, the offline redemption path, the daily reconciliation run and the controls that keep the programme auditable.",
    sections: [
      {
        title: "Issuance",
        body: "Entitlements are issued against a verified beneficiary register, with duplicate detection run before issuance rather than at reconciliation. Each voucher carries a programme, a value and an expiry.",
      },
      {
        title: "Redemption In The Field",
        body: "Agents redeem offline and sync on reconnect. The paper covers the conflict rules applied when the same voucher is presented twice and the audit trail each redemption carries.",
      },
      {
        title: "Daily Reconciliation",
        body: "Every day the programme reconciles issuance, redemption and settlement to the cent, with exceptions routed to a named queue and aged. Nothing settles without a matched record.",
      },
    ],
    takeaways: [
      "Detect duplicates at issuance, not at settlement",
      "Design for offline redemption from the start",
      "Reconcile daily and age every exception",
      "Give each exception queue a named owner",
    ],
    coverBackground: "#FFFFFF",
  },
  {
    slug: "data-product-value",
    status: "published",
    title: "Measuring Data Product Value",
    type: "Method",
    length: "4 pages",
    published: "2026",
    strap: "Scoring use cases on value over effort so a roadmap survives its first quarter.",
    summary:
      "A scoring method for data roadmaps. Use cases are scored on value and effort using definitions a business sponsor and a delivery lead can both agree to, so the roadmap survives contact with the first quarter of delivery.",
    sections: [
      {
        title: "The Scoring Model",
        body: "Value is scored on decision frequency, decision value and the number of teams affected. Effort is scored on data readiness, integration surface and governance burden. Both use fixed anchors so scores are comparable across sponsors.",
      },
      {
        title: "Running The Session",
        body: "Score in one room with the sponsor and the delivery lead present. Disagreement on a score is the useful output: it usually means the use case is not yet defined well enough to build.",
      },
      {
        title: "Reviewing The Roadmap",
        body: "Rescore quarterly. Items that keep slipping down the list are candidates for removal, not for another quarter of waiting.",
      },
    ],
    takeaways: [
      "Use fixed anchors so scores compare across sponsors",
      "Score with sponsor and delivery lead in the same room",
      "Treat score disagreement as a definition problem",
      "Rescore quarterly and cut what keeps slipping",
    ],
  },
];
