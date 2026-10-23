// Lists every [TBC: …] placeholder in source and in the built site, so none ship unflagged.
// Usage: node scripts/check-tbc.mjs   (exit code 0; it reports, it doesn't fail the build)
import fs from "node:fs";
import path from "node:path";

const RE = /\[TBC[^\]]*\]/g;
const roots = ["src", "public"];
const found = new Map();

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (/\.(tsx?|mjs|html|json|md)$/.test(entry.name)) {
      fs.readFileSync(p, "utf8")
        .split("\n")
        .forEach((line, i) => {
          for (const m of line.matchAll(RE)) {
            const key = m[0];
            if (!found.has(key)) found.set(key, []);
            found.get(key).push(`${p}:${i + 1}`);
          }
        });
    }
  }
}
roots.filter(fs.existsSync).forEach(walk);

const sorted = [...found.entries()].sort((a, b) => a[0].localeCompare(b[0]));
console.log(`\n${sorted.length} unique [TBC] placeholders\n`);
for (const [k, locs] of sorted) console.log(`• ${k}\n    ${locs.join("\n    ")}`);

if (fs.existsSync("out")) {
  let pages = 0;
  const walkOut = (d) =>
    fs.readdirSync(d, { withFileTypes: true }).forEach((e) => {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walkOut(p);
      else if (e.name === "index.html" && fs.readFileSync(p, "utf8").includes("[TBC")) pages++;
    });
  walkOut("out");
  console.log(`\n${pages} built page(s) still show a [TBC] placeholder.`);
}
