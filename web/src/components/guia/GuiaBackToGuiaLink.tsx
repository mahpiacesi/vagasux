import { Link } from 'react-router-dom'
import { ArrowLeft } from '@phosphor-icons/react'
import { guiaRoutes } from '@/lib/guiaRoutes'
import { cn } from '@/lib/utils'

type GuiaBackToGuiaLinkProps = {
  className?: string
  /** Aba de tipo de conteúdo a restaurar na home (ex.: artigos, videos). */
  tipoId?: string
  /** Seção dedicada na home (ex.: cursos). */
  section?: 'cursos'
}

export function GuiaBackToGuiaLink({
  className,
  tipoId,
  section,
}: GuiaBackToGuiaLinkProps) {
  const to =
    section === 'cursos'
      ? guiaRoutes.homeCursos
      : guiaRoutes.homeTipos(tipoId)

  return (
    <Link
      to={to}
      className={cn(
        'inline-flex items-center gap-2 rounded-full bg-brand-400 px-4 py-2.5 text-sm font-bold text-neutral-100 transition-colors hover:bg-brand-500',
        className,
      )}
    >
      <ArrowLeft size={18} weight="bold" aria-hidden />
      Voltar ao Guia
    </Link>
  )
}
