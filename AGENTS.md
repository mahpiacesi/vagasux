# Guia: previews de links

Ao adicionar ou migrar um link que usa `GuiaLinkPreviewCard`, inclua a URL
exata em `web/api/link-preview.ts` (`allowedUrls`) na mesma alteração.

Isso permite que o endpoint de preview descubra `og:image`, `twitter:image`
ou use o unfurl no backend. Sem a allowlist, o card não recebe a thumbnail
em preview ou produção.

## Guia: índice de busca

Ao criar, migrar ou alterar conteúdo em qualquer rota ou curadoria sob
`/guia/...`, inclua os textos pesquisáveis no índice
`web/src/data/guiaSearchIndex.ts` na mesma alteração.

Indexe título, descrições, contexto e destino navegável. A busca precisa
encontrar conteúdos do Guia antes que a alteração seja considerada concluída.
