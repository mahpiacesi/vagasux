-- Fotos de voluntários recebidas pelo Notion e copiadas para Storage.
ALTER TABLE public.guia_volunteers
  ADD COLUMN IF NOT EXISTS photo_url text;

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'volunteer-photos',
  'volunteer-photos',
  true,
  5242880,
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS "Public can view volunteer photos" ON storage.objects;

CREATE POLICY "Public can view volunteer photos"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'volunteer-photos');
