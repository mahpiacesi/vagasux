import type { IncomingMessage, ServerResponse } from 'node:http'
import { randomUUID } from 'node:crypto'
import { appendFileSync } from 'node:fs'

const json = (response: ServerResponse, status: number, body: Record<string, string>) => {
  response.statusCode = status
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify(body))
}

function debugLog(entry: Record<string, unknown>) {
  if (process.env.CURSOR_DEBUG_LOGGING === 'true') appendFileSync('/opt/cursor/logs/debug.log', `${JSON.stringify(entry)}\n`)
}

function isN8nCourseFeedbackWebhookUrl(value: string) {
  try {
    const url = new URL(value)
    return url.protocol === 'https:' && /^\/webhook\/course-feedback-intake(?:-[a-z0-9-]+)?\/?$/i.test(url.pathname)
  } catch {
    return false
  }
}

export default async function handler(request: IncomingMessage, response: ServerResponse) {
  // #region agent log
  debugLog({ hypothesisId: 'A', location: 'web/api/course-feedback.ts:18', message: 'Course feedback request received', data: { method: request.method }, timestamp: Date.now() })
  // #endregion
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
  // #region agent log
  debugLog({ hypothesisId: 'A', location: 'web/api/course-feedback.ts:37', message: 'Course feedback validation evaluated', data: { hasRequiredFields, hasCourse, hasConsent: input.consent === true }, timestamp: Date.now() })
  // #endregion
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
    || (input.isNewCourse === true && !/^https?:\/\/.+/i.test(String(input.officialUrl)))
  ) {
    return json(response, 400, { error: 'Invalid form fields' })
  }

  const webhookUrl = process.env.N8N_COURSE_FEEDBACK_WEBHOOK_URL
  // #region agent log
  debugLog({ hypothesisId: 'A', location: 'web/api/course-feedback.ts:66', message: 'Course feedback webhook configuration evaluated', data: { isConfigured: Boolean(webhookUrl), isProductionWebhookUrl: isN8nCourseFeedbackWebhookUrl(webhookUrl ?? '') }, timestamp: Date.now() })
  // #endregion
  if (!webhookUrl || !isN8nCourseFeedbackWebhookUrl(webhookUrl)) {
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

  // #region agent log
  debugLog({ hypothesisId: 'A', location: 'web/api/course-feedback.ts:73', message: 'Course feedback upstream response received', data: { status: upstreamResponse.status, ok: upstreamResponse.ok }, timestamp: Date.now() })
  // #endregion
  if (!upstreamResponse.ok) {
    return json(response, 502, { error: 'Could not save course feedback' })
  }

  return json(response, 201, { id: submissionId })
}
