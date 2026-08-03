-- Strip InfoJobs verified-company badge text (global, any position in company/description).

UPDATE public.jobs
SET company = trim(regexp_replace(
  company,
  '\s*Este selo indica que a empresa foi verificada pelo Infojobs[^.]*\.?\s*(Saiba o que isso significa\.?\s*)?',
  '',
  'gi'
))
WHERE company ~* 'Este selo indica que a empresa foi verificada pelo Infojobs';

UPDATE public.jobs
SET description = trim(regexp_replace(
  description,
  '\s*Este selo indica que a empresa foi verificada pelo Infojobs[^.]*\.?\s*(Saiba o que isso significa\.?\s*)?',
  '',
  'gi'
))
WHERE description ~* 'Este selo indica que a empresa foi verificada pelo Infojobs';
