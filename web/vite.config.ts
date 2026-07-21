import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Avoid PostCSS config discovery (can break on OneDrive-corrupted package.json).
  css: {
    postcss: {
      plugins: [],
    },
  },
})
