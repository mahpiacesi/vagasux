# Decisões de arquitetura — VagasUX

> Este documento registra **por que** a plataforma é do jeito que é.  
> Não é um tutorial técnico: é a memória das escolhas importantes.

**Como usar**

- Toda decisão relevante de produto/plataforma entra aqui como um **ADR** (Architecture Decision Record).
- Novas decisões: copie o template no final e incremente o número (`ADR-007`, `ADR-008`…).
- Se uma decisão mudar, **não apague** a antiga: marque como `Substituída` e aponte para a nova.

**Status possíveis:** `Proposta` · `Aceita` · `Substituída` · `Depreciada`

---

## Visão (contexto)

A VagasUX agrega vagas de Design de várias fontes, organiza e qualifica as oportunidades, e serve como repositório acessível para a comunidade.

Princípios permanentes:

1. **Supabase** é a única fonte da verdade
2. **Um collector por fonte**
3. Tudo passa por um **formato normalizado**
4. **IA enriquece**, não coleta
5. Frontend e canais leem **só o Supabase**

Fluxo-alvo:

```text
Scheduler → Collector → Normalizar → (filtro de idade) → Upsert Supabase
         → Expirar > 60 dias
         → IA (enrichment) → published → site / newsletter / Discord…
```

---

## ADR-001 — Supabase como fonte única da verdade

| | |
|---|---|
| **Status** | Aceita |
| **Data** | 2026-07 |

**Contexto:** Vagas vêm de várias plataformas; vários produtos (site, newsletter, Discord) vão consumir os mesmos dados.

**Decisão:** Todo dado persistente fica no Supabase. Nenhum frontend fala direto com Gupy, Greenhouse, etc.

**Consequências:** Um lugar para curadoria, dedup e regras. Mudar um collector não quebra o site.

---

## ADR-002 — Normalizar antes de seguir

| | |
|---|---|
| **Status** | Aceita |
| **Data** | 2026-07 |

**Contexto:** Cada fonte manda campos diferentes.

**Decisão:** Todo collector devolve o mesmo contrato mínimo:

`source`, `source_job_id`, `company`, `title`, `description`, `url`, `location`, `published_at`

**Consequências:** IA, expiração e site não precisam conhecer a API de cada portal.

---

## ADR-003 — IA só enriquece

| | |
|---|---|
| **Status** | Aceita |
| **Data** | 2026-07 |

**Contexto:** Dá vontade de misturar “buscar vaga” e “classificar vaga” no mesmo passo.

**Decisão:** Collectors só coletam e normalizam. IA roda depois, em vagas já salvas (`raw` → `enriched`).

**Consequências:** Custo de IA controlado; dá para reprocessar sem re-scrape.

---

## ADR-004 — Um collector por fonte

| | |
|---|---|
| **Status** | Aceita |
| **Data** | 2026-07 |

**Contexto:** Gupy, Greenhouse, Sólides etc. quebram e evoluem de formas diferentes.

**Decisão:** Cada plataforma tem seu workflow/collector isolado. Nova fonte = novo collector + registro em `sources`.

**Consequências:** Falha numa fonte não derruba as outras.

---

## ADR-005 — Frontend só consome Supabase

| | |
|---|---|
| **Status** | Aceita |
| **Data** | 2026-07 |

**Decisão:** Site e canais leem apenas vagas no banco (idealmente `status = published`).

**Consequências:** Experiência estável mesmo se um portal de origem cair.

---

## ADR-006 — Nova fonte sem mudar collectors existentes

| | |
|---|---|
| **Status** | Aceita |
| **Data** | 2026-07 |

**Decisão:** Para adicionar uma fonte: criar collector, registrar em `sources`, habilitar. Não editar collectors irmãos.

---

## ADR-007 — Dedup no banco + upsert nos collectors

| | |
|---|---|
| **Status** | Aceita |
| **Data** | 2026-07-20 |
| **Refs** | `docs/dedup.md` (quando mergeado), migration `jobs_dedup_unique_keys` |

**Contexto:** Sem regra, a mesma vaga entrava várias vezes a cada coleta.

**Decisão:**

- Chave única `(source, source_job_id)` e `url` única
- Collectors fazem **upsert** (cria se nova, atualiza se já existe)
- Node nativo Supabase do n8n não tem upsert → usamos HTTP Request (PostgREST)

**Consequências:** Reexecutar o Scheduler não duplica vagas.

---

## ADR-008 — Ciclo de vida da vaga (status)

| | |
|---|---|
| **Status** | Aceita |
| **Data** | 2026-07-20 |
| **Refs** | `docs/job-status.md` |

**Contexto:** Precisávamos separar “coletada”, “analisada pela IA”, “visível” e “fora do ar”.

**Decisão:** Status permitidos:

```text
raw → enriched → published → expired
```

- Collectors **não enviam** `status` no upsert (novas = default `raw`; existentes não são rebaixadas)
- Site público mostra só `published`

**Consequências:** Enrichment e publicação podem evoluir sem misturar com a coleta.

---

## ADR-009 — Janela de 60 dias (entrada + expiração)

| | |
|---|---|
| **Status** | Aceita |
| **Data** | 2026-07-20 |
| **Refs** | `docs/job-status.md`, função `expire_stale_jobs` |

**Contexto:** Fontes (especialmente Gupy) devolvem vagas antigas (2022/2023), inclusive bancos de talentos eternos. Agregadores confiáveis priorizam frescor (TTL ~30–90 dias). UXFetch não filtra por data na coleta; a VagasUX escolheu ser mais rigorosa na qualidade do mural.

**Decisão:**

1. **Na entrada:** se `published_at` > 60 dias → **não grava**
2. Sem data / data inválida → deixa entrar
3. **No banco (diário):** `expire_stale_jobs(60)` marca `expired` (não apaga)
4. Idade conta de `published_at`, senão `captured_at`
5. **Banco de talentos não é bloqueado por tipo** — só pela mesma regra de 60 dias

**Consequências:** Menos lixo e menos custo futuro de IA; talent pools recentes continuam existindo.

---

## ADR-010 — Orquestração em n8n, scrape pesado pode ir para código depois

| | |
|---|---|
| **Status** | Aceita (direção) |
| **Data** | 2026-07 |

**Contexto:** Comparamos com UXFetch (Node + GitHub Actions + Supabase). Produto VagasUX é mais “plataforma multi-canal” do que “digest de e-mail”.

**Decisão:** Manter n8n + Supabase no MVP. Scrapers pesados (Puppeteer) podem migrar para código versionado no futuro, com n8n só orquestrando.

**Consequências:** Velocidade agora; caminho claro se o custo/limites do n8n apertarem.

---

## ADR-011 — LinkedIn fora do MVP automático

| | |
|---|---|
| **Status** | Aceita |
| **Data** | 2026-07 |

**Contexto:** LinkedIn/Indeed exigem anti-bot caro e são frágeis legalmente/tecnicamente.

**Decisão:** Não tratar LinkedIn como collector “normal” no início. Revisar só com parceria/API/orçamento explícito.

---

## Log rápido (linha do tempo)

| Data | O que entrou |
|------|----------------|
| 2026-07 | ADRs 001–006 (arquitetura inicial da plataforma) |
| 2026-07-20 | ADR-007 Dedup + upsert |
| 2026-07-20 | ADR-008 Status machine |
| 2026-07-20 | ADR-009 Janela de 60 dias |
| 2026-07-20 | ADR-010 Direção n8n vs código |
| 2026-07-20 | ADR-011 LinkedIn fora do MVP |

---

## Template para novas decisões

```markdown
## ADR-0XX — Título curto

| | |
|---|---|
| **Status** | Proposta / Aceita / Substituída / Depreciada |
| **Data** | AAAA-MM-DD |
| **Refs** | links, PRs, docs |

**Contexto:** Qual problema apareceu?

**Decisão:** O que escolhemos?

**Consequências:** O que ganha / o que fica mais difícil?
```
