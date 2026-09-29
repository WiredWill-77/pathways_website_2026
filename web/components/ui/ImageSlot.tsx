import type { CSSProperties } from "react";
import { IMAGE_SLOTS } from "@/lib/image-slots";
import { asset, cn, isUnsplash } from "@/lib/utils";

type ImageSlotProps = {
  /** Slot id from the prototype. Resolves to a designer-supplied image in lib/image-slots.ts. */
  id?: string;
  /** Explicit image. A designer-dropped slot image takes precedence, as it did in the prototype. */
  src?: string;
  alt?: string;
  placeholder?: string;
  shape?: "rect" | "circle";
  credit?: string;
  creditHref?: string;
  className?: string;
  style?: CSSProperties;
  imgStyle?: CSSProperties;
};

/**
 * Cover-fit image that fills its parent. Replaces the prototype's <image-slot> web component:
 * same fill, same bottom-left credit chip, and a neutral surface when no art has been supplied.
 */
export function ImageSlot({
  id,
  src,
  alt = "",
  placeholder = "Image",
  shape = "rect",
  credit,
  creditHref,
  className,
  style,
  imgStyle,
}: ImageSlotProps) {
  const resolved = (id && IMAGE_SLOTS[id]) || (src ? asset(src) : undefined);
  const cred = credit ?? (resolved && isUnsplash(resolved) ? "Photo: Unsplash" : undefined);
  const href = creditHref ?? (cred && isUnsplash(resolved) ? "https://unsplash.com/?utm_source=pathways&utm_medium=referral" : undefined);
  return (
    <span className={cn("pt-slot", shape === "circle" && "is-circle", className)} style={style}>
      {resolved ? (
        <>
          <img src={resolved} alt={alt} loading="lazy" style={imgStyle} />
          {cred &&
            (href ? (
              <a className="pt-slot-credit" href={href} target="_blank" rel="noopener noreferrer">
                {cred}
              </a>
            ) : (
              <span className="pt-slot-credit">{cred}</span>
            ))}
        </>
      ) : (
        <span className="pt-slot-empty" role="img" aria-label={alt || placeholder}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ opacity: 0.6 }}>
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" />
          </svg>
          {process.env.NODE_ENV !== "production" && <span style={{ opacity: 0.75 }}>{placeholder}</span>}
        </span>
      )}
    </span>
  );
}
