#!/usr/bin/env node
/**
 * Seed guia_curso_relatos no Supabase a partir do snapshot exportado.
 * Requer SUPABASE_SERVICE_ROLE_KEY (ou service role via env do CI).
 *
 * Uso:
 *   node tools/scripts/seed-guia-curso-relatos.mjs
 */

import { readFileSync } from 'node:fs'
import { createClient } from '@supabase/supabase-js'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { normalizeRelatoText } from './parse-curso-relatos-page.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SNAPSHOT = join(__dirname, 'relatos-cursos-pages.snapshot.json')

const url = process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL
const key =
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.VITE_SUPABASE_ANON_KEY

if (!url || !key) {
  console.error('Defina SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

const supabase = createClient(url, key)
const { results } = JSON.parse(readFileSync(SNAPSHOT, 'utf8'))

const rows = results.flatMap(({ cursoId, relatos }) =>
  relatos.map((relato) => ({
    curso_id: cursoId,
    text: relato.text,
    author: relato.author ?? null,
    received_at: relato.receivedAt ?? null,
    source: 'chat',
    text_hash: normalizeRelatoText(relato.text).slice(0, 64),
  })),
)

const BATCH = 100
let upserted = 0

for (let i = 0; i < rows.length; i += BATCH) {
  const chunk = rows.slice(i, i + BATCH)
  const { error } = await supabase.from('guia_curso_relatos').upsert(chunk, {
    onConflict: 'curso_id,text_hash',
    ignoreDuplicates: true,
  })
  if (error) throw error
  upserted += chunk.length
}

console.log(`Seeded ${upserted} relatos (${results.length} cursos)`)
