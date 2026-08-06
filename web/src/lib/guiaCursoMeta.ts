import type { GuiaCurso } from '@/data/guiaCursos'

export function cursoCostLabel(cost: string[]): string {
  if (cost.length === 0) return ''
  return cost.join(', ')
}

export function cursoModalityLabel(modality: string[]): string {
  if (modality.length === 0) return ''
  return modality.join(', ')
}

export function cursoLevelLabel(levels: string[]): string {
  if (levels.length === 0) return ''
  return levels.slice(0, 2).join(', ')
}

export function cursoMetaLine(curso: GuiaCurso): string {
  return [cursoModalityLabel(curso.modality), cursoCostLabel(curso.cost), cursoLevelLabel(curso.levels)]
    .filter(Boolean)
    .join(', ')
}
