import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/modert_art_gallery/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        location: resolve(__dirname, 'pages/location.html'),
      },
    },
  },
});
