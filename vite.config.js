import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: true,
    },
    watch: {
      ignored: ['**/node_modules/**', '**/.git/**'],
    },
    port: 3000,
  },
  build: {
    sourcemap: true,
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  assetsInclude: ['**/*.png', '**/*.PNG', '**/*.jpg', '**/*.jpeg', '**/*.gif'], // Add this line to handle PNG files correctly
});
