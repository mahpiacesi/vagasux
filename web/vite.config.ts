import fs from 'node:fs'
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin, type PreviewServer } from 'vite'

function servePrerenderedIndexes(): Plugin {
  return {
    name: 'serve-prerendered-indexes',
    configurePreviewServer(server) {
      rewriteToPrerenderedIndex(server)
    },
  }
}

function rewriteToPrerenderedIndex(server: PreviewServer) {
  const dist = path.resolve(server.config.root, server.config.build.outDir)
  server.middlewares.use((req, _res, next) => {
    if (!req.url || req.method !== 'GET') {
      next()
      return
    }
    const url = new URL(req.url, 'http://vite.local')
    let pathname = decodeURIComponent(url.pathname)
    if (pathname.length > 1 && pathname.endsWith('/')) {
      pathname = pathname.slice(0, -1)
    }
    if (pathname === '/' || path.extname(pathname)) {
      next()
      return
    }
    const file = path.join(dist, pathname, 'index.html')
    if (fs.existsSync(file)) {
      req.url = `${pathname}/index.html${url.search}`
    }
    next()
  })
}

export default defineConfig({
  plugins: [react(), tailwindcss(), servePrerenderedIndexes()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Avoid PostCSS config discovery (can break on OneDrive-corrupted package.json).
  css: {
    postcss: {
      plugins: [],
    },
  },
})
