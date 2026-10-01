"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Post } from "@/lib/posts";

const prose =
  "mt-5 space-y-4 text-sm leading-relaxed text-soft [&_h2]:mt-6 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-accent-strong [&_h3]:mt-5 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-accent-strong [&_a]:text-brand [&_a]:underline [&_code]:rounded [&_code]:bg-chip [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-[rgb(var(--bg))] [&_pre]:border [&_pre]:border-edge [&_pre]:p-4 [&_pre]:font-mono [&_pre]:text-sm [&_li]:ml-4 [&_li]:list-disc [&_blockquote]:border-l-4 [&_blockquote]:border-brand [&_blockquote]:pl-4 [&_blockquote]:text-muted";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function readingTime(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Blog({ posts }: { posts: Post[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [tag, setTag] = useState("All");

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  const tags = useMemo(() => {
    const seen = new Set<string>();
    posts.forEach((post) => post.tags.forEach((t) => seen.add(t)));
    return ["All", ...Array.from(seen)];
  }, [posts]);

  const visible = useMemo(
    () => (tag === "All" ? posts : posts.filter((p) => p.tags.includes(tag))),
    [posts, tag]
  );

  const active = useMemo(
    () => posts.find((p) => p.slug === openSlug) ?? null,
    [posts, openSlug]
  );

  const close = useCallback(() => {
    setOpenSlug(null);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!openSlug) return;

    const panel = panelRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab" || !panel) return;

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(FOCUSABLE)
      ).filter((el) => el.offsetParent !== null);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [openSlug, close]);

  return (
    <section id="blog" className="border-t border-edge py-24">
      <div className="container-x">
        <div className="mb-8">
          <p className="label mb-3">Blog</p>
          <h2 className="text-3xl font-semibold tracking-tight text-accent-strong sm:text-4xl">
            Notes &amp; writings
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
            Thoughts on building software. Pick a post to read it here.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter posts by tag">
          {tags.map((t) => {
            const selected = tag === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTag(t)}
                aria-pressed={selected}
                className={`rounded-full border px-3.5 py-1.5 font-mono text-[11px] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-base ${
                  selected
                    ? "border-brand bg-chip text-brand"
                    : "border-edge text-muted hover:border-[rgb(var(--muted))] hover:text-accent-strong"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>

        {visible.length === 0 ? (
          <div className="card px-6 py-16 text-center">
            <p className="text-sm text-muted">
              No posts tagged <span className="text-brand">{tag}</span> yet.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((post, i) => (
              <button
                key={post.slug}
                type="button"
                onClick={(event) => {
                  triggerRef.current = event.currentTarget;
                  setOpenSlug(post.slug);
                }}
                style={{ animationDelay: `${Math.min(i, 8) * 40}ms` }}
                className="card group flex animate-fade-up flex-col p-6 text-left transition duration-300 motion-safe:hover:-translate-y-0.5 hover:border-[rgb(var(--muted))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-base"
              >
                <div className="mb-3 flex items-center gap-2 font-mono text-[11px] text-muted">
                  <span className="text-brand">{post.tags[0]}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                <h3 className="text-lg font-semibold leading-snug tracking-tight text-accent-strong transition-colors group-hover:text-brand">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-edge pt-4 font-mono text-[11px] text-muted">
                  <span>{readingTime(post.content)} min read</span>
                  <span className="inline-flex items-center gap-1 text-soft transition-colors group-hover:text-brand">
                    Read
                    <ArrowRight />
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="blog-post-title"
        >
          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            onClick={close}
            className="motion-safe:animate-fade-in absolute inset-0 cursor-default bg-black/70 backdrop-blur-sm"
          />
          <div
            ref={panelRef}
            className="motion-safe:animate-fade-up relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-edge bg-surface shadow-2xl"
          >
            <header className="flex shrink-0 items-start justify-between gap-4 border-b border-edge px-5 py-4 sm:px-8 sm:py-5">
              <div className="min-w-0">
                <div className="mb-1.5 flex flex-wrap items-center gap-2 font-mono text-[11px] text-muted">
                  <time dateTime={active.date}>{formatDate(active.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{readingTime(active.content)} min read</span>
                </div>
                <h3
                  id="blog-post-title"
                  className="text-lg font-semibold leading-snug tracking-tight text-accent-strong sm:text-2xl"
                >
                  {active.title}
                </h3>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {active.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-edge bg-chip px-2 py-0.5 font-mono text-[10px] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close post"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-edge text-soft transition hover:text-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
                </svg>
              </button>
            </header>

            <div className="overflow-y-auto overscroll-contain px-5 py-6 sm:px-8 sm:py-8">
              <div className={prose}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {active.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
