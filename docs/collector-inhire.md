# Collector InHire

O collector consulta a API pública da InHire e envia ao Supabase somente vagas
relacionadas a Design, UX, UI e Pesquisa.

## Fluxo

1. `GET /job-posts/public/pages` lista as vagas publicadas da página de
   carreira do tenant, usando o header obrigatório `X-Tenant`.
2. Para cada vaga publicada, `GET /job-posts/public/pages/{jobId}` busca os
   detalhes usados no mural: título, descrição, localização, modelo de trabalho
   e data de publicação.
3. O workflow normaliza texto HTML, filtra vagas não relacionadas a Design e
   faz upsert pelo RPC `upsert_collector_jobs_batch`.

O identificador salvo é composto por tenant e vaga
(`contabilizei:{jobId}`), evitando colisões entre empresas da plataforma.

## Tenant de validação

Os tenants configurados são `contabilizei` e `queroeducacao`; ambos possuem
vagas públicas recentes relacionadas a Design. Para incluir outro tenant,
adicione seu slug à lista `TENANTS` e associe o nome retornado pela API no mapa
`tenantsByName` em `tools/n8n/collector-inhire.workflow.ts`.

O endpoint público não exige token, mas exige o slug que aparece antes de
`.inhire.app` como valor de `X-Tenant`.
