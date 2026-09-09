-- Projeção pública da base "Quem organiza" no Notion.
CREATE TABLE IF NOT EXISTS public.guia_volunteers (
  notion_page_id text PRIMARY KEY,
  name text NOT NULL,
  roles text[] NOT NULL DEFAULT '{}',
  instagram_url text,
  linkedin_url text,
  joined_at date,
  is_active boolean NOT NULL DEFAULT true,
  synced_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS guia_volunteers_active_name_idx
  ON public.guia_volunteers (name)
  WHERE is_active = true;

COMMENT ON TABLE public.guia_volunteers IS
  'Projeção pública da fonte Quem organiza no Notion, sincronizada por webhook.';

ALTER TABLE public.guia_volunteers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS guia_volunteers_public_read ON public.guia_volunteers;

CREATE POLICY guia_volunteers_public_read
  ON public.guia_volunteers
  FOR SELECT
  TO anon, authenticated
  USING (is_active = true);
