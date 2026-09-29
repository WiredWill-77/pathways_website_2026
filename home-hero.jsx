/* Homepage hero treatments. Four styles, switchable live via the picker in the corner;
   the choice persists in localStorage. Pick one and I will strip the rest. */
const HERO_COPY={
  lead:"Data, Applications And Skills, And The",
  rest:"Delivery To Make Them Count",
  intro:"Pathways Technologies helps organisations turn data into decisions: analytics platforms, custom software, and the teams and training to run them.",
  stats:[["48","Data Products Live"],["7","Countries Served"],["4.2B","Records Processed Monthly"],["1,900+","People Trained"]],
  photo:"https://images.unsplash.com/photo-1669127300649-940337f1487e?w=2000&q=80&auto=format&fit=crop"};

const HERO_STYLES=[
  ["cinematic","Cinematic","Centred type over a full-bleed skyline"],
  ["split","Editorial Split","Copy on an ink panel, photograph bleeding right"],
  ["framed","Framed Plate","Inset photograph, copy overlaid, stats on white"],
  ["band","Type First","Large type on ink, skyline as a band beneath"],
  ["product","Product Led","Light page, centred type, product screen beneath"]];

/* Partner marks shown under the hero proof line. */
const HERO_MARKS=[["Microsoft","uploads/Microsoft-Solutions-Partner-Logo-61a216d8.webp"],
  ["Google Cloud","uploads/Google-Cloud-Partner-wht.webp"],
  ["Automation Anywhere","uploads/automation-anywhere-logo-white-546dbc32.webp"],
  ["Infobip","uploads/Infobip Logo - White_1-4d993cd5.png"],
  ["Konza Technopolis","uploads/Konza-Logo-White.png"]];

function HeroActions({size="lg"}){
  const {PtButton}=window;
  return <div className="pt-cta-actions" style={{display:"flex",gap:12,flexWrap:"wrap"}}>
    <PtButton tone="primary" size={size} arrow onClick={()=>{location.href="Contact Us.html"}}>Book A Demo</PtButton>
    <PtButton tone="ghost" onDark size={size} onClick={()=>{location.href="Pricing.html"}}>See Pricing</PtButton></div>;
}
function HeroStats({tone="dark",center=false,cols=4}){
  const light=tone==="light";
  const line=light?"var(--grid-line)":"rgba(255,255,255,.16)";
  return <div className={"pt-herostats"+(center?" is-center":"")+(cols===2?" is-2":"")}
    style={{"--hs-line":line,gridTemplateColumns:"repeat("+cols+",minmax(0,1fr))",borderTopColor:line}}>
    {HERO_COPY.stats.map(([v,l])=><div key={l}>
      <div style={{fontSize:26,fontWeight:600,letterSpacing:"-0.02em",
        color:light?"var(--text-primary)":"#FFFFFF"}}>{v}</div>
      <div style={{fontSize:12.5,marginTop:2,color:light?"var(--text-muted)":"rgba(255,255,255,.68)"}}>{l}</div></div>)}
  </div>;
}

/* A, full-bleed skyline, centred type. */
function HeroCinematic(){
  const {Frame}=window;
  const { TwoToneHeading } = window.SearchableDesignSystem_29e52a;
  return <Frame bg="transparent" className="pt-hero">
    <div style={{padding:"104px 0 88px",textAlign:"center"}}>
      <TwoToneHeading accent align="center" size="clamp(38px,4.2vw,56px)" maxWidth={920}
        style={{fontWeight:700,color:"#FFFFFF"}} lead={HERO_COPY.lead} rest={HERO_COPY.rest}/>
      <p style={{maxWidth:580,margin:"26px auto 0",color:"rgba(255,255,255,.82)",fontSize:17}}>{HERO_COPY.intro}</p>
      <div style={{display:"flex",justifyContent:"center",marginTop:34}}><HeroActions/></div>
      <div style={{marginTop:48}}><HeroStats center/></div>
    </div></Frame>;
}

/* B, ink panel of copy beside a full-height photograph. */
function HeroSplit(){
  const { TwoToneHeading } = window.SearchableDesignSystem_29e52a;
  return <div className="pt-herosplit">
    <div className="pt-herosplit-copy">
      <div style={{maxWidth:560,marginLeft:"auto",padding:"84px 56px 78px 48px"}}>
        <span className="pt-eyebrow-rule">Data & AI, Delivered In Africa</span>
        <TwoToneHeading accent size="clamp(34px,3.4vw,50px)" maxWidth={520}
          style={{marginTop:20,fontWeight:700,color:"#FFFFFF"}} lead={HERO_COPY.lead} rest={HERO_COPY.rest}/>
        <p style={{color:"rgba(255,255,255,.78)",fontSize:17,marginTop:22,maxWidth:460}}>{HERO_COPY.intro}</p>
        <div style={{marginTop:32}}><HeroActions/></div>
        <div style={{marginTop:44}}><HeroStats cols={2}/></div>
      </div></div>
    <div className="pt-herosplit-media"><img src={HERO_COPY.photo} alt=""/>
      <span className="pt-herosplit-fade"/></div>
  </div>;
}

/* C, inset photographic plate, copy overlaid, stats sitting on the white page. */
function HeroFramed(){
  const {Frame}=window;
  const { TwoToneHeading } = window.SearchableDesignSystem_29e52a;
  return <Frame bg="var(--stone-0)">
    <div style={{padding:"36px 0 64px"}}>
      <div className="pt-heroplate">
        <img src={HERO_COPY.photo} alt=""/>
        <span className="pt-heroplate-scrim"/>
        <div className="pt-heroplate-copy">
          <span className="pt-eyebrow-rule">Data & AI, Delivered In Africa</span>
          <TwoToneHeading accent size="clamp(32px,3.4vw,48px)" maxWidth={720}
            style={{marginTop:18,fontWeight:700,color:"#FFFFFF"}} lead={HERO_COPY.lead} rest={HERO_COPY.rest}/>
          <p style={{color:"rgba(255,255,255,.84)",fontSize:16.5,marginTop:18,maxWidth:520}}>{HERO_COPY.intro}</p>
          <div style={{marginTop:28}}><HeroActions size="md"/></div>
        </div></div>
      <div style={{marginTop:40}}><HeroStats tone="light"/></div>
    </div></Frame>;
}

/* D, type first on ink, the skyline as a wide band beneath. */
function HeroBand(){
  const {Frame}=window;
  const { TwoToneHeading } = window.SearchableDesignSystem_29e52a;
  return <><div style={{background:"var(--ink-700)"}}>
    <Frame bg="transparent">
      <div style={{padding:"76px 0 56px",display:"grid",gridTemplateColumns:"minmax(0,1.25fr) minmax(0,0.75fr)",
        gap:48,alignItems:"end"}} className="pt-2col">
        <div><span className="pt-eyebrow-rule">Data & AI, Delivered In Africa</span>
          <TwoToneHeading accent size="clamp(36px,4vw,58px)" maxWidth={760}
            style={{marginTop:20,fontWeight:700,color:"#FFFFFF",lineHeight:1.03}}
            lead={HERO_COPY.lead} rest={HERO_COPY.rest}/></div>
        <div><p style={{color:"rgba(255,255,255,.78)",fontSize:16.5,margin:0}}>{HERO_COPY.intro}</p>
          <div style={{marginTop:26}}><HeroActions size="md"/></div></div>
      </div>
      <div style={{paddingBottom:44}}><HeroStats/></div>
    </Frame></div>
    <div className="pt-heroband"><img src={HERO_COPY.photo} alt=""/></div></>;
}

/* E, product-led: light page, centred type, browser-framed product screen with a demo cue. */
function HeroProduct(){
  const {Frame,Icon,PtButton,SectorDashboard}=window;
  const { TwoToneHeading } = window.SearchableDesignSystem_29e52a;
  const [tab,setTab]=React.useState("Banking & Finance");
  /* Three phases. "enter" holds the pre-entrance state and is only ever entered when the document
     is actually being rendered, a frozen clock (hidden tab, print, capture) would pin the start
     value forever and paint an empty hero. "settled" then hard-sets the resting state with no
     transition attached, so nothing downstream depends on a clock either. */
  const [phase,setPhase]=React.useState(()=>
    (typeof document!=="undefined"&&document.visibilityState==="visible")?"enter":"settled");
  React.useEffect(()=>{
    if(phase!=="enter")return;
    const r=requestAnimationFrame(()=>requestAnimationFrame(()=>setPhase("run")));
    return ()=>cancelAnimationFrame(r);
  },[phase]);
  React.useEffect(()=>{
    if(phase!=="run")return;
    const t=setTimeout(()=>setPhase("settled"),1800);
    return ()=>clearTimeout(t);
  },[phase]);
  const tabs=["Banking & Finance","Healthcare & Pharmaceuticals","Government & Public Sector","Transport & Logistics"];
  return <div className={"pt-herodark"+(phase==="enter"?" pt-enter":phase==="settled"?" pt-settled":"")}>
    <span className="pt-herodark-bg" style={{backgroundImage:'url("uploads/Data-Analytics-Background-Slider-1.webp")'}}/>
    <Frame bg="transparent">
    <div className="pt-heroprod is-dark">
      <span className="pt-eyebrow-rule">Data & AI, Delivered In Africa</span>
      <TwoToneHeading size="clamp(36px,4.4vw,58px)" maxWidth={700}
        restColor="rgba(255,255,255,.62)" stopColor="rgba(255,255,255,.62)"
        style={{fontWeight:700,lineHeight:1.06,margin:"18px 0 0",color:"#FFFFFF"}}
        lead="Analytics & Applications," rest={<>Proven In Your Numbers<span style={{color:"#ec8425"}}>.</span></>}/>
      <p className="pt-heroprod-lede">For leaders and data teams across Africa. Pathways closes the loop from raw
        source to decision, analytics platforms, custom software, and the people trained to run them.</p>
      <div className="pt-heroprod-cta">
        <PtButton tone="secondary" size="lg" onClick={()=>{location.href="Solutions.html"}}
          style={{background:"#1B87C9",borderColor:"#4EBAFC",color:"#FFFFFF"}}>Explore Solutions</PtButton>
        <PtButton tone="primary" size="lg" arrow onClick={()=>{location.href="Contact Us.html"}}>Book A Demo</PtButton></div>
      <p className="pt-heroprod-trial"><span className="tick"><Icon name="check" size={15}/></span>
        Two-week discovery · Fixed price · Costed plan from <strong>$4,800</strong></p>
      <div className="pt-heroprod-marks">
        <span>Your platforms, your data and your teams, connected by one partner.</span>
        <span className="marks">{HERO_MARKS.map(([n,src])=><img key={n} src={src} alt={n}/>)}</span></div>
      <div className="pt-browser">
        <div className="pt-browser-tabs">
          <span className="dots"><i/><i/><i/></span>
          {tabs.map(t=><button key={t} onClick={()=>setTab(t)} className={tab===t?"on":""}>{t.split(" ")[0]}</button>)}
        </div>
        <div className="pt-browser-url"><span className="lock"><Icon name="lock" size={11}/></span>
          app.pathways.co.ke/insight-grid</div>
        <div className="pt-browser-body"><SectorDashboard sector={{name:tab}} role={null}/></div>
      </div>
    </div></Frame></div>;
}

const HERO_VIEWS={cinematic:HeroCinematic,split:HeroSplit,framed:HeroFramed,band:HeroBand,product:HeroProduct};

function HomeHero({style="product"}){
  React.useEffect(()=>{if(window.lucide)lucide.createIcons();},[style]);
  const View=HERO_VIEWS[style]||HeroProduct;
  return <View/>;
}
Object.assign(window,{HomeHero,HERO_COPY});
