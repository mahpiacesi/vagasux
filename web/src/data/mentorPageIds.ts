export const mentorPageIds: Record<string, string> = {
  'natalia-feitosa': '3c28cbb0-d904-80e9-90a0-f3446f9e9375',
  'andre-hiro': '3c28cbb0-d904-80c0-a656-fd08a20dba33',
  'andre-hiroyuki': '3c28cbb0-d904-80c0-a656-fd08a20dba33',
  'anna-barros': '3c28cbb0-d904-8029-9c45-f33f800bbade',
  'luana-conde': '3c28cbb0-d904-80cc-bcc3-d4aa25279a65',
  'jade-simoes': '3c28cbb0-d904-800c-b43f-c163039088a3',
}

function toPageId(value: string) {
  const compact = value.replace(/-/g, '')
  if (!/^[0-9a-f]{32}$/i.test(compact)) return ''
  return [
    compact.slice(0, 8),
    compact.slice(8, 12),
    compact.slice(12, 16),
    compact.slice(16, 20),
    compact.slice(20),
  ].join('-').toLowerCase()
}

export function resolveMentorPageId(value: string) {
  const trimmed = value.trim()
  return toPageId(trimmed) || toPageId(mentorPageIds[trimmed] ?? '') || trimmed
}
