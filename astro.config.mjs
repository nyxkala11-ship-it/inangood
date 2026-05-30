// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
// https://astro.build/config
export default defineConfig({
  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },

  site: "https://example.com",
  integrations: [mdx(), sitemap()],
  adapter: vercel(),

  fonts: [
    {
      provider: fontProviders.local(),
      name: "DistantGalaxy",
      cssVariable: "--font-fleur-de-leah",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/FleurDeLeah-Regular.ttf"],
            weight: "normal",
            style: "normal",
          },
        ],
      },
    },
  ],
});
