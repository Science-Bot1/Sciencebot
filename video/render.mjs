// Renderiza video/index.html a MP4 (1080x1920, 30 fps, 15 s).
// Uso: node video/render.mjs [salida.mp4]
// Requiere: playwright-core, Chromium (de Playwright) y ffmpeg en el PATH.
import { execFileSync } from 'node:child_process';
import { mkdirSync, rmSync, existsSync, readdirSync } from 'node:fs';
import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';
import os from 'node:os';

const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.resolve(process.argv[2] ?? path.join(here, 'sciencebot-15s.mp4'));
const FPS = 30, W = 1080, H = 1920;

const { chromium } = await import(process.env.PLAYWRIGHT_CORE ?? 'playwright-core');
const pwRoot = path.join(process.env.LOCALAPPDATA ?? path.join(os.homedir(), '.cache'), 'ms-playwright');
const chromeDir = readdirSync(pwRoot).filter((d) => /^chromium-\d+$/.test(d)).sort().pop();
const executablePath = process.env.CHROME_PATH ?? path.join(pwRoot, chromeDir, 'chrome-win64', 'chrome.exe');

const frames = path.join(os.tmpdir(), 'sciencebot-video-frames');
if (existsSync(frames)) rmSync(frames, { recursive: true });
mkdirSync(frames, { recursive: true });

const browser = await chromium.launch({ executablePath });
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
await page.goto(pathToFileURL(path.join(here, 'index.html')).href, { waitUntil: 'networkidle' });
await page.evaluate(async () => {
  await document.fonts.ready;
  await Promise.all([...document.images].map((i) => i.decode().catch(() => {})));
});

const total = Math.round((await page.evaluate(() => window.DURATION)) * FPS);
for (let i = 0; i < total; i++) {
  await page.evaluate((t) => window.seek(t), i / FPS);
  await page.screenshot({ path: path.join(frames, `${String(i).padStart(4, '0')}.png`) });
  if (i % 60 === 0) console.log(`frame ${i}/${total}`);
}
await browser.close();

execFileSync('ffmpeg', ['-y', '-framerate', String(FPS), '-i', path.join(frames, '%04d.png'),
  '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '17', '-preset', 'slow', '-movflags', '+faststart', out], { stdio: 'inherit' });
console.log('listo →', out);
