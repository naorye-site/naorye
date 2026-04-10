// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    sitemap(),
    sanity({
      projectId: "q9our54l",
      dataset: "production",
      useCdn: false,
      apiVersion: "2026-04-09",
    }),
    icon({
      include: {
        cib: ["ko-fi", "pinterest"]
      },
    }),
  ],
  vite: {
    optimizeDeps: {
      exclude: ["rollup"],
    },
  },
});
