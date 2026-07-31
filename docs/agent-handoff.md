# Agent handoff — VagasUX

> **Leia isto ao retomar uma sessão.** O chat pode aparecer vazio após summarization; este arquivo é o resumo visual persistente.

**Última atualização:** 2026-07-31 (tarde)

---

## Status rápido

| Área | Estado | Nota |
|------|--------|------|
| `/guilda` | ✅ Live | PR #44 mergeado em 31/07 |
| Collector Parceiros | ✅ Ativo | 26 logos no Supabase, Scheduler 8h |
| `/parcerias` | ✅ Live | CTAs de contato ok, sem e-mail visível |
| Mural de vagas | ✅ Live | Filtros, badges, load more |
| Analytics (Clarity + GA4) | ✅ Mergeado | PR #42 |
| Enrichment (IA) | ⏸ Pausado | Gemini 429 — retry quando quota resetar |

---

## Feito recentemente

### Página Guilda (`/guilda`) — 30–31 jul
- **PR #44** — branch `cursor/guilda-page-a8a9`, preview: https://vagasux-git-cursor-guilda-page-a8a9-vagas-ux.vercel.app/guilda
- Landing completa: hero com ilustração (`illustration-guilda.svg`), selo circular animado, pain points, benefícios, WhatsApp, highlights, depoimentos (duas faixas), planos, FAQ, closing section
- **Hero:** ilustração completa no escudo, ondas sinusoidais, brilhos reposicionados, selo com texto rotativo (SVG 2x + `animateTransform`)
- **Selo:** tamanho ~7–9rem, fill `#E8EBFF`, texto legível e contido no círculo
- **Copy revisada:** pain points, benefícios, WhatsApp (ícone outline), highlights, depoimentos — conforme feedback da Mah
- Rota `/guilda`, links na Comunidade e nav

### Parcerias / backend (29–30 jul) — já na main
- Collector Parceiros, PRs #34 e #37–#40 mergeados
- n8n self-hosted; Scheduler inclui Collector Parceiros após VagasUX

---

## Próximo passo esperado

1. **Mais páginas e integrações** (combinado para sessões seguintes)
2. Opcional: retry do **Enrichment** quando quota Gemini resetar

---

## PRs / branches em aberto

| Item | Status |
|------|--------|
| [PR #44 — página Guilda](https://github.com/mahpiacesi/vagasux/pull/44) | ✅ Mergeado (31/07) |
| Parcerias + collector | ✅ mergeado (#34, #37–#40) |
| Cloud agent run | [VagasUX agregador inicial](https://cursor.com/agents/bc-5db5a205-aebe-401e-abc3-69b1db19a8a9) |

---

## Blockers conhecidos

- Chat do Cloud Agent **não mostra histórico** após summarization — usar este arquivo + timeline em [cursor.com/agents](https://cursor.com/agents)
- Logos da **home** (`PartnershipsSection`) ainda são estáticos no repo — separado do mural `/parcerias`

---

## Links úteis

- Produção Guilda: https://vagasux.com.br/guilda (após deploy Vercel)
- n8n: `https://n8n-lws1.srv1866525.hstgr.cloud`
- Supabase project: `xbvspzwjjjtkvecseoog`
- Runbook collector parceiros: `docs/collector-partners.md`
