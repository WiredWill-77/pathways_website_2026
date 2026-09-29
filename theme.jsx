/* Motion guard: when the document is not being rendered (hidden tab, print, capture) the animation
   clock never advances, so any mount animation or transition would pin its START value and paint
   half the page invisible. html.pt-nomotion hard-lands every one of them. */
(function(){var d=document.documentElement;
  var sync=function(){d.classList.toggle("pt-nomotion",document.visibilityState!=="visible")};
  sync();document.addEventListener("visibilitychange",sync);
  addEventListener("beforeprint",function(){d.classList.add("pt-nomotion")});})();

/* Brand primitives shared by the header and page: logo, theme toggle, orange-led buttons. */
function PtLogo({height=34}){
  return <span style={{display:"inline-flex",alignItems:"center",lineHeight:0}}>
    <img className="pt-logo-light" src="uploads/Pathways Logo - HD 1 1.png" alt="Pathways Technologies" style={{height,width:"auto",display:"block"}}/>
    <img className="pt-logo-dark" src="uploads/Pathways Technologies Logo - White 1.png" alt="Pathways Technologies" style={{height,width:"auto",display:"none"}}/>
  </span>;
}

function useTheme(){
  const [theme,setTheme]=React.useState(()=>document.documentElement.dataset.theme||"light");
  React.useEffect(()=>{document.documentElement.dataset.theme=theme;
    try{localStorage.setItem("pt-theme",theme)}catch(e){}},[theme]);
  return [theme,setTheme];
}

function ThemeToggle(){
  const [theme,setTheme]=useTheme();
  const dark=theme==="dark";
  return <button onClick={()=>setTheme(dark?"light":"dark")} aria-label={dark?"Switch To Light Mode":"Switch To Dark Mode"}
    title={dark?"Light Mode":"Dark Mode"}
    style={{width:38,height:38,display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",
      borderRadius:"var(--radius-pill)",border:"1px solid var(--border-hairline)",background:"var(--stone-0)",
      color:"var(--text-secondary)",transition:"background var(--duration-base) var(--ease-standard)"}}>
    {dark
      ? <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4"/></svg>
      : <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>}
  </button>;
}

/* Orange-led primary / blue-supported secondary, wrapping the design-system Button. */
function PtButton({tone="primary",size="md",arrow=false,children,onDark=false,style,className,...rest}){
  const { Button } = window.SearchableDesignSystem_29e52a;
  const [h,setH]=React.useState(false);
  delete rest.onDark;
  const styles={
    primary:{background:h?"var(--primary-hover)":"var(--primary)",borderColor:h?"var(--primary-hover)":"var(--primary)",color:"var(--on-primary)"},
    secondary:{background:h?"var(--secondary-soft-hover)":"var(--secondary-soft)",borderColor:"var(--secondary-border)",color:"var(--secondary-text)"},
    ghost:onDark?{background:h?"rgba(255,255,255,.14)":"transparent",borderColor:"rgba(255,255,255,.55)",color:"#FFFFFF"}
                :{background:h?"var(--stone-100)":"var(--stone-0)",borderColor:"var(--border-hairline)",color:"var(--text-primary)"}
  }[tone];
  return <Button variant="outline" size={size} arrow={arrow} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    className={[className,"pt-btn-"+tone].filter(Boolean).join(" ")}
    style={{...styles,borderStyle:"solid",borderWidth:1,...style}} {...rest}>{children}</Button>;
}
Object.assign(window,{PtLogo,ThemeToggle,PtButton});
