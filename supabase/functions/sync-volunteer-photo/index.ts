import 'jsr:@supabase/functions-js/edge-runtime.d.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const bucket = 'volunteer-photos'
const allowedHosts = new Set([
  'prod-files-secure.s3.us-west-2.amazonaws.com',
  'secure.notion-static.com',
])
const allowedTypes = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
])

Deno.serve(async (request) => {
  if (request.method !== 'POST') {
    return Response.json({ error: 'Method not allowed' }, { status: 405 })
  }

  const { notionPageId, sourceUrl } = await request.json()

  if (typeof notionPageId !== 'string') {
    return Response.json({ error: 'Missing Notion page ID' }, { status: 400 })
  }

  if (!sourceUrl) {
    return Response.json({ photoUrl: null })
  }

  if (typeof sourceUrl !== 'string') {
    return Response.json({ error: 'Invalid photo source' }, { status: 400 })
  }

  const source = new URL(sourceUrl)
  if (source.protocol !== 'https:' || !allowedHosts.has(source.hostname)) {
    return Response.json({ error: 'Invalid photo source' }, { status: 400 })
  }

  const photo = await fetch(source)
  const contentType = photo.headers.get('content-type')?.split(';')[0] ?? ''
  const contentLength = Number(photo.headers.get('content-length') ?? 0)

  if (!photo.ok || !allowedTypes.has(contentType) || contentLength > 5_242_880) {
    return Response.json({ error: 'Unsupported photo' }, { status: 400 })
  }

  const extension = contentType.split('/')[1]
  const objectPath = `${notionPageId}.${extension}`
  const storage = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
  )
  const { error } = await storage.storage
    .from(bucket)
    .upload(objectPath, await photo.blob(), {
      contentType,
      upsert: true,
    })

  if (error) {
    return Response.json({ error: 'Could not store photo' }, { status: 502 })
  }

  const { data } = storage.storage.from(bucket).getPublicUrl(objectPath)
  return Response.json({ photoUrl: data.publicUrl })
})
