import { Link } from 'react-router-dom'
import { ArrowLeft } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
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
    <Button asChild className={cn(className)}>
      <Link to={to}>
        <ArrowLeft weight="bold" aria-hidden />
        Voltar ao Guia
      </Link>
    </Button>
  )
}
