type MuralIntroProps = {
  count: number | null
}

export function MuralIntro({ count }: MuralIntroProps) {
  return (
    <section className="relative overflow-hidden border-b border-neutral-500/10 px-5 pt-12 pb-10 md:px-6 md:pt-16 md:pb-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 -left-20 h-[22rem] w-[22rem] rounded-full bg-brand-200/35 blur-3xl" />
        <div className="absolute top-16 -right-16 h-64 w-64 rounded-full bg-complementary-200/45 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl md:max-w-4xl">
        <p className="mural-fade text-xs font-bold tracking-[0.2em] text-brand-400 uppercase md:text-sm">
          Mural vivo
        </p>
        <h1 className="mural-fade mural-fade-delay-1 mt-4 max-w-3xl text-[2.25rem] leading-[1.05] font-black tracking-[-0.04em] text-neutral-500 md:text-5xl lg:text-6xl">
          Oportunidades em <span className="text-mark">UX e design</span>
        </h1>
        <p className="mural-fade mural-fade-delay-2 mt-5 max-w-2xl text-lg leading-relaxed text-neutral-400 md:text-xl">
          Vagas reais, atualizadas pela comunidade. Filtre, explore e
          candidate-se — sem enrolação.
          {count != null ? (
            <>
              {' '}
              <span className="font-semibold text-neutral-500">
                {count} {count === 1 ? 'vaga no ar' : 'vagas no ar'}.
              </span>
            </>
          ) : null}
        </p>
      </div>
    </section>
  )
}
