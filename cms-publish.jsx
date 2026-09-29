/* Applies CMS content (localStorage "pt-cms-v1") to the page data objects before render.
   Only published records show; add ?preview=1 to include drafts. Load after data scripts, before the render call. */
(function(){
  let db=null;try{db=JSON.parse(localStorage.getItem("pt-cms-v1"))}catch(e){}
  const has=n=>{try{return eval("typeof "+n)!=="undefined"}catch(e){return false}};
  const get=n=>{try{return eval(n)}catch(e){return undefined}};
  const S=window.PT_STATIC={};const STATIC={"blog":["absa-bank-kenya-data-driven-success","agriculture-digital-tools-giz-kalro","ai-mental-health-guided-conversation","ai-transforming-banking","award-best-solutions-provider-africa","bi-goes-live-kenya-bankers-sacco","centenary-bank-malawi","ceo-launch-speech-2023","datafest-top-5-takeaways","digital-transformation-maze","do-ngos-need-business-intelligence","giz-credit-scoring-launch","google-cloud-partner-advantage","how-big-data-benefits-your-organization","hr-managers-data-analytics","importance-of-data-visualization","intuition-to-data-driven-decisions","isuzu-east-africa-audit-bi","jitume-program-data-analytics","jitume-training-initiative-launch","microsoft-education-training-partner","opens-doors-in-africa","pathways-ouk-partnership","power-of-bi-and-data-analytics","saccos-in-kenya-ripe-for-disruption","the-value-of-historical-data","venturelift-africa-partnership","why-you-need-a-data-warehouse"],"case-study":["copia-global","kenya-bankers-sacco","m-oriental-bank","port-sacco","red-cross-kenya","world-vision"],"whitepaper":["data-product-value","data-skills-gap","digital-disbursement","governed-warehouse","model-documentation"],"course":["applied-machine-learning","data-foundations","data-literacy-for-leaders","sql-modelling","visualisation-storytelling"]};
  Object.keys(STATIC).forEach(k=>S[k]=new Set(STATIC[k]));
  window.ptHref=(t,slug)=>S[t]&&S[t].has(slug)?t+"-"+slug+".html":t+".html?slug="+encodeURIComponent(slug);
  const e=React.createElement;
  const inl=s=>{const out=[],re=/(\*\*([^*]+)\*\*|\*([^*]+)\*|\[([^\]]+)\]\(([^)\s]+)\))/g;let m,i=0,k=0;
    while((m=re.exec(s))){if(m.index>i)out.push(s.slice(i,m.index));
      out.push(m[2]?e("strong",{key:k++,style:{color:"var(--text-primary)",fontWeight:600}},m[2]):m[3]?e("em",{key:k++},m[3]):e("a",{key:k++,href:m[5]},m[4]));i=re.lastIndex;}
    if(i<s.length)out.push(s.slice(i));return out;};
  window.ptMd=s=>{s=String(s||"");const h=s.match(/^#{1,6}\s+(.*)$/);if(h)return e("strong",{style:{color:"var(--text-primary)",fontWeight:600,fontSize:"1.08em"}},inl(h[1]));
    return e(React.Fragment,null,inl(s.replace(/^[-*]\s+/,"• ")));};
  if(!db||!db.collections)return;
  const preview=new URLSearchParams(location.search).get("preview")==="1";
  const C=db.collections,live=k=>Array.isArray(C[k])?C[k].filter(r=>preview||r.status==="published").map(r=>{
    const o={...r};["hero","thumb"].forEach(f=>{if(typeof o[f]==="string"&&o[f].startsWith("blob:"))o[f]="";});return o;}):null;
  const un=s=>String(s||"").split("\n").map(x=>x.trim()).filter(Boolean);
  const pairs=s=>un(s).map(l=>{const i=l.indexOf("|");return i<0?[l,""]:[l.slice(0,i).trim(),l.slice(i+1).trim()]});
  const fill=(obj,recs,map,tpl)=>{const old={...obj};Object.keys(obj).forEach(k=>delete obj[k]);
    recs.forEach(r=>{obj[r.slug]={...(old[r.slug]||tpl||{}),...map(r)}});};
  const order=(arr,recs)=>{const s=recs.map(r=>r.slug),kept=arr.filter(x=>s.includes(x)),fresh=s.filter(x=>!arr.includes(x));
    arr.splice(0,arr.length,...fresh,...kept);};
  let r;
  if(has("BLOG_POSTS")&&(r=live("insights"))){
    fill(get("BLOG_POSTS"),r,x=>({title:x.title,date:x.date,excerpt:x.excerpt,hero:x.hero||"",thumb:x.thumb||"",
      categories:String(x.categories||"").split(",").map(c=>c.trim()).filter(Boolean),body:un(x.body)}));
    if(has("BLOG_LIST"))order(get("BLOG_LIST"),r);}
  if(has("CASE_STUDIES")&&(r=live("cases"))){
    fill(get("CASE_STUDIES"),r,x=>({client:x.title,category:x.category,published:x.published,rest:x.rest,intro:x.intro,
      hero:x.hero,overview:x.overview,challenge:x.challenge,outcomes:un(x.outcomes),conclusion:x.conclusion}),get("CASE_STUDIES")[Object.keys(get("CASE_STUDIES"))[0]]);
    if(has("CASE_LIST"))order(get("CASE_LIST"),r);}
  if(has("WP_DOCS")&&(r=live("papers")))
    fill(get("WP_DOCS"),r,x=>({title:x.title,type:x.type,strap:x.strap,summary:x.summary,sections:pairs(x.sections),takeaways:un(x.takeaways),pdfUrl:x.pdfUrl||""}));
  if(has("COURSES")&&(r=live("courses"))){
    const cs=get("COURSES"),tpl=cs[Object.keys(cs)[0]];
    fill(cs,r,x=>({title:x.title,audience:x.audience,length:x.length,summary:x.summary,eyebrow:x.eyebrow,lead:x.lead,
      rest:x.rest,intro:x.intro,outline:pairs(x.outline),outcomes:un(x.outcomes)}),tpl);
    if(has("COURSE_ORDER")){const o=get("COURSE_ORDER"),s=r.map(x=>x.slug);
      o.splice(0,o.length,...o.filter(x=>s.includes(x)),...s.filter(x=>!o.includes(x)));}}
  const R=get("RESOURCES");
  const hero=(d,x)=>{if(!d||!x)return;Object.assign(d,{name:x.title||d.name,eyebrow:x.eyebrow,lead:x.lead,rest:x.rest,
    intro:x.intro,hero:x.hero||d.hero});const m=pairs(x.metrics);if(m.length)d.meta=m;};
  if(R){
    if(R.webinars&&(r=live("webinars"))){R.webinars.upcoming=r.map(x=>[x.date,x.session,x.covered,x.where]);
      const WD=get("WEBINAR_DETAILS");if(WD)r.forEach(x=>{const k=String(x.session||"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),n={...(WD[k]||{})};
        if(x.length)n.length=x.length;if(x.hero)n.hero=x.hero;const ab=un(x.about),le=un(x.learn),sp=pairs(x.speakers);
        if(ab.length)n.about=ab;if(le.length)n.learn=le;if(sp.length)n.speakers=sp;WD[k]=n;});}
    if(R.articles&&(r=live("articles")))R.articles.featured=r.map(x=>[x.title,x.category,x.excerpt]);
    if(R.events&&(r=live("events"))){R.events.schedule=r.map(x=>[x.date,x.name,x.city,x.format]);
      const ED=get("EVENT_DETAILS");if(ED)r.forEach(x=>{const k=String(x.name||"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),o=ED[k]||{},n={...o};
        if(x.time)n.time=x.time;if(x.venue)n.venue=x.venue;if(x.summary)n.summary=x.summary;if(x.hero)n.hero=x.hero;
        const ab=un(x.about),ag=pairs(x.agenda),au=un(x.audience);if(ab.length)n.about=ab;if(ag.length)n.agenda=ag;if(au.length)n.audience=au;ED[k]=n;});}
    if(R.whitepapers&&(r=live("papers")))R.whitepapers.library=r.map(x=>{
      const o=(R.whitepapers.library||[]).find(l=>l[0]===x.title);
      return [x.title,x.type,o?o[2]:"4 pages",x.strap,window.ptHref("whitepaper",x.slug),x.pdfUrl||""];});
    if(R.learn&&(r=live("learn"))&&r[0])hero(R.learn,r[0]);}
  const SD=get("SERVICES_DATA");
  if(SD&&SD["data-skills-training"]&&(r=live("dataSkillsTraining"))&&r[0])hero(SD["data-skills-training"],r[0]);
})();
