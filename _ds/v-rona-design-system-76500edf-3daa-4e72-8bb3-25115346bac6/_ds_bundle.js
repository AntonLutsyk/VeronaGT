/* @ds-bundle: {"format":4,"namespace":"VRONADesignSystem_76500e","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"Badge","sourcePath":"components/editorial/Badge.jsx"},{"name":"EditorialCard","sourcePath":"components/editorial/EditorialCard.jsx"},{"name":"MediaFrame","sourcePath":"components/editorial/MediaFrame.jsx"},{"name":"PullQuote","sourcePath":"components/editorial/PullQuote.jsx"},{"name":"SectionLabel","sourcePath":"components/editorial/SectionLabel.jsx"},{"name":"SpecStat","sourcePath":"components/editorial/SpecStat.jsx"},{"name":"Tag","sourcePath":"components/editorial/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Parallax","sourcePath":"components/motion/Parallax.jsx"},{"name":"Reveal","sourcePath":"components/motion/Reveal.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Button.jsx":"ea0e65969c6a","components/core/Icon.jsx":"7f2d48b46d47","components/core/IconButton.jsx":"de85f9f111ee","components/core/TextLink.jsx":"f28c28abbe71","components/core/Wordmark.jsx":"182f6bc62fda","components/editorial/Badge.jsx":"b0591683f335","components/editorial/EditorialCard.jsx":"48d19a319f9e","components/editorial/MediaFrame.jsx":"4a3707a1abe6","components/editorial/PullQuote.jsx":"8611fa68e750","components/editorial/SectionLabel.jsx":"cf3c6d30d085","components/editorial/SpecStat.jsx":"3186aae1d365","components/editorial/Tag.jsx":"7d1ea7dceee5","components/feedback/Dialog.jsx":"a53f69a83be9","components/feedback/Toast.jsx":"b485c2553a65","components/feedback/Tooltip.jsx":"75f15290dfa5","components/forms/Checkbox.jsx":"97a4e74f0421","components/forms/Input.jsx":"f42c3dd2e9f2","components/forms/Radio.jsx":"7b3c7ebfdb9c","components/forms/Select.jsx":"c7614dba44b0","components/forms/Switch.jsx":"51f148b81c9e","components/motion/Parallax.jsx":"85aa5becd58d","components/motion/Reveal.jsx":"8324247772b4","components/navigation/NavBar.jsx":"96e6c6ad6f6d","components/navigation/Tabs.jsx":"397cf02cfb7b","ui_kits/website/Craft.jsx":"1c9cb97e5753","ui_kits/website/Home.jsx":"b6e8a2fbf609","ui_kits/website/Model.jsx":"d6ca23496a07","ui_kits/website/Reserve.jsx":"fc5ba329d7c2","ui_kits/website/Shared.jsx":"8d2da645a607","ui_kits/website/Technology.jsx":"ede7dccc58b1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VRONADesignSystem_76500e = window.VRONADesignSystem_76500e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
const CDN = "https://unpkg.com/lucide-static@0.544.0/icons/";

/** Monochrome icon. Renders a Lucide glyph as a CSS mask so it always inherits currentColor. */
function Icon({
  name = "arrow-right",
  size = 16,
  strokeWidth,
  className = "",
  style = {},
  label
}) {
  const url = `url("${CDN}${name}.svg")`;
  return /*#__PURE__*/React.createElement("span", {
    role: label ? "img" : "presentation",
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    className: className,
    style: {
      display: "inline-block",
      width: size,
      height: size,
      flex: "0 0 auto",
      background: "currentColor",
      maskImage: url,
      WebkitMaskImage: url,
      maskRepeat: "no-repeat",
      WebkitMaskRepeat: "no-repeat",
      maskPosition: "center",
      WebkitMaskPosition: "center",
      maskSize: "contain",
      WebkitMaskSize: "contain",
      opacity: strokeWidth === "light" ? 0.8 : 1,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: "10px 18px",
    fontSize: "var(--text-micro)",
    gap: 8,
    icon: 13
  },
  md: {
    padding: "15px 28px",
    fontSize: "var(--text-label)",
    gap: 10,
    icon: 14
  },
  lg: {
    padding: "20px 40px",
    fontSize: "0.75rem",
    gap: 12,
    icon: 16
  }
};

/**
 */
function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  disabled = false,
  fullWidth = false,
  href,
  as,
  children,
  style = {},
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const tones = {
    primary: {
      background: hover ? "var(--accent-hover)" : "var(--accent)",
      color: "var(--text-on-accent)",
      border: "1px solid transparent"
    },
    secondary: {
      background: "transparent",
      color: hover ? "var(--accent)" : "var(--text-primary)",
      border: `1px solid ${hover ? "var(--border-accent)" : "var(--border-strong)"}`
    },
    ghost: {
      background: "transparent",
      color: hover ? "var(--accent)" : "var(--text-muted)",
      border: "1px solid transparent"
    },
    solid: {
      background: hover ? "var(--bone-200)" : "var(--bone-050)",
      color: "var(--obsidian-1000)",
      border: "1px solid transparent"
    }
  };
  const Tag = as || (href ? "a" : "button");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === "button" ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : undefined,
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      font: `var(--weight-medium) ${s.fontSize}/1 var(--font-sans)`,
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      padding: s.padding,
      borderRadius: "var(--radius-0)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.34 : 1,
      textDecoration: "none",
      transform: press && !disabled ? "scale(var(--press-scale))" : "none",
      transition: "background var(--dur-fast) var(--ease-inout),color var(--dur-fast) var(--ease-inout),border-color var(--dur-fast) var(--ease-inout),transform var(--dur-micro) var(--ease-inout)",
      ...tones[variant],
      ...style
    }
  }, rest), icon && iconPosition === "left" && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }), /*#__PURE__*/React.createElement("span", null, children), icon && iconPosition === "right" && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BOX = {
  sm: 32,
  md: 40,
  lg: 52
};

/** Square icon-only control: media controls, close affordances, carousel arrows. */
function IconButton({
  icon = "arrow-right",
  label,
  variant = "outline",
  size = "md",
  disabled,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const box = BOX[size] || BOX.md;
  const tones = {
    outline: {
      background: hover ? "var(--surface-inset)" : "transparent",
      border: `1px solid ${hover ? "var(--border-accent)" : "var(--border-hairline)"}`,
      color: hover ? "var(--accent)" : "var(--text-primary)"
    },
    filled: {
      background: hover ? "var(--accent-hover)" : "var(--accent)",
      border: "1px solid transparent",
      color: "var(--text-on-accent)"
    },
    bare: {
      background: "transparent",
      border: "1px solid transparent",
      color: hover ? "var(--text-primary)" : "var(--text-muted)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: box,
      height: box,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-0)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.34 : 1,
      transition: "all var(--dur-fast) var(--ease-inout)",
      ...tones[variant],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === "lg" ? 18 : size === "sm" ? 13 : 15
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Inline or standalone editorial link: uppercase micro label over a hairline that draws in on hover. */
function TextLink({
  href = "#",
  children,
  icon = "arrow-right",
  tone = "primary",
  underline = true,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      textDecoration: "none",
      font: "var(--weight-medium) var(--text-label)/1 var(--font-sans)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: tone === "accent" || hover ? "var(--accent)" : "var(--text-primary)",
      paddingBottom: 8,
      borderBottom: underline ? `1px solid ${hover ? "var(--accent)" : "var(--border-hairline)"}` : "none",
      transition: "color var(--dur-fast) var(--ease-inout),border-color var(--dur-fast) var(--ease-inout)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, children), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13,
    style: {
      transform: hover ? "translateX(4px)" : "none",
      transition: "transform var(--dur-fast) var(--ease-editorial)"
    }
  }));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
/** VÉRONA wordmark set in the display serif. No logo file exists — the name IS the mark. */
function Wordmark({
  size = 20,
  tracking = "0.34em",
  tone = "primary",
  tagline,
  as: Tag = "span",
  style = {}
}) {
  const color = tone === "accent" ? "var(--accent)" : tone === "muted" ? "var(--text-muted)" : "var(--text-primary)";
  return /*#__PURE__*/React.createElement(Tag, {
    style: {
      display: "inline-flex",
      flexDirection: "column",
      gap: 6,
      color,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: size,
      lineHeight: 1,
      letterSpacing: tracking,
      textTransform: "uppercase"
    }
  }, "V\xE9rona"), tagline && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-micro)",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, tagline));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Badge.jsx
try { (() => {
/** Small status plate for availability, allocation and instrumentation states. */
function Badge({
  children,
  tone = "neutral",
  solid = false,
  style = {}
}) {
  const map = {
    neutral: "var(--text-muted)",
    accent: "var(--accent)",
    positive: "var(--signal-positive)",
    caution: "var(--signal-caution)",
    critical: "var(--signal-critical)",
    info: "var(--signal-info)"
  };
  const c = map[tone] || map.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      padding: "5px 10px",
      border: `1px solid ${solid ? "transparent" : c}`,
      background: solid ? c : "transparent",
      color: solid ? "var(--obsidian-1000)" : c,
      borderRadius: "var(--radius-0)",
      font: "var(--weight-medium) var(--text-micro)/1 var(--font-mono)",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      background: solid ? "var(--obsidian-1000)" : c,
      display: "inline-block"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Badge.jsx", error: String((e && e.message) || e) }); }

// components/editorial/MediaFrame.jsx
try { (() => {
/**
 * Photography frame — the primary content vessel of the brand.
 * With no `src` it renders the sanctioned placeholder (graphite field + slot description),
 * so layouts can be composed before final photography arrives.
 */
function MediaFrame({
  src,
  alt = "",
  ratio = "16 / 9",
  caption,
  index,
  scrim = "none",
  overlay,
  align = "end",
  fit = "cover",
  placeholder = "Vehicle photography",
  style = {},
  children
}) {
  const labelTop = ratio === "auto" || !!overlay || !!children;
  const scrims = {
    none: "none",
    bottom: "var(--scrim-bottom)",
    left: "var(--scrim-left)",
    full: "linear-gradient(rgba(8,8,10,.45),rgba(8,8,10,.45))"
  };
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      position: "relative",
      ...(ratio === "auto" ? {
        height: "100%"
      } : null),
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      ...(ratio === "auto" ? {
        height: "100%"
      } : {
        aspectRatio: ratio
      }),
      overflow: "hidden",
      background: "var(--obsidian-700)",
      boxShadow: "var(--image-vignette)"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: fit,
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: labelTop ? "flex-start" : "center",
      justifyContent: labelTop ? "flex-start" : "center",
      padding: labelTop ? "clamp(16px,2vw,28px)" : "0 24px",
      background: "repeating-linear-gradient(135deg,var(--obsidian-700) 0 12px,var(--obsidian-800) 12px 24px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-medium) var(--text-label)/1.4 var(--font-sans)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "rgba(251,250,247,.42)",
      textAlign: labelTop ? "left" : "center",
      maxWidth: "36ch"
    }
  }, placeholder)), scrim !== "none" && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: scrims[scrim],
      pointerEvents: "none"
    }
  }), (overlay || children) && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: align === "center" ? "center" : align === "start" ? "flex-start" : "flex-end",
      padding: "clamp(20px,3vw,48px)",
      gap: 16
    }
  }, overlay, children)), (caption || index) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "flex",
      gap: 16,
      marginTop: 14,
      alignItems: "baseline"
    }
  }, index && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-regular) var(--text-micro)/1 var(--font-mono)",
      color: "var(--accent)",
      letterSpacing: "0.1em"
    }
  }, index), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-light) var(--text-body-sm)/1.5 var(--font-sans)",
      color: "var(--text-muted)",
      maxWidth: "var(--measure-short)"
    }
  }, caption)));
}
Object.assign(__ds_scope, { MediaFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/MediaFrame.jsx", error: String((e && e.message) || e) }); }

// components/editorial/EditorialCard.jsx
try { (() => {
/** Image-led editorial entry: photography, kicker, title, optional body and link. No shadow, no radius. */
function EditorialCard({
  src,
  ratio = "4 / 5",
  kicker,
  title,
  body,
  href,
  linkLabel = "Read",
  placeholder = "Editorial photography",
  bordered = false,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      background: "transparent",
      border: bordered ? "1px solid var(--border-hairline)" : "none",
      padding: bordered ? "clamp(16px,2vw,28px)" : 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MediaFrame, {
    src: src,
    ratio: ratio,
    placeholder: placeholder,
    style: {
      transform: hover ? "scale(1.03)" : "scale(1)",
      transition: "transform var(--dur-slow) var(--ease-editorial)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, kicker && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-medium) var(--text-micro)/1 var(--font-sans)",
      letterSpacing: "var(--tracking-micro)",
      textTransform: "uppercase",
      color: "var(--accent)"
    }
  }, kicker), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "var(--text-h2)",
      lineHeight: "var(--leading-heading)",
      letterSpacing: "var(--tracking-heading)",
      color: "var(--text-primary)"
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--weight-light) var(--text-body)/var(--leading-body) var(--font-sans)",
      color: "var(--text-body)",
      maxWidth: "var(--measure-short)"
    }
  }, body), href && /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    href: href,
    style: {
      marginTop: 4,
      alignSelf: "flex-start"
    }
  }, linkLabel)));
}
Object.assign(__ds_scope, { EditorialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/EditorialCard.jsx", error: String((e && e.message) || e) }); }

// components/editorial/PullQuote.jsx
try { (() => {
/** Oversized display-serif quotation used to break long editorial passages. */
function PullQuote({
  children,
  attribution,
  role,
  align = "left",
  size = "md",
  style = {}
}) {
  const fs = size === "lg" ? "var(--text-display-2)" : "var(--text-display-3)";
  return /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 28,
      textAlign: align,
      alignItems: align === "center" ? "center" : "flex-start",
      ...style
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontWeight: 400,
      fontSize: fs,
      lineHeight: "var(--leading-display)",
      letterSpacing: "var(--tracking-display)",
      color: "var(--text-primary)",
      maxWidth: "26ch"
    }
  }, children), attribution && /*#__PURE__*/React.createElement("footer", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 1,
      background: "var(--accent)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-medium) var(--text-micro)/1.4 var(--font-sans)",
      letterSpacing: "var(--tracking-micro)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, attribution, role ? ` · ${role}` : "")));
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/editorial/SectionLabel.jsx
try { (() => {
/** Numbered eyebrow that opens every section: "01 — Performance". */
function SectionLabel({
  index,
  children,
  tone = "muted",
  align = "left",
  rule = false,
  style = {}
}) {
  const color = tone === "accent" ? "var(--accent)" : tone === "primary" ? "var(--text-primary)" : "var(--text-muted)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      justifyContent: align === "right" ? "flex-end" : align === "center" ? "center" : "flex-start",
      color,
      ...style
    }
  }, index && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-regular) var(--text-label)/1 var(--font-mono)",
      letterSpacing: "0.12em",
      color: "var(--accent)"
    }
  }, index), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-medium) var(--text-label)/1 var(--font-sans)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase"
    }
  }, children), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--border-hairline)"
    }
  }));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/editorial/SpecStat.jsx
try { (() => {
/** A single performance figure: oversized serif numeral, mono unit, uppercase label. */
function SpecStat({
  value,
  unit,
  label,
  note,
  size = "md",
  align = "left",
  divider = false,
  style = {}
}) {
  const fs = size === "lg" ? "var(--text-numeral)" : size === "sm" ? "var(--text-display-3)" : "clamp(2rem,3.4vw,3.25rem)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      textAlign: align,
      alignItems: align === "center" ? "center" : "flex-start",
      borderTop: divider ? "1px solid var(--border-hairline)" : "none",
      paddingTop: divider ? 20 : 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8,
      color: "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: fs,
      lineHeight: 0.92,
      letterSpacing: "var(--tracking-display)"
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-regular) var(--text-label)/1 var(--font-mono)",
      color: "var(--accent)",
      letterSpacing: "0.08em"
    }
  }, unit)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-medium) var(--text-micro)/1.3 var(--font-sans)",
      letterSpacing: "var(--tracking-micro)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), note && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-light) var(--text-body-sm)/1.5 var(--font-sans)",
      color: "var(--text-faint)",
      maxWidth: "24ch"
    }
  }, note));
}
Object.assign(__ds_scope, { SpecStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/SpecStat.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Tag.jsx
try { (() => {
/** Hairline metadata chip: model line, body style, journal category. */
function Tag({
  children,
  icon,
  active = false,
  interactive = false,
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const lit = active || interactive && hover;
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 14px",
      border: `1px solid ${lit ? "var(--border-accent)" : "var(--border-hairline)"}`,
      color: lit ? "var(--accent)" : "var(--text-muted)",
      background: "transparent",
      font: "var(--weight-medium) var(--text-micro)/1 var(--font-sans)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      borderRadius: "var(--radius-0)",
      cursor: interactive ? "pointer" : "default",
      transition: "all var(--dur-fast) var(--ease-inout)",
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/** Centered modal on a heavy scrim. Squared, hairline-bordered, no radius. */
function Dialog({
  open = true,
  title,
  kicker,
  children,
  footer,
  onClose,
  width = 520,
  style = {}
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      background: "var(--overlay-scrim)",
      backdropFilter: "blur(6px)",
      padding: 24,
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--surface-raised)",
      border: "1px solid var(--border-hairline)",
      boxShadow: "var(--shadow-modal)",
      padding: "clamp(24px,3vw,40px)",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, kicker && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-medium) var(--text-micro)/1 var(--font-sans)",
      letterSpacing: "var(--tracking-micro)",
      textTransform: "uppercase",
      color: "var(--accent)"
    }
  }, kicker), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "var(--text-h1)",
      lineHeight: "var(--leading-heading)",
      letterSpacing: "var(--tracking-heading)",
      color: "var(--text-primary)"
    }
  }, title)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    variant: "bare",
    size: "sm",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-light) var(--text-body)/var(--leading-body) var(--font-sans)",
      color: "var(--text-body)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      justifyContent: "flex-end",
      borderTop: "1px solid var(--border-hairline)",
      paddingTop: 24
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
/** Quiet confirmation plate. Bottom-left, hairline, no icon-heavy chrome. */
function Toast({
  message,
  detail,
  tone = "neutral",
  onDismiss,
  style = {}
}) {
  const c = {
    neutral: "var(--text-muted)",
    accent: "var(--accent)",
    positive: "var(--signal-positive)",
    critical: "var(--signal-critical)"
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: 14,
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      borderLeft: `2px solid ${c}`,
      padding: "16px 20px",
      minWidth: 300,
      boxShadow: "var(--shadow-lift)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-medium) var(--text-micro)/1.3 var(--font-sans)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-primary)"
    }
  }, message), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-light) var(--text-body-sm)/1.5 var(--font-sans)",
      color: "var(--text-muted)"
    }
  }, detail)), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      background: "none",
      border: 0,
      color: "var(--text-faint)",
      cursor: "pointer",
      padding: 0,
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 13
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** Hairline tooltip for spec abbreviations and instrumentation labels. */
function Tooltip({
  label,
  children,
  placement = "top",
  style = {}
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 10px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 10px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 10px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 10px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      whiteSpace: "nowrap",
      pointerEvents: "none",
      background: "var(--obsidian-800)",
      border: "1px solid var(--border-hairline)",
      color: "var(--text-primary)",
      padding: "7px 11px",
      font: "var(--weight-regular) var(--text-micro)/1 var(--font-mono)",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      opacity: show ? 1 : 0,
      transition: "opacity var(--dur-fast) var(--ease-inout)",
      zIndex: 30
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Square hairline checkbox with a champagne check. */
function Checkbox({
  label,
  description,
  checked,
  onChange,
  disabled,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "flex-start",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: "0 0 auto",
      marginTop: 2,
      display: "grid",
      placeItems: "center",
      border: `1px solid ${checked ? "var(--accent)" : "var(--border-strong)"}`,
      background: checked ? "var(--accent)" : "transparent",
      color: "var(--text-on-accent)",
      transition: "all var(--dur-fast) var(--ease-inout)"
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 12
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-light) var(--text-body)/1.5 var(--font-sans)",
      color: "var(--text-primary)"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-light) var(--text-body-sm)/1.5 var(--font-sans)",
      color: "var(--text-faint)"
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Underline-only text field. VÉRONA forms are lines, not boxes. */
function Input({
  label,
  hint,
  error,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
  disabled,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || `v-${label ? label.replace(/\s+/g, "-").toLowerCase() : "field"}`;
  const line = error ? "var(--signal-critical)" : focus ? "var(--accent)" : "var(--border-hairline)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      font: "var(--weight-medium) var(--text-micro)/1 var(--font-sans)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: focus ? "var(--accent)" : "var(--text-muted)",
      transition: "color var(--dur-fast) var(--ease-inout)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, " *")), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      background: "transparent",
      border: 0,
      borderBottom: `1px solid ${line}`,
      padding: "10px 0 14px",
      color: "var(--text-primary)",
      borderRadius: 0,
      outline: "none",
      font: "var(--weight-light) var(--text-body-lg)/1.4 var(--font-sans)",
      transition: "border-color var(--dur-fast) var(--ease-inout)"
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-light) var(--text-body-sm)/1.4 var(--font-sans)",
      color: error ? "var(--signal-critical)" : "var(--text-faint)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/** Radio group rendered as stacked hairline rows — used for configurator choices. */
function Radio({
  name,
  options = [],
  value,
  onChange,
  layout = "stack",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: "flex",
      flexDirection: layout === "row" ? "row" : "column",
      gap: layout === "row" ? 28 : 0,
      ...style
    }
  }, options.map((o, i) => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    const meta = typeof o === "string" ? null : o.meta;
    const sel = value === v;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        cursor: "pointer",
        padding: layout === "row" ? 0 : "16px 0",
        borderTop: layout === "row" || i === 0 ? "none" : "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      checked: sel,
      onChange: () => onChange && onChange(v),
      style: {
        position: "absolute",
        opacity: 0,
        width: 0,
        height: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 16,
        height: 16,
        borderRadius: "var(--radius-round)",
        flex: "0 0 auto",
        display: "grid",
        placeItems: "center",
        border: `1px solid ${sel ? "var(--accent)" : "var(--border-strong)"}`,
        transition: "border-color var(--dur-fast) var(--ease-inout)"
      }
    }, sel && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: "var(--radius-round)",
        background: "var(--accent)"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        font: "var(--weight-light) var(--text-body)/1.4 var(--font-sans)",
        color: sel ? "var(--text-primary)" : "var(--text-body)"
      }
    }, l), meta && /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--weight-regular) var(--text-micro)/1 var(--font-mono)",
        letterSpacing: "0.12em",
        color: "var(--text-faint)"
      }
    }, meta));
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Underline select, matching Input. Native menu — no custom popover. */
function Select({
  label,
  options = [],
  value,
  onChange,
  hint,
  disabled,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || `v-${label ? label.replace(/\s+/g, "-").toLowerCase() : "select"}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      font: "var(--weight-medium) var(--text-micro)/1 var(--font-sans)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: focus ? "var(--accent)" : "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      borderBottom: `1px solid ${focus ? "var(--accent)" : "var(--border-hairline)"}`,
      transition: "border-color var(--dur-fast) var(--ease-inout)"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      background: "transparent",
      border: 0,
      outline: "none",
      flex: 1,
      padding: "10px 24px 14px 0",
      color: "var(--text-primary)",
      borderRadius: 0,
      font: "var(--weight-light) var(--text-body-lg)/1.4 var(--font-sans)"
    }
  }, rest), options.map(o => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v,
      style: {
        background: "var(--obsidian-900)",
        color: "var(--bone-050)"
      }
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 14,
    style: {
      position: "absolute",
      right: 0,
      color: "var(--text-muted)",
      pointerEvents: "none"
    }
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-light) var(--text-body-sm)/1.4 var(--font-sans)",
      color: "var(--text-faint)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** Squared toggle for binary settings (drive modes, notifications). */
function Switch({
  label,
  description,
  checked,
  onChange,
  disabled,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-medium) var(--text-micro)/1 var(--font-sans)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-primary)"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-light) var(--text-body-sm)/1.5 var(--font-sans)",
      color: "var(--text-faint)"
    }
  }, description)), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 20,
      flex: "0 0 auto",
      position: "relative",
      border: `1px solid ${checked ? "var(--accent)" : "var(--border-strong)"}`,
      background: checked ? "rgba(198,167,106,.16)" : "transparent",
      transition: "all var(--dur-fast) var(--ease-inout)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: checked ? 26 : 2,
      width: 16,
      height: 14,
      background: checked ? "var(--accent)" : "var(--text-muted)",
      transition: "left var(--dur-fast) var(--ease-editorial),background var(--dur-fast) var(--ease-inout)"
    }
  })));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/motion/Parallax.jsx
try { (() => {
/** Slow vertical parallax for photography. Depth is a percentage of the element height; keep it ≤ 14%. */
function Parallax({
  children,
  depth = 10,
  scrollRoot,
  style = {}
}) {
  const ref = React.useRef(null);
  const [y, setY] = React.useState(0);
  React.useEffect(() => {
    const root = scrollRoot && scrollRoot.current || null;
    const target = root || window;
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = root ? root.clientHeight : window.innerHeight;
      const p = (r.top + r.height / 2 - vh / 2) / vh; // -1 .. 1
      setY(Math.max(-1, Math.min(1, p)) * depth);
    };
    onScroll();
    target.addEventListener("scroll", onScroll, {
      passive: true
    });
    window.addEventListener("resize", onScroll);
    return () => {
      target.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [depth, scrollRoot]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: `translate3d(0,${y}%,0) scale(1.08)`,
      willChange: "transform",
      transition: "transform 120ms linear"
    }
  }, children));
}
Object.assign(__ds_scope, { Parallax });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/Parallax.jsx", error: String((e && e.message) || e) }); }

// components/motion/Reveal.jsx
try { (() => {
/** Scroll-triggered reveal: 28px rise + fade over 1.1s on the editorial easing. The house entrance animation. */
function Reveal({
  children,
  delay = 0,
  shift = 28,
  direction = "up",
  once = true,
  as: Tag = "div",
  style = {}
}) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setShown(true);
          if (once) io.unobserve(e.target);
        } else if (!once) setShown(false);
      });
    }, {
      threshold: 0.18,
      rootMargin: "0px 0px -8% 0px"
    });
    io.observe(el);
    return () => io.disconnect();
  }, [once]);
  const off = direction === "down" ? `-${shift}px` : direction === "left" ? `0,0` : `${shift}px`;
  const transform = shown ? "none" : direction === "left" ? `translateX(${shift}px)` : direction === "right" ? `translateX(-${shift}px)` : `translateY(${off})`;
  return /*#__PURE__*/React.createElement(Tag, {
    ref: ref,
    style: {
      opacity: shown ? 1 : 0,
      transform,
      transition: `opacity var(--dur-reveal) var(--ease-editorial) ${delay}ms, transform var(--dur-reveal) var(--ease-editorial) ${delay}ms`,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Reveal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/Reveal.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
/**
 * Fixed site header: wordmark left, hairline nav center, single action right.
 */
function NavBar({
  links = [],
  active,
  onNavigate,
  cta = "Reserve",
  onCta,
  transparent = true,
  style = {}
}) {
  const [hovered, setHovered] = React.useState(null);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 32,
      padding: "22px clamp(20px,5.5vw,96px)",
      background: transparent ? "linear-gradient(rgba(8,8,10,.78),rgba(8,8,10,0))" : "var(--surface-base)",
      borderBottom: transparent ? "none" : "1px solid var(--border-hairline)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(links[0] && (links[0].value || links[0]));
    },
    style: {
      border: 0,
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 18
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 34,
      alignItems: "center"
    }
  }, links.map(l => {
    const v = typeof l === "string" ? l : l.value;
    const label = typeof l === "string" ? l : l.label;
    const lit = active === v || hovered === v;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      onClick: () => onNavigate && onNavigate(v),
      onMouseEnter: () => setHovered(v),
      onMouseLeave: () => setHovered(null),
      style: {
        background: "none",
        border: 0,
        cursor: "pointer",
        padding: "4px 0",
        borderBottom: `1px solid ${active === v ? "var(--accent)" : "transparent"}`,
        font: "var(--weight-medium) var(--text-micro)/1 var(--font-sans)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: lit ? "var(--text-primary)" : "var(--text-muted)",
        transition: "color var(--dur-fast) var(--ease-inout)"
      }
    }, label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "search",
    label: "Search",
    variant: "bare",
    size: "sm"
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    onClick: onCta
  }, cta)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Hairline tab strip — model switchers, spec categories. The active tab carries a champagne underline. */
function Tabs({
  items = [],
  value,
  onChange,
  size = "md",
  align = "left",
  style = {}
}) {
  const fs = size === "lg" ? "var(--text-label)" : "var(--text-micro)";
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: size === "lg" ? 40 : 28,
      borderBottom: "1px solid var(--border-hairline)",
      justifyContent: align === "center" ? "center" : "flex-start",
      ...style
    }
  }, items.map(it => {
    const v = typeof it === "string" ? it : it.value;
    const l = typeof it === "string" ? it : it.label;
    const active = value === v;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(v),
      style: {
        background: "none",
        border: 0,
        borderBottom: `1px solid ${active ? "var(--accent)" : "transparent"}`,
        marginBottom: -1,
        padding: "0 0 16px",
        cursor: "pointer",
        font: `var(--weight-medium) ${fs}/1 var(--font-sans)`,
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: active ? "var(--text-primary)" : "var(--text-muted)",
        transition: "color var(--dur-fast) var(--ease-inout),border-color var(--dur-fast) var(--ease-inout)"
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Craft.jsx
try { (() => {
const {
  SectionLabel,
  MediaFrame,
  PullQuote,
  SpecStat,
  TextLink,
  Reveal,
  Parallax
} = window.VRONADesignSystem_76500e;
function Craft({
  scrollRoot
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    light: true,
    style: {
      paddingBottom: "clamp(40px,5vw,80px)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "01",
    rule: true,
    style: {
      marginBottom: 44
    }
  }, "Craftsmanship"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.1fr) minmax(0,.9fr)",
      gap: "clamp(28px,5vw,96px)",
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "v-display",
    style: {
      fontSize: "var(--text-display-1)"
    }
  }, "Ninety hours", /*#__PURE__*/React.createElement("br", null), "per cabin"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "300 var(--text-lead)/1.55 var(--font-sans)",
      color: "var(--text-body)",
      maxWidth: "var(--measure-short)"
    }
  }, "Every hide is measured twice and cut once. The stitch pitch is set by hand at seven per inch \u2014 close enough to read as a line, open enough to breathe."))), /*#__PURE__*/React.createElement(Section, {
    light: true,
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "21 / 9",
    index: "FIG. 01",
    caption: "Trim atelier, Modena. Sabbia hide, first cut.",
    placeholder: "Craft \u2014 hands stitching leather"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
      gap: "clamp(20px,3vw,48px)",
      marginTop: "clamp(40px,5vw,88px)"
    }
  }, [["90", "HRS", "Trim per cabin"], ["7", "/IN", "Stitch pitch"], ["12", "PCS", "Hides selected"], ["1", "OF 220", "Series volume"]].map(([v, u, l], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: l,
    delay: i * 90
  }, /*#__PURE__*/React.createElement(SpecStat, {
    value: v,
    unit: u,
    label: l,
    divider: true
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--obsidian-1000)"
    }
  }, /*#__PURE__*/React.createElement(Parallax, {
    depth: 10,
    scrollRoot: scrollRoot,
    style: {
      height: "min(70vh,680px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "min(70vh,680px)"
    }
  }, /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "auto",
    placeholder: "Interior \u2014 cabin, low light",
    style: {
      height: "100%"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-bottom)",
      display: "flex",
      alignItems: "flex-end",
      padding: "clamp(28px,4vw,64px) clamp(20px,5.5vw,96px)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(PullQuote, {
    attribution: "Marco Bellini",
    role: "Master trimmer"
  }, "The cabin should feel finished before it feels new.")))), /*#__PURE__*/React.createElement(Section, {
    light: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,.85fr) minmax(0,1.15fr)",
      gap: "clamp(28px,5vw,96px)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "02"
  }, "Materials"), /*#__PURE__*/React.createElement("h2", {
    className: "v-display",
    style: {
      fontSize: "var(--text-display-3)"
    }
  }, "Four finishes,", /*#__PURE__*/React.createElement("br", null), "no options list"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "300 var(--text-body)/1.62 var(--font-sans)",
      color: "var(--text-body)",
      maxWidth: "var(--measure-short)"
    }
  }, "Sabbia and Notte leather, oiled walnut, milled aluminium. Anything beyond these four is a commission, not a configuration."), /*#__PURE__*/React.createElement(TextLink, null, "Visit the materials library")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "clamp(16px,2vw,28px)"
    }
  }, ["Leather — Sabbia", "Leather — Notte", "Walnut, oiled", "Aluminium, milled"].map((m, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: m,
    delay: i * 90
  }, /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "1 / 1",
    caption: m,
    placeholder: m
  })))))));
}
Object.assign(window, {
  Craft
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Craft.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  SectionLabel,
  MediaFrame,
  SpecStat,
  PullQuote,
  Tag,
  Badge,
  Button,
  TextLink,
  Icon,
  Reveal,
  Parallax,
  EditorialCard
} = window.VRONADesignSystem_76500e;
function Home({
  onNavigate,
  scrollRoot
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      height: "min(92vh,900px)",
      minHeight: 560,
      overflow: "hidden",
      background: "var(--obsidian-1000)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "auto",
    placeholder: "Hero \u2014 GT Coup\xE9, three-quarter front, low key",
    scrim: "bottom",
    style: {
      height: "100%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: "0 clamp(20px,5.5vw,96px) clamp(40px,5vw,72px)",
      gap: 34
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 1,
      background: "var(--accent)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 11px/1 var(--font-sans)",
      letterSpacing: "0.32em",
      textTransform: "uppercase",
      color: "var(--bone-050)"
    }
  }, "GT Coup\xE9 \xB7 MMXXVI"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 90
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "var(--text-hero)",
      lineHeight: "var(--leading-hero)",
      letterSpacing: "var(--tracking-hero)",
      color: "var(--bone-050)",
      textWrap: "balance"
    }
  }, "Silence,", /*#__PURE__*/React.createElement("br", null), "then thunder")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 180
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 40,
      flexWrap: "wrap",
      borderTop: "1px solid rgba(251,250,247,.18)",
      paddingTop: 28
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "300 var(--text-lead)/1.5 var(--font-sans)",
      color: "rgba(251,250,247,.82)",
      maxWidth: "34ch"
    }
  }, "A grand tourer built for the hours between cities. Six hundred and twelve horsepower, delivered without theatre."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: "arrow-right",
    onClick: () => onNavigate("Reserve")
  }, "Reserve"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNavigate("Models")
  }, "The GT Coup\xE9")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--obsidian-1000)",
      padding: "clamp(48px,6vw,88px) clamp(20px,5.5vw,96px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "clamp(20px,3vw,48px)"
    }
  }, [["2.9", "SEC", "0–100 km/h", "Launch control engaged"], ["612", "BHP", "System output", "4.0 V8 · twin turbo"], ["318", "KM/H", "V-max", "Electronically limited"], ["1,684", "KG", "Dry mass", "Bonded aluminium tub"]].map(([v, u, l, n], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: l,
    delay: i * 90
  }, /*#__PURE__*/React.createElement(SpecStat, {
    value: v,
    unit: u,
    label: l,
    note: n,
    divider: true
  }))))), /*#__PURE__*/React.createElement(Section, {
    light: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,.9fr) minmax(0,1.1fr)",
      gap: "clamp(28px,5vw,96px)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 34,
      position: "sticky",
      top: 120
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "01",
    rule: true
  }, "Design"), /*#__PURE__*/React.createElement("h2", {
    className: "v-display",
    style: {
      fontSize: "var(--text-display-2)"
    }
  }, "Drawn in one line"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "300 var(--text-body-lg)/var(--leading-body) var(--font-sans)",
      color: "var(--text-body)",
      maxWidth: "var(--measure-short)"
    }
  }, "The silhouette is a single unbroken gesture from the front axle to the rear haunch. No vent is decorative. No crease exists without a reason."), /*#__PURE__*/React.createElement(TextLink, {
    onClick: () => onNavigate("Models")
  }, "Read the design brief")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "clamp(20px,3vw,40px)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "4 / 3",
    index: "FIG. 01",
    caption: "Rear haunch, clay model, week nineteen.",
    placeholder: "Design \u2014 clay model detail"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "clamp(16px,2vw,32px)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 90
  }, /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "1 / 1",
    placeholder: "Detail \u2014 headlamp graphic"
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 180
  }, /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "1 / 1",
    placeholder: "Detail \u2014 forged wheel"
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--obsidian-1000)"
    }
  }, /*#__PURE__*/React.createElement(Parallax, {
    depth: 12,
    scrollRoot: scrollRoot,
    style: {
      height: "min(78vh,760px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "min(78vh,760px)"
    }
  }, /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "auto",
    placeholder: "Full-bleed \u2014 coastal road at dusk",
    style: {
      height: "100%"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-left)",
      display: "flex",
      alignItems: "center",
      padding: "0 clamp(20px,5.5vw,96px)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(PullQuote, {
    size: "lg",
    attribution: "Lucia Marchetti",
    role: "Chief Designer"
  }, "We removed everything that wasn't the car.")))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 24,
      marginBottom: "clamp(32px,4vw,64px)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "02"
  }, "The range"), /*#__PURE__*/React.createElement("h2", {
    className: "v-display",
    style: {
      fontSize: "var(--text-display-2)"
    }
  }, "Three characters,", /*#__PURE__*/React.createElement("br", null), "one discipline")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    interactive: true,
    active: true
  }, "All"), /*#__PURE__*/React.createElement(Tag, {
    interactive: true
  }, "Coup\xE9"), /*#__PURE__*/React.createElement(Tag, {
    interactive: true
  }, "Berlinetta"), /*#__PURE__*/React.createElement(Tag, {
    interactive: true
  }, "Electric"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
      gap: "clamp(20px,3vw,44px)"
    }
  }, [["GT Coupé", "612 bhp · 2.9 s", "The grand tourer. Bonded aluminium, front-mid V8."], ["Berlinetta", "705 bhp · 2.6 s", "Track-derived, road-legal. Carbon monocoque."], ["Tempesta", "820 bhp · 2.3 s", "Fully electric. Four motors, torque vectored."]].map(([t, k, b], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t,
    delay: i * 90
  }, /*#__PURE__*/React.createElement(EditorialCard, {
    ratio: "4 / 5",
    kicker: k,
    title: t,
    body: b,
    placeholder: t + " — three-quarter",
    onClick: () => onNavigate("Models"),
    linkLabel: "Configure",
    href: "#"
  }))))), /*#__PURE__*/React.createElement(Section, {
    light: true,
    style: {
      paddingTop: "clamp(56px,7vw,120px)",
      paddingBottom: "clamp(56px,7vw,120px)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "03",
    rule: true,
    style: {
      marginBottom: 40
    }
  }, "Journal"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
      gap: "clamp(20px,3vw,48px)"
    }
  }, [["Modena, 05:40", "The first hour of a build day."], ["Ninety hours of leather", "Inside the trim atelier."], ["Wind, measured", "Two thousand hours in the tunnel."]].map(([t, b], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t,
    delay: i * 90
  }, /*#__PURE__*/React.createElement("article", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      borderTop: "1px solid var(--border-hairline)",
      paddingTop: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 9px/1 var(--font-mono)",
      letterSpacing: "0.12em",
      color: "var(--text-accent)"
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "var(--text-h2)",
      color: "var(--text-primary)"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "300 var(--text-body)/1.62 var(--font-sans)",
      color: "var(--text-body)"
    }
  }, b), /*#__PURE__*/React.createElement(TextLink, null, "Read")))))));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Model.jsx
try { (() => {
const {
  SectionLabel,
  MediaFrame,
  SpecStat,
  Tabs,
  Badge,
  Button,
  TextLink,
  IconButton,
  Tooltip,
  Reveal,
  Radio,
  Switch,
  Tag
} = window.VRONADesignSystem_76500e;
const SPECS = {
  Performance: [["Output", "612 bhp @ 7,400 rpm"], ["Torque", "760 Nm @ 2,300 rpm"], ["0–100 km/h", "2.9 s"], ["V-max", "318 km/h"]],
  Chassis: [["Structure", "Bonded aluminium tub"], ["Torsional stiffness", "+34% vs. outgoing"], ["Suspension", "Double wishbone, adaptive"], ["Brakes", "Carbon-ceramic, 398 mm"]],
  Interior: [["Trim", "Hand-stitched Sabbia leather"], ["Seats", "Carbon-shell, 18-way"], ["Instruments", "12.3in curved, mono display"], ["Trim hours", "90 per cabin"]]
};
function Model({
  onNavigate
}) {
  const [tab, setTab] = React.useState("Performance");
  const [wheels, setWheels] = React.useState("22");
  const [sport, setSport] = React.useState(true);
  const [shot, setShot] = React.useState(0);
  const shots = ["Exterior — three-quarter front", "Exterior — profile", "Interior — driver's seat", "Detail — exhaust finisher"];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      height: "min(76vh,720px)",
      minHeight: 460,
      background: "var(--obsidian-1000)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "auto",
    scrim: "bottom",
    placeholder: shots[shot],
    style: {
      height: "100%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "clamp(28px,4vw,56px) clamp(20px,5.5vw,96px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "MODEL",
    tone: "primary"
  }, "GT Coup\xE9 \xB7 MMXXVI"), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Allocation open")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 32,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "var(--text-display-1)",
      lineHeight: ".94",
      letterSpacing: "var(--tracking-display)",
      color: "var(--bone-050)"
    }
  }, "GT Coup\xE9"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 10px/1 var(--font-mono)",
      letterSpacing: "0.14em",
      color: "rgba(251,250,247,.6)"
    }
  }, String(shot + 1).padStart(2, "0"), " / 0", shots.length), /*#__PURE__*/React.createElement(IconButton, {
    icon: "arrow-left",
    label: "Previous image",
    onClick: () => setShot((shot - 1 + shots.length) % shots.length)
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "arrow-right",
    label: "Next image",
    onClick: () => setShot((shot + 1) % shots.length)
  }))))), /*#__PURE__*/React.createElement(Section, {
    light: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1.05fr)",
      gap: "clamp(28px,5vw,96px)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 30
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "01",
    rule: true
  }, "Specification"), /*#__PURE__*/React.createElement(Tabs, {
    items: Object.keys(SPECS),
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column"
    }
  }, SPECS[tab].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 24,
      padding: "18px 0",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      font: "500 10px/1.4 var(--font-sans)",
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, k), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      font: "300 var(--text-body-lg)/1.3 var(--font-sans)",
      color: "var(--text-primary)",
      textAlign: "right"
    }
  }, v)))), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Weighted combined, WLTP",
    placement: "right"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "300 13px/1.4 var(--font-sans)",
      color: "var(--text-muted)",
      borderBottom: "1px dotted var(--border-strong)"
    }
  }, "Consumption 12.4 l/100km"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 30,
      border: "1px solid var(--border-hairline)",
      padding: "clamp(22px,3vw,40px)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "02"
  }, "Configure"), /*#__PURE__*/React.createElement(Radio, {
    name: "wheels",
    value: wheels,
    onChange: setWheels,
    options: [{
      value: "21",
      label: '21" Filo forged',
      meta: "INCLUDED"
    }, {
      value: "22",
      label: '22" Corsa forged',
      meta: "+ €7,400"
    }, {
      value: "22d",
      label: '22" Corsa, diamond cut',
      meta: "+ €11,200"
    }]
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Sport exhaust",
    description: "Active above 3,000 rpm.",
    checked: sport,
    onChange: () => setSport(!sport)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, ["Notte", "Sabbia", "Verde Selva", "Grigio Modena"].map((c, i) => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    interactive: true,
    active: i === 0
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      borderTop: "1px solid var(--border-hairline)",
      paddingTop: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 10px/1 var(--font-sans)",
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "From"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(1.75rem,2.6vw,2.5rem)",
      color: "var(--text-primary)"
    }
  }, "\u20AC 268,400")), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    icon: "arrow-right",
    onClick: () => onNavigate("Reserve")
  }, "Request an allocation")))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: "clamp(16px,2vw,32px)"
    }
  }, shots.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s,
    delay: i * 90
  }, /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "4 / 5",
    index: "FIG. 0" + (i + 1),
    caption: s,
    placeholder: s
  }))))));
}
Object.assign(window, {
  Model
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Model.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Reserve.jsx
try { (() => {
const {
  SectionLabel,
  MediaFrame,
  Input,
  Select,
  Checkbox,
  Button,
  Dialog,
  Toast,
  Badge,
  Reveal,
  TextLink
} = window.VRONADesignSystem_76500e;
function Reserve() {
  const [sent, setSent] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);
  const [consent, setConsent] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
      minHeight: "80vh",
      background: "var(--obsidian-1000)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "clamp(56px,7vw,120px) clamp(20px,4vw,72px)",
      display: "flex",
      flexDirection: "column",
      gap: 34
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "01",
    rule: true
  }, "Private enquiry"), /*#__PURE__*/React.createElement("h1", {
    className: "v-display",
    style: {
      fontSize: "var(--text-display-2)"
    }
  }, "Request an", /*#__PURE__*/React.createElement("br", null), "allocation"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "300 var(--text-body-lg)/1.62 var(--font-sans)",
      color: "var(--text-body)",
      maxWidth: "var(--measure-short)"
    }
  }, "Two hundred and twenty cars will be built for 2026. A specialist will write to you within two business days."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 28,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Elena Rossi",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "you@domain.com",
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Model of interest",
    options: ["GT Coupé", "Berlinetta", "Tempesta"]
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Region",
    options: ["Italy", "Western Europe", "United Kingdom", "North America", "Asia Pacific"]
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Keep me informed of allocations",
    description: "Two dispatches a year. No more.",
    checked: consent,
    onChange: () => setConsent(!consent)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "arrow-right",
    onClick: () => setConfirm(true)
  }, "Submit enquiry"), /*#__PURE__*/React.createElement(TextLink, {
    icon: null
  }, "Call the Modena atelier"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderLeft: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "auto",
    scrim: "bottom",
    placeholder: "Reserve \u2014 atelier interior, Modena",
    style: {
      height: "100%"
    },
    overlay: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "accent"
    }, "220 cars \xB7 2026 series"), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "400 clamp(1.25rem,1.8vw,1.75rem)/1.15 var(--font-display)",
        color: "var(--bone-050)",
        maxWidth: "24ch"
      }
    }, "Viale Ciro Menotti 12, Modena"))
  }))), /*#__PURE__*/React.createElement(Dialog, {
    open: confirm,
    kicker: "Confirm",
    title: "Send this enquiry?",
    width: 440,
    onClose: () => setConfirm(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: () => setConfirm(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => {
        setConfirm(false);
        setSent(true);
      }
    }, "Send"))
  }, "Your details are shared only with the Modena atelier and your nearest partner."), sent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      left: "clamp(20px,5.5vw,96px)",
      bottom: 32,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "accent",
    message: "Enquiry received",
    detail: "A specialist will write within two business days.",
    onDismiss: () => setSent(false)
  })));
}
Object.assign(window, {
  Reserve
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Reserve.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
const {
  SectionLabel,
  MediaFrame,
  SpecStat,
  PullQuote,
  Tag,
  Badge,
  Button,
  TextLink,
  IconButton,
  Icon,
  Wordmark,
  Reveal,
  Parallax,
  EditorialCard,
  Tabs,
  Input,
  Select,
  Checkbox,
  Radio,
  Switch,
  Dialog,
  Toast,
  Tooltip,
  NavBar
} = window.VRONADesignSystem_76500e;
const PAD = {
  padding: "clamp(72px,11vw,168px) clamp(20px,5.5vw,96px)"
};
function Section({
  light,
  children,
  style = {},
  id
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    className: light ? "v-light" : undefined,
    style: {
      background: "var(--surface-base)",
      color: "var(--text-body)",
      ...PAD,
      ...style
    }
  }, children);
}
function Footer() {
  const cols = [{
    h: "Models",
    items: ["GT Coupé", "Berlinetta", "Tempesta", "Heritage"]
  }, {
    h: "Ownership",
    items: ["Reserve", "Service", "Collection care", "Track programme"]
  }, {
    h: "Atelier",
    items: ["Bespoke", "Materials library", "Modena studio", "Journal"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--obsidian-1000)",
      borderTop: "1px solid var(--border-hairline)",
      padding: "clamp(56px,7vw,104px) clamp(20px,5.5vw,96px) 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: "clamp(24px,4vw,64px)",
      paddingBottom: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 22,
    tagline: "Automobili \xB7 Modena"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "300 13px/1.7 var(--font-sans)",
      color: "var(--text-faint)",
      maxWidth: "30ch"
    }
  }, "Built in limited series since 1974. Allocations are held by invitation.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 10px/1 var(--font-sans)",
      letterSpacing: "0.32em",
      textTransform: "uppercase",
      color: "var(--accent)"
    }
  }, c.h), c.items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      border: 0,
      font: "300 13px/1 var(--font-sans)",
      color: "var(--text-muted)"
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 24,
      borderTop: "1px solid var(--border-hairline)",
      paddingTop: 26,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 9px/1 var(--font-mono)",
      letterSpacing: "0.14em",
      color: "var(--text-faint)"
    }
  }, "\xA9 2026 V\xC9RONA S.P.A. \xB7 WLTP FIGURES PROVISIONAL"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14
    }
  }, ["instagram", "youtube", "linkedin"].map(n => /*#__PURE__*/React.createElement(IconButton, {
    key: n,
    icon: n,
    label: n,
    variant: "bare",
    size: "sm"
  })))));
}
Object.assign(window, {
  Section,
  Footer,
  PAD
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Technology.jsx
try { (() => {
const {
  SectionLabel,
  MediaFrame,
  SpecStat,
  Tag,
  Badge,
  TextLink,
  Button,
  Reveal,
  Tooltip
} = window.VRONADesignSystem_76500e;
function Technology({
  onNavigate
}) {
  const rows = [["Powertrain", "4.0 V8 twin turbo, 48V mild hybrid", "612 bhp"], ["Transmission", "8-speed dual clutch, rear axle", "0.09 s shift"], ["Chassis control", "Adaptive dampers, 500 Hz sampling", "4-mode"], ["Aerodynamics", "Active rear blade, underfloor diffuser", "218 kg @ 250"], ["Cabin", "Curved mono display, haptic returns", "12.3 in"]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingBottom: "clamp(40px,5vw,72px)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "01",
    rule: true,
    style: {
      marginBottom: 44
    }
  }, "Technology"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.2fr) minmax(0,.8fr)",
      gap: "clamp(28px,5vw,96px)",
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "v-display",
    style: {
      fontSize: "var(--text-display-1)"
    }
  }, "Instruments,", /*#__PURE__*/React.createElement("br", null), "not gadgets"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "300 var(--text-lead)/1.55 var(--font-sans)",
      color: "var(--text-body)",
      maxWidth: "var(--measure-short)"
    }
  }, "Every system in a V\xC9RONA exists to tell the driver something true. Nothing is added for the sake of a specification sheet."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--obsidian-1000)",
      padding: "0 clamp(20px,5.5vw,96px) clamp(56px,7vw,120px)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(MediaFrame, {
    ratio: "21 / 9",
    scrim: "left",
    index: "FIG. 01",
    caption: "Driver display, night calibration.",
    placeholder: "Technology \u2014 cockpit instrument cluster",
    overlay: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16,
        maxWidth: "28ch"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "accent"
    }, "Series production"), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "400 clamp(1.5rem,2.4vw,2.4rem)/1.05 var(--font-display)",
        color: "var(--bone-050)"
      }
    }, "One display. One dial. One decision at a time."))
  }))), /*#__PURE__*/React.createElement(Section, {
    light: true,
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, rows.map(([k, v, m], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: k,
    delay: i * 60
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(120px,.5fr) minmax(0,1.4fr) minmax(80px,.3fr)",
      gap: 24,
      alignItems: "baseline",
      padding: "26px 0",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 10px/1.4 var(--font-sans)",
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--text-accent)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "300 var(--text-body-lg)/1.5 var(--font-sans)",
      color: "var(--text-primary)"
    }
  }, v), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 10px/1 var(--font-mono)",
      letterSpacing: "0.12em",
      color: "var(--text-muted)",
      textAlign: "right"
    }
  }, m))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
      gap: "clamp(20px,3vw,48px)",
      marginTop: "clamp(40px,5vw,88px)"
    }
  }, /*#__PURE__*/React.createElement(SpecStat, {
    value: "500",
    unit: "HZ",
    label: "Damper sampling",
    divider: true
  }), /*#__PURE__*/React.createElement(SpecStat, {
    value: "0.09",
    unit: "SEC",
    label: "Shift time",
    divider: true
  }), /*#__PURE__*/React.createElement(SpecStat, {
    value: "218",
    unit: "KG",
    label: "Downforce @ 250 km/h",
    divider: true
  }), /*#__PURE__*/React.createElement(SpecStat, {
    value: "48",
    unit: "V",
    label: "Hybrid architecture",
    divider: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20,
      marginTop: "clamp(32px,4vw,64px)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNavigate("Reserve"),
    icon: "arrow-right"
  }, "Book a technical briefing"), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Provisional, homologation pending",
    placement: "top"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "300 13px/1.4 var(--font-sans)",
      color: "var(--text-muted)",
      borderBottom: "1px dotted var(--border-strong)"
    }
  }, "Figures provisional")))));
}
Object.assign(window, {
  Technology
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Technology.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.EditorialCard = __ds_scope.EditorialCard;

__ds_ns.MediaFrame = __ds_scope.MediaFrame;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.SpecStat = __ds_scope.SpecStat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Parallax = __ds_scope.Parallax;

__ds_ns.Reveal = __ds_scope.Reveal;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
