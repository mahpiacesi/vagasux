-- Job lifecycle status machine
-- raw → enriched → published → expired
-- Applied remotely as: jobs_status_machine

UPDATE public.jobs
SET status = 'raw'
WHERE status IS NULL OR status = 'draft';

ALTER TABLE public.jobs
  ALTER COLUMN status SET DEFAULT 'raw',
  ALTER COLUMN status SET NOT NULL;

ALTER TABLE public.jobs
  DROP CONSTRAINT IF EXISTS jobs_status_check;

ALTER TABLE public.jobs
  ADD CONSTRAINT jobs_status_check
  CHECK (status IN ('raw', 'enriched', 'published', 'expired'));

CREATE INDEX IF NOT EXISTS jobs_status_idx ON public.jobs (status);
CREATE INDEX IF NOT EXISTS jobs_status_captured_at_idx ON public.jobs (status, captured_at DESC);

COMMENT ON COLUMN public.jobs.status IS
  'Lifecycle: raw (collected) → enriched (AI done) → published (visible) → expired (no longer active)';
