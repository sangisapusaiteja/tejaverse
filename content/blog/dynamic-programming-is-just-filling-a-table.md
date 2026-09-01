---
title: "Dynamic Programming Is Just Filling a Table"
date: "2025-12-20"
excerpt: "The phrase 'dynamic programming' sounds advanced, but the core idea is simple: don't recompute what you already know. Here's how to think about it."
tags: ["algorithms", "learning"]
---

Everyone dreads dynamic programming (DP). The name alone sounds like a college course. But strip away the jargon and DP is just this: **store the answer to a subproblem so you don't compute it twice.**

## The recipe

Every DP problem follows the same three steps:

1. **Define the state** — what do you need to remember? Usually "the best answer up to index *i*."
2. **Write the recurrence** — how do you build the answer for *i* from the answers before it?
3. **Fill the table** — start from the base case and work up.

## A tiny example

Fibonacci, but storing results:

```js
function fib(n) {
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
```

No recursion, no recomputation. Just a table being filled left to right. That's it. That's DP.

## The two flavors

- **Top-down** — recursion with memoization (a cache). Easy to write, can hit recursion limits.
- **Bottom-up** — iterative table filling. Faster, no recursion, slightly harder to derive.

## When to reach for it

You see DP when a problem asks for the *best*, the *fewest*, or the *number of ways* to do something, and brute force would be exponential. Classic signs:

- "Minimum number of coins..."
- "Longest common subsequence..."
- "Number of ways to reach the end..."

## The honest advice

DP only clicks with reps. The good news: once you've seen ten classic patterns, most new problems are a remix of ones you already know. Recognize the state, write the recurrence, fill the table. Rinse and repeat.
