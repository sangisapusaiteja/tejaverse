---
title: "System Design for Junior Developers: Where to Start"
date: "2026-01-05"
excerpt: "System design sounds intimidating until you break it into a small set of repeatable questions. Here's the mental model I use."
tags: ["system-design", "learning"]
---

System design interviews feel scary because they're open-ended. No single right answer. But every design question is really asking the same few things, and if you answer them in order, the whole thing becomes manageable.

## The four questions

1. **What does this system do?** Restate it and list the core actions.
2. **Who uses it, and at what scale?** A thousand users and a billion users need very different systems.
3. **Where does data live and how does it flow?** Draw the request from user to storage and back.
4. **What can fail?** Add a backup, a cache, a queue — then check again.

## Start tiny

Don't design a distributed system on day one. Design a single server, a database, and a cache. Get that right first.

```text
User -> API server -> Database
                ^
                Cache in front
```

Once that works, scale one part at a time. Add a load balancer when one server isn't enough. Add a queue when writes spike. Add read replicas when reads dominate.

## The two hard things

Most juniors stumble on:

- **Estimating scale** — how many requests per second is "a lot"? Start with guesses and refine.
- **Naming tradeoffs** — every choice costs something. Say what you give up to get what you want.

## How I practice

I built tools to help, but the real practice is simple: pick a common service (a URL shortener, a chat app, a feed) and design it on paper. Timebox it to an hour. Then look up how real companies solved it and compare.

You don't need to know everything. You need to know the questions and to be comfortable thinking through them out loud.
