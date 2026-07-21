-- Public mural: anon/authenticated may only read published jobs.
-- Writers (collectors/enrichment) use service_role, which bypasses RLS.

revoke insert, update, delete on table public.jobs from anon, authenticated;
grant select on table public.jobs to anon, authenticated;

drop policy if exists "Public can read published jobs" on public.jobs;
create policy "Public can read published jobs"
  on public.jobs
  for select
  to anon, authenticated
  using (status = 'published');
