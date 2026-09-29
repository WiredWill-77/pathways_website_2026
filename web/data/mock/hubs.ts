/* Mock data for the Services, Solutions and Resources hub pages (prototype: hubs.jsx).
   Copy and figures are illustrative, confirm before publishing. */
import { routes } from "@/lib/routes";
import type { ResourcesHub, ServicesHub, SolutionsHub } from "@/types/hubs";

const IMG = (id: string, w = 1200) => `https://images.unsplash.com/photo-${id}?w=${w}&q=75&auto=format&fit=crop`;
const CLIENT_WALL = "Trusted By Governments, Insurers And Global NGOs";

export const SERVICES_HUB: ServicesHub = {
  kind: "services",
  seo: {
    title: "Services",
    description: "Data science, analytics, software, training, staffing and advisory, scoped in discovery and handed over with the code.",
  },
  hero: {
    eyebrow: "Services",
    lead: "Six Services.",
    rest: "One Delivery Team.",
    intro: "Strategy, platforms, models, software, people and training, scoped in discovery, built in your tenancy and handed over with the code.",
    meta: [
      { label: "Median Time To Value", value: "8 Weeks" },
      { label: "Delivery Squads", value: "11" },
      { label: "Handover", value: "Code + Runbooks" },
    ],
    img: "/uploads/IT Background.jpg",
    secondary: { label: "See Pricing", href: routes.pricing },
  },
  clientWallLabel: CLIENT_WALL,
  services: [
    {
      slug: "data-science",
      icon: "chart-spline",
      name: "Data Science & AI",
      href: routes.service("data-science"),
      blurb: "Forecasting, decision models and generative AI, built with your teams and monitored in production.",
      points: ["Model lifecycle from framing to drift alerts", "LLM and RAG applications", "48 models live"],
    },
    {
      slug: "analytics-bi",
      icon: "layout-grid",
      name: "Analytics & BI",
      href: routes.service("analytics-bi"),
      blurb: "Warehouses, pipelines, semantic layers and dashboards with lineage from figure back to source.",
      points: ["Azure, Fabric or BigQuery", "Certified measures once, used everywhere", "41 manual reports retired"],
    },
    {
      slug: "apps-software-development",
      icon: "code-xml",
      name: "Apps & Software Development",
      href: routes.service("apps-software-development"),
      blurb: "Custom web, mobile and internal platforms delivered in fortnightly increments with your users in the room.",
      points: ["Shaped backlog in two weeks", "WCAG AA and infra as code", "Handover with runbooks"],
    },
    {
      slug: "data-skills-training",
      icon: "graduation-cap",
      name: "Data Skills Training",
      href: routes.service("data-skills-training"),
      blurb: "Instructor-led programmes for analysts, leaders and graduates, taught on your own data.",
      points: ["Five stackable modules", "Cohorts of 6 to 24", "Assessed on output"],
    },
    {
      slug: "staff-augmentation",
      icon: "users",
      name: "Staff Augmentation",
      href: routes.service("staff-augmentation"),
      blurb: "Vetted engineers, analysts and scientists embedded in your existing squads within weeks.",
      points: ["Start in 2 to 4 weeks", "Your repo, your standards", "Two-week replacement guarantee"],
    },
    {
      slug: "digital-transformation-advisory",
      icon: "compass",
      name: "Digital Transformation Advisory",
      href: routes.service("digital-transformation-advisory"),
      blurb: "Operating models, target architecture and delivery governance, sequenced so value lands early.",
      points: ["Two-week assessment", "Four-quarter costed roadmap", "Use cases scored by value"],
    },
  ],
  howHeading: { lead: "Discover, Prove, Scale, Hand Over.", rest: "The same sequence on every engagement, whichever service you start with." },
  how: [
    { kicker: "Step 01", title: "Discover", text: "Two weeks with your teams: data estate, definitions and the use cases worth funding." },
    { kicker: "Step 02", title: "Prove", text: "One use case into production, in your tenancy, measured against the metric you chose." },
    { kicker: "Step 03", title: "Scale", text: "The pattern extended across functions, with governance and cost review in place." },
    { kicker: "Step 04", title: "Hand Over", text: "Runbooks, infrastructure as code and your engineers running it on a fixed date." },
  ],
  stats: [
    { label: "Engagements Delivered", value: "140+" },
    { label: "Repeat Clients", value: "78%" },
    { label: "Countries", value: "6" },
    { label: "Certified Engineers", value: "64" },
  ],
  figure: { id: "hub-services-team", caption: "Photography: a delivery squad mid-sprint" },
  closing: {
    title: "Not Sure Which Service You Need?",
    text: "Start with a two-week discovery. We map your data estate, name the three highest-value use cases, and return a costed plan, yours to keep whichever way you go.",
    secondary: { label: "See Pricing", href: routes.pricing },
  },
};

export const SOLUTIONS_HUB: SolutionsHub = {
  kind: "solutions",
  seo: {
    title: "Solutions",
    description: "Five industries and eight roles: pick the sector you operate in or the team whose work you are changing.",
  },
  hero: {
    eyebrow: "Solutions",
    lead: "Five Industries.",
    rest: "Four Roles. One Governed Layer.",
    intro: "Pick the sector you operate in, or the team whose work you are trying to change. Every engagement starts with the people who use the output.",
    meta: [
      { label: "Industries Served", value: "5" },
      { label: "Roles Supported", value: "4" },
      { label: "Median Time To Value", value: "9 Weeks" },
    ],
    img: IMG("1504384308090-c894fdcc538d", 1600),
    secondary: { label: "See All Services", href: routes.services },
  },
  industriesHeading: { lead: "Where We Have Done This Before.", rest: "Sector-specific definitions, reporting and models, built for how each industry actually runs." },
  industries: [
    {
      slug: "banking-finance",
      name: "Banking & Finance",
      href: routes.solution("banking-finance"),
      img: IMG("1560179707-f14e90ef3623"),
      line: "Risk models, regulatory reporting and customer analytics on one governed layer.",
      stat: { label: "Close Cycle", value: "−62%" },
    },
    {
      slug: "healthcare-pharmaceuticals",
      name: "Healthcare & Pharmaceuticals",
      href: routes.solution("healthcare-pharmaceuticals"),
      img: "/uploads/lobby-sign-english-2800px.png",
      line: "Clinical and commercial data made usable without loosening a single control.",
      stat: { label: "Records Governed", value: "77%" },
    },
    {
      slug: "government-public-sector",
      name: "Government & Public Sector",
      href: routes.solution("government-public-sector"),
      img: "/uploads/Kenya Government.avif",
      line: "Service delivery data published with provenance, hosted in Kenya.",
      stat: { label: "Agencies Aligned", value: "23" },
    },
    {
      slug: "manufacturing-consumer-goods",
      name: "Manufacturing & Consumer Goods",
      href: routes.solution("manufacturing-consumer-goods"),
      img: "/uploads/manufacturing.jpg",
      line: "Demand, quality and supply visible while there is still time to act.",
      stat: { label: "Forecast Accuracy", value: "81%" },
    },
    {
      slug: "transport-logistics",
      name: "Transport & Logistics",
      href: routes.solution("transport-logistics"),
      img: "/uploads/fleet-management.webp",
      line: "Fleet, corridor and cost performance consolidated into one live picture.",
      stat: { label: "On-Time Arrival", value: "88%" },
    },
  ],
  rolesHeading: { lead: "Four Teams, Four Starting Points.", rest: "Each one has a page describing what we build and how the first ninety days run." },
  roles: [
    { slug: "role-business-leader", title: "Business Leader", href: routes.solution("role-business-leader"), icon: "briefcase", line: "One version of the numbers before the board meeting" },
    { slug: "role-data-it-leader", title: "Data & IT Leader", href: routes.solution("role-data-it-leader"), icon: "server", line: "A platform you can hand over and still sleep at night" },
    { slug: "role-analyst", title: "Analyst", href: routes.solution("role-analyst"), icon: "chart-spline", line: "Stop rebuilding the same extract every month" },
    { slug: "role-developer", title: "Developer", href: routes.solution("role-developer"), icon: "code-xml", line: "APIs and contracts your product can consume" },
  ],
  stats: [
    { label: "Sector Playbooks", value: "5" },
    { label: "Role Playbooks", value: "4" },
    { label: "Definitions Certified", value: "260+" },
    { label: "Data Coverage", value: "81%" },
  ],
  clientWallLabel: CLIENT_WALL,
  closing: {
    title: "Start Where The Pain Is.",
    text: "Tell us the report nobody trusts or the decision that keeps arriving late. We will show you what it looks like when the data holds.",
    secondary: { label: "See All Services", href: routes.services },
  },
};

export const RESOURCES_HUB: ResourcesHub = {
  kind: "resources",
  seo: { title: "Resources", description: "Webinars, whitepapers, courses, events and field notes from Pathways delivery teams." },
  hero: {
    eyebrow: "Resources",
    lead: "What We Have Learned,",
    rest: "Written Down.",
    intro: "Webinars, whitepapers, courses and field notes from the teams doing the delivery. No gated fluff.",
    meta: [
      { label: "Published Items", value: "94" },
      { label: "Live Sessions", value: "18" },
      { label: "Courses", value: "5 Tracks" },
    ],
    img: IMG("1553877522-43269d4ea984", 1600),
    secondary: { label: "See All Services", href: routes.services },
  },
  featured: [
    {
      kicker: "Webinar · 48 min",
      title: "Governing AI In Regulated Industries",
      img: IMG("1573164574511-73c773193279"),
      note: "What a model approval pack needs to contain before risk will sign it.",
      href: routes.webinar("governing-ai-in-regulated-industries"),
    },
    {
      kicker: "Whitepaper · 4 pages",
      title: "The 2026 Data Skills Gap",
      img: IMG("1573164574397-dd250bc8a598"),
      note: "Where the shortage actually bites, and what a realistic training ladder costs.",
      href: routes.whitepaper("data-skills-gap"),
    },
  ],
  library: [
    { icon: "presentation", title: "Webinars", text: "Live sessions with our practice leads, recorded and indexed.", meta: "18 sessions", href: routes.resourceSection("webinars") },
    { icon: "file-text", title: "Whitepapers", text: "Research and reference architectures you can hand to your architects.", meta: "12 papers", href: routes.resourceSection("whitepapers") },
    { icon: "newspaper", title: "Articles", text: "Short, practical pieces on data, delivery and governance.", meta: "64 articles", href: routes.resourceSection("articles") },
    { icon: "graduation-cap", title: "Learn", text: "Courses, labs and certification paths for analysts and engineers.", meta: "5 tracks", href: routes.resourceSection("learn") },
    { icon: "pen-line", title: "Blog", text: "Field notes from delivery teams, written between sprints.", meta: "Weekly", href: routes.resourceSection("blog") },
    { icon: "calendar-days", title: "Events", text: "Where to meet us next, in Nairobi and online.", meta: "Next: 12 Aug", href: routes.resourceSection("events") },
  ],
  eventsHeading: { lead: "Coming Up.", rest: "Small rooms, working sessions, no product pitch." },
  events: [
    { date: "12 Aug 2026", where: "Nairobi", session: "Data Governance Clinic", audience: "Half-day workshop for banking and insurance teams" },
    { date: "03 Sep 2026", where: "Online", session: "Forecasting In Volatile Supply Chains", audience: "Live session with our manufacturing practice" },
    { date: "24 Sep 2026", where: "Nairobi", session: "Public Sector Reporting Roundtable", audience: "Invitation only, with agency data leads" },
  ],
  invitations: {
    badge: "Invitations",
    text: "Seats are limited, ask us to hold one for your team.",
    cta: { label: "Request A Seat", href: routes.contact },
  },
  closing: {
    title: "Want This In Your Inbox?",
    text: "We send one note a month: what shipped, what broke, and what we would do differently. No newsletter theatre.",
    secondary: { label: "Talk To A Practice Lead", href: routes.contact },
  },
};
