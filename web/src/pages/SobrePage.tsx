import {
  ArrowRight,
  ChatCircleDots,
  Handshake,
  MagnifyingGlass,
  Umbrella,
  UsersThree,
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import founderPhoto from '@/assets/volunteers/marianna-piacesi.jpg'
import { ScrollReveal } from '@/components/guilda/ScrollReveal'
import { SobrePhotoGallery } from '@/components/sobre/SobrePhotoGallery'
import { SobreTimeline } from '@/components/sobre/SobreTimeline'
import { UmbrellaHeroIllustration } from '@/components/UmbrellaHeroIllustration'
import { Button } from '@/components/ui/button'
import { sobreLinks } from '@/data/sobre'
import { routes } from '@/lib/siteLinks'

const collectiveCards = [
  {
    id: 'panorama',
    eyebrow: 'Pesquisa',
    title: 'Panorama VagasUX',
    phrase: 'A gente pergunta antes de sair assumindo.',
    description:
      'Pesquisas realizadas para entender melhor experiências, desafios e percepções de quem está na área de UX e Design.',
    cta: 'Conhecer o Panorama',
    href: sobreLinks.panorama,
    external: true,
    Icon: MagnifyingGlass,
  },
  {
    id: 'feedbacks',
    eyebrow: 'Relatos',
    title: 'Feedbacks da comunidade',
    phrase: 'Quem vive a experiência também ajuda a melhorar.',
    description:
      'Relatos e experiências compartilhadas pela comunidade ajudam outras pessoas e também dão pistas sobre o que faz sentido criar e melhorar.',
    cta: 'Ver feedbacks',
    href: sobreLinks.feedbacks,
    external: false,
    Icon: ChatCircleDots,
  },
  {
    id: 'mentorias',
    eyebrow: 'Troca',
    title: 'Mentorias',
    phrase: 'Troca também é aprendizado.',
    description:
      'As mentorias aproximam pessoas em diferentes momentos da carreira para compartilhar experiências e pensar juntas sobre próximos passos.',
    cta: 'Conhecer as mentorias',
    href: sobreLinks.mentoria,
    external: false,
    Icon: Handshake,
  },
] as const

export function SobrePage() {
  return (
    <main>
      <Hero />
      <WhatIsSection />
      <WhySection />
      <HistorySection />
      <CommunityInMotionSection />
      <FounderSection />
      <CollectiveSection />
      <ClosingSection />
    </main>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-500/10 bg-gradient-to-b from-brand-100/80 via-neutral-100 to-complementary-100/40 px-5 pt-16 pb-16 md:px-6 md:pt-24 md:pb-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-24 -left-16 h-[28rem] w-[28rem] rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute top-24 -right-20 h-80 w-80 rounded-full bg-complementary-200/50 blur-3xl" />
        <Umbrella
          size={220}
          weight="duotone"
          className="absolute -right-8 bottom-[-3rem] rotate-[-18deg] text-brand-200/50 md:right-8 md:bottom-[-2rem] md:size-[18rem]"
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)] lg:gap-14">
        <div>
          <p className="mural-fade text-xs font-bold tracking-[0.22em] text-brand-400 uppercase md:text-sm">
            Sobre a VagasUX
          </p>
          <h1 className="mural-fade mural-fade-delay-1 mt-5 max-w-3xl text-[2.45rem] leading-[1.04] font-black tracking-[-0.045em] text-neutral-500 md:text-6xl lg:text-[4.15rem]">
            Tem espaço pra você{' '}
            <br />
            no design. ☂️
          </h1>
          <p className="mural-fade mural-fade-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-neutral-400 md:text-xl">
            A VagasUX é uma comunidade criada para aproximar pessoas de
            conhecimento, oportunidades e outras pessoas no universo de UX,
            Produto e Design.
          </p>
        </div>

        <div className="mural-fade mural-fade-delay-2 mx-auto w-full max-w-md lg:max-w-none">
          <UmbrellaHeroIllustration />
        </div>
      </div>
    </section>
  )
}

function WhatIsSection() {
  return (
    <section className="px-5 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-16">
        <ScrollReveal>
          <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
            O que é a VagasUX?
          </p>
          <h2 className="mt-4 text-3xl leading-[1.08] font-black tracking-[-0.04em] text-neutral-500 md:text-5xl">
            Tudo começou com uma vaga.
          </h2>
        </ScrollReveal>

        <ScrollReveal delayMs={80} className="space-y-5 text-base leading-relaxed text-neutral-400 md:text-lg">
          <p>
            A VagasUX nasceu como uma curadoria de vagas para pessoas
            interessadas em UX e Design.
          </p>
          <p>
            Com o tempo, ficou claro que quem está tentando entrar ou crescer
            na área precisava de muito mais do que uma lista de oportunidades.
          </p>
          <p>
            Era preciso encontrar informação, referências, pessoas, experiências
            e caminhos.
          </p>
          <p>
            Assim, a VagasUX foi crescendo junto com a comunidade e se
            transformando em um espaço que conecta{' '}
            <strong className="font-bold text-neutral-500">
              pessoas, conhecimento e oportunidades
            </strong>
            .
          </p>
          <p>A VagasUX hoje reúne diferentes iniciativas, mas todas partem da mesma ideia:</p>
          <blockquote className="rounded-3xl border border-brand-200/70 bg-brand-100/50 px-6 py-5 text-xl leading-snug font-black tracking-[-0.03em] text-neutral-500 md:text-2xl">
            tornar a jornada em UX mais acessível e menos solitária.
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  )
}

function WhySection() {
  return (
    <section className="relative overflow-hidden bg-neutral-500 px-5 py-16 text-neutral-100 md:px-6 md:py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-16 right-[-10%] h-64 w-64 rounded-full bg-brand-400/30 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-8%] h-72 w-72 rounded-full bg-complementary-400/20 blur-3xl" />
        <Umbrella
          size={180}
          weight="duotone"
          className="absolute right-[8%] bottom-[-1.5rem] rotate-12 text-neutral-100/10"
        />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <ScrollReveal>
          <p className="text-xs font-bold tracking-[0.2em] text-complementary-300 uppercase">
            Por que a VagasUX existe?
          </p>
          <h2 className="mt-4 text-3xl leading-[1.08] font-black tracking-[-0.04em] md:text-5xl">
            Porque começar já é difícil.{' '}
            <span className="text-mark-on-dark">Começar sozinho não precisa ser.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delayMs={90}>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-300 md:text-lg">
            Entrar ou crescer na área de design pode vir acompanhado de muitas
            dúvidas: por onde começar, o que estudar, como montar um portfólio,
            onde encontrar oportunidades, quais habilidades desenvolver e até se
            você está no caminho certo.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-300 md:text-lg">
            A VagasUX existe para aproximar pessoas de{' '}
            <strong className="font-bold text-neutral-100">
              conhecimento, oportunidades e comunidade
            </strong>
            , tornando essa jornada mais acessível.
          </p>
        </ScrollReveal>
        <ScrollReveal delayMs={140}>
          <p className="mt-10 max-w-2xl text-2xl leading-snug font-black tracking-[-0.03em] text-complementary-200 md:text-3xl">
            A gente não promete um caminho pronto. A gente ajuda você a
            encontrar o seu.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

function HistorySection() {
  return (
    <section className="px-5 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
            Linha do tempo
          </p>
          <h2 className="mt-4 text-3xl leading-[1.08] font-black tracking-[-0.04em] text-neutral-500 md:text-5xl">
            Nossa história
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-400 md:text-lg">
            A VagasUX foi mudando de forma junto com as pessoas que passaram por
            aqui. Os marcos entram nesta linha do tempo, um de cada vez.
          </p>
        </ScrollReveal>
        <div className="mt-12">
          <SobreTimeline />
        </div>
      </div>
    </section>
  )
}

function CommunityInMotionSection() {
  return (
    <section className="border-y border-neutral-500/10 bg-gradient-to-b from-complementary-100/50 to-neutral-100 px-5 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
            A comunidade em movimento
          </p>
          <h2 className="mt-4 text-3xl leading-[1.08] font-black tracking-[-0.04em] text-neutral-500 md:text-5xl">
            A VagasUX também acontece fora da tela.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-400 md:text-lg">
            Ao longo dos anos, a comunidade se encontrou em eventos, encontros,
            lives, mentorias, workshops e muitos outros momentos. Tem gente de
            verdade por trás da VagasUX.
          </p>
        </ScrollReveal>
        <div className="mt-12">
          <SobrePhotoGallery />
        </div>
      </div>
    </section>
  )
}

function FounderSection() {
  return (
    <section className="px-5 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
            Por trás da ☂️
          </p>
          <h2 className="mt-4 text-3xl leading-[1.08] font-black tracking-[-0.04em] text-neutral-500 md:text-5xl">
            Uma pessoa começou. Muita gente fez crescer.
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <ScrollReveal>
            <figure className="overflow-hidden rounded-[2rem] border border-neutral-500/10 bg-brand-100 shadow-[0_28px_70px_-40px_rgb(7_0_58_/_0.4)]">
              <img
                src={founderPhoto}
                alt="Mah Piacesi, fundadora da VagasUX"
                className="aspect-[4/5] w-full object-cover object-[center_22%]"
                width={720}
                height={900}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </ScrollReveal>

          <ScrollReveal delayMs={90}>
            <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
              Fundadora da VagasUX
            </p>
            <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-neutral-500 md:text-4xl">
              <a
                href={sobreLinks.founder}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-brand-200 decoration-4 underline-offset-4 transition-colors hover:text-brand-500 hover:decoration-brand-300"
              >
                Mah Piacesi
              </a>
            </h3>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-neutral-400 md:text-lg">
              <p>
                A VagasUX foi criada pela Mah Piacesi, Product Designer e
                community builder que transformou uma curadoria de vagas em uma
                iniciativa para aproximar pessoas de oportunidades, conhecimento
                e comunidade.
              </p>
              <p>
                O que começou como uma curadoria de vagas cresceu junto com a
                comunidade e hoje reúne diferentes iniciativas para quem está
                construindo sua jornada em UX, Produto e Design.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delayMs={80} className="mt-12 rounded-3xl border border-neutral-500/10 bg-brand-100/40 p-6 md:flex md:items-center md:justify-between md:gap-8 md:p-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-neutral-500 text-complementary-300">
                <UsersThree size={22} weight="bold" aria-hidden />
              </span>
              <h3 className="text-xl font-black tracking-[-0.03em] text-neutral-500 md:text-2xl">
                Mas a VagasUX não é feita por uma pessoa só.
              </h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400 md:text-base">
              Pessoas voluntárias ajudam a colocar iniciativas em prática,
              compartilhar conhecimento e manter a comunidade em movimento.
            </p>
          </div>
          <Button variant="guia" asChild className="mt-6 shrink-0 md:mt-0">
            <Link to={sobreLinks.voluntariado}>
              Conheça o voluntariado
              <ArrowRight weight="bold" aria-hidden />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}

function CollectiveSection() {
  return (
    <section className="border-t border-neutral-500/10 bg-neutral-100 px-5 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
            Construída com a comunidade
          </p>
          <h2 className="mt-4 text-3xl leading-[1.08] font-black tracking-[-0.04em] text-neutral-500 md:text-5xl">
            A comunidade também ajuda a construir a VagasUX.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-400 md:text-lg">
            Perguntas, experiências, feedbacks e necessidades da comunidade
            ajudam a orientar novas iniciativas e decisões.
          </p>
        </ScrollReveal>

        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {collectiveCards.map((card, index) => (
            <li key={card.id}>
              <ScrollReveal delayMs={index * 80} as="article" className="comunidade-card flex h-full flex-col rounded-3xl border border-neutral-500/10 bg-neutral-100 p-6 shadow-[0_20px_50px_-36px_rgb(7_0_58_/_0.3)] md:p-7">
                <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-500">
                  <card.Icon size={22} weight="bold" aria-hidden />
                </span>
                <p className="mt-5 text-xs font-bold tracking-[0.18em] text-brand-400 uppercase">
                  {card.eyebrow}
                </p>
                <h3 className="mt-2 text-xl font-black tracking-[-0.03em] text-neutral-500">
                  {card.title}
                </h3>
                <p className="mt-3 text-base font-bold leading-snug text-neutral-500">
                  {card.phrase}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">
                  {card.description}
                </p>
                <Button variant="guia-outline" asChild className="mt-6 self-start">
                  {card.external ? (
                    <a href={card.href} target="_blank" rel="noopener noreferrer">
                      {card.cta}
                      <ArrowRight weight="bold" aria-hidden />
                    </a>
                  ) : (
                    <Link to={card.href}>
                      {card.cta}
                      <ArrowRight weight="bold" aria-hidden />
                    </Link>
                  )}
                </Button>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function ClosingSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-500 px-5 py-20 text-neutral-100 md:px-6 md:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-20 left-[20%] h-64 w-64 rounded-full bg-brand-400/25 blur-3xl" />
        <div className="absolute right-[-6%] bottom-[-30%] h-80 w-80 rounded-full bg-complementary-400/15 blur-3xl" />
        <Umbrella
          size={260}
          weight="duotone"
          className="absolute -right-6 -bottom-10 rotate-[-16deg] text-complementary-300/20 md:right-10"
        />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <p className="text-xs font-bold tracking-[0.22em] text-complementary-300 uppercase">
            Continuamos
          </p>
          <h2 className="mt-5 text-3xl leading-[1.08] font-black tracking-[-0.04em] md:text-5xl">
            Uma comunidade feita de muitas histórias.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-300 md:text-lg">
            A VagasUX continua crescendo, mudando e sendo construída por quem
            passa por aqui.
          </p>
          <p className="mt-4 text-xl font-black tracking-[-0.03em] text-complementary-200 md:text-2xl">
            E essa história ainda está acontecendo.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-10 h-12 rounded-xl bg-complementary-300 px-7 text-base font-black text-neutral-500 hover:bg-complementary-200"
          >
            <Link to={routes.comunidade}>Conheça a comunidade</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
