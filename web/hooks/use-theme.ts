"use client";

import { useCallback, useSyncExternalStore } from "react";

export type Theme = "light" | "dark";
const KEY = "pt-theme";

function read(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function subscribe(cb: () => void) {
  const obs = new MutationObserver(cb);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => obs.disconnect();
}

/** Reads and writes the <html data-theme> attribute, persisting the choice to localStorage. */
export function useTheme(): [Theme, (t: Theme) => void] {
  const theme = useSyncExternalStore(subscribe, read, () => "light" as Theme);
  const set = useCallback((t: Theme) => {
    document.documentElement.dataset.theme = t;
    try {
      localStorage.setItem(KEY, t);
    } catch {
      /* storage unavailable (private mode); the attribute still applies for this visit */
    }
  }, []);
  return [theme, set];
}

/** Inline script run before paint so the stored or system theme applies with no flash. */
export const THEME_BOOT_SCRIPT = `(function(){try{var t=localStorage.getItem("${KEY}");if(!t)t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="light"}
var d=document.documentElement;var s=function(){d.classList.toggle("pt-nomotion",document.visibilityState!=="visible")};s();document.addEventListener("visibilitychange",s);addEventListener("beforeprint",function(){d.classList.add("pt-nomotion")});})();`;
