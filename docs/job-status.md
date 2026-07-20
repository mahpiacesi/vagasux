# Status da vaga (passo 2)

Cada vaga passa por etapas claras. Isso separa **coleta**, **IA**, **publicação** e **arquivamento**.

## Etapas

| Status | Significado | Quem muda |
|--------|-------------|-----------|
| `raw` | Acabou de ser coletada (bruta, só normalizada) | Collector |
| `enriched` | Passou pela IA (senioridade, resumo, skills, etc.) | Workflow de enrichment |
| `published` | Liberada para o site / comunidade | Curadoria ou regra automática |
| `expired` | Não está mais ativa (passou do prazo) | Regra automática de 60 dias |

Fluxo normal:

```text
raw → enriched → published → expired
```

## Regra de expiração (60 dias)

Uma vaga pode ficar ativa no repositório por **até 60 dias**.

- Conta a partir de `published_at` (data da fonte)
- Se não tiver `published_at`, usa `captured_at` (quando entrou no VagasUX)
- Depois disso: status → `expired`
- O registro **não é apagado** (fica para histórico / analytics)
- Site e comunidade **não mostram** `expired`

Função no banco:

```sql
select public.expire_stale_jobs();     -- padrão: 60 dias
select public.expire_stale_jobs(60);   -- explícito
```

Deve rodar no Scheduler (diariamente, junto com a coleta).

## Regras

1. Collectors **não rebaixam** status avançado no upsert (não enviam `status`).
2. Site e canais públicos leem **apenas** `published`.
3. IA só processa vagas `raw` (e, no futuro, com conteúdo mudado).
4. Valores permitidos no banco: só `raw`, `enriched`, `published`, `expired`.
5. Expiração por idade: **60 dias** (`expire_stale_jobs`).

## Upsert e status (importante)

Os collectors **não enviam** `status` no upsert.

- Vaga **nova** → o banco aplica o default `raw`
- Vaga **já existente** → o status atual é preservado (`enriched` / `published` não voltam para `raw`)

## Estado atual

- Todas as vagas existentes foram migradas de `draft` → `raw`
- Default do banco: `raw`
- Collectors Gupy e Greenhouse omitem `status` no body do upsert
- Constraint no banco aceita só: `raw`, `enriched`, `published`, `expired`

## Como o site vai usar (depois)

```sql
select *
from public.jobs
where status = 'published'
order by published_at desc nulls last, captured_at desc;
```
