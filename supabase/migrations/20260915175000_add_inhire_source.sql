insert into public.sources (name, type, enabled, priority, base_url)
values ('InHire', 'api', true, 7, 'https://api.inhire.app')
on conflict do nothing;
