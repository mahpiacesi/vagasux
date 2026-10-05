-- The browser anon key must not write jobs or partners.
-- Collectors call these functions with the service role.

revoke execute on function public.deactivate_all_partners() from public, anon, authenticated;
revoke execute on function public.rls_auto_enable() from public, anon, authenticated;
revoke execute on function public.upsert_collector_jobs_batch(jsonb) from public, anon, authenticated;
revoke execute on function public.upsert_collector_job(
  text,
  text,
  text,
  text,
  text,
  text,
  text,
  timestamp with time zone,
  text
) from public, anon, authenticated;
revoke execute on function public.upsert_partner(text, text, text, text, text) from public, anon, authenticated;

grant execute on function public.deactivate_all_partners() to service_role;
grant execute on function public.rls_auto_enable() to service_role;
grant execute on function public.upsert_collector_jobs_batch(jsonb) to service_role;
grant execute on function public.upsert_collector_job(
  text,
  text,
  text,
  text,
  text,
  text,
  text,
  timestamp with time zone,
  text
) to service_role;
grant execute on function public.upsert_partner(text, text, text, text, text) to service_role;
