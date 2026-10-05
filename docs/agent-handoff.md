# Agent handoff — VagasUX

> **Leia isto ao retomar uma sessão.** O chat pode aparecer vazio após summarization; este arquivo é o resumo visual persistente.

**Última atualização:** 2026-10-05

---

## Status rápido

| Área | Estado | Nota |
|------|--------|------|
| `/sobre` | ✅ Live | PR #115 + atualização #120 (29/09) |
| `/guilda` | ✅ Live | Sala no Discord (#122). Sem scroll horizontal; plano anual sem “Apoio contínuo” (#124, 01/10) |
| Menu mobile | ✅ Live | Tela cheia, com Faça parte e hambúrguer (#124, 01/10) |
| `/cookies` | ✅ Live | Clarity e Google Analytics. A escolha fica no aviso da primeira visita (#131, 02/10). O Analytics já carrega em vagasux.vercel.app depois de Aceitar |
| Escrita de vagas e parceiros | ✅ Live | A chave pública não grava mais (#135, 05/10). Os coletores seguem com a chave de serviço |
| Termos | ✅ Live | Quem opera a VagasUX está só no Contato. Sem seção de cookies (#131, 02/10) |
| SEO (catálogo + prerender) | ✅ Mergeado | PR #110 em 17/09 |
| Página 404 | ✅ Live | PR #114 em 17/09 |
| Collector Parceiros | ✅ Ativo | Scheduler 8h; só Ativo + Logo |
| Collector InHire | ✅ Mergeado | PR #106 — tenants públicos de Design |
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

### Escrita de vagas e parceiros (5 out)
- **PR #135** mergeada: as funções que gravam vagas e parceiros não aceitam mais a chave pública do site. A leitura do mural continua aberta.
- O Collector VagasUX rodou depois da mudança e gravou 39 vagas, sem falha. O Collector Parceiros não foi executado, porque ele desativa todos os parceiros antes de gravar de novo. Ele usa a mesma credencial de serviço.

### Lançamento do domínio (previsto 9 ou 10 out)
- `vagasux.com.br` e `www` já estão no projeto da Vercel, ainda sem verificação. Verificar agora trocaria o site na hora, porque o domínio já aponta para a Vercel pelo site antigo.
- Os dois registros TXT no Cloudflare ficam para quinta ou sexta. O e-mail (MX do Google) permanece como está.
- Anúncios de verdade esperam o domínio novo. A prévia do card nas vagas ([PR #133](https://github.com/mahpiacesi/vagasux/pull/133)) continua em rascunho.
- A conexão do Cloudflare no projeto está na [PR #134](https://github.com/mahpiacesi/vagasux/pull/134), em rascunho. A autorização da conta ainda não foi feita neste agente.

### Privacidade, cookies e termos (2 out)
- **PR #131** mergeada: Termos e Políticas identificam quem opera a VagasUX só no Contato (Marianna Ferraz Piacesi, M F PIACESI SERVICOS DE WEB DESIGN, CNPJ 39.617.365/0001-03, marianna@vagasux.com.br). A privacidade cobre relato de curso e mentoria. Não há seção Sobre nem cookies nessa página.
- **`/cookies`** cita Microsoft Clarity e Google Analytics. Os dois só carregam depois do aceite. O aviso da primeira visita nomeia os dois. O Google Analytics já está no ar em vagasux.vercel.app desde 5 out.
- **PR #129** tinha aberto `/cookies` e a lista de títulos dos termos. A #131 completa o aviso de privacidade.

### Cookies e termos (2 out)
- **PR #129** mergeada: `/cookies` explica o que a VagasUX guarda no navegador. Os botões ficam no aviso da primeira visita. O link “altere sua escolha” reabre esse aviso. A data da página é 1 de outubro de 2026.
- Em Termos e Políticas, a lista de títulos à direita leva até cada seção.
- A **PR #127** tinha aberto o texto de cookies dentro de Termos. A #129 substitui isso. O rodapé abre `/cookies`.

### Menu mobile e Guilda (1 out)
- **PR #124** mergeada: no celular, o menu abre em tela cheia. Faça parte continua em destaque, ao lado do hambúrguer. No desktop, os menus de Comunidade e Vagas seguem como estavam.
- **PR #125** entrou na #124 antes do merge: a hero da Guilda não alarga mais a página, e o plano anual não lista mais “Apoio contínuo da comunidade”.

### Guilda no Discord (30 set)
- **PR #122** mergeada: `/guilda` e o card da Guilda em `/comunidade` falam da sala exclusiva no Discord. O cadastro pede o @ e o acesso acompanha o período da assinatura.
- Canais abertos seguem no WhatsApp, Telegram e no servidor público do Discord.
- No n8n, a sincronização diária às 8h está ativa. Os fluxos de teste foram arquivados. O cargo ainda não foi testado numa pessoa pagante de verdade.

### Página Sobre (`/sobre`) — 18–29 set
- **PR #115** mergeada em 18/09: rota `/sobre`, hero, propósito, fundadora, timeline (17 marcos 2020–2026) e mural de fotos.
- **PRs #117 e #119** mergeadas em 22/09: ilustração about-us no acervo.
- **PR #120** mergeada em 29/09: galeria em duas faixas contínuas (12 fotos, sem tags), H1 “Um hub de iniciativas para iniciantes”, ilustração da hero, timeline só amarela, closing “Continuamos” + CTA Faça parte, menu Comunidade com Sobre no topo.
- **PR #118** fechada sem merge: a ilustração já estava na #120; mergear depois reverteria a página.
- **PRs #109, #111 e #116** não foram mergeadas sozinhas: as três editavam este arquivo e se sobrescreveriam. O conteúdo delas está neste registro.

### Voluntários vs parceiros (29 set)
- O card “UX Metrics” na lista de voluntários vinha de `public.guia_volunteers`, não de `💪 Quem organiza`. Era a página de Parceiros, ingerida por engano em 10/09.
- Registro desativado no Supabase. UX Metrics segue ativo em `public.partners`.
- Webhook de voluntários ignora páginas sem a propriedade `Frentes`. Collector Parceiros continua sendo a fonte de `/parcerias` (Status Ativo + Logo, coleta diária ~8h).

### SEO, OG e 404 (17 set)
- **PR #110** — catálogo de SEO, canonical, sitemap, prerender e 301s do Super.
- **PR #112** — capa OG de `/oportunidades`.
- **PR #114** — página 404 com ilustração da chuva; rotas desconhecidas não voltam mais para a home.

### Integração 16 set
- **PR #106 mergeada:** collector InHire para páginas públicas de vagas (Alice, BRQ, Contabilizei, Neoway, Quero Educação/Qeevo, Sympla, V4 Company, Vitru), com filtro de títulos de Design.
- **PR #107 mergeada:** Guilda com dois planos (mensal e anual), tag de economia e FAQ da contribuição de R$10 nas mentorias.

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

### Voluntários (09 set)
- A integração `Voluntários do site` foi conectada à fonte `💪 Quem organiza` e sua assinatura oficial do Notion está verificada.
- O workflow `Receber eventos do Notion — voluntários` está ativo: cria e atualiza a projeção `public.guia_volunteers` no Supabase e desativa pessoas removidas.
- A tabela pública recebeu o backfill das 19 pessoas atuais. A página passa a usar essa fonte, sem depender de novo deploy para mudanças de nome, frentes ou redes sociais; fotos, emojis e relatos de perfil continuam no código.
- Validação concluída: um evento `page.properties_updated` alterou Marianna Piacesi e a frente `Site` foi registrada no Supabase.
- A fonte agora também oferece `Bio` e `Rapidinhas`; o webhook registra os dois campos e usa o emoji do ícone de cada página no Notion.
- A propriedade `Foto` agora é copiada para o bucket público `volunteer-photos` no Supabase. A imagem de Aline Carvalho foi validada com a URL permanente gerada pelo fluxo.
- Diagnóstico do backfill de fotos: oito sincronizações concluíram e gravaram no Storage. A falha foi o ID incorreto de Tatiana Barbosa (`6f5d308c-32a4-4f4e-a3ac-e51124dffc2c`); o ID existente é `6f5d308c-b32a-4f4e-a3ac-e51124dffc2c`. O Notion respondeu `404` antes da chamada à Edge Function.

### Mentoria (09 set)
- A rota `/mentoria` foi criada a partir da página de referência, com instruções de contribuição, agendamento, preparação e lista de pessoas mentoras.
- O menu `Comunidade aberta` agora abre o topo de `/comunidade`.
- A página inclui formulário de solicitação com comprovante, contexto e vínculo ao mentor selecionado.
- O bucket privado `mentorship-proofs`, a Edge Function e o workflow de solicitações estão publicados e validados ponta a ponta.
- A página também inclui candidatura para pessoa mentora. O workflow `Receber candidaturas de mentoria` cria a entrada como `Recebida` na fila privada do Notion.
- A página e seus dois formulários foram integrados à produção em 10/09. A variável do webhook de candidatura está configurada em Preview e Production na Vercel.
- Os formulários foram movidos para as rotas individuais `/mentoria/mentorado` e `/mentoria/pessoa-mentora`, ambas com breadcrumb de retorno.
- A página principal agora usa dois cards de jornada: a solicitação destacada após o pagamento e a candidatura de pessoa mentora.
- A jornada principal agora começa pela escolha da pessoa mentora e identifica mentores, comprovante e formulário em três etapas numeradas.
- A organização dos formulários e cards de Mentoria foi integrada em 10/09.

---

## Próximo passo esperado

1. Na quinta ou sexta (9 ou 10 out), criar os dois TXT de verificação no Cloudflare e confirmar o domínio na Vercel. Não alterar o MX do Google. Conferir se o www deixa de apontar para o site antigo.
2. Quando alguém assinar a Guilda paga, conferir se o cargo entra na conta certa do Discord.
3. Criar a página de publicar relato.

---

## PRs / branches em aberto

| Item | Status |
|------|--------|
| [PR #135 — escrita só com a chave de serviço](https://github.com/mahpiacesi/vagasux/pull/135) | ✅ Mergeada em 05/10 |
| [PR #133 — prévia do anúncio nas vagas](https://github.com/mahpiacesi/vagasux/pull/133) | Rascunho. Não mergear antes do domínio novo |
| [PR #134 — MCP do Cloudflare](https://github.com/mahpiacesi/vagasux/pull/134) | Rascunho. Autorizar a conta no próximo agente |
| [PR #131 — aviso de privacidade](https://github.com/mahpiacesi/vagasux/pull/131) | ✅ Mergeada em 02/10 |
| [PR #129 — página /cookies e navegação dos termos](https://github.com/mahpiacesi/vagasux/pull/129) | ✅ Mergeada em 02/10 |
| [PR #127 — página de cookies](https://github.com/mahpiacesi/vagasux/pull/127) | ✅ Mergeada em 01/10. Substituída pela #129 |
| [PR #124 — menu mobile em tela cheia](https://github.com/mahpiacesi/vagasux/pull/124) | ✅ Mergeada em 01/10, com a #125 |
| [PR #125 — scroll e plano anual da Guilda](https://github.com/mahpiacesi/vagasux/pull/125) | ✅ Mergeada em 01/10 na branch do menu |
| [PR #122 — sala da Guilda no Discord](https://github.com/mahpiacesi/vagasux/pull/122) | ✅ Mergeada em 30/09 |
| [PR #120 — galeria e updates do Sobre](https://github.com/mahpiacesi/vagasux/pull/120) | ✅ Mergeada em 29/09 |
| [PR #118 — ilustração da hero](https://github.com/mahpiacesi/vagasux/pull/118) | Fechada; conteúdo já na #120 |
| [PR #115 — página Sobre](https://github.com/mahpiacesi/vagasux/pull/115) | ✅ Mergeada em 18/09 |
| [PR #114 — página 404](https://github.com/mahpiacesi/vagasux/pull/114) | ✅ Mergeada em 17/09 |
| [PR #112 — OG oportunidades](https://github.com/mahpiacesi/vagasux/pull/112) | ✅ Mergeada em 17/09 |
| [PR #110 — catálogo SEO](https://github.com/mahpiacesi/vagasux/pull/110) | ✅ Mergeada em 17/09 |
| [PR #107 — planos da Guilda](https://github.com/mahpiacesi/vagasux/pull/107) | ✅ Mergeada em 16/09 |
| [PR #106 — collector InHire](https://github.com/mahpiacesi/vagasux/pull/106) | ✅ Mergeada em 16/09 |
| [PR #105 — mentores dinâmicos](https://github.com/mahpiacesi/vagasux/pull/105) | ✅ Integrada em `main` em 15/09 |
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
| [PR #100 — sincronização de voluntários](https://github.com/mahpiacesi/vagasux/pull/100) | ✅ Integrada em `main` em 09/09 |
| [PR #101 — perfis de voluntários](https://github.com/mahpiacesi/vagasux/pull/101) | ✅ Integrada em `main` em 09/09 |
| [PR #102 — fotos de voluntários](https://github.com/mahpiacesi/vagasux/pull/102) | ✅ Integrada em `main` em 09/09 |
| [PR #103 — página Mentoria](https://github.com/mahpiacesi/vagasux/pull/103) | ✅ Integrada em `main` em 10/09 |
| [PR #104 — formulários de Mentoria](https://github.com/mahpiacesi/vagasux/pull/104) | ✅ Integrada em `main` em 10/09 |
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
