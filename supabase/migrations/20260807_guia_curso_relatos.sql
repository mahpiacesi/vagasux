-- Relatos publicados no Guia de Cursos (fonte estática hoje; futuro: sync do Notion/form).
CREATE TABLE IF NOT EXISTS public.guia_curso_relatos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  curso_id text NOT NULL,
  text text NOT NULL,
  author text,
  received_at timestamptz,
  source text NOT NULL DEFAULT 'chat'
    CHECK (source IN ('chat', 'notion_form', 'notion_page')),
  text_hash text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (curso_id, text_hash)
);

CREATE INDEX IF NOT EXISTS guia_curso_relatos_curso_id_idx
  ON public.guia_curso_relatos (curso_id);

CREATE INDEX IF NOT EXISTS guia_curso_relatos_received_at_idx
  ON public.guia_curso_relatos (received_at DESC NULLS LAST);

COMMENT ON TABLE public.guia_curso_relatos IS
  'Relatos de cursos do Guia do Product Designer. curso_id = Notion page id da escola.';

ALTER TABLE public.guia_curso_relatos ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS guia_curso_relatos_public_read ON public.guia_curso_relatos;

CREATE POLICY guia_curso_relatos_public_read
  ON public.guia_curso_relatos
  FOR SELECT
  USING (true);
