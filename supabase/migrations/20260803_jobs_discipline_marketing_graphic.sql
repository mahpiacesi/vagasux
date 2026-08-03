-- Marketing / publicitário designers → visual_graphic (not generalist UX).

UPDATE public.jobs AS j
SET discipline = 'visual_graphic'
FROM (
  SELECT id
  FROM public.jobs
  WHERE status = 'published'
    AND discipline IN ('product_design', 'ux')
    AND unaccent(lower(coalesce(title, '') || ' ' || coalesce(area, '') || ' ' || coalesce(role, ''))) ~
      '(publicitario|designer publicitario|designer, publicitario|designer de marketing|designer de comunicacao|design de marketing|agencia de marketing.*designer|(marketing|comunicacao).*designer|designer.*(marketing|comunicacao))'
    AND unaccent(lower(coalesce(title, '') || ' ' || coalesce(area, '') || ' ' || coalesce(role, ''))) !~
      '(product design|product designer|design de produto|designer de produto|ux\/ui|ui\/ux|ux designer|ui designer|product ux)'
) src
WHERE j.id = src.id
  AND j.discipline IS DISTINCT FROM 'visual_graphic';
