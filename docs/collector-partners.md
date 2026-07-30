# Collector Parceiros (Notion → Supabase)

Sincroniza parceiros **ativos** da database Notion **Parceiros** para:

- **`partner-logos`** (Supabase Storage) — arquivo por slug
- **`public.partners`** — metadados + URL pública do logo

Logos **não** ficam no repo nem no GitHub. O site lê **`logo_url`** do Supabase.

## Notion

| Item | Valor |
|------|--------|
| Database | `6ef3390c137d4e9c9d9a7863f2ada4a6` |
| Filtro | `Status = Ativo` + property **Logo** preenchida |
| Integração | Mesma do Collector VagasUX — dar acesso à database Parceiros |

## Fluxo n8n

1. Buscar páginas da database Parceiros
2. Mapear ativos com logo
3. `deactivate_all_partners()` — marca todos inativos
4. Para cada parceiro: download logo (URL temporária Notion) → upload Storage → `upsert_partner()`
5. Parceiros removidos do Notion permanecem `is_active = false`

## Deploy do workflow

Código versionado: `tools/n8n/collector-partners.workflow.ts`

Na instância self-hosted:

1. Publicar via agente (MCP) ou importar JSON de `workflows/n8n-export/` quando exportado
2. Credenciais: **Notion account**, **Supabase account** (service role)
3. **Publish** o workflow
4. Habilitar em **Instance-level MCP** (opcional)
5. Adicionar ao **Scheduler** após Collector VagasUX

## Teste manual

Execute **Collector Parceiros** uma vez e confira:

- Supabase → Storage → `partner-logos` — arquivos `{slug}.{ext}`
- Supabase → Table Editor → `partners` — `logo_url` começa com  
  `https://xbvspzwjjjtkvecseoog.supabase.co/storage/v1/object/public/partner-logos/`

## Site (`/parcerias`)

`loadActivePartners()` em `web/src/lib/partners.ts` lê Supabase.  
Fallback offline: só **nomes** (sem logos locais).

Migration: `supabase/migrations/20260729_partners_notion_sync.sql`
