import {
  Callout,
  InstitutionalPage,
  Prose,
  SectionTitle,
  SubsectionTitle,
  TextLink,
} from '@/components/InstitutionalPage'
import { analyticsPrivacy, contact, termosHashes } from '@/lib/siteLinks'

const LAST_UPDATED = '30 de julho de 2026'

export function TermosEPoliticasPage() {
  return (
    <InstitutionalPage
      title="Termos e Políticas"
      lead="Regras de uso da plataforma, divulgação de vagas, curadoria editorial e publicação de feedbacks de cursos."
    >
      <Callout>
        <p className="text-sm text-neutral-400 md:text-base">
          <span className="font-bold text-neutral-500">Última atualização:</span>{' '}
          {LAST_UPDATED}
        </p>
      </Callout>

      <div className="space-y-4">
        <SectionTitle>Sobre a VagasUX</SectionTitle>
        <Prose>
          <p>
            Somos uma comunidade de design que funciona como hub de iniciativas
            acessíveis para quem está começando na área. Nosso foco são
            profissionais iniciantes no Brasil e Portugal e temos o propósito de
            promover curadoria de vagas e conteúdos em UX para todos os níveis,
            todos mesmo.
          </p>
        </Prose>
      </div>

      <div className="space-y-6">
        <SectionTitle>Vagas e oportunidades</SectionTitle>

        <div className="space-y-4">
          <SubsectionTitle>
            Curadoria VagasUX e Mural de Oportunidades
          </SubsectionTitle>
          <Prose>
            <p>
              A VagasUX oferece dois tipos de conteúdo sobre vagas, com
              responsabilidades diferentes:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="font-bold text-neutral-500">
                  Curadoria VagasUX
                </strong>
                : seleção editorial feita por pessoas voluntárias da comunidade,
                com critérios próprios que podem ser alterados a qualquer
                momento. Inclui iniciativas como vagas para iniciantes e outras
                frentes curadas manualmente.
              </li>
              <li>
                <strong className="font-bold text-neutral-500">
                  Mural de Oportunidades
                </strong>
                : agregação automática de vagas obtidas a partir de fontes
                públicas disponíveis na internet, como plataformas de
                recrutamento e páginas de carreiras de empresas.
              </li>
            </ul>
            <p>
              Essa distinção ajuda a entender o que é produzido editorialmente
              pela comunidade e o que é indexado automaticamente a partir de
              fontes externas.
            </p>
          </Prose>
        </div>

        <div className="space-y-4">
          <SubsectionTitle>Divulgação de vagas</SubsectionTitle>
          <Prose>
            <p>
              A VagasUX reúne oportunidades de emprego provenientes de
              diferentes fontes. Parte das vagas é selecionada por meio de
              curadoria humana e parte é coletada automaticamente de plataformas
              públicas de recrutamento e páginas de carreiras de empresas.
            </p>
            <p>
              Nosso objetivo é facilitar o acesso às oportunidades,
              centralizando informações em um único lugar para a comunidade.
            </p>
          </Prose>
        </div>

        <div className="space-y-4">
          <SubsectionTitle>Sobre as vagas agregadas</SubsectionTitle>
          <Prose>
            <p>
              As vagas exibidas por meio do agregador são obtidas
              automaticamente a partir de fontes públicas disponíveis na
              internet.
            </p>
            <p>
              A VagasUX não cria, altera ou interfere no conteúdo dessas vagas e
              não possui vínculo comercial, societário ou institucional com as
              empresas responsáveis por sua divulgação, salvo quando isso for
              informado de forma explícita.
            </p>
            <p>
              As informações apresentadas, como descrição, requisitos,
              benefícios, localização e prazo, são de responsabilidade da
              empresa ou da plataforma de origem.
            </p>
          </Prose>
        </div>

        <div className="space-y-4">
          <SubsectionTitle>
            Responsabilidade pelos processos seletivos
          </SubsectionTitle>
          <Prose>
            <p>
              A VagasUX não participa da condução dos processos seletivos, da
              análise de currículos, da comunicação com candidatos ou da decisão
              de contratação.
            </p>
            <p>
              Toda candidatura é realizada diretamente na plataforma ou página
              oficial da empresa responsável pela vaga.
            </p>
            <p>
              Não garantimos entrevistas, retorno das empresas, contratação ou
              manutenção das vagas publicadas.
            </p>
          </Prose>
        </div>

        <div className="space-y-4">
          <SubsectionTitle>Atualização e disponibilidade das vagas</SubsectionTitle>
          <Prose>
            <p>
              Embora busquemos manter o mural sempre atualizado, algumas
              oportunidades podem ser encerradas, alteradas ou removidas pela
              empresa de origem antes da atualização em nossa plataforma.
            </p>
            <p>
              Por esse motivo, recomendamos que você sempre consulte a página
              oficial da vaga antes de realizar sua candidatura.
            </p>
          </Prose>
        </div>

        <div className="space-y-4">
          <SubsectionTitle>Links para sites de terceiros</SubsectionTitle>
          <Prose>
            <p>
              Ao acessar uma vaga, você poderá ser direcionado para plataformas
              e sites de terceiros.
            </p>
            <p>
              A VagasUX não é responsável pelo conteúdo, funcionamento,
              políticas de privacidade, termos de uso ou práticas adotadas por
              esses serviços.
            </p>
            <p>
              Recomendamos que você leia os documentos aplicáveis antes de
              fornecer informações pessoais.
            </p>
          </Prose>
        </div>

        <div className="space-y-4">
          <SubsectionTitle>Uso de marcas e nomes de empresas</SubsectionTitle>
          <Prose>
            <p>
              Os nomes, logotipos e marcas das empresas divulgadas pertencem aos
              seus respectivos titulares.
            </p>
            <p>
              Sua exibição na VagasUX tem finalidade exclusivamente informativa
              e de identificação das oportunidades divulgadas, não representando
              qualquer parceria, endosso ou autorização, exceto quando
              expressamente informado.
            </p>
          </Prose>
        </div>

        <div className="space-y-4">
          <SubsectionTitle>Solicitação de remoção ou correção</SubsectionTitle>
          <Prose>
            <p>
              Caso uma empresa identifique alguma informação incorreta, deseje
              atualizar uma vaga ou solicitar sua remoção da plataforma, pode
              entrar em contato pelos canais oficiais da VagasUX em{' '}
              <TextLink href={`mailto:${contact.email}`}>
                {contact.email}
              </TextLink>
              .
            </p>
            <p>
              Sempre que possível, realizaremos a análise e atualização em prazo
              razoável.
            </p>
          </Prose>
        </div>
      </div>

      <div className="space-y-4">
        <SectionTitle>Uso da plataforma</SectionTitle>
        <Prose>
          <p>Ao utilizar a VagasUX, você concorda em não:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Realizar scraping em massa, uso automatizado não autorizado ou
              extração sistemática de conteúdo.
            </li>
            <li>
              Tentar comprometer a infraestrutura, segurança ou disponibilidade
              da plataforma.
            </li>
            <li>
              Reproduzir integralmente conteúdos da VagasUX sem autorização
              prévia.
            </li>
            <li>
              Utilizar a plataforma de forma que viole estes Termos, a
              legislação aplicável ou direitos de terceiros.
            </li>
          </ul>
        </Prose>
      </div>

      <div id={termosHashes.cookies} className="scroll-mt-24 space-y-6">
        <SectionTitle>Cookies e análise de uso</SectionTitle>
        <Prose>
          <p>
            A VagasUX utiliza cookies e tecnologias semelhantes para melhorar a
            experiência de navegação, entender como a plataforma é utilizada e
            orientar decisões de produto.
          </p>
          <p>
            Essas informações nos ajudam a identificar páginas mais acessadas,
            fluxos de navegação, problemas de usabilidade e oportunidades de
            melhoria na experiência da comunidade.
          </p>
        </Prose>

        <div className="space-y-4">
          <SubsectionTitle>Microsoft Clarity</SubsectionTitle>
          <Prose>
            <p>
              Utilizamos o Microsoft Clarity, uma ferramenta de análise de
              comportamento que nos ajuda a compreender como as pessoas utilizam
              a plataforma por meio de recursos como:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>mapas de calor (heatmaps);</li>
              <li>gravações anônimas de sessões;</li>
              <li>análise de cliques;</li>
              <li>rolagem de páginas;</li>
              <li>interação com elementos da interface.</li>
            </ul>
            <p>
              Esses dados são utilizados exclusivamente para melhorar a
              experiência de navegação, identificar problemas de usabilidade e
              evoluir os produtos e serviços da VagasUX.
            </p>
            <p>
              Não utilizamos essas informações para identificar usuários
              individualmente nem para decisões automatizadas.
            </p>
            <p>
              O tratamento dessas informações segue as políticas de privacidade
              da Microsoft.
            </p>
          </Prose>
        </div>

        <div className="space-y-4">
          <SubsectionTitle>Consentimento para cookies</SubsectionTitle>
          <Prose>
            <p>
              Ao aceitar os cookies opcionais, você concorda com a utilização do
              Microsoft Clarity para análise e melhoria contínua da plataforma.
            </p>
            <p>
              Você pode alterar ou revogar seu consentimento a qualquer momento
              por meio das configurações do navegador ou das preferências de
              cookies disponibilizadas pela VagasUX no rodapé do site.
            </p>
          </Prose>
        </div>

        <div className="space-y-4">
          <SubsectionTitle>Links externos</SubsectionTitle>
          <Prose>
            <p>
              Para saber mais sobre como essa ferramenta trata informações,
              consulte a{' '}
              <TextLink href={analyticsPrivacy.microsoftClarity}>
                Política de Privacidade da Microsoft
              </TextLink>
              .
            </p>
          </Prose>
        </div>
      </div>

      <div className="space-y-4">
        <SectionTitle>Alterações destes Termos</SectionTitle>
        <Prose>
          <p>
            Estes Termos e Políticas podem ser atualizados periodicamente. Quando
            houver mudanças relevantes, publicaremos a nova versão nesta página,
            com indicação da data de atualização no topo do documento.
          </p>
          <p>
            O uso continuado da plataforma após a publicação de alterações
            constitui concordância com a versão vigente.
          </p>
        </Prose>
      </div>

      <div className="space-y-4">
        <SectionTitle>Contato</SectionTitle>
        <Prose>
          <p>
            Para questões jurídicas, privacidade, LGPD, denúncias ou solicitações
            relacionadas a estes Termos, entre em contato pelo e-mail{' '}
            <TextLink href={`mailto:${contact.email}`}>{contact.email}</TextLink>
            .
          </p>
        </Prose>
      </div>

      <div className="space-y-6">
        <SectionTitle>Feedbacks de cursos</SectionTitle>

        <div className="space-y-4">
          <SubsectionTitle>Termos para feedbacks de cursos</SubsectionTitle>
          <Prose>
            <p>
              Este texto contém os termos e condições para que qualquer feedback
              referente a qualquer curso, já listado ou não, possa ser publicado
              na nossa página. Ao submeter um relato, você concorda com todos
              os termos e condições aqui citados.
            </p>
          </Prose>
        </div>

        <div className="space-y-4">
          <SubsectionTitle>Sobre a página de cursos</SubsectionTitle>
          <Prose>
            <p>
              A página de cursos tem como objetivo trazer uma lista atualizada
              dos cursos disponíveis dentro da área de UX Design e correlatos. É
              um mapeamento coletivo para a comunidade da VagasUX feito por
              pessoas voluntárias. As informações descritas foram retiradas dos
              canais oficiais de cada curso e são de responsabilidade dos seus
              criadores.
            </p>
            <p>
              A VagasUX se reserva o direito de incluir ou excluir qualquer
              curso da lista sem aviso prévio.
            </p>
          </Prose>
        </div>

        <div className="space-y-4">
          <SubsectionTitle>Sobre os feedbacks</SubsectionTitle>
          <Prose>
            <p>
              Esta página tem como objetivo mostrar as avaliações que ex-alunos
              possuem sobre diferentes cursos da área de UX design e correlatos,
              podendo expor pontos positivos e negativos para apoiar quem busca
              uma formação.
            </p>
            <p>
              Qualquer pessoa que tenha participado de algum curso, tendo
              completado ou não, pode submeter uma avaliação de qualquer curso
              aqui listado e, se aprovado pela equipe, será publicado na página.
              Caso haja algum curso que não exista na lista, pode ser comunicado
              através do{' '}
              <TextLink href={`mailto:${contact.email}`}>
                {contact.email}
              </TextLink>{' '}
              ou pelas redes sociais.
            </p>
            <p>Serão pedidos dados básicos do curso feito, como:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>área de especialização;</li>
              <li>período de tempo;</li>
              <li>modalidade, entre outros.</li>
            </ul>
            <p>
              Será necessário se identificar com nome, e-mail e LinkedIn para o
              envio do relato, não sendo possível o anonimato. Na página será
              exibido apenas o primeiro nome de forma pública, como no exemplo:
            </p>
            <blockquote className="border-l-4 border-brand-200 pl-4 text-neutral-500 italic">
              Incluído em 20/09/2023 por João
            </blockquote>
            <p>
              Antes de setembro de 2023 os feedbacks podiam ser enviados de forma
              anônima, por isso há relatos sem identificação da autoria. Nos
              reservamos o direito de manter estes feedbacks antigos por até 2
              anos, com possível pedido de retirada apenas mediante o
              procedimento descrito em denúncias, retirada e revisões.
            </p>
            <p>
              Os relatos novos buscam conferir apenas que a autoria é de uma
              pessoa real, sem expor ou prejudicá-la. A VagasUX se reserva o
              direito de retirar qualquer feedback exibido no site sem aviso
              prévio, bem como informações sobre cursos.
            </p>
          </Prose>
        </div>

        <div className="space-y-4">
          <SubsectionTitle>Sobre a avaliação do feedback</SubsectionTitle>
          <Prose>
            <p>
              Todos os relatos passam por avaliação de pessoas voluntárias antes
              da publicação. A avaliação visa:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Evitar a propagação de informações falsas;</li>
              <li>
                Vetar discursos de ódio, racismo, preconceitos e outros tipos de
                ataques;
              </li>
              <li>
                Evitar feedbacks que não tenham relação com o curso em questão.
              </li>
            </ul>
            <p>É esperado dos relatos:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Avaliação do processo de aprendizado enquanto estudante do
                curso;
              </li>
              <li>
                Pontos positivos e negativos sobre metodologias de ensino,
                temas, materiais, didática, mentorias e similares;
              </li>
              <li>
                Se as expectativas foram atendidas ou não, e pontos de melhoria
                após o término do curso.
              </li>
            </ul>
            <p>
              O prazo para avaliação do feedback encaminhado é de 7 (sete) dias
              úteis, a contar do dia de envio. Se aprovado, o feedback será
              exibido na página do curso; se reprovado, enviaremos mensagem por
              e-mail sobre a reprovação.
            </p>
            <p>
              Nenhum feedback será editado pela equipe da VagasUX, sendo
              exibidos exatamente como foram enviados.
            </p>
          </Prose>
        </div>

        <div className="space-y-4">
          <SubsectionTitle>
            Denúncias, retirada e revisões de feedbacks
          </SubsectionTitle>
          <Prose>
            <p>
              Para denúncias de possíveis feedbacks com informações falsas ou
              comentários inapropriados, envie para{' '}
              <TextLink href={`mailto:${contact.email}`}>
                {contact.email}
              </TextLink>{' '}
              com informações de qual feedback está com problemas, nome da
              pessoa e data de postagem, além da justificativa para possível
              retirada. No caso de informações falsas ou equivocadas, pedimos,
              se possível, fontes para averiguação.
            </p>
            <p>
              Solicitações de retirada de feedback que estejam dentro da nossa
              política e já estejam aprovados só serão aceitas mediante
              justificativa a ser analisada pela equipe da VagasUX.
            </p>
            <p>
              Não fazemos revisão de textos já aprovados. Caso necessário, pode
              ser enviado um novo feedback e solicitada a retirada do antigo
              através do{' '}
              <TextLink href={`mailto:${contact.email}`}>
                {contact.email}
              </TextLink>
              , desde que comprovado ser a mesma pessoa autora.
            </p>
          </Prose>
        </div>
      </div>
    </InstitutionalPage>
  )
}
