import { skills, site } from "@/lib/site";

export default function About() {
  return (
    <section id="about" className="border-t border-edge py-24">
      <div className="container-x grid gap-14 lg:grid-cols-2">
        <div>
          <p className="label mb-4">About</p>
          <h2 className="text-3xl font-semibold tracking-tight text-accent-strong sm:text-4xl">
            A developer who ships things
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted">
            <p>
              I&apos;m {`Sai Teja Sangisapu`} — a developer focused on tools that make
              other developers more productive. Whether it&apos;s interview
              prep, competitive coding or code visualization, I like turning
              complex problems into clean, useful products.
            </p>
            <p>
              My process is simple: build the smallest useful version, put it
              online, and iterate based on what I learn. Everything I ship lives
              under my own domain so it stays mine.
            </p>
          </div>
          <a
            href={site.portfolio}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-6"
          >
            Know more about {`Sai Teja Sangisapu`} ↗
          </a>
        </div>

        <div>
          <p className="label mb-4">Technologies</p>
          <div className="card p-6">
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-edge bg-chip px-3 py-1.5 font-mono text-xs text-soft"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <p className="label mb-4 mt-8">What I care about</p>
          <ul className="space-y-3">
            {[
              "Clean, boring, reliable technology",
              "Tools that teach, not just automate",
              "Shipping over perfecting",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted">
                <span className="mt-0.5 text-brand">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
