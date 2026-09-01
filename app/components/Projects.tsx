import Image from "next/image";
import { projects } from "@/lib/site";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container-x">
        <div className="mb-12">
          <p className="label mb-3">Projects</p>
          <h2 className="text-3xl font-semibold tracking-tight text-accent-strong sm:text-4xl">
            Things I&apos;ve built
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
            Three tools I designed, built and shipped — each living on its own
            subdomain under tejaverse.org.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.subdomain}
              className="card group flex flex-col overflow-hidden rounded-lg transition duration-300 hover:border-[rgb(var(--muted))] hover:bg-surface"
            >
              <a href={p.url} target="_blank" rel="noreferrer" className="block">
                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                  <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-1.5 px-4 pt-3">
                    <span className="h-2 w-2 rounded-full bg-muted/50" />
                    <span className="h-2 w-2 rounded-full bg-muted/50" />
                    <span className="h-2 w-2 rounded-full bg-muted/50" />
                  </div>
                  <Image
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    fill
                    className="object-cover object-top pt-2 transition duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </a>

              <div className="flex flex-1 flex-col p-5">
                <a href={p.url} target="_blank" rel="noreferrer" className="group/title">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-accent-strong transition group-hover/title:text-brand">
                      {p.title}
                    </h3>
                    <span className="text-muted opacity-0 transition group-hover/title:opacity-100">
                      ↗
                    </span>
                  </div>
                </a>
                <p className="mt-2 font-mono text-xs text-muted">
                  {p.subdomain}.tejaverse.org
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {p.description}
                </p>

                {p.links && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-edge px-3 py-1.5 text-xs font-medium text-soft transition hover:border-brand hover:text-brand"
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                        </svg>
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
