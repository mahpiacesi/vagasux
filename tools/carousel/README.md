# Export do carrossel (1080Ã—1350)

Este pacote gera automaticamente **8 imagens PNG** do carrossel do Instagram para a VagasUX, mantendo:
- estilo editorial moderno
- alto contraste
- tipografia Lato
- Ã­cones outline rounded (inline SVG)

## IlustraÃ§Ãµes Storyset

O carrossel usa ilustraÃ§Ãµes do [Storyset](https://storyset.com/) (estilo **Cuate**, com fallback **Pana**):

- **Fundos claros:** destaque **#5D6BF6** (Brand-300)
- **Fundos azuis (capa e CTA):** destaque **#F6D16E** (Complementary-300)

Para baixar/atualizar as ilustraÃ§Ãµes:

```bash
npm run fetch:storyset   # na raiz do repo
```

Arquivos em `assets/storyset/01.svg` â€¦ `08.svg`.

**AtribuiÃ§Ã£o (licenÃ§a Freepik/Storyset):** inclua na legenda do post algo como:  
*IlustraÃ§Ãµes por [Storyset](https://storyset.com/)*

## Como exportar

No terminal, dentro da pasta do projeto:

```bash
npm run fetch:storyset   # na raiz do repo
npm run export:carousel   # na raiz do repo
```

Os arquivos serÃ£o gerados em `out/`:
- `out/01.png` … `out/08.png`
- `out/carousel-vagasux.pdf`

### Se o Edge nÃ£o estiver no caminho padrÃ£o

Por padrÃ£o o script usa:
`C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`

Se precisar, rode assim:

```bash
set EDGE_PATH=C:\CAMINHO\PARA\msedge.exe
npm run export:carousel   # na raiz do repo
```

## Ajustes rÃ¡pidos de copy

Edite o arquivo `export-carousel.mjs` e rode o comando de exportaÃ§Ã£o de novo.


