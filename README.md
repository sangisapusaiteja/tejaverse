# tejaverse.org

The personal home of **Sai Teja Sangisapu** — a single-page portfolio of developer tools, projects and writings, built with Next.js and Tailwind CSS.

## ✨ Overview

`tejaverse.org` is a clean, responsive, single-page site that showcases three tools I designed, built and shipped, each living on its own subdomain:

| Project | Subdomain |
|---------|-----------|
| **Interview Handbook** | [`interviewhandbook.tejaverse.org`](https://interviewhandbook.tejaverse.org) |
| **Code Battle** | [`codebattle.tejaverse.org`](https://codebattle.tejaverse.org) |
| **Code Trace** | [`codetrace.tejaverse.org`](https://codetrace.tejaverse.org) |

Plus an inline blog, an about section, and contact links.

## 🚀 Features

- **Single-page layout** — Hero, Projects, Blog, About and Contact all on one scrollable page
- **Inline blog** — expandable markdown posts that read in place (no page navigation)
- **Project cards** — live screenshots with browser-chrome styling and quick links
- **Dark & light themes** — toggleable, persisted, with system-preference detection
- **Active-section nav** — the navbar highlights the section you're currently viewing
- **Responsive** — mobile-first, with a mobile menu
- **SEO-ready** — metadata, Open Graph, semantic markup

## 🛠 Tech Stack

| Layer | Tool |
|-------|------|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Styling | [Tailwind CSS](https://tailwindcss.com) |
| Fonts | Inter, JetBrains Mono (via `next/font`) |
| Blog content | Markdown + [`gray-matter`](https://github.com/jonschlinkert/gray-matter) |
| Rendering | [`react-markdown`](https://github.com/remarkjs/react-markdown) + [`remark-gfm`](https://github.com/remarkjs/remark-gfm) |

## 📁 Project Structure

```
tejaverse/
├── app/
│   ├── layout.tsx          # root layout, metadata, fonts, theme init
│   ├── page.tsx            # single-page composition
│   ├── globals.css         # theme tokens (CSS variables), global styles
│   └── components/
│       ├── Navbar.tsx      # nav + theme toggle + active-section highlight
│       ├── Hero.tsx        # intro + stats
│       ├── Projects.tsx    # project cards with screenshots & links
│       ├── Blog.tsx        # inline expandable posts
│       ├── About.tsx       # bio + skills
│       ├── Contact.tsx     # contact CTA
│       └── Footer.tsx
├── content/blog/           # markdown posts
├── lib/
│   ├── site.ts             # site config, projects, skills, socials
│   └── posts.ts            # blog loading utilities
├── public/                 # project screenshots, static assets
└── ...config files
```

## 🧑‍💻 Getting Started

### Prerequisites

- **Node.js** 18.18+ (for Next.js 16)

### Install & run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npm run build
npm run start
```

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |

## ✍️ Adding a Blog Post

Blog posts are plain Markdown files. Create a new file in `content/blog/` with the following frontmatter:

```md
---
title: "My Post Title"
date: "2026-01-01"
excerpt: "A short summary shown on the card."
tags: ["dev"]
---

Your content here. Markdown is fully supported, including code blocks.
```

The post is picked up automatically on the next build and sorted by date (newest first).

## 🎨 Customization

All site-wide content lives in `lib/site.ts`:

```ts
export const site = {
  name: "tejaverse",
  author: "Sai Teja Sangisapu",
  portfolio: "https://saitejasangisapu.tejaverse.org",
  socials: { github, linkedin, email },
  // ...
};
```

Edit this file to update your name, links, projects, skills, or socials. Theme colors are controlled by CSS variables in `app/globals.css`.

## ☁️ Deployment

This project is designed to deploy on **Vercel**:

1. Push the repository to GitHub.
2. Import the repo in Vercel.
3. Point `tejaverse.org` DNS to Vercel.

Each project subdomain (`interviewhandbook`, `codebattle`, `codetrace`) deploys independently and already resolves to its own application.

## 📄 License

All rights reserved. This project is a personal portfolio and is not licensed for commercial redistribution.

---

Built with ❤️ by **Sai Teja Sangisapu** · [Portfolio](https://saitejasangisapu.tejaverse.org)
