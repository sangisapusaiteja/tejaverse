---
title: "Trees and Graphs: The Mental Models That Make Them Easy"
date: "2025-10-15"
excerpt: "Binary trees and graphs intimidate people, but they're just two shapes built from the same idea. Once you see the pattern, every traversal is a variation of it."
tags: ["algorithms", "learning"]
---

Trees and graphs are the bread and butter of interview questions and real systems alike. They look different at first, but they're built from one concept: **nodes connected by edges**. Master that, and the rest is variations.

## The core mental model

A tree is just a graph with a few restrictions:

- **A tree** has one root, no cycles, and a clear parent-child direction.
- **A graph** can have cycles, multiple roots, and no direction at all.

That's the whole difference. Everything else is technique.

## The two ways to walk

Whether it's a tree or a graph, you explore it one of two ways:

- **BFS (Breadth-first)** — explore level by level. Great for "shortest path" and "nearest" questions.
- **DFS (Depth-first)** — explore one branch fully, then backtrack. Great for "does a path exist" and "visit everything."

```js
function bfs(root) {
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    // process node
    queue.push(...node.children);
  }
}
```

BFS uses a queue; DFS uses a stack (or recursion). Remembering that one sentence unlocks most traversal problems.

## How I remember BFS vs DFS

- **BFS = queue** = a line at a store, first in, first out, level by level.
- **DFS = stack** = a stack of plates, last in, first out, dive deep then back up.

## The graph twist

Graphs add one thing trees don't: **visited tracking**. Because a graph can loop back, you must mark nodes you've seen or you'll loop forever.

```js
const visited = new Set();
function dfs(node) {
  if (visited.has(node)) return;
  visited.add(node);
  // process node
  for (const next of node.neighbors) dfs(next);
}
```

## The common shapes

Once you can traverse, the interview problems are just naming the shape:

- Binary tree traversal (pre/in/post-order)
- Level-order (BFS on a tree)
- Shortest path (BFS on an unweighted graph)
- Detect a cycle (visited tracking)
- Count connected components (repeat BFS/DFS)

Same three ideas, a handful of shapes. Learn the base, and the variations stop being scary.
