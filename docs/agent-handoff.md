# Agent handoff — VagasUX

> **Leia isto ao retomar uma sessão.** O chat pode aparecer vazio após summarization; este arquivo é o resumo visual persistente.

**Última atualização:** 2026-07-30 (tarde)

---

## Status rápido

| Área | Estado | Nota |
|------|--------|------|
| Collector Parceiros | ✅ Ativo | 26 logos no Supabase, Scheduler 8h |
| `/parcerias` | ✅ Live | CTAs de contato ok, sem e-mail visível |
| Mural de vagas | ✅ Live | Filtros, badges, load more |
| Analytics (Clarity + GA4) | 🔜 PR #42 | Banner de cookies + Termos atualizados |
| Enrichment (IA) | ⏸ Pausado | Gemini 429 — retry quando quota resetar |

---

## Feito recentemente

### Parcerias / backend (29–30 jul)
- **Collector Parceiros** rodando: Notion → n8n → Supabase Storage (`partner-logos/`), 26 parceiros ativos
- **PR #34** mergeado — logos só via Supabase (sem GitHub/repo)
- **PRs #37–#40** mergeados — CTA contato (Gmail compose), scroll hero “Fale com a gente”, remoção do e-mail visível no rodapé
- n8n self-hosted ativo; Scheduler inclui Collector Parceiros após VagasUX
- Database Notion **Parceiros** compartilhada com integração **VagasUX Collector**

### Site (já na main)
- `/parcerias` com logos do Supabase
- Menu Comunidade (#36 mergeado)
- Páginas institucionais, voluntariado, oportunidades, mural de vagas (trabalho anterior deste agent)

---

## Próximo passo esperado

1. **Mais páginas e integrações** (combinado contigo para próxima sessão)
2. Opcional: retry do **Enrichment** quando quota Gemini resetar
3. Manter collectors no Scheduler diário (8h)

---

## PRs / branches em aberto

| Item | Status |
|------|--------|
| Parcerias + collector | ✅ mergeado (#34, #37–#40) |
| Agent handoff (este arquivo) | 🔜 PR pendente |
| Cloud agent run | [VagasUX agregador inicial](https://cursor.com/agents/bc-5db5a205-aebe-401e-abc3-69b1db19a8a9) |

---

## Blockers conhecidos

- Chat do Cloud Agent **não mostra histórico** após summarization — usar este arquivo + timeline em [cursor.com/agents](https://cursor.com/agents)
- Logos da **home** (`PartnershipsSection`) ainda são estáticos no repo — separado do mural `/parcerias`

---

## Links úteis

- n8n: `https://n8n-lws1.srv1866525.hstgr.cloud`
- Supabase project: `xbvspzwjjjtkvecseoog`
- Runbook collector parceiros: `docs/collector-partners.md`
