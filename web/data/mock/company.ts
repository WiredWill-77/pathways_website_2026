/* Mock data for the company domain: About, Contact, Partnerships and Pricing. */
import { routes } from "@/lib/routes";
import type { AboutContent, ContactContent, PartnershipsContent, PricingContent } from "@/types/company";

/* Leadership names and titles are client-supplied; biography copy is illustrative,
   confirm with each person before publishing. */
export const ABOUT_CONTENT: AboutContent = {
  hero: {
    eyebrow: "About Us",
    lead: "We Turn Data",
    rest: "Into Decisions\nYou Can Defend.",
    intro:
      "Pathways Technologies helps organisations in banking, health, government, manufacturing and logistics turn the data they already hold into decisions they can defend.",
    meta: [
      { label: "Founded", value: "Nairobi" },
      { label: "Certified Engineers", value: "64" },
      { label: "Countries", value: "6" },
    ],
    img: "/uploads/Pathways Team 2.jpg",
    secondary: { label: "See All Services", href: routes.services },
  },
  whoWeAre: {
    lead: "We Were Built Around One Complaint.",
    rest: "Leaders could not get a number they trusted, quickly enough to act on it.",
    paragraphs: [
      "Most of our clients already had reporting. What they did not have was agreement: three definitions of the same customer, four spreadsheets behind one board figure, and no way to trace either back to a source record. We start there, with the definitions and the plumbing, then build the analytics, models and software on top.",
      "Everything we build runs in your own cloud tenancy, documented well enough that your team can take it over. That is the point of the work; we would rather be rehired than relied on.",
    ],
    figure: { id: "about-office", src: "/assets/data-analytics-laptop.jpg", credit: "", caption: "Analytics and applications, built and shipped in-house", ratio: "4 / 3" },
    stats: [
      { label: "Engagements Delivered", value: "140+" },
      { label: "Repeat Clients", value: "78%" },
      { label: "Delivery Squads", value: "11" },
      { label: "People Trained", value: "1,900+" },
    ],
  },
  leadership: {
    lead: "The People Who Set The Standard.",
    rest: "Fifty colleagues do the work; these four are accountable for how it is done.",
    intro:
      "Our management team sits across delivery, strategy, operations and governance. Each of them stays close to live engagements, so the person who scoped your work is still reachable when it ships.",
    leaders: [
      {
        name: "Joel Onditi",
        role: "President & CEO",
        portrait: "/assets/p-joel.png",
        bio: "Founded Pathways to close the gap between the data organisations collect and the decisions they actually make. Leads the firm's delivery standard and its work with regulated clients.",
        focus: ["Client outcomes", "Delivery standard", "Partnerships"],
      },
      {
        name: "Becky Abraham",
        role: "Chief of Strategy & Growth",
        portrait: "/assets/p-becky-2.png",
        bio: "Shapes where the firm invests next, from sector focus to product roadmap, and runs the commercial side of every major engagement.",
        focus: ["Sector strategy", "Commercial", "Product direction"],
      },
      {
        name: "Loren Anduvare",
        role: "VP of Technology & Project Manager",
        portrait: "/assets/p-loren.png",
        bio: "Runs the product and platform engineering teams. Sets the architecture standards, release cadence and handover practice that keep systems maintainable after we leave.",
        focus: ["Engineering", "Delivery", "Capability transfer"],
      },
      {
        name: "Jed Summerton",
        role: "Global Advisor",
        portrait: "/assets/p-jed.png",
        bio: "Advises on international expansion and enterprise governance, bringing decades of experience with large regulated programmes.",
        focus: ["Global expansion", "Governance", "Executive advisory"],
      },
    ],
    note: "Behind them sit roughly thirty engineers, analysts, scientists and delivery leads working in eleven squads. You are introduced to the people on your engagement by name before it starts.",
  },
  beliefs: [
    { title: "Build In Your Tenancy", text: "Nothing important should live in a vendor's account. We build where you can see it, audit it, and keep it." },
    { title: "Definitions Before Dashboards", text: "A chart is only as good as the agreement behind the number. We settle definitions first, in writing." },
    { title: "Handover Is A Deliverable", text: "Runbooks, infrastructure code and paired engineers, on a date we agree with you at the start." },
    { title: "Say What It Costs", text: "Fixed price for discovery, published rates for delivery, and no surprises in the second invoice." },
  ],
  story: {
    lead: "From Two People To Eleven Squads.",
    rest: "Growth followed the work itself.",
    chapters: [
      { title: "Founded In Nairobi", text: "Started as a two-person analytics practice serving Kenyan banks and insurers." },
      { title: "Regional Delivery", text: "Grew into full platform delivery across East Africa, adding software and automation squads." },
      { title: "Products And Training", text: "Launched Insight Grid, P-Score and eVoucher, and formalised the training practice." },
      { title: "Where We Are Now", text: "Sixty-four certified engineers, eleven delivery squads, and clients in six countries." },
    ],
    figure: { id: "about-team", caption: "Photography: a delivery squad at work", ratio: "4 / 3" },
    officesLabel: "Where We Work",
    officeHead: ["Location", "What Happens There", "Where"],
    offices: [{ city: "Nairobi", lines: ["Head Office,", "236 Owashika Road"], area: "Lavington" }],
  },
  clientWallLabel: "Trusted By Governments, Insurers And Global NGOs",
  careers: {
    lead: "Come Build Data Work",
    rest: "That Clients Keep Using.",
    text: "Engineers, analysts and delivery leads who can sit with a client, understand the decision behind the request, and say no when the data will not support it. If that sounds like your kind of work, send us something you have built.",
    primary: { label: "See Open Roles", href: routes.contact },
    secondary: { label: "Our Partners", href: routes.partnerships },
    figure: { id: "about-careers", caption: "Photography: engineers pairing during onboarding" },
  },
  closing: {
    title: "Come And Tell Us What Is Not Working.",
    text: "A two-week discovery gives you a map of your data estate, the three use cases worth funding first, and a costed plan. You keep it either way.",
    secondary: { label: "See Pricing", href: routes.pricing },
  },
};

export const CONTACT_CONTENT: ContactContent = {
  hero: {
    eyebrow: "Contact Us",
    lead: "Tell Us What Is Not Working.",
    rest: "We Will Tell You What It Takes To Fix It.",
    intro: "Demos, quotes, training cohorts and partner applications all start here. One form, routed to the right practice lead.",
    photo: "https://images.unsplash.com/photo-1573164574511-73c773193279?w=1600&q=75&auto=format&fit=crop",
  },
  interests: [
    "Analytics & BI Platform",
    "Data Science Engagement",
    "Apps & Software Development",
    "Data Skills Training",
    "Staff Augmentation",
    "Insight Grid",
    "P-Score",
    "eVoucher",
    "Partner Programme",
    "Something Else",
  ],
  roles: ["Business Leader", "Data & IT Leader", "Analyst", "Developer", "Marketing", "Finance", "Sales", "Support & Service"],
  office: { title: "Nairobi Office", hours: "Mon to Fri, 08:30 to 17:30 EAT" },
  routes: [
    { title: "Sales & Demos", text: "Book a 30-minute walkthrough of Insight Grid or P-Score.", cta: { label: "Book A Demo", href: "#" } },
    { title: "Partner Programme", text: "Apply to the technology, reseller, delivery or training track.", cta: { label: "Partner Details", href: routes.partnerships } },
    { title: "Pricing", text: "Rate card for plans, products and engagement models.", cta: { label: "See Pricing", href: routes.pricing } },
  ],
  existingClient: {
    title: "Existing Client?",
    text: "Raise a support ticket from inside your workspace for an SLA-tracked response, or email your delivery lead directly.",
    cta: "Open Support",
  },
};

export const PARTNERSHIPS_CONTENT: PartnershipsContent = {
  hero: {
    eyebrow: "Technology Partnerships",
    lead: "Built On The Platforms",
    rest: "You Already Run.",
    intro: "Five partnerships cover the whole path from raw data to a message in a customer's hand, platform, automation, engagement and local anchoring.",
    photo: "/uploads/Partnerships 2-68378d35.jpg",
    primary: { label: "Book A Demo", href: routes.contact },
    secondary: { label: "Meet The Partners", href: "#partners" },
  },
  partnersHeading: { lead: "Five Partnerships, One Delivery Team.", rest: "What each partnership gives you, and what we are certified to do with it." },
  partners: [
    {
      slug: "microsoft",
      name: "Microsoft",
      logo: "/uploads/Microsoft Solution Partner.png",
      status: "Solutions Partner",
      summary: "We build and run data estates on Azure, from ingestion to the semantic layer, and ship the Power BI and Microsoft 365 experiences your teams already live in.",
      capabilities: ["Azure Data Platform", "Microsoft Fabric & Synapse", "Power BI Enterprise", "Azure OpenAI Service", "Licensing Through Pathways"],
      proof: ["Certified Azure Engineers", "Solutions Partner Designation", "Tenant-Level Deployments"],
    },
    {
      slug: "google-cloud",
      name: "Google Cloud",
      logo: "/uploads/google_cloud_logo_icon_170066.webp",
      status: "Delivery Partner",
      summary: "BigQuery-first warehouses with Looker for governed reporting and Vertex AI for models that move into production, not proofs of concept.",
      capabilities: ["BigQuery Warehousing", "Looker & Looker Studio", "Vertex AI", "Dataflow Pipelines", "Regional Data Residency"],
      proof: ["Certified Cloud Architects", "Migration Playbooks", "Cost Optimisation Reviews"],
    },
    {
      slug: "automation-anywhere",
      name: "Automation Anywhere",
      logo: "/uploads/Automation_Anywhere_Logo.svg.png",
      status: "Implementation Partner",
      summary: "Intelligent automation across the back office: reconciliation, claims, onboarding and document-heavy processes wired straight into your data platform.",
      capabilities: ["RPA Bot Development", "Document Automation", "Process Discovery", "Bot Governance & Audit", "Citizen Developer Enablement"],
      proof: ["Accredited Bot Developers", "Process Assessment Toolkit", "Automation Centre Of Excellence"],
    },
    {
      slug: "infobip",
      name: "Infobip",
      logo: "/uploads/infobip-logo.png",
      status: "Technology Partner",
      summary: "Customer engagement that closes the loop: WhatsApp, SMS and omnichannel journeys triggered by the same models and scores your analytics produce.",
      capabilities: ["Omnichannel Messaging", "WhatsApp Business API", "Journey Orchestration", "eVoucher Delivery", "Engagement Analytics"],
      proof: ["Integrated With eVoucher", "Campaign Attribution", "Regional Carrier Reach"],
    },
    {
      slug: "konza-technopolis",
      name: "Konza Technopolis",
      logo: "/uploads/Konza-Technopolis-logo.png",
      status: "Innovation Partner",
      summary: "Our anchor for public-sector innovation and the national skills pipeline, local hosting, joint programmes and graduate talent entering our delivery squads.",
      capabilities: ["National Data Centre Hosting", "Public-Sector Programmes", "Smart City Data Projects", "Graduate Talent Pipeline", "Joint Research & Labs"],
      proof: ["Kenya-Based Hosting", "Government Programme Delivery", "Training Cohorts On Site"],
    },
  ],
  stackHeading: { lead: "Four Layers, One Data Spine.", rest: "Most clients start in one layer. The partnerships are what let them add the next without re-platforming." },
  stack: [
    { icon: "database", title: "Platform", text: "Azure, Microsoft Fabric and BigQuery, the warehouse and lakehouse layer your data lands in." },
    { icon: "bot", title: "Automation", text: "Automation Anywhere bots take the manual steps out of reconciliation, claims and onboarding." },
    { icon: "message-square", title: "Engagement", text: "Infobip carries the decision to the customer, on WhatsApp, SMS or in-app." },
    { icon: "landmark", title: "Local Anchor", text: "Konza Technopolis provides Kenyan hosting, public-sector reach and the talent pipeline." },
  ],
  benefits: [
    { icon: "file-signature", title: "One Contract", text: "Licences, implementation and support on a single Pathways agreement, no vendor triangle when something breaks." },
    { icon: "badge-check", title: "Certified People", text: "Every platform above is delivered by engineers we certify and re-certify, not by generalists reading documentation." },
    { icon: "route", title: "No Lock-In Theatre", text: "We deploy into your tenancy on your chosen cloud and hand over the infrastructure code at the end of each engagement." },
  ],
  ctaBand: {
    title: "Already Licensed On One Of These?",
    text: "Bring your existing Microsoft, Google Cloud, Automation Anywhere or Infobip estate. We start from what you own and fill the gaps, no rip and replace.",
    email: "info@pathwaystechnologies.com",
  },
  clientsHeading: {
    lead: "Delivered With Governments, Insurers And Global NGOs.",
    rest: "Programme partners and clients we build alongside, in the public sector, insurance and development.",
  },
  become: {
    lead: "Partner With Pathways.",
    rest: "Resell our products, deliver on our platform, or run our training curriculum in your market.",
    text: "We reply to every application within five working days. Registered opportunities are protected for 180 days and we do not bid against a partner on a deal they registered first.",
    cta: { label: "Apply To Become A Partner", href: routes.contact },
    tracks: [
      { icon: "handshake", title: "Reseller", text: "Sell Insight Grid, P-Score and eVoucher under your own agreement, 20% lifetime revenue share with deal registration." },
      { icon: "hard-hat", title: "Delivery", text: "Implement on our platform with certified consultants, shared governance and an escalation path to our engineers." },
      { icon: "graduation-cap", title: "Training", text: "Run our Data Skills curriculum with licensed materials, instructor accreditation and 25% revenue share." },
    ],
  },
  faqs: [
    {
      question: "Can We Buy Microsoft Or Google Cloud Licences Through You?",
      answer: "Yes. We resell and manage licensing for the platforms we are certified on, so implementation, support and licences sit on one agreement.",
    },
    {
      question: "Do You Only Deploy On Azure And Google Cloud?",
      answer: "Those are the two we are certified to deliver at depth. We will work in another cloud where you are already committed, and say so plainly if it limits us.",
    },
    {
      question: "What Does The Automation Anywhere Partnership Cover?",
      answer: "Process discovery, bot development, document automation and bot governance, usually alongside a data platform so bots and reporting share one source of truth.",
    },
    { question: "How Is Infobip Used In Your Products?", answer: "eVoucher issues and redeems through Infobip channels, and P-Score alerts can be delivered as WhatsApp or SMS journeys." },
    {
      question: "What Do You Do With Konza Technopolis?",
      answer: "Kenyan hosting for data-residency-bound workloads, joint public-sector programmes, and a graduate pipeline feeding our delivery squads and training cohorts.",
    },
  ],
};

/* Illustrative rate card, confirm commercial terms before publishing. */
export const PRICING_CONTENT: PricingContent = {
  hero: {
    eyebrow: "Pricing",
    lead: "Priced By How You Buy.",
    rest: "Fixed for discovery, monthly for delivery, per-seat for products.",
    intro:
      "Every figure below is a starting rate in USD, excluding taxes. Multi-year and multi-entity agreements are quoted after discovery, nothing is priced before we have seen your data estate.",
    photo: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1600&q=75&auto=format&fit=crop",
    primary: { label: "Book A Demo", href: routes.contact },
    secondary: { label: "Book A Discovery Sprint", href: routes.contact },
  },
  plans: [
    {
      name: "Essentials",
      price: "$2,400",
      per: "per month",
      blurb: "One product workspace and guided onboarding for a single team.",
      items: ["1 Product Workspace", "Up To 25 Seats", "Standard Support (Next Business Day)", "Quarterly Health Check", "Shared Onboarding Programme"],
      cta: "Start With This Plan",
    },
    {
      name: "Growth",
      price: "$6,900",
      per: "per month",
      blurb: "A delivery squad alongside the platform, with a quarterly roadmap.",
      featured: true,
      items: ["Up To 2 Products", "Up To 120 Seats", "Named Delivery Lead", "Embedded Squad (3 to 5 People)", "Custom Training Tracks", "8×5 Support, 4h Response"],
      cta: "Start With This Plan",
    },
    {
      name: "Enterprise",
      price: "Custom",
      per: "annual agreement",
      blurb: "Multi-entity governance, private deployment and training at scale.",
      items: ["Unlimited Seats", "Private Cloud Or On-Premise", "Dedicated Delivery Pod", "Data Residency Guarantees", "24×7 Support With SLA", "Executive Reporting Line"],
      cta: "Request A Quote",
    },
  ],
  plansNote: "All plans include onboarding, documentation handover and access to the resource library. Annual commitments receive two months free.",
  productsHeading: { lead: "Buy A Product On Its Own.", rest: "Each product runs standalone in your tenancy, with or without a delivery squad." },
  productRates: [
    { name: "Insight Grid", rate: "$38 / seat / month", description: "Governed analytics workspace, semantic layer, embedded dashboards", note: "Volume breaks above 250 seats" },
    { name: "P-Score", rate: "$1,900 / month", description: "Scorecards, peer benchmarking and trend alerts for one portfolio", note: "Additional portfolios at $600 each" },
    { name: "eVoucher", rate: "$0.019 / redemption", description: "Issuance, offline redemption and reconciliation exports", note: "Minimum $1,200 per month" },
  ],
  engagementsHeading: {
    lead: "Services Are Bought By The Sprint Or The Squad.",
    rest: "No open-ended time and materials, every engagement has a scope and an exit.",
  },
  engagements: [
    { icon: "compass", title: "Discovery Sprint", rate: "$9,500 fixed", text: "Two weeks. Data estate map, three prioritised use cases, costed delivery plan." },
    { icon: "users", title: "Delivery Squad", rate: "From $18,000 / month", text: "Cross-functional pod, engineer, analyst, scientist, delivery lead." },
    { icon: "user-plus", title: "Staff Augmentation", rate: "From $6,200 / month per person", text: "Vetted specialist embedded in your team, minimum three months." },
    { icon: "graduation-cap", title: "Data Skills Training", rate: "$320 per learner per module", text: "Instructor-led cohorts, 6 to 24 learners, delivered on site or remote." },
  ],
  ctaBand: {
    title: "Not Sure Which Model Fits?",
    text: "Send us your reporting pain in two sentences. We will tell you whether it is a product, a squad, or a two-week discovery, and what it costs.",
  },
  faqs: [
    {
      question: "Is The Discovery Sprint Credited Against Delivery?",
      answer: "Yes. The full discovery fee is credited against the first three months of any delivery engagement that follows.",
    },
    { question: "Which Currencies Do You Invoice In?", answer: "USD, KES, GBP and EUR. Rates are set in USD and converted at the prevailing rate on the invoice date." },
    {
      question: "Are There Setup Fees?",
      answer: "No setup fees on Essentials or Growth. Enterprise private deployments carry a one-off implementation fee quoted after discovery.",
    },
    { question: "Can We Move Between Plans?", answer: "Upgrade at any time, prorated. Downgrades take effect at the next renewal date." },
    {
      question: "Do You Offer Public-Sector Or NGO Rates?",
      answer: "Yes. Government, education and registered NGO programmes receive a 15% discount on product licensing.",
    },
  ],
};
