# Enrichment (etapa 3 — IA)

Transforma vagas `raw` em `enriched` (design) ou `expired` (não-design).  
**Ainda não publica** no site (`published` fica para depois).

## Decisões fechadas

| # | Decisão |
|---|---|
| 1 | Não-design → `expired` direto |
| 2 | Esta etapa só chega em `enriched` |
| 3 | Modelo: **Gemini Flash** (barato e suficiente; trocamos se qualidade falhar) |
| 4 | Aceita design se `confidence >= 0.70` |
| 5 | Summary em **inglês** quando `is_international = true`; **PT-BR** quando nacional |

## Fluxo

```text
Scheduler (após collectors + expire)
    → Enrichment
         buscar status = raw (lote)
         → Gemini (JSON)
         → se design + confidence >= 0.70 → enriched
         → senão → expired
```

## Campos preenchidos pela IA

`is_design_job`, `is_international`, `ai_confidence`, `area`, `role`, `seniority`, `work_model`, `employment_type`, `skills`, `tools`, `portfolio_required`, `ai_summary`, `ai_reason`, `enriched_at`, `content_hash`

Enums:

- `seniority`: intern | junior | mid | senior | lead | unknown  
- `work_model`: remote | hybrid | onsite | unknown  
- `employment_type`: clt | pj | freelance | internship | unknown  

## Contrato JSON da IA

```json
{
  "is_design_job": true,
  "is_international": false,
  "confidence": 0.92,
  "area": "Product Design",
  "role": "Product Designer",
  "seniority": "mid",
  "work_model": "remote",
  "employment_type": "clt",
  "portfolio_required": true,
  "skills": ["research", "prototyping"],
  "tools": ["Figma"],
  "summary": "Short card summary in the correct language.",
  "reason": "Why this classification."
}
```

**Idioma do `summary`:** se `is_international` → inglês; senão → português (PT-BR).

## Setup no n8n (obrigatório uma vez)

Hoje só existe credencial Supabase. Para a IA:

1. Crie uma API key no [Google AI Studio](https://aistudio.google.com/apikey)
2. No n8n: **Credentials → Add credential → Google Gemini (PaLM) API** → cole a key (nome sugerido: `Google Gemini`)
3. Abra o workflow [Enrichment](https://vagasux.app.n8n.cloud/workflow/8UwmTMOPybExOrdi)
4. No node **Gemini enrich**, selecione a credencial
5. **Publish** o Enrichment
6. No **Scheduler**, habilite o node `Call 'Enrichment'` (hoje está desabilitado de propósito) e publique de novo
7. Rode um lote de teste (Execute workflow no Enrichment) e revise 10–20 vagas

## Workflow

- Nome: **Enrichment** — `8UwmTMOPybExOrdi`
- Chamado pelo Scheduler após `Expire stale jobs` (quando habilitado)
- Lote: **20 vagas/run**
