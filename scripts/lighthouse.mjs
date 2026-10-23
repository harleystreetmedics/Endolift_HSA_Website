// Runs Lighthouse (mobile) against the built site for key pages and prints category scores.
// Usage: npm run build && CHROME_PATH=/path/to/chrome node scripts/lighthouse.mjs
import http from "node:http";
import fs from "node:fs";
import handler from "serve-handler";
import compression from "compression";
import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";

const PAGES = ["/", "/treatment-areas/", "/treatment-areas/neck/", "/how-it-works/", "/pricing/", "/results/", "/faq/", "/about/", "/london/", "/glasgow/", "/book/", "/privacy-policy/"];
// gzip locally to mirror Netlify, which serves Brotli/gzip in production.
const comp = compression();
const server = http.createServer((q, r) => comp(q, r, () => handler(q, r, { public: "out", trailingSlash: true })));
await new Promise((r) => server.listen(4323, r));
const chrome = await chromeLauncher.launch({ chromePath: process.env.CHROME_PATH, chromeFlags: ["--headless=new", "--no-sandbox"] });
const rows = [];
let fail = false;
for (const p of PAGES) {
  const { lhr } = await lighthouse(`http://localhost:4323${p}`, { port: chrome.port, output: "json", logLevel: "error" });
  const s = Object.fromEntries(Object.entries(lhr.categories).map(([k, v]) => [k, Math.round(v.score * 100)]));
  rows.push({ page: p, ...s });
  if (Object.values(s).some((v) => v < 90)) {
    fail = true;
    const bad = Object.values(lhr.audits).filter((a) => a.score !== null && a.score < 0.9 && a.scoreDisplayMode !== "informative" && a.scoreDisplayMode !== "notApplicable");
    console.log(p, "→ audits below 0.9:", bad.map((a) => `${a.id}(${a.score})`).join(", "));
  }
}
console.table(rows);
fs.writeFileSync("docs/lighthouse.json", JSON.stringify(rows, null, 2));
await chrome.kill();
server.close();
process.exit(fail ? 1 : 0);
