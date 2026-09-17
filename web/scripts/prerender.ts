import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { build } from 'vite'
import {
  applyPrerenderHtml,
  distFileForPrerenderPath,
  listPrerenderPaths,
} from '../src/data/seoCatalog'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const ssrOutDir = join(root, 'dist-ssr')

function findSsrEntry(): string {
  const files = readdirSync(ssrOutDir)
  const match = files.find(
    (file) => file.startsWith('entry-server.') && file.endsWith('.js'),
  )
  if (!match) {
    throw new Error(
      `SSR build did not emit entry-server.js in ${ssrOutDir} (found: ${files.join(', ')})`,
    )
  }
  return join(ssrOutDir, match)
}

function assertProductionAssetUrls(path: string, appHtml: string) {
  if (appHtml.includes('/src/assets/') || appHtml.includes('href="/src/')) {
    throw new Error(
      `Prerender of ${path} still points at /src assets. Use the production SSR bundle so hashed dist URLs are emitted.`,
    )
  }
}

async function prerender() {
  const template = readFileSync(join(dist, 'index.html'), 'utf8')

  await build({
    configFile: join(root, 'vite.config.ts'),
    root,
    mode: 'production',
    logLevel: 'error',
    build: {
      ssr: join(root, 'src/entry-server.tsx'),
      outDir: ssrOutDir,
      emptyOutDir: true,
      sourcemap: false,
      ssrEmitAssets: false,
    },
  })

  try {
    const module = await import(pathToFileURL(findSsrEntry()).href)
    const render = module.render as (url: string) => string
    const paths = listPrerenderPaths()

    for (const path of paths) {
      const appHtml = render(path)
      assertProductionAssetUrls(path, appHtml)
      const html = applyPrerenderHtml(template, path, appHtml)
      const file = join(dist, distFileForPrerenderPath(path))
      mkdirSync(dirname(file), { recursive: true })
      writeFileSync(file, html)
    }

    console.log(`Prerendered ${paths.length} routes into dist/.`)
  } finally {
    rmSync(ssrOutDir, { recursive: true, force: true })
  }
}

void prerender().catch((error: unknown) => {
  console.error(error)
  process.exit(1)
})
