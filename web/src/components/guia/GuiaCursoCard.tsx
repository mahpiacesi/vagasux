import { ArrowSquareOut, CaretRight } from '@phosphor-icons/react'
import { Badge } from '@/components/ui/badge'
import type { GuiaCurso } from '@/data/guiaCursos'
import { cursoMetaLine } from '@/lib/guiaCursoMeta'
import { cn } from '@/lib/utils'

export const GUIA_CURSO_PARTNER_LABEL = 'Parceiro VagasUX'
export const GUIA_CURSO_FEEDBACK_LABEL = 'Tem relatos'

type GuiaCursoCardProps = {
  curso: GuiaCurso
  className?: string
  /** Abre modal de detalhes em vez de link direto (diretório /guia/cursos). */
  previewMode?: boolean
  onPreview?: (curso: GuiaCurso) => void
}

function PartnerLabel({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 rounded-full bg-brand-400 px-2.5 py-0.5 text-[0.6rem] font-bold tracking-[0.12em] text-neutral-100 uppercase',
        className,
      )}
    >
      {GUIA_CURSO_PARTNER_LABEL}
    </span>
  )
}

function FeedbackBadge({ className }: { className?: string }) {
  return (
    <Badge
      variant="outline"
      className={cn(
        'border-brand-300/40 bg-brand-100/50 text-[0.65rem] font-bold text-brand-500 uppercase',
        className,
      )}
    >
      {GUIA_CURSO_FEEDBACK_LABEL}
    </Badge>
  )
}

function CardAction({ previewMode }: { previewMode: boolean }) {
  if (previewMode) {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-bold tracking-wide text-brand-400 uppercase">
        Ver detalhes
        <CaretRight size={14} weight="bold" aria-hidden />
      </span>
    )
  }

  return (
    <ArrowSquareOut
      size={18}
      weight="bold"
      className="shrink-0 text-brand-400"
      aria-hidden
    />
  )
}

function CardBody({
  curso,
  meta,
  previewMode,
}: {
  curso: GuiaCurso
  meta: string
  previewMode: boolean
}) {
  return (
    <div className="flex min-w-0 flex-1 items-center gap-4">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <h3 className="text-base leading-snug font-black text-neutral-500 group-hover:text-brand-500">
            {curso.title}
          </h3>
          {curso.isPartner ? <PartnerLabel /> : null}
        </div>

        {meta ? (
          <p className="mt-1 text-xs font-semibold text-neutral-400">{meta}</p>
        ) : null}

        {(curso.themes.length > 0 || curso.hasFeedback) && (
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            {curso.themes.slice(0, 4).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className={cn(
                  'border-neutral-500/10 text-[0.65rem] font-bold text-neutral-400 uppercase',
                  curso.isPartner && 'border-brand-300/30 bg-neutral-100/80',
                )}
              >
                {tag}
              </Badge>
            ))}
            {curso.hasFeedback ? <FeedbackBadge /> : null}
          </div>
        )}
      </div>

      <CardAction previewMode={previewMode} />
    </div>
  )
}

export function GuiaCursoCard({
  curso,
  className,
  previewMode = false,
  onPreview,
}: GuiaCursoCardProps) {
  const meta = cursoMetaLine(curso)
  const cardClassName = cn(
    'group flex w-full rounded-xl border px-4 py-3.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400',
    curso.isPartner
      ? 'border-brand-300/70 border-l-4 border-l-brand-400 bg-brand-100/40 hover:border-brand-400 hover:bg-brand-100/60'
      : 'border-neutral-500/10 bg-neutral-100 hover:border-brand-300/60 hover:bg-brand-100/25',
    className,
  )

  const body = <CardBody curso={curso} meta={meta} previewMode={previewMode} />

  if (previewMode && onPreview) {
    return (
      <button
        type="button"
        onClick={() => onPreview(curso)}
        className={cn(cardClassName, 'cursor-pointer text-left')}
      >
        {body}
      </button>
    )
  }

  return (
    <a
      href={curso.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClassName}
    >
      {body}
    </a>
  )
}
