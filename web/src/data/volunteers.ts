export type Volunteer = {
  name: string
  roles: string[]
}

/** Snapshot from vagasux.com.br/quem-organiza — update as the team changes. */
export const volunteers: Volunteer[] = [
  { name: 'Aline Gagliardi', roles: ['Edição'] },
  { name: 'Andre Hiro', roles: ['Busca por vagas', 'Redes Sociais'] },
  { name: 'Anna Barros', roles: ['Moderação', 'Site'] },
  {
    name: 'Bruna David',
    roles: ['Conteúdo', 'Recrutamento', 'Onboarding'],
  },
  { name: 'Fernando Lima', roles: ['Seletivas', 'Eventos'] },
  {
    name: 'Gabriela Peron',
    roles: ['Seletivas', 'Newsletter', 'Moderação', 'Eventos', 'Medium'],
  },
  { name: 'Iago de Souza', roles: ['Edição'] },
  { name: 'Jade Simões', roles: ['Redes Sociais', 'Eventos'] },
  { name: 'Juarez Egildo', roles: ['Redes Sociais'] },
  { name: 'Luana Conde', roles: ['Moderação'] },
  { name: 'Manuela Lacerda', roles: ['Podcast'] },
  {
    name: 'Marianna Piacesi',
    roles: ['Organização', 'Revisão', 'Parcerias'],
  },
  {
    name: 'Natalia Feitosa',
    roles: ['Medium', 'Pesquisa', 'Redes Sociais'],
  },
  { name: 'Paula Hollanda', roles: ['Newsletter', 'Busca por vagas'] },
  { name: 'Rafael Ribeiro', roles: ['Discord'] },
  { name: 'Tatiana Barbosa', roles: ['Parcerias'] },
]
