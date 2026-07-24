import {
  InstitutionalPage,
  Prose,
  SectionTitle,
} from '@/components/InstitutionalPage'

export function CodigoDeCondutaPage() {
  return (
    <InstitutionalPage
      title="Código de conduta"
      lead="Diretrizes para um ambiente seguro, respeitoso e alinhado aos objetivos da comunidade VagasUX."
    >
      <div className="space-y-4">
        <SectionTitle>O que é este código?</SectionTitle>
        <Prose>
          <p>
            É um guia de comportamento adequado entre vaguiners — quem participa
            dos canais e iniciativas da VagasUX. Cumprir essas regras ajuda a
            manter harmonia e entendimento comum.
          </p>
        </Prose>
      </div>

      <div className="space-y-4">
        <SectionTitle>Nossa comunidade</SectionTitle>
        <Prose>
          <p>
            Somos uma iniciativa voluntária dedicada a apoiar quem está
            começando em design digital. Buscamos um ambiente acolhedor e
            inclusivo pra quem dá os primeiros passos em UX.
          </p>
          <p>A VagasUX mantém um lugar seguro, sem distinção de:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Gênero</li>
            <li>Orientação sexual</li>
            <li>Restrições físicas</li>
            <li>Raça e/ou etnia</li>
            <li>Idade</li>
            <li>Religião</li>
          </ul>
        </Prose>
      </div>

      <div className="space-y-4">
        <SectionTitle>Como membro, você concorda que</SectionTitle>
        <Prose>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Coletiva e individualmente, nos comprometemos com segurança e
              inclusão.
            </li>
            <li>
              Adotamos tolerância zero a assédio, perseguição ou discriminação.
            </li>
            <li>Evitamos tópicos ofensivos como forma de humor.</li>
            <li>
              Abstemo-nos de assuntos fora do escopo do grupo, como conteúdo
              político.
            </li>
            <li>Mantemos respeito com todas as pessoas da comunidade.</li>
          </ul>
        </Prose>
      </div>

      <div className="space-y-4">
        <SectionTitle>Boas práticas</SectionTitle>
        <Prose>
          <ul className="list-disc space-y-2 pl-5">
            <li>Cultive gentileza — todo mundo começa com dúvidas.</li>
            <li>
              Ofereça críticas construtivas; evite palavras ofensivas ou
              humilhantes.
            </li>
            <li>Mantenha curiosidade e pesquise também em outras fontes.</li>
            <li>Esteja aberto a diferentes perspectivas e experiências.</li>
            <li>Compartilhe recursos de forma colaborativa.</li>
            <li>Promova apoio e incentivo mútuo.</li>
          </ul>
        </Prose>
      </div>

      <div className="space-y-4">
        <SectionTitle>Não permitimos</SectionTitle>
        <Prose>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Compartilhar PDFs/livros ou conteúdos que infrinjam direitos
              autorais.
            </li>
            <li>Material fora do propósito do grupo.</li>
            <li>Atitudes que desmotivem a participação.</li>
            <li>Ameaças, assédio, perseguição ou discriminação.</li>
            <li>Linguagem que fira ou desrespeite outras pessoas.</li>
            <li>Publicidade, vendas ou vaquinhas sem aprovação da moderação.</li>
            <li>
              Mensagens privadas não solicitadas ou coleta de dados pessoais
              fora dos canais adequados.
            </li>
            <li>
              Autopromoção e divulgação de pesquisas fora do mural de posts
              (quando existir no canal).
            </li>
            <li>
              Áudios nos grupos, por questões de acessibilidade.
            </li>
          </ul>
          <p>
            Em suspeita de golpe ou fraude, avise a moderação imediatamente.
          </p>
        </Prose>
      </div>

      <div className="space-y-4">
        <SectionTitle>Consequências</SectionTitle>
        <Prose>
          <p>
            Publicações em desacordo podem ser removidas. Banimento pode ser
            aplicado em caso de comportamento inadequado, independentemente do
            tempo de participação. Em eventos presenciais, a organização pode
            advertir ou remover quem desrespeitar este código.
          </p>
        </Prose>
      </div>
    </InstitutionalPage>
  )
}