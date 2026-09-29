import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Design-system TextInput: 44px (md) or 52px (lg) hairline field with the blue focus ring.
 * Focus styling is CSS (:focus-within), so this works in server and client components alike.
 */
export function TextInput({
  prefix,
  size = "md",
  invalid,
  className,
  wrapperStyle,
  disabled,
  ...rest
}: Omit<ComponentPropsWithoutRef<"input">, "size" | "prefix"> & {
  prefix?: ReactNode;
  size?: "md" | "lg";
  invalid?: boolean;
  wrapperStyle?: React.CSSProperties;
}) {
  return (
    <div
      className={cn("ds-input", invalid && "is-invalid", disabled && "is-disabled", className)}
      style={{ height: size === "lg" ? 52 : 44, ...wrapperStyle }}
    >
      {prefix}
      <input disabled={disabled} aria-invalid={invalid || undefined} {...rest} />
    </div>
  );
}

export function TextArea({
  invalid,
  className,
  wrapperStyle,
  rows = 5,
  ...rest
}: ComponentPropsWithoutRef<"textarea"> & { invalid?: boolean; wrapperStyle?: React.CSSProperties }) {
  return (
    <div className={cn("ds-input", invalid && "is-invalid", className)} style={{ padding: "12px 16px", alignItems: "stretch", ...wrapperStyle }}>
      <textarea rows={rows} aria-invalid={invalid || undefined} style={{ resize: "vertical", lineHeight: 1.6 }} {...rest} />
    </div>
  );
}

export function Select({
  invalid,
  className,
  wrapperStyle,
  children,
  ...rest
}: ComponentPropsWithoutRef<"select"> & { invalid?: boolean; wrapperStyle?: React.CSSProperties }) {
  return (
    <div className={cn("ds-input", invalid && "is-invalid", className)} style={{ height: 44, ...wrapperStyle }}>
      <select aria-invalid={invalid || undefined} style={{ cursor: "pointer" }} {...rest}>
        {children}
      </select>
    </div>
  );
}

/** Label + control + optional hint/error, stacked. */
export function Field({
  label,
  htmlFor,
  hint,
  error,
  required,
  children,
  className,
}: {
  label: ReactNode;
  htmlFor?: string;
  hint?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-2", className)}>
      <label htmlFor={htmlFor} style={{ fontSize: "var(--text-sm)", fontWeight: 500, color: "var(--text-primary)" }}>
        {label}
        {required && <span style={{ color: "var(--primary)" }}> *</span>}
      </label>
      {children}
      {error ? (
        <span role="alert" style={{ fontSize: "var(--text-xs)", color: "var(--danger)" }}>
          {error}
        </span>
      ) : (
        hint && <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{hint}</span>
      )}
    </div>
  );
}
