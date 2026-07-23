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

## Collectors n8n (feito)

O node nativo **Supabase** do n8n não tem upsert. Por isso os collectors usam um node **HTTP Request** chamado **Upsert job**:

- Method: `POST`
- URL: `https://xbvspzwjjjtkvecseoog.supabase.co/rest/v1/jobs?on_conflict=source,source_job_id`
- Auth: credencial Supabase (`supabaseApi`)
- Header `Prefer`: `resolution=merge-duplicates,return=representation`
- Body: contrato normalizado (`source`, `source_job_id`, `company`, `title`, `description`, `url`, `location`, `published_at`, `status`)

Workflows atualizados e publicados:

- [Collector Gupy](https://vagasux.app.n8n.cloud/workflow/qbbA18TRpFVeMSrG)
- [Collector Greenhouse](https://vagasux.app.n8n.cloud/workflow/tytzmAOMbIMyQjLD)

### Validação feita

- Scheduler executado com sucesso (Gupy + Greenhouse)
- Greenhouse permaneceu em **3** vagas (só atualizou `updated_at`)
- Gupy ganhou algumas vagas **novas** legítimas; **0** duplicatas
- `location` do Greenhouse normalizada para texto (não JSON)

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
