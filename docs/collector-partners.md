# Collector Parceiros (Notion → Supabase)

Ingestão da base **Parceiros** no Notion para o Supabase (tabela `partners` + bucket `partner-logos`).

## Fonte

| Campo | Valor |
|-------|-------|
| Notion database (page) | `6ef3390c137d4e9c9d9a7863f2ada4a6` |
| Notion data source | `e3db2f99-fd47-4740-aeac-75524dbd67fd` |
| Workflow n8n | **Collector Parceiros** (tag VagasUX) |

## Campos usados no Notion

| Notion | Supabase |
|--------|----------|
| `page.id` | `notion_page_id` |
| `Name` | `name` + `slug` (gerado) |
| `Logo` (Files) | `logo_url` (via Storage) |
| `Site` | `site_url` |
| `Status = Ativo` | `is_active = true` |

Parceiros com status diferente de **Ativo** ou sem logo na property **Logo** são ignorados na sync.

## Fluxo do collector

1. Busca todas as pages da database Parceiros
2. Filtra `Status = Ativo` e exige property **Logo**
3. `deactivate_all_partners()` — zera visibilidade pública
4. Para cada parceiro: download da logo → upload em `partner-logos/{slug}.{ext}` → `upsert_partner()`
5. Parceiros reativados ficam com `is_active = true`; os que saíram do Notion permanecem inativos

## Setup n8n (obrigatório)

1. Integration Notion com acesso à database **Parceiros** (mesma do collector VagasUX).
2. Credencial **Notion API** no node **Fetch partners**.
3. Credencial **Supabase** (service role) nos nodes HTTP/RPC — mesma do Collector VagasUX.
4. Compartilhar a database com a integration se ainda não estiver.
5. Garantir property **Logo** preenchida em todos os parceiros ativos.

## Migration Supabase

Arquivo: `supabase/migrations/20260729_partners_notion_sync.sql`

- Tabela `public.partners`
- Bucket público `partner-logos`
- RPCs `upsert_partner`, `deactivate_all_partners`
- RLS: leitura pública só de `is_active = true`

## Scheduler

Rodar **1x por dia**, junto do pipeline de collectors (após ou antes do Collector VagasUX).

Ordem sugerida: Greenhouse + Gupy → Remotar → VagasUX → **Parceiros** → expire >60d → enrichment.

## Primeira execução

1. Aplicar migration no Supabase (se ainda não aplicada)
2. Publicar workflow **Collector Parceiros** no n8n (`CCccf2S1gpWFX1LF`)
3. Conferir credenciais Supabase nos nodes HTTP (Deactivate, Upload, Upsert)
4. Executar manualmente uma vez
5. Conferir `/parcerias` no site (passa a ler Supabase)

### Sem n8n (trial expirado ou teste local)

**Logos novos do Notion → pasta local (dev):**

```bash
NOTION_API_KEY=secret_... node tools/sync-partner-logos.mjs
cd web && npm run dev   # reinicie o dev server após baixar
```

O site prioriza logos em `web/src/assets/partners/active/` sobre URLs do Supabase.

**Seed só da tabela (sem Storage):** `node tools/seed-partners-from-notion.mjs`

Usa assets locais como URL temporária. Quando o n8n voltar, a sync diária substitui por `partner-logos/`.

## Site

`fetchActivePartners()` em `web/src/lib/supabase.ts` lê `partners` com `is_active = true`, ordenado por `name`.

O snapshot estático (`web/src/data/partners.ts`) permanece como fallback até a primeira sync completar.
