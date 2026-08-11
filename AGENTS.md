# Guia: previews de links

Ao adicionar ou migrar um link que usa `GuiaLinkPreviewCard`, inclua a URL
exata em `web/api/link-preview.ts` (`allowedUrls`) na mesma alteração.

Isso permite que o endpoint de preview descubra `og:image`, `twitter:image`
ou use o unfurl no backend. Sem a allowlist, o card não recebe a thumbnail
em preview ou produção.
