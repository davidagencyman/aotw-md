# AGENTS.md — infra & admin brief (Codex)

## What this repo is
AOTW.md — AI-fetchable markdown coaching modules by Ahead of the Wave AI (aheadofthewave.ai). Clients paste a URL like `md.aheadofthewave.ai/claude` into any AI chat; the file turns that AI into a step-by-step coach. The files ARE the product.

## Your role — and its hard boundary
You handle **infrastructure and admin only**: GitHub, Cloudflare, DNS, redirects, deploy checks, analytics.

**You never edit the coaching content.** Not a word, not a typo, not an "improvement." `coach.md` and every future module's wording is owned by a separate Claude Code workflow (see CLAUDE.md — that file is not for you). If a task seems to require changing coaching text, stop and tell Davit instead.

## Setup tasks (in order)

1. **Repo.** Ensure this folder is a GitHub repo named `aotw-md` and pushed. If not yet: init, create the remote under Davit's account, push.
2. **Redirects.** Ensure a file named `_redirects` (no extension) exists in the root with:
   ```
   /claude /coach.md 200
   /start /index.md 200
   ```
3. **Cloudflare Pages.** Create a Pages project connected to the `aotw-md` repo. Settings: framework preset **None**, build command **`node scripts/build-index.mjs`**, output directory **/** (root). Deploy.
4. **Verify raw serving.** `curl -i https://<project>.pages.dev/claude` must return the markdown text of coach.md with HTTP 200 and a text content-type. If it returns HTML, a 404, or a redirect loop, fix before proceeding.
5. **Custom domain.** Add `md.aheadofthewave.ai` as a custom domain on the Pages project. Create the CNAME record Cloudflare asks for in the DNS zone of `aheadofthewave.ai`. Confirm cert issues and the domain goes active.
6. **Final check.** `curl -i https://md.aheadofthewave.ai/claude` returns the coach markdown. Report both URLs (pages.dev and custom domain) to Davit when done.

## Recurring duties
- Module redirect lines (pattern `/name /name.md 200`) are now added by the Claude Code workflow in the same commit that ships the module — don't add them yourself. Your job when one lands: confirm the deploy went green and `curl https://md.aheadofthewave.ai/<name>` returns the raw markdown. Everything else in `_redirects` (root serving, `/start`, anything that isn't a module line) is still yours.
- Keep deploys green; if a push doesn't auto-deploy, investigate.
- When asked for "numbers": pull per-path request counts from Cloudflare analytics — which modules get fetched, how often.

## Rules
- Never delete or rename `coach.md`, `README.md`, or module files without explicit instruction.
- No frameworks or site generators. The only permitted build step is `scripts/build-index.mjs`, which generates the root `index.html` wrapper from `index.md`. All module `.md` files must continue to be served raw and byte-identical.
- Public repo is fine for now; if Davit adds client-specific folders later, flag that gating (Cloudflare Access) is needed BEFORE they're pushed, not after.
