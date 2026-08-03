-- Strict Content Design: headline/area only (not description UX Writing on product roles).

UPDATE public.jobs AS j
SET discipline = classified.discipline
FROM (
  SELECT
    id,
    CASE
      WHEN h ~ '(content design|content designer|ux writing|ux writer|design de conteudo|redator ux|redator de ux|technical writer|writer ux|designer conversacional|conversational designer|conversation designer|design conversacional|chatbot designer|designer de conversacao|content strategist|estrategista de conteudo|copywriter ux|ux copywriter)'
        AND h !~ '(product design|product designer|design de produto|designer de produto|design de produtos|coordenador.*design de produto)'
        THEN 'content_design'
      WHEN a ~ '(ux writing|content design|content writing|design de conteudo|conversational design|design conversacional)'
        THEN 'content_design'
      WHEN h ~ '(product design|product designer|design de produto|designer de produto|design de produtos|coordenador.*design de produto)'
        THEN 'product_design'
      WHEN a ~ 'product'
        THEN 'product_design'
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
      AND discipline = 'content_design'
  ) src
) classified
WHERE j.id = classified.id
  AND j.status = 'published'
  AND classified.discipline <> 'content_design';
