
/** Colour logo on light surfaces, white logo in dark mode or over the dark hero (site.css swaps them). */
export function PtLogo({ height = 34 }: { height?: number }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", lineHeight: 0 }}>
      <img className="pt-logo-light" src="/uploads/Pathways Logo - HD 1 1.png" alt="Pathways Technologies" style={{ height, width: "auto", display: "block" }} />
      <img
        className="pt-logo-dark"
        src="/uploads/Pathways Technologies Logo - White 1.png"
        alt="Pathways Technologies"
        style={{ height, width: "auto", display: "none" }}
      />
    </span>
  );
}
