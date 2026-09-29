/** Joins class names, dropping falsy values. */
export function cn(...parts: (string | false | null | undefined)[]): string {
  return parts.filter(Boolean).join(" ");
}

/** Public asset path for files copied from the prototype's uploads/ and assets/ folders. */
export function asset(path: string): string {
  if (!path) return path;
  if (/^(https?:|data:|blob:|\/)/.test(path)) return path;
  return "/" + path;
}

/** Splits trailing sentence punctuation from a string: "Hello." → ["Hello", "."]. */
export function splitStop(s: string): [string, string | null] {
  const m = s.match(/^([\s\S]*?)([.!?]+)$/);
  return m ? [m[1], m[2]] : [s, null];
}

/** Number formatting used across dashboards and stats ("1,240"). */
export const fmt = (n: number) => n.toLocaleString("en-GB");

export const pad2 = (n: number) => String(n).padStart(2, "0");

/** True for Unsplash image URLs, which the design credits with "Photo: Unsplash". */
export function isUnsplash(src?: string): boolean {
  if (!src) return false;
  try {
    return /(^|\.)unsplash\.com$/i.test(new URL(src, "https://pathways.local").hostname);
  } catch {
    return false;
  }
}
