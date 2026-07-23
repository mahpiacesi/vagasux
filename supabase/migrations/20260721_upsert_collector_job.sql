-- Cross-source collector upsert: skip/merge when URL or Gupy job id already exists.
-- Used by Remotar (and future collectors) to avoid duplicates with Gupy/Sólides/etc.

create or replace function public.upsert_collector_job(
  p_source text,
  p_source_job_id text,
  p_company text,
  p_title text,
  p_description text,
  p_url text,
  p_location text default null,
  p_published_at timestamptz default null
) returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_row public.jobs;
  v_gupy_id text;
  v_token text;
  v_payload jsonb;
  v_url text := nullif(btrim(p_url), '');
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

  -- Gupy board links encode {"jobId":...} in a base64 path segment.
  if v_url ~* 'gupy\.io/job/' then
    begin
      v_token := split_part(split_part(regexp_replace(v_url, '^.*gupy\.io/job/', ''), '?', 1), '/', 1);
      v_payload := convert_from(decode(v_token, 'base64'), 'utf8')::jsonb;
      v_gupy_id := nullif(v_payload->>'jobId', '');
    exception when others then
      v_gupy_id := null;
    end;

    if v_gupy_id is not null then
      select * into v_row
      from public.jobs
      where source = 'Gupy' and source_job_id = v_gupy_id
      limit 1;

      if found then
        update public.jobs
        set updated_at = now()
        where id = v_row.id
        returning * into v_row;

        return jsonb_build_object(
          'action', 'skipped_gupy_overlap',
          'job', to_jsonb(v_row)
        );
      end if;
    end if;
  end if;

  -- Same apply/listing URL already stored from another collector.
  select * into v_row
  from public.jobs
  where url = v_url
  limit 1;

  if found then
    update public.jobs
    set
      updated_at = now(),
      title = coalesce(nullif(btrim(p_title), ''), title),
      company = coalesce(nullif(btrim(p_company), ''), company),
      description = coalesce(p_description, description),
      location = coalesce(p_location, location),
      published_at = coalesce(p_published_at, published_at)
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
    published_at
  ) values (
    btrim(p_source),
    btrim(p_source_job_id),
    btrim(p_company),
    btrim(p_title),
    p_description,
    v_url,
    p_location,
    p_published_at
  )
  on conflict (source, source_job_id) do update set
    company = excluded.company,
    title = excluded.title,
    description = excluded.description,
    url = excluded.url,
    location = excluded.location,
    published_at = coalesce(excluded.published_at, j.published_at),
    updated_at = now()
  returning * into v_row;

  return jsonb_build_object(
    'action', 'upserted',
    'job', to_jsonb(v_row)
  );
end;
$$;

revoke all on function public.upsert_collector_job(text, text, text, text, text, text, text, timestamptz) from public;
grant execute on function public.upsert_collector_job(text, text, text, text, text, text, text, timestamptz) to service_role;
