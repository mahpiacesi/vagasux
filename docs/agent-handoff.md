# Agent handoff — VagasUX

> **Leia isto ao retomar uma sessão.** O chat pode aparecer vazio após summarization; este arquivo é o resumo visual persistente.

**Última atualização:** 2026-09-09

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
- O aprofundamento do bloco 03 inclui referências de ATS, modelos e exemplos de currículos com cards de preview.
- O aprofundamento do bloco 05 contém apenas os cards externos de Eventos e Faça parte da VagasUX.
- Esses cards abrem as rotas atuais do site em nova aba, enquanto usam a URL pública apenas para resolver a prévia.
- O aprofundamento do bloco 06 contém somente as referências externas da Nielsen Norman Group e UXfolio.
- O bloco 07 termina com a seção `Quer continuar se preparando?`, sem aprofundamentos intermediários.
- O bloco 02 segue da orientação editorial para o próximo passo, sem seção de aprofundamento.
- O bloco 01 também segue direto da orientação editorial para o próximo passo.
- **PR #85 mergeada:** refinamentos visuais, navegação sequencial e curadoria das trilhas estão em `main`.

### Trilha de portfólio (05 set)
- **PR #87 mergeada** em `main`.
- A trilha `Montar meu portfólio` mantém seus textos editoriais nas cinco etapas e adiciona 36 referências externas em cards com título, descrição e miniatura.
- A curadoria cobre estrutura de cases, portfólio sem experiência, desafios para praticar, plataformas de publicação e referências de portfólios.
- A etapa final direciona para a FAQ de portfólio. A busca do Guia indexa as etapas e todos os cards.

### Trilha de voluntariado (05 set)
- **PR #88 mergeada** em `main`.
- A trilha `Praticar em um voluntariado` foi estruturada em cinco etapas, da escolha de uma iniciativa à transformação da experiência em próximos passos.
- A curadoria usa o conteúdo editorial enviado em 05/09 e inclui cards de aprofundamento na primeira e na segunda etapa.
- O card de voluntariado da VagasUX abre a rota local e usa a URL pública apenas para a thumbnail.

### Trilha freelancer (05 set)
- **PR #89** — branch `cursor/trilha-freelancer-aed2`.
- A trilha `Me tornar um designer freelancer` foi estruturada em cinco etapas, com referências para serviços, precificação, propostas e plataformas.
- Os vídeos citados na trilha estão na fonte global `guiaVideos.ts`, com thumbnails do YouTube e tag `Freelancer`.
- O vídeo restrito a assinantes foi removido da trilha, da área de vídeos e da allowlist de previews.
- Três vídeos gerais de carreira foram mantidos apenas na categoria `Carreira`, sem a tag `Freelancer`.

### Trilha internacional (05 set)
- **PR #90 integrada** em `main`.
- A trilha `Me posicionar para vagas internacionais` tem cinco etapas e cards de aprofundamento com previews autorizados.

### Thumbnails do YouTube (05 set)
- Branch `cursor/youtube-trail-thumbnails-aed2`.
- Cards com URLs do YouTube agora usam diretamente a thumbnail oficial pelo ID do vídeo, sem depender do resolvedor de previews.
- A branch `cursor/youtube-full-bleed-thumbnails-aed2` troca a variação 4:3 pela imagem 16:9, removendo as barras pretas dos cards.

### Trilha primeira vaga (05 set)
- A etapa 01 ganhou a seção `Veja relatos de quem já migrou`, com 33 relatos de transição profissional em cards com miniatura, título e contexto.
- Todas as URLs da nova curadoria foram autorizadas no resolvedor de previews e indexadas na busca do Guia.

### Formatos do Guia (05 set)
- `Artigos` foi removido do carrossel e deixou de ter uma página própria.
- Os artigos continuam disponíveis como referências dentro dos temas, trilhas e resultados de busca.

### Canais do Guia (05 set)
- A curadoria de `Canais` foi colocada em pausa: o formato, seus itens e sua página deixaram de aparecer no Guia.
- O redirecionamento legado de perfis para seguir agora leva à página inicial do Guia.
### Relatos de cursos (08–09 set)
- A página de publicação ganhou um formulário nativo com busca de cursos e alternativa para sugerir curso ainda não mapeado.
- O envio será encaminhado ao webhook n8n indicado por `N8N_COURSE_FEEDBACK_WEBHOOK_URL`.
- A database `Relatos de cursos` no Notion segue como fila editorial.
- Os 160 relatos históricos de 49 cursos foram migrados para `public.guia_curso_relatos`, com texto, autoria disponível e data de recebimento preservados.
- O painel de cada curso agora lê os relatos publicados do Supabase e mantém o arquivo estático como fallback se a consulta não retornar conteúdo.
- O aviso geral de validação do formulário desaparece assim que todos os campos destacados forem corrigidos.
- Diagnóstico de runtime confirmado: às 02:14:37 UTC de 09/09, o POST da Function de produção `dpl_GfjyrZekqh7M24N335J99snAFfQR` retornou `502`. A variável de produção está carregada e a Function conseguiu chamar o upstream.
- A causa do `403` foi identificada no Webhook do n8n: a opção `Ignore Bots` estava ativa e rejeitava a chamada servidor-a-servidor da Vercel.
- `Ignore Bots` foi desativado e a nova versão do workflow de recebimento foi publicada.
- Um envio real de produção foi concluído em 09/09 às 02:23 UTC: a Function retornou `201` e o workflow de recebimento terminou com sucesso.
- A URL com UUID exibida pelo MCP (`/webhook/d4a41145-37bb-450c-9acc-3ff63d2303a0/...`) retorna `404` para `POST`; não deve substituir a URL de produção configurada.
- O workflow `Publicar relatos aprovados` foi corrigido: `Status de publicação` é `select`, não `status`, para que seus filtros e atualizações no Notion funcionem. A primeira execução agendada após publicar a alteração terminou com sucesso às 00:00 UTC.
- A instrumentação temporária da Function foi removida após o diagnóstico.
- A integração `Relatos recebidos` do Notion agora assina o evento oficial `page.properties_updated` da database `Relatos de cursos`.
- O workflow `Publicar relatos aprovados — webhook Notion` recebeu e processou um relato de teste em 09/09, publicou-o no Supabase e marcou o registro como `Publicado` no Notion.
- O relato usado no teste foi removido do Supabase após a validação; a reconciliação diária permanece ativa como contingência.
- A curadoria do site agora exibe `Fluency Skills (antiga Awari)` para o curso que antes aparecia como Awari.
- O acervo histórico foi conciliado com a database `Relatos de cursos`: ela passou de 28 para 167 registros, sendo 166 marcados como `Publicado`. O Supabase preserva 165 relatos públicos.
- O workflow único de migração foi arquivado após terminar com sucesso; a sincronização contínua segue via webhook oficial e reconciliação diária.

---

## Próximo passo esperado

1. Remover o registro de teste `TESTE 1 — pode apagar` no Notion, se ele não for mais necessário para a curadoria.
2. Acompanhar a próxima aprovação real: ela deve chegar pelo webhook e aparecer no site sem novo deploy.

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
| [PR #85 — refinamentos das trilhas](https://github.com/mahpiacesi/vagasux/pull/85) | ✅ Mergeada em 03/09 |
| [PR #86 — conteúdo da trilha de portfólio](https://github.com/mahpiacesi/vagasux/pull/86) | ✅ Integrada em `main` em 05/09 |
| [PR #87 — trilha de portfólio](https://github.com/mahpiacesi/vagasux/pull/87) | ✅ Integrada em `main` em 05/09 |
| [PR #88 — trilha de voluntariado](https://github.com/mahpiacesi/vagasux/pull/88) | ✅ Integrada em `main` em 05/09 |
| [PR #89 — trilha freelancer](https://github.com/mahpiacesi/vagasux/pull/89) | ✅ Integrada em `main` em 05/09 |
| [PR #93 — relatos de migração](https://github.com/mahpiacesi/vagasux/pull/93) | ✅ Integrada em `main` em 05/09 |
| [PR #94 — formato Artigos](https://github.com/mahpiacesi/vagasux/pull/94) | ✅ Integrada em `main` em 05/09 |
| [PR #95 — formato Canais](https://github.com/mahpiacesi/vagasux/pull/95) | ✅ Integrada em `main` em 05/09 |
| [PR #96 — formulário de relatos](https://github.com/mahpiacesi/vagasux/pull/96) | Incluída na integração da PR #97 |
| [PR #97 — relatos de cursos](https://github.com/mahpiacesi/vagasux/pull/97) | Integrada em `main`; validação final do envio pendente |
| Webhook oficial do Notion | ✅ Assinatura ativa e fluxo validado em 09/09 |
| [PR #98 — correção do webhook](https://github.com/mahpiacesi/vagasux/pull/98) | ✅ Integrada junto da PR #99 em 09/09 |
| [PR #99 — registro do webhook](https://github.com/mahpiacesi/vagasux/pull/99) | ✅ Integrada em `main` em 09/09 |
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
