import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  assertSeoCatalogInvariants,
  renderRobotsTxt,
  renderSitemapXml,
  renderVercelJson,
} from '../src/data/seoCatalog'

assertSeoCatalogInvariants()

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
writeFileSync(join(root, 'public/sitemap.xml'), renderSitemapXml())
writeFileSync(join(root, 'public/robots.txt'), renderRobotsTxt())
writeFileSync(join(root, 'vercel.json'), renderVercelJson())

console.log('Wrote public/sitemap.xml, public/robots.txt and vercel.json from seoCatalog.')
