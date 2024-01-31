import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import tailwindcssNesting from "tailwindcss/nesting";
import icon from "astro-icon";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), mdx()],
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcssNesting()],
      },
    },
  },
});
