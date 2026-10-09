import assert from 'node:assert/strict'
import { test } from 'node:test'
import { isNonDesignCareerJob } from '../src/lib/discipline.ts'

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
  test(`esconde ${title}`, () => {
    assert.equal(isNonDesignCareerJob({ title }), true)
  })
}

for (const title of kept) {
  test(`mantém ${title}`, () => {
    assert.equal(isNonDesignCareerJob({ title }), false)
  })
}

test('motion designer não sai por menção de vídeo na descrição', () => {
  assert.equal(
    isNonDesignCareerJob({
      title: 'Motion Designer',
      description: 'Atua com motion e também apoia edição de vídeo do time.',
    }),
    false,
  )
})
