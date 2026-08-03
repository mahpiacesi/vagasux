# Collector InfoJobs

Coleta vagas de design do **InfoJobs Brasil** via fragmento HTML da listagem pública.

## API

- **Endpoint:** `GET https://www.infojobs.com.br/mf-publicarea/VacancyList/GetVacancyListFragment?url=<search-url-encoded>`
- **Listagem:** URL de busca codificada (ex.: `https://www.infojobs.com.br/vagas-de-emprego-designer.aspx`)
- **Paginação:** `?page=N` na URL de busca (20 vagas/página)
- **Resposta:** `{ eof: boolean, listFragmentHTML: string }`
- **Sem autenticação** para listagem pública

## Workflow n8n

- Código: `tools/n8n/collector-infojobs.workflow.ts`
- Nome: **Collector InfoJobs**
- ID: `1TkaKKbnXPQCSHS3`
- Exec #37 (31/07): **184/184 vagas** upsertadas (`failed: 0`)
- Pipeline:
  1. Fila de buscas: 5 termos × 8 páginas (`designer`, `ux-designer`, `design-grafico`, `product-designer`, `ui-designer`)
  2. Parse HTML → dedupe por `data-id`
  3. Filtro de relevância (mesmo critério Gupy/Sólides) + janela 60 dias
  4. Batch upsert via `upsert_collector_jobs_batch`

## Campos mapeados

| Campo | Origem |
|-------|--------|
| `source` | `'InfoJobs'` |
| `source_job_id` | `data-id` no card |
| `company` | link da empresa no card (selo de verificação InfoJobs removido) |
| `title` | `.js_vacancyTitle` |
| `description` | `null` (listagem não traz descrição completa) |
| `url` | `https://www.infojobs.com.br` + `data-href` |
| `location` | texto após título (ex.: `São Paulo - SP`) |
| `published_at` | `.js_date[data-value]` |
| `work_model` | inferido de título/local/HTML (`remote`/`hybrid`/`onsite`/`unknown`) |

## Dedup

- RPC `upsert_collector_jobs_batch` → `upsert_collector_job` por item
- Dedupe interno por `source_job_id` antes do upsert
- URLs Gupy existentes são respeitadas (skip overlap)

## Scheduler

Inserir **após Sólides** e **antes de Remotar** (priority 5 em `sources`).

## Riscos

- HTML fragment pode mudar sem aviso (parser frágil)
- Descrição completa exigiria fetch por vaga (rate limit)
- Paginação limitada a 8 páginas/termo (~800 cards brutos)

## Teste manual

1. Executar workflow no n8n
2. Conferir summary: `{ source: 'InfoJobs', job_count, batch: { total, ok, failed } }`
3. SQL:

```sql
select count(*) from jobs where source = 'InfoJobs';
```
