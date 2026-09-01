---
title: "The Art of Writing Clean Code Review Comments"
date: "2025-11-18"
excerpt: "Code reviews live or die by how you phrase your feedback. The right comment gets merged fast; the wrong one starts a war. Here's how I do it."
tags: ["teamwork", "code-quality"]
---

A code review is not a grading session. It's a conversation between people who both want the code to be good. The difference between those two things is almost entirely in the words you choose.

## Separate the person from the code

Never comment on the author, always on the code. "You forgot to handle this" becomes "This path looks unhandled." It's a small change that completely changes how the feedback lands.

## Be specific, not vague

"Can you make this better?" is useless. Nobody knows what better means. Instead:

```text
Vague:   "This function is messy."
Better:  "The retry logic is duplicated with the loop above. Could we extract it into one helper?"
```

Specific feedback gives the author a concrete action, which makes it easy to say yes to.

## Ask, don't demand

Phrasing feedback as a question leaves room for context you might not have:

- "Is there a reason this is hardcoded?"
- "Would a map be simpler here than a switch?"

It signals you're curious, not dictating. That keeps the review collaborative.

## Use the right severity labels

Not every comment is equal. Reserve strong language for real problems:

- **Must fix** — a bug, a security issue, or a performance landmine
- **Consider** — a tradeoff worth discussing
- **Nit** — style and preference; fine to leave as-is

Over-labeling "must fix" for style nits burns goodwill fast.

## Praise good code too

A review full of complaints reads as hostility. When someone does something elegant, say so. It teaches the whole team the pattern and makes future feedback land better.

## The rule I follow

Read every comment as if someone wrote it about your code. If it would make you defensive, rewrite it before you send it.
