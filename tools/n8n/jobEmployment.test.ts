import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
  reclassifyEmploymentType,
  resolveEmploymentType,
} from './jobEmployment.ts'

test('CLT explícito no título ou na descrição', () => {
  assert.equal(resolveEmploymentType('Designer Instrucional Júnior (CLT)', ''), 'clt')
  assert.equal(resolveEmploymentType('Designer', 'Contratação em regime CLT.'), 'clt')
  assert.equal(resolveEmploymentType('Designer', 'Carteira assinada desde o início.'), 'clt')
})

test('PJ explícito, inclusive CNPJ de contratação', () => {
  assert.equal(resolveEmploymentType('Designer - Modelo PJ', ''), 'pj')
  assert.equal(resolveEmploymentType('Designer', 'Contrato pessoa jurídica.'), 'pj')
  assert.equal(resolveEmploymentType('Designer', 'Emissão de nota fiscal mensal.'), 'pj')
  assert.equal(
    resolveEmploymentType('Designer', 'Possuir CNPJ ativo ou disponibilidade para abertura.'),
    'pj',
  )
  assert.equal(resolveEmploymentType('Designer', 'CNPJ ativo (SLU) ou abertura imediata.'), 'pj')
})

test('CNPJ de rodapé ou de benefício não vira PJ', () => {
  assert.equal(
    resolveEmploymentType('Designer', 'Empresa XPTO CNPJ 39.617.365/0001-03'),
    'unknown',
  )
  assert.equal(
    resolveEmploymentType(
      'Product Designer',
      'VR no cartão, podendo utilizar em redes com CNPJ de food.',
    ),
    'unknown',
  )
  assert.equal(resolveEmploymentType('Designer', 'Não precisa de CNPJ.'), 'unknown')
  assert.equal(resolveEmploymentType('Designer', 'Não é necessário possuir CNPJ.'), 'unknown')
})

test('freela explícito, e por projeto só quando fala de contrato', () => {
  assert.equal(resolveEmploymentType('Designer Gráfico Freelancer', ''), 'freelance')
  assert.equal(resolveEmploymentType('Experience Design | Freela', ''), 'freelance')
  assert.equal(resolveEmploymentType('Designer', 'Modelo de contratação por projeto.'), 'freelance')
  assert.equal(resolveEmploymentType('Designer', 'Entregas por projeto no Figma.'), 'unknown')
})

test('mais de um regime, ou nenhum, fica desconhecido', () => {
  assert.equal(resolveEmploymentType('Designer', 'Aceita CLT ou PJ.'), 'unknown')
  assert.equal(resolveEmploymentType('Designer', 'CLT/PJ'), 'unknown')
  assert.equal(resolveEmploymentType('Product Designer', 'Vaga para produto digital.'), 'unknown')
  assert.equal(resolveEmploymentType('Designer', 'Não é CLT.'), 'unknown')
  assert.equal(resolveEmploymentType('Designer', 'Não aceitamos PJ. Contratação CLT.'), 'clt')
})

test('a reclassificação só grava regime com evidência e limpa chute de CLT', () => {
  assert.equal(reclassifyEmploymentType('clt', 'Product Designer', 'Atuação em produto.'), 'unknown')
  assert.equal(reclassifyEmploymentType(null, 'Product Designer', 'Atuação em produto.'), null)
  assert.equal(reclassifyEmploymentType('unknown', 'Designer', 'Sem regime.'), 'unknown')
  assert.equal(reclassifyEmploymentType(null, 'Designer (CLT)', ''), 'clt')
  assert.equal(reclassifyEmploymentType('internship', 'Estágio em Design', ''), 'unknown')
  assert.equal(reclassifyEmploymentType('pj', 'Designer PJ', 'Nota fiscal.'), 'pj')
})
