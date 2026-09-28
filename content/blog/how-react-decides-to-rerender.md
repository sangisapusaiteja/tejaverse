---
title: "How React Decides to Re-render"
date: "2026-08-14"
excerpt: "Re-rendering isn't the same as repainting, and it's not always bad. Understanding what actually triggers a render is the key to fixing performance problems instead of guessing."
tags: ["react", "performance"]
---

"Re-render" is one of the most misunderstood words in React. People treat it like a bug to stamp out. But a render is just React calling your component function again to figure out what the UI should look like — it's often cheap, and sometimes necessary.

## Rendering is not painting

A render produces a description of the UI (the virtual DOM). React then compares it to the previous version and only touches the real DOM where something changed. So a component can render frequently while the browser paints almost nothing.

## What triggers a render

A component re-renders when:

- Its **state changes** via a setter
- Its **parent re-renders** — and by default, all children render too
- A **context value** it consumes changes

That's basically it. Props changing don't trigger a render on their own; a parent rendering does, and it passes new props along the way.

## The referential equality trap

```js
function Parent() {
  const [n, setN] = useState(0);
  return <Child config={{ limit: 10 }} onSave={() => save(n)} />;
}
```

Every render of `Parent` creates a brand-new `config` object and `onSave` function. Even if their *contents* look identical, the identities differ. Any memoization in `Child` sees "new props" and re-renders.

## When memoization actually helps

`React.memo`, `useMemo` and `useCallback` are not free — they add comparison work and memory. They earn their keep when a child is expensive and its props rarely change.

```js
const Child = React.memo(function Child({ config }) {
  // ...
});
```

But if you memoize the component, you usually have to stabilize the props too, or you've just moved the problem:

```js
const config = useMemo(() => ({ limit: 10 }), []);
const onSave = useCallback(() => save(n), [n]);
```

## Keys and reconciliation

When you render a list, React matches items to previous ones by `key`. Use a stable, unique key — not the array index if the list can reorder. A wrong key makes React reuse the wrong component state, producing bugs that look like data corruption.

## Don't optimize by default

Most re-renders are fine. Reach for memoization only after you've *measured* a problem — the React DevTools profiler shows exactly which components render and why. Anything before that is guesswork.

> Render first, measure, then memoize the 5% that matters.
