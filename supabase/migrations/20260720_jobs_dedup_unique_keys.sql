-- Dedup for public.jobs
-- Applied remotely as: jobs_dedup_unique_keys
--
-- Natural key: (source, source_job_id)
-- Secondary: unique url
-- Also adds updated_at for sync visibility on upserts.

ALTER TABLE public.jobs
  ALTER COLUMN source SET NOT NULL,
  ALTER COLUMN source_job_id SET NOT NULL,
  ALTER COLUMN url SET NOT NULL,
  ALTER COLUMN title SET NOT NULL,
  ALTER COLUMN company SET NOT NULL;

ALTER TABLE public.jobs
  ADD CONSTRAINT jobs_source_source_job_id_key UNIQUE (source, source_job_id);

ALTER TABLE public.jobs
  ADD CONSTRAINT jobs_url_key UNIQUE (url);

CREATE INDEX IF NOT EXISTS jobs_source_idx ON public.jobs (source);
CREATE INDEX IF NOT EXISTS jobs_captured_at_idx ON public.jobs (captured_at DESC);

ALTER TABLE public.jobs
  ADD COLUMN IF NOT EXISTS updated_at timestamptz NOT NULL DEFAULT now();

CREATE OR REPLACE FUNCTION public.set_jobs_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at := now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_jobs_set_updated_at ON public.jobs;
CREATE TRIGGER trg_jobs_set_updated_at
  BEFORE UPDATE ON public.jobs
  FOR EACH ROW
  EXECUTE FUNCTION public.set_jobs_updated_at();
