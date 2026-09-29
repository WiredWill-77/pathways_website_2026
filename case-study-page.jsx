/* Case study destination pages. window.PT_CASE_SLUG = slug.
   Copy adapted from published Pathways Technologies case studies; confirm figures and quotes before publishing. */
const CASE_STUDIES={
  "red-cross-kenya":{client:"Kenya Red Cross Society",category:"AI / Data Analytics",published:"2023",
    hero:"uploads/case-red-cross-hero.jpg",
    lead:"Kenya Red Cross Society",rest:"A Chatbot For Mental Health Support At National Scale.",
    intro:"Pathways Technologies built a hybrid guided-conversation and AI-powered chatbot for the Kenya Red Cross Society, delivering mental health and psychosocial support across four channels in two languages.",
    overview:"The Kenya Red Cross Society (KRCS) Department of Health, Nutrition and Social Services focuses on primary health care as the most efficient route to Universal Health Coverage. With GSMA as project sponsor, KRCS contracted Pathways Technologies to build a hybrid guided-conversation and AI-powered chatbot offering mental health and psychosocial support at scale, powered by the Microsoft Bot Framework and ChatGPT.",
    challenge:"Reaching people who need psychosocial support at scale, in the language and channel they already use, without waiting on a counsellor's availability.",
    solution:[["message-circle","Two Languages, Four Channels","The chatbot runs in English and Kiswahili across WhatsApp, Facebook Messenger, Telegram and LiveChat on the KRCS website."],
      ["clock","24/7 Availability","Guided conversations are available around the clock from any of the supported channels."],
      ["users","Human Handover","Users move from a guided conversation to a ChatGPT-powered assistant, with a seamless escalation to a human counsellor on request."],
      ["bar-chart-3","Performance Dashboards","A dashboard tracks KPIs for impact measurement and downstream analytics across every conversation."]],
    outcomes:["24/7 accessibility from any supported channel","Immediate assistance with escalation to human counsellors","Scales to multi-concurrent conversations with tracking per conversation","Complete performance dashboard for impact measurement","Privacy and convenience for every user"],
    conclusion:"Pathways Technologies has the know-how to build diverse use cases across the humanitarian and private sectors. This project reflects the range of problems our data and AI teams take on."},

  "copia-global":{client:"Copia Global",category:"Data Analytics / ML",published:"2023",
    hero:"uploads/case-copia-hero.jpg",
    lead:"Copia Global",rest:"Machine Learning For E-Commerce At Scale.",
    intro:"Copia Global contracted Pathways Technologies to embed data science into its e-commerce operations, from demand forecasting to customer segmentation.",
    overview:"Copia Global, an e-commerce platform serving customers across Kenya, contracted Pathways Technologies to integrate data science into its business. Pathways developed a number of ML-powered models that support data-driven decisions across the business.",
    challenge:"Turning years of transactional and logistics data into models that could guide day-to-day merchandising, inventory and delivery decisions.",
    solution:[["trending-up","Demand Forecasting & Planning","Forecast models anticipate demand by product and region ahead of the buying cycle."],
      ["package","Inventory Management","Stock levels are set from modelled demand rather than manual reordering."],
      ["route","Route Optimisation","Delivery routes are optimised against cost and time constraints."],
      ["shopping-cart","Market Basket Analysis","Purchase patterns surface cross-sell and merchandising opportunities."],
      ["users","Customer Segmentation","Behavioural segments guide targeting and retention."],
      ["message-square","SMS Impact Model","A model measures the effect of SMS campaigns on customer behaviour."]],
    conclusion:"Copia now runs its merchandising, inventory and customer engagement decisions on models built and maintained by Pathways Technologies."},

  "m-oriental-bank":{client:"M-Oriental Bank",category:"Data Analytics / AI/ML",published:"2023",
    hero:"uploads/case-m-oriental-hero.jpg",
    lead:"M-Oriental Bank",rest:"Rating Business Creditworthiness At Production Scale.",
    intro:"M-Oriental Bank partnered with Pathways Technologies to build an enterprise-grade, risk-based business rating application used to price and de-risk lending.",
    overview:"M-Oriental Bank, a local financial institution, partnered with Pathways Technologies to develop an enterprise-grade risk-based business rating application for rating businesses on creditworthiness. The solution rates businesses against a set of rules developed by the bank.",
    challenge:"Lending decisions relied on inconsistent, manual creditworthiness checks with no shared rule set across the business.",
    solution:[["shield-check","Rules-Based Rating Engine","Businesses are scored against a rule set defined and owned by the bank's credit team."],
      ["cloud","Cloud-Hosted Application","The application has run in production since January 2023."],
      ["life-buoy","Ongoing Support","Pathways Technologies continues to support and extend the application."]],
    conclusion:"The application has become a critical tool for de-risking lending to businesses, and is one of several use cases Pathways has delivered for the financial services sector."},

  "port-sacco":{client:"Mombasa Port Sacco",category:"Data Analytics",published:"2022",
    hero:"uploads/case-port-sacco-hero.jpg",
    lead:"Mombasa Port Sacco",rest:"A Reporting Layer Built From The Navision Core.",
    intro:"Port Sacco partnered with Pathways Technologies to turn data locked in its Navision core system into departmental Power BI dashboards.",
    overview:"Port Sacco is a tier 1 licensed deposit-taking Sacco regulated by SASRA, established in 1966 and now serving salaried and non-salaried members, investment groups, corporates, sole businesses and the diaspora.",
    challenge:"A large volume of data sat inside the Navision core system with no way to turn it into KPIs departments could act on.",
    solution:[["database","ETL From The Core System","An ETL tool extracts, transforms and loads data from Navision into an on-premise reporting database."],
      ["layout-dashboard","Department-Level Dashboards","Reports built in Power BI Desktop are published to department workspaces in Power BI online."],
      ["target","KPIs Defined Per Department","Each department's reports are customised to the KPIs that matter to it."]],
    outcomes:["A holistic, forecasted view of the Sacco's performance for planning and strategy","Streamlined business processes and reporting","Better member service and improved business performance"],
    conclusion:"Port Sacco has enhanced its decision-making, tuned its internal operations, and improved member experience since bringing Pathways in as its analytics partner."},

  "kenya-bankers-sacco":{client:"Kenya Bankers Sacco",category:"Data Analytics",published:"2020",
    hero:"uploads/case-kenya-bankers-hero.jpg",
    lead:"Kenya Bankers Sacco",rest:"A Tableau Layer For Board-Level Decisions.",
    intro:"Kenya Bankers Sacco partnered with Pathways Technologies to build a Business Intelligence and Analytics solution now used in monthly board reporting.",
    overview:"Kenya Bankers Sacco, one of Kenya's leading Savings and Credit Cooperative Societies, needed to turn its data resources into real-time insight across operations, customer service and strategy.",
    challenge:"Vast datasets sat across numerous departments with no consistent way to define KPIs or deliver insight in real time.",
    solution:[["database","ETL & Data Structuring","Data is extracted, transformed and loaded into a structured reporting layer."],
      ["bar-chart-3","Tableau Dashboards","Custom interactive dashboards and reports give each department a clear view of its data."],
      ["users","Board-Ready Reporting","Reports feed monthly board meetings with a data-driven view of performance."]],
    outcomes:["Actionable, real-time insight for faster decisions","Increased operational efficiency across departments","Personalised products from a customer-centric data view","Stronger governance at monthly board level","Comprehensive visual reports for management and staff","A stronger competitive position in the Sacco market"],
    conclusion:"Every decision at Kenya Bankers Sacco is now backed by data, delivered through reports built and maintained by Pathways Technologies."},

  "world-vision":{client:"World Vision",category:"Data Analytics",published:"2018",
    hero:"uploads/case-world-vision-hero.jpg",
    lead:"World Vision",rest:"Predictive Analytics For Disaster Response.",
    intro:"World Vision partnered with Pathways Technologies to build a Business Intelligence and predictive analytics solution used to share disaster forecasts with international stakeholders.",
    overview:"World Vision is a global Christian relief, development and advocacy organisation working with children, families and communities to overcome poverty and injustice.",
    challenge:"Disaster prediction and the timely reporting of findings to international stakeholders, across regions, in a format non-technical stakeholders could use.",
    solution:[["database","Reporting Repository & ETL","A reporting repository and ETL logic bring source-system data into a structured reporting layer."],
      ["clipboard-list","Web-Based Data Collection","A web-based tool lets field teams enter data directly."],
      ["map","Analytical Dashboards With GIS","Tableau dashboards capture KPIs and GIS maps by region."],
      ["globe","Public-Facing Website","A website embeds the analytics dashboards for external stakeholders."]],
    conclusion:"The solution shipped in three months and significantly improved World Vision's operational efficiency and decision-making."}
};

function CaseStudyApp(){
  const {Header,PtFooter}=window;
  const {Section,SlotFigure,IconCards,CheckRows,ClosingCta,PageHero}=window;
  const d=CASE_STUDIES[(window.PT_CASE_SLUG)];
  if(!d)return <div style={{padding:60}}>Unknown case study.</div>;
  return <><Header/><main id="main" data-screen-label={d.client}>
    <PageHero eyebrow={"Case Study · "+d.category} lead={d.lead} rest={d.rest} intro={d.intro} img={d.hero}
      meta={[["Client",d.client],["Category",d.category],["Published",d.published]]}
      secondary={["See All Case Studies","Case Studies.html"]}/>
    <Section index="01" label="Overview" right="What They Needed"><p style={{fontSize:17,color:"var(--text-secondary)",maxWidth:820,lineHeight:1.7}}>{window.ptMd?ptMd(d.overview):d.overview}</p></Section>
    <Section index="02" label="Challenge" right="Where It Started" bg="var(--bg-subtle)">
      <p style={{fontSize:17,color:"var(--text-secondary)",maxWidth:820,lineHeight:1.7}}>{window.ptMd?ptMd(d.challenge):d.challenge}</p></Section>
    <Section index="03" label="Solution" right="What We Built"><IconCards items={d.solution} cols={d.solution.length>3?4:d.solution.length}/></Section>
    {d.outcomes&&<Section index="04" label="Outcomes" right="What Changed" bg="var(--bg-subtle)"><CheckRows items={d.outcomes}/></Section>}
    <Section index={d.outcomes?"05":"04"} label="In Practice" right="Delivered On Site">
      <SlotFigure id={"case-"+window.PT_CASE_SLUG} caption={"Photography: "+d.client} ratio="16 / 7"/></Section>
    <ClosingCta title={d.conclusion} secondary={["See Our Solutions","Solutions.html"]}/>
    <PtFooter/></main></>;
}
const CASE_LIST=["red-cross-kenya","copia-global","m-oriental-bank","port-sacco","kenya-bankers-sacco","world-vision"];

function CaseStudiesIndex(){
  const {Header,PtFooter,Section,PageHero,ClosingCta,Icon}=window;
  const { Card, TwoToneHeading } = window.SearchableDesignSystem_29e52a;
  return <><Header/><main id="main" data-screen-label="Case Studies">
    <PageHero eyebrow="Case Studies" lead="Work We Have" rest="Shipped And Stand Behind."
      intro="Six engagements across finance, health, humanitarian response and e-commerce. Each one is a working system, not a slide deck."
      meta={[["Case Studies","6"],["Sectors","5"],["Years Live","2018–2026"]]}
      secondary={["See All Solutions","Solutions.html"]}/>
    <Section index="01" label="Case Studies" right="Client Work">
      <div style={{display:"grid",gap:20}}>
        {CASE_LIST.map(slug=>{const d=CASE_STUDIES[slug];return <Card key={slug} hover padding={0}>
          <a href={window.ptHref?ptHref("case-study",slug):"case-study-"+slug+".html"} style={{textDecoration:"none",color:"inherit",display:"grid",
            gridTemplateColumns:"minmax(0,240px) minmax(0,1fr) auto",alignItems:"center",gap:0}} className="pt-indrow">
            <div className="pt-indimg" style={{height:150,overflow:"hidden",background:"var(--bg-muted)"}}>
              {d.hero&&<img src={d.hero} alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>}</div>
            <div style={{padding:"24px 30px"}}>
              <div style={{fontSize:"var(--text-xs)",color:"var(--text-muted)",marginBottom:6,textTransform:"uppercase",letterSpacing:"var(--tracking-eyebrow)"}}>{d.category}</div>
              <h2 style={{fontSize:20,margin:"0 0 8px",fontWeight:"var(--weight-medium)"}}>{d.client}</h2>
              <p style={{fontSize:"var(--text-sm)",color:"var(--text-secondary)",margin:0,maxWidth:520}}>{d.intro}</p></div>
            <div className="pt-indstat" style={{padding:"24px 30px",textAlign:"right"}}>
              <div style={{fontSize:12,color:"var(--text-muted)"}}>{d.published}</div>
              <span style={{display:"inline-flex",marginTop:12,color:"var(--secondary-text)"}}><Icon name="arrow-right" size={18}/></span></div>
          </a></Card>;})}
      </div>
    </Section>
    <ClosingCta title="Have A Similar Problem?" secondary={["See Our Solutions","Solutions.html"]}>
      Tell us what you are working with. We will tell you within a week whether it is a two-week discovery or a straight build.</ClosingCta>
    <PtFooter/></main></>;
}
Object.assign(window,{CaseStudyApp,CaseStudiesIndex,CASE_STUDIES});
