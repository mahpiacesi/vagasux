-- Batch wrapper for collector upserts (VagasUX curadoria and similar).
-- Processes each job in a single RPC call; individual failures are captured
-- instead of aborting the whole batch.

create or replace function public.upsert_collector_jobs_batch(p_jobs jsonb)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_job jsonb;
  v_result jsonb;
  v_results jsonb := '[]'::jsonb;
  v_errors jsonb := '[]'::jsonb;
  v_idx int := 0;
  v_ok int := 0;
  v_fail int := 0;
begin
  if p_jobs is null or jsonb_typeof(p_jobs) <> 'array' then
    raise exception 'p_jobs must be a JSON array';
  end if;

  if jsonb_array_length(p_jobs) = 0 then
    return jsonb_build_object(
      'total', 0,
      'ok', 0,
      'failed', 0,
      'results', '[]'::jsonb,
      'errors', '[]'::jsonb
    );
  end if;

  for v_job in
    select value
    from jsonb_array_elements(p_jobs)
  loop
    v_idx := v_idx + 1;

    begin
      v_result := public.upsert_collector_job(
        p_source => v_job->>'source',
        p_source_job_id => v_job->>'source_job_id',
        p_company => v_job->>'company',
        p_title => v_job->>'title',
        p_description => v_job->>'description',
        p_url => v_job->>'url',
        p_location => v_job->>'location',
        p_published_at => nullif(v_job->>'published_at', '')::timestamptz,
        p_work_model => v_job->>'work_model'
      );

      v_results := v_results || jsonb_build_array(
        jsonb_build_object(
          'index', v_idx,
          'source_job_id', v_job->>'source_job_id',
          'action', v_result->>'action'
        )
      );
      v_ok := v_ok + 1;
    exception
      when others then
        v_errors := v_errors || jsonb_build_array(
          jsonb_build_object(
            'index', v_idx,
            'source_job_id', v_job->>'source_job_id',
            'error', SQLERRM
          )
        );
        v_fail := v_fail + 1;
    end;
  end loop;

  return jsonb_build_object(
    'total', v_idx,
    'ok', v_ok,
    'failed', v_fail,
    'results', v_results,
    'errors', v_errors
  );
end;
$$;

revoke all on function public.upsert_collector_jobs_batch(jsonb) from public;
grant execute on function public.upsert_collector_jobs_batch(jsonb) to service_role;
