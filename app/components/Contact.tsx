import { site } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-edge py-24">
      <div className="container-x">
        <div className="card px-6 py-14 text-center sm:px-16">
          <p className="label mb-4">Contact</p>
          <h2 className="text-3xl font-semibold tracking-tight text-accent-strong sm:text-4xl">
            Let&apos;s work together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Have an idea, a project, or just want to talk about building? My
            inbox is always open.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={`mailto:${site.socials.email}`} className="btn-primary">
              {site.socials.email}
            </a>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              GitHub ↗
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
