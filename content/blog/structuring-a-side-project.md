---
title: "How I Structure a Side Project Before Writing Code"
date: "2026-04-10"
excerpt: "Most projects die in the planning phase or die from too much planning. Here's the lightweight framework I use to get from idea to code fast."
tags: ["workflow", "planning"]
---

The hardest part of any side project isn't writing code — it's deciding *what to build* and *where to start*. Most people swing between two failure modes: diving in with no plan, or over-planning and never starting.

Here's the middle ground I use.

## One page, three questions

Before I write a single line of code, I answer three questions on one page:

1. **Who is this for?** Be specific. "Fellow developers preparing for interviews."
2. **What is the one job it does?** Not features — the single core job. "Turn a list of patterns into practice."
3. **What does success look like?** One metric. "Someone uses it once a week."

If I can't answer these in a sentence each, the idea isn't ready.

## The smallest useful version

I force myself to ship a version that does *only* the core job. Everything else is a note in a backlog file. For Code Trace, that was: paste code, step forward, watch variables. No accounts, no saving, no dark mode toggle.

```text
Core job:        step through code and watch variables
Nice to have:    save sessions, share links, themes
Later:           auth, multiplayer, plugins
```

## The backlog file

I keep a simple `ideas.md` at the root of every project. As I use the tool, things I want come to me — I write them down and forget about them. That keeps me focused on the core while not losing ideas.

## Ship, then ask

The most important step: put it online and tell one person. A real user's reaction beats my own assumptions every time. It tells me what to build next far better than I ever could alone.
