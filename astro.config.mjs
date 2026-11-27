// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://james46007.github.io",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: { prefixDefaultLocale: false },
  },
  // Inline CSS so the CV pages print correctly from file:// as well
  build: { inlineStylesheets: "always" },
  vite: { plugins: [tailwindcss()] },
});
