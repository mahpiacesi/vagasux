import { ArrowUpRight, ChartLineUp, MagnifyingGlass } from '@phosphor-icons/react'
import { TextLink } from '@/components/InstitutionalPage'
import { Button } from '@/components/ui/button'
import { panoramaStudy, routes } from '@/lib/siteLinks'

export function PanoramaPage() {
  return (
    <main>
      <Hero />
      <EditionSection />
    </main>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-500/10 bg-gradient-to-b from-brand-100/50 via-neutral-100 to-neutral-100 px-5 pt-16 pb-16 md:px-6 md:pt-24 md:pb-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-24 -left-16 h-[28rem] w-[28rem] rounded-full bg-brand-200/20 blur-3xl" />
        <div className="absolute right-[-20%] bottom-[-45%] h-[30rem] w-[40rem] rounded-full bg-complementary-200/20 blur-[80px]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.7fr)] lg:gap-14">
        <div>
          <p className="mural-fade text-xs font-bold tracking-[0.22em] text-brand-400 uppercase md:text-sm">
            Pesquisa
          </p>
          <h1 className="mural-fade mural-fade-delay-1 mt-5 max-w-3xl text-[2.35rem] leading-[1.04] font-black tracking-[-0.045em] text-neutral-500 md:text-6xl">
            Panorama VagasUX
          </h1>
          <p className="mural-fade mural-fade-delay-2 mt-6 max-w-xl text-lg font-bold leading-snug text-neutral-500 md:text-xl">
            A gente pergunta antes de sair assumindo.
          </p>
          <p className="mural-fade mural-fade-delay-2 mt-4 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">
            O Panorama é a pesquisa da VagasUX sobre o cenário de UX e Design.
            A gente pergunta para entender experiências, desafios e percepções
            de quem está na área, e publica o que esses dados mostram.
          </p>
        </div>

        <div className="mural-fade mural-fade-delay-2 mx-auto w-full max-w-sm rounded-3xl border border-neutral-500/10 bg-neutral-100 p-6 shadow-[0_20px_50px_-36px_rgb(7_0_58_/_0.3)]">
          <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-500">
            <MagnifyingGlass size={24} weight="bold" aria-hidden />
          </span>
          <p className="mt-5 text-xs font-bold tracking-[0.18em] text-brand-400 uppercase">
            Desde 2021
          </p>
          <p className="mt-2 text-2xl font-black tracking-[-0.03em] text-neutral-500">
            Uma edição por ano
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400">
            O estudo junta a curadoria de vagas do site com as respostas de
            quem participa da comunidade.
          </p>
        </div>
      </div>
    </section>
  )
}

function EditionSection() {
  return (
    <section className="px-5 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
          Edição atual
        </p>
        <h2 className="mt-4 text-3xl leading-[1.08] font-black tracking-[-0.04em] text-neutral-500 md:text-5xl">
          Chegamos em nossa 5ª edição
        </h2>
        <p className="mt-6 text-base leading-relaxed text-neutral-400 md:text-lg">
          E nossa pesquisa chega em mais uma edição, mapeando o cenário na área
          de UX em 2025. O projeto começou em 2021 e contou com dados coletados
          durante todo o ano, através da{' '}
          <TextLink href={routes.curadoria} external={false}>
            curadoria de vagas
          </TextLink>{' '}
          que disponibilizamos aqui em nosso site e da pesquisa disponibilizada
          em{' '}
          <TextLink href={routes.comunidade} external={false}>
            nossa comunidade
          </TextLink>
          .
        </p>

        <div className="mt-10 rounded-3xl bg-neutral-500 p-6 text-neutral-100 md:flex md:items-center md:justify-between md:gap-8 md:p-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-white/10 text-complementary-300">
                <ChartLineUp size={22} weight="bold" aria-hidden />
              </span>
              <p className="text-xs font-bold tracking-[0.18em] text-complementary-300 uppercase">
                Acesse o material
              </p>
            </div>
            <p className="mt-4 text-xl font-black tracking-[-0.03em] md:text-2xl">
              {panoramaStudy.title}
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-neutral-300">
              A visualização da 5ª edição abre o relatório no Data Studio.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="mt-6 h-12 shrink-0 rounded-xl bg-complementary-300 px-6 text-base font-black text-neutral-500 hover:bg-complementary-200 md:mt-0"
          >
            <a
              href={panoramaStudy.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver o estudo
              <span className="sr-only">
                {' '}
                {panoramaStudy.title}, abre em uma nova aba
              </span>
              <ArrowUpRight weight="bold" aria-hidden />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
