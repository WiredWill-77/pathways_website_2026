/* Mock data for the courses domain (prototype: course-page.jsx, checkout.jsx).
   Instructor and testimonial copy is illustrative, confirm names and quotes before publishing. */
import type { CheckoutConfig } from "@/types/checkout";
import type { Course, CoursePageContent } from "@/types/courses";

/** The five Data Skills Training modules, in ladder order. */
export const COURSES: Course[] = [
  {
    slug: "data-foundations",
    order: 1,
    status: "published",
    title: "Data Foundations",
    audience: "Analysts & Graduates",
    length: "4 half-days",
    level: "Foundation",
    summary: "Spreadsheet discipline, data types, joins, first SQL queries.",
    cover: "/uploads/pasted-1790153677902-0.png",
    eyebrow: "Data Skills Training · Module",
    lead: "Data Foundations.",
    rest: "From Spreadsheet To First Query.",
    intro:
      "The starting module for analysts and graduates: spreadsheet discipline, how relational data actually joins together, and enough SQL to stop waiting on someone else to pull a number.",
    skills: ["Spreadsheet Hygiene", "Primary & Foreign Keys", "SQL Select & Where", "Joins", "Aggregation"],
    prereqs: "No prior SQL required. Comfortable using a spreadsheet day to day.",
    outline: [
      { title: "Spreadsheet Discipline", text: "Naming, structure and validation habits that stop errors from reaching a downstream report.", meta: "Half-day · 3 exercises" },
      { title: "Data Types & Joins", text: "Primary keys, joins and the relational logic every later module assumes.", meta: "Half-day · 4 exercises" },
      { title: "First SQL Queries", text: "Select, filter and aggregate: enough SQL to answer a question without waiting on someone else.", meta: "Two half-days · 5 exercises" },
    ],
    outcomes: ["Writes and checks a SQL query unsupervised", "Understands join logic well enough to read a schema", "Ready for SQL & Modelling"],
    seo: { title: "Data Foundations | Data Skills Training", description: "Spreadsheet discipline, data types, joins and first SQL queries for analysts and graduates." },
  },
  {
    slug: "sql-modelling",
    order: 2,
    status: "published",
    title: "SQL & Modelling",
    audience: "Analysts",
    length: "6 half-days",
    level: "Intermediate",
    summary: "Window functions, star schemas, building a certified measure.",
    eyebrow: "Data Skills Training · Module",
    lead: "SQL & Modelling.",
    rest: "From Query To Certified Measure.",
    intro: "For analysts who already write SQL: window functions, star schema design, and how to build a measure the whole business agrees on.",
    skills: ["Window Functions", "Star Schema Design", "Certified Measures", "Query Performance", "Data Modelling"],
    prereqs: "Completed Data Foundations or equivalent: comfortable with select, where and basic joins.",
    outline: [
      { title: "Window Functions", text: "Running totals, ranking and period comparisons without exporting to a spreadsheet.", meta: "Two half-days · 4 exercises" },
      { title: "Star Schema Design", text: "Facts, dimensions and the modelling choices that keep a warehouse fast and legible.", meta: "Two half-days · 3 exercises" },
      { title: "Building A Certified Measure", text: "Defining a metric once, documenting it, and retiring the versions that disagreed with it.", meta: "Two half-days · 2 exercises" },
    ],
    outcomes: ["Can model a star schema from a source system", "Ships a certified measure with documentation", "Ready for Visualisation & Storytelling"],
    seo: { title: "SQL & Modelling | Data Skills Training", description: "Window functions, star schemas and building a certified measure, for analysts." },
  },
  {
    slug: "visualisation-storytelling",
    order: 3,
    status: "published",
    title: "Visualisation & Storytelling",
    audience: "Analysts & Marketing",
    length: "4 half-days",
    level: "Intermediate",
    summary: "Chart choice, dashboard structure, narrating a number to a board.",
    eyebrow: "Data Skills Training · Module",
    lead: "Visualisation & Storytelling.",
    rest: "From Chart To Argument.",
    intro:
      "Turning a certified measure into something a board acts on: the right chart for the question, a dashboard that reads top to bottom, and a narrative that survives the first hard question.",
    skills: ["Chart Selection", "Dashboard Layout", "Data Storytelling", "Stakeholder Framing", "Power BI / Looker"],
    prereqs: "Comfortable pulling a query result into a chart tool. No design background required.",
    outline: [
      { title: "Chart Choice", text: "Matching the shape of a question to the chart that answers it, and the ones to avoid.", meta: "Half-day · 3 exercises" },
      { title: "Dashboard Structure", text: "Layout, hierarchy and the difference between a dashboard built to browse and one built to decide.", meta: "Half-day · 3 exercises" },
      { title: "Narrating A Number", text: "Framing a metric for a room that will push back, with the one slide that survives the meeting.", meta: "Two half-days · 2 exercises" },
    ],
    outcomes: ["Builds a dashboard a stakeholder can read unassisted", "Can defend a number in front of a room", "Ready for Applied Machine Learning"],
    seo: { title: "Visualisation & Storytelling | Data Skills Training", description: "Chart choice, dashboard structure and narrating a number to a board." },
  },
  {
    slug: "applied-machine-learning",
    order: 4,
    status: "published",
    title: "Applied Machine Learning",
    audience: "Analysts & Developers",
    length: "8 half-days",
    level: "Advanced",
    summary: "Feature engineering, model evaluation, deployment basics.",
    eyebrow: "Data Skills Training · Module",
    lead: "Applied Machine Learning.",
    rest: "From Model To Something Live.",
    intro:
      "The bridge from analytics to data science: building features from a warehouse you already trust, evaluating a model honestly, and what it takes to put one behind an API.",
    skills: ["Feature Engineering", "Model Evaluation", "Holdout Design", "Deployment Basics", "Monitoring & Drift"],
    prereqs: "Completed SQL & Modelling. Basic Python or R helps but is not required.",
    outline: [
      { title: "Feature Engineering", text: "Turning certified measures and raw events into inputs a model can actually use.", meta: "Three half-days · 4 exercises" },
      { title: "Model Evaluation", text: "Holdouts, baselines and the metrics that catch a model lying to you before production does.", meta: "Three half-days · 3 exercises" },
      { title: "Deployment Basics", text: "What changes once a notebook becomes an API: versioning, monitoring and retraining.", meta: "Two half-days · 2 exercises" },
    ],
    outcomes: ["Builds a feature set from warehouse data", "Evaluates a model against a proper baseline", "Ready for production, or Data Literacy For Leaders"],
    seo: { title: "Applied Machine Learning | Data Skills Training", description: "Feature engineering, model evaluation and deployment basics for analysts and developers." },
  },
  {
    slug: "data-literacy-for-leaders",
    order: 5,
    status: "published",
    title: "Data Literacy For Leaders",
    audience: "Executives",
    length: "2 half-days",
    level: "Executive",
    summary: "Reading a model, questioning a metric, governing an AI programme.",
    eyebrow: "Data Skills Training · Module",
    lead: "Data Literacy For Leaders.",
    rest: "Enough To Govern What You Approve.",
    intro:
      "A short, direct module for executives: enough to read a model's output critically, question a metric before it reaches a board pack, and govern an AI programme without needing to code.",
    skills: ["Reading Model Output", "Metric Scrutiny", "AI Governance", "Risk Framing", "Approval Gates"],
    prereqs: "None. Built for executives with no coding background.",
    outline: [
      { title: "Reading A Model", text: "What a model's output can and cannot tell you, in language that survives a board meeting.", meta: "Half-day · 2 exercises" },
      { title: "Questioning A Metric", text: "The three questions that catch a misleading number before it becomes a decision.", meta: "Half-day · 2 exercises" },
      { title: "Governing An AI Programme", text: "Risk, ownership and the approval gates a programme needs before it touches a customer.", meta: "Half-day · 1 exercise" },
    ],
    outcomes: ["Can question a model or metric with confidence", "Knows what governance an AI programme needs", "Ready to sponsor a Digital Transformation Advisory engagement"],
    seo: { title: "Data Literacy For Leaders | Data Skills Training", description: "Reading a model, questioning a metric and governing an AI programme, for executives." },
  },
];

export const COURSE_PAGE_CONTENT: CoursePageContent = {
  format: "On Site Or Remote",
  faqs: [
    { question: "Is this delivered on site or remote?", answer: "Both. We agree the mix with you: discussion-heavy sessions on site, build time remote." },
    {
      question: "What do we need before the first session?",
      answer: "Read access to a sample of your own data and a laptop with the tools installed. We send setup instructions two weeks out.",
    },
    { question: "Can this run for just our team?", answer: "Yes. Every cohort is private to one organisation; we do not mix learners across clients." },
  ],
  quote: {
    quote:
      "The team walked in knowing spreadsheets and walked out writing SQL against our own warehouse in week two. It changed how fast we could staff a request.",
    name: "L&D Lead",
    role: "Illustrative client quote",
  },
  trackRecord: [
    { label: "People Trained", value: "1,900+" },
    { label: "Cohort Size", value: "6 to 24" },
    { label: "Completion Rate", value: "94%" },
    { label: "Per Learner", value: "$320" },
  ],
  deliveryNote:
    "Every module is led by a Pathways consultant who is currently shipping this kind of work for a client, not a full-time trainer reading slides. Cohorts run private to one organisation, 6 to 24 learners.",
};

/** Cohort booking settings for /checkout. */
export const COURSE_CHECKOUT_CONFIG: CheckoutConfig = {
  pricePerLearner: 320,
  currency: "USD",
  minLearners: 6,
  maxLearners: 24,
  defaultLearners: 12,
  formats: ["On Site", "Remote"],
  paymentMethods: [
    { key: "invoice", label: "Invoice (Net 30)" },
    { key: "card", label: "Card" },
    { key: "mpesa", label: "M-Pesa" },
  ],
  hero: {
    eyebrow: "Checkout",
    lead: "Reserve Your Cohort.",
    rest: "Confirm Learners & Dates.",
    intro:
      "One form: pick the module, set your cohort size and start window, and choose invoice, card or M-Pesa. A practice lead confirms dates within one working day.",
    photo: "/uploads/Data Analytics Laptop.jpg",
  },
};
