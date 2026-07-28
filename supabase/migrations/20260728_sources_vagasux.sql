-- Register VagasUX curated jobs source (Notion → Supabase pipeline).
-- Applied remotely as: sources_vagasux

insert into public.sources (name, type, enabled, priority, base_url)
values ('VagasUX', 'manual', true, 6, 'https://www.notion.so')
on conflict do nothing;
