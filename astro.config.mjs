import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
   integrations: [
      tailwind(),
      preact(),
      image({ serviceEntryPoint: "@astrojs/image/sharp" }),
   ],
});
