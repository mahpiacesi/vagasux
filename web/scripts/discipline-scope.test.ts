import assert from 'node:assert/strict'
import { test } from 'node:test'
import { isNonDesignCareerJob } from '../src/lib/discipline.ts'

const rejected = [
  'Designer De Sobrancelha - Shopping Eldorado',
  'Designer De Sobrancelha',
  'Designer De Cílios (Lash Designer)',
  'Lash Designer',
  'Lashes',
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
  test(`esconde ${title}`, () => {
    assert.equal(isNonDesignCareerJob({ title }), true)
  })
}

for (const title of kept) {
  test(`mantém ${title}`, () => {
    assert.equal(isNonDesignCareerJob({ title }), false)
  })
}

test('product designer não sai por cliente de estética na descrição', () => {
  assert.equal(
    isNonDesignCareerJob({
      title: 'Product Designer',
      description: 'Produto digital para um estúdio de cílios e lash designer.',
    }),
    false,
  )
})

test('motion designer não sai por menção de vídeo na descrição', () => {
  assert.equal(
    isNonDesignCareerJob({
      title: 'Motion Designer',
      description: 'Atua com motion e também apoia edição de vídeo do time.',
    }),
    false,
  )
})
