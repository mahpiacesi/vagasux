# Enrichment (etapa 3 — IA + publicação automática)

Transforma vagas `raw` em `published` (design) ou `expired` (não-design).  
No MVP, **não há fila de curadoria**: o que a IA aprova já fica pronto para o site.

## Decisões fechadas

| # | Decisão |
|---|---|
| 1 | Não-design → `expired` direto |
| 2 | Design + `confidence >= 0.70` → **`published` automático** |
| 3 | Modelo: **Gemini 3.1 Flash-Lite** (barato e suficiente; trocamos se qualidade falhar) |
| 4 | Status `enriched` fica reservado para um híbrido futuro (revisão humana), se precisar |
| 5 | Summary em **inglês** quando `is_international = true`; **PT-BR** quando nacional |

## Fluxo

```text
Scheduler (após collectors + expire)
    → Enrichment
         buscar status = raw (lote)
         → Gemini (JSON)
         → se design + confidence >= 0.70 → published
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

## Setup no n8n (já feito)

1. API key no [Google AI Studio](https://aistudio.google.com/apikey)
2. Credencial n8n: **Google Gemini (PaLM) API**
3. Workflow [Enrichment](https://vagasux.app.n8n.cloud/workflow/8UwmTMOPybExOrdi) publicado
4. Scheduler com `Call 'Enrichment'` habilitado e publicado

Free tier do Gemini tem cota baixa: o Enrichment processa **1 vaga por vez** com espera de 2s entre elas.

## Workflow

- Nome: **Enrichment** — `8UwmTMOPybExOrdi`
- Modelo: `models/gemini-3.1-flash-lite`
- Chamado pelo Scheduler após `Expire stale jobs`
- Lote: **10 vagas/run** (throttled 1-by-1)
