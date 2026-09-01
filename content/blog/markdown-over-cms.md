---
title: "Why I Prefer Markdown Over a CMS for My Blog"
date: "2025-12-05"
excerpt: "A CMS is a lot of machinery for what is, at the end of the day, a folder of text files. Here's the case for keeping your blog plain and simple."
tags: ["workflow", "tools"]
---

When I set up my blog, the obvious choice felt like a CMS. Then I thought about what a CMS actually gives me — and what it costs.

## What you get with plain markdown files

- **Everything is versioned** — every edit is in git history
- **Portable** — the files work anywhere, forever
- **Fast** — no database, no API calls, just static HTML
- **Simple** — a post is a text file with a header

## The workflow

My entire writing setup is a folder:

```text
content/blog/
  post-one.md
  post-two.md
```

To publish, I create a file, fill in a small header, and push. The build reads the files and generates the page. No admin panel, no WYSIWYG, no "where did that button go."

## The header

Each post starts with a tiny block of metadata:

```md
---
title: "My Post"
date: "2026-01-01"
excerpt: "Short summary"
tags: ["dev"]
---
```

That's the whole interface. The rest is the writing.

## When a CMS is worth it

To be fair, a CMS earns its keep if you have:

- **Non-technical writers** who shouldn't touch git
- **Rich media workflows** and complex scheduling
- **Comments, memberships, or heavy SEO tooling**

For a solo developer who lives in a terminal, none of those apply. A CMS would just be extra moving parts to maintain.

## The takeaway

Boring wins again. My blog is a folder of text files, and it's never been easier to write, back up, or move. If you control the stack, consider whether you actually need the complexity before adding it.
