import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://lidiman.github.io',
  base: '/Self-Portofolio',
  vite: {
    plugins: [tailwindcss()],
  },
});
