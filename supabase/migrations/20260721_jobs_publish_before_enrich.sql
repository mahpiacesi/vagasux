-- Cold start: show collected jobs on the mural immediately.
-- AI enrichment refines (and may expire non-design) later.

alter table public.jobs
  alter column status set default 'published';

update public.jobs
set status = 'published'
where status = 'raw';
