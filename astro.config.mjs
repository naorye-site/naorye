// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    mdx(),
    sitemap(),
    sanity({
      projectId: 'q9our54l',
      dataset: 'production',
      useCdn: false,
      studioBasePath: "/studio",
      apiVersion: "2026-04-04",
    }),
  ],
  vite: {
    optimizeDeps: {
      exclude: ["rollup"],
    },
  },
});
