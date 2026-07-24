export type CommunityTestimonial = {
  name: string
  quote: string
  rating?: number
}

/** Curated short quotes from https://testimonial.to/pt/vagasux/all */
export const communityTestimonials: CommunityTestimonial[] = [
  {
    name: 'Gustavo Barbosa',
    quote:
      'Site com um design gostosinho de usar, sessões de vaga muito bem divididas — encontrei as que mais tinham a ver com meu perfil em segundos. Parabéns a toda a equipe!',
    rating: 5,
  },
  {
    name: 'Igor Felipe Campos',
    quote:
      'Recentemente conquistei uma bolsa de 3 meses na Alura por meio da VagasUX. Estou muito animado — meu foco será aprofundar UX/UI Design.',
  },
  {
    name: 'Enne Jim Pessoa',
    quote:
      'Minhas primeiras mentorias de UI/UX foram um marco na minha jornada. Através da VagasUX tive duas mentorias individuais que fizeram muita diferença pra mim.',
  },
  {
    name: 'Luiz Filipe Cardoso',
    quote:
      'Participei de um workshop incrível pela VagasUX sobre Google Analytics e UX Metrics — entendi na prática como os dados podem guiar decisões.',
  },
]
