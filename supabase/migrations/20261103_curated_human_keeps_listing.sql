-- Human curation stays on the iniciantes list.
-- A matching collector row is reused (no second card) and marked for a badge.
-- Closed links stay expired. Enrichment no longer expires curated rows.

alter table public.jobs
  add column if not exists curated boolean not null default false,
  add column if not exists also_on_board boolean not null default false,
  add column if not exists merged_into uuid references public.jobs (id) on delete set null;

comment on column public.jobs.curated is
  'True when a volunteer added this opening to Vagas para iniciantes.';
comment on column public.jobs.also_on_board is
  'True when the same opening also exists in a general collector. The curated list shows a badge.';
comment on column public.jobs.merged_into is
  'Set on the extra curated row when a collector row is the one we keep.';

create index if not exists jobs_curated_published_idx
  on public.jobs (published_at desc)
  where curated and status = 'published' and merged_into is null;

create or replace function public.extract_gupy_job_id(p_url text)
returns text
language plpgsql
immutable
as $$
declare
  v_num text;
  v_token text;
  v_payload jsonb;
begin
  if p_url is null or btrim(p_url) = '' then
    return null;
  end if;

  v_num := substring(p_url from 'gupy\.io/jobs/([0-9]+)');
  if v_num is null then
    v_num := substring(p_url from 'gupy\.io/[^/]+/jobs/([0-9]+)');
  end if;
  if v_num is not null then
    return v_num;
  end if;

  v_token := substring(p_url from 'gupy\.io/job/([^/?#]+)');
  if v_token is null then
    return null;
  end if;

  begin
    v_payload := convert_from(decode(v_token, 'base64'), 'utf8')::jsonb;
    return nullif(v_payload->>'jobId', '');
  exception when others then
    return null;
  end;
end;
$$;

revoke all on function public.extract_gupy_job_id(text) from public, anon, authenticated;

create or replace function public.upsert_collector_job(
  p_source text,
  p_source_job_id text,
  p_company text,
  p_title text,
  p_description text,
  p_url text,
  p_location text default null,
  p_published_at timestamptz default null,
  p_work_model text default null
) returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_row public.jobs;
  v_gupy_id text;
  v_url text := nullif(btrim(p_url), '');
  v_work_model text := nullif(btrim(p_work_model), '');
  v_from_curation boolean := btrim(p_source) = 'VagasUX';
begin
  if p_source is null or btrim(p_source) = '' then
    raise exception 'source is required';
  end if;
  if p_source_job_id is null or btrim(p_source_job_id) = '' then
    raise exception 'source_job_id is required';
  end if;
  if p_company is null or btrim(p_company) = '' then
    raise exception 'company is required';
  end if;
  if p_title is null or btrim(p_title) = '' then
    raise exception 'title is required';
  end if;
  if v_url is null then
    raise exception 'url is required';
  end if;

  if v_work_model is not null and v_work_model not in ('remote', 'hybrid', 'onsite', 'unknown') then
    raise exception 'invalid work_model: %', v_work_model;
  end if;

  v_gupy_id := public.extract_gupy_job_id(v_url);

  if v_from_curation and v_gupy_id is not null then
    select * into v_row
    from public.jobs
    where source = 'Gupy'
      and source_job_id = v_gupy_id
    order by (status = 'published') desc, captured_at desc
    limit 1;

    if found and v_row.status = 'published' then
      update public.jobs
      set
        curated = true,
        also_on_board = true,
        updated_at = now()
      where id = v_row.id
      returning * into v_row;

      update public.jobs
      set
        merged_into = v_row.id,
        updated_at = now()
      where source = 'VagasUX'
        and source_job_id = btrim(p_source_job_id)
        and id <> v_row.id
        and merged_into is distinct from v_row.id;

      return jsonb_build_object(
        'action', 'curated_existing',
        'job', to_jsonb(v_row)
      );
    end if;
  end if;

  select * into v_row
  from public.jobs
  where url = v_url
  limit 1;

  if found then
    if v_from_curation and v_row.source <> 'VagasUX' then
      if v_row.status = 'published' then
        update public.jobs
        set
          curated = true,
          also_on_board = true,
          updated_at = now()
        where id = v_row.id
        returning * into v_row;

        update public.jobs
        set
          merged_into = v_row.id,
          updated_at = now()
        where source = 'VagasUX'
          and source_job_id = btrim(p_source_job_id)
          and id <> v_row.id;
      else
        update public.jobs
        set
          curated = true,
          updated_at = now()
        where id = v_row.id
        returning * into v_row;
      end if;

      return jsonb_build_object(
        'action', 'curated_existing',
        'job', to_jsonb(v_row)
      );
    end if;

    if v_row.source = 'VagasUX' and not v_from_curation then
      update public.jobs
      set
        updated_at = now(),
        title = coalesce(nullif(btrim(p_title), ''), title),
        company = coalesce(nullif(btrim(p_company), ''), company),
        description = coalesce(p_description, description),
        location = coalesce(p_location, location),
        published_at = coalesce(p_published_at, published_at),
        work_model = coalesce(v_work_model, work_model),
        curated = true,
        also_on_board = true
      where id = v_row.id
      returning * into v_row;

      return jsonb_build_object(
        'action', 'curated_existing',
        'job', to_jsonb(v_row)
      );
    end if;

    update public.jobs
    set
      updated_at = now(),
      title = coalesce(nullif(btrim(p_title), ''), title),
      company = coalesce(nullif(btrim(p_company), ''), company),
      description = coalesce(p_description, description),
      location = coalesce(p_location, location),
      published_at = coalesce(p_published_at, published_at),
      work_model = coalesce(v_work_model, work_model),
      curated = curated or v_from_curation
    where id = v_row.id
    returning * into v_row;

    return jsonb_build_object(
      'action', 'updated_by_url',
      'job', to_jsonb(v_row)
    );
  end if;

  insert into public.jobs as j (
    source,
    source_job_id,
    company,
    title,
    description,
    url,
    location,
    published_at,
    work_model,
    curated
  ) values (
    btrim(p_source),
    btrim(p_source_job_id),
    btrim(p_company),
    btrim(p_title),
    p_description,
    v_url,
    p_location,
    p_published_at,
    v_work_model,
    v_from_curation
  )
  on conflict (source, source_job_id) do update set
    company = excluded.company,
    title = excluded.title,
    description = excluded.description,
    url = excluded.url,
    location = excluded.location,
    published_at = coalesce(excluded.published_at, j.published_at),
    work_model = coalesce(excluded.work_model, j.work_model),
    curated = j.curated or excluded.curated,
    updated_at = now()
  returning * into v_row;

  return jsonb_build_object(
    'action', 'upserted',
    'job', to_jsonb(v_row)
  );
end;
$$;

revoke all on function public.upsert_collector_job(text, text, text, text, text, text, text, timestamptz, text) from public;
grant execute on function public.upsert_collector_job(text, text, text, text, text, text, text, timestamptz, text) to service_role;

update public.jobs
set curated = true
where source = 'VagasUX'
  and curated = false;

update public.jobs as keeper
set
  curated = true,
  also_on_board = true
from public.jobs as extra
where extra.source = 'VagasUX'
  and keeper.source = 'Gupy'
  and keeper.source_job_id = public.extract_gupy_job_id(extra.url)
  and keeper.status = 'published'
  and extra.id <> keeper.id;

update public.jobs as extra
set merged_into = keeper.id
from public.jobs as keeper
where extra.source = 'VagasUX'
  and keeper.source = 'Gupy'
  and keeper.source_job_id = public.extract_gupy_job_id(extra.url)
  and keeper.status = 'published'
  and extra.id <> keeper.id
  and extra.merged_into is distinct from keeper.id;

-- These two were expired by the design guard. Their links still open.
-- C6 stays expired: the Greenhouse link now answers that the opening is gone.
update public.jobs
set
  status = 'published',
  curated = true
where source = 'VagasUX'
  and status = 'expired'
  and merged_into is null
  and (
    url like '%juntossomosmais.inhire.app/vagas/493bac90%'
    or url like '%bertuzzi.vagas.solides.com.br/vaga/935678%'
  );

-- The old collector skipped these because a Gupy row already existed,
-- so there is no VagasUX sibling for the join above.
update public.jobs
set
  curated = true,
  also_on_board = true
where source = 'Gupy'
  and status = 'published'
  and source_job_id in ('12612764', '12441927');
