import { Button } from '@/components/ui/button'
import { superSite } from '@/lib/siteLinks'

const openCommunityLinks = [
  {
    label: 'Canal no WhatsApp',
    href: 'https://www.whatsapp.com/channel/0029VaolXJkId7nHWZAPTz0P',
  },
  {
    label: 'Grupo no Telegram',
    href: 'https://t.me/guiadoproductdesigner',
  },
  {
    label: 'Servidor no Discord',
    href: 'https://discord.gg/NmsWUzCmN4',
  },
] as const

const participationPaths = [
  {
    id: 'aberta',
    eyebrow: 'Gratuito',
    title: 'Comunidade aberta',
    description:
      'Participe dos nossos canais públicos, acompanhe vagas, conteúdos e novidades sem custo. É o ponto de partida para conhecer a VagasUX.',
    bullets: [
      'Canal no WhatsApp, Telegram e Discord',
      'Newsletter quinzenal gratuita',
      'Curadoria de vagas e conteúdos abertos',
    ],
    cta: { label: 'Entrar nos canais', href: '#canais-abertos', external: false },
  },
  {
    id: 'apoie',
    eyebrow: 'Apoio voluntário',
    title: 'Apoia-se',
    description:
      'Contribua com o que puder para ajudar o projeto a seguir vivo. Quem apoia a partir de R$10 também pode agendar uma mentoria conosco.',
    bullets: [
      'Campanha de crowdfunding no Apoia.se',
      'Ajuda a cobrir custos da comunidade',
      'Mentoria como forma de agradecimento',
    ],
    cta: { label: 'Apoiar a iniciativa', href: superSite.apoie, external: true },
  },
  {
    id: 'guilda',
    eyebrow: 'Membro',
    title: 'Guilda do Vaguiner',
    description:
      'Comunidade exclusiva paga com encontros quinzenais, grupo fechado no WhatsApp, mentorias em grupo e mentorias avulsas com desconto.',
    bullets: [
      'Encontros e mentorias em grupo inclusos no plano',
      'Mentorias avulsas com profissionais do mercado',
      'Seletivas, descontos e benefícios para membros',
    ],
    cta: {
      label: 'Conheça a Guilda',
      href: 'https://vagasux.framer.website/',
      external: true,
    },
  },
] as const

function ParticipationSection({
  eyebrow,
  title,
  description,
  bullets,
  cta,
}: (typeof participationPaths)[number]) {
  return (
    <section className="rounded-3xl border border-neutral-500/10 bg-neutral-100 p-6 md:p-8">
      <p className="text-xs font-bold tracking-[0.18em] text-brand-400 uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-black tracking-[-0.03em] text-neutral-500 md:text-3xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-400">
        {description}
      </p>
      <ul className="mt-5 space-y-2 text-sm leading-relaxed text-neutral-400">
        {bullets.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-brand-400" aria-hidden>
              ·
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        {cta.external ? (
          <Button asChild size="lg" className="h-11 rounded-xl px-6 font-bold">
            <a href={cta.href} target="_blank" rel="noopener noreferrer">
              {cta.label}
            </a>
          </Button>
        ) : (
          <Button asChild size="lg" variant="outline" className="h-11 rounded-xl px-6 font-bold">
            <a href={cta.href}>{cta.label}</a>
          </Button>
        )}
      </div>
    </section>
  )
}

export function ComunidadePage() {
  return (
    <main>
      <section className="px-5 pt-16 pb-12 md:px-6 md:pt-20 md:pb-16">
        <div className="mx-auto max-w-3xl md:max-w-4xl">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
            Comunidade
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] font-black tracking-[-0.04em] text-neutral-500 md:text-5xl">
            Escolha como você quer fazer parte da VagasUX
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-400">
            Tem espaço para quem quer começar de graça, para quem prefere apoiar
            o projeto e para quem busca a experiência completa na Guilda do
            Vaguiner.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-6 md:pb-24">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 md:max-w-4xl md:gap-8">
          {participationPaths.map((path) => (
            <ParticipationSection key={path.id} {...path} />
          ))}
        </div>
      </section>

      <section
        id="canais-abertos"
        className="border-t border-neutral-500/10 bg-brand-50/40 px-5 py-16 md:px-6 md:py-20"
      >
        <div className="mx-auto max-w-3xl md:max-w-4xl">
          <h2 className="text-2xl font-black tracking-[-0.03em] text-neutral-500 md:text-3xl">
            Canais da comunidade aberta
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-400">
            Escolha onde prefere acompanhar a VagasUX no dia a dia.
          </p>
          <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {openCommunityLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-xl border border-neutral-500/15 bg-neutral-100 px-5 py-3 text-sm font-bold text-neutral-500 transition-colors hover:border-brand-200 hover:text-brand-500"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-neutral-400">
            Quer saber quem organiza tudo isso?{' '}
            <a
              href={superSite.quemOrganiza}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-500 underline decoration-brand-200 underline-offset-4"
            >
              Conheça a equipe
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  )
}
