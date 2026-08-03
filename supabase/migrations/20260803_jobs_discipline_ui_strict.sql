-- Strict UI bucket, expanded ops/strategy, generic Designer → visual_graphic.

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
      WHEN t ~ '(design ops|design operations|designops|design program manager|design strategist|strategic designer|design strategy|estrategista de design|head of design|director of design|design director|chief design officer|design operations manager|design operation specialist|design program lead|design excellence|design governance|design maturity)'
        THEN 'design_ops'
      WHEN a ~ 'research|pesquisa'
        THEN 'ux_research'
      WHEN a ~ 'content|writing'
        THEN 'content_design'
      WHEN a ~ 'ops|operations|strategy|strategic|program' AND a ~ 'design'
        THEN 'design_ops'
      WHEN a ~ 'product'
        THEN 'product_design'
      WHEN a ~ 'motion design|motion designer'
        AND h ~ '(motion designer|motion design|animador ui|ui animation|animacao ui|lottie)'
        THEN 'motion'
      WHEN a ~ 'graphic|visual|grafico|brand|marketing|comunicacao|performance|crm|artes graficas'
        THEN 'visual_graphic'
      WHEN a ~ 'ux/ui|ui/ux'
        THEN CASE
          WHEN h ~ '(ui designer|designer de interface|designer ui|ui design|interface designer|designer de ui)' AND h !~ 'ux designer|designer ux|designer de ux|ux design'
            THEN 'ui'
          WHEN h ~ '(ux designer|designer de experiencia|user experience designer|ux design|service design|designer ux|designer de ux)' AND h !~ 'ui designer|designer ui'
            THEN 'ux'
          ELSE 'product_design'
        END
      WHEN h ~ '(ui designer|designer de interface|designer ui|ui design|interface designer|designer de ui)'
        AND h !~ '(ux/ui|ui/ux|ux designer|ux design|designer ux|product design|product designer)'
        THEN 'ui'
      WHEN h ~ '(ux designer|designer de experiencia|user experience designer|ux design|service design|design de servico|designer ux|designer de ux|ux-ui|ux ui|ui-ux|ui ux)'
        AND h !~ '(ux/ui|ui/ux|product design|product designer|ui designer|designer ui)'
        THEN 'ux'
      WHEN h ~ '(motion designer|motion design|animador ui|ui animation|animacao ui|lottie)'
        THEN 'motion'
      WHEN h ~ '(product design|product designer|ux/ui|ui/ux|design de produto|designer de produto|product ux|design system|design de experiencia digital)'
        THEN 'product_design'
      WHEN h ~ '(designer grafico|design grafico|graphic designer|visual designer|branding designer|designer visual|diretor de arte|design editorial|identidade visual|visual/graphic|brand design|marketing design|design de marketing|design digital|digital design|web design|design web|comunicacao visual|social media|redes sociais|design para midias|performance design|design criativo|designer criativo|designer digital|artes graficas|analista em artes)'
        THEN 'visual_graphic'
      WHEN t ~ '(redes sociais|social media|instagram|stories|reels|material grafico|pecas graficas|comunicacao visual|identidade visual|branding|campanha publicitaria|marketing digital|materiais de marketing)'
        AND h !~ '(product designer|product design|ux/ui|ui/ux)'
        THEN 'visual_graphic'
      WHEN title_n ~ '^designer( |-|$)' AND title_n !~ 'product|ux|ui'
        THEN 'visual_graphic'
      WHEN t ~ '(editor de video|editor de videos|video editor|videomaker|audiovisual|edicao de video|producao audiovisual)'
        AND h !~ '(motion designer|motion design)'
        THEN 'visual_graphic'
      WHEN t ~ '(designer|design )'
        AND t !~ '(interior|industrial|moda|fashion|som|sound|acustico|paisag|lighting)'
        THEN 'product_design'
      ELSE 'product_design'
    END AS discipline
  FROM (
    SELECT
      id,
      unaccent(lower(coalesce(title, ''))) AS title_n,
      unaccent(lower(coalesce(area, ''))) AS a,
      unaccent(lower(
        coalesce(title, '') || ' ' ||
        coalesce(area, '') || ' ' ||
        coalesce(role, '')
      )) AS h,
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
