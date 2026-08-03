import { useId, useMemo, useState } from 'react'
import { ArrowRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { GuiaBookCard } from '@/components/guia/GuiaBookCard'
import { GuiaContentCard } from '@/components/guia/GuiaContentCard'
import { GuiaNewsletterCard } from '@/components/guia/GuiaNewsletterCard'
import { Button } from '@/components/ui/button'
import { getRecentCuratedByTipo, guiaTipos } from '@/data/guia'
import { guiaBooks } from '@/data/guiaBooks'
import { guiaNewsletters } from '@/data/guiaNewsletters'
import { guiaHashes } from '@/lib/siteLinks'
import { guiaRoutes } from '@/lib/guiaRoutes'
import { cn } from '@/lib/utils'

export function GuiaTiposSection() {
  const [selectedTipoId, setSelectedTipoId] = useState(guiaTipos[0]?.id ?? 'artigos')
  const tablistId = useId()

  const selectedTipo = guiaTipos.find((tipo) => tipo.id === selectedTipoId)
  const recentItems = useMemo(
    () => getRecentCuratedByTipo(selectedTipoId),
    [selectedTipoId],
  )
  const recentBooks = useMemo(() => guiaBooks.slice(0, 5), [])
  const recentNewsletters = useMemo(() => guiaNewsletters.slice(0, 5), [])

  const panelId = `${tablistId}-panel-${selectedTipoId}`

  return (
    <section
      id={guiaHashes.tipos}
      className="border-b border-neutral-500/10 bg-neutral-100 px-5 py-16 md:px-6 md:py-20"
      aria-labelledby="guia-tipos-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
            Por tipo de conteúdo
          </p>
          <h2
            id="guia-tipos-heading"
            className="mt-4 text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl"
          >
            Explorar por tipo de conteúdo
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-400 md:text-lg">
            Artigos, vídeos, cursos, livros, podcasts, eventos, canais e mais.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Tipos de conteúdo"
          className="mt-10 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {guiaTipos.map((tipo) => {
            const isSelected = tipo.id === selectedTipoId
            const tabId = `${tablistId}-tab-${tipo.id}`

            return (
              <button
                key={tipo.id}
                id={tabId}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls={panelId}
                tabIndex={isSelected ? 0 : -1}
                title={tipo.description}
                onClick={() => setSelectedTipoId(tipo.id)}
                className={cn(
                  'shrink-0 rounded-full border px-4 py-2.5 text-sm font-bold transition-colors',
                  isSelected
                    ? 'border-brand-300 bg-brand-400 text-neutral-100 shadow-[0_8px_24px_-12px_rgb(7_0_58_/_0.45)]'
                    : 'border-neutral-500/10 bg-brand-100/30 text-neutral-500 hover:border-brand-200 hover:bg-brand-100/60 hover:text-brand-500',
                )}
              >
                {tipo.title}
              </button>
            )
          })}
        </div>

        <div
          id={panelId}
          role="tabpanel"
          aria-labelledby={`${tablistId}-tab-${selectedTipoId}`}
          className="mt-8"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="text-sm font-semibold text-neutral-400">
              Adicionados recentemente em{' '}
              <span className="text-neutral-500">{selectedTipo?.title}</span>
            </p>
            <Button
              asChild
              variant="outline"
              className="w-full shrink-0 border-brand-200 bg-brand-100/40 font-bold text-brand-500 hover:bg-brand-100 sm:w-auto"
            >
              <Link to={guiaRoutes.tipo(selectedTipoId)}>
                Ver todos os {selectedTipo?.title?.toLowerCase()}
                <ArrowRight size={16} weight="bold" aria-hidden />
              </Link>
            </Button>
          </div>

          {selectedTipoId === 'livros' && recentBooks.length > 0 ? (
            <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {recentBooks.map((book) => (
                <li key={book.id}>
                  <GuiaBookCard book={book} className="h-full" />
                </li>
              ))}
            </ul>
          ) : selectedTipoId === 'newsletters' && recentNewsletters.length > 0 ? (
            <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {recentNewsletters.map((newsletter) => (
                <li key={newsletter.id}>
                  <GuiaNewsletterCard newsletter={newsletter} className="h-full" />
                </li>
              ))}
            </ul>
          ) : recentItems.length > 0 ? (
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {recentItems.map((item) => (
                <li key={item.id}>
                  <GuiaContentCard item={item} linked className="h-full" />
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-6 rounded-2xl border border-dashed border-neutral-500/15 bg-brand-100/20 px-5 py-8 text-center text-sm text-neutral-400">
              Em breve. Curadoria para este tipo de conteúdo.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
