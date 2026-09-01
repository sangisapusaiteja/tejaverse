---
title: "Time Complexity Without Fear"
date: "2025-08-25"
excerpt: "Big-O looks like math class, but it's really just a way to talk about how a solution scales. Here's a plain-English guide to reading and comparing it."
tags: ["algorithms", "learning"]
---

Big-O notation scares people because it looks like a math theorem. It's not. It's a vocabulary for answering one question: **how does the work grow as the input grows?** That's it.

## The question it answers

If I double the input, does the time double? Stay the same? Multiply by four? Big-O names those behaviors.

## The common ones, in plain terms

- **O(1) — constant.** Always the same work, no matter the input. Looking up an item by index.
- **O(log n) — logarithmic.** Doubling the input adds just a tiny bit of work. Binary search.
- **O(n) — linear.** Double the input, double the work. One loop over the array.
- **O(n log n) — linearithmic.** A little more than linear. Good sorting algorithms.
- **O(n²) — quadratic.** Double the input, four times the work. Nested loops.
- **O(2ⁿ) — exponential.** Every little bit of input explodes the work. This is usually a red flag.

## How to find it in code

Look at the loops:

- One loop over the input → O(n)
- Nested loops → O(n²)
- A loop that halves each time → O(log n)
- A loop inside a halving loop → O(n log n)

```js
for (let i = 0; i < n; i++) {   // O(n)
  for (let j = 0; j < n; j++) { // O(n) inside
    // O(n * n) = O(n²)
  }
}
```

## Drop the constants

Big-O ignores constants and smaller terms. O(2n) is written as O(n). O(n² + n) is O(n²). We only care about the *shape* as n gets huge, because that's what determines whether a solution works at scale.

## Why it matters

Two solutions can both be "correct" and one can still be useless. At n = 1,000,000:

- O(n): about a million operations
- O(n²): about a trillion operations

Same problem, completely different outcome. Big-O tells you which one will finish in your lifetime.

## The practical takeaway

You don't need to be a theorist. You need to be able to look at your loops, name the complexity, and know roughly whether it'll hold up. Start there — the formal definitions come later and matter less than people say.
