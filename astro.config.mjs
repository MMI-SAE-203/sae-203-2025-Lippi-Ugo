// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind({ applyBaseStyles: false })],
  experimental: { svg: true },

  adapter: node({
    mode: "standalone",
  }),
});