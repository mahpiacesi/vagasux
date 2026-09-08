import type { IncomingMessage, ServerResponse } from 'node:http'
import { randomUUID } from 'node:crypto'

const json = (response: ServerResponse, status: number, body: Record<string, string>) => {
  response.statusCode = status
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify(body))
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

  const requiredFields = ['firstName', 'email', 'linkedin', 'completedYear', 'modality', 'feedback']
  const hasRequiredFields = requiredFields.every((field) => typeof input[field] === 'string' && input[field].trim())
  const hasCourse = typeof input.courseId === 'string' || (input.isNewCourse === true && typeof input.courseName === 'string')
  if (!hasRequiredFields || !hasCourse || input.consent !== true) {
    return json(response, 400, { error: 'Missing required fields' })
  }
  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(input.email))
    || !/^https?:\/\/(www\.)?linkedin\.com\/.+/i.test(String(input.linkedin))
    || !/^\d{4}$/.test(String(input.completedYear))
    || Number(input.completedYear) < 1990
    || Number(input.completedYear) > new Date().getFullYear()
    || String(input.feedback).trim().length < 80
  ) {
    return json(response, 400, { error: 'Invalid form fields' })
  }

  const webhookUrl = process.env.N8N_COURSE_FEEDBACK_WEBHOOK_URL
  if (!webhookUrl) {
    return json(response, 503, { error: 'Course feedback intake is not configured' })
  }

  const submissionId = randomUUID()
  const upstreamResponse = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-VagasUX-Submission-ID': submissionId,
    },
    body: JSON.stringify({ ...input, submissionId, receivedAt: new Date().toISOString() }),
  })

  if (!upstreamResponse.ok) {
    return json(response, 502, { error: 'Could not save course feedback' })
  }

  return json(response, 201, { id: submissionId })
}
