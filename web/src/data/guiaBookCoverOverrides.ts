/**
 * Capas que não funcionam via P/{ASIN} ou links fora da Amazon.
 * Chave = id do livro (Notion page id). Preservado entre re-exports do snapshot.
 */
export const guiaBookCoverOverrides: Record<string, string> = {
  /** Design Thinking — Gláucia de Salles Ferro */
  a3fa155b5a77402499fe8ca32b7d211b:
    'https://m.media-amazon.com/images/I/51D3-L2qAoS.jpg',
  /** Extra Bold — Ellen Lupton (link.amazon) */
  '3b18cbb0d90480c39e98f6913280716e':
    'https://m.media-amazon.com/images/I/61fqlHGA03L._SL1500_.jpg',
  /** Networking Para Quem Não Quer Fazer Networking — Karen Wickre */
  '82e1c85950d44690bb1b34e4ef005eaa':
    'https://m.media-amazon.com/images/I/714ctIygIsL._SL1500_.jpg',
  /** Políticas do design — Ruben Pater (link.amazon) */
  '3b18cbb0d904800c91bee7f66214afd2':
    'https://m.media-amazon.com/images/I/71GTcmRwSzL._SL1500_.jpg',
  /** Experiência do Usuário em Interfaces Digitais — André Grilo (UFRN) */
  '5afb13a67cde446299f0666ed371a6e0':
    'https://0.academia-photos.com/attachment_thumbnails/60142124/mini_magick20190728-23420-17jco7a.png?1564354179',
}
