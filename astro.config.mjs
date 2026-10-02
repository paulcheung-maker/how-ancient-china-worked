import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://paulcheung-maker.github.io/how-ancient-china-worked',
  integrations: [sitemap()],
});
