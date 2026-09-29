"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore, type FormEvent } from "react";
import { ThemeToggle } from "@/components/brand/ThemeToggle";
import { Icon } from "@/components/ui/Icon";
import { useAsync } from "@/hooks/use-async";
import { createCmsRepository, type CmsRepository } from "@/lib/data/cms-repository";
import { routes, slugify } from "@/lib/routes";
import type { CmsCollection, CmsCollectionKey, CmsRecord, CmsSeed, CmsUser } from "@/types/cms";
import { CmsField } from "./fields";
import { cmsPreviewHref, CmsConfirm, CmsSlideOver, CmsStatus, CmsTable, CmsToast } from "./ui";

/* Admin CMS (prototype: cms-app.jsx). Login, dashboard, one list + slide-over editor per collection,
   and the team page. Views are addressed by the URL hash (#dashboard, #insights, #team). */

const LOGO = "/uploads/Pathways Logo - HD 1 1.png";
const LOGO_WHITE = "/uploads/Pathways Technologies Logo - White 1.png";
const PAGE_SIZE = 10;

type Toast = (msg: string) => void;

function subscribeHash(cb: () => void) {
  window.addEventListener("hashchange", cb);
  return () => window.removeEventListener("hashchange", cb);
}
const useHashView = () =>
  useSyncExternalStore(
    subscribeHash,
    () => window.location.hash.replace("#", "") || "dashboard",
    () => "dashboard",
  );
const go = (view: string) => {
  window.location.hash = view;
};

/* ------------------------------------------------------------------ Login */

function CmsLogin({ repo, onDone }: { repo: CmsRepository; onDone: (u: CmsUser) => void }) {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      onDone(await repo.login(email.trim(), pw));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not sign in.");
    } finally {
      setBusy(false);
    }
  };
  return (
    <div className="cms-login">
      <form className="cms-login-card" onSubmit={submit}>
        <img src={LOGO} alt="Pathways Technologies" className="cms-login-logo cms-logo-light" />
        <img src={LOGO_WHITE} alt="Pathways Technologies" className="cms-login-logo cms-logo-dark" />
        <h1>Content admin</h1>
        <p className="cms-muted">Sign in with your Pathways team account.</p>
        <label className="cms-field">
          <span>Email</span>
          <input className="cms-input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" autoComplete="username" required />
        </label>
        <label className="cms-field">
          <span>Password</span>
          <input className="cms-input" value={pw} onChange={(e) => setPw(e.target.value)} type="password" autoComplete="current-password" required />
        </label>
        {error && <p className="cms-small" role="alert" style={{ color: "#c0392b" }}>{error}</p>}
        <button className="cms-btn is-primary cms-block" disabled={busy}>
          {busy ? "Signing in…" : "Sign In"}
        </button>
        <p className="cms-muted cms-small">Admins can delete content and manage the team. Editors can create and update.</p>
      </form>
    </div>
  );
}

/* ------------------------------------------------------------------ Editor */

function CmsEditor({
  repo,
  cfg,
  item,
  onClose,
  onSaved,
  toast,
}: {
  repo: CmsRepository;
  cfg: CmsCollection;
  item: Partial<CmsRecord>;
  onClose: () => void;
  onSaved: (rec: CmsRecord, msg: string) => void;
  toast: Toast;
}) {
  const titleKey = cfg.fields[0].key;
  const isNew = !item.id;
  const [draft, setDraft] = useState<Partial<CmsRecord>>({ status: "draft", ...item });
  const [busy, setBusy] = useState(false);
  const hasSlugField = cfg.fields.some((f) => f.key === "slug");

  const change = (k: string, v: string) =>
    setDraft((d) => {
      const next = { ...d, [k]: v };
      /* New entries follow their title with a slug until someone types one by hand. */
      if (k === titleKey && isNew && hasSlugField && (!d.slug || d.slug === slugify(d[titleKey] ?? ""))) next.slug = slugify(v);
      return next;
    });

  const save = async (status: CmsRecord["status"]) => {
    setBusy(true);
    try {
      const rec = await repo.save(cfg.key, { ...draft, status }, titleKey);
      onSaved(rec, status === "published" ? "Published" : "Saved");
    } catch (e) {
      toast(e instanceof Error ? e.message : "Could not save.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <CmsSlideOver
      title={isNew ? "New " + cfg.singular.toLowerCase() : draft[titleKey] || cfg.singular}
      subtitle={isNew ? "Draft, not yet visible on the site" : "Last updated " + (draft.updated || "—")}
      onClose={onClose}
      footer={
        <>
          <div className="cms-foot-left">
            <CmsStatus value={draft.status || "draft"} />
            {draft.slug && (
              <a className="cms-link" href={cmsPreviewHref(cfg.key, { slug: draft.slug })} target="_blank" rel="noopener">
                Open preview
              </a>
            )}
          </div>
          <div className="cms-foot-right">
            <button type="button" className="cms-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="button" className="cms-btn" disabled={busy} onClick={() => save("draft")}>
              Save draft
            </button>
            <button type="button" className="cms-btn is-primary" disabled={busy} onClick={() => save("published")}>
              {busy ? "Working…" : "Publish"}
            </button>
          </div>
        </>
      }
    >
      {cfg.fields.map((f) => (
        <CmsField key={f.key} def={f} value={draft[f.key]} onChange={change} onError={toast} />
      ))}
    </CmsSlideOver>
  );
}

/* ------------------------------------------------------------------ Collection list */

function CmsCollectionView({ repo, cfg, user, toast }: { repo: CmsRepository; cfg: CmsCollection; user: CmsUser; toast: Toast }) {
  const { status, data: rows, reload } = useAsync(() => repo.list(cfg.key), [cfg.key]);
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<"all" | CmsRecord["status"]>("all");
  const [page, setPage] = useState(1);
  const [editing, setEditing] = useState<Partial<CmsRecord> | null>(null);
  const [confirm, setConfirm] = useState<CmsRecord | null>(null);

  const all = rows ?? [];
  const needle = q.toLowerCase();
  const visible = all.filter((r) => (filter === "all" || r.status === filter) && (!needle || JSON.stringify(r).toLowerCase().includes(needle)));
  const pageCount = Math.max(1, Math.ceil(visible.length / PAGE_SIZE));
  const current = Math.min(page, pageCount);
  const pageRows = visible.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);
  const titleKey = cfg.fields[0].key;

  return (
    <>
      <a className="cms-back" href="#dashboard">
        &larr; Back to Dashboard
      </a>
      <header className="cms-page-head">
        <div>
          <h1>{cfg.label}</h1>
          <p className="cms-muted">
            {rows ? all.length : "…"} entries · {all.filter((r) => r.status === "draft").length} in draft
          </p>
        </div>
        <div className="cms-head-actions">
          <input
            className="cms-input cms-search"
            placeholder="Search"
            aria-label={"Search " + cfg.label}
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setPage(1);
            }}
          />
          <select
            className="cms-input cms-select"
            aria-label="Filter by status"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value as typeof filter);
              setPage(1);
            }}
          >
            <option value="all">All statuses</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
          <button type="button" className="cms-btn is-primary" onClick={() => setEditing({})}>
            New
          </button>
        </div>
      </header>

      {status === "loading" ? (
        <div className="cms-empty">Loading…</div>
      ) : status === "error" ? (
        <div className="cms-empty">This collection could not be loaded. Refresh the page to try again.</div>
      ) : (
        <>
          <CmsTable col={cfg.key} columns={cfg.columns} rows={pageRows} canDelete={user.role === "Admin"} onOpen={setEditing} onDelete={setConfirm} />
          {visible.length > 0 && (
            <div className="cms-pagination">
              <span className="cms-muted cms-small">
                Showing {(current - 1) * PAGE_SIZE + 1}–{Math.min(current * PAGE_SIZE, visible.length)} of {visible.length}
              </span>
              <div className="cms-page-btns">
                <button type="button" className="cms-btn" disabled={current === 1} onClick={() => setPage(current - 1)}>
                  Prev
                </button>
                <span className="cms-muted cms-small">
                  Page {current} of {pageCount}
                </span>
                <button type="button" className="cms-btn" disabled={current === pageCount} onClick={() => setPage(current + 1)}>
                  Next
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {editing && (
        <CmsEditor
          repo={repo}
          cfg={cfg}
          item={editing}
          toast={toast}
          onClose={() => setEditing(null)}
          onSaved={(rec, msg) => {
            setEditing(null);
            toast(msg + " · " + (rec[titleKey] || cfg.singular));
            reload();
          }}
        />
      )}
      {confirm && (
        <CmsConfirm
          title={"Delete " + (confirm[titleKey] || "entry") + "?"}
          body="This removes it from the CMS and from its page on the site."
          onCancel={() => setConfirm(null)}
          onConfirm={async () => {
            await repo.remove(cfg.key, confirm.id);
            setConfirm(null);
            toast("Deleted");
            reload();
          }}
        />
      )}
    </>
  );
}

/* ------------------------------------------------------------------ Dashboard and team */

function CmsDashboard({ repo, collections, user }: { repo: CmsRepository; collections: CmsCollection[]; user: CmsUser }) {
  const router = useRouter();
  const { data: counts } = useAsync(
    () =>
      Promise.all(
        collections.map(async (c) => {
          const rows = await repo.list(c.key).catch(() => []);
          return [c.key, { total: rows.length, draft: rows.filter((r) => r.status === "draft").length }] as const;
        }),
      ).then((pairs) => Object.fromEntries(pairs) as Partial<Record<CmsCollectionKey, { total: number; draft: number }>>),
    [],
  );
  const back = () => {
    const ref = document.referrer;
    if (ref && new URL(ref).origin === window.location.origin) router.back();
    else router.push(routes.home);
  };
  return (
    <>
      <button type="button" className="cms-back" onClick={back}>
        &larr; Back
      </button>
      <header className="cms-page-head">
        <div>
          <h1>Good to see you, {user.name.split(" ")[0]}</h1>
          <p className="cms-muted">Signed in as {user.role}. Everything here is stored through the mock repository.</p>
        </div>
      </header>
      <div className="cms-cards">
        {collections.map((c) => {
          const n = counts?.[c.key];
          return (
            <button key={c.key} type="button" className="cms-card" onClick={() => go(c.key)}>
              <span className="cms-card-icon">
                <Icon name={c.icon} size={16} />
              </span>
              <span className="cms-card-num">{n ? n.total : "—"}</span>
              <span className="cms-card-label">{c.label}</span>
              <span className={"cms-card-draft" + (n && n.draft > 0 ? " has-draft" : "")}>{n ? n.draft : 0} in draft</span>
            </button>
          );
        })}
      </div>
      <div className="cms-note">
        <h3>How this prototype persists content</h3>
        <p>
          Saves go through <code>lib/data/cms-repository.ts</code>, a stubbed async client backed by this browser&apos;s storage. Point its methods at
          Supabase and the screens work unchanged. The public pages still read the mock data files, so a publish here reaches the site once the
          repository and the page accessors share a database.
        </p>
      </div>
    </>
  );
}

function CmsTeam({ users }: { users: CmsUser[] }) {
  return (
    <>
      <a className="cms-back" href="#dashboard">
        &larr; Back to Dashboard
      </a>
      <header className="cms-page-head">
        <div>
          <h1>Team</h1>
          <p className="cms-muted">Mock directory. Roles decide who can delete content.</p>
        </div>
      </header>
      <table className="cms-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Can delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.email}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>{u.role === "Admin" ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

/* ------------------------------------------------------------------ Shell */

export function CmsApp({ collections, users, seed }: { collections: CmsCollection[]; users: CmsUser[]; seed: CmsSeed }) {
  const repo = useMemo(() => createCmsRepository(seed), [seed]);
  const view = useHashView();
  /* undefined while the stored session loads, null when signed out. */
  const [user, setUser] = useState<CmsUser | null | undefined>(undefined);
  const [msg, setMsg] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    let live = true;
    repo.session().then((s) => live && setUser(s));
    return () => {
      live = false;
    };
  }, [repo]);

  const toast = useCallback<Toast>((m) => {
    setMsg(m);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setMsg(""), 2600);
  }, []);

  if (user === undefined) return <div className="cms-boot">Loading admin…</div>;
  if (!user)
    return (
      <CmsLogin
        repo={repo}
        onDone={(u) => {
          setUser(u);
          go("dashboard");
        }}
      />
    );

  const cfg = collections.find((c) => c.key === view);
  const nav: [string, string][] = [["dashboard", "Dashboard"], ...collections.map((c): [string, string] => [c.key, c.label]), ...(user.role === "Admin" ? [["team", "Team"] as [string, string]] : [])];

  return (
    <div className="cms-shell">
      <aside className="cms-side">
        <Link className="cms-brand" href={routes.home}>
          <img className="cms-logo-light" src={LOGO} alt="" />
          <img className="cms-logo-dark" src={LOGO_WHITE} alt="" />
          <span>Content Admin</span>
        </Link>
        <nav aria-label="Admin sections">
          {nav.map(([k, l]) => (
            <button key={k} type="button" className={view === k ? "on" : ""} aria-current={view === k ? "page" : undefined} onClick={() => go(k)}>
              {l}
            </button>
          ))}
        </nav>
        <div className="cms-side-foot">
          <div className="cms-user-row">
            <div className="cms-user">
              <b>{user.name}</b>
              <span>{user.role}</span>
            </div>
            <ThemeToggle />
          </div>
          <a className="cms-link" href={routes.home} target="_blank" rel="noopener">
            View site
          </a>
          <button
            type="button"
            className="cms-link"
            onClick={async () => {
              await repo.logout();
              setUser(null);
            }}
          >
            Sign out
          </button>
        </div>
      </aside>
      <main className="cms-main">
        {view === "dashboard" ? (
          <CmsDashboard repo={repo} collections={collections} user={user} />
        ) : view === "team" && user.role === "Admin" ? (
          <CmsTeam users={users} />
        ) : cfg ? (
          <CmsCollectionView key={cfg.key} repo={repo} cfg={cfg} user={user} toast={toast} />
        ) : (
          <div className="cms-empty">Unknown section.</div>
        )}
      </main>
      <CmsToast message={msg} />
    </div>
  );
}
