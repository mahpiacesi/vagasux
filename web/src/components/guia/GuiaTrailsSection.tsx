import { Books, Clock, LockSimple, Path } from '@phosphor-icons/react'
import { Badge } from '@/components/ui/badge'
import {
  guiaDifficultyLabels,
  guiaTrails,
  type GuiaTrail,
} from '@/data/guia'
import { guiaHashes } from '@/lib/siteLinks'

function GuiaTrailCard({ trail }: { trail: GuiaTrail }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-neutral-500/10 bg-neutral-100 p-5 md:p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-500">
          <Path size={22} weight="bold" aria-hidden />
        </div>
        <Badge
          variant="outline"
          className="border-brand-200/80 bg-brand-100/50 text-[0.65rem] font-bold text-brand-500 uppercase"
        >
          {guiaDifficultyLabels[trail.level]}
        </Badge>
      </div>

      <h3 className="mt-4 text-lg leading-snug font-black text-neutral-500">
        {trail.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-400">
        {trail.description}
      </p>

      <dl className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold text-neutral-400">
        <div className="inline-flex items-center gap-1">
          <Clock size={14} weight="bold" aria-hidden />
          <dt className="sr-only">Duração estimada</dt>
          <dd>{trail.duration}</dd>
        </div>
        <div className="inline-flex items-center gap-1">
          <Books size={14} weight="bold" aria-hidden />
          <dt className="sr-only">Conteúdos</dt>
          <dd>{trail.contentCount} conteúdos</dd>
        </div>
      </dl>

      <div className="mt-5">
        <div className="flex items-center justify-between gap-2 text-[0.65rem] font-bold tracking-wide text-neutral-400 uppercase">
          <span>Progresso</span>
          <span>{trail.progress}%</span>
        </div>
        <div
          className="mt-2 h-2 overflow-hidden rounded-full bg-neutral-500/8"
          role="progressbar"
          aria-valuenow={trail.progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Progresso da trilha ${trail.title}`}
        >
          <div
            className="h-full rounded-full bg-brand-300 transition-all"
            style={{ width: `${trail.progress}%` }}
          />
        </div>
      </div>

      <button
        type="button"
        disabled
        aria-disabled="true"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-500/10 bg-neutral-500/5 px-4 py-2.5 text-sm font-bold text-neutral-400"
      >
        <LockSimple size={16} weight="bold" aria-hidden />
        Em breve
      </button>
    </article>
  )
}

export function GuiaTrailsSection() {
  return (
    <section
      id={guiaHashes.trilhas}
      className="border-b border-neutral-500/10 bg-brand-100/25 px-5 py-16 md:px-6 md:py-20"
      aria-labelledby="guia-trails-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
            Trilhas
          </p>
          <h2
            id="guia-trails-heading"
            className="mt-4 text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl"
          >
            Aprenda passo a passo
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-400 md:text-lg">
            Trilhas sequenciais com nível, tempo estimado e estrutura pronta
            para acompanhar seu progresso no futuro.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {guiaTrails.map((trail) => (
            <li key={trail.id}>
              <GuiaTrailCard trail={trail} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
