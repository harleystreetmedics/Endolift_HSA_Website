// Screenshot every page at mobile, tablet and desktop widths into docs/screens/.
// Usage: npm run build && node scripts/screens.mjs [path ...]
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import handler from "serve-handler";
import { chromium } from "playwright";

const OUT = path.resolve("out");
const DEST = path.resolve("docs/screens");
const PORT = 4321;
const WIDTHS = { mobile: [390, 844], tablet: [820, 1180], desktop: [1440, 900] };

const pages = process.argv.slice(2).length
  ? process.argv.slice(2)
  : fs
      .readdirSync(OUT, { recursive: true })
      .filter((f) => f.endsWith("index.html"))
      .map((f) => "/" + f.replace(/index\.html$/, "").replace(/\\/g, "/"))
      .sort();

const server = http.createServer((req, res) => handler(req, res, { public: OUT, trailingSlash: true }));
await new Promise((r) => server.listen(PORT, r));
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
fs.mkdirSync(DEST, { recursive: true });

for (const [label, [width, height]] of Object.entries(WIDTHS)) {
  const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1 });
  // Pre-dismiss the cookie banner so it doesn't cover content in screenshots.
  await ctx.addInitScript(() => localStorage.setItem("hsa-cookie-consent", JSON.stringify({ analytics: false, marketing: false, ts: "", v: 1 })));
  const page = await ctx.newPage();
  for (const p of pages) {
    await page.goto(`http://localhost:${PORT}${p}`, { waitUntil: "networkidle" });
    const name = (p === "/" ? "home" : p.replace(/^\/|\/$/g, "").replace(/\//g, "_")) + `.${label}.png`;
    await page.screenshot({ path: path.join(DEST, name), fullPage: true });
    console.log("saved", name);
  }
  await ctx.close();
}
await browser.close();
server.close();
