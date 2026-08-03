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

## Escopo de vagas (design vs. fora do escopo)

A VagasUX cobre carreiras em **UX, Product Design, UI, Research, Ops & Strategy, Visual & Graphic digital** e **Motion Design para produto/interface**.

| Entra | Fica de fora |
|---|---|
| Motion Designer, UI animation, Lottie/micro-interação | Editor de vídeo, Videomaker, Analista Audiovisual |
| Animação para produto/marketing digital | Edição de Reels/TikTok/YouTube como função principal |
| After Effects ligado a motion de produto | Pós-produção audiovisual pura |

Regras aplicadas em três camadas:

1. **Prompt Gemini** — rejeita explicitamente edição de vídeo/audiovisual e vagas de varejo/loja cujo local contém "Design" (ex.: Rio Design Barra)
2. **Guarda determinística** — `tools/n8n/jobClassification.ts` no node **Apply enrichment** (vídeo/audiovisual + falso positivo de shopping/gerente de loja)
3. **Filtro do collector Gupy** — título precisa de cargo de design explícito; `\bdesign\b` sozinho em nome de shopping não entra

## Curadoria (`source = VagasUX`)

Vagas da base Notion **Vagas para iniciantes** também passam pelo enrichment, com regra extra de senioridade:

- Permitido: **`intern`**, **`trainee`** ou **`junior`** apenas
- Estágio/aprendiz no texto → `intern`
- Trainee no texto → `trainee`
- Júnior no texto → `junior`
- Sem nível no título (ex.: só "Product Designer") → **`junior`**, nunca pleno

Implementação: `tools/n8n/curatedSeniority.ts` + node **Apply enrichment** no workflow Enrichment.

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

`is_design_job`, `is_international`, `ai_confidence`, `area`, `role`, `discipline`, `seniority`, `work_model`, `employment_type`, `skills`, `tools`, `portfolio_required`, `ai_summary`, `ai_reason`, `enriched_at`, `content_hash`

Enums:

- `discipline`: product_design | ux | ui | ux_research | content_design | design_ops | visual_graphic | motion  
- `seniority`: intern | trainee | junior | mid | senior | lead | unknown  
- `work_model`: remote | hybrid | onsite | unknown  
- `employment_type`: clt | pj | freelance | internship | unknown  

`discipline` é a categoria normalizada usada no filtro **Cargo** do mural. A IA devolve o valor; o node **Apply enrichment** valida com `resolveDiscipline` (`tools/n8n/jobDiscipline.ts`):

- **Motion** e **UI** — só com sinal explícito em título/role/área (como motion: área `UX/UI Design` sozinha não vira UI).
- **UX** — prioridade de título/role sobre área híbrida UX/UI.
- **Visual & Graphic** — título/role gráfico, área de artes gráficas, descrição com foco social/print/branding, ou título genérico "Designer" quando há descrição gráfica.
- **Content Design** — UX Writer, Content Designer, Designer Conversacional; área UX Writing. Menção a "UX Writing" na descrição de vaga de Product **não** classifica como Content.
- **Product** — default VagasUX; híbridos Product/Visual ambíguos ficam em product.

## Contrato JSON da IA

```json
{
  "is_design_job": true,
  "is_international": false,
  "confidence": 0.92,
  "area": "Product Design",
  "role": "Product Designer",
  "discipline": "product_design",
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
