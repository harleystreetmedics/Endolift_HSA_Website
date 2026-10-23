// Checks every internal link, tel: and mailto: in the built site (out/).
// External URLs are listed for manual checking (the build machine may not have internet access).
import fs from "node:fs";
import path from "node:path";

const OUT = "out";
const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://endolift.harleystreetaesthetic.co.uk").replace(/\/$/, "");
const files = [];
const walk = (d) =>
  fs.readdirSync(d, { withFileTypes: true }).forEach((e) => {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith(".html")) files.push(p);
  });
walk(OUT);

const exists = (href) => {
  const clean = href.split("#")[0].split("?")[0];
  if (!clean || clean === "/") return fs.existsSync(path.join(OUT, "index.html"));
  const p = path.join(OUT, clean);
  return fs.existsSync(p) && fs.statSync(p).isFile() ? true : fs.existsSync(path.join(p, "index.html"));
};

let broken = 0;
const external = new Set();
const tels = new Set();
const mails = new Set();
for (const f of files) {
  const html = fs.readFileSync(f, "utf8");
  for (let [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (href.startsWith(SITE)) href = href.slice(SITE.length) || "/"; // canonical / OG URLs
    if (href.startsWith("/_next/") || href.startsWith("#")) continue;
    if (href.startsWith("tel:")) {
      tels.add(href);
      if (!/^tel:\+44\d{9,10}$/.test(href)) {
        broken++;
        console.log(`✗ bad tel ${href} in ${f}`);
      }
    } else if (href.startsWith("mailto:")) mails.add(href);
    else if (/^https?:\/\//.test(href)) external.add(href);
    else if (href.startsWith("/") && !exists(href)) {
      broken++;
      console.log(`✗ ${href} in ${f}`);
    }
  }
}
console.log(`\nChecked ${files.length} pages. Broken internal links: ${broken}`);
console.log(`Phone links: ${[...tels].join(", ")}`);
console.log(`Email links: ${[...mails].join(", ")}`);
console.log(`External links to verify manually (${external.size}):\n  ${[...external].sort().join("\n  ")}`);
process.exit(broken ? 1 : 0);
