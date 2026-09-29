import { routes } from "@/lib/routes";
import type { Footer, Navigation, SiteSettings } from "@/types/site";

/** Header navigation and mega menus (prototype: nav.jsx NAV_MENUS / NAV_LINKS). */
export const NAVIGATION: Navigation = {
  items: [
    { label: "About Us", href: routes.about },
    { label: "Services", hasMenu: true, hubHref: routes.services },
    { label: "Solutions", hasMenu: true, hubHref: routes.solutions },
    { label: "Products", hasMenu: true },
    { label: "Resources", hasMenu: true, hubHref: routes.resources },
    { label: "Partnerships", href: routes.partnerships },
  ],
  cta: { label: "Book A Demo", href: routes.contact },
  menus: {
    Services: {
      columns: 2,
      groups: [
        {
          label: "Services",
          links: [
            { icon: "chart-spline", title: "Data Science & AI", href: routes.service("data-science"), description: "Forecasting, decision models and generative AI in production" },
            { icon: "layout-grid", title: "Analytics & BI", href: routes.service("analytics-bi"), description: "Warehouses, pipelines and dashboards people actually use" },
            { icon: "code-xml", title: "Apps & Software Development", href: routes.service("apps-software-development"), description: "Custom web, mobile and internal platforms" },
            { icon: "graduation-cap", title: "Data Skills Training", href: routes.service("data-skills-training"), description: "Instructor-led programmes for analysts and leaders" },
            { icon: "users", title: "Staff Augmentation", href: routes.service("staff-augmentation"), description: "Vetted data and engineering talent, embedded in your team" },
            { icon: "compass", title: "Digital Transformation Advisory", href: routes.service("digital-transformation-advisory"), description: "Operating models, roadmaps and delivery governance" },
          ],
        },
      ],
      featured: [
        { kicker: "Case Study", title: "A Reporting Layer Built From The Navision Core", img: "/uploads/case-port-sacco-hero.jpg", href: routes.caseStudy("port-sacco") },
        {
          kicker: "Guide",
          title: "Choosing Your First Data Platform",
          img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=900&q=75&auto=format&fit=crop",
          href: routes.service("digital-transformation-advisory"),
        },
      ],
      footer: "See All Services",
      footerHref: routes.services,
    },
    Solutions: {
      columns: 2,
      wide: true,
      featuredCols: 1,
      groups: [
        {
          label: "By Industry",
          links: [
            { icon: "landmark", title: "Banking & Finance", href: routes.solution("banking-finance"), description: "Risk models, regulatory reporting and customer analytics" },
            { icon: "heart-pulse", title: "Healthcare & Pharmaceuticals", href: routes.solution("healthcare-pharmaceuticals"), description: "Clinical and commercial data under strict governance" },
            { icon: "building-2", title: "Government & Public Sector", href: routes.solution("government-public-sector"), description: "Service delivery data, transparency and open reporting" },
            { icon: "factory", title: "Manufacturing & Consumer Goods", href: routes.solution("manufacturing-consumer-goods"), description: "Demand planning, quality and supply-chain visibility" },
            { icon: "truck", title: "Transport & Logistics", href: routes.solution("transport-logistics"), description: "Fleet, route and network performance in near real time" },
          ],
        },
        {
          label: "By Role",
          col: 2,
          links: [
            { icon: "briefcase", title: "Business Leader", href: routes.solution("role-business-leader"), description: "One version of the numbers before the board meets" },
            { icon: "server", title: "Data & IT Leader", href: routes.solution("role-data-it-leader"), description: "A platform in your tenancy you can hand over" },
            { icon: "chart-spline", title: "Analyst", href: routes.solution("role-analyst"), description: "Certified measures instead of weekly reconciliation" },
            { icon: "code-xml", title: "Developer", href: routes.solution("role-developer"), description: "Documented APIs and embedded analytics" },
          ],
        },
        {
          label: "Case Studies",
          col: 2,
          links: [{ icon: "folder-check", title: "All Case Studies", href: routes.caseStudies, description: "Client work across every sector, linked to the full write-up" }],
        },
      ],
      featured: [
        {
          kicker: "Blog",
          title: "Pathways Technologies + GIZ AI-Powered Credit Scoring Solution Launch",
          img: "/uploads/blog-giz-credit-scoring-hero.jpg",
          href: routes.insight("giz-credit-scoring-launch"),
        },
        { kicker: "Case Study", title: "Kenya Red Cross Society: AI & Data Analytics", img: "/uploads/case-red-cross-hero.jpg", href: routes.caseStudy("red-cross-kenya") },
      ],
      footer: "Explore All Solutions",
      footerHref: routes.solutions,
    },
    Products: {
      columns: 1,
      groups: [
        {
          label: "Products",
          links: [
            { icon: "rows-3", title: "Insight Grid", description: "Governed analytics workspace for every team" },
            { icon: "badge-percent", title: "P-Score", description: "Performance scoring and benchmarking for portfolios" },
            { icon: "receipt-text", title: "eVoucher", description: "Issue, redeem and reconcile digital vouchers at scale" },
          ],
        },
      ],
      featured: [
        { kicker: "Product", title: "Insight Grid", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=75&auto=format&fit=crop" },
        { kicker: "Product", title: "P-Score", img: "/uploads/insight-grid-menu.jpg" },
      ],
      footer: "Compare Products",
    },
    Resources: {
      columns: 2,
      groups: [
        {
          label: "Resources",
          links: [
            { icon: "presentation", title: "Webinars", href: routes.resourceSection("webinars"), description: "Live sessions with our practice leads" },
            { icon: "file-text", title: "Whitepapers", href: routes.resourceSection("whitepapers"), description: "Research and reference architectures" },
            { icon: "newspaper", title: "Articles", href: routes.resourceSection("articles"), description: "Short, practical pieces on data and delivery" },
            { icon: "graduation-cap", title: "Learn", href: routes.resourceSection("learn"), description: "Courses, labs and certification paths" },
            { icon: "pen-line", title: "Blog", href: routes.insights, description: "Field notes from delivery teams" },
            { icon: "calendar-days", title: "Events", href: routes.resourceSection("events"), description: "Where to meet us next" },
          ],
        },
      ],
      featured: [
        { kicker: "Webinar", title: "Governing AI In Regulated Industries", img: "/uploads/webinars-thumb-640.webp", href: routes.resources },
        { kicker: "Whitepaper", title: "The 2026 Data Skills Gap", img: "/uploads/whitepapers-hero.webp", href: routes.resources },
      ],
      footer: "Browse The Resource Library",
      footerHref: routes.resources,
    },
  },
};

/** Footer columns and contact block (prototype: site.jsx FOOT_COLS / PtFooter). */
export const FOOTER: Footer = {
  address: "236 Owashika Road, Nairobi, Kenya",
  email: "info@pathwaystechnologies.com",
  phone: "+254 771 616 839",
  phoneHref: "tel:+254771616839",
  columns: [
    {
      title: "Services",
      links: [
        { label: "Data Science & AI", href: routes.service("data-science") },
        { label: "Analytics & BI", href: routes.service("analytics-bi") },
        { label: "Apps & Software Development", href: routes.service("apps-software-development") },
        { label: "Data Skills Training", href: routes.service("data-skills-training") },
        { label: "Staff Augmentation", href: routes.service("staff-augmentation") },
        { label: "Digital Transformation Advisory", href: routes.service("digital-transformation-advisory") },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Banking & Finance", href: routes.solution("banking-finance") },
        { label: "Healthcare & Pharmaceuticals", href: routes.solution("healthcare-pharmaceuticals") },
        { label: "Government & Public Sector", href: routes.solution("government-public-sector") },
        { label: "Manufacturing & Consumer Goods", href: routes.solution("manufacturing-consumer-goods") },
        { label: "Transport & Logistics", href: routes.solution("transport-logistics") },
      ],
    },
    {
      title: "Products",
      links: [
        { label: "Insight Grid", href: "#" },
        { label: "P-Score", href: "#" },
        { label: "eVoucher", href: "#" },
        { label: "Pricing", href: routes.pricing },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: routes.about },
        { label: "Partnerships", href: routes.partnerships },
        { label: "Contact Us", href: routes.contact },
        { label: "Webinars", href: routes.resourceSection("webinars") },
        { label: "Whitepapers", href: routes.resourceSection("whitepapers") },
        { label: "Articles", href: routes.resourceSection("articles") },
        { label: "Learn", href: routes.resourceSection("learn") },
        { label: "Blog", href: routes.resourceSection("blog") },
        { label: "Events", href: routes.resourceSection("events") },
      ],
    },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms Of Service", href: "#" },
    { label: "Data Protection Statement", href: "#" },
    { label: "Cookie Preferences", href: "#" },
  ],
  copyright: "© 2026 Pathways Technologies Ltd. All Rights Reserved.",
};

/** Site-wide settings: announcement bar, credibility marks, client wall (prototype: site.jsx). */
export const SITE_SETTINGS: SiteSettings = {
  name: "Pathways Technologies",
  description:
    "Pathways Technologies helps organisations in Africa turn data into decisions: analytics platforms, custom software, data skills training and embedded delivery teams.",
  announcement: { message: "New! P-Score Benchmarking Is Now Live For Banking & Finance", linkLabel: "Read The Announcement", href: "#" },
  /* Placeholder credibility marks. Confirm exact certifications and partner tiers before publishing. */
  trustMarks: ["ISO 27001 Aligned", "Kenya DPA 2019 Compliant", "GDPR Ready", "Cloud Partner Programme", "Registered Training Provider"],
  clients: [
    { name: "Meta", src: "/uploads/Meta-Logo.png", maxHeight: 34 },
    { name: "Ministry of Information, Communications and the Digital Economy", src: "/uploads/MICDE Logo_2@3x.png", maxHeight: 44 },
    { name: "UNDP", src: "/uploads/undp-main-logo-vertical-united-nations-development-programme.png", maxHeight: 70 },
    { name: "Jubilee Insurance", src: "/uploads/Jubilee_Insurance_Company_Limited_logo.png", maxHeight: 30 },
    { name: "Ministry of Environment, Climate Change & Forestry", src: "/uploads/ministry-environment-dark.png", maxHeight: 44 },
    { name: "World Vision", src: "/uploads/World_Vision_logo_logotype.png", maxHeight: 34 },
  ],
};
