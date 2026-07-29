/**
 * Seniority rules for VagasUX curated jobs (Notion → source = VagasUX).
 * Keep in sync with Enrichment Apply enrichment node.
 */

export function normalizeJobText(value: unknown): string {
  return String(value ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

const BEGINNER_SENIORITIES = new Set(['intern', 'junior'])

/** Curated list is entry-level only — never pleno/sênior/liderança. */
export function inferCuratedSeniority(input: {
  title?: unknown
  description?: unknown
  aiSeniority?: unknown
}): 'intern' | 'junior' {
  const text = normalizeJobText(`${input.title ?? ''} ${input.description ?? ''}`)

  if (/\b(estagi|estagio|internship|jovem aprendiz|aprendiz)\b/.test(text)) {
    return 'intern'
  }

  if (/\b(trainee|junior|jr\.?)\b/.test(text)) {
    return 'junior'
  }

  const ai = String(input.aiSeniority ?? '')
  if (BEGINNER_SENIORITIES.has(ai)) {
    return ai as 'intern' | 'junior'
  }

  // Human-curated iniciantes list: default to júnior when level is absent or misclassified.
  return 'junior'
}

/** n8n-friendly snippet for Apply enrichment when source === 'VagasUX'. */
export const CURATED_SENIORITY_GUARD_JS = `
if (job.source === 'VagasUX') {
  const curatedText = normalizeJobText(\`\${job.title} \${job.description ?? ''}\`);
  if (/\\b(estagi|estagio|internship|jovem aprendiz|aprendiz)\\b/.test(curatedText)) {
    seniority = 'intern';
  } else if (/\\b(trainee|junior|jr\\.?)\\b/.test(curatedText)) {
    seniority = 'junior';
  } else if (['intern', 'junior'].includes(seniority)) {
    // keep AI value when already entry-level
  } else {
    seniority = 'junior';
  }
}
`.trim()
