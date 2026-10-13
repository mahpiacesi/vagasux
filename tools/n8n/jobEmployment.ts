/**
 * Contract type for the mural filter.
 * Keep in sync with the Enrichment workflow (Prepare prompt + Apply enrichment).
 * The model only suggests a value. This guard overwrites it.
 */

export type EmploymentContract = 'clt' | 'pj' | 'freelance' | 'unknown'

export const resolveEmploymentTypeSource = `function resolveEmploymentType(title, description) {
  const text = String(title || '') + '\\n' + String(description || '');
  const normalized = text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\\u0300-\\u036f]/g, '')
    .slice(0, 20000);

  const titleOnly = String(title || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\\u0300-\\u036f]/g, '');
  const internship =
    /\\b(estagiari[oa]s?|estagios?|internships?|interns?)\\b/.test(titleOnly) ||
    /\\bpessoa estagiaria\\b/.test(normalized) ||
    /\\b(?:vaga|programa|contrato|oportunidade) de estagio\\b/.test(normalized) ||
    /\\b(?:seeking|hiring|looking for)\\b(?:\\s+\\w+){0,14}\\s+intern\\b/.test(normalized) ||
    /\\bas an?\\b(?:\\s+\\w+){0,4}\\s+intern\\b/.test(normalized) ||
    /\\b(?:product|ux|ui|graphic|visual|motion|research|design)(?:\\s+\\w+){0,3}\\s+intern\\b/.test(normalized);
  if (internship) return 'unknown';

  const cleaned = normalized
    .replace(/\\bcnpj\\s*[:.]?\\s*\\d[\\d.\\/\\-]*/g, ' ')
    .replace(/\\b(?:nao|sem|exceto|nem)\\s+(?:e\\s+|aceita(?:mos)?\\s+|sera\\s+|ser\\s+|temos\\s+|trabalhamos\\s+com\\s+)?(?:clt|pj|freela|freelance|freelancer|pessoa juridica)\\b/g, ' ')
    .replace(/\\b(?:nao precisa|nao e necessario|nao necessita|dispensa)(?:\\s+\\w+){0,4}\\s+(?:cnpj|nota fiscal)\\b/g, ' ')
    .replace(/\\b(?:through|via|from)\\s+(?:internships?|coursework|freelance|freelancing|personal projects)(?:\\s*,\\s*(?:or\\s+)?)(?:internships?|coursework|freelance|freelancing|personal projects)(?:\\s*,\\s*(?:or\\s+)?(?:internships?|coursework|freelance|freelancing|personal projects))*/g, ' ');

  const clt = /\\bclt\\b/.test(cleaned) || /\\bcarteira assinada\\b/.test(cleaned);
  const pj =
    /\\bpj\\b/.test(cleaned) ||
    /\\bpessoa juridica\\b/.test(cleaned) ||
    /\\bnota fiscal\\b/.test(cleaned) ||
    /\\bemissao de nota\\b/.test(cleaned) ||
    /\\bcnpj ativo\\b/.test(cleaned) ||
    /\\b(?:possuir|abrir|tenha|tiver|ter)\\b(?:\\s+\\w+){0,3}\\s+cnpj\\b/.test(cleaned) ||
    /\\babertura(?:\\s+\\w+){0,3}\\s+cnpj\\b/.test(cleaned);
  const freelance =
    /\\bfreelancer\\b/.test(cleaned) ||
    /\\bfreelance\\b/.test(cleaned) ||
    /\\bfreela\\b/.test(cleaned) ||
    /\\b(?:contrat\\w*|modelo|regime|vaga|atuacao|trabalho)\\b(?:\\s+\\w+){0,6}\\s+por projeto\\b/.test(cleaned) ||
    /\\bpor projeto\\b(?:\\s+\\w+){0,6}\\s+(?:contrat\\w*|modelo|regime)\\b/.test(cleaned);

  const hits = Number(clt) + Number(pj) + Number(freelance);
  if (hits !== 1) return 'unknown';
  if (clt) return 'clt';
  if (pj) return 'pj';
  return 'freelance';
}`

const resolveEmploymentTypeImpl = new Function(
  `${resolveEmploymentTypeSource}; return resolveEmploymentType;`,
)() as (title: unknown, description: unknown) => EmploymentContract

export function resolveEmploymentType(
  title: string | null | undefined,
  description: string | null | undefined,
): EmploymentContract {
  const value = resolveEmploymentTypeImpl(title ?? '', description ?? '')
  if (value === 'clt' || value === 'pj' || value === 'freelance') return value
  return 'unknown'
}

const STORED_CONTRACTS = new Set(['clt', 'pj', 'freelance', 'internship'])

/**
 * Value to persist. Null means the row was never classified and the text
 * still has no contract, so the column stays empty.
 */
export function reclassifyEmploymentType(
  current: string | null | undefined,
  title: string | null | undefined,
  description: string | null | undefined,
): EmploymentContract | null {
  const next = resolveEmploymentType(title, description)
  if (next !== 'unknown') return next
  if (current && STORED_CONTRACTS.has(current)) return 'unknown'
  if (current === 'unknown') return 'unknown'
  return null
}

export const EMPLOYMENT_PROMPT_RULE = `- employment_type: set this ONLY from explicit contract wording in the title or description. If the listing does not state one contract, use "unknown". Never infer clt because the company is Brazilian, the board is Gupy, or the text says "efetivo".
  - clt: the text says CLT or "carteira assinada".
  - pj: the text says PJ, "pessoa jurídica", "nota fiscal", "emissão de nota", or requires an active CNPJ to be hired ("possuir CNPJ", "CNPJ ativo"). A CNPJ number in a footer is not a contract.
  - freelance: the text says freelancer, freelance, or freela.
  - If more than one of clt, pj, and freelance appears (for example "CLT ou PJ"), use "unknown".
  - Do not use "internship". Estágio, estagiário, and intern roles are seniority, not employment_type. If the vacancy is an internship, use "unknown" even when the text also says freelance, CLT, or PJ. Mentoring interns is not an internship vacancy. "Freelance" listed as past experience ("through internships, coursework, freelance, or personal projects") is not a contract.
  The Apply enrichment node overwrites this field with the same rules. A guessed value is discarded.`
