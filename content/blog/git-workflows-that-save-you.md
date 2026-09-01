---
title: "Git Workflows That Save You From Yourself"
date: "2025-09-28"
excerpt: "Git is powerful but unforgiving. A few simple habits — small commits, atomic changes, clear messages — turn a source of anxiety into a safety net."
tags: ["git", "workflow"]
---

Everyone has had a "git ruined my work" moment. In almost every case, it wasn't git's fault — it was a missing habit. A few small practices make git the safety net it's supposed to be.

## Commit small, commit often

A commit should be one logical change: fix a bug, add a feature, rename a function. Not twelve things at once. Small commits are easy to review, easy to revert, and easy to explain.

If you're committing a lot, your message is short. If it's long, you're committing too much.

## Commit the file, not the work

Use `git add` for specific files rather than `git add .` blindly. You want each commit to contain only what belongs to it, not every scratch change in your working directory.

```bash
git add src/utils/date.ts
git commit -m "fix: handle timezone offset in date formatter"
```

## Write a message that tells the future

Future-you (and your team) will read your commit messages. Make them useful:

- **What** changed, in one line
- **Why** it changed, if it's not obvious

Bad: `update stuff`
Good: `fix: return 404 when user is not found`

## Branch before you break things

Work on a branch, not directly on main. Branches are cheap. They let you experiment, and they make it safe to try things you might throw away.

## The recovery commands you actually need

Three commands solve most "I broke it" moments:

- `git status` — see where you are
- `git log --oneline` — see where you've been
- `git checkout -- <file>` — throw away uncommitted changes to a file

And the big one: `git revert` for commits you've already pushed. Don't rewrite history you've shared; add a new commit that undoes it.

## The one rule that prevents 90% of pain

**Never force-push a shared branch.** Force-push rewrites history and silently destroys your team's work. If you need to undo something that's been pushed, use `revert`, not `reset` + force.

Git is a tool, not a punishment. Use these habits and it becomes the thing that catches you when you fall — instead of the thing that pushes you.
