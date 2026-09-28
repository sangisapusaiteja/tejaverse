---
title: "Caching: The Hardest Problem in Computer Science"
date: "2026-06-18"
excerpt: "Caching trades freshness for speed, and that trade is where all the bugs live. Here's how the common strategies differ and how to think about invalidation before it bites you."
tags: ["systems", "performance"]
---

There's an old joke: there are only two hard things in computer science — cache invalidation and naming things. The joke survives because it's true. A cache is easy to add and hard to get right.

## The core trade

A cache stores a copy of something expensive so you can skip the expensive part next time. You're betting the copy is *still correct*. Every cache bug is a broken bet: the data changed and the copy didn't.

## Where caches live

You probably already have several, whether you think about them or not:

- **Browser** — the HTTP cache, service workers
- **CDN** — files and API responses served from the edge
- **Application** — in-memory maps, Redis
- **Database** — query caches, buffer pools, materialized views

Each layer is another place for stale data to hide.

## The common strategies

- **Cache-aside** — the app checks the cache, and on a miss loads from the source and writes the result back. Most common, most control.
- **Write-through** — writes go to the cache and the source together. Consistent, but slower writes.
- **Write-behind** — writes hit the cache and flush later. Fast, but you can lose data on a crash.
- **TTL** — entries expire after a fixed time. Simple, and the fallback for everything else.

## Invalidation is the hard part

You have two broad options:

- **Time-based** — let entries expire. Easy, but you accept a window of staleness.
- **Event-based** — delete or update on write. Precise, but you must find *every* place the data can change.

Miss one write path and your cache serves lies. That's why "just add a TTL" is such common advice — it bounds the damage.

## Watch for the stampede

When a popular key expires, hundreds of requests can miss at once and hammer your database in sync. This is the **thundering herd**. Common fixes: a short lock so only one request refreshes, or staggered expiry so keys don't all die together.

## Let HTTP do the work

For anything served over HTTP, lean on the headers:

```http
Cache-Control: public, max-age=60, stale-while-revalidate=300
ETag: "abc123"
```

`ETag` lets the client ask "has this changed?" and get a cheap `304 Not Modified`. `stale-while-revalidate` serves stale content while refreshing in the background — fast *and* fresh.

## The takeaway

Before you cache, decide how stale you can tolerate and how you'll invalidate. If you can't answer both, you're not caching — you're creating a future bug with a short deadline.
