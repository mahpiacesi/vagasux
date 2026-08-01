# Glossário VagasUX — Mapeamento editorial → produto

Este documento traduz o **Guia Editorial do Glossário** em estrutura de dados, rotas, componentes e fluxo de produção.

---

## Objetivo (produto)

| Editorial | Implementação |
|-----------|---------------|
| Traduzir linguagem de PD de forma simples | Páginas de verbete com tom VagasUX, não definições de dicionário |
| Público iniciante | Nível fixo `iniciante` implícito; copy didático em todos os blocos |
| Pergunta-guia: *"O que significa e por que conhecer?"* | Blocos **O que é?** + **Por que isso importa?** obrigatórios em todo verbete |

---

## Categorias (8 fixas)

Cada verbete tem **uma** categoria principal (`categoryId`). Relações cruzadas só via **Veja também**.

| Emoji | Categoria editorial | `categoryId` | Rota índice (filtro) |
|-------|---------------------|--------------|----------------------|
| 🚀 | Fundamentos | `fundamentos` | `?categoria=fundamentos` |
| 🎨 | Interface | `interface` | `?categoria=interface` |
| 🔍 | Pesquisa | `pesquisa` | `?categoria=pesquisa` |
| 📈 | Produto | `produto` | `?categoria=produto` |
| 🤝 | Métodos Ágeis | `metodos-ageis` | `?categoria=metodos-ageis` |
| 💻 | Desenvolvimento | `desenvolvimento` | `?categoria=desenvolvimento` |
| ♿ | Acessibilidade | `acessibilidade` | `?categoria=acessibilidade` |
| 🤖 | IA para Designers | `ia-para-designers` | `?categoria=ia-para-designers` |

**Regra:** não duplicar verbete entre categorias. Sobreposição → expandir verbete existente ou link em Veja também.

---

## Rotas

| Página | Rota | Observação |
|--------|------|------------|
| Glossário completo | `/guia/glossario` | Uma página, todos os verbetes |
| Termo específico | `/guia/glossario#ux` | Âncora, não rota separada |

Helpers: `guiaRoutes.glossario`. Cada verbete usa `id` como âncora HTML (`#ux`, `#mvp`).

Redirect legado: `/glossario` → índice.

---

## Modelo de dados (`guiaGlossario.ts`)

```typescript
GuiaGlossarioEntry {
  id: string              // âncora única: #ux, #design-system, #mvp
  term: string            // título exibido (como o mercado usa)
  categoryId: CategoryId  // uma categoria apenas

  originalName?: {        // obrigatório para siglas / termos em inglês
    english: string
    portuguese: string
    usageNote?: string    // por que o mercado mantém em inglês
  }

  whatIs: string[]        // "O que é?" — 1–3 parágrafos
  inOtherWords: string    // "Em outras palavras"
  example: string         // "Exemplo"
  youWillHear: string[]   // "Você provavelmente vai ouvir" — frases reais
  whyItMatters: string    // "Por que isso importa?"
  seeAlso: string[]       // 3–6 slugs de outros verbetes (links internos)
}
```

### Validação editorial (build-time / review)

| Regra | Checagem |
|-------|----------|
| Nome original para siglas | Se `term` é sigla ou inglês → `originalName` obrigatório |
| Veja também | `seeAlso.length` entre 3 e 6 quando houver verbetes suficientes no acervo |
| Slugs únicos | `id` único como âncora; `seeAlso` aponta para `#id` existente |
| Regra de ouro | Antes de novo verbete: buscar termo existente; preferir link |
| Rede, não coleção | Grafo de `seeAlso` conecta Discovery → Pesquisa → Hipótese → MVP |

---

## Mapeamento bloco editorial → UI

Ordem fixa dentro de `<article id="{id}">` na mesma página (`GuiaGlossarioEntryArticle`):

| # | Seção editorial | Componente / elemento | Campo |
|---|-----------------|----------------------|-------|
| — | Nome do termo | `<h1>` | `term` |
| — | Nome original | bloco destacado abaixo do título | `originalName` |
| 1 | O que é? | `<section>` + parágrafos | `whatIs[]` |
| 2 | Em outras palavras | `<section>` tom conversacional | `inOtherWords` |
| 3 | Exemplo | `<section>` exemplo prático PD | `example` |
| 4 | Você provavelmente vai ouvir | `<ul>` citações de mercado | `youWillHear[]` |
| 5 | Por que isso importa? | `<section>` carreira / relevância | `whyItMatters` |
| 6 | Veja também | links `#id` internos | `seeAlso[]` |

Breadcrumb: `Guia / Glossário` (termo ativo = hash na URL).

---

## Página única (`GuiaGlossarioPageContent`)

| Elemento | Função |
|----------|--------|
| Hero | Título + descrição |
| Busca | Filtra verbetes; abre automaticamente categorias com resultado |
| Filtro por categoria | Tabs; ao selecionar uma, expande só ela |
| **Accordion por categoria** | 8 seções colapsáveis (~30–40 termos cada no acervo completo) |
| Índice interno | Pills por categoria (dentro do accordion aberto) |
| Verbetes | `<article id="…">` renderizados só com accordion aberto |
| Hash `#termo` | Abre a categoria certa + scroll suave |

Com 250–300 termos, o accordion evita página infinita e mantém âncoras compartilháveis.

---

## Tom de voz (checklist de revisão)

Antes de publicar verbete, revisar:

- [ ] Português claro, sem academês
- [ ] Soa como conversa com iniciante
- [ ] Exemplo ligado a PD / produto digital
- [ ] Frases em "Você provavelmente vai ouvir" são plausíveis no mercado
- [ ] Texto original VagasUX (não cópia NNG / Wikipedia)
- [ ] Teste final: *"Quem nunca ouviu o termo entenderia?"*

---

## Fontes (referência, não cópia)

Conceitos informados por NNG, Figma Dictionary, IxDF, Material, HIG, livros clássicos — **sempre reescrita original**.

---

## Fases de construção de conteúdo

| Fase | Escopo |
|------|--------|
| **A** | Schema + rotas + template + 1 verbete piloto (UX) |
| **B** | Lote Fundamentos + Interface (~15–20 termos) |
| **C** | Pesquisa + Produto + Métodos Ágeis |
| **D** | Desenvolvimento + Acessibilidade + IA |
| **E** | Revisão cruzada de `seeAlso` e regra de ouro |

### Termos candidatos por categoria (backlog inicial)

**Fundamentos:** UX, UI, Product Design, Usabilidade, Heurísticas, Jornada da pessoa usuária, Persona, Protótipo

**Interface:** Wireframe, Mockup, Design System, Component, Variant, Auto Layout, Tipografia, Grid

**Pesquisa:** UX Research, Discovery, Entrevista, Teste de usabilidade, Hipótese, Validação, Síntese

**Produto:** MVP, PRD, Roadmap, Stakeholder, KPI, OKR, Métrica, Feature

**Métodos Ágeis:** Scrum, Sprint, Kanban, Backlog, WIP, Daily, Retrospectiva

**Desenvolvimento:** API, Frontend, Backend, Handoff, Token, Responsivo

**Acessibilidade:** WCAG, Contraste, Leitor de tela, Foco, ARIA

**IA para Designers:** Prompt, LLM, Copilot, Geração de UI, Assistente de IA

*(Lista para priorização editorial — não implica verbetes já escritos.)*

---

## Arquivos do repositório

```
web/src/data/guiaGlossario.ts          # categorias, verbetes, helpers
web/src/components/guia/glossario/
  GuiaGlossarioPageContent.tsx         # página única: índice + verbetes
  GuiaGlossarioEntryArticle.tsx      # bloco de um verbete (âncora)
web/src/pages/guia/GuiaGlossarioPage.tsx
docs/guia-glossario.md                 # este mapeamento
```

---

## Relação com o resto do Guia

| Dimensão | Glossário |
|----------|-----------|
| Trilhas | Verbetes linkados em trilhas futuras ("Antes de Discovery, veja: Hipótese") |
| Temas | Tema `ux-research` ↔ categoria Pesquisa (índices diferentes, conteúdo complementar) |
| Tipos | Glossário é **editorial fixo**, não tipo de curadoria externa |
| FAQ | FAQ = perguntas gerais; Glossário = definições de termos |

---

## Regra de ouro (operacional)

Fluxo ao criar verbete:

1. Buscar em `guiaGlossarioEntries` por termo similar
2. Se existir → adicionar `seeAlso`, não criar duplicata
3. Se sobreposição parcial → expandir verbete existente
4. Registrar slug em planilha/backlog antes de escrever

O glossário deve formar uma **rede** navegável via Veja também, não uma lista isolada de definições.
