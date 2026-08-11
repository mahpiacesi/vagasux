import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowSquareOut, MagnifyingGlass } from '@phosphor-icons/react'
import { Input } from '@/components/ui/input'
import { GuiaBackToGuiaLink } from '@/components/guia/GuiaBackToGuiaLink'
import { GuiaFaqLink } from '@/components/guia/GuiaFaqLink'
import { searchGuia } from '@/data/guiaSearchIndex'

export function GuiaSearchResultsPageContent() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') ?? ''
  const results = useMemo(() => searchGuia(query, 100), [query])
  const grouped = useMemo(() => {
    const map = new Map<string, typeof results>()
    for (const result of results) {
      map.set(result.category, [...(map.get(result.category) ?? []), result])
    }
    return [...map]
  }, [results])

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = new FormData(event.currentTarget).get('q')?.toString() ?? ''
    setSearchParams(value.trim() ? { q: value.trim() } : {})
  }

  return (
    <div className="mt-8 w-full">
      <div className="flex flex-wrap items-center gap-3">
        <GuiaBackToGuiaLink />
        <GuiaFaqLink />
      </div>
      <header className="mt-8 max-w-3xl">
        <h1 className="text-3xl font-black tracking-[-0.04em] text-neutral-500 md:text-4xl">
          Resultados da busca
        </h1>
        <form className="relative mt-6" onSubmit={submit}>
          <MagnifyingGlass size={20} className="absolute top-1/2 left-4 -translate-y-1/2 text-brand-400" />
          <Input name="q" defaultValue={query} className="h-14 rounded-2xl pl-12" />
        </form>
        <p className="mt-4 text-sm font-semibold text-neutral-400">
          {query ? `${results.length} resultados para “${query}”` : 'Digite um termo para buscar no Guia.'}
        </p>
      </header>
      {grouped.length ? (
        <div className="mt-10 space-y-12">
          {grouped.map(([category, items]) => (
            <section key={category}>
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-black text-neutral-500">{category}</h2>
                <span className="rounded-full bg-brand-100 px-2.5 py-1 text-xs font-bold text-brand-500">{items.length}</span>
              </div>
              <ul className="mt-4 grid gap-4 md:grid-cols-2">
                {items.map((item) => (
                  <li key={item.id}>
                    {item.external ? (
                      <a href={item.to} target="_blank" rel="noopener noreferrer" className="group flex min-h-20 items-center justify-between rounded-2xl border border-neutral-500/10 bg-neutral-100 px-5 py-4 font-bold text-neutral-500 hover:border-brand-300 hover:bg-brand-100/30">
                        <span>{item.title}</span><ArrowSquareOut size={16} className="text-brand-400" />
                      </a>
                    ) : (
                      <Link to={item.to} className="flex min-h-20 items-center rounded-2xl border border-neutral-500/10 bg-neutral-100 px-5 py-4 font-bold text-neutral-500 hover:border-brand-300 hover:bg-brand-100/30">
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      ) : query ? (
        <p className="mt-10 rounded-2xl border border-dashed border-neutral-500/15 p-8 text-center text-neutral-400">Nenhum resultado encontrado.</p>
      ) : null}
    </div>
  )
}
