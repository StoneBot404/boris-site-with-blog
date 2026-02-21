import { defineConfig } from 'astro';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    // Example configuration
    // appliesTailwindCSS: true
  })],
  // Other Astro configurations can go here
  // --site: 'https://your-domain.com',
  // --base: '/repository-subfolder',
});
