import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { TestimonialsWall } from '@/components/TestimonialsWall'
import { communityMoments } from '@/data/communityMoments'
import {
  communityChannels,
  externalSupport,
  routes,
  superSite,
} from '@/lib/siteLinks'

const timeline = [
  {
    period: '2019',
    title: 'Nasce o VagasUX',
    text: 'Um site de vagas selecionadas em UX — o embrião do hub que conhecemos hoje.',
  },
  {
    period: 'A virada',
    title: 'Mah assume o bastão',
    text: 'Marianna Piacesi integra o Guia do Product Designer e Vagas para iniciantes, com foco em acesso e acolhimento.',
  },
  {
    period: 'Crescimento',
    title: 'De projeto a movimento',
    text: 'Voluntários, escolas parceiras, seletivas e lives passam a sustentar a iniciativa no dia a dia.',
  },
  {
    period: 'Hoje',
    title: 'Hub de oportunidades e pessoas',
    text: 'Curadoria de vagas, conteúdos e uma rede engajada pra quem está começando, migrando ou evoluindo em design.',
  },
] as const

const impactStats = [
  { value: '+40 mil', label: 'pessoas engajadas' },
  { value: '+230', label: 'bolsas distribuídas' },
  { value: '+61', label: 'seletivas realizadas' },
  { value: '+30', label: 'iniciantes contratados com apoio da iniciativa' },
] as const

const entryChannels = [
  {
    label: 'WhatsApp — canal de avisos',
    href: communityChannels.whatsappAvisos,
  },
  {
    label: 'Telegram — conversas do Guia',
    href: communityChannels.telegramConversas,
  },
  {
    label: 'Discord — servidor VagasUX',
    href: communityChannels.discord,
  },
] as const

const moreChannels = [
  {
    label: 'WhatsApp — avisos da moderação',
    href: communityChannels.whatsappModeracao,
  },
  {
    label: 'WhatsApp — grupo #1',
    href: communityChannels.whatsappGrupo1,
  },
  {
    label: 'WhatsApp — grupo #2',
    href: communityChannels.whatsappGrupo2,
  },
  {
    label: 'WhatsApp — Damas da VagasUX',
    href: communityChannels.whatsappDamas,
  },
  {
    label: 'Telegram — canal VagasUX',
    href: communityChannels.telegramCanal,
  },
] as const

export function AComunidadePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pt-14 pb-12 md:px-6 md:pt-20 md:pb-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-28 -left-20 h-80 w-80 rounded-full bg-brand-200/45 blur-3xl" />
          <div className="absolute top-24 -right-16 h-72 w-72 rounded-full bg-complementary-200/55 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.28]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgb(111 106 148 / 0.2) 1px, transparent 0)',
              backgroundSize: '22px 22px',
            }}
          />
        </div>

        <div className="mx-auto max-w-3xl md:max-w-4xl">
          <p className="mural-fade text-xs font-bold tracking-[0.14em] text-brand-400 uppercase md:text-sm">
            Sobre a comunidade
          </p>
          <h1 className="mural-fade mural-fade-delay-1 mt-3 max-w-3xl text-4xl font-black tracking-tight text-neutral-500 md:text-5xl md:leading-[1.1]">
            A comunidade que nasceu pra abrir caminhos em UX
          </h1>
          <p className="mural-fade mural-fade-delay-2 mt-5 max-w-xl text-lg leading-relaxed text-neutral-400 md:text-xl">
            Curadoria de vagas, conteúdos e uma rede voluntária — com foco em
            quem está começando ou migrando pra área.
          </p>
          <div className="mural-fade mural-fade-delay-2 mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="px-6 font-bold">
              <a href="#fazer-parte">Quero fazer parte</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-6 font-bold">
              <Link to={routes.oportunidades}>Ver oportunidades</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Story + timeline */}
      <section className="border-t border-neutral-200/70 px-5 py-14 md:px-6 md:py-16">
        <div className="mx-auto grid max-w-3xl gap-12 md:max-w-4xl md:grid-cols-[1fr_1.15fr] md:gap-14">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-neutral-500 md:text-3xl">
              Nossa história
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-neutral-400 md:text-[17px]">
              <p>
                A VagasUX é um hub de iniciativas acessíveis em UX e design:
                vagas, materiais pra estudar e pessoas pra trocar dúvidas e
                experiências.
              </p>
              <p>
                Idealizada por{' '}
                <a
                  href={externalSupport.mah}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-500 underline decoration-brand-200 underline-offset-4 hover:text-brand-400"
                >
                  Marianna Piacesi (Mah)
                </a>
                , cresceu com voluntários que acreditam que oportunidades devem
                ser acessíveis pra todas as pessoas.
              </p>
              <p>
                No caminho, vieram o{' '}
                <a
                  href={superSite.guia}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-500 underline decoration-brand-200 underline-offset-4 hover:text-brand-400"
                >
                  Guia do Product Designer
                </a>{' '}
                e{' '}
                <a
                  href={superSite.iniciantes}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-500 underline decoration-brand-200 underline-offset-4 hover:text-brand-400"
                >
                  Vagas para iniciantes
                </a>
                .
              </p>
            </div>
          </div>

          <ol className="space-y-0">
            {timeline.map((item, index) => (
              <li
                key={item.period}
                className={`relative border-l-2 border-brand-200 pl-5 pb-8 last:pb-0 ${
                  index === timeline.length - 1 ? '' : ''
                }`}
              >
                <span
                  aria-hidden
                  className="absolute top-1 -left-[5px] size-2 rounded-full bg-brand-300 ring-4 ring-neutral-100"
                />
                <p className="text-xs font-bold tracking-[0.12em] text-brand-400 uppercase">
                  {item.period}
                </p>
                <h3 className="mt-1.5 text-lg font-black text-neutral-500">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-neutral-400">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Moments */}
      <section className="bg-brand-100/40 px-5 py-14 md:px-6 md:py-16">
        <div className="mx-auto max-w-3xl md:max-w-4xl">
          <h2 className="text-2xl font-black tracking-tight text-neutral-500 md:text-3xl">
            Momentos da comunidade
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">
            Encontros, lives e o dia a dia de quem constrói a VagasUX. Quando
            você indicar as fotos, a gente encaixa aqui.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
            {communityMoments.map((moment, index) => (
              <li
                key={moment.id}
                className={`overflow-hidden ${
                  index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
              >
                {moment.src ? (
                  <img
                    src={moment.src}
                    alt={moment.alt}
                    className={`w-full object-cover ${
                      index === 0 ? 'aspect-[16/10] sm:h-full' : 'aspect-[4/3]'
                    }`}
                    loading="lazy"
                  />
                ) : (
                  <div
                    className={`flex w-full flex-col justify-end bg-gradient-to-br p-4 ${
                      index === 0
                        ? 'aspect-[16/10] from-brand-200/80 via-brand-100 to-complementary-100 sm:min-h-full sm:aspect-auto'
                        : 'aspect-[4/3] from-brand-100 via-neutral-100 to-complementary-100'
                    }`}
                  >
                    <span className="text-[11px] font-bold tracking-[0.14em] text-brand-400/70 uppercase">
                      Foto em breve
                    </span>
                    <p className="mt-1 text-sm font-bold text-neutral-500 md:text-base">
                      {moment.caption}
                    </p>
                  </div>
                )}
                {moment.src ? (
                  <p className="mt-2 text-sm font-semibold text-neutral-500">
                    {moment.caption}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Impact */}
      <section className="px-5 py-14 md:px-6 md:py-16">
        <div className="mx-auto max-w-3xl md:max-w-4xl">
          <h2 className="text-2xl font-black tracking-tight text-neutral-500 md:text-3xl">
            Nosso impacto
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">
            Um retrato aproximado do que a comunidade já construiu até aqui.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {impactStats.map((stat) => (
              <li key={stat.label}>
                <p className="text-3xl font-black tracking-tight text-brand-500 md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-snug text-neutral-400">
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-neutral-200/70 bg-neutral-100 px-5 py-14 md:px-6 md:py-16">
        <div className="mx-auto max-w-3xl md:max-w-4xl">
          <h2 className="text-2xl font-black tracking-tight text-neutral-500 md:text-3xl">
            O que a comunidade diz
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">
            Relatos curtos de quem faz parte da VagasUX.
          </p>
          <div className="mt-10">
            <TestimonialsWall />
          </div>
        </div>
      </section>

      {/* Join */}
      <section
        id="fazer-parte"
        className="scroll-mt-24 px-5 py-14 md:px-6 md:py-16"
      >
        <div className="mx-auto max-w-3xl md:max-w-4xl">
          <h2 className="text-2xl font-black tracking-tight text-neutral-500 md:text-3xl">
            Como fazer parte
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">
            Entre pelos canais oficiais, leia o{' '}
            <Link
              to={routes.codigoDeConduta}
              className="font-semibold text-brand-500 underline decoration-brand-200 underline-offset-4 hover:text-brand-400"
            >
              código de conduta
            </Link>{' '}
            e participe com respeito.
          </p>

          <ul className="mt-8 space-y-3">
            {entryChannels.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 border-b border-neutral-200/80 py-4 text-base font-bold text-brand-500 transition-colors hover:text-brand-400 md:text-lg"
                >
                  <span>{item.label}</span>
                  <span
                    aria-hidden
                    className="text-neutral-300 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-300"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <details className="mt-8 group">
            <summary className="cursor-pointer text-sm font-bold text-neutral-400 transition-colors hover:text-brand-500">
              Mais canais da comunidade
            </summary>
            <ul className="mt-4 space-y-2">
              {moreChannels.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-neutral-400 underline decoration-neutral-200 underline-offset-4 hover:text-brand-500"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </details>

          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
            <Link
              to={routes.quemOrganiza}
              className="text-brand-500 underline decoration-brand-200 underline-offset-4 hover:text-brand-400"
            >
              Quem organiza
            </Link>
            <Link
              to={routes.apoie}
              className="text-neutral-400 underline decoration-neutral-200 underline-offset-4 hover:text-brand-500"
            >
              Apoie a iniciativa
            </Link>
            <Link
              to={routes.parcerias}
              className="text-neutral-400 underline decoration-neutral-200 underline-offset-4 hover:text-brand-500"
            >
              Parcerias
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
