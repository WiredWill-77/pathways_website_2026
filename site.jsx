/* Shared page furniture: layout frames, section rail, trust bar, footer. */
const Icon=({name,size=22})=><i data-lucide={name} style={{width:size,height:size}}></i>;

/* Section headings read as two sentences: a bold statement, then a blue elaboration,
   with both full stops carried in the accent orange. Patched onto the design-system
   component so every page picks it up without touching call sites. */
(function(){
  const ds=window.SearchableDesignSystem_29e52a;
  if(!ds||ds.__ptHeading)return;
  const Base=ds.TwoToneHeading;
  const splitStop=s=>{
    if(typeof s!=="string")return [s,null];
    const m=s.match(/^([\s\S]*?)([.!?]+)$/);
    return m?[m[1],m[2]]:[s,null];
  };
  const stop={color:"var(--primary)"};
  /* restColor/stopColor let a heading opt out of the blue continuation + orange full stop. */
  function PtTwoTone({lead,rest,accent,style,restColor,stopColor,...rest2}){
    const [l,ls]=splitStop(lead),[r,rs]=splitStop(rest);
    const leadStop=stopColor?{color:stopColor}:(accent?{color:"var(--blue-500)"}:stop);
    const restStop=stopColor?{color:stopColor}:(accent?{color:"var(--stone-0)"}:stop);
    return <Base {...rest2} accent={accent}
      style={style}
      lead={<span style={{fontWeight:700}}>{l}
        {ls&&<span style={leadStop}>{ls}</span>}</span>}
      rest={<span style={{color:restColor||(accent?"var(--orange-500)":"var(--heading-rest,#1B87C9)"),fontWeight:700,whiteSpace:"pre-line"}}>
        {r}{rs&&<span style={restStop}>{rs}</span>}</span>}/>;
  }
  ds.TwoToneHeading=PtTwoTone;
  ds.__ptHeading=true;
})();

function Frame({children,bg="var(--stone-0)",style,className,id}){
  const hero=className&&className.indexOf("pt-hero")===0;
  const cls=hero&&(typeof window!=="undefined")&&window.PT_HERO_CENTER?className+" pt-hero-tall":className;
  return <div id={id} className={cls} style={{background:bg,display:"flex",justifyContent:"center",...style}}>
    {hero&&<HeroMedia/>}
    <div className="pt-frame" style={{width:"100%",maxWidth:1216,borderLeft:"1px solid var(--grid-line)",
      borderRight:"1px solid var(--grid-line)",padding:"0 48px",position:"relative",zIndex:2}}>{children}</div></div>;
}
function Section({index,label,right,children,bg,pad="56px 0 88px",id}){
  const { SectionMarker } = window.SearchableDesignSystem_29e52a;
  return <Frame bg={bg} id={id}>
    <div style={{paddingTop:48}}><div className="pt-secrail" style={{borderTop:"1px solid var(--secondary-border)",paddingTop:14}}>
      <SectionMarker index={index} label={label} right={right}/></div></div>
    <div style={{padding:pad}}>{children}</div></Frame>;
}

/* Hero background footage. Drop an analytics loop at uploads/hero-analytics.mp4 and set HERO_VIDEO to that path;
   until then the animated data-viz layer below stands in for the footage. */
const HERO_VIDEO=null;
function HeroMedia(){
  const photo=(typeof window!=="undefined")&&window.PT_HERO_PHOTO;
  return <><div className="pt-hero-media" aria-hidden="true">
    {photo
      ? <><img src={photo} alt="" style={{objectPosition:window.PT_HERO_POS||"center",transform:window.PT_HERO_FLIP?"scaleX(-1)":"none","--pt-hero-zoom-from":window.PT_HERO_ZOOM_FROM,"--pt-hero-zoom-to":window.PT_HERO_ZOOM_TO}}/><div className="pt-hero-tint"/><div className="pt-hero-grid" style={{opacity:.28}}/></>
      : HERO_VIDEO
      ? <video src={HERO_VIDEO} autoPlay muted loop playsInline/>
      : <><div className="pt-hero-sim"/><div className="pt-hero-grid"/>
          <div className="pt-hero-bars">{Array.from({length:34},(_,i)=>
            <i key={i} style={{animationDelay:(i*0.14).toFixed(2)+"s",animationDuration:(2.8+(i%5)*0.4).toFixed(1)+"s"}}/>)}</div>
          <div className="pt-hero-sweep"/></>}
  </div><div className={"pt-hero-veil"+(photo?(window.PT_HERO_CENTER?" pt-veil-center":" pt-veil-left"):"")} aria-hidden="true"/>
    {photo&&<div className="pt-hero-vignette" aria-hidden="true"/>}
    {photo&&/unsplash/i.test(photo)&&<a className="pt-hero-credit" href="https://unsplash.com/?utm_source=claude_design&utm_medium=referral"
      target="_blank" rel="noopener">Photo: Unsplash</a>}</>;
}

/* Placeholder credibility marks — confirm exact certifications and partner tiers before publishing. */
const TRUST_MARKS=["ISO 27001 Aligned","Kenya DPA 2019 Compliant","GDPR Ready","Cloud Partner Programme","Registered Training Provider"];
function TrustBar(){
  return <div style={{display:"flex",flexWrap:"wrap",gap:10,alignItems:"center"}}>
    {TRUST_MARKS.map(t=><span key={t} style={{display:"inline-flex",alignItems:"center",height:32,padding:"0 14px",
      borderRadius:"var(--radius-pill)",border:"1px solid var(--border-hairline)",fontSize:"var(--text-xs)",
      color:"var(--text-secondary)",whiteSpace:"nowrap"}}>{t}</span>)}</div>;
}

const FOOT_COLS=[
  {title:"Services",links:[["Data Science & AI","services-data-science.html"],["Analytics & BI","services-analytics-bi.html"],["Apps & Software Development","services-apps-software-development.html"],
    ["Data Skills Training","services-data-skills-training.html"],["Staff Augmentation","services-staff-augmentation.html"],["Digital Transformation Advisory","services-digital-transformation-advisory.html"]]},
  {title:"Solutions",links:[["Banking & Finance","solutions-banking-finance.html"],["Healthcare & Pharmaceuticals","solutions-healthcare-pharmaceuticals.html"],["Government & Public Sector","solutions-government-public-sector.html"],
    ["Manufacturing & Consumer Goods","solutions-manufacturing-consumer-goods.html"],["Transport & Logistics","solutions-transport-logistics.html"]]},
  {title:"Products",links:[["Insight Grid","#"],["P-Score","#"],["eVoucher","#"],["Pricing","Pricing.html"]]},
  {title:"Company",links:[["About Us","About Us.html"],["Partnerships","Partnerships.html"],["Contact Us","Contact Us.html"],
    ["Webinars","resources-webinars.html"],["Whitepapers","resources-whitepapers.html"],["Articles","resources-articles.html"],["Learn","resources-learn.html"],["Blog","resources-blog.html"],["Events","resources-events.html"]]}];

/* Clients and programme partners — logos supplied by the client. */
const CLIENTS=[
  ["Meta","uploads/Meta-Logo.png",34],
  ["Ministry of Information, Communications and the Digital Economy","uploads/MICDE Logo_2@3x.png",44],
  ["UNDP","uploads/undp-main-logo-vertical-united-nations-development-programme.png",70],
  ["Jubilee Insurance","uploads/Jubilee_Insurance_Company_Limited_logo.png",30],
  ["Ministry of Environment, Climate Change & Forestry","uploads/ministry-environment-dark.png",44],
  ["World Vision","uploads/World_Vision_logo_logotype.png",34]];

function ClientWall({label="Trusted By Governments, Insurers And Global NGOs",tone="light"}){
  const dark=tone==="dark";
  return <div style={{padding:"44px 0"}}>
    {label&&<div style={{fontSize:"var(--text-eyebrow)",letterSpacing:"var(--tracking-eyebrow)",
      textTransform:"uppercase",color:dark?"var(--text-muted)":"var(--text-secondary)",marginBottom:20}}>{label}</div>}
    <div className="pt-clientwall">
      {CLIENTS.map(([name,src,h])=><div key={name} className={"pt-plate"+(dark?"":" on-light")} style={{height:78}}>
        <img src={src} alt={name+" logo"} style={{maxHeight:h}}/></div>)}</div></div>;
}

function PtFooter(){
  const link={fontSize:"var(--text-sm)",color:"var(--text-on-dark-muted)",textDecoration:"none"};
  return <footer style={{background:"var(--bg-footer)",color:"var(--text-on-dark)",padding:"64px 40px 32px"}}>
    <div className="pt-footgrid" style={{maxWidth:1216,margin:"0 auto",display:"grid",
      gridTemplateColumns:"1.4fr repeat(4,1fr)",gap:40}}>
      <div><img src="uploads/Pathways Technologies Logo - White 1.png" alt="Pathways Technologies"
        style={{height:54,width:"auto",display:"block"}}/>
        <div style={{marginTop:20,fontSize:"var(--text-sm)",color:"var(--text-on-dark-muted)",lineHeight:1.8}}>
          <div>236 Owashika Road, Nairobi, Kenya</div>
          <div><a href="mailto:info@pathwaystechnologies.com" style={link}>info@pathwaystechnologies.com</a></div>
          <div><a href="tel:+254771616839" style={link}>+254 771 616 839</a></div></div></div>
      {FOOT_COLS.map(col=><div key={col.title}>
        <div style={{fontSize:"var(--text-sm)",fontWeight:"var(--weight-medium)",marginBottom:18,color:"#FFFFFF"}}>{col.title}</div>
        <div style={{display:"flex",flexDirection:"column",gap:14}}>
          {col.links.map(([l,href])=><a key={l} href={href} style={link}>{l}</a>)}</div></div>)}
    </div>
    <div style={{maxWidth:1216,margin:"40px auto 0",paddingTop:24,borderTop:"1px solid rgba(255,255,255,.10)",
      display:"flex",flexWrap:"wrap",gap:10,alignItems:"center"}}>
      {TRUST_MARKS.map(t=><span key={t} style={{display:"inline-flex",alignItems:"center",height:30,padding:"0 12px",
        borderRadius:"var(--radius-pill)",border:"1px solid rgba(255,255,255,.16)",fontSize:"var(--text-xs)",
        color:"var(--text-on-dark-muted)",whiteSpace:"nowrap"}}>{t}</span>)}</div>
    <div className="pt-legal" style={{maxWidth:1216,margin:"20px auto 0",paddingTop:20,
      borderTop:"1px solid rgba(255,255,255,.10)",display:"flex",justifyContent:"space-between",
      alignItems:"center",gap:16,flexWrap:"wrap",fontSize:"var(--text-xs)",color:"var(--text-on-dark-muted)"}}>
      <span>© 2026 Pathways Technologies Ltd. All Rights Reserved.</span>
      <span style={{display:"flex",gap:18,flexWrap:"wrap"}}>
        {["Privacy Policy","Terms Of Service","Data Protection Statement","Cookie Preferences"].map(l=>
          <a key={l} href="#" style={link}>{l}</a>)}</span></div>
  </footer>;
}
Object.assign(window,{Icon,Frame,Section,HeroMedia,TrustBar,PtFooter,TRUST_MARKS,ClientWall,CLIENTS});
