---
title: "Sessions vs JWTs: What Actually Happens on Every Request"
date: "2026-05-09"
excerpt: "Both answer 'who is this user?' and they get there in opposite ways. Knowing the trade-offs — and the one storage mistake that keeps repeating — makes the choice much clearer."
tags: ["security", "backend"]
---

Authentication answers one question on every request: *who is this?* Sessions and JWTs are the two standard answers, and they solve it from opposite directions. Neither is universally better — but one mistake shows up in both.

## Sessions: state lives on the server

The server creates a session, stores it (in memory, Redis, a database), and hands the browser a cookie holding just a session ID. On each request, the server looks up that ID.

- **Pro:** you can revoke instantly — delete the session and the user is out
- **Con:** every request needs a lookup, so state is centralized

## JWTs: state lives in the token

A JSON Web Token packs the user's claims into a signed blob. The server verifies the signature and trusts the contents — no lookup.

- **Pro:** stateless and easy to scale across many servers
- **Con:** you can't un-issue a token before it expires

A JWT is *signed*, not *encrypted*. Anyone can read the payload. Never put secrets in it.

## The revocation problem

This is the real trade. With a session, logging out is trivial. With a JWT, a stolen token stays valid until it expires. The usual workarounds — short expiry plus refresh tokens, or a server-side blocklist — quietly reintroduce the state that JWTs were supposed to remove.

## The mistake everyone makes

**Don't store tokens in `localStorage`.** Any JavaScript on the page — including a single compromised dependency — can read it and exfiltrate it. That's a classic XSS-to-account-takeover path.

Prefer cookies with the right flags:

```http
Set-Cookie: session=...; HttpOnly; Secure; SameSite=Lax
```

- `HttpOnly` blocks JavaScript access
- `Secure` keeps it on HTTPS
- `SameSite` limits cross-site sending, which defends against CSRF

A cookie is just a delivery mechanism. You can put a session ID *or* a JWT inside it.

## A practical default

For most apps: **sessions in an HttpOnly cookie.** Simple, revocable, battle-tested. Reach for stateless JWTs when you genuinely need to verify requests without shared state — like a fleet of services that shouldn't call a central store on every request.

## The takeaway

Ask what you value more: instant revocation, or stateless scale. Pick accordingly — and whatever you pick, keep it out of `localStorage`.
