"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Post } from "@/lib/posts";

const prose =
  "mt-5 space-y-4 text-sm leading-relaxed text-soft [&_h2]:mt-6 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-accent-strong [&_h3]:mt-5 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-accent-strong [&_a]:text-brand [&_a]:underline [&_code]:rounded [&_code]:bg-chip [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-[rgb(var(--bg))] [&_pre]:border [&_pre]:border-edge [&_pre]:p-4 [&_pre]:font-mono [&_pre]:text-sm [&_li]:ml-4 [&_li]:list-disc [&_blockquote]:border-l-4 [&_blockquote]:border-brand [&_blockquote]:pl-4 [&_blockquote]:text-muted";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={`shrink-0 text-muted transition-transform duration-300 ${
        open ? "rotate-180 text-brand" : ""
      }`}
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Blog({ posts }: { posts: Post[] }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="blog" className="border-t border-edge py-24">
      <div className="container-x">
        <div className="mb-12">
          <p className="label mb-3">Blog</p>
          <h2 className="text-3xl font-semibold tracking-tight text-accent-strong sm:text-4xl">
            Notes & writings
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
            Thoughts on building software. Click a post to read it inline.
          </p>
        </div>

        <div className="card overflow-hidden">
          {posts.map((post, i) => {
            const isOpen = open === post.slug;
            return (
              <article
                key={post.slug}
                className={`${i !== 0 ? "border-t border-edge" : ""}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : post.slug)}
                  className="flex w-full items-start gap-4 px-6 py-5 text-left transition-colors hover:bg-[rgb(var(--bg))]"
                  aria-expanded={isOpen}
                >
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center gap-2 font-mono text-[11px] text-muted">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                      <span className="text-[#3a3a40]">·</span>
                      <span className="text-brand">{post.tags[0]}</span>
                    </div>
                    <h3
                      className={`font-medium transition-colors ${
                        isOpen ? "text-brand" : "text-accent-strong"
                      }`}
                    >
                      {post.title}
                    </h3>
                  </div>
                  <Chevron open={isOpen} />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6">
                      <div className={prose}>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {post.content}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
