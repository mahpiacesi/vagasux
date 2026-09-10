import type { IncomingMessage, ServerResponse } from 'node:http'

function json(response: ServerResponse, status: number, body: Record<string, string>) {
  response.statusCode = status
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify(body))
}

export default async function handler(request: IncomingMessage, response: ServerResponse) {
  if (request.method !== 'POST') return json(response, 405, { error: 'Method not allowed' })
  const chunks: Buffer[] = []
  for await (const chunk of request) chunks.push(Buffer.from(chunk))
  let input: Record<string, unknown>
  try { input = JSON.parse(Buffer.concat(chunks).toString()) as Record<string, unknown> } catch { return json(response, 400, { error: 'Invalid request body' }) }
  if (!['name', 'linkedin', 'area', 'experience', 'motivation'].every((key) => typeof input[key] === 'string' && input[key].trim()) || !Array.isArray(input.topics) || !Array.isArray(input.availability)) return json(response, 400, { error: 'Missing required fields' })
  const webhook = process.env.N8N_MENTOR_APPLICATION_WEBHOOK_URL
  if (!webhook?.startsWith('https://')) return json(response, 503, { error: 'Mentor applications are not configured' })
  const upstream = await fetch(webhook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(input) })
  return upstream.ok ? json(response, 201, { ok: 'true' }) : json(response, 502, { error: 'Could not save mentor application' })
}
