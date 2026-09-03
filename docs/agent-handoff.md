# Agent handoff — VagasUX

> **Leia isto ao retomar uma sessão.** O chat pode aparecer vazio após summarization; este arquivo é o resumo visual persistente.

**Última atualização:** 2026-09-03

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
- A rota `/guia/tema/ui` ganhou conteúdo de referências para UI: padrões, bibliotecas de UI e landing pages.
- Links usam cards visuais de marcador sem faixa de URL sobre a miniatura. Priorizam `og:image`/`twitter:image`, usam captura visual sem metadados e mostram um fallback sutil com ícone de guarda-chuva quando a prévia não é confiável ou bloqueada. Endpoint em produção validado em 07/08.

### Guia, ferramentas (11 ago)
- Rota `/guia/ferramentas` iniciada com Figma expansível, ferramentas de criação, callout de IA e CTA para a trilha de portfólio.
- Miro e Notion não têm páginas próprias; Figma fica como seção especial da página de ferramentas.

### Guia expandido (12–13 ago)
- Temas integrados: Fundamentos, UI, Research, Content Design, Design System, Acessibilidade, Diversidade e Métricas.
- Fundamentos usa abas para Cor, Grid, Tipografia, Iconografia, Ilustração e Motion.
- Ferramentas usa abas para criação, quadro de ideias e utilitários.
- Busca do Guia ganhou resultados, índice de conteúdos e sugestões contextuais.
- Vídeos, livros e Glossário foram atualizados com novas curadorias e contextos.

### Trilhas do Guia (02 set)
- A trilha **Entender o básico** está implementada e fornece a base de navegação contextual.
- A trilha **Conseguir minha primeira vaga** foi estruturada em sete etapas: preparação, escolha de oportunidades, apresentação profissional, busca, networking, processo seletivo e pós-entrevista.
- Cada etapa da trilha agora traz contexto, orientação prática e próximo passo editorial da VagasUX; os conteúdos próprios, FAQ e referências externas ficam como aprofundamento.
- A busca do Guia indexa as etapas, orientações e conteúdos das trilhas **Entender o básico** e **Conseguir minha primeira vaga**.
- A barra inferior agora entende o contexto das duas trilhas.

### Refinamento da trilha primeira vaga (03 set)
- Referências externas da trilha usam o card visual do Guia, com miniatura, título, descrição e domínio.
- Os links para o Guia antigo da VagasUX foram removidos; ficaram apenas referências externas selecionadas da curadoria original e os conteúdos internos atuais.
- A voz editorial da trilha foi ajustada para linguagem neutra, direta e sem construções contrastivas ou qualificadores repetitivos.
- A trilha de primeira vaga mostra uma etapa por vez e usa a barra fixa para avançar ou voltar. O bloco final aparece na etapa 07.
- Ao avançar ou voltar pela barra fixa, a página posiciona a pessoa no início da etapa selecionada.
- Ao entrar pelo card do Guia, a trilha abre no topo da página; a rolagem para a etapa ocorre apenas durante a navegação sequencial.
- A abertura da etapa 01 ganhou um cabeçalho destacado com o título da trilha, contexto, nível e indicação das sete etapas.
- O grafismo do cabeçalho usa o ícone de guarda-chuva em roxo, ampliado, rotacionado e parcialmente cortado no canto direito.
- O cabeçalho destacado agora aparece em todas as etapas de `Conseguir minha primeira vaga` e em todos os blocos da trilha `Entender o básico`.
- A trilha `Entender o básico` agora abre na etapa 01 e usa a mesma navegação sequencial da primeira vaga; os blocos internos deixaram de repetir o cabeçalho gráfico.
- A rolagem entre as etapas da trilha básica mantém o título do bloco visível abaixo da navegação fixa.
- Ao terminar os conteúdos de uma etapa, a barra fixa abre primeiro o próximo bloco antes do seu primeiro conteúdo.
- Na trilha de primeira vaga, o cabeçalho mantém o título e a descrição da trilha durante a navegação; cada etapa aparece identificada no bloco de conteúdo.
- O conteúdo da trilha de primeira vaga está alinhado pela coluna do título de cada etapa.
- Os callouts amarelo e azul da trilha seguem a mesma largura máxima.
- Os textos dos sete blocos foram revisados com a orientação editorial enviada em 03/09.
- O bloco 02 foi revisado com foco em leitura de vagas, requisitos e ambiente de aprendizado.
- O bloco 03 ganhou orientações atualizadas para currículo, LinkedIn e portfólio, além do callout sobre leitura por ATS.

---

## Próximo passo esperado

1. Revisar os cards de preview externos da trilha **Conseguir minha primeira vaga** na nova PR.
2. Refinar a trilha após uso e feedback editorial.
3. **Hardening** — ver `docs/hardening-backlog.md` (alertas Scheduler, health dashboard)

---

## PRs / branches em aberto

| Item | Status |
|------|--------|
| [PR #44 — página Guilda](https://github.com/mahpiacesi/vagasux/pull/44) | ✅ Mergeado (31/07) |
| Parcerias + collector | ✅ mergeado (#34, #37–#40) |
| Consolidação PUC Minas | ✅ concluída no Notion (07/08) |
| Guia expandido e busca dinâmica | ✅ mergeado (#73, #74, #76–#82) |
| [PR #83 — trilha entender o básico](https://github.com/mahpiacesi/vagasux/pull/83) | ✅ Mergeada em 02/09 |
| [PR #84 — trilha primeira vaga](https://github.com/mahpiacesi/vagasux/pull/84) | ✅ Integrada em `main` em 02/09 |
| Cards de preview da trilha primeira vaga | 🟡 Branch `cursor/refine-first-vaga-previews-c6eb` |
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
