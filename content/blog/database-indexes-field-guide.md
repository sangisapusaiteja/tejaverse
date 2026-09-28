---
title: "Why Your Query Is Slow: A Field Guide to Database Indexes"
date: "2026-07-03"
excerpt: "An index is the difference between reading one page and reading the whole book. Here's how they work, when they help, and the traps that quietly disable them."
tags: ["databases", "performance"]
---

The first time a query goes from instant to seconds, you look at the code. Usually the answer isn't in the code — it's in the database. And usually, the fix is an index.

## What happens without an index

When you run `SELECT * FROM users WHERE email = 'a@b.com'`, the database has no idea where that row lives. So it reads every row, one by one, checking the email. This is a **full table scan** — fine for a hundred rows, fatal for a million.

## What an index is

An index is a sorted data structure (usually a B-tree) that maps column values to row locations. Instead of scanning, the database walks the tree and jumps straight to the matching rows. That turns an O(n) scan into roughly O(log n) lookup.

## The cost nobody mentions

Indexes aren't free:

- **Writes get slower** — every `INSERT`, `UPDATE` and `DELETE` must update each index too
- **They use disk and memory** — sometimes more than the table itself
- **Too many indexes** hurt more than they help

Index the columns you filter and join on. Not everything.

## Composite indexes are ordered

An index on `(last_name, first_name)` helps queries filtering on `last_name`, or on both columns — but **not** on `first_name` alone. The order of the columns is the order of the tree. Picture a phone book sorted by last name: useless if you only know the first name.

## When indexes don't help

- **Low cardinality** — a boolean column with two values barely narrows anything
- **A function wrapped around the column** — `WHERE LOWER(email) = ...` can't use a plain index on `email`
- **Leading wildcards** — `LIKE '%foo'` can't use a standard index
- **Small tables** — the planner may correctly decide to ignore the index

## Ask the database

Don't guess. Prefix the query with `EXPLAIN` (or `EXPLAIN ANALYZE`) and read the plan. Look for a `Seq Scan` where you expected an `Index Scan`:

```sql
EXPLAIN ANALYZE
SELECT * FROM orders WHERE customer_id = 42;
```

The plan tells you the truth: where the time goes, and whether your index is being used at all.

## The takeaway

Indexes are the highest-leverage performance tool most developers underuse. Find the query that hurts, read the plan, add the index that matches your `WHERE` and `JOIN`, and stop scanning the whole book.
