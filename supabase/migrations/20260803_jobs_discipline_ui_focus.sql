-- Product Designer with explicit UI focus → ui (title "| UI" or description "forte foco em UI").

UPDATE public.jobs
SET discipline = 'ui'
WHERE status = 'published'
  AND discipline = 'product_design'
  AND (
    unaccent(lower(coalesce(title, ''))) ~ '\|.*\mui\b|\(\s*ui\s*\)|[-–]\s*ui\s*$'
    OR (
      unaccent(lower(coalesce(title, '') || ' ' || coalesce(role, ''))) ~
        'product designer|product design|designer de produto|design de produto'
      AND unaccent(lower(left(coalesce(description, ''), 4000))) ~
        'forte foco em ui|foco em ui|foco principal em ui|olhar apurado para ui|primary focus on ui|strong ui focus'
    )
  );
