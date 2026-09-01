---
title: "Debugging by Understanding: Reading Your Program's State"
date: "2026-02-05"
excerpt: "Debugging is less about guessing and more about reading state accurately. Here's how tracing execution changes the way you find bugs."
tags: ["debugging", "learning"]
---

The classic debugging loop is: see a bug, guess the cause, add a print statement, re-run, repeat. It works, but it's slow and it doesn't build understanding. The better loop starts with *reading the state*.

## Bugs are mismatched expectations

Every bug is the same thing: your program's actual state doesn't match the state you expected. So the fastest way to find it is to check *where* they diverge — not to guess *why*.

## Trace, don't guess

Instead of printing random variables, step through the code mentally (or with a tracer) and track the state at each step:

```js
let count = 0;
const arr = [1, 2, 3];

arr.forEach((n, i) => {
  if (i === arr.length) count++; // bug: i never equals length
});
```

Here, reading the state shows `i` stops at `2`, never reaching `3`. The condition is impossible — so `count` stays `0`. The bug isn't a mystery; it's a condition that can never be true.

## What good tracing gives you

- **A precise failure point** instead of a vague area
- **Confidence** that your mental model is correct (or where it isn't)
- **Fewer print statements** and re-runs

## The tool that changed it for me

When I built Code Trace, I wanted to make this natural. Watching variables change as you step through lines turns debugging from a guessing game into a reading exercise. Once you're good at reading state, most bugs stop being hard.

Next time you're stuck, stop guessing. Write out what state you expect at each line, then find the line where reality differs. The fix is usually right there.
