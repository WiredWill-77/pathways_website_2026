/* Shared content blocks used by the Services and Solutions pages.
   Each page composes a different subset so no two pages read the same below the fold. */
const PRODUCT_BLURB={
  "Insight Grid":"A governed analytics workspace where every team works from the same definitions, sources and refresh schedule.",
  "P-Score":"Performance scoring and benchmarking that turns portfolio, branch or supplier data into one comparable number.",
  "eVoucher":"Issue, redeem and reconcile digital vouchers at national scale, with a full audit trail on every transaction."};

function SlotFigure({id,caption,ratio="16 / 7",height,showCaption=true,fill=false,src,credit}){
  const cred=credit!==undefined?credit:(src&&/(^|\.)unsplash\.com$/i.test(new URL(src,location.href).hostname||"")?"Photo: Unsplash":undefined);
  return <figure style={{margin:0,minWidth:0,alignSelf:fill?"stretch":undefined,display:"flex",flexDirection:"column"}}>
    <div style={{position:"relative",width:"100%",aspectRatio:(height||fill)?undefined:ratio,height,
      minHeight:fill?280:undefined,flex:fill?"1 1 auto":undefined,
      border:"1px solid var(--grid-line)",borderRadius:"var(--radius-md)",overflow:"hidden",background:"var(--bg-muted)"}}>
      <div style={{position:"absolute",inset:0}}>
        <image-slot id={id} shape="rect" placeholder="Drop image" src={src}
          credit={cred||undefined} credit-href={cred?"https://unsplash.com/":undefined}></image-slot></div></div>
    {showCaption&&<figcaption style={{fontSize:"var(--text-xs)",color:"var(--text-muted)",marginTop:10}}>{caption}</figcaption>}
  </figure>;
}

function StatBand({stats,tone="light"}){
  const dark=tone==="dark";
  const twoCol=stats.length===4;
  return <div className={"pt-statband"+(dark?" pt-statband-dark":"")} style={{display:"flex",flexWrap:"wrap",gap:0,border:"1px solid "+(dark?"rgba(255,255,255,.14)":"var(--grid-line)"),
    borderRadius:"var(--radius-md)",background:dark?"var(--ink-700)":"var(--stone-0)",overflow:"hidden"}}>
    {stats.map(([k,v],i)=><div key={k} style={{flex:"1 1 180px",padding:"22px 26px",
      borderLeft:(twoCol?i%2!==0:!!i)?"1px solid "+(dark?"rgba(255,255,255,.14)":"var(--grid-line)"):"none",
      borderTop:(twoCol&&i>=2)?"1px solid "+(dark?"rgba(255,255,255,.14)":"var(--grid-line)"):"none"}}>
      <div style={{fontSize:34,fontWeight:600,letterSpacing:"-0.03em",color:dark?"#FFFFFF":"var(--primary)"}}>{v}</div>
      <div style={{fontSize:12.5,color:dark?"rgba(255,255,255,.68)":"var(--text-muted)",marginTop:4}}>{k}</div></div>)}
  </div>;
}

function DashedGrid({items,cols=2,numbered=true}){
  return <div className={cols===3?"pt-3col":"pt-2col"} style={{display:"grid",
    gridTemplateColumns:`repeat(${cols},minmax(0,1fr))`,border:"1px dashed var(--border-hairline)"}}>
    {items.map(([t,x],i)=><div key={t} style={{padding:"28px 30px",
      borderRight:(i+1)%cols?"1px dashed var(--border-hairline)":"none",
      borderTop:i>=cols?"1px dashed var(--border-hairline)":"none"}}>
      {numbered&&<div style={{fontSize:"var(--text-xs)",color:"var(--text-muted)",letterSpacing:"var(--tracking-eyebrow)"}}>
        [{String(i+1).padStart(2,"0")}]</div>}
      <div style={{fontSize:18,fontWeight:"var(--weight-medium)",margin:"10px 0 8px"}}>{t}</div>
      <p style={{fontSize:"var(--text-sm)",color:"var(--text-secondary)",margin:0}}>{x}</p></div>)}
  </div>;
}

function IconCards({items,cols=3,pad=28,stretch=false}){
  const {Icon}=window;const { Card } = window.SearchableDesignSystem_29e52a;
  return <div className={cols===3?"pt-3col":"pt-2col"} style={{display:"grid",
    gridTemplateColumns:`repeat(${cols},minmax(0,1fr))`,gap:24,height:stretch?"100%":undefined}}>
    {items.map(([ic,t,x])=><Card key={t} padding={pad} style={stretch?{display:"flex",flexDirection:"column",justifyContent:"center"}:undefined}>
      <span style={{color:"var(--secondary-text)",display:"inline-flex",marginBottom:14}}><Icon name={ic} size={22}/></span>
      <div style={{fontSize:18,fontWeight:"var(--weight-medium)",marginBottom:8}}>{t}</div>
      <p style={{fontSize:"var(--text-sm)",color:"var(--text-secondary)",margin:0}}>{x}</p></Card>)}
  </div>;
}

/* Horizontal stepper with a connecting rule. */
function Stepper({steps}){
  return <div className="pt-3col" style={{display:"grid",gridTemplateColumns:`repeat(${steps.length},minmax(0,1fr))`,gap:20}}>
    {steps.map(([k,t,x],i)=><div key={t} style={{position:"relative",paddingTop:26}}>
      <span style={{position:"absolute",top:0,left:0,right:0,height:1,background:"var(--grid-line)"}}/>
      <span style={{position:"absolute",top:-5,left:0,width:11,height:11,borderRadius:99,
        background:i===0?"var(--primary)":"var(--secondary-text)"}}/>
      <div style={{fontSize:"var(--text-xs)",letterSpacing:"var(--tracking-eyebrow)",textTransform:"uppercase",
        color:"var(--text-muted)"}}>{k}</div>
      <div style={{fontSize:17,fontWeight:"var(--weight-medium)",margin:"8px 0 8px"}}>{t}</div>
      <p style={{fontSize:"var(--text-sm)",color:"var(--text-secondary)",margin:0}}>{x}</p></div>)}
  </div>;
}

/* Vertical numbered rail. */
function Rail({items}){
  return <div style={{display:"grid",gap:0}}>
    {items.map(([t,x],i)=><div key={t} style={{display:"grid",gridTemplateColumns:"64px minmax(0,1fr)",gap:20,
      padding:"24px 0",borderTop:"1px solid var(--grid-line)"}}>
      <div style={{fontSize:26,fontWeight:600,color:"var(--primary)",letterSpacing:"-0.03em",lineHeight:1}}>
        {String(i+1).padStart(2,"0")}</div>
      <div><div style={{fontSize:19,fontWeight:"var(--weight-medium)",marginBottom:8}}>{t}</div>
        <p style={{fontSize:15,color:"var(--text-secondary)",margin:0,maxWidth:640,lineHeight:1.7}}>{x}</p></div></div>)}
  </div>;
}

function CheckRows({items,cols=2}){
  const {Icon}=window;
  return <div className="pt-2col pt-checkrows" style={{display:"grid",gridTemplateColumns:`repeat(${cols},minmax(0,1fr))`,gap:12}}>
    {items.map(x=><div key={x} style={{display:"flex",gap:11,alignItems:"center",fontSize:15,padding:"14px 16px",
      border:"1px solid var(--secondary-border)",borderRadius:"var(--radius-sm)",background:"var(--bg-blue-soft)"}}>
      <span style={{color:"var(--secondary-text)",display:"inline-flex"}}><Icon name="check" size={16}/></span>{x}</div>)}
  </div>;
}

function Chips({items}){
  return <div className="pt-chips" style={{display:"flex",flexWrap:"wrap",gap:8}}>
    {items.map(c=><span key={c} className="pt-chip" style={{display:"inline-flex",alignItems:"center",height:34,padding:"0 14px",
      borderRadius:"var(--radius-pill)",border:"1px solid var(--secondary-border)",fontSize:13.5,
      color:"var(--secondary-text)",background:"var(--secondary-soft)"}}>{c}</span>)}
  </div>;
}

/* Two-column table with a hairline body, good for rate cards, curricula, SLAs. */
function DataTable({head,rows}){
  return <div className="pt-scrollx" style={{border:"1px solid var(--grid-line)",borderRadius:"var(--radius-md)",
    background:"var(--stone-0)"}}><div>
    <div style={{display:"grid",gridTemplateColumns:`repeat(${head.length},minmax(0,1fr))`,
      background:"var(--bg-muted)",padding:"14px 22px",gap:16}}>
      {head.map(h=><div key={h} style={{fontSize:"var(--text-xs)",letterSpacing:"var(--tracking-eyebrow)",
        textTransform:"uppercase",color:"var(--text-muted)"}}>{h}</div>)}</div>
    {rows.map((r,i)=><div key={r[0]} style={{display:"grid",
      gridTemplateColumns:`repeat(${head.length},minmax(0,1fr))`,gap:16,padding:"18px 22px",
      borderTop:"1px solid var(--grid-line)",alignItems:"center"}}>
      {r.map((c,j)=><div key={j} style={{fontSize:j?"var(--text-sm)":15,
        fontWeight:j?400:"var(--weight-medium)",color:j?"var(--text-secondary)":"var(--text-primary)"}}>{c}</div>)}
    </div>)}
  </div></div>;
}

/* Full-bleed dark quote strip. */
function QuoteBand({quote,name,role}){
  return <div className="pt-quote" style={{background:"#1B87C9",padding:"64px 40px"}}>
    <div style={{maxWidth:900,margin:"0 auto"}}>
      <p style={{color:"#FFFFFF",fontSize:"clamp(20px,2.1vw,28px)",lineHeight:1.5,margin:0,fontWeight:400}}>“{quote}”</p>
      <div style={{marginTop:22,fontSize:"var(--text-sm)",color:"rgba(255,255,255,.82)"}}>{name} · {role}</div></div></div>;
}

/* Left rail of labels against a stacked right column. */
function SplitList({label,items}){
  return <div className="pt-2col" style={{display:"grid",gridTemplateColumns:"0.8fr 1.2fr",gap:40,alignItems:"start"}}>
    <div className="pt-sticky" style={{position:"sticky",top:110}}>
      <div style={{fontSize:"var(--text-eyebrow)",letterSpacing:"var(--tracking-eyebrow)",textTransform:"uppercase",
        color:"var(--text-muted)",marginBottom:16}}>{label}</div>
      <div style={{display:"grid",gap:10}}>
        {items.map(([t])=><div key={t} style={{fontSize:15,color:"var(--text-secondary)"}}>{t}</div>)}</div></div>
    <div style={{display:"grid",gap:0}}>
      {items.map(([t,x],i)=><div key={t} style={{padding:"22px 0",borderTop:i?"1px solid var(--grid-line)":"none"}}>
        <div style={{fontSize:19,fontWeight:"var(--weight-medium)",marginBottom:8}}>{t}</div>
        <p style={{fontSize:15,color:"var(--text-secondary)",margin:0,lineHeight:1.7}}>{x}</p></div>)}</div>
  </div>;
}

function ProductStrip({names}){
  const {Icon}=window;
  const { Card, Badge } = window.SearchableDesignSystem_29e52a;
  return <div className="pt-2col" style={{display:"grid",gridTemplateColumns:names.length>1?"1fr 1fr":"1fr",gap:24}}>
    {names.map(n=><Card key={n} hover padding={28}>
      <Badge tone="accent">Product</Badge>
      <h3 style={{fontSize:20,margin:"18px 0 10px",fontWeight:"var(--weight-medium)"}}>{n}</h3>
      <p style={{fontSize:"var(--text-sm)",color:"var(--text-secondary)",lineHeight:1.65}}>{PRODUCT_BLURB[n]}</p>
      <a href="Pathways Landing Page.html" style={{display:"inline-flex",alignItems:"center",gap:8,fontSize:14,
        textDecoration:"none",color:"var(--secondary-text)"}}>Explore {n}<Icon name="arrow-right" size={15}/></a>
    </Card>)}</div>;
}

function PageHero({eyebrow,lead,rest,intro,meta,img,ctaLabel="Book A Demo",ctaHref="Contact Us.html",secondary=["See All Services","Pathways Landing Page.html"],heroStack,ctaStyle,ctaClass}){
  const {PtButton,Frame}=window;
  const { TwoToneHeading } = window.SearchableDesignSystem_29e52a;
  if(img)window.PT_HERO_PHOTO=img;
  return <Frame bg="transparent" className="pt-hero">
    <div style={{padding:"88px 0 72px",maxWidth:880}}>
      <span style={{display:"inline-flex",alignItems:"center",height:28,padding:"0 12px",borderRadius:"var(--radius-pill)",
        border:"1px solid rgba(255,255,255,.35)",color:"#FFFFFF",fontSize:12}}>{typeof eyebrow==="string"&&eyebrow.includes(" · ")
        ?eyebrow.split(" · ").map((part,i,arr)=><React.Fragment key={i}>{part}{i<arr.length-1&&<span style={{color:"#ec8425",fontWeight:700,fontSize:15,padding:"0 7px"}}>·</span>}</React.Fragment>)
        :eyebrow}</span>
      <TwoToneHeading accent size="clamp(32px,3.4vw,48px)" maxWidth={860}
        style={{marginTop:20,fontWeight:700,color:"#FFFFFF",display:"flex",flexDirection:"column"}} lead={lead}
        rest={typeof rest==="string"&&/[.]+$/.test(rest)?<>{rest.replace(/[.]+$/,"")}<span style={{color:"#FFFFFF"}}>{rest.match(/[.]+$/)[0]}</span></>:rest}/>
      <p style={{color:"rgba(255,255,255,.78)",fontSize:17,marginTop:22,maxWidth:620}}>{intro}</p>
      <div className="pt-cta-actions" style={{display:"flex",gap:12,marginTop:30,flexWrap:"wrap"}}>
        <PtButton tone="primary" size="lg" arrow style={ctaStyle} className={ctaClass} onClick={()=>{location.href=ctaHref}}>{ctaLabel}</PtButton>
        <PtButton tone="ghost" onDark size="lg" onClick={()=>{location.href=secondary[1]}}>{secondary[0]}</PtButton></div>
      {meta&&<div className="pt-herometa" style={{display:"flex",gap:0,marginTop:40,flexWrap:"wrap",
        borderTop:"1px solid rgba(255,255,255,.16)",paddingTop:22}}>
        {meta.map(([k,v],i)=><div key={k} style={{padding:i?"0 26px":"0 26px 0 0",
          borderLeft:i?"1px solid rgba(255,255,255,.16)":"none"}}>
          <div style={{fontSize:22,fontWeight:600,color:"#FFFFFF",letterSpacing:"-0.02em"}}>{v}</div>
          <div style={{fontSize:12,color:"rgba(255,255,255,.68)",marginTop:2}}>{k}</div></div>)}</div>}
    </div></Frame>;
}

/* Pexels stock, African / African-American subjects working with technology. */
const px=(id,w=1200,h=760)=>`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces,center&w=${w}&h=${h}`;
const CTA_IMAGES=[
  [/discovery|assess|roadmap|strateg|two-week/i,{src:px(1181622),credit:"Photo: Christina Morillo / Pexels"}],
  [/cohort|train|skill|seat|team to|next one|session|academy|learn/i,{src:px(1181533),credit:"Photo: Christina Morillo / Pexels"}],
  [/report|analytic|dashboard|data|library|paper|subscribe|inbox|notes|piece/i,{src:px(19805876),credit:"Photo: Naboth Otieno / Pexels"}],
  [/partner|talk|tell us|gap|licens|contact/i,{src:px(1181618),credit:"Photo: Christina Morillo / Pexels"}],
  [/model|plan|shape|consolidat|corridor|line|service|decision|built for|fits|working/i,{src:px(1181649),credit:"Photo: Christina Morillo / Pexels"}]];
const ctaImage=t=>{const s=String(t||"");for(const [re,v] of CTA_IMAGES){if(re.test(s))return v}
  return {src:px(1181649),credit:"Photo: Christina Morillo / Pexels"}};

if(!document.getElementById("pt-ctaband-css")){const s=document.createElement("style");s.id="pt-ctaband-css";
  s.textContent=".pt-ctaband-img,.pt-ctaband-veil{width:64%}"+
  ".pt-ctaband-veil{background:linear-gradient(90deg,#1B87C9 0%,rgba(27,135,201,.88) 16%,rgba(27,135,201,.42) 46%,rgba(27,135,201,0) 82%)}"+
  ".pt-ctaband-copy h2,.pt-ctaband-copy p{max-width:min(520px,44%)}"+
  "@media (max-width:820px){.pt-ctaband-img,.pt-ctaband-veil{width:100%}"+
  ".pt-ctaband-veil{background:linear-gradient(90deg,#1B87C9 0%,rgba(27,135,201,.93) 32%,rgba(27,135,201,.66) 64%,rgba(27,135,201,.38) 100%)}"+
  ".pt-ctaband-copy h2,.pt-ctaband-copy p{max-width:520px}}";
  document.head.appendChild(s)}

function PtCtaBand({title,children,actions,imageId="cta-visual",image,credit}){
  const pick=image?{src:image,credit}:ctaImage(title);
  if(credit==="")pick.credit=undefined;
  return <section className="pt-ctaband" style={{padding:"96px 40px",position:"relative",overflow:"hidden",background:"#1B87C9",color:"#FFFFFF"}}>
    <div className="pt-ctaband-img" style={{position:"absolute",top:0,right:0,bottom:0}}>
      <image-slot id={imageId} shape="rect" placeholder="Drop image" src={pick.src}
        style={{width:"100%",height:"100%"}}></image-slot></div>
    <div className="pt-ctaband-veil" style={{position:"absolute",top:0,right:0,bottom:0,pointerEvents:"none"}}></div>
    <div className="pt-ctaband-copy" style={{position:"relative",maxWidth:"var(--container-max)",margin:"0 auto"}}>
      <h2 style={{fontSize:"var(--text-h2)",fontWeight:"var(--weight-bold)",color:"inherit",marginBottom:24}}>{title}</h2>
      <p style={{color:"rgba(255,255,255,.82)",marginBottom:36}}>{children}</p>
      <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>{actions}</div>
    </div>
  </section>;
}

function ClosingCta({title,children,secondary=["See Our Partners","Partnerships.html"],credit}){
  const {PtButton}=window;
  const imageId="cta-"+String(title).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");
  return <PtCtaBand title={title} imageId={imageId} credit={credit}
    actions={<span className="pt-cta-actions" style={{display:"flex",gap:12,flexWrap:"wrap"}}>
      <PtButton tone="primary" size="md" arrow onClick={()=>{location.href="Contact Us.html"}}>Book A Demo</PtButton>
      <PtButton tone="ghost" onDark size="md" onClick={()=>{location.href=secondary[1]}}>{secondary[0]}</PtButton></span>}>
    {children}</PtCtaBand>;
}
Object.assign(window,{SlotFigure,StatBand,DashedGrid,IconCards,Stepper,Rail,CheckRows,Chips,DataTable,
  QuoteBand,SplitList,ProductStrip,PageHero,ClosingCta,PtCtaBand,PRODUCT_BLURB});
