# FAQ VagasUX — Guia editorial

Compilado de perguntas frequentes da comunidade sobre carreira em Product Design.

---

## Objetivo

Responder dúvidas recorrentes de quem está começando ou em migração, com tom acolhedor e direto da VagasUX.

Cada item responde uma pergunta real. Reescrever a partir do legado Notion; não copiar texto verbatim.

---

## Template do item

| Campo | Obrigatório |
|-------|-------------|
| `id` | Sim (âncora `#slug`) |
| `question` | Sim |
| `categoryId` | Sim |
| `subgroup` | Sim (exceto categoria Guia) |
| `answer[]` | Sim (1–2 parágrafos) |
| `seeAlso[]` | Opcional (`term` + `glossarioId`) |

Ferramentas (Figma, LinkedIn, Jira etc.) podem ser citadas na FAQ.

---

## Categorias (6)

| Emoji | Categoria | `categoryId` |
|-------|-----------|--------------|
| ☕ | Geral | `geral` |
| 🏋️ | Preparação | `preparacao` |
| 💼 | Processos seletivos | `processos-seletivos` |
| 📚 | Conhecimentos | `conhecimentos` |
| 🕵️ | Contratação | `contratacao` |
| ✨ | Sobre o Guia | `guia` |

### Subgrupos

**Geral:** Rotina · Squads · Nível júnior · Trabalho remoto

**Preparação:** LinkedIn · CV / Currículo · Portfólio

**Processos seletivos:** Entrevistas · Desafios · Feedbacks

**Conhecimentos:** Habilidades · Faculdade e cursos

**Contratação:** CLT · MEI · Comparativo CLT x PJ

---

## Backlog migrado (etapa 2)

**Total:** 83 perguntas (legado FAQ Tira-Dúvidas reescrito).

Distribuição: Geral 17 · Preparação 23 · Processos 14 · Conhecimentos 13 · Contratação 13 · Guia 4.

---

## UI

- Botões no topo: **Voltar ao Guia** (primário) e **Glossário** (secundário)
- Accordion por categoria, subgrupos `<h3>`, busca, chips, hash por pergunta
- Links «No glossário» quando `seeAlso` estiver preenchido
- Cabeçalho sticky quando accordion aberto

---

## Tom de voz

- Mesmas regras do glossário e `docs/design.md`
- VagasUX no feminino
- Sem travessão (—)
- Evitar estruturas «não é X, é Y»

---

## Redirect legado

`/guia-do-product-designer/faq-tira-duvidas` → `/guia/faq`

---

## Arquivos

```
web/src/data/guiaFaq.ts
web/src/data/guiaFaqItems.ts
web/src/components/guia/faq/GuiaFaqPageContent.tsx
web/src/components/guia/faq/GuiaFaqCategoryAccordion.tsx
web/src/components/guia/faq/GuiaFaqItemArticle.tsx
docs/guia-faq.md
```
