import {
  CalendarCheck,
  ChatCircleDots,
  CheckCircle,
  Coffee,
  Heart,
  LinkedinLogo,
  NotePencil,
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import learningIllustration from '@/assets/illustrations/illustration-learning.svg'
import { Button } from '@/components/ui/button'
import { volunteers } from '@/data/volunteers'
import { routes, superSite } from '@/lib/siteLinks'

const mentoringPaymentUrl = 'https://nas.com/vagasux/zerolink/mentoria'

const mentorAvailability = [
  { slug: 'natalia-feitosa', status: 'Indisponível', available: false },
  { slug: 'andre-hiro', status: 'Disponível', available: true },
  { slug: 'anna-barros', status: 'Disponível', available: true },
  { slug: 'luana-conde', status: 'Indisponível', available: false },
  { slug: 'jade-simoes', status: 'Disponível', available: true },
] as const

const steps = [
  {
    number: '01',
    title: 'Faça sua contribuição',
    description:
      'Cada apoio a partir de R$ 15 equivale a uma mentoria. Para marcar mais conversas, faça uma nova contribuição para cada encontro.',
    detail: 'Salve o comprovante para enviar à pessoa mentora escolhida.',
    Icon: Heart,
  },
  {
    number: '02',
    title: 'Escolha uma pessoa mentora',
    description:
      'Com o comprovante em mãos, escolha uma pessoa disponível e envie uma mensagem pelo LinkedIn para combinar o horário.',
    detail: 'O agendamento é manual e a resposta pode levar até cinco dias úteis.',
    Icon: CalendarCheck,
  },
  {
    number: '03',
    title: 'Prepare suas dúvidas',
    description:
      'Envie um resumo do que você quer conversar. Quanto mais contexto compartilhar, melhor a pessoa mentora poderá te ajudar.',
    detail: 'Pronto: agora é só aguardar a confirmação da mentoria.',
    Icon: NotePencil,
  },
] as const

export function MentoriaPage() {
  const mentors = mentorAvailability.flatMap((mentor) => {
    const volunteer = volunteers.find((person) => person.slug === mentor.slug)
    return volunteer ? [{ ...volunteer, ...mentor }] : []
  })

  return (
    <main>
      <section className="relative overflow-hidden border-b border-neutral-500/10 bg-brand-100/40 px-5 py-16 md:px-6 md:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgb(7 0 58 / 0.06) 1px, transparent 0)',
              backgroundSize: '20px 20px',
            }}
          />
          <div className="absolute top-[-8%] right-[-6%] size-64 rounded-full bg-brand-200/40 blur-3xl" />
          <div className="absolute bottom-[-12%] left-[-8%] size-56 rounded-full bg-complementary-200/35 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.85fr)] md:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
              Mentoria VagasUX
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] text-neutral-500 md:text-6xl">
              Que tal um papinho?
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">
              Uma conversa individual com pessoas voluntárias da VagasUX para
              tirar dúvidas, trocar experiências e refletir sobre seu próximo
              passo em design.
            </p>
            <Button variant="guia" asChild className="mt-8">
              <a href="#como-funciona">
                Entenda como funciona
                <ChatCircleDots weight="bold" aria-hidden />
              </a>
            </Button>
          </div>
          <img
            src={learningIllustration}
            alt="Pessoa aprendendo com referências de ferramentas de design"
            className="mx-auto w-full max-w-md"
          />
        </div>
      </section>

      <section id="como-funciona" className="scroll-mt-24 px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
              Como participar
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-neutral-500 md:text-5xl">
              Três passos para marcar sua conversa
            </h2>
          </div>
          <ol className="mt-10 grid gap-4 lg:grid-cols-3">
            {steps.map(({ number, title, description, detail, Icon }) => (
              <li key={number} className="rounded-3xl border border-neutral-500/10 bg-neutral-100 p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-brand-400">{number}</span>
                  <span className="flex size-10 items-center justify-center rounded-2xl bg-brand-100 text-brand-500">
                    <Icon size={21} weight="bold" aria-hidden />
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-black tracking-[-0.025em] text-neutral-500">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{description}</p>
                <p className="mt-4 border-t border-neutral-500/10 pt-4 text-sm font-semibold leading-relaxed text-neutral-500">{detail}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-3xl border border-brand-200/70 bg-brand-100/45 p-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-black tracking-[-0.02em] text-neutral-500">
                Pronta para marcar sua mentoria?
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-400">
                Faça uma contribuição de R$ 15 e guarde seu comprovante.
              </p>
            </div>
            <Button variant="guia" asChild>
              <a href={mentoringPaymentUrl} target="_blank" rel="noopener noreferrer">
                Fazer contribuição
                <Heart weight="bold" aria-hidden />
              </a>
            </Button>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-neutral-400">
            Já faz parte da{' '}
            <Link to={routes.guilda} className="font-bold text-brand-500 hover:underline">
              Guilda do Vaguiner
            </Link>
            ? Pessoas membros têm desconto na mentoria.
          </p>
        </div>
      </section>

      <section className="border-y border-complementary-200/70 bg-complementary-100/50 px-5 py-12 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {[
            'Compareça no horário combinado. Se precisar remarcar, avise com pelo menos 48 horas de antecedência.',
            'Reserve um local silencioso para aproveitar a conversa com foco e tranquilidade.',
            'Cada encontro dura 40 minutos e pode ser estendido conforme a disponibilidade da pessoa mentora.',
          ].map((note) => (
            <p key={note} className="flex gap-3 text-sm leading-relaxed text-neutral-500">
              <CheckCircle size={20} weight="fill" className="mt-0.5 shrink-0 text-complementary-300" aria-hidden />
              {note}
            </p>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">Pessoas mentoras</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-neutral-500 md:text-5xl">
              Encontre uma pessoa disponível para conversar
            </h2>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mentors.map((mentor) => (
              <li key={mentor.slug} className="overflow-hidden rounded-3xl border border-neutral-500/10 bg-neutral-100">
                <div className="flex gap-4 p-5">
                  {mentor.photo ? <img src={mentor.photo} alt="" className="size-16 rounded-2xl object-cover" style={{ objectPosition: mentor.photoFocus }} /> : <span className="flex size-16 items-center justify-center rounded-2xl bg-brand-100 text-3xl">{mentor.emoji}</span>}
                  <div className="min-w-0">
                    <h3 className="font-black tracking-[-0.02em] text-neutral-500">{mentor.name}</h3>
                    <p className={`mt-1 text-sm font-bold ${mentor.available ? 'text-emerald-700' : 'text-neutral-400'}`}>{mentor.status}</p>
                    {mentor.linkedin && mentor.available ? <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-brand-500 hover:underline"><LinkedinLogo size={17} weight="fill" aria-hidden /> Conversar no LinkedIn</a> : null}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-6 md:pb-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl bg-brand-500 px-7 py-8 text-neutral-100 md:flex-row md:items-center md:px-10">
          <div>
            <p className="text-2xl font-black tracking-[-0.035em]">Que tal pagar um café pra gente? ☕</p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-100/80">Seu apoio ajuda a manter as iniciativas gratuitas e a comunidade em movimento.</p>
          </div>
          <Button variant="secondary" asChild className="rounded-full bg-neutral-100 px-5 py-3 font-bold text-brand-500 hover:bg-brand-100">
            <a href={superSite.apoie} target="_blank" rel="noopener noreferrer">
              Apoie a iniciativa <Coffee weight="bold" aria-hidden />
            </a>
          </Button>
        </div>
      </section>
    </main>
  )
}
