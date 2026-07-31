-- Fix Sólides portal base URL (jobs.solides.com.br is inactive; public portal is vagas.solides.com.br)
update public.sources
set base_url = 'https://vagas.solides.com.br'
where name = 'Sólides';
