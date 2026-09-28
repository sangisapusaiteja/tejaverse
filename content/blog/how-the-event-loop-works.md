---
title: "The Event Loop, Explained With a Mental Model"
date: "2026-09-20"
excerpt: "JavaScript runs your code on a single thread, yet it never freezes on network calls. The event loop is the trick — and once you see it, async code stops being magic."
tags: ["javascript", "deep-dive"]
---

JavaScript has one thread. It can only do one thing at a time. So how does a single-threaded language handle a slow network request without freezing the page? The answer is the event loop, and it's simpler than it sounds.

## The call stack

When you call a function, it's pushed onto the call stack. When it returns, it's popped off. The stack is where your synchronous code actually runs — one frame at a time.

```js
function a() {
  b();
}
function b() {
  console.log("hi");
}
a();
```

If the stack never empties, the page freezes. That's what a "blocking" operation is: something that keeps the stack busy.

## Offload the slow stuff

Network calls, timers and file reads are handed off to the browser (or to Node). Your code doesn't wait for them. When they finish, a callback is queued up to run later. That's the key idea: **JavaScript never waits — it schedules.**

## The queues

There are two kinds of work waiting to run:

- **Macrotasks** — `setTimeout`, `setInterval`, DOM events, I/O callbacks
- **Microtasks** — promise callbacks (`.then`, `await`), `queueMicrotask`, mutation observers

After the stack empties, the event loop drains **all microtasks**, then picks up **one macrotask**, and repeats.

## The order matters

```js
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");
```

The output is `1, 4, 3, 2`. Synchronous code first (`1`, `4`), then microtasks (`3`), then macrotasks (`2`). Every time.

## `setTimeout(fn, 0)` is not "now"

A timeout of zero doesn't mean "run immediately." It means "run after the current work and all pending microtasks finish." The delay is a *minimum*, not a promise. That's why a long synchronous loop can starve timers completely.

## Why `await` doesn't block

`await` pauses the current async function and hands control back to the event loop. The rest of your program keeps running. When the awaited value resolves, your function resumes — as a microtask.

> `await` doesn't block the thread. It gives the thread back.

## The mental model

- Synchronous code runs to completion — always.
- Promises resolve before timers.
- Nothing runs while the stack is busy.

Hold onto those three rules and most async bugs stop being mysterious.
