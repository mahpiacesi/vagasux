-- Correct discipline reclassification: headline-only (title + area + role), matching discipline.ts.
-- Fixes inflated UI from description "foco em ui" and UX/UI hybrids wrongly in Pesquisa.

UPDATE public.jobs AS j
SET discipline = classified.discipline
FROM (
  SELECT
    id,
    CASE
      WHEN h ~ '(ux researcher|ux research|user researcher|user research|design researcher|research designer|pesquisador ux|pesquisador de ux|pesquisa com usu|pesquisa de usu|cx researcher|customer experience researcher|head of ux research|research lead|research ops|design research lead|coordenador de pesquisa ux|analista de pesquisa ux)'
        AND h !~ '(product design|product designer|design de produto|designer de produto|designer grafico|design grafico|graphic designer|ux\/ui|ui\/ux|ux ui|ui ux)'
        THEN 'ux_research'
      WHEN a ~ '(ux research|user research|design research|research ops|pesquisa ux|pesquisa de experiencia)'
        AND h !~ '(product design|product designer|design de produto|designer de produto|designer grafico|graphic designer|ux\/ui|ui\/ux)'
        THEN 'ux_research'
      WHEN h ~ '(\| ui\b|\(\s*ui\s*\)|[-–]\s*ui\s*$)'
        THEN 'ui'
      WHEN h ~ '(ui designer|designer ui|designer de interface|interface designer|designer de ui)'
        AND h !~ '(ux\/ui|ui\/ux|ux ui|ui ux|ux designer|designer ux|designer de ux|product design|product designer)'
        THEN 'ui'
      WHEN a ~ '(^ui design$|^interface design$|\bui design\b)'
        AND a !~ 'ux'
        THEN 'ui'
      WHEN h ~ '(ux\/ui|ui\/ux|ux ui|ui ux|estagiario.*ux\/ui|estagio.*ux\/ui|ux\/ui designer|designer ux\/ui)'
        AND h !~ '(\| ui\b|forte foco em ui|foco em ui|foco principal em ui)'
        THEN 'product_design'
      WHEN h ~ '(product design|product designer|design de produto|designer de produto|ux designer|designer ux|designer de ux|user experience designer|ux design|service design|design de servico)'
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
      AND discipline IN ('ui', 'ux_research', 'ux', 'product_design')
  ) src
) classified
WHERE j.id = classified.id
  AND j.status = 'published'
  AND classified.discipline IS DISTINCT FROM j.discipline;

-- Product Designer with explicit UI focus in description (e.g. SR Product Designer | UI).
UPDATE public.jobs
SET discipline = 'ui'
WHERE status = 'published'
  AND discipline = 'product_design'
  AND unaccent(lower(coalesce(title, '') || ' ' || coalesce(role, ''))) ~
    '(product designer|product design|designer de produto|design de produto)'
  AND unaccent(lower(left(coalesce(description, ''), 4000))) ~
    '(forte foco em ui|foco em ui|foco principal em ui|olhar apurado para ui|primary focus on ui|strong ui focus)'
  AND unaccent(lower(coalesce(title, '') || ' ' || coalesce(role, ''))) !~ '(ux\/ui|ui\/ux)';
