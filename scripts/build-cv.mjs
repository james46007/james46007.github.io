// Builds the site, prints /cv/en and /cv/es to PDF with headless Chrome,
// and saves them to public/cv so they ship with the next build.
// Run locally after editing src/i18n/content.ts:  npm run cv
import { execFileSync } from "node:child_process";
import { mkdirSync, copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const chromeCandidates = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);
const chrome = chromeCandidates.find((p) => existsSync(p));
if (!chrome) throw new Error("Chrome not found. Set CHROME_PATH.");

execFileSync("npx", ["astro", "build"], { stdio: "inherit" });

mkdirSync("public/cv", { recursive: true });
mkdirSync("dist/cv", { recursive: true });

for (const lang of ["en", "es"]) {
  const src = pathToFileURL(resolve(`dist/cv/${lang}/index.html`)).href;
  const out = resolve(`public/cv/jimmy-yar-cv-${lang}.pdf`);
  execFileSync(chrome, [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--virtual-time-budget=5000",
    `--print-to-pdf=${out}`,
    src,
  ], { stdio: "ignore" });
  copyFileSync(out, `dist/cv/jimmy-yar-cv-${lang}.pdf`);
  console.log(`✓ ${out}`);
}
