import type { GuiaCurso } from '@/data/guiaCursos'

export type GuiaCursoFilters = {
  theme: string | null
  modality: string | null
  cost: string | null
  level: string | null
  partnersOnly: boolean
  feedbackOnly: boolean
}

export const GUIA_CURSO_FILTER_DEFAULTS: GuiaCursoFilters = {
  theme: null,
  modality: null,
  cost: null,
  level: null,
  partnersOnly: false,
  feedbackOnly: false,
}

export function getGuiaCursoModalityTags(cursos: readonly GuiaCurso[]): string[] {
  const tags = new Set<string>()
  for (const curso of cursos) {
    for (const tag of curso.modality) tags.add(tag)
  }
  return [...tags].sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }))
}

export function getGuiaCursoCostTags(cursos: readonly GuiaCurso[]): string[] {
  const tags = new Set<string>()
  for (const curso of cursos) {
    for (const tag of curso.cost) tags.add(tag)
  }
  return [...tags].sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }))
}

export function getGuiaCursoLevelTags(cursos: readonly GuiaCurso[]): string[] {
  const tags = new Set<string>()
  for (const curso of cursos) {
    for (const tag of curso.levels) tags.add(tag)
  }
  return [...tags].sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }))
}

export function countActiveGuiaCursoFilters(filters: GuiaCursoFilters): number {
  let count = 0
  if (filters.theme) count++
  if (filters.modality) count++
  if (filters.cost) count++
  if (filters.level) count++
  if (filters.partnersOnly) count++
  if (filters.feedbackOnly) count++
  return count
}

export function filterGuiaCursos(
  cursos: readonly GuiaCurso[],
  filters: GuiaCursoFilters,
): GuiaCurso[] {
  return cursos.filter((curso) => {
    if (filters.theme && !curso.themes.includes(filters.theme)) return false
    if (filters.modality && !curso.modality.includes(filters.modality)) return false
    if (filters.cost && !curso.cost.includes(filters.cost)) return false
    if (filters.level && !curso.levels.includes(filters.level)) return false
    if (filters.partnersOnly && !curso.isPartner) return false
    if (filters.feedbackOnly && !curso.hasFeedback) return false
    return true
  })
}

export function getGuiaCursoStats(cursos: readonly GuiaCurso[]) {
  return {
    total: cursos.length,
    partners: cursos.filter((curso) => curso.isPartner).length,
    withFeedback: cursos.filter((curso) => curso.hasFeedback).length,
  }
}
