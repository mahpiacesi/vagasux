-- Expire specific jobs by primary key (used by link-health checks in n8n).
CREATE OR REPLACE FUNCTION public.expire_jobs_by_ids(p_job_ids uuid[])
RETURNS integer
LANGUAGE plpgsql
AS $$
DECLARE
  affected integer;
BEGIN
  IF p_job_ids IS NULL OR array_length(p_job_ids, 1) IS NULL THEN
    RETURN 0;
  END IF;

  UPDATE public.jobs
  SET status = 'expired',
      updated_at = now()
  WHERE id = ANY (p_job_ids)
    AND status IN ('raw', 'enriched', 'published');

  GET DIAGNOSTICS affected = ROW_COUNT;
  RETURN affected;
END;
$$;

COMMENT ON FUNCTION public.expire_jobs_by_ids(uuid[]) IS
  'Marks jobs as expired by id list. Used when link health checks detect 404/410 or unreachable URLs.';

GRANT EXECUTE ON FUNCTION public.expire_jobs_by_ids(uuid[]) TO service_role;
REVOKE EXECUTE ON FUNCTION public.expire_jobs_by_ids(uuid[]) FROM PUBLIC, anon, authenticated;
