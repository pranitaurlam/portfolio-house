import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Two entries: the scroll-driven portfolio at /, and the original
// React app kept at /app/. Paths are relative to the project root
// (this config is ESM, so __dirname is not available).
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        app: 'app/index.html',
      },
    },
  },
})
