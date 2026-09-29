import { ButtonBase, type ButtonBaseProps } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export type PtTone = "primary" | "secondary" | "ghost";

/**
 * Orange-led primary, blue-supported secondary, and a ghost that flips for dark bands.
 * Wraps the design-system pill; colours and hover live in styles/components.css (.pt-btn-*).
 * Pass `href` to render a link (the prototype used onClick + location.href).
 */
export function PtButton({ tone = "primary", onDark = false, className, ...rest }: ButtonBaseProps & { tone?: PtTone; onDark?: boolean }) {
  return <ButtonBase className={cn(`pt-btn-${tone}`, tone === "ghost" && onDark && "on-dark", className)} {...(rest as ButtonBaseProps)} />;
}
