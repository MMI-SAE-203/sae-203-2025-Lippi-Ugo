// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  
  integrations: [tailwind({ applyBaseStyles: false })],
  experimental: { svg: true },

  adapter: netlify(),
});