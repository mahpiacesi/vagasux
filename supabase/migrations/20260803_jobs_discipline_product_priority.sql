-- Product > graphic for hybrid/ambiguous areas (VagasUX UX focus).
-- Keeps clearly graphic jobs (title/role gráfico, pure graphic area) in visual_graphic.

UPDATE public.jobs AS j
SET discipline = 'product_design'
WHERE j.status = 'published'
  AND j.discipline = 'visual_graphic'
  AND unaccent(lower(coalesce(j.area, ''))) ~ 'product'
  AND unaccent(lower(coalesce(j.area, ''))) ~ 'visual|graphic|grafico|brand|marketing|comunicacao'
  AND unaccent(lower(coalesce(j.title, ''))) !~ 'grafico|graphic|visual|brand|marketing|comunicacao|social'
  AND unaccent(lower(coalesce(j.role, ''))) !~ 'grafico|graphic|visual|brand|marketing|comunicacao|social';

-- Ambiguous generic designer without graphic headline → product (VagasUX default)
UPDATE public.jobs AS j
SET discipline = 'product_design'
WHERE j.status = 'published'
  AND j.discipline = 'visual_graphic'
  AND unaccent(lower(coalesce(j.title, '') || ' ' || coalesce(j.role, ''))) ~ 'designer'
  AND unaccent(lower(coalesce(j.title, '') || ' ' || coalesce(j.role, ''))) !~ 'grafico|graphic|visual|brand|marketing|comunicacao|social|product'
  AND unaccent(lower(coalesce(j.area, ''))) !~ 'graphic|visual|grafico|brand|marketing|comunicacao'
  AND NOT (
    unaccent(lower(left(coalesce(j.description, ''), 4000))) ~
    '(redes sociais|social media|instagram|stories|reels|material grafico|pecas graficas|comunicacao visual|identidade visual|branding|campanha publicitaria|marketing digital|materiais de marketing)'
    AND unaccent(lower(coalesce(j.title, ''))) ~ 'designer'
    AND unaccent(lower(coalesce(j.title, ''))) !~ 'product|ux|ui'
  );
