/** Ofertas exclusivas exibidas no preview de cursos parceiros. */

export type GuiaCursoOffer = {
  discountLabel: string
  ctaUrl: string
}

const ALURA_COURSE_ID = '1061fe3b9e2e4360ad65793b7aaab059'

const guiaCursoOffers: Record<string, GuiaCursoOffer> = {
  [ALURA_COURSE_ID]: {
    discountLabel: '15% de desconto',
    ctaUrl: 'https://www.alura.com.br/promocao/comunidade15',
  },
}

export function getGuiaCursoOffer(cursoId: string): GuiaCursoOffer | null {
  return guiaCursoOffers[cursoId] ?? null
}
