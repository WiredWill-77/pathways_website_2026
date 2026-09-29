"use client";

import { useCallback, useEffect, useState } from "react";

export type AsyncState<T> =
  | { status: "loading"; data: undefined; error: undefined }
  | { status: "success"; data: T; error: undefined }
  | { status: "error"; data: undefined; error: Error };

const LOADING = { status: "loading", data: undefined, error: undefined } as const;

/**
 * Runs an async data accessor from a client component and tracks loading / error state.
 * `deps` (serialisable values such as ids and filters) re-run the fetch; `reload()` re-runs it on
 * demand, e.g. after a mutation.
 *
 *   const { status, data, reload } = useAsync(() => listCmsRecords("insights"), ["insights"]);
 *
 * Server components should call accessors directly instead. This is for interactive screens
 * (admin, checkout) where data changes in the browser.
 */
export function useAsync<T>(fn: () => Promise<T>, deps: unknown[]): AsyncState<T> & { reload: () => void } {
  const [tick, setTick] = useState(0);
  const key = JSON.stringify(deps) + "#" + tick;
  const [result, setResult] = useState<{ key: string; state: AsyncState<T> } | null>(null);

  useEffect(() => {
    let live = true;
    fn().then(
      (data) => live && setResult({ key, state: { status: "success", data, error: undefined } }),
      (e: unknown) => live && setResult({ key, state: { status: "error", data: undefined, error: e instanceof Error ? e : new Error(String(e)) } }),
    );
    return () => {
      live = false;
    };
    // `fn` is intentionally not a dependency: callers pass an inline closure, and `key` captures what it reads.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const reload = useCallback(() => setTick((t) => t + 1), []);
  const state: AsyncState<T> = result && result.key === key ? result.state : LOADING;
  return { ...state, reload };
}
