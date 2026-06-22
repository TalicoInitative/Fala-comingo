import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3001'
    }
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          'data-convos': ['./src/data/convos.js'],
          'data-stories': ['./src/data/stories.js'],
          'data-words': ['./src/data/words.js'],
          'data-other': ['./src/data/grammar.js', './src/data/sentences.js', './src/data/crossunit.js', './src/data/biaskills.js', './src/data/connections.js'],
        }
      }
    }
  }
});
