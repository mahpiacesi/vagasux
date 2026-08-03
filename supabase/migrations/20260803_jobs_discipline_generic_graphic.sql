-- Generic Designer + graphic role headlines → visual_graphic (strict UX filter).
-- InfoJobs often lists title-only with no description; plain "Designer" is graphic, not product UX.

CREATE EXTENSION IF NOT EXISTS unaccent;

UPDATE public.jobs AS j
SET discipline = 'visual_graphic'
WHERE j.status = 'published'
  AND j.discipline IN ('product_design', 'ux')
  AND unaccent(lower(coalesce(j.title, ''))) ~ '(^designer(\s|$|-)|midia designer|designer de midia|designer midia|designer de conteudo|designer multimidia|designer mult midia|designer de marketing|designer de comunicacao|designer publicitario|publicitario)'
  AND unaccent(lower(coalesce(j.title, '') || ' ' || coalesce(j.area, '') || ' ' || coalesce(j.role, '')))
    !~ '(product design|product designer|ux/ui|ui/ux|ux designer|ui designer|design de produto|designer de produto|product ux|design system)';
