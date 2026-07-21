# Status da vaga (passo 2)

Cada vaga passa por etapas claras. Isso separa **coleta**, **IA**, **publicação** e **arquivamento**.

## Etapas

| Status | Significado | Quem muda |
|--------|-------------|-----------|
| `raw` | Acabou de ser coletada (bruta, só normalizada) | Collector |
| `enriched` | Reservado (híbrido futuro / revisão humana) | — no MVP quase não usa |
| `published` | Liberada para o site / comunidade | **Enrichment** (auto, se design + confidence ≥ 0.70) |
| `expired` | Fora do mural (não-design, baixa confiança, ou > 60 dias) | Enrichment ou regra de 60 dias |

Fluxo do MVP (auto-publish):

```text
raw → published → expired
         ↘ expired (não-design / confiança baixa)
```

O status `enriched` continua válido no banco para um híbrido futuro, se a qualidade da IA pedir revisão.

## Regra de 60 dias (entrada + expiração)

Uma vaga pode ficar ativa no repositório por **até 60 dias**.

### Na coleta (entrada)

Nos collectors (**Max age 60 days**):

- Se `published_at` tem **mais de 60 dias** → **não grava** (nem upsert)
- Se **não tem** `published_at` (ou data inválida) → **deixa entrar**
- Banco de talentos **não é excluído** por tipo de vaga; só segue a mesma regra de idade

### Depois de estar no banco

- Conta a partir de `published_at` (data da fonte)
- Se não tiver `published_at`, usa `captured_at`
- Depois de 60 dias: status → `expired`
- O registro **não é apagado** (histórico / analytics)
- Site e comunidade **não mostram** `expired`

Função no banco:

```sql
select public.expire_stale_jobs();     -- padrão: 60 dias
select public.expire_stale_jobs(60);   -- explícito
```

Roda no **Scheduler** do n8n (node `Expire stale jobs`) depois dos collectors, todo dia.

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
