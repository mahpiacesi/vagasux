-- AI enrichment fields for jobs (step 3)
-- Applied remotely as: jobs_ai_enrichment_fields

ALTER TABLE public.jobs
  ADD COLUMN IF NOT EXISTS is_design_job boolean,
  ADD COLUMN IF NOT EXISTS is_international boolean,
  ADD COLUMN IF NOT EXISTS ai_confidence numeric(4,3),
  ADD COLUMN IF NOT EXISTS area text,
  ADD COLUMN IF NOT EXISTS role text,
  ADD COLUMN IF NOT EXISTS seniority text,
  ADD COLUMN IF NOT EXISTS work_model text,
  ADD COLUMN IF NOT EXISTS employment_type text,
  ADD COLUMN IF NOT EXISTS skills text[] NOT NULL DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS tools text[] NOT NULL DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS portfolio_required boolean,
  ADD COLUMN IF NOT EXISTS ai_summary text,
  ADD COLUMN IF NOT EXISTS ai_reason text,
  ADD COLUMN IF NOT EXISTS enriched_at timestamptz,
  ADD COLUMN IF NOT EXISTS content_hash text;

ALTER TABLE public.jobs
  DROP CONSTRAINT IF EXISTS jobs_seniority_check,
  DROP CONSTRAINT IF EXISTS jobs_work_model_check,
  DROP CONSTRAINT IF EXISTS jobs_employment_type_check,
  DROP CONSTRAINT IF EXISTS jobs_ai_confidence_check;

ALTER TABLE public.jobs
  ADD CONSTRAINT jobs_seniority_check
    CHECK (seniority IS NULL OR seniority IN ('intern','junior','mid','senior','lead','unknown')),
  ADD CONSTRAINT jobs_work_model_check
    CHECK (work_model IS NULL OR work_model IN ('remote','hybrid','onsite','unknown')),
  ADD CONSTRAINT jobs_employment_type_check
    CHECK (employment_type IS NULL OR employment_type IN ('clt','pj','freelance','internship','unknown')),
  ADD CONSTRAINT jobs_ai_confidence_check
    CHECK (ai_confidence IS NULL OR (ai_confidence >= 0 AND ai_confidence <= 1));

CREATE INDEX IF NOT EXISTS jobs_enrichment_queue_idx
  ON public.jobs (captured_at ASC)
  WHERE status = 'raw';

CREATE INDEX IF NOT EXISTS jobs_is_international_idx
  ON public.jobs (is_international)
  WHERE status = 'published';

CREATE INDEX IF NOT EXISTS jobs_content_hash_idx
  ON public.jobs (content_hash)
  WHERE content_hash IS NOT NULL;

COMMENT ON COLUMN public.jobs.is_international IS
  'True when the role is international / primarily English-speaking market';
COMMENT ON COLUMN public.jobs.ai_summary IS
  'Card summary: English when is_international, PT-BR otherwise';
COMMENT ON COLUMN public.jobs.content_hash IS
  'Hash of title+description to skip re-enrichment when content unchanged';
