-- Graphic headline patterns + description-driven reclass; fix InfoJobs title-only UX false positives.

CREATE EXTENSION IF NOT EXISTS unaccent;

UPDATE public.jobs AS j
SET discipline = 'visual_graphic'
WHERE j.status = 'published'
  AND j.discipline IN ('product_design', 'ux')
  AND (
    unaccent(lower(coalesce(j.title, ''))) ~ '(producao grafica|designer de producao|web designer|arte finalista|estagiario de designer|estagio de designer|estagiario designer|estagio designer|assistente de designer|designer (junior|jr|pleno|pl|senior|sr|júnior|sênior)$)'
    OR (
      unaccent(lower(coalesce(j.title, '') || ' ' || coalesce(j.area, '') || ' ' || coalesce(j.role, '')))
        !~ '(product design|product designer|ux/ui|ui/ux|ux designer|ui designer|design de produto|designer de produto|designer de produtos|design de moveis|designer de moveis|sobrancelh|unha|micropigment)'
      AND unaccent(lower(coalesce(j.title, ''))) ~ '(^designer(\s|$|-)|estagiario.*design|estagio.*design|web designer|producao grafica|arte finalista|assistente de designer|analista de designer|designer de comunicacao|comunicacao visual)'
    )
    OR (
      length(coalesce(j.description, '')) > 80
      AND unaccent(lower(left(coalesce(j.description, ''), 4000))) ~ '(redes sociais|social media|instagram|stories|reels|material grafico|pecas graficas|comunicacao visual|identidade visual|branding|campanha publicitaria|marketing digital|materiais de marketing|midia paga|meta ads|google ads|folder|banner|flyer|catalogo|packaging|embalagem|impresso|print|diretor de arte|arte finalista|producao grafica)'
      AND unaccent(lower(coalesce(j.title, '') || ' ' || coalesce(j.area, '') || ' ' || coalesce(j.role, '')))
        !~ '(product design|product designer|ux/ui|ui/ux|ux designer|ui designer|design de produto|designer de produto|product ux|design system|ux researcher|content designer|ux writer)'
    )
  );
