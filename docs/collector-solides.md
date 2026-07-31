# Collector Sólides

Coleta vagas de design do **Portal Sólides Vagas** (`vagas.solides.com.br`) via API pública.

## API

- **Endpoint:** `GET https://apigw.solides.com.br/jobs/v3/portal-vacancies-new`
- **Paginação:** `page` (10 vagas/página)
- **Busca:** `title` (ex.: `designer`, `ux designer`, `product designer`, `ui designer`)
- **Sem autenticação** para listagem pública

> A tabela `sources.base_url` apontava `jobs.solides.com.br` (domínio inativo). O portal correto é `https://vagas.solides.com.br`.

## Workflow n8n

- Código: `tools/n8n/collector-solides.workflow.ts`
- Nome: **Collector Sólides**
- Pipeline:
  1. 4 buscas paginadas (designer, ux designer, product designer, ui designer)
  2. Merge → dedupe por `id`
  3. Filtro de relevância (mesmo critério do Gupy) + janela 60 dias
  4. Batch upsert via `upsert_collector_jobs_batch`

## Campos mapeados

| Campo | Origem |
|-------|--------|
| `source` | `'Sólides'` |
| `source_job_id` | `id` |
| `company` | `companyName` |
| `title` | `title` |
| `description` | `description` (HTML stripped) |
| `url` | `redirectLink` (canonical, sem query) ou `vagas.solides.com.br/vaga/{id}` |
| `location` | `city.name`, `state.code` |
| `published_at` | `createdAt` |
| `work_model` | `homeOffice` / `jobType` |

## Dedup

- RPC `upsert_collector_jobs_batch` → `upsert_collector_job` por item
- URLs Gupy existentes são respeitadas (skip overlap)
- Remotar já ignora vagas com `integrationSource=solides` — este collector é a fonte dona

## Scheduler

Inserir **após Gupy/Greenhouse** e **antes de Remotar** (priority 3 em `sources`).

## Teste manual

1. Executar workflow no n8n
2. Conferir summary: `{ source: 'Sólides', job_count, batch: { total, ok, failed } }`
3. SQL:

```sql
select count(*) from jobs where source = 'Sólides';
```
