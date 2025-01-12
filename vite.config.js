import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Adjust HMR settings
    hmr: {
      overlay: true, // Displays error overlay in browser on build errors
    },
    watch: {
      // Ignore node_modules and other unnecessary directories
      ignored: ['**/node_modules/**', '**/.git/**'],
    },
    port: 3000, // You can change the development server port here
  },
  build: {
    // Improve build performance
    sourcemap: true, // Enable source maps for easier debugging
    outDir: 'dist', // Specify output directory
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code into its own chunk
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
});
