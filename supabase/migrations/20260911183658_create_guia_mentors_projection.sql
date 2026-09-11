-- Public projection of the Notion "Mentores" data source.
-- The n8n Notion webhook owns writes; the site has read-only access.
CREATE TABLE IF NOT EXISTS public.guia_mentors (
  notion_page_id text PRIMARY KEY,
  name text NOT NULL,
  topics text[] NOT NULL DEFAULT '{}',
  contact_url text,
  photo_url text,
  availability_status text NOT NULL,
  is_active boolean NOT NULL DEFAULT true,
  synced_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT guia_mentors_availability_status_check
    CHECK (availability_status IN ('Disponível', 'Indisponível'))
);

CREATE INDEX IF NOT EXISTS guia_mentors_active_name_idx
  ON public.guia_mentors (name)
  WHERE is_active = true;

COMMENT ON TABLE public.guia_mentors IS
  'Public projection of the Mentores Notion data source, synchronized by the Notion webhook.';

ALTER TABLE public.guia_mentors ENABLE ROW LEVEL SECURITY;

CREATE POLICY guia_mentors_public_read
  ON public.guia_mentors
  FOR SELECT
  TO anon, authenticated
  USING (is_active = true);
