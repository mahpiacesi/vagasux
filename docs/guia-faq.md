# FAQ VagasUX — Guia editorial

Perguntas frequentes sobre carreira, estudos, portfólio e vagas em Product Design.

---

## Objetivo

Responder dúvidas recorrentes de quem está começando ou reorganizando estudos, com tom acolhedor e direto.

Cada item responde uma pergunta real da comunidade, sem substituir curso ou mentoria.

---

## Template do item

| Campo | Obrigatório |
|-------|-------------|
| `id` | Sim (âncora `#slug`) |
| `question` | Sim |
| `categoryId` | Sim |
| `answer[]` | Sim (1–2 parágrafos) |

---

## Categorias (5)

| Emoji | Categoria | `categoryId` |
|-------|-----------|--------------|
| 🚀 | Carreira | `carreira` |
| 📚 | Estudos | `estudos` |
| 💼 | Portfólio | `portfolio` |
| 🎯 | Vagas e entrevistas | `vagas` |
| ✨ | Sobre o Guia | `guia` |

---

## Backlog

**Carreira:** o que faz PD, UX vs UI, código, áreas (4)

**Estudos:** faculdade, por onde começar, tempo, curso vs autodidata (4)

**Portfólio:** o que colocar, quantos cases, fictício, narrativa (4)

**Vagas:** primeira vaga, expectativa júnior, entrevista, vaga pede XP (4)

**Guia:** o que é, substitui curso, trilhas, glossário vs FAQ (4)

**Total:** 20 perguntas na etapa 1.

---

## UI

- Mesmo padrão do glossário: accordion por categoria, busca, chips de navegação, hash por pergunta
- Cabeçalho do accordion sticky quando aberto

---

## Tom de voz

- Mesmas regras do glossário e `docs/design.md`
- VagasUX no feminino
- Sem travessão (—)
- Sem nomes de ferramenta quando genérico basta

---

## Arquivos

```
web/src/data/guiaFaq.ts
web/src/components/guia/faq/GuiaFaqPageContent.tsx
web/src/components/guia/faq/GuiaFaqCategoryAccordion.tsx
web/src/components/guia/faq/GuiaFaqItemArticle.tsx
docs/guia-faq.md
```
