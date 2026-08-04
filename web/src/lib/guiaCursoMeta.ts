import type { GuiaCurso } from '@/data/guiaCursos'

export function cursoCostLabel(cost: string[]): string {
  if (cost.length === 0) return ''
  if (cost.length === 1) return cost[0]
  return cost.join(' · ')
}

export function cursoModalityLabel(modality: string[]): string {
  if (modality.length === 0) return ''
  if (modality.length === 1) return modality[0]
  return modality.join(' · ')
}

export function cursoLevelLabel(levels: string[]): string {
  if (levels.length === 0) return ''
  if (levels.length === 1) return levels[0]
  return levels.slice(0, 2).join(' · ')
}

export function cursoMetaLine(curso: GuiaCurso): string {
  return [cursoModalityLabel(curso.modality), cursoCostLabel(curso.cost), cursoLevelLabel(curso.levels)]
    .filter(Boolean)
    .join(' · ')
}
