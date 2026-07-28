const SUBSTACK_EMBED = 'https://vagasux.substack.com/embed'

export function NewsletterSection() {
  return (
    <section className="border-b border-neutral-500/10 bg-[#f3f2f8] px-5 py-16 md:px-6 md:py-20">
      <div className="mx-auto grid max-w-3xl items-center gap-10 md:max-w-4xl md:grid-cols-[1.1fr_auto] md:gap-12">
        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-brand-400 uppercase">
            Newsletter
          </p>
          <h2 className="mt-4 text-3xl leading-[1.1] font-black tracking-[-0.03em] text-neutral-500 md:text-4xl">
            A curadoria da VagasUX no seu e-mail
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-400">
            As principais vagas, conteúdos e novidades da comunidade, reunidos
            em uma newsletter feita para quem quer crescer na carreira.
          </p>
        </div>

        <div className="w-full max-w-[480px] justify-self-center overflow-hidden rounded-2xl border border-neutral-500/10 bg-white md:justify-self-end">
          <iframe
            src={SUBSTACK_EMBED}
            title="Inscrição na newsletter VagasUX"
            width={480}
            height={320}
            className="mx-auto block max-w-full border-0 bg-white"
            frameBorder={0}
            scrolling="no"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
