// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  base: "/astro-build",
  site: "https://davidwaligora.com/astro-build",
  outDir: 'dist'  // Default is 'dist', you can change this to another directory if needed
});