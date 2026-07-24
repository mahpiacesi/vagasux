import {
  InstitutionalPage,
  Prose,
  SectionTitle,
  TextLink,
} from '@/components/InstitutionalPage'
import { externalSupport } from '@/lib/siteLinks'

export function ApoiePage() {
  return (
    <InstitutionalPage
      title="Apoie a iniciativa"
      lead="As iniciativas seguem gratuitas. O café ajuda a manter a energia — e os custos — pra continuar."
    >
      <div className="space-y-4">
        <SectionTitle>Campanha contínua</SectionTitle>
        <Prose>
          <p>
            Se você se identifica com a proposta da comunidade, apoie o projeto
            pra que ele continue crescendo. Além de incentivar colaboração e
            conhecimento acessível, o valor arrecadado ajuda nos custos mensais
            e em extras que a própria comunidade sugere.
          </p>
          <p>
            <TextLink href={externalSupport.apoiaSe}>
              Apoiar a partir de R$2 no Apoia.se →
            </TextLink>
          </p>
        </Prose>
      </div>

      <div className="space-y-4">
        <SectionTitle>Contribuição pontual</SectionTitle>
        <Prose>
          <p>
            Prefere uma transferência única? Dá pra apoiar via Pix com o valor
            que fizer sentido pra você.
          </p>
          <p>
            <TextLink href={externalSupport.pix}>
              Transferir via Pix (Nubank) →
            </TextLink>
          </p>
          <p className="text-sm">
            Se puder, mencione “VagasUX” na descrição da transferência.
          </p>
        </Prose>
      </div>

      <div className="space-y-4">
        <SectionTitle>Lojinha da comunidade</SectionTitle>
        <Prose>
          <p>
            Também dá pra apoiar comprando produtinhos da iniciativa na Colab55
            — eles cuidam da produção e a gente recebe uma comissão por venda.
          </p>
          <p>
            <TextLink href={externalSupport.lojinha}>
              Ver a lojinha VagasUX →
            </TextLink>
          </p>
        </Prose>
      </div>

      <Prose>
        <p>
          Agradecemos de verdade por estar com a gente no propósito de promover
          curadoria de vagas e conteúdos em UX para todos os níveis, todos
          mesmo.
        </p>
      </Prose>
    </InstitutionalPage>
  )
}
