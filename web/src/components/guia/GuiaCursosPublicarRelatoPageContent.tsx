import { ArrowSquareOut } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { GuiaBackToGuiaLink } from '@/components/guia/GuiaBackToGuiaLink'
import { GuiaFaqLink } from '@/components/guia/GuiaFaqLink'
import { Button } from '@/components/ui/button'
import {
  guiaCursosPublicarRelato,
  guiaCursosRelatoFormUrl,
} from '@/data/guiaCursosCopy'
import { guiaRoutes } from '@/lib/guiaRoutes'
import { routes } from '@/lib/siteLinks'

export function GuiaCursosPublicarRelatoPageContent() {
  return (
    <div className="mt-8 w-full">
      <div className="flex flex-wrap items-center gap-3">
        <GuiaBackToGuiaLink section="cursos" />
        <GuiaFaqLink />
      </div>

      <header className="mt-8 max-w-3xl">
        <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
          Contribua com a comunidade
        </p>
        <h1 className="mt-3 text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl">
          {guiaCursosPublicarRelato.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-neutral-400 md:text-lg">
          {guiaCursosPublicarRelato.lead}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-400">
          {guiaCursosPublicarRelato.intro}
        </p>
      </header>

      <ul className="mt-10 grid gap-4 md:grid-cols-3">
        {guiaCursosPublicarRelato.steps.map((step, index) => (
          <li
            key={step.title}
            className="rounded-2xl border border-neutral-500/10 bg-brand-100/25 p-5"
          >
            <span className="text-xs font-black tracking-wide text-brand-400 uppercase">
              Passo {index + 1}
            </span>
            <h2 className="mt-2 text-base font-black text-neutral-500">{step.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">
              {step.description}
            </p>
          </li>
        ))}
      </ul>

      <section className="mt-10 rounded-3xl border border-brand-200/40 bg-brand-100/30 p-6 md:p-8">
        <h2 className="text-xl font-black text-neutral-500">Submeta seu relato</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-400">
          Preencha o formulário com o máximo de detalhes possível. Ao enviar, você
          concorda com nossos{' '}
          <Link to={routes.termosEPoliticas} className="font-bold text-brand-500 hover:underline">
            Termos e Políticas
          </Link>
          .
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild variant="guia">
            <a href={guiaCursosRelatoFormUrl} target="_blank" rel="noopener noreferrer">
              Preencher formulário
              <ArrowSquareOut size={16} weight="bold" aria-hidden />
            </a>
          </Button>
          <Button asChild variant="guia-outline">
            <Link to={`${guiaRoutes.cursos}?relatos=1`}>Ver relatos publicados</Link>
          </Button>
        </div>

        <p className="mt-4 text-xs text-neutral-400">
          O formulário abre em uma nova aba enquanto migramos a experiência para o
          site novo (Fase 3).
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-sm font-black tracking-wide text-neutral-500 uppercase">
          Sugestões do que abordar no relato
        </h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {guiaCursosPublicarRelato.suggestions.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-neutral-500/10 bg-neutral-100/80 px-4 py-3 text-sm text-neutral-500"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
