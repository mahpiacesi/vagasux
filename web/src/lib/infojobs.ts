/** InfoJobs verified-company badge leaked into company names from listing HTML. */
const INFOJOBS_VERIFIED_BADGE =
  /\s*Este selo indica que a empresa foi verificada pelo Infojobs[^.]*\.?\s*(Saiba o que isso significa\.?\s*)?/gi

export function cleanInfojobsCompany(value: string | null | undefined): string {
  const cleaned = String(value ?? '')
    .replace(INFOJOBS_VERIFIED_BADGE, '')
    .replace(/\s+/g, ' ')
    .trim()
  return cleaned || String(value ?? '').trim() || 'Empresa'
}
