import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = path.join(__dirname, '../src/assets/images');
const PUBLIC_DIR = path.join(__dirname, '../public');

const HERO_MAX = 1920;
const LOGO_MAX = 512;
const ICON_MAX = 192;

/** Displayed as small brand / client marks — cap resolution */
const LOGO512 = new Set([
  'dream-cairo-logo',
  'alameed-coffee-logo',
  'breem-logo',
  'efficient-vision-logo',
  'youmats-logo',
  'mycash-logo',
  'dubai-police-logo',
  'mazaady-logo',
  'bakkar-logo',
  'logo-teal',
  'brand-logo-mint',
]);

/** Social / UI icons */
const ICON_IDS = new Set([
  'social-linkedin',
  'social-facebook',
  'social-instagram',
  'social-x',
  'social-threads',
]);

function maxWidthFor(base) {
  if (ICON_IDS.has(base)) return ICON_MAX;
  if (LOGO512.has(base)) return LOGO_MAX;
  return HERO_MAX;
}

async function toWebp(inPath, outPath, maxW) {
  const meta = await sharp(inPath).metadata();
  let pipeline = sharp(inPath).rotate();
  if (meta.width && meta.width > maxW) {
    pipeline = pipeline.resize({
      width: maxW,
      withoutEnlargement: true,
    });
  }
  await pipeline.webp({ quality: 82, effort: 6, smartSubsample: true }).toFile(outPath);
}

async function main() {
  await fs.mkdir(PUBLIC_DIR, { recursive: true });

  const files = (await fs.readdir(IMAGES_DIR)).filter((f) => f.endsWith('.png'));

  for (const f of files) {
    const base = path.basename(f, '.png');
    const inPath = path.join(IMAGES_DIR, f);
    const outPath = path.join(IMAGES_DIR, `${base}.webp`);
    const maxW = maxWidthFor(base);
    await toWebp(inPath, outPath, maxW);
    console.log(`${f} → ${base}.webp (max ${maxW}px)`);
  }

  const brandLogoPng = path.join(IMAGES_DIR, 'brand-logo-mint.png');
  const brandExists = await fs
    .access(brandLogoPng)
    .then(() => true)
    .catch(() => false);

  if (brandExists) {
    const logoSized = await sharp(brandLogoPng)
      .rotate()
      .resize(420, 420, { fit: 'inside' })
      .toBuffer();

    await sharp({
      create: {
        width: 1200,
        height: 630,
        channels: 3,
        background: { r: 2, g: 2, b: 4 },
      },
    })
      .composite([{ input: logoSized, gravity: 'center' }])
      .webp({ quality: 86, effort: 6 })
      .toFile(path.join(PUBLIC_DIR, 'og-image.webp'));

    await sharp(brandLogoPng)
      .rotate()
      .resize(LOGO_MAX, LOGO_MAX, { fit: 'inside' })
      .webp({ quality: 90, effort: 6 })
      .toFile(path.join(PUBLIC_DIR, 'logo.webp'));

    await sharp(brandLogoPng)
      .rotate()
      .resize(180, 180, { fit: 'inside', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: 88, effort: 6 })
      .toFile(path.join(PUBLIC_DIR, 'apple-touch-icon.webp'));

    console.log('public/og-image.webp, logo.webp, apple-touch-icon.webp');
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
