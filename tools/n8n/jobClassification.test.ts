import assert from 'node:assert/strict'
import { test } from 'node:test'
import { isNonDesignCareerJob, shouldPublishEnrichedJob } from './jobClassification.ts'

const rejected = [
  'Designer De Sobrancelha - Shopping Eldorado',
  'Designer De Sobrancelha',
  'Modelista Pleno | Temporário',
  'Assistente de Estilo Infantil',
  'Editor(a) de Vídeo',
  'Editora de Vídeo',
  'Editor de vídeo',
  'Video Editor',
  'Videomaker',
]

const kept = [
  'Product Designer',
  'UX Designer Pleno',
  'Designer Gráfico',
  'Motion Designer',
  'UI Designer',
  'Estagiário de Design',
  'Content Designer',
  'UX Writer',
  'Diretor de Arte',
  'Designer de Produto',
]

for (const title of rejected) {
  test(`pipeline esconde ${title}`, () => {
    assert.equal(isNonDesignCareerJob({ title }), true)
  })
}

for (const title of kept) {
  test(`pipeline mantém ${title}`, () => {
    assert.equal(isNonDesignCareerJob({ title }), false)
  })
}

test('curadoria humana publica mesmo com manicure no benefício', () => {
  const description =
    'Estágio em Product Design. Posher: massagem, manicure, lavanderia e vendedores da rede.'
  assert.equal(
    shouldPublishEnrichedJob({
      source: 'VagasUX',
      isDesignJob: true,
      confidence: 1,
      retailFalsePositive: false,
      nonDesignCareer: isNonDesignCareerJob({
        title: 'Product Designer',
        description,
      }),
    }),
    true,
  )
})

test('coletor geral continua escondendo manicure no texto', () => {
  const description = 'Benefício Posher com manicure.'
  assert.equal(
    shouldPublishEnrichedJob({
      source: 'Gupy',
      isDesignJob: true,
      confidence: 1,
      retailFalsePositive: false,
      nonDesignCareer: isNonDesignCareerJob({
        title: 'Product Designer',
        description,
      }),
    }),
    false,
  )
})

test('curadoria humana publica o que a pessoa marcou, mesmo fora de design', () => {
  assert.equal(
    shouldPublishEnrichedJob({
      source: 'VagasUX',
      curated: true,
      isDesignJob: false,
      confidence: 1,
      retailFalsePositive: false,
      nonDesignCareer: true,
    }),
    true,
  )
})
