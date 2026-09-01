---
title: "The Tools I Use to Ship Fast"
date: "2026-05-02"
excerpt: "A practical look at the setup that lets me go from idea to deployed product in a single afternoon."
tags: ["workflow", "tools"]
---

Speed matters. The faster you can ship, the more you learn, and the more ideas you can test. Here's the toolkit that lets me go from idea to deployed product in an afternoon.

## The core stack

- **Next.js** — one framework for pages, APIs and static sites
- **Tailwind CSS** — style without leaving your markup
- **Vercel** — deploy on every push, zero config
- **Markdown** — all content, versioned in git

## Why this combo works

The magic is that everything is **boring and predictable**. No exotic tooling, no config rabbit holes. When I have an idea, I can focus on the idea — not the setup.

## My workflow

1. **Scaffold** — a fresh Next.js project takes seconds
2. **Build** — one focused feature at a time
3. **Deploy** — push to git, Vercel handles the rest
4. **Iterate** — ship, get feedback, improve

```bash
git add .
git commit -m "ship it"
git push
# deployed in ~30 seconds
```

## The takeaway

You don't need a complicated setup to ship fast. You need a setup you're so comfortable with that it disappears. Find your defaults, stick to them, and let the ideas do the talking.
