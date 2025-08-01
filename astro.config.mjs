// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://example.com",
  integrations: [sitemap(), icon(), markdoc()],
});
