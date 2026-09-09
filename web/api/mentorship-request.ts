import type { IncomingMessage, ServerResponse } from 'node:http'
import { randomUUID } from 'node:crypto'

const json = (response: ServerResponse, status: number, body: Record<string, string>) => {
  response.statusCode = status
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify(body))
}

function isWebhookUrl(value: string) {
  try {
    const url = new URL(value)
    return url.protocol === 'https:' && /^\/webhook\/mentorship-request-intake(?:-[a-z0-9-]+)?\/?$/i.test(url.pathname)
  } catch {
    return false
  }
}

export default async function handler(request: IncomingMessage, response: ServerResponse) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return json(response, 405, { error: 'Method not allowed' })
  }

  const chunks: Buffer[] = []
  for await (const chunk of request) chunks.push(Buffer.from(chunk))

  let input: Record<string, unknown>
  try {
    input = JSON.parse(Buffer.concat(chunks).toString()) as Record<string, unknown>
  } catch {
    return json(response, 400, { error: 'Invalid request body' })
  }

  const required = ['mentorId', 'name', 'contact', 'linkedin', 'area', 'experience', 'availability', 'motivation', 'need']
  if (
    !required.every((field) => typeof input[field] === 'string' && input[field].trim())
    || !Array.isArray(input.topics)
    || input.topics.length === 0
    || !isProof(input.proof)
  ) {
    return json(response, 400, { error: 'Missing required fields' })
  }

  const webhookUrl = process.env.N8N_MENTORSHIP_REQUEST_WEBHOOK_URL
  const uploadUrl = process.env.MENTORSHIP_PROOF_UPLOAD_URL
  const uploadSecret = process.env.MENTORSHIP_UPLOAD_SECRET
  if (!webhookUrl || !isWebhookUrl(webhookUrl) || !uploadUrl || !uploadSecret) {
    return json(response, 503, { error: 'Mentorship requests are not configured' })
  }

  const requestId = randomUUID()
  const upload = await fetch(uploadUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Mentorship-Upload-Secret': uploadSecret },
    body: JSON.stringify({ requestId, proof: input.proof }),
  })
  if (!upload.ok) return json(response, 502, { error: 'Could not save payment proof' })

  const { proofUrl } = await upload.json() as { proofUrl?: unknown }
  if (typeof proofUrl !== 'string') return json(response, 502, { error: 'Could not save payment proof' })

  const upstream = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-VagasUX-Request-ID': requestId },
    body: JSON.stringify({ ...input, requestId, proofUrl, receivedAt: new Date().toISOString() }),
  })
  if (!upstream.ok) return json(response, 502, { error: 'Could not save mentorship request' })

  return json(response, 201, { id: requestId })
}

function isProof(value: unknown): value is { name: string; type: string; data: string } {
  if (!value || typeof value !== 'object') return false
  const proof = value as Record<string, unknown>
  return typeof proof.name === 'string'
    && ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'].includes(String(proof.type))
    && typeof proof.data === 'string'
    && proof.data.length > 0
    && proof.data.length <= 7_000_000
}
