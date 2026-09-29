/* Blog / insights posts, summarised from public Pathways Technologies announcements.
   window.PT_BLOG_SLUG = slug. Confirm dates, figures and quotes against source before publishing. */
const BLOG_POSTS={
  "centenary-bank-malawi":{title:"Centenary Bank And Pathways Technologies Are Redefining Financial Inclusion In Malawi",
    date:"June 2, 2026",categories:["Partnerships","Technology"],hero:"uploads/blog-centenary-bank-hero.jpg",
    excerpt:"Centenary Bank Malawi is turning a strong financial year into a tech-led push on inclusive growth, with Pathways Technologies among the partners building out the ecosystem.",
    body:["Centenary Bank Malawi closed its last financial year with profitability up sharply, and is using that position to shift from stabilising its balance sheet to expanding access to financial services across the country.",
      "Pathways Technologies is part of a sponsored ecosystem initiative supporting that shift, contributing the data and technology work needed to reach customers who have been outside the formal banking system.",
      "The announcement frames the partnership as one piece of a wider push across East and Southern Africa to pair bank balance sheets with the data infrastructure needed to lend and serve customers responsibly at scale."]},

  "pathways-ouk-partnership":{title:"Pathways Technologies + OUK Partnership Press Release",
    date:"April 20, 2026",categories:["Development","Technology"],hero:"uploads/blog-ouk-partnership-hero.jpg",
    excerpt:"Pathways Technologies and the Open University of Kenya announced a partnership to connect academic programmes with industry-relevant, future-ready skills training.",
    body:["Pathways Technologies and the Open University of Kenya (OUK) announced a strategic partnership aimed at strengthening industry-academia collaboration in Kenya and the wider region.",
      "The partnership is intended to expand access to in-demand, future-ready skills, pairing OUK's academic programmes with Pathways' delivery experience in data, analytics and software training.",
      "It extends a pattern already visible in Pathways' other education partnerships: pairing formal institutions with a delivery team that trains directly on live business problems."]},

  "giz-credit-scoring-launch":{title:"Pathways Technologies + GIZ AI-Powered Credit Scoring Solution Launch",
    date:"February 7, 2025",categories:["Partnerships","Technology"],hero:"uploads/blog-giz-credit-scoring-hero.jpg",
    excerpt:"Pathways Technologies and GIZ unveiled an AI-powered Farmer Credit Scoring Solution at an event in Nairobi, bringing lenders, policymakers and farmer representatives into the same room.",
    body:["Pathways Technologies, working with Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH, launched an AI-powered Farmer Credit Scoring Solution at an event at the Radisson Blu, Upperhill, in Nairobi.",
      "The solution scores farmers for creditworthiness using data lenders would otherwise not have access to, aimed at de-risking agricultural lending for banks and microfinance institutions.",
      "The launch event brought together policymakers, lenders and farmer representatives to discuss what a shared, data-backed rating standard could mean for agricultural credit across the sector."]},

  "google-cloud-partner-advantage":{title:"Pathways Technologies Joins Google Cloud Partner Advantage",
    date:"October 29, 2024",categories:["Data","Partnerships"],hero:"uploads/blog-google-cloud-hero.png",thumb:"uploads/Google - The New Way to Cloud.png",
    excerpt:"Pathways Technologies joined the Google Cloud Partner Advantage Program as a Service Engagement partner, adding Google Cloud to the platforms it delivers AI and data work on.",
    body:["Pathways Technologies announced that it has joined the Google Cloud Partner Advantage Program at the Google Cloud Partner level, under the Service Engagement model.",
      "The designation lets Pathways deliver Google Cloud-backed data and AI transformations to clients, alongside the Microsoft and Tableau partnerships it already holds.",
      "For clients already running on Google Cloud, it means Pathways can build directly against that platform rather than working around it."]},

  "microsoft-education-training-partner":{title:"Pathways Technologies Empowers Kenyan Educators And Students As Microsoft In Education Global Training Partner",
    date:"October 11, 2024",categories:["Data","Partnerships"],hero:"https://pathwaystechnologies.com/wp-content/uploads/2024/10/Microsoft-in-Education-Global-Training-Partner-1.png",
    excerpt:"Pathways Technologies achieved Microsoft in Education Global Training Partner status, positioning it to deliver Microsoft Education training and data & AI skills across Kenyan schools.",
    body:["Pathways Technologies achieved Microsoft in Education Global Training Partner status, a recognition that positions it to deliver Microsoft Education training directly into Kenyan schools and universities.",
      "The status builds on Pathways' existing data and AI training work, extending it into curricula aimed at educators as well as students.",
      "It reflects a broader bet: that closing the digital skills gap in education requires the same delivery discipline Pathways applies to its enterprise data work."]},

  "jitume-program-data-analytics":{title:"Jitume Program: Empowering Young Kenyans To Drive Business Success With Data Analytics",
    date:"August 14, 2024",categories:["Data","Partnerships"],hero:"https://pathwaystechnologies.com/wp-content/uploads/2024/08/Diana-Injelwa.jpg",
    excerpt:"The Jitume program, run with Konza Technopolis, aims to train 10,000 young Kenyans in data analytics, data science and software development over five years.",
    body:["The Jitume program, a collaboration between Pathways Technologies and Konza Technopolis, is training young Kenyans in data analytics, data science and software development, with a target of 10,000 learners over five years.",
      "The program is already producing individual stories of career change: one learner, Diana Injelwa, is cited as an example of the kind of data-driven transformation the program is designed to produce.",
      "Jitume sits alongside Pathways' other skills partnerships as part of a wider push to build a domestic pipeline of data and software talent in Kenya."]},

  "isuzu-east-africa-audit-bi":{title:"Transforming Audit Processes With Advanced Business Intelligence: A Case Study With Isuzu East Africa",
    date:"August 5, 2024",categories:["Data Analytics","Data Visualization"],hero:"https://pathwaystechnologies.com/wp-content/uploads/2024/08/Isuzu-East-Africa-1.jpg",
    excerpt:"Isuzu East Africa partnered with Pathways Technologies to replace manual audit data analysis with a business intelligence solution built for the audit team's own workflow.",
    body:["Isuzu East Africa's audit team was spending most of its time on manual data analysis, which left little room for timely insight into the areas audits are meant to catch early.",
      "Pathways Technologies implemented a data-driven business intelligence solution built around the audit team's actual workflow, replacing spreadsheet-based analysis with structured, repeatable reporting.",
      "The result is an audit process that spends less time assembling data and more time acting on what it finds."]},

  "absa-bank-kenya-data-driven-success":{title:"Data-Driven Success: Absa Bank Kenya's Path To Excellence",
    date:"August 2, 2024",categories:["Partnerships","Technology"],hero:"https://pathwaystechnologies.com/wp-content/uploads/2024/08/absa-pathways-technologies.jpg",
    excerpt:"Absa Bank Kenya's annual report mentions data more than a hundred times, reflecting how central data has become to its decision-making and day-to-day operations.",
    body:["Among Nairobi Securities Exchange-listed companies, Absa Bank Kenya stands out for how often data shows up in its own reporting on its business, a sign of how central it has become to decision-making.",
      "The piece traces how that emphasis on data plays out operationally, from day-to-day decision-making to the reporting lines that reach the board.",
      "It is offered as an example of what a data-mature financial institution in the region already looks like, rather than a target still years away."]},

  "ai-mental-health-guided-conversation":{title:"Transforming Mental Health Care With AI: Our Guided Conversation Initiative",
    date:"August 2, 2024",categories:["Partnerships","Technology"],hero:"https://pathwaystechnologies.com/wp-content/uploads/2024/08/AI-in-Mental-Health-Pathways-Technologies.png",
    excerpt:"In partnership with GSMA, Pathways Technologies built a guided-conversation AI initiative aimed at widening access to mental health support across Kenya.",
    body:["Rising demand for mental health support, and the shortage of counsellors able to meet it, was the starting point for Pathways Technologies' guided-conversation initiative, built in partnership with GSMA.",
      "The initiative combines structured guided conversations with an AI-powered assistant, giving people a first point of contact for psychosocial support without waiting on counsellor availability.",
      "It is the same initiative detailed in Pathways' Kenya Red Cross Society case study, where the chatbot now runs across WhatsApp, Facebook Messenger, Telegram and the KRCS website."]},

  "agriculture-digital-tools-giz-kalro":{title:"Transforming Agriculture With Digital Tools",
    date:"July 26, 2024",categories:["Partnerships","Technology"],hero:"https://pathwaystechnologies.com/wp-content/uploads/2024/07/Agritech-PW-GIZ-Kalro.png",
    excerpt:"With GIZ and KALRO, Pathways Technologies introduced a credit scoring model to de-risk lending to farmers and a field data collection tool for agriculture.",
    body:["Working with GIZ and the Kenya Agricultural and Livestock Research Organization (KALRO), Pathways Technologies introduced two tools aimed at the agricultural sector.",
      "The first is a credit scoring model built to de-risk lending to farmers, later expanded into the GIZ-backed Farmer Credit Scoring Solution. The second is a field data collection tool built for use directly in the field.",
      "Both tools are aimed at the same gap: agricultural data that exists on the ground but rarely makes it into the systems lenders and agencies use to make decisions."]},
  "jitume-training-initiative-launch":{title:"Kenya's Tech Future Brightens With The Successful Launch Of Jitume Training Initiative",
    date:"March 19, 2024",categories:["Partnerships","Technology"],hero:"https://pathwaystechnologies.com/wp-content/uploads/2024/03/Pathways-Konza-Training-Initiative-Launch.jpg",
    excerpt:"Pathways Technologies and the Konza Technopolis Development Authority launched Jitume, an accelerator program built to fast-track young professionals into data, innovation and technology careers.",
    body:["Pathways Technologies, working with the Konza Technopolis Development Authority, officially launched the Jitume accelerator program at an event in Nairobi.",
      "The program is designed to fast-track aspiring young professionals into data, innovation and technology roles, and later expanded into the wider Jitume training initiative covered in Pathways' other posts on the program."]},
  "hr-managers-data-analytics":{title:"Why Human Resource Managers Should Embrace Data Analytics",
    date:"November 15, 2023",categories:["Organization","Technology"],hero:"https://pathwaystechnologies.com/wp-content/uploads/2023/11/HR-Data-Analytics.jpg",
    excerpt:"As HR catches up with more analytical departments, the piece argues that data-led decision-making is becoming a priority for HR managers rather than a nice-to-have.",
    body:["HR has traditionally been treated as a soft-skills function, but the piece argues that is changing as more HR teams adopt analytics to guide hiring, retention and workforce planning.",
      "It frames data adoption in HR as a practical shift in how decisions get made day to day, not a separate technology initiative bolted onto the department."]},
  "digital-transformation-maze":{title:"Navigating The Digital Transformation Maze: How To Begin Your Journey",
    date:"September 19, 2023",categories:["Design","Development","Technology"],hero:"https://pathwaystechnologies.com/wp-content/uploads/2023/11/Digital-Transformation-A.jpeg",
    excerpt:"The piece argues that before committing time and budget to a transformation effort, organizations need clarity on what the effort is actually for.",
    body:["The core argument is simple: transformation projects that start without a clear purpose tend to drift, regardless of how much technology gets purchased along the way.",
      "It positions purpose and sequencing, not tooling, as the first decisions a transformation programme has to get right."]},
  "intuition-to-data-driven-decisions":{title:"From Intuition To Data-Driven Decision Making: The Power Of Business Intelligence And Data Analytics For Organizations",
    date:"July 14, 2023",categories:["Organization","Technology"],hero:"https://pathwaystechnologies.com/wp-content/uploads/2017/04/data-training.jpg",
    excerpt:"The piece makes the case that organizations can no longer afford to make decisions on intuition alone when the data to do better already sits inside their own systems.",
    body:["It frames business intelligence and data analytics as the difference between decisions made on instinct and decisions made on evidence already available inside the organization.",
      "The argument is aimed at organizations that have the data but have not yet built the habit of using it before deciding."]},
  "importance-of-data-visualization":{title:"The Importance Of Data Visualization In Decision-Making",
    date:"June 13, 2023",categories:["Data Visualization","Organization","Technology"],hero:"https://pathwaystechnologies.com/wp-content/uploads/2019/05/James-Adema-Data-Analyst.png",
    excerpt:"With organizations generating more data than ever, the piece argues that visualization is what turns that volume into insight people can actually act on.",
    body:["The piece walks through why raw data alone rarely changes a decision: it has to be shaped into something a non-technical reader can interpret quickly.",
      "Pathways positions data visualization as a core part of its own delivery work, not an afterthought layered on top of a finished dataset."]},
  "ai-transforming-banking":{title:"Revolutionizing Banking: How AI Is Transforming The Banking Industry",
    date:"April 19, 2023",categories:["Organization","Technology"],hero:"https://pathwaystechnologies.com/wp-content/uploads/2023/09/AI-Banking-2048x1324-1.jpg",
    excerpt:"Banking is framed as one of the most data-intensive industries, and the piece looks at how AI helps banks streamline operations, cut cost and improve customer experience.",
    body:["With millions of transactions processed daily, banks generate the kind of data volume that makes them natural early adopters of AI-driven automation and fraud detection.",
      "The piece frames AI adoption in banking as an operational efficiency story first, with better customer experience following from faster, more accurate processing."]},
  "venturelift-africa-partnership":{title:"Pathways Technologies Limited And VentureLift Africa Team Up On Data Science And Business Reporting",
    date:"March 16, 2023",categories:["Partnerships","Technology"],hero:"https://pathwaystechnologies.com/wp-content/uploads/2023/11/Handshake.jpg",
    excerpt:"Pathways Technologies and VentureLift Africa partnered to help African businesses use data science and reporting to better understand their customers and markets.",
    body:["The partnership pairs Pathways' data science and reporting capability with VentureLift Africa's work supporting businesses across the continent.",
      "It is framed as part of a wider effort to simplify the connection between African businesses and the customers and markets they serve, through better data and technology."]},
  "award-best-solutions-provider-africa":{title:"Pathways Technologies Wins Award For Best Solutions Provider For Data Analytics And AI In Africa",
    date:"March 14, 2023",categories:["Data Analytics","Startup","Technology"],hero:"https://pathwaystechnologies.com/wp-content/uploads/2023/11/Africa-4.0-Bank-Summit.jpeg",
    excerpt:"Pathways Technologies was recognised as Best Solutions Provider for Data Analytics and AI at the Africa Bank 4.0 2023 Awards.",
    body:["The recognition came at the Africa Bank 4.0 2023 Awards, which honours technology providers working with financial institutions across the continent.",
      "Pathways credits the award to its delivery team's work building data analytics and AI solutions for clients in the region."]},
  "ceo-launch-speech-2023":{title:"Official Launch Speech By President & CEO Mr. Joel Onditi Of Pathways Technologies Ltd",
    date:"February 20, 2023",categories:["Data Analytics","Organization","Startup"],hero:"https://pathwaystechnologies.com/wp-content/uploads/2023/11/Joel-Onditi-Speech.jpg",
    excerpt:"President and CEO Joel Onditi delivered the launch speech for Pathways Technologies at the Radisson Blu Hotel, marking the company's official launch in Kenya.",
    body:["The speech was delivered at the Radisson Blu Hotel on February 16, 2023, to an audience including diplomatic and government representatives.",
      "It marked the formal launch of Pathways Technologies (formerly Pathways International Ltd) as a company operating in the African market."]},
  "opens-doors-in-africa":{title:"Pathways Technologies Opens Its Doors In Africa",
    date:"February 16, 2023",categories:["Uncategorized"],hero:"https://pathwaystechnologies.com/wp-content/uploads/2023/11/Pathways-Opens-Its-Doors.png",thumb:"https://pathwaystechnologies.com/wp-content/uploads/2023/11/Pathways-Opens-Its-Doors.png",
    excerpt:"Pathways Technologies Ltd, formerly Pathways International Ltd, officially launched its services for the African market at an event in Nairobi.",
    body:["The launch event in Nairobi was attended by professionals from the technology, policy and financial services sectors.",
      "It marked the company's rebrand and formal entry into the African market as Pathways Technologies Ltd."]},
  "why-you-need-a-data-warehouse":{title:"Why Your Company Needs A Data Warehouse?",
    date:"February 3, 2023",categories:["Data Analytics","Data Visualization","Technology"],hero:"https://pathwaystechnologies.com/wp-content/uploads/2023/11/Business-Intelligence-Keyboard.jpg",
    excerpt:"The piece walks through what a data warehouse actually is and why the term shows up so often in industry conversation about getting more from company data.",
    body:["It starts from the assumption that most readers have heard the term without a clear sense of what a data warehouse does differently from the systems they already run.",
      "The explanation focuses on consolidation: pulling data scattered across systems into one place built for analysis rather than daily transactions."]},
  "saccos-in-kenya-ripe-for-disruption":{title:"Saccos In Kenya Are Ripe For Disruption",
    date:"January 22, 2023",categories:["Data Analytics","Technology"],hero:"https://pathwaystechnologies.com/wp-content/uploads/2023/11/Joel-Onditi-Pathways-International.jpeg",
    excerpt:"Kenyan Saccos grew total assets to over Ksh 442 billion by 2017, a scale the piece argues makes them ready for data-driven disruption.",
    body:["The piece cites the sector's growth, deposit-taking Saccos' total assets rose 12.4% in a single year to Ksh 442.27 billion, with total loans climbing to Ksh 331.2 billion, as evidence of how much is now at stake in how well Saccos manage their data.",
      "Scale without matching analytics capability is the piece's central tension: fast asset growth outpacing the reporting and decision-making tools built to manage it."]},
  "bi-goes-live-kenya-bankers-sacco":{title:"BI Goes Live At Kenya Bankers' Sacco Ltd",
    date:"February 27, 2021",categories:["Data Analytics","Organization"],hero:"https://pathwaystechnologies.com/wp-content/uploads/2023/11/Kenya-Bankers-Goes-Live.jpeg",
    excerpt:"Kenya Bankers' Sacco Ltd went live with a business intelligence solution, reflecting the piece's argument that data has become critical to organizational survival, not just advantage.",
    body:["The announcement marks Kenya Bankers' Sacco Ltd's business intelligence solution going live, an early step in what became a longer analytics relationship with Pathways Technologies, later detailed in Pathways' Kenya Bankers Sacco case study.",
      "It reflects the same argument Pathways makes elsewhere: that for financial cooperatives, having the data is no longer enough without the tools to act on it in time."]},
  "do-ngos-need-business-intelligence":{title:"Do NGOs Really Need Business Intelligence?",
    date:"February 3, 2021",categories:["Data Analytics","Organization"],hero:"https://pathwaystechnologies.com/wp-content/uploads/2023/11/NGOs.jpg",
    excerpt:"The piece answers its own question directly: yes, NGOs and non-profits need business intelligence and analytical tools just as much as commercial organizations do.",
    body:["It argues that being task-oriented and people-driven, the usual description of an NGO, does not exempt an organization from needing evidence to know whether its programmes are working.",
      "The piece treats business intelligence as a fit for NGOs specifically because donor reporting and programme evaluation both depend on being able to show, not just describe, impact."]},
  "how-big-data-benefits-your-organization":{title:"How Big Data Can Benefit Your Organization",
    date:"February 2, 2021",categories:["Data Analytics","Data Visualization","Organization"],hero:"https://pathwaystechnologies.com/wp-content/uploads/2023/11/Software-Developer.jpg",
    excerpt:"The piece defines Big Data for readers who are unfamiliar with the term, then argues that organizations not using it are leaving growth opportunities on the table.",
    body:["It starts from a basic definition, the combined tools and processes involved in working with data too large or fast-moving for conventional systems, before making the growth case for adopting it.",
      "The framing is practical rather than technical: Big Data matters because of what it lets an organization decide, not because of the infrastructure behind it."]},
  "the-value-of-historical-data":{title:"The Value Of Historical Data",
    date:"February 2, 2021",categories:["Data","Data Analytics","Data Visualization"],hero:"https://pathwaystechnologies.com/wp-content/uploads/2023/11/Historical-Data.jpg",
    excerpt:"The piece argues that without tracking where a business has been, it is hard to set realistic goals for where it should go next.",
    body:["It defines historical data plainly and then builds the case that trend lines, not single snapshots, are what let managers set credible targets.",
      "The underlying point is about discipline: historical data is only valuable if an organization actually keeps and revisits it, rather than starting each planning cycle from scratch."]},
  "datafest-top-5-takeaways":{title:"Top 5 Takeaways From DataFest: Exploring Innovation By Pathways Technologies",
    date:"June 16, 2019",categories:["Development","Technology"],hero:"https://pathwaystechnologies.com/wp-content/uploads/2019/11/Alister-Sundays-Datafest-Dashboard-Demo.jpg",
    excerpt:"Effective data visualization was a central theme at DataFest, the piece's main takeaway being that businesses need it to understand their own data and act on it.",
    body:["DataFest brought together Pathways Technologies and its network to explore what better data visualization and decision-making tools look like in practice.",
      "The event is also referenced elsewhere in Pathways' materials through its 'We're Data-Driven' branded booth photography, tying the internal culture to the same visualization theme."]},
  "power-of-bi-and-data-analytics":{title:"The Power Of Business Intelligence And Data Analytics For Organizations",
    date:"April 11, 2017",categories:["Technology"],hero:"https://pathwaystechnologies.com/wp-content/uploads/2017/04/data-training.jpg",
    excerpt:"Organizations that put business intelligence and data analytics to work are better positioned to seize opportunities, manage risk and sustain growth, the piece argues.",
    body:["It makes the broad case for BI and analytics as tools for seizing opportunity and managing risk, rather than treating them as reporting overhead.",
      "The framing is consistent with Pathways' later, more specific writing on the same theme: analytics only pays off once it is built into how decisions actually get made."]}
};
const BLOG_LIST=["centenary-bank-malawi","pathways-ouk-partnership","giz-credit-scoring-launch","google-cloud-partner-advantage",
  "microsoft-education-training-partner","jitume-program-data-analytics","isuzu-east-africa-audit-bi",
  "absa-bank-kenya-data-driven-success","ai-mental-health-guided-conversation","agriculture-digital-tools-giz-kalro",
  "jitume-training-initiative-launch","hr-managers-data-analytics","digital-transformation-maze","intuition-to-data-driven-decisions",
  "importance-of-data-visualization","ai-transforming-banking","venturelift-africa-partnership","award-best-solutions-provider-africa",
  "ceo-launch-speech-2023","opens-doors-in-africa","why-you-need-a-data-warehouse","saccos-in-kenya-ripe-for-disruption",
  "bi-goes-live-kenya-bankers-sacco","do-ngos-need-business-intelligence","how-big-data-benefits-your-organization",
  "the-value-of-historical-data","datafest-top-5-takeaways","power-of-bi-and-data-analytics"];

function BlogPostApp(){
  const {Header,PtFooter,Section,SlotFigure,ClosingCta,Frame}=window;
  const { Badge } = window.SearchableDesignSystem_29e52a;
  const d=BLOG_POSTS[window.PT_BLOG_SLUG];
  if(!d)return <div style={{padding:60}}>Unknown post.</div>;
  return <><Header/><main id="main" data-screen-label={d.title}>
    <Frame bg="var(--ink-700)"><div style={{padding:"88px 0 56px",maxWidth:820}}>
      <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:20}}>
        {d.categories.map(c=><Badge key={c} tone="accent" style={{color:"var(--pt-cat-ink)"}}>{c}</Badge>)}</div>
      <h1 style={{fontSize:"clamp(28px,4vw,42px)",fontWeight:700,color:"#FFFFFF",lineHeight:1.2,margin:0}}>{d.title}</h1>
      <div style={{color:"#EC8425",fontSize:14,marginTop:18}}>{d.date}</div>
      <p style={{color:"rgba(255,255,255,.82)",fontSize:17,marginTop:22,maxWidth:700,lineHeight:1.6}}>{d.excerpt}</p>
    </div></Frame>
    <Section index="01" label="Insights" right="Full Story">
      <div style={{maxWidth:760}}>
        <SlotFigure id={"blog-"+window.PT_BLOG_SLUG} src={d.hero} caption={"Photography: "+d.title} ratio="16 / 7"/>
        <div style={{marginTop:32,display:"grid",gap:20}}>
          {d.body.map((p,i)=><p key={i} style={{fontSize:17,color:"var(--text-secondary)",lineHeight:1.75,margin:0}}>{window.ptMd?ptMd(p):p}</p>)}
        </div>
      </div>
    </Section>
    <ClosingCta title="Want The Detail Behind A Story Like This?" secondary={["See All Insights","Insights.html"]}>
      Tell us what you are working on. We will tell you within a week whether it is a two-week discovery or a straight build.</ClosingCta>
    <PtFooter/></main></>;
}

function InsightsIndex(){
  const {Header,PtFooter,Section,PageHero,ClosingCta,Icon}=window;
  const { Card, Badge } = window.SearchableDesignSystem_29e52a;
  return <><Header/><main id="main" data-screen-label="Insights">
    <PageHero eyebrow="Insights" lead="Field Notes And" rest="Company News."
      intro="Partnerships, launches and the odd war story from the teams doing the delivery."
      meta={[["Posts","28"],["Categories","10"],["Cadence","Monthly"]]}
      secondary={["See All Resources","Resources.html"]}/>
    <Section index="01" label="Insights" right="Latest First">
      <div style={{display:"grid",gap:20}}>
        {BLOG_LIST.map(slug=>{const d=BLOG_POSTS[slug];return <Card key={slug} hover padding={0}>
          <a href={window.ptHref?ptHref("blog",slug):"blog-"+slug+".html"} style={{textDecoration:"none",color:"inherit",display:"grid",
            gridTemplateColumns:d.hero?"minmax(0,200px) minmax(0,1fr) auto":"minmax(0,1fr) auto",alignItems:"stretch",gap:0}}>
            {d.hero&&<div style={{alignSelf:"stretch",overflow:"hidden",background:d.thumb?"#FFFFFF":"var(--bg-muted)",margin:"16px 8px 16px 16px",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <img src={d.thumb||d.hero} alt="" style={{width:"100%",height:"100%",objectFit:d.thumb?"contain":"cover",display:"block",borderRadius:"var(--radius-md)"}}/></div>}
            <div style={{padding:"24px 30px 24px 18px"}}>
              <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:10}}>
                {d.categories.map(c=><Badge key={c} tone="neutral">{c}</Badge>)}</div>
              <h2 style={{fontSize:19,margin:"0 0 8px",fontWeight:"var(--weight-medium)",lineHeight:1.35}}>{d.title}</h2>
              <p style={{fontSize:"var(--text-sm)",color:"var(--text-secondary)",margin:0,maxWidth:600}}>{d.excerpt}</p></div>
            <div style={{padding:"24px 30px",textAlign:"right"}}>
              <div style={{fontSize:12,color:"var(--text-muted)"}}>{d.date}</div>
              <span style={{display:"inline-flex",marginTop:12,color:"var(--secondary-text)"}}><Icon name="arrow-right" size={18}/></span></div>
          </a></Card>;})}
      </div>
    </Section>
    <ClosingCta title="Want To Work With Us Next?" secondary={["See Our Solutions","Solutions.html"]}>
      Tell us what you are working on. We will tell you within a week whether it is a two-week discovery or a straight build.</ClosingCta>
    <PtFooter/></main></>;
}
Object.assign(window,{BlogPostApp,InsightsIndex,BLOG_POSTS});
