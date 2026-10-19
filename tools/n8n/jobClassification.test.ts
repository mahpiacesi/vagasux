import assert from 'node:assert/strict'
import { test } from 'node:test'
import { isNonDesignCareerJob } from './jobClassification.ts'

const rejected = [
  'Designer De Sobrancelha - Shopping Eldorado',
  'Designer De Sobrancelha',
  'Designer De Cílios (Lash Designer)',
  'Lash Designer',
  'Nail Designer - Nail Designer Em Vargem Grande Paulista',
  'Designer de Unhas',
  'Maquiadora',
  'Hair Designer',
  'Esteticista',
  'Designer de Estética',
  'Modelista Pleno | Temporário',
  'Assistente de Estilo Infantil',
  'Estilista Júnior | Acessórios',
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

test('pipeline mantém product designer com cliente de estética na descrição', () => {
  assert.equal(
    isNonDesignCareerJob({
      title: 'Product Designer',
      description: 'Produto digital para um estúdio de cílios e lash designer.',
    }),
    false,
  )
})
