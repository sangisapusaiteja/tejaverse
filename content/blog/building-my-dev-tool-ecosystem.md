---
title: "How I Built My Own Dev Tool Ecosystem"
date: "2026-08-20"
excerpt: "From a single idea to a family of tools living under one domain — here's how I structured interviewhandbook, codebattle and codetrace."
tags: ["dev", "architecture"]
---

Every developer eventually hits the same wall: you have ideas, but they live scattered across folders, repos and half-finished projects. I decided to change that by building a small ecosystem of tools, all living under one roof: **tejaverse.org**.

## The idea

I wanted a home for the tools I actually use while learning and building:

- **Interview Handbook** — structured interview prep
- **Code Battle** — competitive coding practice
- **Code Trace** — visualizing how code executes

Each one solves a real problem I had. That's the best starting point for any project.

## Why subdomains?

Keeping each tool on its own subdomain gives every project:

1. **Its own identity** — a clean URL that's easy to share
2. **Independent deployment** — ship one without touching the others
3. **Clear ownership** — the main site stays a clean landing page

```bash
interviewhandbook.tejaverse.org
codebattle.tejaverse.org
codetrace.tejaverse.org
```

## The stack

I kept things boring and reliable:

- **Next.js** for the frontend
- **Tailwind CSS** for styling
- **Vercel** for deployment
- **Markdown** for all content

Boring tech means fewer surprises and more time shipping.

## What I learned

The biggest lesson: **start small, ship fast**. Each tool began as a single page. Only after it proved useful did I expand it. That's the pattern I'll keep following.

If you're building your own ecosystem, my advice is simple — pick one problem, build the smallest useful version, and put it online. The rest follows.
