import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://xbooks.netlify.app/',   
  server: {
    port: 3030,
  },
  integrations: [
    svelte(),
    tailwind(),
  ]
})
