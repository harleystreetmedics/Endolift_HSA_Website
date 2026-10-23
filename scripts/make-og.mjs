// Generates the default Open Graph image (1200×630) from an SVG using sharp.
// Usage: node scripts/make-og.mjs
import sharp from "sharp";

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="85%" cy="10%" r="70%">
      <stop offset="0" stop-color="#D4AF37" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#0B0B0C" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="line" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#D4AF37" stop-opacity="0"/>
      <stop offset="0.5" stop-color="#D4AF37"/>
      <stop offset="1" stop-color="#D4AF37" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#0B0B0C"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  ${Array.from({ length: 9 }, (_, i) => `<path d="M ${1220 - i * 10} -20 C ${980 - i * 24} ${200 + i * 6}, ${1100 - i * 20} ${420}, ${860 - i * 26} 660" stroke="url(#line)" stroke-width="1.2" fill="none" opacity="0.45"/>`).join("")}
  <text x="80" y="120" font-family="Georgia, 'Times New Roman', serif" font-size="30" letter-spacing="6" fill="#FFFFFF">HARLEY STREET</text>
  <text x="80" y="152" font-family="Helvetica, Arial, sans-serif" font-size="16" font-weight="700" letter-spacing="9" fill="#D4AF37">AESTHETICS</text>
  <text x="80" y="330" font-family="Georgia, 'Times New Roman', serif" font-size="92" fill="#FFFFFF">Endomax Lift</text>
  <text x="80" y="425" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="64" fill="#D4AF37">London &amp; Glasgow</text>
  <text x="80" y="520" font-family="Helvetica, Arial, sans-serif" font-size="26" fill="#CFCAC0">Minimally invasive laser skin tightening · Doctor-led</text>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile("public/og/og-default.png");
console.log("public/og/og-default.png written");
