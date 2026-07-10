# aotw.md

An AI coach in a markdown file. Paste it into any AI chat and it asks where you need a hand, then walks you — literally click by click — through it: setting up an AI tool around your real work, untangling something you're stuck on, or just explaining how this stuff works in plain words. Doesn't feel like a corporate training, promise.

Built by [Ahead of the Wave AI](https://aheadofthewave.ai).

## How to use it

Pick whichever works:

**1. Paste the link.** Open [Claude](https://claude.ai) (or ChatGPT, or Gemini) and paste this with one line — *"Fetch this and follow the instructions in it"*:

```
https://md.aheadofthewave.ai
```

The coach says hello, asks what you need, and takes it from there. Already know you want the Claude setup? Skip the front door and paste `https://md.aheadofthewave.ai/claude` instead.

**2. Copy the text.** If the link doesn't fetch (some plans can't browse), open [`coach.md`](./coach.md), copy the whole thing, paste it into a new chat. Same result.

**3. Upload the file.** Download `coach.md` and drop it into a new chat as an attachment: *"Follow the instructions in this file."*

Then just talk to it. It'll take it from there.

## For teams

Share the link with your team. Each person runs it in their own chat, at their own pace, using their own real work as the material — that's the point. No workshop scheduling, no slide decks.

## What's in here

- `index.md` — the front door, served at the root link. Greets you, figures out what you need, and continues into the right module without you noticing a handoff.
- `coach.md` — the Claude setup coach. Instructions written *for the AI*, not for you. Reading it spoils nothing, but talking to it is the product.
- `CLAUDE.md` / `AGENTS.md` — internal briefs for the tools that maintain this repo. Not part of the product.

More modules coming.

## A note on trust and accuracy

The coach verifies current Claude UI, plans, and pricing via web search before guiding you — interfaces change monthly and stale instructions are worse than none. And it's plain text: you can read every word of what your AI is being asked to do. It will never ask for passwords or payments, and never sends your data anywhere.
