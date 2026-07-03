export function Manifesto() {
  return (
    <section id="manifesto" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">
          Manifesto
        </p>
        <blockquote className="mt-6">
          <p className="text-2xl font-black leading-snug tracking-tight text-brand-500 md:text-4xl">
            A VagasUX acredita que oportunidades mudam vidas.
          </p>
        </blockquote>
        <div className="mx-auto mt-8 max-w-2xl space-y-4 text-lg leading-relaxed text-neutral-400">
          <p>Ninguém deveria entrar no mercado sozinho.</p>
          <p>Compartilhar conhecimento fortalece toda a comunidade.</p>
          <p className="font-semibold text-brand-400">
            Design também é sobre cuidar de pessoas.
          </p>
        </div>
      </div>
    </section>
  )
}
