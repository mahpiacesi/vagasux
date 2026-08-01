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
| 🤖 | IA para Designers | `ia-para-designers` |

Um termo = uma categoria. Processo de produto fica em **Produto**, não em Fundamentos.

---

## Subgrupos (dentro do accordion)

### Fundamentos

| `subgroup` | Título |
|------------|--------|
| `areas-disciplinas` | Áreas e disciplinas |
| `mentalidade` | Mentalidade |
| `pessoas-contexto` | Pessoas e contexto |

Termos: Product Design, Product Designer, UX, UI, UX Research, Content Design / UX Writing, Service Design, HCD, Design Thinking, Double Diamond, Pessoa usuária, Stakeholder, Cliente, Negócio…

### Produto

| `subgroup` | Título |
|------------|--------|
| `conceitos` | Conceitos |
| `processo` | Processo |
| `entregas` | Entregas |

Termos: Produto, Produto digital, Problema, Solução, White-label, MVP, Feature (funcionalidade), Discovery, Delivery, Hipótese, Validação, Roadmap, PRD…

**White-label** (`white-label`, subgrupo `conceitos`): plataforma genérica revendida com a marca do cliente. Mencionado inline em **Cliente** (Fundamentos); verbete completo entra em Produto.

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

**Pesquisa:** Entrevista, Teste de usabilidade, Síntese… (Discovery/Hipótese → Produto)

**Produto:** Produto, Produto digital, Problema, Solução, **White-label** (conceitos), MVP, Feature, Discovery, Delivery…

**Métodos Ágeis:** Scrum, Sprint, Kanban, Backlog, WIP…

**Desenvolvimento:** API, Frontend, Handoff, Token…

**Acessibilidade:** WCAG, Contraste, ARIA…

**IA para Designers:** Prompt, LLM, Copilot…

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
