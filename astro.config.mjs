import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://how-ancient-china-worked.zhangyu-ct.workers.dev',
  integrations: [sitemap()],
});
