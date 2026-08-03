-- UX/UI hybrids → generalist UX; strict research; strip Infojobs verified badge from company.

-- Remove Infojobs verification badge text from company (and description when present).
UPDATE public.jobs
SET company = trim(regexp_replace(
  company,
  '\s*Este selo indica que a empresa foi verificada pelo Infojobs\.?\s*(Saiba o que isso significa\.?\s*)?$',
  '',
  'i'
))
WHERE company ~* 'Este selo indica que a empresa foi verificada pelo Infojobs';

UPDATE public.jobs
SET description = trim(regexp_replace(
  description,
  '\s*Este selo indica que a empresa foi verificada pelo Infojobs\.?\s*(Saiba o que isso significa\.?\s*)?$',
  '',
  'i'
))
WHERE description ~* 'Este selo indica que a empresa foi verificada pelo Infojobs';

-- Reclassify published jobs with strict discipline rules (headline-only heuristics).
UPDATE public.jobs AS j
SET discipline = classified.discipline
FROM (
  SELECT
    id,
    CASE
      WHEN h ~ '(ux researcher|ux research|user researcher|user research|design researcher|research designer|pesquisador ux|pesquisador de ux|pesquisa com usu|pesquisa de usu|cx researcher|customer experience researcher|head of ux research|research lead|research ops|design research lead|coordenador de pesquisa ux|analista de pesquisa ux)'
        AND h !~ '(product design|product designer|design de produto|designer de produto|designer grafico|design grafico|graphic designer)'
        THEN 'ux_research'
      WHEN a ~ '(ux research|user research|design research|research ops|pesquisa ux|pesquisa de experiencia)'
        AND h !~ '(product design|product designer|design de produto|designer de produto|designer grafico|graphic designer)'
        THEN 'ux_research'
      WHEN h ~ '(\| ui\b|\(\s*ui\s*\)|[-–]\s*ui\s*$|ui designer|designer ui|designer de interface|interface designer|designer de ui)'
        AND h !~ '(ux\/ui|ui\/ux|ux ui|ui ux|ux designer|designer ux|product design|product designer)'
        THEN 'ui'
      WHEN h ~ '(ux\/ui|ui\/ux|ux ui|ui ux|estagiario.*ux\/ui|estagio.*ux\/ui|ux\/ui designer|designer ux\/ui)'
        AND h !~ '(\| ui\b|forte foco em ui|foco em ui|foco principal em ui)'
        THEN 'product_design'
      WHEN h ~ '(product design|product designer|design de produto|designer de produto|ux designer|designer ux|designer de ux|ux\/ui|ui\/ux)'
        THEN 'product_design'
      WHEN a ~ 'product'
        THEN 'product_design'
      WHEN h ~ '(designer grafico|design grafico|graphic designer|visual designer|branding designer)'
        THEN 'visual_graphic'
      ELSE discipline
    END AS discipline
  FROM (
    SELECT
      id,
      discipline,
      unaccent(lower(coalesce(area, ''))) AS a,
      unaccent(lower(
        coalesce(title, '') || ' ' ||
        coalesce(area, '') || ' ' ||
        coalesce(role, '')
      )) AS h
    FROM public.jobs
    WHERE status = 'published'
      AND discipline IN ('ui', 'ux_research', 'ux')
  ) src
) classified
WHERE j.id = classified.id
  AND j.status = 'published'
  AND classified.discipline IS DISTINCT FROM j.discipline;
