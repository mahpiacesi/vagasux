# Status da vaga (passo 2)

Cada vaga passa por etapas claras. Isso separa **coleta**, **IA**, **publicação** e **arquivamento**.

## Etapas

| Status | Significado | Quem muda |
|--------|-------------|-----------|
| `raw` | Acabou de ser coletada (bruta, só normalizada) | Collector |
| `enriched` | Passou pela IA (senioridade, resumo, skills, etc.) | Workflow de enrichment |
| `published` | Liberada para o site / comunidade | Curadoria ou regra automática |
| `expired` | Não está mais ativa | Collector / job de limpeza |

Fluxo normal:

```text
raw → enriched → published → expired
```

## Regras

1. Collectors **sempre** gravam/atualizam como `raw` (ou mantêm status atual se a vaga já avançou — ver abaixo).
2. Site e canais públicos leem **apenas** `published`.
3. IA só processa vagas `raw` (e, no futuro, `raw`/`enriched` com conteúdo mudado).
4. Valores permitidos no banco: só esses quatro (qualquer outro é rejeitado).

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
