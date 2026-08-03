-- Reclassify discipline for all published jobs (accent-safe text, description-aware heuristics).
-- Removes reliance on legacy `other` bucket.

CREATE EXTENSION IF NOT EXISTS unaccent;

UPDATE public.jobs AS j
SET discipline = classified.discipline
FROM (
  SELECT
    id,
    CASE
      WHEN t ~ '(user research|ux research|pesquisa com usu|ux researcher|design researcher|research designer|pesquisador)'
        THEN 'ux_research'
      WHEN t ~ '(content design|ux writing|ux writer|content designer|design de conteudo|redator ux|technical writer)'
        THEN 'content_design'
      WHEN t ~ '(design ops|design operations|designops|design program manager)'
        THEN 'design_ops'
      WHEN t ~ '(motion designer|motion design|animador ui|ui animation|animacao ui|lottie|micro-?interac)'
        THEN 'motion'
      WHEN t ~ '(designer grafico|design grafico|graphic designer|visual designer|branding designer|designer visual|diretor de arte|design editorial|identidade visual|visual/graphic|brand design|marketing design|design de marketing|design digital|digital design|web design|design web|comunicacao visual|social media design|design para midias|performance design|editor de video|video editor|videomaker|audiovisual|edicao de video|producao audiovisual)'
        THEN 'visual_graphic'
      WHEN t ~ '(ui designer|designer de interface|designer ui|ui design|interface designer)'
        AND t !~ '(ux/ui|ui/ux|product design|product designer)'
        THEN 'ui'
      WHEN t ~ '(ux designer|designer de experiencia|user experience designer|ux design|service design|design de servico|instructional design|design instrucional|learning design)'
        AND t !~ '(ux/ui|ui/ux|product design|product designer)'
        THEN 'ux'
      WHEN t ~ '(product design|product designer|ux/ui|ui/ux|design de produto|designer de produto|product ux|\mdesigner\M|\mdesign\M)'
        AND t !~ '(interior|industrial|moda|fashion|som|sound|acustico|paisag|lighting)'
        THEN 'product_design'
      ELSE 'product_design'
    END AS discipline
  FROM (
    SELECT
      id,
      unaccent(lower(
        coalesce(title, '') || ' ' ||
        coalesce(area, '') || ' ' ||
        coalesce(role, '') || ' ' ||
        left(coalesce(description, ''), 4000)
      )) AS t
    FROM public.jobs
    WHERE status = 'published'
  ) src
) classified
WHERE j.id = classified.id
  AND j.status = 'published';

ALTER TABLE public.jobs
  DROP CONSTRAINT IF EXISTS jobs_discipline_check;

ALTER TABLE public.jobs
  ADD CONSTRAINT jobs_discipline_check
  CHECK (
    discipline IS NULL
    OR discipline IN (
      'product_design',
      'ux',
      'ui',
      'ux_research',
      'content_design',
      'design_ops',
      'visual_graphic',
      'motion'
    )
  );
