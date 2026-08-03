-- Fix graphic/visual jobs misclassified as design_ops (e.g. Graphic Designer + Visual/Graphic Design area).

UPDATE public.jobs
SET discipline = 'visual_graphic'
WHERE status = 'published'
  AND discipline = 'design_ops'
  AND (
    unaccent(lower(coalesce(title, ''))) ~ 'graphic|grafico|visual|branding'
    OR unaccent(lower(coalesce(role, ''))) ~ 'graphic|grafico|visual|branding'
    OR unaccent(lower(coalesce(area, ''))) ~ 'graphic|visual|grafico'
  );
