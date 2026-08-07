# Agent handoff — VagasUX

> **Leia isto ao retomar uma sessão.** O chat pode aparecer vazio após summarization; este arquivo é o resumo visual persistente.

**Última atualização:** 2026-08-07 (noite)

---

## Status rápido

| Área | Estado | Nota |
|------|--------|------|
| `/guilda` | ✅ Live | PR #44 mergeado em 31/07 |
| Collector Parceiros | ✅ Ativo | 26 logos no Supabase, Scheduler 8h |
| `/parcerias` | ✅ Live | CTAs de contato ok, sem e-mail visível |
| Mural de vagas | ✅ Live | Filtros, badges, load more |
| Analytics (Clarity + GA4) | ✅ Mergeado | PR #42 |
| Enrichment (IA) | ✅ Ativo | 31 vagas enriquecidas em catch-up 31/07 |
| Collector VagasUX batch | ✅ Mergeado | PR #45 — RPC batch + Scheduler resiliente |
| Home logos dinâmicos | ✅ Mergeado | PR #46 — PartnershipsSection → Supabase |
| Collector Sólides | ✅ Ativo | Exec #35 — 109 vagas; PR #47 mergeado |
| Collector InfoJobs | ✅ Ativo | Exec #37 — 184 vagas; Scheduler encadeado |

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

### Base de cursos (07 ago)
- Registros duplicados da PUC foram consolidados: permanece somente **PUC Minas** no banco `Abertos`.
- A página preserva as modalidades, cursos, investimento e relato já registrados; não há entrada ativa `PUCMG`.

### Guia de cursos, desconto parceiro (07 ago)
- O painel lateral de detalhes exibe descontos e cupons de parceiros, incluindo Alura e FIAP.
- Cursos extintos foram removidos da curadoria. Cubos Academy e Tangível Academy seguem no diretório, sem selo de parceria.
- A duplicata `Design Ops Lab` foi retirada; permanece `DesignOps Lab` com o relato preservado.

### Guia por tema, UX (07 ago)
- A rota `/guia/tema/ux` ganhou conteúdo de referências para UX: padrões, bibliotecas de UI e landing pages.
- Links usam cards visuais de marcador sem faixa de URL sobre a miniatura. Priorizam `og:image`/`twitter:image`, usam captura visual sem metadados e mostram um fallback sutil com ícone de guarda-chuva quando a prévia não é confiável ou bloqueada.

---

## Próximo passo esperado

1. **Hardening** — ver `docs/hardening-backlog.md` (alertas Scheduler, health dashboard)
2. Monitorar Scheduler diário (~8h BRT) com cadeia completa incluindo InfoJobs

---

## PRs / branches em aberto

| Item | Status |
|------|--------|
| [PR #44 — página Guilda](https://github.com/mahpiacesi/vagasux/pull/44) | ✅ Mergeado (31/07) |
| Parcerias + collector | ✅ mergeado (#34, #37–#40) |
| Consolidação PUC Minas | ✅ concluída no Notion (07/08) |
| Destaque de desconto da Alura | Em PR (#71) |
| Cloud agent run | [VagasUX agregador inicial](https://cursor.com/agents/bc-5db5a205-aebe-401e-abc3-69b1db19a8a9) |

---

## Blockers conhecidos

- Chat do Cloud Agent **não mostra histórico** após summarization — usar este arquivo + timeline em [cursor.com/agents](https://cursor.com/agents)

---

## Backlog

- Hardening pipeline: `docs/hardening-backlog.md`

---

## Links úteis

- Produção Guilda: https://vagasux.com.br/guilda (após deploy Vercel)
- n8n: `https://n8n-lws1.srv1866525.hstgr.cloud`
- Supabase project: `xbvspzwjjjtkvecseoog`
- Runbook collector parceiros: `docs/collector-partners.md`
