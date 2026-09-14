import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import zlib from 'node:zlib';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/* ------------------------------------------------------------------ */
/* Minimal pure-JS PNG encoder — used to generate PWA icons at build  */
/* ------------------------------------------------------------------ */

const CRC_TABLE = (() => {
  const table = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c;
  }
  return table;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function pngChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const typeBuf = Buffer.from(type, 'ascii');
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])));
  return Buffer.concat([len, typeBuf, data, crc]);
}

function encodePng(width, height, rgba) {
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type RGBA
  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0; // filter: none
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }
  const idat = zlib.deflateSync(raw, { level: 9 });
  return Buffer.concat([sig, pngChunk('IHDR', ihdr), pngChunk('IDAT', idat), pngChunk('IEND', Buffer.alloc(0))]);
}

/** Draws the Rajabhakti Park app icon (dark teal bg + gold ring, spire & pedestal). */
function drawIcon(size) {
  const px = Buffer.alloc(size * size * 4);
  const BG = [7, 26, 28];
  const GOLD = [201, 169, 98];
  const GOLD_BRIGHT = [230, 198, 117];

  const inRect = (x, y, x0, y0, x1, y1) => x >= x0 && x <= x1 && y >= y0 && y <= y1;
  const inTriangle = (x, y, ax, ay, bx, by, cx, cy) => {
    const d1 = (x - bx) * (ay - by) - (ax - bx) * (y - by);
    const d2 = (x - cx) * (by - cy) - (bx - cx) * (y - cy);
    const d3 = (x - ax) * (cy - ay) - (cx - ax) * (y - ay);
    const hasNeg = d1 < 0 || d2 < 0 || d3 < 0;
    const hasPos = d1 > 0 || d2 > 0 || d3 > 0;
    return !(hasNeg && hasPos);
  };

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const u = x / size;
      const v = y / size;
      let color = BG;
      const d = Math.hypot(u - 0.5, v - 0.5);
      if (Math.abs(d - 0.46) <= 0.015) {
        color = GOLD_BRIGHT;
      } else if (inTriangle(u, v, 0.5, 0.22, 0.66, 0.62, 0.34, 0.62)) {
        color = GOLD_BRIGHT;
      } else if (inRect(u, v, 0.3, 0.66, 0.7, 0.71) || inRect(u, v, 0.36, 0.74, 0.64, 0.78)) {
        color = GOLD;
      }
      const i = (y * size + x) * 4;
      px[i] = color[0];
      px[i + 1] = color[1];
      px[i + 2] = color[2];
      px[i + 3] = 255;
    }
  }
  return encodePng(size, size, px);
}

function pwaIcons() {
  return {
    name: 'pwa-icons',
    hooks: {
      'astro:config:setup'({ config, logger }) {
        const asPath = (p) => (typeof p === 'string' ? p : fileURLToPath(p));
        const dir = path.join(asPath(config.publicDir ?? 'public'), 'icons');
        fs.mkdirSync(dir, { recursive: true });
        for (const size of [192, 512]) {
          const file = path.join(dir, `icon-${size}.png`);
          if (!fs.existsSync(file)) {
            fs.writeFileSync(file, drawIcon(size));
            logger.info(`generated ${file}`);
          }
        }
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: process.env.CURRENT_SITE_DOMAIN ? `https://${process.env.CURRENT_SITE_DOMAIN}` : 'https://rajabhakti.com',
  output: 'hybrid',
  adapter: cloudflare({
    imageService: 'passthrough',
    routes: { strategy: 'auto' },
  }),
  integrations: [pwaIcons()],
  i18n: {
    defaultLocale: 'th',
    locales: ['th', 'en', 'zh'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  image: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
    quality: 75,
    formats: ['avif', 'webp', 'jpeg'],
  },
  vite: {
    plugins: [tailwindcss()],
    build: { minify: 'esbuild', cssMinify: 'esbuild' },
  },
});
