-- Strict motion classification: headline-only motion signals, product before graphic.
-- Reclassifies published jobs after false positives (promotional, description-only motion, etc.).

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
      WHEN a ~ 'research|pesquisa'
        THEN 'ux_research'
      WHEN a ~ 'content|writing'
        THEN 'content_design'
      WHEN a ~ 'ops|operations'
        THEN 'design_ops'
      WHEN a ~ 'product'
        THEN 'product_design'
      WHEN a ~ 'motion design|motion designer'
        AND h ~ '(motion designer|motion design|animador ui|ui animation|animacao ui|lottie)'
        AND NOT (
          a ~ 'visual|graphic|brand|marketing|comunicacao'
          AND a !~ 'motion design|motion designer'
          AND title_n !~ 'motion designer'
          AND role_n !~ 'motion designer'
        )
        THEN 'motion'
      WHEN a ~ 'graphic|visual|brand|marketing|comunicacao|performance|crm'
        THEN 'visual_graphic'
      WHEN a ~ 'interface|^ui|/ui'
        THEN 'ui'
      WHEN a ~ 'experience|service|instructional|learning|ux|cx'
        AND a !~ 'visual|graphic'
        THEN 'ux'
      WHEN h ~ '(motion designer|motion design|animador ui|ui animation|animacao ui|lottie)'
        AND NOT (
          a ~ 'visual|graphic|brand|marketing|comunicacao'
          AND a !~ 'motion design|motion designer'
          AND title_n !~ 'motion designer'
          AND role_n !~ 'motion designer'
        )
        THEN 'motion'
      WHEN h ~ '(product design|product designer|ux/ui|ui/ux|design de produto|designer de produto|product ux|design system|design de experiencia digital)'
        THEN 'product_design'
      WHEN h ~ '(designer grafico|design grafico|graphic designer|visual designer|branding designer|designer visual|diretor de arte|design editorial|identidade visual|visual/graphic|brand design|marketing design|design de marketing|design digital|digital design|web design|design web|comunicacao visual|social media|redes sociais|design para midias|performance design|design criativo|designer criativo|designer digital|estagiario de design|estagio em design|material grafico|pecas graficas|midia digital|design de comunicacao|design de conteudo criativo)'
        THEN 'visual_graphic'
      WHEN t ~ '(redes sociais|social media|instagram|stories|reels|tiktok|facebook ads|google ads|midia paga|performance|crm|e-mail marketing|email marketing|material grafico|pecas graficas|comunicacao visual|identidade visual|branding|impresso|print|folder|banner|flyer|catalogo|packaging|embalagem|campanha publicitaria|marketing digital|materiais de marketing)'
        AND h !~ '(product design|product designer|ux/ui|ui/ux|design de produto|designer de produto|product ux|design system|design de experiencia digital)'
        THEN 'visual_graphic'
      WHEN h ~ '(ui designer|designer de interface|designer ui|ui design|interface designer)'
        AND h !~ '(ux/ui|ui/ux|product design|product designer)'
        THEN 'ui'
      WHEN h ~ '(ux designer|designer de experiencia|user experience designer|ux design|service design|design de servico|instructional design|design instrucional|learning design|ux-ui|ux ui|ui-ux|ui ux)'
        AND h !~ '(ux/ui|ui/ux|product design|product designer)'
        THEN 'ux'
      WHEN role_n ~ 'product'
        AND role_n !~ 'visual|graphic|marketing'
        THEN 'product_design'
      WHEN role_n ~ 'grafico|graphic|visual|brand|marketing|digital|web|criativo|comunicacao'
        THEN 'visual_graphic'
      WHEN role_n ~ 'motion designer|motion design'
        THEN 'motion'
      WHEN t ~ '(editor de video|editor de videos|video editor|videomaker|audiovisual|edicao de video|producao audiovisual)'
        AND h !~ '(motion designer|motion design|animador ui|ui animation|animacao ui|lottie)'
        THEN 'visual_graphic'
      WHEN t ~ '(designer|design )'
        AND t !~ '(interior|industrial|moda|fashion|som|sound|acustico|paisag|lighting)'
        THEN 'visual_graphic'
      ELSE 'visual_graphic'
    END AS discipline
  FROM (
    SELECT
      id,
      unaccent(lower(coalesce(title, ''))) AS title_n,
      unaccent(lower(coalesce(role, ''))) AS role_n,
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
