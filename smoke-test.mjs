import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

mkdirSync('playwright-out', { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

const consoleMsgs = [];
const pageErrors = [];
const failedReqs = [];
page.on('console', m => consoleMsgs.push(`[${m.type()}] ${m.text()}`));
page.on('pageerror', e => pageErrors.push(e.message));
page.on('requestfailed', r => failedReqs.push(`${r.url()} :: ${r.failure()?.errorText}`));

const t0 = Date.now();
const resp = await page.goto('http://localhost:8080', { waitUntil: 'networkidle', timeout: 30000 });
const loadMs = Date.now() - t0;

const title = await page.title();
const h1 = await page.locator('h1').first().textContent().catch(() => null);
const bodyText = (await page.locator('body').innerText()).slice(0, 400);

await page.screenshot({ path: 'playwright-out/desktop.png', fullPage: true });

await page.setViewportSize({ width: 390, height: 844 });
await page.screenshot({ path: 'playwright-out/mobile.png', fullPage: true });

console.log(JSON.stringify({
  status: resp?.status(),
  loadMs,
  title,
  h1,
  bodyTextPreview: bodyText,
  consoleMsgs,
  pageErrors,
  failedReqs,
}, null, 2));

await browser.close();
