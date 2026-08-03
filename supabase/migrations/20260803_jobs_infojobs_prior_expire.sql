-- InfoJobs ambiguous → visual_graphic; expire non-design career false positives.

CREATE EXTENSION IF NOT EXISTS unaccent;

-- Remove CAD/engineering/beauty/industrial listings mistaken for UX/product design.
UPDATE public.jobs
SET status = 'expired'
WHERE status = 'published'
  AND (
    unaccent(lower(coalesce(title, '') || ' ' || coalesce(area, '') || ' ' || coalesce(role, '') || ' ' || left(coalesce(description, ''), 4000)))
      ~ '(product design lead engineer|design lead engineer|design engineer|engenheiro de design|engenharia mecanica|engenharia de materiais|graduacao em arquitetura|formacao em arquitetura|bacharelado em arquitetura|siemens nx|\(nx\)|nx cad|catia|solidworks|inventor|creo|pro engineer|projetista e designer|projetista|designer de produtos industrial|design de produtos industrial|design de moveis|designer de moveis|design industrial|desenvolvedor.*front.?end|front.?end.*desenvolvedor|desenvolvedor.* ui|sobrancelh|designer de sobrancelh|depilador|micropigment|consultora de beleza|designer de unha|manicure|barbeir)'
  );

-- InfoJobs: ambiguous product_design → visual_graphic (source prior), keep explicit UX/product.
UPDATE public.jobs AS j
SET discipline = 'visual_graphic'
WHERE j.status = 'published'
  AND j.source = 'InfoJobs'
  AND j.discipline IN ('product_design', 'ux')
  AND unaccent(lower(coalesce(j.title, '') || ' ' || coalesce(j.area, '') || ' ' || coalesce(j.role, '')))
    !~ '(product design|product designer|ux/ui|ui/ux|ux designer|ui designer|design de produto|designer de produto|product ux|design system|ux researcher|content designer|ux writer|estagiario em ux|estagio em ux)';
