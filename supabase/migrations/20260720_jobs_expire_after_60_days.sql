-- Expire jobs older than 60 days (from published_at, else captured_at)
-- Applied remotely as: jobs_expire_after_60_days
--
-- Usage:
--   select public.expire_stale_jobs();      -- default 60 days
--   select public.expire_stale_jobs(60);

CREATE OR REPLACE FUNCTION public.expire_stale_jobs(max_age_days integer DEFAULT 60)
RETURNS integer
LANGUAGE plpgsql
AS $$
DECLARE
  affected integer;
BEGIN
  IF max_age_days IS NULL OR max_age_days < 1 THEN
    RAISE EXCEPTION 'max_age_days must be >= 1';
  END IF;

  UPDATE public.jobs
  SET status = 'expired'
  WHERE status IN ('raw', 'enriched', 'published')
    AND coalesce(published_at, captured_at) < (now() - make_interval(days => max_age_days));

  GET DIAGNOSTICS affected = ROW_COUNT;
  RETURN affected;
END;
$$;

COMMENT ON FUNCTION public.expire_stale_jobs(integer) IS
  'Marks jobs as expired when coalesce(published_at, captured_at) is older than max_age_days (default 60). Returns how many rows were updated.';

-- Only the service role (n8n / backend) should expire jobs
GRANT EXECUTE ON FUNCTION public.expire_stale_jobs(integer) TO service_role;
REVOKE EXECUTE ON FUNCTION public.expire_stale_jobs(integer) FROM PUBLIC, anon, authenticated;
