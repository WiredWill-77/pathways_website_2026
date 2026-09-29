/* Printable four-page whitepaper (prototype: WhitepaperPdf in whitepaper-pdf.jsx inside the <doc-page>
   custom element from doc-page.js). Only the explicit-pagination, letter-size mode of doc-page is used,
   so that is all this reimplements: a desk background with one card per page on screen, and one
   full-bleed 8.5in × 11in sheet per page at print. */
import type { Whitepaper } from "@/types/whitepapers";
import s from "./WhitepaperDocument.module.css";

const LOGO_WHITE = "/uploads/Pathways Technologies Logo - White 1.png";
const LOGO = "/uploads/Pathways Logo - HD 1 1.png";

/* doc-page puts @page in <head> because it cannot live in a shadow root. Rendering it here keeps it
   on this route only. margin:0 leaves Chrome no margin box for its date/URL header. */
const PRINT_CSS =
  "@page{size:8.5in 11in;margin:0}" +
  "@media print{html,body{margin:0!important;padding:0!important;background:none!important;height:auto!important;overflow:visible!important}" +
  "*{-webkit-print-color-adjust:exact;print-color-adjust:exact}}";

function Head({ label }: { label: string }) {
  return (
    <div className={s.head}>
      <img src={LOGO} alt="" />
      <span>{label}</span>
    </div>
  );
}

const Foot = () => <div className={s.foot}>Pathways Technologies — pathwaystechnologies.com</div>;

export function WhitepaperDocument({ paper: d }: { paper: Whitepaper }) {
  return (
    <div className={s.body}>
      <style>{PRINT_CSS}</style>
      <div className={s.desk} data-screen-label="Document">
        <div className={s.sheet}>
          <section className={`${s.page} ${s.wpPage} ${s.cover}`}>
            <div>
              <img src={LOGO_WHITE} alt="Pathways Technologies" />
            </div>
            <div>
              <div className={s.eyebrow}>Whitepaper · {d.type}</div>
              <h1>{d.title}</h1>
              <p>{d.strap}</p>
            </div>
            <div className={s.meta}>
              <div>
                Type<b>{d.type}</b>
              </div>
              <div>
                Length<b>{d.length}</b>
              </div>
              <div>
                Published<b>{d.published}</b>
              </div>
            </div>
          </section>

          <section className={`${s.page} ${s.wpPage} ${s.inner}`}>
            <Head label="Page 2 of 4 · Summary" />
            <div className={s.h2}>Executive Summary</div>
            <p className={s.text}>{d.summary}</p>
            <div className={s.h2} style={{ fontSize: 20 }}>
              What Is Inside
            </div>
            {d.sections.map((sec, i) => (
              <div className={s.check} key={sec.title}>
                <b>{i + 1}</b>
                {sec.title}
              </div>
            ))}
            <div className={s.check}>
              <b>{d.sections.length + 1}</b>Recommendations
            </div>
            <Foot />
          </section>

          <section className={`${s.page} ${s.wpPage} ${s.inner}`}>
            <Head label="Page 3 of 4 · Findings" />
            {d.sections.map((sec) => (
              <div key={sec.title}>
                <div className={s.h3}>{sec.title}</div>
                <p className={s.text}>{sec.body}</p>
              </div>
            ))}
            <Foot />
          </section>

          <section className={`${s.page} ${s.wpPage} ${s.inner}`}>
            <Head label="Page 4 of 4 · Recommendations" />
            <div className={s.h2}>What To Do Next</div>
            {d.takeaways.map((t) => (
              <div className={s.check} key={t}>
                <b>✓</b>
                {t}
              </div>
            ))}
            <p className={s.text} style={{ marginTop: 26 }}>
              Pathways Technologies builds and runs the platforms behind this work across finance, humanitarian response, agriculture and the public sector. If you want this applied to your own
              estate, tell us what you are working with and we will tell you within a week whether it is a two-week discovery or a straight build.
            </p>
            <div className={s.contact}>
              <span>Talk to us about applying this.</span>
              <span>info@pathwaystechnologies.com</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
