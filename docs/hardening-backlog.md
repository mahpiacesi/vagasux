# Hardening backlog — VagasUX

> Itens guardados para implementação em breve. Prioridade médio prazo.

**Criado em:** 2026-07-31

---

## Pipeline / collectors

1. **Batch upsert nos outros collectors**
   - Gupy já puxa centenas de vagas; replicar o padrão `upsert_collector_jobs_batch` se volume ou timeout voltar a ser problema.
   - Referência: `supabase/migrations/20260731_upsert_collector_jobs_batch.sql`, `tools/n8n/collector-vagasux.workflow.ts`.

2. **Alertas de falha no Scheduler**
   - Error Trigger no n8n → Slack ou e-mail quando um passo do Scheduler falhar.
   - Padrão recomendado: workflow dedicado de erro (publicado) + `settings.errorWorkflow` no Scheduler.

3. **Dashboard de saúde dos collectors**
   - Visão simples: último sync por fonte, jobs capturados hoje, falhas recentes.
   - Pode ser página interna ou query + doc operacional.

---

## Monitoramento

4. **Quota Gemini (Enrichment)**
   - Alerta ou log quando retornar 429.
   - Ajustar batch size (40/run) ou wait entre chamadas se quota for apertada.

5. **Validação automática pós-Scheduler**
   - Check diário: fontes habilitadas vs. execuções OK; vagas pendentes de enrichment.

---

## Relacionado (não hardening, fila próxima)

- **Home logos dinâmicos** — em andamento (`PartnershipsSection` → Supabase).
- **Collector Sólides** — fonte habilitada, sem workflow n8n.
- **Collector InfoJobs** — fonte habilitada, sem workflow n8n.
