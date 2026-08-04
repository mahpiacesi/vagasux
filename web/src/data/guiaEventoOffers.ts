/** Configurações de preview/modal por evento (cupom VagasUX, avisos, CTA). */

export type GuiaEventoOffer = {
  /** Desconto em texto livre, ex.: "10% de desconto". */
  discountLabel?: string
  /** Código copiável; omitir ou "pending" para cupom em breve. */
  couponCode?: string | 'pending'
  /** Link externo do CTA no modal (afiliado ou inscrição). */
  ctaUrl?: string
  /** Aviso exibido no modal (ex.: meetup sem data fixa). */
  notice?: string
}

export const guiaEventoOffers: Record<string, GuiaEventoOffer> = {
  /** VagasUX — meetup gratuito, link das redes sociais. */
  '1848cbb0d9048002b672cccfe159c293': {
    ctaUrl: 'https://avely.me/vagasux',
    notice:
      'Acesse as redes sociais da VagasUX para conferir se existe algum meetup confirmado vindo aí.',
  },
  /** CDX */
  '3b28cbb0d90480d4a09afed5f20a7d22': {
    discountLabel: '10% de desconto',
    couponCode: 'VAGAS10',
    ctaUrl: 'https://cdxconf.com.br/',
  },
  /** UXConf BR — 10% via link afiliado (sem código explícito). */
  d5304c9a0bb44509a94df65f56684407: {
    discountLabel: '10% de desconto com link de afiliado',
    ctaUrl:
      'https://www.sympla.com.br/uxconf-br-2026__3179226?afid=109196',
  },
  /** DEX Conf */
  f77dade5afa043bab14c344641b5505b: {
    discountLabel: '10% de desconto',
    couponCode: 'VAGASUX',
    ctaUrl:
      'https://www.sympla.com.br/evento/dexconf-2026/3304679?d=vagasux',
  },
  /** Floripa Design Days */
  '2878cbb0d90480f8ab8fe2f2239beb22': {
    discountLabel: '10% de desconto',
    couponCode: 'VAGASUX10',
    ctaUrl:
      'https://www.sympla.com.br/evento/floripa-design-days-2026-fdd26/2888984',
  },
  /** Design&Dendê */
  '3b28cbb0d9048034a623f58bca4ac3f6': {
    discountLabel: '10% de desconto',
    couponCode: 'VAGAS10',
    ctaUrl: 'https://www.designedende.com/',
  },
  /** Festival Akilomba */
  '3b28cbb0d90480d2938dcfc54dff1f48': {
    discountLabel: '15% de desconto',
    couponCode: 'VAGASUX15',
    ctaUrl:
      'https://akilomba.pagtickets.com.br/festival-akilomba-2026__22821/?d=vagasux15',
  },
  /** Product Camp — cupom em breve */
  '1848cbb0d9048004a4a7d1428ca498b0': {
    discountLabel: '10% de desconto',
    couponCode: 'pending',
    ctaUrl: 'https://www.productcamp.com.br/',
  },
  /** Techstars Startup Weekend */
  '3b28cbb0d9048081b5a0e28c52d45a9c': {
    discountLabel: '20% de desconto',
    couponCode: 'VAGASUX20',
    ctaUrl: 'https://luma.com/7n3ksmv5',
  },
  /** PM3 Summit */
  '3b28cbb0d90480309523c0d91ba474ba': {
    discountLabel: '20% de desconto',
    couponCode: 'VAGASUX',
    ctaUrl: 'https://pm3summit.com.br/',
  },
}

/** CTA do modal: parceria com desconto ativo → "Garantir desconto"; demais → "Acessar evento". */
export function getGuiaEventoCtaLabel(eventoId: string): string {
  const offer = getGuiaEventoOffer(eventoId)
  if (offer?.discountLabel && offer.couponCode !== 'pending') {
    return 'Garantir desconto'
  }
  return 'Acessar evento'
}

export function getGuiaEventoOffer(eventoId: string): GuiaEventoOffer | null {
  return guiaEventoOffers[eventoId] ?? null
}

/** Resolve URL do CTA: override da oferta → url do evento. */
export function resolveGuiaEventoCtaUrl(
  eventoId: string,
  eventoUrl: string,
): string {
  const offer = getGuiaEventoOffer(eventoId)
  return offer?.ctaUrl?.trim() || eventoUrl
}
