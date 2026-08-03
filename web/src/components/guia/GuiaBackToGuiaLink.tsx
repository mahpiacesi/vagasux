import { Link } from 'react-router-dom'
import { ArrowLeft } from '@phosphor-icons/react'
import { guiaRoutes } from '@/lib/guiaRoutes'
import { cn } from '@/lib/utils'

type GuiaBackToGuiaLinkProps = {
  className?: string
  /** Aba de tipo de conteúdo a restaurar na home (ex.: artigos, videos). */
  tipoId?: string
}

export function GuiaBackToGuiaLink({
  className,
  tipoId,
}: GuiaBackToGuiaLinkProps) {
  return (
    <Link
      to={guiaRoutes.homeTipos(tipoId)}
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
