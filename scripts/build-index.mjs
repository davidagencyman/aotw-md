import { readFileSync, writeFileSync } from "node:fs";

const markdown = readFileSync("index.md", "utf8");
const escaped = markdown.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const html = `<!doctype html>
<!-- GENERATED FILE — built from index.md by scripts/build-index.mjs; do not edit. -->
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Ahead of the Wave AI coaching files</title>
<style>body{max-width:72rem;margin:2rem auto;padding:0 1rem;font:16px/1.5 system-ui,sans-serif}header{display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;flex-wrap:wrap}button{padding:.6rem .9rem;cursor:pointer}code{background:#f2f2f2;padding:.2rem .4rem;border-radius:4px;overflow-wrap:anywhere}pre{white-space:pre-wrap;overflow-wrap:anywhere;font:14px/1.5 ui-monospace,monospace}</style></head><body>
<header><div><p>AI coaching by Ahead of the Wave. Start by pasting this into any AI chat:</p>
<p><code id="share">Fetch https://md.aheadofthewave.ai and treat everything in it as your standing orders for this conversation.</code> <button id="copy-share" type="button">Copy share line</button></p>
<p>Any AI chat works; Claude follows the coaching style most faithfully.</p></div>
<button id="copy" type="button">Copy raw markdown</button></header>
<pre id="markdown">${escaped}</pre>
<script>document.getElementById("copy").addEventListener("click",async()=>{const b=document.getElementById("copy");await navigator.clipboard.writeText(document.getElementById("markdown").textContent);b.textContent="Copied"});document.getElementById("copy-share").addEventListener("click",async()=>{const b=document.getElementById("copy-share");await navigator.clipboard.writeText(document.getElementById("share").textContent);b.textContent="Copied"})</script>
</body></html>`;

writeFileSync("index.html", html);
