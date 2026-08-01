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

Termos: Produto, Produto digital, Problema, Solução, Discovery, Delivery, Hipótese, Validação, MVP, Feature (funcionalidade), Roadmap, PRD…

---

## Modelo de dados

```typescript
GuiaGlossarioEntry {
  id: string              // âncora: #ux, #mvp
  term: string
  categoryId: CategoryId
  subgroup?: string
  originalName?: { english, portuguese, usageNote? }
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
- Busca + filtro por categoria
- Hash abre categoria certa + scroll

---

## Tom de voz

- Acolhedor, didático, direto
- Português claro; inglês quando é o que o mercado usa
- Texto original VagasUX (não copiar NNG, Wikipedia etc.)
- **VagasUX no feminino:** *a* VagasUX, *na* VagasUX, *da* VagasUX — nunca *o/no/do/pelo* VagasUX

---

## Backlog por categoria (priorização)

**Fundamentos:** ver subgrupos acima.

**Interface:** Wireframe, Mockup, Design System, Component, Tipografia…

**Pesquisa:** Entrevista, Teste de usabilidade, Síntese… (Discovery/Hipótese → Produto)

**Produto:** ver subgrupos acima.

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
