# Mural (leitura pública)

O site lê **apenas** vagas `status = 'published'` no Supabase.

## Segurança

- RLS ativo em `public.jobs`
- Política: `anon` / `authenticated` só fazem `SELECT` onde `status = 'published'`
- Collectors e Enrichment usam `service_role` (bypass RLS)
- Migration: `supabase/migrations/20260721_jobs_public_read_published.sql`

## App

- Pasta: `web/`
- Stack: Vite + React + TypeScript + Tailwind (tokens da marca)
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
  id, title, company, location, url,
  seniority, work_model, employment_type,
  is_international, area, role,
  ai_summary, skills, tools,
  published_at, captured_at
from public.jobs
where status = 'published'
order by published_at desc nulls last, captured_at desc;
```
