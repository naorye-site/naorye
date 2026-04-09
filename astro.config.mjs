// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    sitemap(),
    sanity({
      projectId: "q9our54l",
      dataset: "production",
      useCdn: false,
      apiVersion: '2026-04-09',
    }),
  ],
  vite: {
    optimizeDeps: {
      exclude: ["rollup"],
    },
  },
});
