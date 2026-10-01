import { site } from "@/lib/site";

export default function Hero({ postCount }: { postCount: number }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <div className="container-x">
        <p className="label mb-6 animate-fade-up">Sai Teja — Developer</p>

        <h1 className="max-w-3xl animate-fade-up text-4xl font-semibold leading-[1.1] tracking-tight text-accent-strong sm:text-6xl">
          I build tools that make developers{" "}
          <span className="text-brand">better</span>.
        </h1>

        <p className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-muted">
          {site.tagline} I design, build and ship products under my own domain —
          and write about what I learn along the way.
        </p>

        <div className="mt-9 flex animate-fade-up flex-wrap gap-3">
          <a href="#projects" className="btn-primary">
            See my work
          </a>
          <a href="#blog" className="btn-ghost">
            Read the blog
          </a>
        </div>

        <div className="mt-16 grid animate-fade-up grid-cols-3 gap-6 border-t border-edge pt-8 sm:max-w-md">
          <div>
            <p className="font-mono text-2xl font-semibold text-accent-strong">
              03
            </p>
            <p className="mt-1 text-xs text-muted">Shipped projects</p>
          </div>
          <div>
            <p className="font-mono text-2xl font-semibold text-accent-strong">
              {postCount.toString().padStart(2, "0")}
            </p>
            <p className="mt-1 text-xs text-muted">Blog posts</p>
          </div>
          <div>
            <p className="font-mono text-2xl font-semibold text-accent-strong">
              10
            </p>
            <p className="mt-1 text-xs text-muted">Technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
}
