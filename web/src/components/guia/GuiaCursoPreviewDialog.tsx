import { Link } from 'react-router-dom'
import { ArrowSquareOut, ChatCircleDots } from '@phosphor-icons/react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import {
  GUIA_CURSO_FEEDBACK_LABEL,
  GUIA_CURSO_PARTNER_LABEL,
} from '@/components/guia/GuiaCursoCard'
import type { GuiaCurso } from '@/data/guiaCursos'
import { getRelatosForCurso, type GuiaCursoRelato } from '@/data/guiaCursoFeedback'
import { cursoMetaLine } from '@/lib/guiaCursoMeta'
import { guiaRoutes } from '@/lib/guiaRoutes'

type GuiaCursoPreviewDialogProps = {
  curso: GuiaCurso | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

function formatRelatoDate(iso?: string) {
  if (!iso) return null
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return null
  return new Intl.DateTimeFormat('pt-BR', {
    month: 'short',
    year: 'numeric',
  }).format(date)
}

function RelatoCard({ relato }: { relato: GuiaCursoRelato }) {
  const dateLabel = formatRelatoDate(relato.receivedAt)

  return (
    <li className="rounded-xl border border-neutral-500/10 bg-neutral-100/80 px-4 py-3">
      <blockquote className="text-sm leading-relaxed text-neutral-500 whitespace-pre-line">
        “{relato.text}”
      </blockquote>
      {(relato.author || dateLabel) && (
        <footer className="mt-3 text-xs font-semibold text-neutral-400">
          {relato.author}
          {relato.author && dateLabel ? ' · ' : null}
          {dateLabel}
        </footer>
      )}
    </li>
  )
}

function RelatosSection({ curso }: { curso: GuiaCurso }) {
  const relatos = getRelatosForCurso(curso.id)

  if (relatos.length === 0) {
    return (
      <section className="rounded-2xl border border-dashed border-neutral-500/15 bg-brand-100/20 px-5 py-6">
        <p className="text-sm font-semibold text-neutral-400">
          Ainda não há relatos publicados para este curso.
        </p>
        <p className="mt-2 text-xs text-neutral-400/80">
          Se você fez este curso, compartilhe sua experiência com a comunidade.
        </p>
      </section>
    )
  }

  return (
    <section>
      <div className="flex items-center gap-2">
        <ChatCircleDots size={18} weight="duotone" className="text-brand-400" aria-hidden />
        <h3 className="text-sm font-black tracking-wide text-neutral-500 uppercase">
          Relatos da comunidade
        </h3>
      </div>
      <ul className="mt-4 space-y-3">
        {relatos.map((relato) => (
          <RelatoCard key={relato.id} relato={relato} />
        ))}
      </ul>
    </section>
  )
}

export function GuiaCursoPreviewDialog({
  curso,
  open,
  onOpenChange,
}: GuiaCursoPreviewDialogProps) {
  if (!curso) return null

  const meta = cursoMetaLine(curso)

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="p-0">
        <SheetHeader>
          {curso.isPartner ? (
            <span className="inline-flex w-fit rounded-full bg-brand-400 px-3 py-1 text-[0.65rem] font-bold tracking-[0.14em] text-neutral-100 uppercase">
              {GUIA_CURSO_PARTNER_LABEL}
            </span>
          ) : null}
          <SheetTitle className={curso.isPartner ? 'mt-2' : undefined}>
            {curso.title}
          </SheetTitle>
          {meta ? <SheetDescription>{meta}</SheetDescription> : null}
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {curso.themes.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {curso.themes.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="border-neutral-500/10 text-[0.65rem] font-bold text-neutral-400 uppercase"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          ) : null}

          {curso.hasFeedback || getRelatosForCurso(curso.id).length > 0 ? (
            <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-brand-500 uppercase">
              <ChatCircleDots size={14} weight="fill" aria-hidden />
              {GUIA_CURSO_FEEDBACK_LABEL}
            </p>
          ) : null}

          <div className="mt-6">
            <RelatosSection curso={curso} />
          </div>
        </div>

        <SheetFooter>
          <Button asChild variant="guia-outline">
            <Link to={guiaRoutes.cursosPublicarRelato}>Enviar relato</Link>
          </Button>
          <Button asChild variant="guia">
            <a href={curso.url} target="_blank" rel="noopener noreferrer">
              Acessar curso
              <ArrowSquareOut size={16} weight="bold" aria-hidden />
            </a>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
