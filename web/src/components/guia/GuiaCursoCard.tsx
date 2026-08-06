import { ArrowSquareOut, GraduationCap } from '@phosphor-icons/react'
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
  /** Oculta tags de tema, meta (custo/modalidade) e badge de relatos. */
  hideTags?: boolean
}

function CursoCover({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex w-full items-center justify-center rounded-xl border border-brand-200/40 bg-gradient-to-br from-brand-100/80 to-brand-100/30 text-brand-400',
        'aspect-video',
        className,
      )}
    >
      <GraduationCap size={36} weight="duotone" aria-hidden />
    </div>
  )
}

function PartnerLabel({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex w-fit self-start rounded-full bg-brand-400 px-3 py-1 text-[0.65rem] font-bold tracking-[0.14em] text-neutral-100 uppercase',
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

function CardBody({
  curso,
  meta,
  previewMode,
  hideTags,
}: {
  curso: GuiaCurso
  meta: string
  previewMode: boolean
  hideTags: boolean
}) {
  return (
    <>
      <CursoCover />

      <div className="mt-4 flex flex-1 flex-col">
        {curso.isPartner ? <PartnerLabel className="mb-2" /> : null}

        <h3 className="text-base leading-snug font-black text-neutral-500 group-hover:text-brand-500">
          {curso.title}
        </h3>

        {curso.themes.length > 0 && !hideTags ? (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
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
          </div>
        ) : null}

        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
          <div className="flex min-w-0 flex-1 flex-col gap-1.5">
            {meta && !hideTags ? (
              <p className="text-xs font-semibold text-neutral-400">{meta}</p>
            ) : null}
            {curso.hasFeedback && !hideTags ? <FeedbackBadge /> : null}
          </div>
          {previewMode ? (
            <span className="text-xs font-bold tracking-wide text-brand-400 uppercase">
              Ver detalhes
            </span>
          ) : (
            <ArrowSquareOut
              size={16}
              weight="bold"
              className="shrink-0 text-brand-400"
              aria-hidden
            />
          )}
        </div>
      </div>
    </>
  )
}

export function GuiaCursoCard({
  curso,
  className,
  previewMode = false,
  onPreview,
  hideTags = false,
}: GuiaCursoCardProps) {
  const meta = cursoMetaLine(curso)
  const cardClassName = cn(
    'group flex h-full flex-col rounded-2xl border p-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400',
    curso.isPartner
      ? 'border-brand-300 bg-brand-100/50 hover:border-brand-400 hover:bg-brand-100/70'
      : 'border-neutral-500/10 bg-neutral-100 hover:border-brand-300 hover:bg-brand-100/30',
    className,
  )

  if (previewMode && onPreview) {
    return (
      <button type="button" onClick={() => onPreview(curso)} className={cn(cardClassName, 'cursor-pointer text-left')}>
        <CardBody curso={curso} meta={meta} previewMode={previewMode} hideTags={hideTags} />
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
      <CardBody curso={curso} meta={meta} previewMode={false} hideTags={hideTags} />
    </a>
  )
}
