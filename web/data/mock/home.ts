import { routes } from "@/lib/routes";
import type { Product } from "@/types/blocks";
import type { HomeContent } from "@/types/home";

/** The three products (prototype: landing page PRODUCTS and blocks.jsx PRODUCT_BLURB). */
export const PRODUCTS: Product[] = [
  {
    name: "Insight Grid",
    blurb: "A governed analytics workspace where every team works from the same definitions, sources and refresh schedule.",
    features: ["Semantic Layer", "Row-Level Governance", "Embedded Dashboards"],
  },
  {
    name: "P-Score",
    blurb: "Performance scoring and benchmarking that turns portfolio, branch or supplier data into one comparable number.",
    features: ["Weighted Scorecards", "Peer Benchmarking", "Trend Alerts"],
  },
  {
    name: "eVoucher",
    blurb: "Issue, redeem and reconcile digital vouchers at national scale, with a full audit trail on every transaction.",
    features: ["Bulk Issuance", "Offline Redemption", "Reconciliation Exports"],
  },
];

/** Landing page content (prototype: "Pathways Landing Page.html" + home-hero.jsx, product-led treatment). */
export const HOME_CONTENT: HomeContent = {
  hero: {
    eyebrow: "Data & AI, Delivered In Africa",
    lead: "Analytics & Applications,",
    rest: "Proven In Your Numbers",
    intro:
      "For leaders and data teams across Africa. Pathways closes the loop from raw source to decision, analytics platforms, custom software, and the people trained to run them.",
    trial: { text: "Two-week discovery · Fixed price · Costed plan from", price: "$4,800" },
    marksNote: "Your platforms, your data and your teams, connected by one partner.",
    marks: [
      { name: "Microsoft", src: "/uploads/Microsoft-Solutions-Partner-Logo-61a216d8.webp" },
      { name: "Google Cloud", src: "/uploads/Google-Cloud-Partner-wht.webp" },
      { name: "Automation Anywhere", src: "/uploads/automation-anywhere-logo-white-546dbc32.webp" },
      { name: "Infobip", src: "/uploads/Infobip Logo - White_1-4d993cd5.png" },
      { name: "Konza Technopolis", src: "/uploads/Konza-Logo-White.png" },
    ],
    background: "/uploads/Data-Analytics-Background-Slider-1.webp",
    dashboardTabs: ["Banking & Finance", "Healthcare & Pharmaceuticals", "Government & Public Sector", "Transport & Logistics"],
    browserUrl: "app.pathways.co.ke/insight-grid",
    primaryCta: { label: "Book A Demo", href: routes.contact },
    secondaryCta: { label: "Explore Solutions", href: routes.solutions },
    stats: [
      { value: "48", label: "Data Products Live" },
      { value: "7", label: "Countries Served" },
      { value: "4.2B", label: "Records Processed Monthly" },
      { value: "1,900+", label: "People Trained" },
    ],
  },
  services: [
    { icon: "chart-spline", title: "Data Science & AI", text: "Forecasting, decision models and generative AI built on your data, and put into production.", href: routes.service("data-science") },
    { icon: "layout-grid", title: "Analytics & BI", text: "Warehouses, pipelines and dashboards that answer the questions leadership actually asks.", href: routes.service("analytics-bi") },
    { icon: "code-xml", title: "Apps & Software Development", text: "Custom web, mobile and internal platforms, delivered by product teams who ship.", href: routes.service("apps-software-development") },
    { icon: "graduation-cap", title: "Data Skills Training", text: "Instructor-led programmes that take analysts, leaders and graduates from spreadsheet to SQL to model.", href: routes.service("data-skills-training") },
    { icon: "users", title: "Staff Augmentation", text: "Vetted engineers, analysts and scientists embedded in your team within weeks.", href: routes.service("staff-augmentation") },
    { icon: "compass", title: "Digital Transformation Advisory", text: "Operating models, roadmaps and delivery governance for change that survives the first quarter.", href: routes.service("digital-transformation-advisory") },
  ],
  /* Illustrative outcomes. Replace with signed-off client results before publishing. */
  cases: [
    {
      sector: "Banking & Finance",
      title: "Retail Bank Cuts Month-End Close From 8 Days To 3",
      problem: "Fourteen reporting spreadsheets, three definitions of “active customer”, no audit trail.",
      photo: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=1200&q=75&auto=format&fit=crop",
      stats: [
        { label: "Close Cycle", value: "−62%" },
        { label: "Reports Retired", value: "41" },
        { label: "Time To Value", value: "9 Weeks" },
      ],
      href: routes.caseStudies,
    },
    {
      sector: "Government & Public Sector",
      title: "National Voucher Programme, Reconciled Every Day",
      problem: "Paper redemption records across 23 agencies, reconciled by hand each quarter.",
      photo: "/uploads/lobby-sign-english-2800px.png",
      stats: [
        { label: "Redemptions", value: "4.2M" },
        { label: "Reconciliation", value: "Daily" },
        { label: "Leakage", value: "−31%" },
      ],
      href: routes.caseStudies,
    },
    {
      sector: "Transport & Logistics",
      title: "Fleet Operator Lifts On-Time Arrival To 88%",
      problem: "Telemetry sat in three vendor portals with no shared route performance view.",
      photo: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1200&q=75&auto=format&fit=crop",
      stats: [
        { label: "On-Time", value: "88%" },
        { label: "Cost Per Km", value: "−17%" },
        { label: "Events / Month", value: "12B" },
      ],
      href: routes.caseStudies,
    },
  ],
  tiers: [
    { name: "Essentials", price: "From $2,400 / mo", description: "One product, one team, guided onboarding.", features: ["1 Product Workspace", "Up To 25 Seats", "Standard Support"] },
    { name: "Growth", price: "From $6,900 / mo", description: "A delivery squad plus platform, quarterly roadmap.", features: ["2 Products", "Up To 120 Seats", "Named Delivery Lead"], featured: true },
    { name: "Enterprise", price: "Custom", description: "Multi-entity governance, private deployment, training at scale.", features: ["Unlimited Seats", "Private Cloud / On-Prem", "24×7 Support & SLA"] },
  ],
  /* Leadership. Swap portraits and biographies as the team grows. */
  leaders: [
    {
      portrait: "/assets/p-becky-2.png",
      name: "Becky Abraham",
      role: "Head of Strategy & Growth",
      bio: "Shapes how engagements are scoped and won, from first discovery workshop to signed delivery plan. Twelve years across data platform programmes and public-sector transformation.",
    },
    {
      portrait: "/assets/p-francisca-2.png",
      name: "Francisca Omasaja",
      role: "VP of Solutions Delivery",
      bio: "Owns delivery quality across every client account. Came from financial services, and holds the line on model governance, data definitions and audit readiness.",
    },
    {
      portrait: "/assets/p-loren.png",
      name: "Loren Anduvare",
      role: "VP of Technology & Project Manager",
      bio: "Runs the product and platform engineering teams. Sets the architecture standards, release cadence and handover practice that keep systems maintainable after we leave.",
    },
  ],
  /* Placeholder quotes awaiting client sign-off. */
  testimonials: [
    { logo: "CLIENT ONE", quote: "Add a two to three line client quote here. Keep it specific about the problem solved and the change it made.", name: "Client Name", role: "Job Title, Organisation" },
    { logo: "CLIENT TWO", quote: "Add a two to three line client quote here. Keep it specific about the problem solved and the change it made.", name: "Client Name", role: "Job Title, Organisation" },
    { logo: "CLIENT THREE", quote: "Add a two to three line client quote here. Keep it specific about the problem solved and the change it made.", name: "Client Name", role: "Job Title, Organisation" },
  ],
  governance: [
    { icon: "shield-check", title: "Data Residency", text: "Deployed into your tenancy and region. We hand over the infrastructure code at the end of every engagement." },
    { icon: "file-check", title: "Audit Trail", text: "Every definition, transformation and voucher transaction is versioned and exportable for regulators." },
  ],
  faqs: [
    {
      question: "How Do Engagements Usually Start?",
      answer:
        "With a two-week discovery: we map your data estate, interview the teams who will use the output, and return a costed delivery plan. Most clients then start with a single use case.",
    },
    {
      question: "Can You Work Alongside Our In-House Team?",
      answer: "Yes. Staff augmentation places our engineers, analysts and scientists inside your existing squads, working to your standards and ceremonies.",
    },
    {
      question: "Do You Train Our People As Part Of Delivery?",
      answer: "Every platform engagement includes enablement. Data Skills Training also runs standalone, from analyst foundations to leadership literacy.",
    },
    { question: "Where Does Our Data Live?", answer: "Your cloud, your region, your tenancy by default. We deploy into your environment and hand over the infrastructure code." },
    { question: "How Is Pricing Structured?", answer: "Fixed price for discovery, monthly for delivery squads, per-seat for products. See the pricing page for current rates." },
  ],
  discoveryCta: {
    title: "Start With A Two-Week Discovery.",
    text: "A fixed-scope sprint that maps your data estate, names the three highest-value use cases, and gives you a costed delivery plan you can take to your board.",
  },
  assessment: {
    title: "Get Your Free Data Maturity Assessment",
    text: "Twelve questions, one scored report, and the three things to fix first.",
    background: "/uploads/Public Data.jpg",
  },
};
