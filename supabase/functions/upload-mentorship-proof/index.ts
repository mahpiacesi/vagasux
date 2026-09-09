import 'jsr:@supabase/functions-js/edge-runtime.d.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const bucket = 'mentorship-proofs'
const allowedTypes = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'application/pdf',
])

Deno.serve(async (request) => {
  if (request.method !== 'POST') {
    return Response.json({ error: 'Method not allowed' }, { status: 405 })
  }

  const secret = Deno.env.get('MENTORSHIP_UPLOAD_SECRET')
  if (!secret || request.headers.get('X-Mentorship-Upload-Secret') !== secret) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { requestId, proof } = await request.json()
  if (
    typeof requestId !== 'string'
    || !proof
    || typeof proof.name !== 'string'
    || !allowedTypes.has(proof.type)
    || typeof proof.data !== 'string'
  ) {
    return Response.json({ error: 'Invalid payment proof' }, { status: 400 })
  }

  const bytes = fromBase64(proof.data)
  if (bytes.byteLength === 0 || bytes.byteLength > 5_242_880) {
    return Response.json({ error: 'Payment proof must be at most 5 MB' }, { status: 400 })
  }

  const extension = proof.type === 'application/pdf' ? 'pdf' : proof.type.split('/')[1]
  const storage = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
  )
  const objectPath = `${requestId}.${extension}`
  const { error } = await storage.storage.from(bucket).upload(objectPath, bytes, {
    contentType: proof.type,
    upsert: false,
  })
  if (error) return Response.json({ error: 'Could not store payment proof' }, { status: 502 })

  const { data, error: signedUrlError } = await storage.storage
    .from(bucket)
    .createSignedUrl(objectPath, 31_536_000)
  if (signedUrlError || !data?.signedUrl) {
    return Response.json({ error: 'Could not prepare payment proof' }, { status: 502 })
  }

  return Response.json({ proofUrl: data.signedUrl })
})

function fromBase64(value: string) {
  const decoded = atob(value)
  const bytes = new Uint8Array(decoded.length)
  for (let index = 0; index < decoded.length; index += 1) {
    bytes[index] = decoded.charCodeAt(index)
  }
  return bytes
}
