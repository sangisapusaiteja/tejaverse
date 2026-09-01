import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-edge py-10">
      <div className="container-x flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-sm text-muted">
          © {new Date().getFullYear()}{" "}
          <span className="text-accent-strong">{site.name}.org</span> — built by{" "}
          {site.author}
        </p>
        <div className="flex gap-5 text-sm text-muted">
          <a href={site.socials.github} className="hover:text-accent-strong" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={site.socials.linkedin} className="hover:text-accent-strong" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
