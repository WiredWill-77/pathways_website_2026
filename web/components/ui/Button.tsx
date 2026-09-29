import Link from "next/link";
import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonSize = "sm" | "md" | "lg";
export type ButtonVariant = "accent" | "accentSoft" | "dark" | "outline" | "onDark" | "onAccent";

type Common = {
  size?: ButtonSize;
  /** Circled arrow affix that marks the primary action. */
  arrow?: boolean;
  icon?: ReactNode;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

type AsLink = Common & { href: string } & Omit<ComponentPropsWithoutRef<"a">, keyof Common | "href">;
type AsButton = Common & { href?: undefined } & Omit<ComponentPropsWithoutRef<"button">, keyof Common>;
export type ButtonBaseProps = AsLink | AsButton;

export function ArrowAffix() {
  return (
    <span className="ds-btn-arrow" aria-hidden="true">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </span>
  );
}

/** Shared pill shell. Renders a Next <Link> when `href` is set, otherwise a <button>. */
export function ButtonBase({ size = "md", arrow = false, icon, disabled, className, children, ...rest }: ButtonBaseProps) {
  const cls = cn("ds-btn", `ds-btn-${size}`, arrow && "has-arrow", className);
  const content = (
    <>
      {icon}
      {children}
      {arrow && <ArrowAffix />}
    </>
  );
  if ("href" in rest && rest.href !== undefined) {
    const { href, ...a } = rest as AsLink;
    const external = /^(https?:|mailto:|tel:)/.test(href);
    if (external || disabled) {
      return (
        <a href={disabled ? undefined : href} aria-disabled={disabled || undefined} className={cls} {...a}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...a}>
        {content}
      </Link>
    );
  }
  const b = rest as AsButton;
  return (
    <button type={b.type ?? "button"} disabled={disabled} className={cls} {...b}>
      {content}
    </button>
  );
}

/** Design-system Button: five treatments, pill shaped, 32/40/48 heights. */
export function Button({ variant = "accentSoft", className, ...rest }: ButtonBaseProps & { variant?: ButtonVariant }) {
  return <ButtonBase className={cn(`ds-btn-${variant}`, className)} {...(rest as ButtonBaseProps)} />;
}
