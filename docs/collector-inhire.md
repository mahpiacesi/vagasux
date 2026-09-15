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

O primeiro tenant configurado é `contabilizei`, escolhido porque possui uma
vaga pública recente de Product Designer. Para incluir outro tenant, substitua
o valor de `TENANT` em `tools/n8n/collector-inhire.workflow.ts` e nos headers
dos dois nós HTTP do workflow `Collector InHire`.

O endpoint público não exige token, mas exige o slug que aparece antes de
`.inhire.app` como valor de `X-Tenant`.
