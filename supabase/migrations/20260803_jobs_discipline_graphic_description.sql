-- Graphic description focus beats product when scope is not exclusive UI/UX.
-- Fixes hybrid areas (Product Design / Visual Design) and social/print-heavy roles.

CREATE EXTENSION IF NOT EXISTS unaccent;

UPDATE public.jobs AS j
SET discipline = 'visual_graphic'
WHERE j.status = 'published'
  AND j.discipline = 'product_design'
  AND (
    (
      unaccent(lower(left(coalesce(j.description, ''), 4000))) ~
      '(redes sociais|social media|instagram|stories|reels|tiktok|facebook ads|google ads|midia paga|performance|crm|e-mail marketing|email marketing|material grafico|pecas graficas|comunicacao visual|identidade visual|branding|impresso|print|folder|banner|flyer|catalogo|packaging|embalagem|campanha publicitaria|marketing digital|materiais de marketing)'
      AND NOT (
        unaccent(lower(coalesce(j.title, '') || ' ' || coalesce(j.area, '') || ' ' || coalesce(j.role, ''))) ~
        '(product designer|product design|design de produto|designer de produto|ux/ui|ui/ux|design system|design de experiencia digital)'
        AND unaccent(lower(coalesce(j.title, '') || ' ' || coalesce(j.area, '') || ' ' || coalesce(j.role, ''))) !~
        '(visual|graphic|grafico|brand|marketing|comunicacao|social)'
        AND NOT (
          unaccent(lower(coalesce(j.area, ''))) ~ 'product'
          AND unaccent(lower(coalesce(j.area, ''))) ~ 'visual|graphic|grafico|brand|marketing|comunicacao'
        )
      )
    )
    OR (
      unaccent(lower(coalesce(j.area, ''))) ~ 'product'
      AND unaccent(lower(coalesce(j.area, ''))) ~ 'visual|graphic|grafico|brand|marketing|comunicacao'
    )
    OR (
      unaccent(lower(coalesce(j.title, '') || ' ' || coalesce(j.role, ''))) ~ 'grafico|graphic|visual|brand|marketing|comunicacao'
      AND unaccent(lower(coalesce(j.title, '') || ' ' || coalesce(j.area, '') || ' ' || coalesce(j.role, ''))) ~ 'product'
    )
  );
