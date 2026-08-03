-- CAD / industrial / furniture tooling listings — not digital UX/product design.

UPDATE public.jobs
SET status = 'expired'
WHERE status = 'published'
  AND unaccent(lower(left(coalesce(description, ''), 4000)))
    ~ '(solidworks|solid edge|sketchup|autocad|promob|catia|inventor|creo|ferramental|fabricacao de produto|estrutura fabril)';
