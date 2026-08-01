# Glossário VagasUX — Guia editorial (v2)

Template enxuto para ~250–300 termos. Página única com accordion por categoria e âncoras.

---

## Objetivo

Traduzir a linguagem de Product Design de forma simples e prática para quem está começando.

Cada verbete responde: *"O que isso significa?"* e *"Como aparece no mercado?"*

---

## Template do verbete (2 blocos)

| Bloco | Campo | Obrigatório |
|-------|-------|-------------|
| Nome do termo | `term` | Sim |
| Nome original (siglas / inglês) | `originalName` | Quando aplicável |
| **O que é?** | `whatIs[]` | Sim |
| **Você provavelmente vai ouvir** | `youWillHear[]` | Sim |

**Removidos** (v1): Em outras palavras, Exemplo, Por que isso importa?, Veja também

### Termos relacionados inline

Sinônimos ou pares próximos entram **dentro de "O que é?"**, não em verbete duplicado:

- **Content Design** (também chamado de **UX Writing** no mercado)…
- **Feature** — muita gente fala **funcionalidade** em português…

### Regra de ouro

Antes de criar verbete novo, buscar termo similar. Preferir mencionar no texto inline.

---

## Categorias (8)

| Emoji | Categoria | `categoryId` |
|-------|-----------|--------------|
| 🚀 | Fundamentos | `fundamentos` |
| 🎨 | Interface | `interface` |
| 🔍 | Pesquisa | `pesquisa` |
| 📈 | Produto | `produto` |
| 🤝 | Métodos Ágeis | `metodos-ageis` |
| 💻 | Desenvolvimento | `desenvolvimento` |
| ♿ | Acessibilidade | `acessibilidade` |
| 🤖 | IA | `ia` |

Um termo = uma categoria. Processo de produto fica em **Produto**, não em Fundamentos.

---

## Subgrupos (dentro do accordion)

### Fundamentos

| `subgroup` | Título |
|------------|--------|
| `areas-disciplinas` | Áreas e disciplinas |
| `mentalidade` | Mentalidade |
| `pessoas-contexto` | Pessoas e contexto |

Termos: Product Design, Product Designer, Product Manager, UX, UI, UX Research, Content Design / UX Writing, Service Design, HCD, Design Thinking, Double Diamond, Pessoa usuária, Stakeholder, Cliente, Negócio…

### Produto

| `subgroup` | Título |
|------------|--------|
| `conceitos` | Conceitos |
| `processo` | Processo |
| `entregas` | Entregas |

**Conceitos:** Produto, Produto digital, Problema, Solução, JTBD, White-label, MVP, Product-market fit, Feature, Métrica, OKR

**Processo:** Discovery, Delivery, Hipótese, Validação

**Entregas:** Roadmap, PRD

White-label complementa **Cliente** (Fundamentos). **Product Manager** fica em Fundamentos (áreas e disciplinas). Métodos de pesquisa ficam em **Pesquisa**; discovery e validação ficam aqui como etapas de processo.

### Interface

| `subgroup` | Título |
|------------|--------|
| `prototipos` | Prototipação |
| `estrutura` | Estrutura e layout |
| `visual` | Elementos visuais |
| `sistema` | Sistema e componentes |

**Prototipação:** Wireframe, Mockup, Protótipo

**Estrutura e layout:** Layout, Grid, Auto Layout

**Elementos visuais:** Tipografia, Cor, Iconografia, Espaçamento, Hierarquia visual

**Sistema e componentes:** Componente, Variant, Estado, Design System, Design Token, UI Kit, Pattern

Referências informadas (v1 + glossários de UI/PD): backlog editorial v1, trilha Aprender UI, Figma Dictionary e padrões de design system. Termos de implementação (Handoff, Responsivo) ficam em **Desenvolvimento**; papéis (UI Designer, Design Visual) ficam em **Fundamentos**.

### Pesquisa

| `subgroup` | Título |
|------------|--------|
| `conceitos` | Conceitos |
| `metodos` | Métodos de pesquisa |
| `analise` | Análise e síntese |

**Conceitos:** Pesquisa qualitativa, Pesquisa quantitativa, Recrutamento, Participante

**Métodos de pesquisa:** Entrevista, Teste de usabilidade, Questionário, Card Sorting, Tree Testing, Observação contextual

**Análise e síntese:** Síntese, Insight, Mapa de afinidade, Mapa de empatia, Roteiro de pesquisa, Mapa de jornada

UX Research (disciplina) fica em **Fundamentos**; Discovery, Hipótese e Validação ficam em **Produto**.

### Métodos Ágeis

| `subgroup` | Título |
|------------|--------|
| `conceitos` | Conceitos |
| `artefatos` | Artefatos |
| `cerimonias` | Cerimônias |

**Conceitos:** Agile, Scrum, Kanban

**Artefatos:** Backlog, User Story, Epic, WIP

**Cerimônias:** Sprint, Daily, Sprint Planning, Retrospectiva, Sprint Review

Discovery e delivery ficam em **Produto**; squad em **Fundamentos**.

### Desenvolvimento

| `subgroup` | Título |
|------------|--------|
| `conceitos` | Conceitos |
| `entrega` | Design para desenvolvimento |
| `ciclo` | Ciclo de release |

**Conceitos:** Frontend, Backend, API, Responsivo

**Design para desenvolvimento:** Handoff, Spec, Breakpoint, Edge case

**Ciclo de release:** Deploy, Staging, Bug, Pull Request, QA

Design Token fica em **Interface**; handoff e responsivo ficam aqui na implementação.

### Acessibilidade

| `subgroup` | Título |
|------------|--------|
| `conceitos` | Conceitos |
| `interface` | Interface acessível |
| `pratica` | Prática |

**Conceitos:** Acessibilidade digital, Design inclusivo, WCAG

**Interface acessível:** Contraste, Texto alternativo, Foco visível, Navegação por teclado, Área de toque

**Prática:** Leitor de tela, ARIA, Auditoria de acessibilidade

Contraste em **Cor** (Interface) trata paleta; aqui o foco é legibilidade e WCAG.

### IA

| `subgroup` | Título |
|------------|--------|
| `conceitos` | Conceitos |
| `uso` | Uso no dia a dia |
| `pratica` | Prática e riscos |

**Conceitos:** IA, LLM, IA generativa

**Uso no dia a dia:** Prompt, Engenharia de prompt, MD, Agente de IA, Skill

**Prática e riscos:** Modelo, Janela de contexto, Alucinação, Revisão humana

Foco em linguagem de produto e UX com IA; MD é formato comum para contexto e instruções em projetos com agentes.

---

## Modelo de dados

```typescript
GuiaGlossarioEntry {
  id: string              // âncora: #ux, #mvp
  term: string
  categoryId: CategoryId
  subgroup?: string
  originalName?: { alternate: string; usageNote? }
  whatIs: string[]
  youWillHear: string[]
}
```

---

## Rotas

| Página | Rota |
|--------|------|
| Glossário | `/guia/glossario` |
| Termo | `/guia/glossario#ux` |

---

## UI

- Accordion por categoria (8)
- Subgrupos como `<h3>` dentro do accordion aberto
- Busca + hash abre categoria certa + scroll

---

## Tom de voz

- Acolhedor, didático, direto
- Português claro; inglês quando é o que o mercado usa
- Texto original VagasUX (não copiar NNG, Wikipedia etc.)
- **VagasUX no feminino:** *a* VagasUX, *na* VagasUX, *da* VagasUX — nunca *o/no/do/pelo* VagasUX

---

## Backlog por categoria (priorização)

**Fundamentos:** ver subgrupos acima.

**Interface:** 18 termos (ver subgrupos acima). Fase B do roadmap editorial.

**Pesquisa:** 16 termos (ver subgrupos acima). Entrevista, teste de usabilidade, síntese e métodos correlatos. Discovery/Hipótese → Produto.

**Produto:** 16 termos (ver subgrupos acima). Conceitos, processo discovery/delivery, métricas/OKR/JTBD/PMF e entregas de roadmap/PRD.

**Métodos Ágeis:** 12 termos (ver subgrupos acima). Scrum, sprint, backlog, kanban e cerimônias do squad.

**Desenvolvimento:** 13 termos (ver subgrupos acima). Frontend, handoff, responsivo, deploy e ciclo com engenharia.

**Acessibilidade:** 11 termos (ver subgrupos acima). WCAG, contraste, teclado, leitor de tela e auditoria.

**IA:** 12 termos (ver subgrupos acima). LLM, prompt, MD, skill, agente de IA, alucinação e revisão humana.

---

## Arquivos

```
web/src/data/guiaGlossario.ts
web/src/components/guia/glossario/GuiaGlossarioPageContent.tsx
web/src/components/guia/glossario/GuiaGlossarioCategoryAccordion.tsx
web/src/components/guia/glossario/GuiaGlossarioEntryArticle.tsx
docs/guia-glossario.md
```

---

## Redirects

Só paths do site legado vagasux.com.br (Super/Notion), quando for migrar. Nada de redirects para rotas inventadas na PR.
