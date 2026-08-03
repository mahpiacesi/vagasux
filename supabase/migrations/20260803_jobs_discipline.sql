-- Normalized job discipline for mural filters (cargo / área).

ALTER TABLE public.jobs
  ADD COLUMN IF NOT EXISTS discipline text;

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

CREATE INDEX IF NOT EXISTS jobs_discipline_published_idx
  ON public.jobs (discipline)
  WHERE status = 'published';

-- Backfill published jobs from title + area + role heuristics.
UPDATE public.jobs
SET discipline = CASE
  WHEN lower(
    coalesce(title, '') || ' ' || coalesce(area, '') || ' ' || coalesce(role, '')
  ) ~ '(user research|ux research|pesquisa com usu|ux researcher|design researcher|research designer|pesquisador)'
    THEN 'ux_research'
  WHEN lower(
    coalesce(title, '') || ' ' || coalesce(area, '') || ' ' || coalesce(role, '')
  ) ~ '(content design|ux writing|ux writer|content designer|design de conteudo|redator ux)'
    THEN 'content_design'
  WHEN lower(
    coalesce(title, '') || ' ' || coalesce(area, '') || ' ' || coalesce(role, '')
  ) ~ '(design ops|design operations|designops)'
    THEN 'design_ops'
  WHEN lower(
    coalesce(title, '') || ' ' || coalesce(area, '') || ' ' || coalesce(role, '')
  ) ~ '(motion designer|motion design|animador ui|ui animation|animacao ui|lottie)'
    THEN 'motion'
  WHEN lower(
    coalesce(title, '') || ' ' || coalesce(area, '') || ' ' || coalesce(role, '')
  ) ~ '(designer grafico|design grafico|graphic designer|visual designer|branding designer|designer visual|diretor de arte|design editorial|identidade visual)'
    THEN 'visual_graphic'
  WHEN lower(
    coalesce(title, '') || ' ' || coalesce(area, '') || ' ' || coalesce(role, '')
  ) ~ '(ui designer|designer de interface|designer ui|ui design)'
    AND lower(
      coalesce(title, '') || ' ' || coalesce(area, '') || ' ' || coalesce(role, '')
    ) !~ '(ux/ui|ui/ux|product design|product designer)'
    THEN 'ui'
  WHEN lower(
    coalesce(title, '') || ' ' || coalesce(area, '') || ' ' || coalesce(role, '')
  ) ~ '(ux designer|designer de experiencia|user experience designer|ux design)'
    AND lower(
      coalesce(title, '') || ' ' || coalesce(area, '') || ' ' || coalesce(role, '')
    ) !~ '(ux/ui|ui/ux|product design|product designer)'
    THEN 'ux'
  WHEN lower(
    coalesce(title, '') || ' ' || coalesce(area, '') || ' ' || coalesce(role, '')
  ) ~ '(product design|product designer|ux/ui|ui/ux|design de produto|designer de produto)'
    THEN 'product_design'
  ELSE 'product_design'
END
WHERE discipline IS NULL
  AND status = 'published';
