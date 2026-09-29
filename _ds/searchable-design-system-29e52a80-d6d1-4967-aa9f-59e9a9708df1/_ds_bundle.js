/* @ds-bundle: {"format":4,"namespace":"SearchableDesignSystem_29e52a","components":[{"name":"ComparisonTable","sourcePath":"components/content/ComparisonTable.jsx"},{"name":"CtaBand","sourcePath":"components/content/CtaBand.jsx"},{"name":"FaqItem","sourcePath":"components/content/FaqItem.jsx"},{"name":"FeatureCell","sourcePath":"components/content/FeatureCell.jsx"},{"name":"LogoWall","sourcePath":"components/content/LogoWall.jsx"},{"name":"NumberedFeatureCard","sourcePath":"components/content/NumberedFeatureCard.jsx"},{"name":"PromptChip","sourcePath":"components/content/PromptChip.jsx"},{"name":"ReportCard","sourcePath":"components/content/ReportCard.jsx"},{"name":"SectionMarker","sourcePath":"components/content/SectionMarker.jsx"},{"name":"SourceRankList","sourcePath":"components/content/SourceRankList.jsx"},{"name":"Testimonial","sourcePath":"components/content/Testimonial.jsx"},{"name":"TwoToneHeading","sourcePath":"components/content/TwoToneHeading.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconCircle","sourcePath":"components/core/IconCircle.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"EmailCaptureBar","sourcePath":"components/forms/EmailCaptureBar.jsx"},{"name":"TabBar","sourcePath":"components/forms/TabBar.jsx"},{"name":"TextInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"AnnouncementBar","sourcePath":"components/navigation/AnnouncementBar.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"MegaMenu","sourcePath":"components/navigation/MegaMenu.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteNav","sourcePath":"components/navigation/SiteNav.jsx"}],"sourceHashes":{"components/content/ComparisonTable.jsx":"412ad07e3e06","components/content/CtaBand.jsx":"e4f7f6166cbb","components/content/FaqItem.jsx":"ebf4b6020a2b","components/content/FeatureCell.jsx":"c3dea422cbb4","components/content/LogoWall.jsx":"9844d3412921","components/content/NumberedFeatureCard.jsx":"e0512315c10a","components/content/PromptChip.jsx":"04f77a7e70b2","components/content/ReportCard.jsx":"3a55b2f43273","components/content/SectionMarker.jsx":"dd9510226537","components/content/SourceRankList.jsx":"30ebf329f117","components/content/Testimonial.jsx":"9b126c98b55c","components/content/TwoToneHeading.jsx":"9d54389853aa","components/core/Badge.jsx":"55f05322a355","components/core/Button.jsx":"f016e9042c03","components/core/Card.jsx":"d2cba4898666","components/core/IconCircle.jsx":"4e156a09e849","components/core/Wordmark.jsx":"30f1d1eaed91","components/forms/EmailCaptureBar.jsx":"1a7459bc7ed6","components/forms/TabBar.jsx":"87b65ef160ac","components/forms/TextInput.jsx":"607a574b129d","components/navigation/AnnouncementBar.jsx":"23797d04be23","components/navigation/Breadcrumb.jsx":"0cf9a584891c","components/navigation/MegaMenu.jsx":"fbae1c2bfd43","components/navigation/SiteFooter.jsx":"d271f99f24cf","components/navigation/SiteNav.jsx":"0e37199077dc","ui_kits/marketing-site/AgenciesScreen.jsx":"3dc0b27b1b60","ui_kits/marketing-site/DataScreen.jsx":"d36cc030301f","ui_kits/marketing-site/HomeScreen.jsx":"d7cdaf62a5aa","ui_kits/marketing-site/shared.jsx":"088eb1c44fd8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SearchableDesignSystem_29e52a = window.SearchableDesignSystem_29e52a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/ComparisonTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ComparisonTable({
  columns = [],
  rows = [],
  style,
  ...rest
}) {
  const grid = `1.6fr repeat(${columns.length},1fr)`;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      background: "var(--stone-0)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: grid,
      background: "var(--bg-subtle)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 24px",
      fontSize: "var(--text-eyebrow)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Comparison"), columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      padding: "18px 24px",
      borderLeft: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-eyebrow)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 6
    }
  }, c.kicker), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: "var(--weight-medium)"
    }
  }, c.title), c.note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-secondary)",
      marginTop: 4
    }
  }, c.note)))), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.label,
    style: {
      display: "grid",
      gridTemplateColumns: grid,
      borderBottom: i === rows.length - 1 ? "none" : "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 24px",
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)"
    }
  }, r.label), r.values.map((v, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: {
      padding: "14px 24px",
      fontSize: "var(--text-sm)",
      borderLeft: "1px solid var(--border-hairline)",
      color: "var(--text-primary)"
    }
  }, v === true ? /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--success)",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })) : v === false ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--stone-400)"
    }
  }, "\u2014") : v)))));
}
Object.assign(__ds_scope, { ComparisonTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ComparisonTable.jsx", error: String((e && e.message) || e) }); }

// components/content/CtaBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CtaBand({
  title,
  children,
  actions,
  tone = "accent",
  style,
  ...rest
}) {
  const tones = {
    accent: {
      background: "var(--bg-accent)",
      color: "var(--text-on-accent)"
    },
    dark: {
      background: "var(--ink-800)",
      color: "var(--text-on-dark)"
    }
  };
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      padding: "96px 40px",
      position: "relative",
      overflow: "hidden",
      ...tones[tone],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--dot-grid-on-accent)",
      backgroundSize: "var(--dot-grid-size)",
      opacity: .5,
      maskImage: "linear-gradient(90deg,transparent 45%,#000 60%)",
      WebkitMaskImage: "linear-gradient(90deg,transparent 45%,#000 60%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-h2)",
      fontWeight: "var(--weight-bold)",
      color: "inherit",
      maxWidth: 520,
      marginBottom: 24
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 520,
      color: tone === "accent" ? "var(--text-on-accent-muted)" : "var(--text-on-dark-muted)",
      marginBottom: 36
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, actions)));
}
Object.assign(__ds_scope, { CtaBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CtaBand.jsx", error: String((e && e.message) || e) }); }

// components/content/FaqItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FaqItem({
  question,
  children,
  defaultOpen = false,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderBottom: "1px solid var(--border-hairline)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      padding: "20px 0",
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-body)",
      color: "var(--text-primary)",
      textAlign: "left"
    }
  }, question, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-muted)",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: "0 0 auto",
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform var(--duration-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 0 22px",
      fontSize: "var(--text-sm)",
      lineHeight: 1.7,
      color: "var(--text-secondary)",
      maxWidth: 720
    }
  }, children));
}
Object.assign(__ds_scope, { FaqItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FaqItem.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureCell.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FeatureCell({
  icon,
  title,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: "34px 40px 40px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--blue-500)",
      marginBottom: 34,
      display: "flex"
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: "var(--weight-medium)",
      letterSpacing: "-0.01em",
      marginBottom: 12
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      lineHeight: 1.65,
      color: "var(--text-secondary)",
      maxWidth: 340
    }
  }, children));
}
Object.assign(__ds_scope, { FeatureCell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureCell.jsx", error: String((e && e.message) || e) }); }

// components/content/LogoWall.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function LogoWall({
  logos = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 48,
      padding: "48px 0",
      opacity: .55,
      filter: "grayscale(1)",
      ...style
    }
  }, rest), logos.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontSize: 20,
      fontWeight: "var(--weight-medium)",
      letterSpacing: "-0.02em",
      color: "var(--text-primary)"
    }
  }, l)));
}
Object.assign(__ds_scope, { LogoWall });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/LogoWall.jsx", error: String((e && e.message) || e) }); }

// components/content/PromptChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PromptChip({
  children,
  meta,
  flag,
  muted = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      padding: "12px 16px",
      background: "var(--stone-0)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-sm)",
      boxShadow: "var(--shadow-card)",
      fontSize: "var(--text-sm)",
      opacity: muted ? .35 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      color: "var(--text-muted)",
      fontSize: "var(--text-xs)",
      whiteSpace: "nowrap"
    }
  }, flag, meta));
}
Object.assign(__ds_scope, { PromptChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PromptChip.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionMarker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionMarker({
  index = "01",
  label = "MONITOR",
  right = "SEE YOUR GROWTH",
  tone = "light",
  style,
  ...rest
}) {
  const color = tone === "dark" ? "rgba(255,255,255,.55)" : "var(--text-muted)";
  const t = {
    fontSize: "var(--text-eyebrow)",
    letterSpacing: "var(--tracking-eyebrow)",
    textTransform: "uppercase",
    color
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      ...t,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, index ? `[${index}] ` : "", label), right && /*#__PURE__*/React.createElement("span", null, "/ ", right));
}
Object.assign(__ds_scope, { SectionMarker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionMarker.jsx", error: String((e && e.message) || e) }); }

// components/content/SourceRankList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SourceRankList({
  title = "Sources",
  rows = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--stone-0)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-raised)",
      padding: "16px 20px 20px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)",
      marginBottom: 14
    }
  }, title, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.label,
    style: {
      display: "grid",
      gridTemplateColumns: "120px 1fr",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: "var(--text-sm)"
    }
  }, r.icon, r.label), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: "var(--radius-pill)",
      background: "var(--stone-100)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${r.value}%`,
      height: "100%",
      borderRadius: "var(--radius-pill)",
      background: "linear-gradient(90deg,var(--blue-500),var(--blue-300))"
    }
  }))))));
}
Object.assign(__ds_scope, { SourceRankList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SourceRankList.jsx", error: String((e && e.message) || e) }); }

// components/content/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Testimonial({
  logo,
  quote,
  name,
  role,
  portrait,
  features = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--bg-subtle)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: portrait ? "280px 1fr" : "1fr",
      gap: 48,
      padding: "56px 40px 40px"
    }
  }, portrait && /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: portrait,
    alt: name,
    style: {
      width: "100%",
      display: "block",
      filter: "grayscale(1)"
    }
  })), /*#__PURE__*/React.createElement("div", null, logo && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, logo), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontSize: 19,
      lineHeight: 1.65,
      letterSpacing: "-0.01em",
      maxWidth: 620
    }
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      fontSize: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: "var(--weight-medium)"
    }
  }, name, ","), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-secondary)"
    }
  }, role)))), features.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-hairline)",
      display: "grid",
      gridTemplateColumns: "280px 1fr",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 40px",
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)",
      borderRight: "1px solid var(--border-hairline)"
    }
  }, "Favourite features"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 40px",
      display: "flex",
      gap: 20,
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)"
    }
  }, features.map((x, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: x
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--stone-400)"
    }
  }, "|"), /*#__PURE__*/React.createElement("span", null, x))))));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/content/TwoToneHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TwoToneHeading({
  lead,
  rest,
  accent = false,
  size = "var(--text-h2)",
  align = "left",
  maxWidth = 900,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("h2", _extends({
    style: {
      fontSize: size,
      lineHeight: "var(--leading-heading)",
      letterSpacing: "var(--tracking-heading)",
      fontWeight: "var(--weight-medium)",
      textAlign: align,
      maxWidth,
      margin: align === "center" ? "0 auto" : 0,
      textWrap: "pretty",
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("span", null, lead), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: accent ? "var(--text-accent)" : "var(--text-muted)"
    }
  }, rest));
}
Object.assign(__ds_scope, { TwoToneHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TwoToneHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    background: "var(--stone-100)",
    color: "var(--text-secondary)",
    border: "1px solid transparent"
  },
  accent: {
    background: "var(--blue-100)",
    color: "var(--blue-600)",
    border: "1px solid transparent"
  },
  live: {
    background: "var(--stone-0)",
    color: "var(--success)",
    border: "1px solid var(--border-hairline)"
  },
  outline: {
    background: "transparent",
    color: "var(--text-secondary)",
    border: "1px solid var(--border-hairline)"
  },
  onDark: {
    background: "rgba(255,255,255,.10)",
    color: "var(--stone-0)",
    border: "1px solid transparent"
  }
};
function Badge({
  children,
  tone = "neutral",
  dot = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "4px 10px",
      borderRadius: "var(--radius-pill)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-medium)",
      lineHeight: 1.4,
      letterSpacing: "-0.005em",
      ...tones[tone],
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "var(--radius-pill)",
      background: "currentColor"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/NumberedFeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NumberedFeatureCard({
  step = "01",
  total = "05",
  title,
  description,
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: "32px 36px 40px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "neutral"
  }, step, " / ", total), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 26,
      margin: "22px 0 12px"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-body)",
      color: "var(--text-secondary)",
      maxWidth: 360,
      marginBottom: 28
    }
  }, description), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      fontSize: "var(--text-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: "var(--radius-pill)",
      background: "var(--stone-500)",
      flex: "0 0 auto"
    }
  }), i))));
}
Object.assign(__ds_scope, { NumberedFeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/NumberedFeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/content/ReportCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ReportCard({
  icon,
  title,
  children,
  live = true,
  linkLabel = "View report",
  href = "#",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: "28px 32px 26px",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      height: "100%",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "var(--radius-sm)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--bg-muted)"
    }
  }, icon), live && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "live",
    dot: true
  }, "Live")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: "var(--weight-medium)",
      letterSpacing: "-0.01em"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      lineHeight: 1.65,
      color: "var(--text-secondary)",
      flex: 1
    }
  }, children), /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontSize: "var(--text-sm)",
      color: "var(--text-primary)"
    }
  }, linkLabel, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 5 7 7-7 7"
  }))));
}
Object.assign(__ds_scope, { ReportCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ReportCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    height: 32,
    padFlat: "0 14px",
    padArrow: "0 6px 0 14px",
    font: 13,
    gap: 8
  },
  md: {
    height: 40,
    padFlat: "0 18px",
    padArrow: "0 8px 0 18px",
    font: 14,
    gap: 10
  },
  lg: {
    height: 48,
    padFlat: "0 24px",
    padArrow: "0 10px 0 24px",
    font: 15,
    gap: 12
  }
};
const variants = {
  accent: {
    background: "var(--blue-500)",
    color: "var(--stone-0)",
    border: "1px solid var(--blue-500)"
  },
  accentSoft: {
    background: "var(--blue-100)",
    color: "var(--blue-600)",
    border: "1px solid var(--blue-300)"
  },
  dark: {
    background: "var(--ink-800)",
    color: "var(--stone-0)",
    border: "1px solid var(--ink-800)"
  },
  outline: {
    background: "var(--stone-0)",
    color: "var(--text-primary)",
    border: "1px solid var(--border-hairline)"
  },
  onDark: {
    background: "transparent",
    color: "var(--stone-0)",
    border: "1px solid var(--border-on-dark)"
  },
  onAccent: {
    background: "transparent",
    color: "var(--stone-0)",
    border: "1px solid rgba(255,255,255,.45)"
  }
};
const hovers = {
  accent: {
    background: "var(--blue-600)",
    borderColor: "var(--blue-600)"
  },
  accentSoft: {
    background: "var(--blue-200)"
  },
  dark: {
    background: "var(--ink-700)",
    borderColor: "var(--ink-700)"
  },
  outline: {
    background: "var(--stone-100)"
  },
  onDark: {
    background: "rgba(255,255,255,.08)"
  },
  onAccent: {
    background: "rgba(255,255,255,.12)"
  }
};
function Button({
  children,
  variant = "accentSoft",
  size = "md",
  arrow = false,
  icon = null,
  disabled = false,
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = sizes[size] || sizes.md;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    height: s.height,
    padding: arrow ? s.padArrow : s.padFlat,
    borderRadius: "var(--radius-pill)",
    fontFamily: "var(--font-sans)",
    fontSize: s.font,
    fontWeight: "var(--weight-medium)",
    lineHeight: 1,
    letterSpacing: "-0.005em",
    whiteSpace: "nowrap",
    cursor: disabled ? "not-allowed" : "pointer",
    textDecoration: "none",
    opacity: disabled ? .45 : 1,
    transition: "background var(--duration-base) var(--ease-standard),border-color var(--duration-base) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)",
    transform: hover && !disabled ? "translateY(-1px)" : "none",
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...style
  };
  const arrowEl = arrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: s.height - 14,
      height: s.height - 14,
      borderRadius: "var(--radius-pill)",
      border: "1px solid currentColor",
      opacity: .85,
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 5 7 7-7 7"
  }))) : null;
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === "button" ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: base
  }, rest), icon, children, arrowEl);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  padding = 28,
  dashed = false,
  tone = "plain",
  dots = false,
  hover = false,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const tones = {
    plain: {
      background: "var(--stone-0)"
    },
    subtle: {
      background: "var(--bg-subtle)"
    },
    dark: {
      background: "var(--ink-700)",
      color: "var(--text-on-dark)",
      border: "1px solid rgba(255,255,255,.10)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      border: `1px ${dashed ? "dashed" : "solid"} var(--border-hairline)`,
      borderRadius: "var(--radius-md)",
      padding,
      boxShadow: hover && h ? "var(--shadow-raised)" : "var(--shadow-card)",
      transition: "box-shadow var(--duration-base) var(--ease-standard)",
      backgroundImage: dots ? "var(--dot-grid)" : "none",
      backgroundSize: dots ? "var(--dot-grid-size)" : "auto",
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconCircle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconCircle({
  children,
  size = 32,
  tone = "hairline",
  filled = false,
  style,
  ...rest
}) {
  const tones = {
    hairline: {
      border: "1px solid var(--border-hairline)",
      color: "var(--text-primary)",
      background: "var(--stone-0)"
    },
    accent: {
      border: "1px solid var(--blue-300)",
      color: "var(--blue-500)",
      background: "var(--blue-50)"
    },
    dark: {
      border: "1px solid var(--ink-800)",
      color: "var(--stone-0)",
      background: "var(--ink-800)"
    },
    onDark: {
      border: "1px solid var(--border-on-dark)",
      color: "var(--stone-0)",
      background: "transparent"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: "var(--radius-pill)",
      flex: "0 0 auto",
      transition: "var(--transition-base)",
      ...(filled ? tones.dark : tones[tone]),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconCircle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconCircle.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Wordmark({
  size = 22,
  tone = "ink",
  style,
  ...rest
}) {
  const color = tone === "light" ? "var(--stone-0)" : "var(--text-primary)";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "var(--font-sans)",
      fontSize: size,
      fontWeight: "var(--weight-medium)",
      letterSpacing: "-0.03em",
      color,
      lineHeight: 1,
      ...style
    }
  }, rest), "Searchable");
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/forms/EmailCaptureBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EmailCaptureBar({
  placeholder = "Enter your website (e.g., acme.com)",
  cta = "Get my free report",
  leftNote = "Trusted by 11,187+ businesses",
  rightNote = "Free report, no credit card required",
  onSubmit,
  style,
  ...rest
}) {
  const [v, setV] = React.useState("");
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: "100%",
      maxWidth: 520,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      background: "var(--stone-0)",
      borderRadius: "var(--radius-pill)",
      padding: 6,
      boxShadow: "var(--shadow-pop)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: "var(--radius-pill)",
      background: "var(--blue-200)",
      marginLeft: 12,
      flex: "0 0 auto"
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: v,
    onChange: e => setV(e.target.value),
    placeholder: placeholder,
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--text-primary)"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "dark",
    size: "md",
    onClick: () => onSubmit && onSubmit(v)
  }, cta)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 16,
      margin: "-18px 14px 0",
      padding: "22px 14px 8px",
      background: "var(--blue-700)",
      borderRadius: "0 0 var(--radius-md) var(--radius-md)",
      position: "relative",
      zIndex: -1,
      fontSize: "var(--text-xs)",
      color: "var(--text-on-accent-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, leftNote), /*#__PURE__*/React.createElement("span", null, rightNote)));
}
Object.assign(__ds_scope, { EmailCaptureBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/EmailCaptureBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/TabBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TabBar({
  tabs = [],
  active,
  onChange = () => {},
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${tabs.length},1fr)`,
      borderBottom: "1px solid var(--border-hairline)",
      ...style
    }
  }, rest), tabs.map(t => {
    const on = t === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => onChange(t),
      style: {
        padding: "18px 0",
        background: on ? "var(--stone-0)" : "transparent",
        border: "none",
        borderBottom: on ? "2px solid var(--ink-800)" : "2px solid transparent",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: on ? "var(--weight-medium)" : "var(--weight-regular)",
        color: on ? "var(--text-primary)" : "var(--text-secondary)",
        transition: "var(--transition-base)"
      }
    }, t);
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TabBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextInput({
  placeholder,
  value,
  onChange,
  prefix,
  size = "md",
  invalid = false,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === "lg" ? 52 : 44;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      height: h,
      padding: "0 16px",
      background: disabled ? "var(--bg-muted)" : "var(--stone-0)",
      border: `1px solid ${invalid ? "var(--danger)" : focus ? "var(--blue-400)" : "var(--border-hairline)"}`,
      borderRadius: "var(--radius-sm)",
      boxShadow: focus ? "0 0 0 3px var(--blue-100)" : "none",
      transition: "var(--transition-base)",
      ...style
    }
  }, prefix, /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--text-primary)"
    }
  }, rest)));
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/navigation/AnnouncementBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function AnnouncementBar({
  children = "New! Try Plan Mode in the Searchable Agent",
  linkLabel = "Read the article",
  href = "#",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--blue-600)",
      color: "var(--text-on-accent)",
      height: 42,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 16,
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, children), /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      color: "var(--text-on-accent)",
      textDecoration: "underline",
      textUnderlineOffset: 3,
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, linkLabel, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 5 7 7-7 7"
  }))));
}
Object.assign(__ds_scope, { AnnouncementBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/AnnouncementBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumb({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: it
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--stone-400)"
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: i === items.length - 1 ? "var(--text-secondary)" : "var(--text-muted)"
    }
  }, it))));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/MegaMenu.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MegaMenu({
  label = "Product",
  links = [],
  featured = [],
  footerLabel = "View all features",
  onFooter,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--stone-0)",
      borderBottom: "1px solid var(--grid-line)",
      padding: "32px 40px 40px",
      display: "grid",
      gridTemplateColumns: "1fr 1px 1fr",
      gap: 40,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      marginBottom: 20
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "28px 40px"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.title,
    href: l.href || "#",
    style: {
      textDecoration: "none",
      color: "inherit",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: "var(--weight-medium)",
      letterSpacing: "-0.01em",
      marginBottom: 6
    }
  }, l.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)"
    }
  }, l.description)))), footerLabel && /*#__PURE__*/React.createElement("button", {
    onClick: onFooter,
    style: {
      marginTop: 28,
      width: "100%",
      height: 52,
      border: "none",
      borderRadius: "var(--radius-md)",
      background: "var(--bg-muted)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      color: "var(--text-primary)"
    }
  }, footerLabel, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 5 7 7-7 7"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--grid-line)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      marginBottom: 20
    }
  }, "Featured"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24
    }
  }, featured.map(c => /*#__PURE__*/React.createElement("a", {
    key: c.title,
    href: c.href || "#",
    style: {
      textDecoration: "none",
      color: "inherit"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      borderRadius: "var(--radius-sm)",
      overflow: "hidden",
      background: "var(--bg-muted)",
      backgroundImage: c.image ? `url(${c.image})` : "none",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      margin: "14px 0 4px"
    }
  }, c.kicker || "Product"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: "var(--weight-medium)"
    }
  }, c.title))))));
}
Object.assign(__ds_scope, { MegaMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/MegaMenu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteFooter({
  columns = [],
  address = ["Searchable Limited", "B1, 9 Tanner St", "London, SE1 3LE"],
  legal,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: "var(--bg-footer)",
      color: "var(--text-on-dark)",
      padding: "64px 40px 40px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(4,1fr)",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 22,
    tone: "light"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      fontSize: "var(--text-sm)",
      color: "var(--text-on-dark-muted)",
      lineHeight: 1.8
    }
  }, address.map(l => /*#__PURE__*/React.createElement("div", {
    key: l
  }, l)))), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      marginBottom: 18
    }
  }, col.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-on-dark-muted)",
      textDecoration: "none"
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "48px auto 0",
      paddingTop: 24,
      borderTop: "1px solid rgba(255,255,255,.10)",
      fontSize: "var(--text-xs)",
      color: "var(--text-on-dark-muted)",
      lineHeight: 1.7
    }
  }, legal || "© 2026 Searchable Limited. Registered in United Kingdom (Co. Reg. No.: 16579753)."));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const caret = /*#__PURE__*/React.createElement("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "m6 9 6 6 6-6"
}));
function SiteNav({
  items = [],
  active = null,
  onSelect = () => {},
  onLogin,
  onStart,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      padding: "18px 40px",
      background: "var(--stone-0)",
      borderBottom: "1px solid var(--grid-line)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 21
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, items.map(it => {
    const on = active === it.label;
    return /*#__PURE__*/React.createElement("button", {
      key: it.label,
      onClick: () => onSelect(it.label),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        height: 36,
        padding: "0 14px",
        border: "none",
        borderRadius: "var(--radius-pill)",
        cursor: "pointer",
        background: on ? "var(--stone-200)" : "transparent",
        color: "var(--text-primary)",
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: "var(--weight-medium)",
        transition: "var(--transition-base)"
      }
    }, it.label, it.hasMenu && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-muted)",
        display: "inline-flex",
        transform: on ? "rotate(180deg)" : "none",
        transition: "transform var(--duration-base) var(--ease-standard)"
      }
    }, caret));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    size: "md",
    onClick: onLogin
  }, "Login"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "accentSoft",
    size: "md",
    onClick: onStart
  }, "Start for free")));
}
Object.assign(__ds_scope, { SiteNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/AgenciesScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Card,
  Badge,
  FeatureCell,
  NumberedFeatureCard,
  ComparisonTable,
  LogoWall,
  Testimonial,
  FaqItem,
  CtaBand,
  TwoToneHeading
} = window.SearchableDesignSystem_29e52a;
function AgenciesScreen() {
  const [slide, setSlide] = React.useState(0);
  const panels = [{
    step: "01",
    title: "Insights & Analysis",
    description: "Find what your clients should actually be ranking for in AI search.",
    items: ["Prompt volume", "Fanout queries", "Unique knowledge base", "GA4 + GSC + Bing integration"]
  }, {
    step: "02",
    title: "Actions & Execution",
    description: "Turn insights into fixes, content, and optimisation faster.",
    items: ["Dynamic actions", "Fully-trained AI agent", "White-labelled reporting", "MCP integrations"]
  }, {
    step: "03",
    title: "Scale & Coverage",
    description: "Manage more clients, markets, and entities without adding complexity.",
    items: ["Unlimited countries", "Unlimited sub-brands", "Unlimited seats"]
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Frame, {
    bg: "var(--stone-50)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "64px 0 56px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 46,
      letterSpacing: "-0.02em",
      maxWidth: 620,
      marginBottom: 22
    }
  }, "Build an AEO practice your clients can't live without."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 520,
      color: "var(--text-secondary)",
      marginBottom: 30
    }
  }, "Agency-ready tools to run AI search offerings at scale: join the partners already running AEO on Searchable, and win new clients with visibility data across ChatGPT, Perplexity and Gemini."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accentSoft",
    arrow: true
  }, "Apply to become a partner"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Book a demo")))), /*#__PURE__*/React.createElement(Frame, {
    bg: "var(--stone-50)"
  }, /*#__PURE__*/React.createElement(LogoWall, {
    logos: ["HAVAS", "aeo", "Momentum", "BLACKBIRD", "HD", "KHOJI", "HAVAS"]
  })), /*#__PURE__*/React.createElement(Section, {
    index: "01",
    label: "Why Searchable",
    right: "Built for agencies"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 34,
      marginBottom: 16
    }
  }, "Built for agencies running AEO at scale"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 600,
      margin: "0 auto",
      color: "var(--text-secondary)"
    }
  }, "Native multi-client infrastructure, not a bolt-on. Every feature is designed to reduce delivery overhead and increase the value you can demonstrate to clients.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      border: "1px dashed var(--border-hairline)"
    }
  }, [["MCP server access", "Connect Searchable into your team's workflow via the Model Context Protocol. Pull live AEO data into Claude, Cursor, or any MCP-compatible tool.", "rows-3"], ["Pitch workspaces", "Run AI search audits on prospective clients before they sign. Brand visibility scores and citation gap analysis to power new business pitches.", "presentation"], ["Multi-client dashboard", "Manage every client account from a single agency view. Monitor AI search visibility across your portfolio and flag opportunities at a glance.", "layout-grid"], ["Client discounts", "Discounted pricing available specifically through your agency across all Searchable plans. Build a profitable AEO retainer or pass savings through.", "badge-percent"], ["Agency directory listing", "Get featured in Searchable's agency directory — a public signal that your practice delivers AI search results.", "receipt-text"], ["Go-to-market collaboration", "Work with Searchable to 10x the quality and quantity of your GTM and marketing. Join case studies, webinars, and co-selling.", "handshake"]].map(([t, d, ic], i) => /*#__PURE__*/React.createElement(FeatureCell, {
    key: t,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 21
    }),
    title: t,
    style: {
      borderRight: i % 3 < 2 ? "1px dashed var(--border-hairline)" : "none",
      borderBottom: i < 3 ? "1px dashed var(--border-hairline)" : "none"
    }
  }, d)))), /*#__PURE__*/React.createElement(Section, {
    index: "02",
    label: "Capabilities",
    right: "AI search at scale"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 32,
      maxWidth: 460,
      marginBottom: 26
    }
  }, "Everything you need to deliver AI search at scale"), /*#__PURE__*/React.createElement(Button, {
    variant: "accentSoft",
    arrow: true,
    style: {
      marginBottom: 40
    }
  }, "Apply to become a partner"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      border: "1px dashed var(--border-hairline)"
    }
  }, panels.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.step,
    style: {
      borderRight: i < 2 ? "1px dashed var(--border-hairline)" : "none",
      opacity: i === slide || slide === 0 ? 1 : .9
    }
  }, /*#__PURE__*/React.createElement(NumberedFeatureCard, _extends({}, p, {
    total: "05"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    onClick: () => setSlide(i),
    style: {
      cursor: "pointer",
      height: 6,
      width: i === slide ? 26 : 6,
      borderRadius: 99,
      background: i === slide ? "var(--ink-800)" : "var(--stone-300)",
      transition: "var(--transition-base)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setSlide(Math.max(0, slide - 1)),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(IconCircleBtn, {
    dir: "chevron-left"
  })), /*#__PURE__*/React.createElement("span", {
    onClick: () => setSlide(Math.min(2, slide + 1)),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(IconCircleBtn, {
    dir: "chevron-right"
  }))))), /*#__PURE__*/React.createElement(Section, {
    index: "03",
    label: "Partner tiers",
    right: "Scales with commitment"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 32,
      marginBottom: 14
    }
  }, "Scales with your commitment"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      maxWidth: 560,
      margin: "0 auto"
    }
  }, "Two levels: agency partner and reseller. Recurring commission on every referred client \u2014 no lock-in, no minimums.")), /*#__PURE__*/React.createElement(ComparisonTable, {
    columns: [{
      kicker: "Agency Partner",
      title: "20%",
      note: "lifetime revenue share"
    }, {
      kicker: "Reseller",
      title: "25%",
      note: "lifetime revenue share"
    }],
    rows: [{
      label: "Client discounts",
      values: [true, true]
    }, {
      label: "White-label reporting",
      values: [false, true]
    }, {
      label: "Multi-client dashboard",
      values: [true, true]
    }, {
      label: "Directory listing",
      values: [true, true]
    }, {
      label: "Dedicated partner manager",
      values: [false, true]
    }, {
      label: "Co-marketing support",
      values: ["Standard", "Priority"]
    }, {
      label: "Billing",
      values: ["Client-billed", "Reseller-billed"]
    }]
  })), /*#__PURE__*/React.createElement(Testimonial, {
    quote: "Most tools tell us just our visibility. Searchable tells us exactly what we need to do to drive revenue.",
    name: "Amaury Perlod",
    role: "Founder, 3mind",
    features: ["Multi-client dashboard", "White-label reporting"],
    logo: /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20,
        fontWeight: 500,
        letterSpacing: "-0.02em"
      }
    }, "3mind")
  }), /*#__PURE__*/React.createElement(Section, {
    label: ""
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(TwoToneHeading, {
    align: "center",
    size: "30px",
    lead: "Frequently asked",
    rest: "questions.",
    style: {
      marginBottom: 32
    }
  }), [["How does the agency partner programme work?", "Apply, get approved, and start referring clients — you earn lifetime revenue share on every account."], ["What's the difference between partner and reseller?", "Resellers bill their own clients and get white-label reporting; partners refer and Searchable bills directly."], ["Is there a minimum number of clients?", "No minimums and no lock-in."]].map(([q, a], i) => /*#__PURE__*/React.createElement(FaqItem, {
    key: q,
    question: q,
    defaultOpen: i === 0
  }, a)))), /*#__PURE__*/React.createElement(CtaBand, {
    tone: "dark",
    title: "Ready to join?",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "accent"
    }, "Apply now"), /*#__PURE__*/React.createElement(Button, {
      variant: "onDark"
    }, "Book a demo"))
  }, "Apply to become an agency partner and start building an AEO practice on live AI search data."));
}
function IconCircleBtn({
  dir
}) {
  const {
    IconCircle
  } = window.SearchableDesignSystem_29e52a;
  return /*#__PURE__*/React.createElement(IconCircle, {
    size: 38
  }, /*#__PURE__*/React.createElement(Icon, {
    name: dir,
    size: 16
  }));
}
Object.assign(window, {
  AgenciesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/AgenciesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/DataScreen.jsx
try { (() => {
const {
  Button,
  Breadcrumb,
  ReportCard,
  SourceRankList,
  TwoToneHeading,
  FaqItem,
  Badge
} = window.SearchableDesignSystem_29e52a;
function DataScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Frame, {
    bg: "var(--stone-50)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "40px 0 56px"
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: ["Home", "Data"]
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 44,
      margin: "22px 0 20px",
      letterSpacing: "-0.02em"
    }
  }, "Live AI Search Data & Reports"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 520,
      color: "var(--text-secondary)"
    }
  }, "We're building the most comprehensive live dataset on AI search behavior. Explore our public reports on citation patterns, source preferences, and visibility trends across ChatGPT, Perplexity, and Google AI Overviews."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accentSoft",
    arrow: true
  }, "Explore ChatGPT Data"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Request Custom Data")))), /*#__PURE__*/React.createElement(Frame, {
    bg: "var(--stone-50)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      border: "1px solid var(--grid-line)",
      background: "var(--stone-0)"
    }
  }, [["ChatGPT Citations", "Understand which websites ChatGPT pulls from when answering questions. Broken down by category — social, reviews, knowledge bases, and news.", "message-circle"], ["Google AI Overviews", "What sources power Google's AI-generated answers? We're tracking the domains that appear most in AI Overviews.", "sparkles"], ["Perplexity Citations", "Perplexity has its own citation logic. See how it differs from ChatGPT and Google when choosing sources.", "compass"]].map(([t, d, ic], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      borderRight: i < 2 ? "1px solid var(--grid-line)" : "none"
    }
  }, /*#__PURE__*/React.createElement(ReportCard, {
    title: t,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 18
    })
  }, d))))), /*#__PURE__*/React.createElement(Section, {
    index: "01",
    label: "Sources",
    right: "What AI cites"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginBottom: 22
    }
  }, ["reddit.com", "linkedin.com", "youtube.com", "instagram.com"].map(d => /*#__PURE__*/React.createElement(Badge, {
    key: d,
    tone: "outline"
  }, d))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 26,
      marginBottom: 18
    }
  }, "Which social platforms improve AI search visibility?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      fontSize: 15,
      marginBottom: 14
    }
  }, "AI assistants frequently cite community-driven content when answering questions. Reddit discussions, LinkedIn articles, YouTube videos, and Instagram posts all appear in AI responses \u2014 but not equally."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      fontSize: 15,
      marginBottom: 26
    }
  }, "Our data shows which platforms carry the most weight and how that changes over time."), /*#__PURE__*/React.createElement(Button, {
    variant: "accentSoft",
    arrow: true
  }, "View social citation data")), /*#__PURE__*/React.createElement(SourceRankList, {
    rows: [{
      label: "Reddit",
      value: 94
    }, {
      label: "LinkedIn",
      value: 71
    }, {
      label: "Youtube",
      value: 52
    }, {
      label: "Instagram",
      value: 28
    }]
  }))), /*#__PURE__*/React.createElement(Section, {
    index: "02",
    label: "Reference",
    right: "Authority sources"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(SourceRankList, {
    title: "Reference Sources",
    rows: [{
      label: "Wikipedia",
      value: 96
    }, {
      label: "arXiv",
      value: 64
    }, {
      label: "PubMed",
      value: 48
    }, {
      label: "Investopedia",
      value: 37
    }]
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginBottom: 22
    }
  }, ["wikipedia.org", "arxiv.org", "pubmed.ncbi.nlm.nih.gov", "investopedia.com"].map(d => /*#__PURE__*/React.createElement(Badge, {
    key: d,
    tone: "outline"
  }, d))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 26,
      marginBottom: 18
    }
  }, "What reference sources do AI assistants trust most?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      fontSize: 15,
      marginBottom: 26
    }
  }, "AI systems lean heavily on authoritative knowledge sources for factual grounding. Wikipedia dominates, but academic repositories like arXiv and PubMed matter for technical queries."), /*#__PURE__*/React.createElement(Button, {
    variant: "accentSoft",
    arrow: true
  }, "View reference data")))), /*#__PURE__*/React.createElement(Section, {
    index: "03",
    label: "Track",
    right: "Your brand"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 34,
      marginBottom: 18
    }
  }, "Track your brand's AI visibility"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      maxWidth: 440,
      marginBottom: 28
    }
  }, "Go beyond public data. Monitor your specific brand mentions, citations, and competitive positioning across AI platforms."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accentSoft",
    arrow: true
  }, "Start for free"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Book a Demo"))), /*#__PURE__*/React.createElement(Section, {
    label: ""
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(TwoToneHeading, {
    align: "center",
    size: "32px",
    lead: "Frequently asked",
    rest: "questions.",
    style: {
      marginBottom: 36
    }
  }), [["What data does Searchable publish?", "Aggregated, anonymised citation and source data across the major AI answer engines."], ["How is this data collected?", "We run and analyse millions of prompts daily across ChatGPT, Perplexity and Google AI Overviews."], ["How often is the data updated?", "Public reports refresh weekly; brand tracking refreshes daily."], ["Can I use this data for my own research?", "Yes, with attribution to Searchable."], ["Why do some sources get cited more than others?", "Authority, structure and freshness all influence citation likelihood."]].map(([q, a], i) => /*#__PURE__*/React.createElement(FaqItem, {
    key: q,
    question: q,
    defaultOpen: i === 0
  }, a)))));
}
Object.assign(window, {
  DataScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/DataScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/HomeScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  TabBar,
  TwoToneHeading,
  LogoWall,
  EmailCaptureBar,
  CtaBand,
  Testimonial,
  FaqItem,
  PromptChip
} = window.SearchableDesignSystem_29e52a;
function HeroPreview({
  tab
}) {
  const copy = {
    Agent: {
      q: "I want to make an article about",
      chip: "common buying guide for cement"
    },
    Analytics: {
      q: "Show visibility for",
      chip: "care homes — London, UK"
    },
    Content: {
      q: "I want to make an article about",
      chip: "common buying guide for cement"
    },
    Audit: {
      q: "Audit crawlability for",
      chip: "acme.com/pricing"
    }
  }[tab];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "232px 1fr",
      minHeight: 340,
      borderTop: "1px solid var(--grid-line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRight: "1px solid var(--grid-line)",
      padding: "18px 14px",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      background: "var(--stone-0)"
    }
  }, ["Lattice", "Agent", "Insights", "Mentions", "Topics", "Prompts", "Your Rankings", "Prompt Research", "Knowledge", "Site Health", "Reports"].map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "7px 10px",
      borderRadius: "var(--radius-xs)",
      fontSize: 13,
      color: i === 0 ? "var(--text-primary)" : "var(--text-secondary)",
      background: i === 0 ? "var(--bg-muted)" : "transparent"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 99,
      background: i === 0 ? "var(--blue-500)" : "var(--stone-400)"
    }
  }), l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 22,
      padding: 40,
      backgroundImage: "var(--dot-grid)",
      backgroundSize: "var(--dot-grid-size)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      letterSpacing: "-0.015em"
    }
  }, copy.q, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      borderBottom: "2px solid var(--blue-400)"
    }
  }, "an article")), /*#__PURE__*/React.createElement(Card, {
    padding: 16,
    style: {
      width: 420,
      boxShadow: "var(--shadow-raised)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-secondary)",
      marginBottom: 18
    }
  }, copy.chip), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Attach"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 99,
      background: "var(--ink-800)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: 12
    }
  }, "\u2191")))));
}
function HomeScreen() {
  const [tab, setTab] = React.useState("Content");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Frame, {
    bg: "var(--stone-50)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "88px 0 72px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(TwoToneHeading, {
    accent: true,
    align: "center",
    size: "clamp(40px,4.2vw,58px)",
    maxWidth: 880,
    lead: "Visibility & Analytics from AI Search \u2014 and the",
    rest: "actions to drive growth"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 560,
      margin: "26px auto 0",
      color: "var(--text-secondary)",
      fontSize: 17
    }
  }, "Capture millions of clicks from customers discovering new products and brands through Google."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      justifyContent: "center",
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accentSoft",
    size: "lg",
    arrow: true
  }, "Start for free"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg"
  }, "Book a Demo")))), /*#__PURE__*/React.createElement(Frame, null, /*#__PURE__*/React.createElement(TabBar, {
    tabs: ["Agent", "Analytics", "Content", "Audit"],
    active: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement(HeroPreview, {
    tab: tab
  }), /*#__PURE__*/React.createElement(LogoWall, {
    logos: ["HAVAS", "lottie", "Bolt", "REVLON", "fi", "Momentum"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ink-700)",
      backgroundImage: "url(../../assets/textures/dark-noise.png)",
      backgroundSize: "cover",
      padding: "84px 24px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "#fff",
      fontSize: 32,
      textAlign: "center",
      maxWidth: 620,
      fontWeight: 400
    }
  }, "Get your free ChatGPT, Google and Perplexity visibility report"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-on-dark-muted)",
      fontSize: 14,
      marginBottom: 16
    }
  }, "See where you rank, who's beating you, and what to fix. Free, in minutes."), /*#__PURE__*/React.createElement(EmailCaptureBar, null)), /*#__PURE__*/React.createElement(Section, {
    index: "01",
    label: "Monitor",
    right: "See your growth"
  }, /*#__PURE__*/React.createElement(TwoToneHeading, {
    size: "34px",
    maxWidth: 840,
    lead: "Your growth command center.",
    rest: "Track how your brand performs across AI platforms and search, connect analytics from GA4 and GSC, and surface insights through an interactive agent."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.2fr",
      marginTop: 56,
      border: "1px solid var(--grid-line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "32px 34px",
      borderRight: "1px solid var(--grid-line)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 20,
      marginBottom: 14
    }
  }, "Track your visibility"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--text-secondary)",
      maxWidth: 320,
      flex: 1
    }
  }, "Monitor your visibility across multiple models and platforms, select which campaigns and products to monitor and the location you want to focus on."), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontSize: 14,
      marginTop: 28
    }
  }, "Get free visibility report ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 15
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "28px 30px",
      backgroundImage: "var(--dot-grid)",
      backgroundSize: "var(--dot-grid-size)",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, [["care homes near me", "London, UK", true], ["home care services", "Manchester, UK", false], ["nursing home costs", "Dublin, Ireland", false], ["elderly care at home", "Leeds, UK", false], ["dementia care facilities", "Bristol, UK", false], ["retirement homes", "Edinburgh, UK", true]].map(([q, m, mut]) => /*#__PURE__*/React.createElement(PromptChip, {
    key: q,
    meta: m,
    muted: mut
  }, q))))), /*#__PURE__*/React.createElement(CtaBand, {
    title: "Start with a 14-day free trial of Pro.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "dark",
      size: "md"
    }, "Start for Pro"), /*#__PURE__*/React.createElement(Button, {
      variant: "onAccent",
      size: "md"
    }, "See all plans"))
  }, "Unlock analytics built for AI search workflows. Track performance, share insights with your team, and layer in your existing data sources."), /*#__PURE__*/React.createElement(Section, {
    index: "02",
    label: "Create",
    right: "Content studio"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(TwoToneHeading, {
    align: "center",
    size: "34px",
    maxWidth: 760,
    lead: "Turn ideas into influence.",
    rest: "Generate AI-optimized content (from thought-leadership blogs to programmatic blogs) using your brand's own data and tone."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accentSoft"
  }, "Start creating content")))), /*#__PURE__*/React.createElement(Testimonial, {
    quote: "The shift from monitoring to execution is everything. We went from spending hours analyzing AI visibility gaps to having the platform automatically identify problems and generate solutions in minutes.",
    name: "Jonathan Kvarfordt",
    role: "VP of GTM Strategy & Marketing",
    features: ["Visibility Monitoring", "Content Planning", "Content Generation"],
    logo: /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        fontWeight: 500,
        letterSpacing: "-0.02em"
      }
    }, "momentum")
  }), /*#__PURE__*/React.createElement(Section, {
    index: "04",
    label: "Ask",
    right: "Frequently asked"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(TwoToneHeading, {
    align: "center",
    size: "32px",
    lead: "Frequently asked",
    rest: "questions.",
    style: {
      marginBottom: 36
    }
  }), [["What is Searchable?", "Searchable is an AI search visibility and analytics platform. It tracks where your brand appears across ChatGPT, Google AI Overviews, Perplexity and Claude, and gives you the actions to improve."], ["How does Searchable help with AI search visibility?", "We monitor prompts, citations and sentiment daily, connect your GA4 and GSC data, and surface the specific fixes and content that move visibility."], ["Which AI engines does Searchable support?", "ChatGPT, Google AI Overviews, Perplexity, Claude and Gemini."], ["How much does Searchable cost?", "Plans start with a 14-day free trial of Pro. See the pricing page for tiers."], ["Can I try Searchable for free?", "Yes — start free, no credit card required."]].map(([q, a], i) => /*#__PURE__*/React.createElement(FaqItem, {
    key: q,
    question: q,
    defaultOpen: i === 0
  }, a)))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/shared.jsx
try { (() => {
const {
  SectionMarker
} = window.SearchableDesignSystem_29e52a;
const NAV_ITEMS = [{
  label: "Product",
  hasMenu: true
}, {
  label: "Resources",
  hasMenu: true
}, {
  label: "Solutions",
  hasMenu: true
}, {
  label: "Enterprise"
}, {
  label: "Pricing",
  hasMenu: true
}, {
  label: "Careers"
}];
const PRODUCT_LINKS = [{
  title: "AEO Insights",
  description: "Visibility, citations, sentiment, and sources"
}, {
  title: "Content Studio",
  description: "AI-optimized content at scale"
}, {
  title: "LLM Analytics",
  description: "AI crawlers, citations, and referral traffic"
}, {
  title: "Technical Optimisation",
  description: "Crawlability and AI bot analysis"
}, {
  title: "Prompt Intelligence",
  description: "Track buyer prompts across AI platforms"
}, {
  title: "AI Shopping",
  description: "Track product visibility in AI shopping"
}];
const FOOTER_COLUMNS = [{
  title: "Product",
  links: ["AEO Insights", "AI Search Traffic", "All Features", "Content Studio", "Prompt Intelligence", "Technical Optimization"]
}, {
  title: "Resources",
  links: ["AI Search Data", "AI Shopping Agent Checker", "Articles & Guides", "Documentation", "Events", "Free AI Visibility Score"]
}, {
  title: "Company",
  links: ["About", "Affiliates", "Authors", "Careers", "Community", "Contact", "Customers"]
}, {
  title: "Compare",
  links: ["All Comparisons", "vs Ahrefs", "vs Profound", "vs Semrush"]
}];

/** Content column framed by hairlines, exactly as the site frames every section. */
function Frame({
  children,
  style,
  bg = "var(--stone-0)"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      display: "flex",
      justifyContent: "center",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 1216,
      borderLeft: "1px solid var(--grid-line)",
      borderRight: "1px solid var(--grid-line)",
      padding: "0 48px"
    }
  }, children));
}
function Section({
  index,
  label,
  right,
  children,
  bg,
  style
}) {
  return /*#__PURE__*/React.createElement(Frame, {
    bg: bg,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--grid-line)",
      paddingTop: 14
    }
  }, label && /*#__PURE__*/React.createElement(SectionMarker, {
    index: index,
    label: label,
    right: right
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "56px 0 72px"
    }
  }, children));
}
const Icon = ({
  name,
  size = 20,
  color = "currentColor"
}) => /*#__PURE__*/React.createElement("i", {
  "data-lucide": name,
  style: {
    width: size,
    height: size,
    color
  }
});
Object.assign(window, {
  NAV_ITEMS,
  PRODUCT_LINKS,
  FOOTER_COLUMNS,
  Frame,
  Section,
  Icon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ComparisonTable = __ds_scope.ComparisonTable;

__ds_ns.CtaBand = __ds_scope.CtaBand;

__ds_ns.FaqItem = __ds_scope.FaqItem;

__ds_ns.FeatureCell = __ds_scope.FeatureCell;

__ds_ns.LogoWall = __ds_scope.LogoWall;

__ds_ns.NumberedFeatureCard = __ds_scope.NumberedFeatureCard;

__ds_ns.PromptChip = __ds_scope.PromptChip;

__ds_ns.ReportCard = __ds_scope.ReportCard;

__ds_ns.SectionMarker = __ds_scope.SectionMarker;

__ds_ns.SourceRankList = __ds_scope.SourceRankList;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.TwoToneHeading = __ds_scope.TwoToneHeading;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconCircle = __ds_scope.IconCircle;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.EmailCaptureBar = __ds_scope.EmailCaptureBar;

__ds_ns.TabBar = __ds_scope.TabBar;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.AnnouncementBar = __ds_scope.AnnouncementBar;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.MegaMenu = __ds_scope.MegaMenu;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteNav = __ds_scope.SiteNav;

})();
