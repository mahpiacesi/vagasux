import { Link } from 'react-router-dom'
import { ArrowSquareOut, ChatCircleDots, X } from '@phosphor-icons/react'
import { Dialog } from 'radix-ui'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  GUIA_CURSO_FEEDBACK_LABEL,
  GUIA_CURSO_PARTNER_LABEL,
} from '@/components/guia/GuiaCursoCard'
import type { GuiaCurso } from '@/data/guiaCursos'
import { cursoMetaLine } from '@/lib/guiaCursoMeta'
import { guiaRoutes } from '@/lib/guiaRoutes'

type GuiaCursoPreviewDialogProps = {
  curso: GuiaCurso | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

/** Placeholder para Fase 2 — relatos reais virão do Notion. */
const SAMPLE_RELATOS: Record<string, string[]> = {
  '1061fe3b9e2e4360ad65793b7aaab059': [
    'Formação completa e bem estruturada para quem está começando. A trilha de UX é um bom ponto de partida.',
    'Conteúdo denso. Vale combinar com projetos práticos paralelos para fixar.',
  ],
  b492db04bde5445aa8e06798350656c3: [
    'Bootcamp intenso com mentoria. Exige dedicação, mas a comunidade ajuda bastante.',
  ],
}

function RelatosSection({ curso }: { curso: GuiaCurso }) {
  const relatos = SAMPLE_RELATOS[curso.id]

  if (!curso.hasFeedback && !relatos) {
    return (
      <section className="rounded-2xl border border-dashed border-neutral-500/15 bg-brand-100/20 px-5 py-6">
        <p className="text-sm font-semibold text-neutral-400">
          Ainda não há relatos publicados para este curso.
        </p>
        <p className="mt-2 text-xs text-neutral-400/80">
          Em breve você poderá ler e enviar relatos da comunidade (Fase 2).
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
        {(relatos ?? [
          'Relatos reais deste curso serão carregados do Notion na Fase 2.',
        ]).map((relato) => (
          <li
            key={relato}
            className="rounded-xl border border-neutral-500/10 bg-neutral-100/80 px-4 py-3 text-sm leading-relaxed text-neutral-500"
          >
            “{relato}”
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs font-semibold text-neutral-400">
        Preview: conteúdo ilustrativo até integração com a base de feedbacks.
      </p>
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
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-neutral-500/40 backdrop-blur-[2px]" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-50 flex max-h-[min(90vh,820px)] w-[min(92vw,640px)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-3xl border border-neutral-500/10 bg-neutral-100 shadow-2xl outline-none">
          <div className="flex items-start justify-between gap-4 border-b border-neutral-500/10 px-6 py-5">
            <div className="min-w-0 flex-1">
              {curso.isPartner ? (
                <span className="inline-flex rounded-full bg-brand-400 px-3 py-1 text-[0.65rem] font-bold tracking-[0.14em] text-neutral-100 uppercase">
                  {GUIA_CURSO_PARTNER_LABEL}
                </span>
              ) : null}
              <Dialog.Title className="mt-2 text-xl font-black text-neutral-500">
                {curso.title}
              </Dialog.Title>
              {meta ? (
                <Dialog.Description className="mt-2 text-sm font-semibold text-neutral-400">
                  {meta}
                </Dialog.Description>
              ) : null}
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                className="rounded-full p-2 text-neutral-400 transition-colors hover:bg-brand-100/60 hover:text-brand-500"
                aria-label="Fechar"
              >
                <X size={20} weight="bold" />
              </button>
            </Dialog.Close>
          </div>

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

            {curso.hasFeedback ? (
              <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-brand-500 uppercase">
                <ChatCircleDots size={14} weight="fill" aria-hidden />
                {GUIA_CURSO_FEEDBACK_LABEL}
              </p>
            ) : null}

            <div className="mt-6">
              <RelatosSection curso={curso} />
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-neutral-500/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <Button asChild variant="guia-outline">
              <Link to={guiaRoutes.cursosPublicarRelato}>Enviar relato</Link>
            </Button>
            <Button asChild variant="guia">
              <a href={curso.url} target="_blank" rel="noopener noreferrer">
                Acessar curso
                <ArrowSquareOut size={16} weight="bold" aria-hidden />
              </a>
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
