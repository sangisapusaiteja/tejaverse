---
title: "TypeScript Generics You'll Actually Use"
date: "2026-03-22"
excerpt: "Generics aren't decoration — they're how you express that one type depends on another. Here are the patterns that show up in real code, without the type-theory detour."
tags: ["typescript", "deep-dive"]
---

Generics get a bad reputation because they're usually taught with abstract examples like `identity<T>`. In real code they solve a concrete problem: making types depend on other types, so you don't lose information the moment a value passes through a function.

## The problem without generics

```ts
function first(arr: any[]): any {
  return arr[0];
}
```

This works, but it throws everything away. Call `first(["a", "b"])` and you get `any` back — no autocomplete, no error checking. Generics preserve the relationship:

```ts
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

const x = first([1, 2, 3]); // x: number | undefined
```

The `<T>` is a placeholder for a type: "whatever type you give me, I'll hand back the same one."

## Constrain what you accept

Sometimes you need to *use* a value, not just pass it through. Constraints keep it honest:

```ts
function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}
```

Now `T` must have a `length`, so `longest("ab", "abc")` and `longest([1], [1, 2])` both work.

## `keyof` and indexed access

Together these let you build types that follow an object's shape:

```ts
function get<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

`get(user, "email")` returns exactly the type of `user.email`. Get the key wrong and it's a compile error — not a runtime surprise.

## A type that maps one thing to another

Generics really shine when you wrap an API. This `Result<T>` forces callers to handle failure:

```ts
type Result<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };

function parse<T>(json: string, validate: (v: unknown) => T): Result<T> {
  try {
    return { ok: true, value: validate(JSON.parse(json)) };
  } catch (e) {
    return { ok: false, error: (e as Error).message };
  }
}
```

The type of `value` is tied to whatever `validate` returns, and the compiler carries that through automatically.

## Start concrete, then generalize

Don't design clever generic types up front. Write the concrete version, notice the duplication, and *then* extract a generic. A generic that's hard to read is worse than two simple functions.

> If a generic doesn't remove real duplication, it's just noise with angle brackets.
