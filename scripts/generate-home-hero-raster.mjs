/**
 * Rasterize the homepage hero SVG scene (same geometry as Svg-1425-64) to WebP + AVIF.
 * Run after editing svg-589s7psmlq.ts or Svg-1425-64 defs/panels.
 *
 * Usage: node scripts/generate-home-hero-raster.mjs
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const TSX = path.join(ROOT, 'src/imports/Svg-1425-64.tsx');
const PATHS_FILE = path.join(ROOT, 'src/imports/svg-589s7psmlq.ts');
const OUT_DIR = path.join(ROOT, 'src/assets/images');

const VB_W = 4096;
const VB_H = 2560;
const HERO_MAX = 1920;
const OUT_W = HERO_MAX;
const OUT_H = Math.round((HERO_MAX * VB_H) / VB_W);

function loadPaths() {
  const raw = fs.readFileSync(PATHS_FILE, 'utf8');
  const paths = {};
  for (const m of raw.matchAll(/^(\w+):\s*"([^"]+)"/gm)) {
    paths[m[1]] = m[2];
  }
  const required = [
    'pe871dc0', 'pa48b880', 'p26909500', 'p1b01100', 'p343f2e80', 'p34a53600',
    'p315e4780', 'p13f891c0', 'p716e300', 'p3e7e780', 'p2fcf6500', 'p114ed600',
    'p3557f780', 'p2f0ddf00', 'p2811f080',
  ];
  for (const k of required) {
    if (!paths[k]) throw new Error(`Missing path ${k} in svg-589s7psmlq.ts`);
  }
  return paths;
}

function extractDefsInner() {
  const tsx = fs.readFileSync(TSX, 'utf8');
  const m = tsx.match(/<defs>([\s\S]*?)<\/defs>/);
  if (!m) throw new Error('Could not find <defs> in Svg-1425-64.tsx');
  return m[1]
    .replace(/stopColor=/g, 'stop-color=')
    .replace(/stopOpacity=/g, 'stop-opacity=');
}

function panelSvg(x, y, w, h, viewW, viewH, innerXml) {
  return `<svg x="${x}" y="${y}" width="${w}" height="${h}" viewBox="0 0 ${viewW} ${viewH}" preserveAspectRatio="none" overflow="hidden">${innerXml}</svg>`;
}

function buildSvg(p) {
  const defs = extractDefsInner();

  const panel2 = panelSvg(
    0.4318 * VB_W,
    -0.0021 * VB_H,
    (1 - 0.4318 - 0.0182) * VB_W,
    (1 + 0.0021 + 0.3172) * VB_H,
    2252.75,
    3377.39,
    `<g><g><path d="${p.pa48b880}" fill="url(#paint0_linear_1425_68)"/></g><path d="${p.p26909500}" fill="url(#paint1_linear_1425_68)"/></g>`,
  );

  const panel3 = panelSvg(
    0.2489 * VB_W,
    -0.1004 * VB_H,
    (1 - 0.2489 - 0.1699) * VB_W,
    (1 + 0.1004 + 0.1846) * VB_H,
    2380.81,
    3289.67,
    `<g><g><path d="${p.p343f2e80}" fill="url(#paint0_linear_1425_88)"/></g><path d="${p.p34a53600}" fill="url(#paint1_linear_1425_88)"/></g>`,
  );

  const panel4 = panelSvg(
    0.0708 * VB_W,
    -0.0515 * VB_H,
    (1 - 0.0708 - 0.3791) * VB_W,
    (1 + 0.0515 + 0.2679) * VB_H,
    2253.24,
    3377.6,
    `<g><g><path d="${p.p13f891c0}" fill="url(#paint0_linear_1425_73)"/></g><path d="${p.p716e300}" fill="url(#paint1_linear_1425_73)"/></g>`,
  );

  const panel5 = panelSvg(
    -0.1376 * VB_W,
    -0.2025 * VB_H,
    (1 + 0.1376 - 0.5425) * VB_W,
    (1 + 0.2025 + 0.0663) * VB_H,
    2437.26,
    3247.95,
    `<g><g><path d="${p.p2fcf6500}" fill="url(#paint0_linear_1425_83)"/></g><path d="${p.p114ed600}" fill="url(#paint1_linear_1425_83)"/></g>`,
  );

  const panel6 = panelSvg(
    -0.3453 * VB_W,
    -0.0631 * VB_H,
    (1 + 0.3453 - 0.7758) * VB_W,
    (1 + 0.0631 + 0.2355) * VB_H,
    2332.66,
    3324.18,
    `<g><g><path d="${p.p2f0ddf00}" fill="url(#paint0_linear_1425_78)"/></g><path d="${p.p2811f080}" fill="url(#paint1_linear_1425_78)"/></g>`,
  );

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${VB_W}" height="${VB_H}" viewBox="0 0 ${VB_W} ${VB_H}" fill="none">
<defs>${defs}</defs>
<path d="M4096 0H0V2560H4096V0Z" fill="url(#paint0_linear_1412_121)"/>
<path d="${p.pe871dc0}" fill="url(#paint0_linear_1412_98)"/>
${panel2}
<path d="${p.p1b01100}" fill="url(#paint0_linear_1412_83)"/>
${panel3}
<path d="${p.p315e4780}" fill="url(#paint0_linear_1412_78)"/>
${panel4}
<path d="${p.p3e7e780}" fill="url(#paint0_linear_1412_88)"/>
${panel5}
<path d="${p.p3557f780}" fill="url(#paint0_linear_1412_108)"/>
${panel6}
</svg>`;
}

async function main() {
  const p = loadPaths();
  const svg = buildSvg(p);
  const buf = Buffer.from(svg, 'utf8');
  const base = path.join(OUT_DIR, 'zaxa-home-hero-1920');

  await fs.promises.mkdir(OUT_DIR, { recursive: true });

  await sharp(buf, { density: 144 })
    .resize(OUT_W, OUT_H, { fit: 'fill' })
    .webp({ quality: 86, effort: 6, smartSubsample: true })
    .toFile(`${base}.webp`);

  await sharp(buf, { density: 144 })
    .resize(OUT_W, OUT_H, { fit: 'fill' })
    .avif({ quality: 72, effort: 5 })
    .toFile(`${base}.avif`);

  const stW = await fs.promises.stat(`${base}.webp`);
  const stA = await fs.promises.stat(`${base}.avif`);
  console.log(`Wrote ${base}.webp (${(stW.size / 1024).toFixed(1)} KiB)`);
  console.log(`Wrote ${base}.avif (${(stA.size / 1024).toFixed(1)} KiB)`);
  console.log(`Output size ${OUT_W}x${OUT_H} (from ${VB_W}x${VB_H} vector)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
