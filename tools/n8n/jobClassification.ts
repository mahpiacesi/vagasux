/**
 * Shared scope rules for VagasUX job classification.
 * Keep in sync with the Enrichment workflow (n8n) Apply enrichment node.
 */

export function normalizeJobText(value: unknown): string {
  return String(value ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

const MOTION_KEEP =
  /\b(motion designer|motion design|animador ui|ui animation|animacao ui)\b/

const VIDEO_EDITING =
  /\b(editor de videos?|editor de videos curtos|video editor|videomaker|video maker|analista audiovisual|edicao de video|video editing)\b/

/** True when the listing is audiovisual post-production, not product/UI motion design. */
export function isVideoEditingRole(input: {
  title?: unknown
  role?: unknown
  area?: unknown
}): boolean {
  const text = normalizeJobText([input.title, input.role, input.area].filter(Boolean).join(' '))

  if (MOTION_KEEP.test(text)) return false

  return VIDEO_EDITING.test(text)
}

/** n8n-friendly copy of isVideoEditingRole for Code nodes. */
export const VIDEO_EDITING_GUARD_JS = `
function normalizeJobText(value) {
  return String(value ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\\u0300-\\u036f]/g, '');
}

const classifyText = normalizeJobText(\`\${job.title} \${ai.role ?? ''} \${ai.area ?? ''}\`);
const motionKeep = /\\b(motion designer|motion design|animador ui|ui animation|animacao ui)\\b/.test(classifyText);
const videoEditing =
  !motionKeep &&
  /\\b(editor de videos?|editor de videos curtos|video editor|videomaker|video maker|analista audiovisual|edicao de video|video editing)\\b/.test(classifyText);
`.trim()
