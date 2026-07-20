# VagasUX

Repositório do projeto **VagasUX** — comunidade e produto para conectar pessoas a oportunidades com foco em experiência, clareza e inclusão.

## Documentação

- [design.md](docs/design.md) — diretrizes de marca e design
- [frontend-ui.md](docs/frontend-ui.md) — notas de interface
- [dedup.md](docs/dedup.md) — evitar vagas duplicadas (Supabase + upsert nos collectors)

## Banco (Supabase)

Migrations versionadas em [`supabase/migrations/`](supabase/migrations/).

Dedup ativo em `jobs`: chave única `(source, source_job_id)` + `url` única.

## Ferramenta: export do carrossel (Instagram)

Gera **8 PNGs** (1080×1350) e um **PDF** (`carousel-vagasux.pdf`) para posts no Instagram, com tipografia Lato, ícones outline e ilustrações Storyset recoloridas para a marca.

### Pré-requisitos

- [Node.js](https://nodejs.org/) (LTS)
- Microsoft Edge (headless para screenshots), ou defina `EDGE_PATH`

### Comandos (na raiz do repositório)

```bash
npm install
npm run fetch:storyset    # opcional: baixar/atualizar SVGs do Storyset
npm run export:carousel   # gera tools/carousel/out/01.png … 08.png e carousel-vagasux.pdf
```

Se o Edge não estiver no caminho padrão:

```bash
set EDGE_PATH=C:\Caminho\Para\msedge.exe
npm run export:carousel
```

Detalhes da ferramenta: [tools/carousel/README.md](tools/carousel/README.md).

## Estrutura

```
docs/              # design e UI
tools/carousel/    # exportador do carrossel (assets, scripts, out/)
```
