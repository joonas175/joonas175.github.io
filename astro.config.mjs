import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import prefetch from "@astrojs/prefetch";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), prefetch(), vue()]
});