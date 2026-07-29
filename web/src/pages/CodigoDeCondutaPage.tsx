import {
  Callout,
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
            É um guia que estabelece diretrizes de comportamento adequado entre
            vaguiners, ou seja, quem participa da comunidade VagasUX. Ele
            alinha expectativas com os objetivos e princípios da iniciativa.
            Cumprir essas regras ajuda a garantir harmonia e entendimento comum
            entre todas as pessoas envolvidas.
          </p>
        </Prose>
      </div>

      <div className="space-y-4">
        <SectionTitle>Nossa comunidade</SectionTitle>
        <Prose>
          <p>
            Somos uma comunidade dedicada ao apoio de quem está começando em
            design digital. Surgimos como iniciativa voluntária de profissionais
            comprometidos e buscamos ser referência inclusiva para quem dá os
            primeiros passos em UX.
          </p>
          <p>
            Ao participar de qualquer canal da comunidade, você concorda em
            respeitar os pontos deste documento.
          </p>
          <p>A VagasUX mantém um lugar seguro e acolhedor, sem distinção de:</p>
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
              Coletiva e individualmente, nos comprometemos com a segurança e a
              inclusão.
            </li>
            <li>
              Adotamos tolerância zero a assédio, perseguição ou discriminação.
            </li>
            <li>Evitamos tópicos ofensivos como forma de humor.</li>
            <li>
              Abstemo-nos de discutir assuntos fora do escopo do grupo, como
              conteúdo político.
            </li>
            <li>
              Mantemos um ambiente respeitoso com todas as pessoas da
              comunidade.
            </li>
          </ul>
        </Prose>
      </div>

      <div className="space-y-4">
        <SectionTitle>Boas práticas</SectionTitle>
        <Prose>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Cultive a gentileza. No início, todo mundo começa cheio de
              dúvidas: ajude e oriente quem está começando, independentemente
              do nível ou tempo de experiência.
            </li>
            <li>
              Ofereça críticas construtivas quando necessário e evite palavras
              ofensivas ou humilhantes.
            </li>
            <li>
              Mantenha postura curiosa e busque respostas também em outras
              fontes de pesquisa.
            </li>
            <li>Esteja aberto a diferentes perspectivas e experiências.</li>
            <li>Compartilhe recursos e conhecimentos de forma colaborativa.</li>
            <li>Promova uma cultura de apoio e incentivo mútuo.</li>
          </ul>
        </Prose>
      </div>

      <div className="space-y-4">
        <SectionTitle>Trabalhamos ativamente para</SectionTitle>
        <Prose>
          <ul className="list-disc space-y-2 pl-5">
            <li>Ser uma comunidade segura e acolhedora.</li>
            <li>Cultivar uma rede de suporte e encorajamento para todas as pessoas.</li>
            <li>Trabalhar confiança e solidariedade.</li>
            <li>Estimular a colaboração de todas as pessoas envolvidas.</li>
            <li>Garantir que cada membro se sinta parte essencial da comunidade.</li>
          </ul>
        </Prose>
      </div>

      <div className="space-y-4">
        <SectionTitle>Não permitimos</SectionTitle>
        <Prose>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Compartilhamento de PDFs de livros e conteúdos que infrinjam
              direitos autorais.
            </li>
            <li>Publicação de material que não se alinha com o propósito do grupo.</li>
            <li>
              Atitudes que desmotivam ou desestimulam a participação ativa na
              comunidade.
            </li>
            <li>
              Ameaças e assédio de qualquer tipo, bem como perseguições ou
              discriminações.
            </li>
            <li>Linguagem que possa ferir ou desrespeitar outras pessoas.</li>
            <li>
              Qualquer comportamento que comprometa a segurança das demais
              pessoas.
            </li>
            <li>
              Temas não relacionados ao propósito do grupo, publicidade ou
              vendas.
            </li>
            <li>
              Mensagens privadas não solicitadas para membros da comunidade.
            </li>
            <li>
              Mensagens ou formulários para coletar dados públicos e pessoais
              sem autorização. Pesquisas devem ser divulgadas nos canais
              adequados, como o mural de posts/pesquisas no WhatsApp.
            </li>
            <li>
              Vendas, vaquinhas ou doações de objetos físicos dentro dos
              grupos, exceto casos aprovados pela moderação.
            </li>
            <li>
              Autopromoção e divulgação de conteúdo pessoal que não seja
              artigo sobre design nos canais de conversa. Use o mural de posts
              quando existir no canal.
            </li>
            <li>
              Divulgação de pesquisas fora do mural de posts, quando existir no
              canal.
            </li>
            <li>
              Mensagens de áudio em qualquer grupo da comunidade, por questões
              de acessibilidade.
            </li>
          </ul>
          <p>
            Essas atitudes não são corretas. Se você não concorda com estas
            regras, cancele sua inscrição em nossos grupos online e/ou eventos
            presenciais. Se identificarmos comportamentos mencionados aqui,
            poderemos seguir com o banimento da pessoa envolvida.
          </p>
        </Prose>
      </div>

      <Callout>
        <p className="font-bold text-neutral-500">Atenção para golpes</p>
        <p className="mt-2 text-neutral-400">
          Em caso de suspeita de atividade fraudulenta ou golpes dentro do
          grupo, avise imediatamente a moderação.
        </p>
      </Callout>

      <div className="space-y-4">
        <SectionTitle>Consequências</SectionTitle>
        <Prose>
          <p className="font-bold text-neutral-500">Online</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Publicações e mensagens em desacordo com este código podem ser
              removidas.
            </li>
            <li>
              Banimento pode ser aplicado em caso de comportamento inadequado ou
              descumprimento das regras, independentemente do tempo de
              participação.
            </li>
            <li>
              Em caso de discriminação, assédio, sensação de insegurança ou
              desconforto, reporte a uma pessoa voluntária da equipe.
            </li>
          </ul>
          <p className="font-bold text-neutral-500">Eventos presenciais</p>
          <p>
            Se ocorrer assédio, a equipe organizadora pode adotar medidas
            apropriadas, incluindo advertir a pessoa envolvida ou removê-la da
            conferência e/ou dos grupos, após avaliação dos fatos.
          </p>
        </Prose>
      </div>

      <div className="space-y-4">
        <SectionTitle>Como fazer parte da equipe</SectionTitle>
        <Prose>
          <ul className="list-disc space-y-2 pl-5">
            <li>Concordar com este código de conduta.</li>
            <li>
              Comprometer-se de forma ativa com o projeto enquanto for membro da
              comunidade.
            </li>
          </ul>
        </Prose>
      </div>

      <div className="space-y-4">
        <SectionTitle>O que leva ao afastamento da comunidade</SectionTitle>
        <Prose>
          <p>Não cumprir os itens descritos neste código de conduta.</p>
        </Prose>
      </div>

      <div className="space-y-4">
        <SectionTitle>Referências</SectionTitle>
        <Prose>
          <p>
            Este código foi construído com inspiração em outras comunidades,
            incluindo Training Center, WoMakersCode e AndroidDevBr.
          </p>
        </Prose>
      </div>
    </InstitutionalPage>
  )
}
