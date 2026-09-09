-- Campos editoriais de perfil vindos da fonte "Quem organiza" no Notion.
ALTER TABLE public.guia_volunteers
  ADD COLUMN IF NOT EXISTS emoji text,
  ADD COLUMN IF NOT EXISTS bio text,
  ADD COLUMN IF NOT EXISTS rapidinhas text[] NOT NULL DEFAULT '{}';

COMMENT ON COLUMN public.guia_volunteers.emoji IS
  'Emoji vindo do ícone da página no Notion.';
COMMENT ON COLUMN public.guia_volunteers.bio IS
  'Biografia vinda da propriedade Bio no Notion.';
COMMENT ON COLUMN public.guia_volunteers.rapidinhas IS
  'Uma rapidinha por linha da propriedade Rapidinhas no Notion.';
