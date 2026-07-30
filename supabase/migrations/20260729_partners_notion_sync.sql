-- Partners synced from Notion database 6ef3390c137d4e9c9d9a7863f2ada4a6

create table if not exists public.partners (
  id uuid primary key default gen_random_uuid(),
  notion_page_id text not null,
  slug text not null,
  name text not null,
  logo_url text,
  site_url text,
  is_active boolean not null default true,
  synced_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint partners_notion_page_id_key unique (notion_page_id),
  constraint partners_slug_key unique (slug)
);

create index if not exists partners_active_name_idx
  on public.partners (name)
  where is_active = true;

alter table public.partners enable row level security;

revoke insert, update, delete on table public.partners from anon, authenticated;
grant select on table public.partners to anon, authenticated;

drop policy if exists "Public can read active partners" on public.partners;
create policy "Public can read active partners"
  on public.partners
  for select
  to anon, authenticated
  using (is_active = true);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'partner-logos',
  'partner-logos',
  true,
  5242880,
  array['image/svg+xml', 'image/png', 'image/jpeg', 'image/webp', 'image/gif']
)
on conflict (id) do update
set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Public read partner logos" on storage.objects;
create policy "Public read partner logos"
  on storage.objects
  for select
  to anon, authenticated
  using (bucket_id = 'partner-logos');

create or replace function public.upsert_partner(
  p_notion_page_id text,
  p_slug text,
  p_name text,
  p_logo_url text default null,
  p_site_url text default null
) returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_row public.partners;
begin
  if p_notion_page_id is null or btrim(p_notion_page_id) = '' then
    raise exception 'notion_page_id is required';
  end if;
  if p_slug is null or btrim(p_slug) = '' then
    raise exception 'slug is required';
  end if;
  if p_name is null or btrim(p_name) = '' then
    raise exception 'name is required';
  end if;

  insert into public.partners (
    notion_page_id,
    slug,
    name,
    logo_url,
    site_url,
    is_active,
    synced_at,
    updated_at
  )
  values (
    btrim(p_notion_page_id),
    btrim(p_slug),
    btrim(p_name),
    nullif(btrim(p_logo_url), ''),
    nullif(btrim(p_site_url), ''),
    true,
    now(),
    now()
  )
  on conflict (notion_page_id) do update
  set
    slug = excluded.slug,
    name = excluded.name,
    logo_url = coalesce(excluded.logo_url, public.partners.logo_url),
    site_url = excluded.site_url,
    is_active = true,
    synced_at = now(),
    updated_at = now()
  returning * into v_row;

  return jsonb_build_object('action', 'upserted', 'partner', to_jsonb(v_row));
end;
$$;

create or replace function public.deactivate_all_partners()
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_count integer;
begin
  update public.partners
  set
    is_active = false,
    updated_at = now()
  where is_active = true;

  get diagnostics v_count = row_count;

  return jsonb_build_object('deactivated', v_count);
end;
$$;

create or replace function public.deactivate_partners_except(
  p_notion_page_ids text[]
) returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_count integer;
begin
  update public.partners
  set
    is_active = false,
    updated_at = now()
  where is_active = true
    and not (notion_page_id = any (coalesce(p_notion_page_ids, array[]::text[])));

  get diagnostics v_count = row_count;

  return jsonb_build_object('deactivated', v_count);
end;
$$;

revoke all on function public.upsert_partner(text, text, text, text, text) from public;
revoke all on function public.deactivate_all_partners() from public;
revoke all on function public.deactivate_partners_except(text[]) from public;
grant execute on function public.upsert_partner(text, text, text, text, text) to service_role;
grant execute on function public.deactivate_all_partners() to service_role;
grant execute on function public.deactivate_partners_except(text[]) to service_role;
