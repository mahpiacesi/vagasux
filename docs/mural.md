# Mural (leitura pública)

O site lê **apenas** vagas `status = 'published'` no Supabase.

## Cold start: publicar antes da IA

Para o mural não ficar vazio enquanto o Gemini processa o backlog:

1. Vagas **coletadas entram como `published`** (default no banco)
2. A IA roda **depois**, em lote: preenche summary/tags e pode **expirar** o que não for design
3. Até a IA passar, o card mostra título/empresa/local da coleta (sem `ai_summary`)

Assim o mural já tem volume; a qualidade melhora com o tempo.

## Segurança

- RLS ativo em `public.jobs`
- Política: `anon` / `authenticated` só fazem `SELECT` onde `status = 'published'`
- Collectors e Enrichment usam `service_role` (bypass RLS)
- Migrations:
  - `20260721_jobs_public_read_published.sql`
  - `20260721_jobs_publish_before_enrich.sql`

## App

- Pasta: `web/`
- Stack: Vite + React + TypeScript + Tailwind (tokens da marca)
- Produção: https://vagasux.vercel.app/
- Cliente: `@supabase/supabase-js` com chave **anon** / publishable

### Env local

```bash
cd web
cp .env.example .env.local
# preencha VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY
npm install
npm run dev
```

## Query do mural

```sql
select
  id, title, company, location, url, source,
  seniority, work_model, employment_type,
  is_international, area, role, discipline,
  ai_summary, skills, tools,
  published_at, captured_at
from public.jobs
where status = 'published'
order by published_at desc nulls last, captured_at desc;
```

## Filtros

Além da busca por texto, o mural oferece pills para **Mercado**, **Formato**, **Estado** (Brasil), **Nível** e **Cargo**.

O filtro **Cargo** usa a coluna normalizada `discipline` (enum no banco). Valores:

`product_design`, `ux`, `ui`, `ux_research`, `content_design`, `design_ops`, `visual_graphic`, `motion`, `other`

Labels na UI: Product Design, UX, UI, Pesquisa, Content Design, Design Ops, Gráfico, Motion. (`other` não aparece como pill; entra no backfill/heurística.)

Implementação: `web/src/lib/discipline.ts`, `web/src/lib/filterJobs.ts`, migration `20260803_jobs_discipline.sql`.

## Badges no card

Cada vaga pode mostrar:

- **Nova** — capturada nos últimos 3 dias
- **Remota / Híbrida / Presencial** — quando `work_model` estiver preenchido
- **Internacional** — quando `is_international = true`
- **Fonte** — Gupy, Remotar, Greenhouse, etc. (`source`)
- **Cargo** — label de `discipline` (ex.: Product Design, UX, Gráfico)
- Data **Capturada em** no rodapé do item
