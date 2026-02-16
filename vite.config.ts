import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages serves the site from a repo subpath
  base: command === 'build' ? '/birthday-card/' : '/',
  plugins: [react()],
  build: {
    // Emit into /docs so GitHub Pages can serve from the repo without Actions
    outDir: 'docs',
    emptyOutDir: true,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));
