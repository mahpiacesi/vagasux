import assert from 'node:assert/strict'
import { test } from 'node:test'
import { filterJobs, hasActiveFilters } from '../src/lib/filterJobs.ts'
import {
  emptyJobFilters,
  parseJobFiltersFromSearchParams,
  serializeJobFiltersToSearchParams,
} from '../src/lib/jobSearchParams.ts'
import { labelEmploymentType, visibleEmploymentLabel } from '../src/lib/labels.ts'
import type { Job } from '../src/types/job.ts'

function job(partial: Partial<Job>): Job {
  return {
    id: '1',
    title: 'Product Designer',
    company: 'Estúdio',
    location: 'São Paulo',
    description: null,
    url: 'https://example.com/vaga',
    source: 'Gupy',
    seniority: 'mid',
    work_model: 'remote',
    employment_type: null,
    is_international: false,
    area: null,
    role: null,
    discipline: 'product_design',
    ai_summary: null,
    skills: null,
    tools: null,
    published_at: null,
    captured_at: '2026-10-01T00:00:00Z',
    ...partial,
  }
}

test('a URL do contrato guarda CLT, PJ e freela', () => {
  const params = serializeJobFiltersToSearchParams({
    ...emptyJobFilters,
    contract: 'pj',
  })
  assert.equal(params.get('contract'), 'pj')
  assert.equal(
    parseJobFiltersFromSearchParams(new URLSearchParams('contract=clt')).contract,
    'clt',
  )
  assert.equal(
    parseJobFiltersFromSearchParams(new URLSearchParams('contract=freelance')).contract,
    'freelance',
  )
  assert.equal(
    parseJobFiltersFromSearchParams(new URLSearchParams('contract=internship')).contract,
    'all',
  )
})

test('contrato some da URL quando o mercado é internacional', () => {
  const params = serializeJobFiltersToSearchParams({
    ...emptyJobFilters,
    market: 'international',
    contract: 'clt',
  })
  assert.equal(params.get('contract'), null)
  assert.equal(params.get('market'), 'international')
})

test('o filtro de contrato esconde vaga sem regime e mantém a lista inteira sem filtro', () => {
  const jobs = [
    job({ id: 'clt', employment_type: 'clt' }),
    job({ id: 'pj', employment_type: 'pj' }),
    job({ id: 'freela', title: 'Designer Freelancer', employment_type: 'freelance' }),
    job({ id: 'vazio', employment_type: null }),
    job({ id: 'unknown', employment_type: 'unknown' }),
  ]

  assert.equal(filterJobs(jobs, emptyJobFilters).length, 5)
  assert.deepEqual(
    filterJobs(jobs, { ...emptyJobFilters, contract: 'clt' }).map((item) => item.id),
    ['clt'],
  )
  assert.deepEqual(
    filterJobs(jobs, { ...emptyJobFilters, contract: 'freelance' }).map((item) => item.id),
    ['freela'],
  )
  assert.deepEqual(
    filterJobs(
      [job({ id: 'intl', is_international: true, employment_type: null, location: 'Lisboa' })],
      { ...emptyJobFilters, market: 'international', contract: 'clt' },
    ).map((item) => item.id),
    ['intl'],
  )
  assert.equal(
    hasActiveFilters({ ...emptyJobFilters, market: 'international', contract: 'clt' }),
    true,
  )
  assert.equal(hasActiveFilters({ ...emptyJobFilters, contract: 'pj' }), true)
})

test('o selo só aparece para CLT, PJ e freela', () => {
  assert.equal(labelEmploymentType('clt'), 'CLT')
  assert.equal(labelEmploymentType('pj'), 'PJ')
  assert.equal(labelEmploymentType('freelance'), 'Freela')
  assert.equal(labelEmploymentType('unknown'), null)
  assert.equal(labelEmploymentType('internship'), null)
  assert.equal(labelEmploymentType(null), null)
  assert.equal(visibleEmploymentLabel('intern', 'freelance'), null)
  assert.equal(visibleEmploymentLabel('mid', 'freelance'), 'Freela')
})

test('estágio não entra no filtro de contrato', () => {
  const intern = job({
    id: 'sezzle',
    title: 'Product Designer',
    company: 'sezzle',
    seniority: 'intern',
    employment_type: 'freelance',
    is_international: true,
  })
  assert.deepEqual(
    filterJobs([intern], { ...emptyJobFilters, contract: 'freelance' }).map((item) => item.id),
    [],
  )
  assert.deepEqual(
    filterJobs([intern], emptyJobFilters).map((item) => item.id),
    ['sezzle'],
  )
})
