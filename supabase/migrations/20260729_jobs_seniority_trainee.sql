-- Allow trainee as a distinct seniority level (curadoria + enrichment).

ALTER TABLE public.jobs
  DROP CONSTRAINT IF EXISTS jobs_seniority_check;

ALTER TABLE public.jobs
  ADD CONSTRAINT jobs_seniority_check
    CHECK (seniority IS NULL OR seniority IN (
      'intern',
      'trainee',
      'junior',
      'mid',
      'senior',
      'lead',
      'unknown'
    ));
