import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'
import {
  applyPrerenderHtml,
  distFileForPrerenderPath,
  listPrerenderPaths,
} from '../src/data/seoCatalog'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

async function prerender() {
  const template = readFileSync(join(dist, 'index.html'), 'utf8')
  const vite = await createServer({
    root,
    mode: 'production',
    server: { middlewareMode: true, hmr: false },
    appType: 'custom',
    logLevel: 'error',
  })

  try {
    const module = await vite.ssrLoadModule('/src/entry-server.tsx')
    const render = module.render as (url: string) => string
    const paths = listPrerenderPaths()

    for (const path of paths) {
      const appHtml = render(path)
      const html = applyPrerenderHtml(template, path, appHtml)
      const file = join(dist, distFileForPrerenderPath(path))
      mkdirSync(dirname(file), { recursive: true })
      writeFileSync(file, html)
    }

    console.log(`Prerendered ${paths.length} routes into dist/.`)
  } finally {
    await vite.close()
  }
}

void prerender().catch((error: unknown) => {
  console.error(error)
  process.exit(1)
})
