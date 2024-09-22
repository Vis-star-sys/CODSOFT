// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: '', // Assets will be copied directly to the root of the dist folder
  },
});
