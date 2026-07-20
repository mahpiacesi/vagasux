# Dedup de vagas (passo 1)

Evita que a mesma vaga entre várias vezes no Supabase.

## O que mudou no banco

Na tabela `jobs`:

| Mudança | Por quê |
|---------|---------|
| `UNIQUE (source, source_job_id)` | Mesma vaga na mesma fonte = 1 registro |
| `UNIQUE (url)` | Mesmo link = 1 registro |
| `source`, `source_job_id`, `url`, `title`, `company` obrigatórios | Sem chave incompleta |
| Coluna `updated_at` | Mostra quando a vaga foi atualizada no upsert |

Migration: [`supabase/migrations/20260720_jobs_dedup_unique_keys.sql`](../supabase/migrations/20260720_jobs_dedup_unique_keys.sql)

### Comportamento esperado

- Vaga **nova** → cria registro
- Vaga **já existente** → atualiza (upsert), não duplica
- Collector mandar a mesma vaga de novo → sucesso, sem erro de duplicata (se estiver em modo upsert)

---

## Ajuste necessário nos collectors (n8n)

Os workflows **Collector Gupy** e **Collector Greenhouse** ainda estão com MCP desligado (`availableInMCP: false`), então este ajuste precisa ser feito no editor do n8n.

### Ativar MCP nos workflows (para o agente ajudar depois)

Em cada workflow (Scheduler, Collector Gupy, Collector Greenhouse):

1. Abra o workflow
2. Em **Settings** (ou no card da lista), ative **Available in MCP** / acesso MCP
3. Salve

### Configurar upsert no node do Supabase

No node que **grava** em `jobs` (Create / Insert):

1. Troque a operação de **Create/Insert** para **Upsert** (se o node Supabase tiver essa opção)  
   **ou** use HTTP Request para a API REST do Supabase (abaixo).
2. Conflict / on conflict: `source,source_job_id`
3. Não envie `id` no payload (deixe o banco gerar só na criação)
4. Não sobrescreva `captured_at` em updates se quiser preservar a primeira captura — opcional: só mande `captured_at` na criação

#### Opção HTTP Request (PostgREST)

- Method: `POST`
- URL: `https://xbvspzwjjjtkvecseoog.supabase.co/rest/v1/jobs?on_conflict=source,source_job_id`
- Headers:
  - `apikey`: service role (ou key com permissão de escrita)
  - `Authorization`: `Bearer <mesma key>`
  - `Content-Type`: `application/json`
  - `Prefer`: `resolution=merge-duplicates,return=representation`
- Body: JSON do contrato normalizado (um objeto ou array)

Campos mínimos:

```json
{
  "source": "Gupy",
  "source_job_id": "123",
  "company": "Empresa",
  "title": "Product Designer",
  "description": "...",
  "url": "https://...",
  "location": "Remoto",
  "published_at": "2026-07-20T00:00:00Z",
  "status": "draft"
}
```

### Checklist por collector

- [ ] Collector Gupy grava com upsert em `(source, source_job_id)`
- [ ] Collector Greenhouse grava com upsert em `(source, source_job_id)`
- [ ] Rodar collector 2× e confirmar que o total de linhas em `jobs` não dobra
- [ ] Confirmar que `updated_at` muda nas vagas reprocessadas

---

## Como validar (SQL)

```sql
-- Deve continuar estável após 2 execuções do collector
select source, count(*) from public.jobs group by 1;

-- Não deve retornar linhas
select source, source_job_id, count(*)
from public.jobs
group by 1, 2
having count(*) > 1;
```
