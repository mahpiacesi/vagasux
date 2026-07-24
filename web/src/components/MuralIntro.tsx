type MuralIntroProps = {
  count: number | null
}

export function MuralIntro({ count }: MuralIntroProps) {
  return (
    <section className="mural-intro relative overflow-hidden px-5 pt-10 pb-6 md:px-6 md:pt-14 md:pb-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute top-10 right-0 h-56 w-56 rounded-full bg-complementary-200/50 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgb(111 106 148 / 0.18) 1px, transparent 0)',
            backgroundSize: '22px 22px',
          }}
        />
      </div>

      <div className="mx-auto max-w-3xl md:max-w-4xl">
        <p className="mural-fade text-xs font-bold tracking-wide text-brand-400 uppercase md:text-sm">
          Mural de vagas
        </p>
        <h1 className="mural-fade mural-fade-delay-1 mt-2 max-w-2xl text-3xl font-black tracking-tight text-neutral-500 md:text-4xl">
          Seu hub de vagas em UX
        </h1>
        <p className="mural-fade mural-fade-delay-2 mt-3 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
          Curadoria de oportunidades de UX, Produto e Design — com indicações da
          comunidade e atualização constante.
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
