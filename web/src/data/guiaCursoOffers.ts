/** Ofertas exclusivas exibidas no painel de cursos parceiros. */

export type GuiaCursoOffer = {
  discountLabel: string
  couponCode?: string
  description?: string
  benefits?: string[]
  ctaUrl?: string
}

const guiaCursoOffers: Record<string, GuiaCursoOffer> = {
  '1061fe3b9e2e4360ad65793b7aaab059': {
    discountLabel: '15% de desconto',
    description: 'Como comunidade, temos 15% de desconto nas licenças da Alura.',
    ctaUrl: 'https://www.alura.com.br/promocao/comunidade15',
  },
  '2b68cbb0d90480b3b97accfb4610cfd6': {
    discountLabel: '10% de desconto',
    couponCode: 'vagasux10',
    description: 'Como parceiro oficial, temos 10% de desconto.',
  },
  '886019aee05c4ab298a84345f2a84085': {
    discountLabel: '20% de desconto',
    couponCode: 'ClubeUXWVagasUX',
    description: 'Válido para os cursos do Clube do UX Writing.',
  },
  '06ebb7cfe8a240669d56dec3b307f3ef': {
    discountLabel: '10% de desconto',
    couponCode: 'VAGAS&DC',
    description: 'Válido para o curso UX Light da DC.',
  },
  '58949b1ad1b64b9c96728c2bad73c5e8': {
    discountLabel: '15% de desconto',
    couponCode: 'VAGASUX',
    description: 'Válido para qualquer curso da DesignOps Lab.',
  },
  '99b20aaa40e84f01859fa8e4ecd77698': {
    discountLabel: '20% de desconto',
    couponCode: 'VAGASUX20',
    description: 'Válido para o curso DS Starter.',
  },
  d9839aefe5774c9b81a65db9fe331a4e: {
    discountLabel: 'Descontos exclusivos',
    benefits: [
      '10% na graduação presencial',
      '20% na graduação online',
      '20% na pós e MBA',
    ],
    ctaUrl: 'https://fiap.me/beneficios',
  },
  a929376b91fe4f769ac73128a5e1e231: {
    discountLabel: '20% de desconto',
    couponCode: 'VAGASUX20',
    description: 'Válido para qualquer curso da How Bootcamps.',
  },
  d487bd7e5a7f4b258fee6123c8959e63: {
    discountLabel: '10% de desconto',
    description:
      'Informe na matrícula que conheceu a Kubu através da VagasUX.',
  },
  '0fe602d78a114df5a9864f61fb77872e': {
    discountLabel: '10% de desconto',
    couponCode: 'VAGASUX10',
    description: 'Válido para o curso da Leiautar.',
  },
  bfad14b97f3a4cbaacf7a38dd69e0774: {
    discountLabel: '10% de desconto',
    couponCode: 'VAGASUX10',
    description: 'Válido para qualquer curso da Mergo.',
  },
  '959a38245ddf483fbf27b04921780eb7': {
    discountLabel: '20% de desconto',
    couponCode: 'MUDACOMVAGASUX',
    description: 'Válido para a taxa de adesão do curso da MUDA.',
  },
  '2c5cc331db8948d591ac9e89551f682c': {
    discountLabel: '15% de desconto',
    couponCode: 'VAGASUX15',
    description: 'Válido para qualquer curso da Product Arena.',
  },
  b492db04bde5445aa8e06798350656c3: {
    discountLabel: '15% de desconto',
    couponCode: 'VAGAS15',
    description: 'Válido para os cursos da TheStarter.',
  },
  '7cc60ffc16f848ac8ee37515281ecd84': {
    discountLabel: '15% de desconto',
    couponCode: 'VAGAS_15',
    description: 'Válido para os cursos da UX Change Academy.',
  },
  '8b816aa8a8fa47be9b5c0385d5bfa0c8': {
    discountLabel: 'R$ 97 de desconto',
    couponCode: 'VAGASUX',
    description: 'Válido para o curso do UXNOW.',
  },
  ff78d7dccd684fee89a5591f4cd04a5b: {
    discountLabel: '10% de desconto',
    description: 'Válido para a mentoria de portfólio com Georgia Demas.',
  },
}

export function getGuiaCursoOffer(cursoId: string): GuiaCursoOffer | null {
  return guiaCursoOffers[cursoId] ?? null
}
