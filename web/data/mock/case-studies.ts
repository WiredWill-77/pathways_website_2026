/* Case studies. Prototype: case-study-page.jsx CASE_STUDIES, in CASE_LIST order.
   `description` is the page's meta description from case-study-<slug>.html.
   Copy adapted from published Pathways Technologies case studies; confirm figures and quotes before publishing. */
import type { CaseStudy } from "@/types/case-studies";

export const CASE_STUDIES: CaseStudy[] = [
  {
    "slug": "red-cross-kenya",
    "status": "published",
    "client": "Kenya Red Cross Society",
    "category": "AI / Data Analytics",
    "published": "2023",
    "hero": "/uploads/case-red-cross-hero.jpg",
    "lead": "Kenya Red Cross Society",
    "rest": "A Chatbot For Mental Health Support At National Scale.",
    "intro": "Pathways Technologies built a hybrid guided-conversation and AI-powered chatbot for the Kenya Red Cross Society, delivering mental health and psychosocial support across four channels in two languages.",
    "overview": "The Kenya Red Cross Society (KRCS) Department of Health, Nutrition and Social Services focuses on primary health care as the most efficient route to Universal Health Coverage. With GSMA as project sponsor, KRCS contracted Pathways Technologies to build a hybrid guided-conversation and AI-powered chatbot offering mental health and psychosocial support at scale, powered by the Microsoft Bot Framework and ChatGPT.",
    "challenge": "Reaching people who need psychosocial support at scale, in the language and channel they already use, without waiting on a counsellor's availability.",
    "solution": [
      {
        "icon": "message-circle",
        "title": "Two Languages, Four Channels",
        "text": "The chatbot runs in English and Kiswahili across WhatsApp, Facebook Messenger, Telegram and LiveChat on the KRCS website."
      },
      {
        "icon": "clock",
        "title": "24/7 Availability",
        "text": "Guided conversations are available around the clock from any of the supported channels."
      },
      {
        "icon": "users",
        "title": "Human Handover",
        "text": "Users move from a guided conversation to a ChatGPT-powered assistant, with a seamless escalation to a human counsellor on request."
      },
      {
        "icon": "bar-chart-3",
        "title": "Performance Dashboards",
        "text": "A dashboard tracks KPIs for impact measurement and downstream analytics across every conversation."
      }
    ],
    "outcomes": [
      "24/7 accessibility from any supported channel",
      "Immediate assistance with escalation to human counsellors",
      "Scales to multi-concurrent conversations with tracking per conversation",
      "Complete performance dashboard for impact measurement",
      "Privacy and convenience for every user"
    ],
    "conclusion": "Pathways Technologies has the know-how to build diverse use cases across the humanitarian and private sectors. This project reflects the range of problems our data and AI teams take on.",
    "description": "A hybrid AI chatbot delivering mental health and psychosocial support at national scale, built for the Kenya Red Cross Society by Pathways Technologies."
  },
  {
    "slug": "copia-global",
    "status": "published",
    "client": "Copia Global",
    "category": "Data Analytics / ML",
    "published": "2023",
    "hero": "/uploads/case-copia-hero.jpg",
    "lead": "Copia Global",
    "rest": "Machine Learning For E-Commerce At Scale.",
    "intro": "Copia Global contracted Pathways Technologies to embed data science into its e-commerce operations, from demand forecasting to customer segmentation.",
    "overview": "Copia Global, an e-commerce platform serving customers across Kenya, contracted Pathways Technologies to integrate data science into its business. Pathways developed a number of ML-powered models that support data-driven decisions across the business.",
    "challenge": "Turning years of transactional and logistics data into models that could guide day-to-day merchandising, inventory and delivery decisions.",
    "solution": [
      {
        "icon": "trending-up",
        "title": "Demand Forecasting & Planning",
        "text": "Forecast models anticipate demand by product and region ahead of the buying cycle."
      },
      {
        "icon": "package",
        "title": "Inventory Management",
        "text": "Stock levels are set from modelled demand rather than manual reordering."
      },
      {
        "icon": "route",
        "title": "Route Optimisation",
        "text": "Delivery routes are optimised against cost and time constraints."
      },
      {
        "icon": "shopping-cart",
        "title": "Market Basket Analysis",
        "text": "Purchase patterns surface cross-sell and merchandising opportunities."
      },
      {
        "icon": "users",
        "title": "Customer Segmentation",
        "text": "Behavioural segments guide targeting and retention."
      },
      {
        "icon": "message-square",
        "title": "SMS Impact Model",
        "text": "A model measures the effect of SMS campaigns on customer behaviour."
      }
    ],
    "conclusion": "Copia now runs its merchandising, inventory and customer engagement decisions on models built and maintained by Pathways Technologies.",
    "description": "Machine learning models for demand forecasting, inventory, routing and customer segmentation, built for Copia Global by Pathways Technologies."
  },
  {
    "slug": "m-oriental-bank",
    "status": "published",
    "client": "M-Oriental Bank",
    "category": "Data Analytics / AI/ML",
    "published": "2023",
    "hero": "/uploads/case-m-oriental-hero.jpg",
    "lead": "M-Oriental Bank",
    "rest": "Rating Business Creditworthiness At Production Scale.",
    "intro": "M-Oriental Bank partnered with Pathways Technologies to build an enterprise-grade, risk-based business rating application used to price and de-risk lending.",
    "overview": "M-Oriental Bank, a local financial institution, partnered with Pathways Technologies to develop an enterprise-grade risk-based business rating application for rating businesses on creditworthiness. The solution rates businesses against a set of rules developed by the bank.",
    "challenge": "Lending decisions relied on inconsistent, manual creditworthiness checks with no shared rule set across the business.",
    "solution": [
      {
        "icon": "shield-check",
        "title": "Rules-Based Rating Engine",
        "text": "Businesses are scored against a rule set defined and owned by the bank's credit team."
      },
      {
        "icon": "cloud",
        "title": "Cloud-Hosted Application",
        "text": "The application has run in production since January 2023."
      },
      {
        "icon": "life-buoy",
        "title": "Ongoing Support",
        "text": "Pathways Technologies continues to support and extend the application."
      }
    ],
    "conclusion": "The application has become a critical tool for de-risking lending to businesses, and is one of several use cases Pathways has delivered for the financial services sector.",
    "description": "An enterprise-grade, risk-based business rating application for creditworthiness, built for M-Oriental Bank by Pathways Technologies."
  },
  {
    "slug": "port-sacco",
    "status": "published",
    "client": "Mombasa Port Sacco",
    "category": "Data Analytics",
    "published": "2022",
    "hero": "/uploads/case-port-sacco-hero.jpg",
    "lead": "Mombasa Port Sacco",
    "rest": "A Reporting Layer Built From The Navision Core.",
    "intro": "Port Sacco partnered with Pathways Technologies to turn data locked in its Navision core system into departmental Power BI dashboards.",
    "overview": "Port Sacco is a tier 1 licensed deposit-taking Sacco regulated by SASRA, established in 1966 and now serving salaried and non-salaried members, investment groups, corporates, sole businesses and the diaspora.",
    "challenge": "A large volume of data sat inside the Navision core system with no way to turn it into KPIs departments could act on.",
    "solution": [
      {
        "icon": "database",
        "title": "ETL From The Core System",
        "text": "An ETL tool extracts, transforms and loads data from Navision into an on-premise reporting database."
      },
      {
        "icon": "layout-dashboard",
        "title": "Department-Level Dashboards",
        "text": "Reports built in Power BI Desktop are published to department workspaces in Power BI online."
      },
      {
        "icon": "target",
        "title": "KPIs Defined Per Department",
        "text": "Each department's reports are customised to the KPIs that matter to it."
      }
    ],
    "outcomes": [
      "A holistic, forecasted view of the Sacco's performance for planning and strategy",
      "Streamlined business processes and reporting",
      "Better member service and improved business performance"
    ],
    "conclusion": "Port Sacco has enhanced its decision-making, tuned its internal operations, and improved member experience since bringing Pathways in as its analytics partner.",
    "description": "A Power BI reporting layer built from the Navision core system, delivered for Mombasa Port Sacco by Pathways Technologies."
  },
  {
    "slug": "kenya-bankers-sacco",
    "status": "published",
    "client": "Kenya Bankers Sacco",
    "category": "Data Analytics",
    "published": "2020",
    "hero": "/uploads/case-kenya-bankers-hero.jpg",
    "lead": "Kenya Bankers Sacco",
    "rest": "A Tableau Layer For Board-Level Decisions.",
    "intro": "Kenya Bankers Sacco partnered with Pathways Technologies to build a Business Intelligence and Analytics solution now used in monthly board reporting.",
    "overview": "Kenya Bankers Sacco, one of Kenya's leading Savings and Credit Cooperative Societies, needed to turn its data resources into real-time insight across operations, customer service and strategy.",
    "challenge": "Vast datasets sat across numerous departments with no consistent way to define KPIs or deliver insight in real time.",
    "solution": [
      {
        "icon": "database",
        "title": "ETL & Data Structuring",
        "text": "Data is extracted, transformed and loaded into a structured reporting layer."
      },
      {
        "icon": "bar-chart-3",
        "title": "Tableau Dashboards",
        "text": "Custom interactive dashboards and reports give each department a clear view of its data."
      },
      {
        "icon": "users",
        "title": "Board-Ready Reporting",
        "text": "Reports feed monthly board meetings with a data-driven view of performance."
      }
    ],
    "outcomes": [
      "Actionable, real-time insight for faster decisions",
      "Increased operational efficiency across departments",
      "Personalised products from a customer-centric data view",
      "Stronger governance at monthly board level",
      "Comprehensive visual reports for management and staff",
      "A stronger competitive position in the Sacco market"
    ],
    "conclusion": "Every decision at Kenya Bankers Sacco is now backed by data, delivered through reports built and maintained by Pathways Technologies.",
    "description": "A Tableau business intelligence solution feeding monthly board reporting, delivered for Kenya Bankers Sacco by Pathways Technologies."
  },
  {
    "slug": "world-vision",
    "status": "published",
    "client": "World Vision",
    "category": "Data Analytics",
    "published": "2018",
    "hero": "/uploads/case-world-vision-hero.jpg",
    "lead": "World Vision",
    "rest": "Predictive Analytics For Disaster Response.",
    "intro": "World Vision partnered with Pathways Technologies to build a Business Intelligence and predictive analytics solution used to share disaster forecasts with international stakeholders.",
    "overview": "World Vision is a global Christian relief, development and advocacy organisation working with children, families and communities to overcome poverty and injustice.",
    "challenge": "Disaster prediction and the timely reporting of findings to international stakeholders, across regions, in a format non-technical stakeholders could use.",
    "solution": [
      {
        "icon": "database",
        "title": "Reporting Repository & ETL",
        "text": "A reporting repository and ETL logic bring source-system data into a structured reporting layer."
      },
      {
        "icon": "clipboard-list",
        "title": "Web-Based Data Collection",
        "text": "A web-based tool lets field teams enter data directly."
      },
      {
        "icon": "map",
        "title": "Analytical Dashboards With GIS",
        "text": "Tableau dashboards capture KPIs and GIS maps by region."
      },
      {
        "icon": "globe",
        "title": "Public-Facing Website",
        "text": "A website embeds the analytics dashboards for external stakeholders."
      }
    ],
    "conclusion": "The solution shipped in three months and significantly improved World Vision's operational efficiency and decision-making.",
    "description": "A predictive analytics and GIS dashboard solution for disaster response, delivered for World Vision by Pathways Technologies."
  }
];
