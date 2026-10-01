import {
  Callout,
  InstitutionalPage,
  Prose,
  SectionTitle,
  SubsectionTitle,
  TextLink,
} from '@/components/InstitutionalPage'
import { reopenCookieBanner } from '@/lib/cookieConsent'
import { analyticsPrivacy } from '@/lib/siteLinks'

const LAST_UPDATED = '30 de julho de 2026'

export function PreferenciasDeCookiesPage() {
  return (
    <InstitutionalPage
      title="Preferências de cookies"
      lead="O que a VagasUX guarda no navegador, para que isso serve e como mudar sua escolha."
    >
      <Callout>
        <p className="text-sm text-neutral-400 md:text-base">
          <span className="font-bold text-neutral-500">Última atualização:</span>{' '}
          {LAST_UPDATED}
        </p>
      </Callout>

      <div className="space-y-4">
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
      </div>

      <div className="space-y-4">
        <SubsectionTitle>Microsoft Clarity</SubsectionTitle>
        <Prose>
          <p>
            Utilizamos o Microsoft Clarity, uma ferramenta de análise de
            comportamento que nos ajuda a compreender como as pessoas utilizam a
            plataforma por meio de recursos como:
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
            O tratamento dessas informações segue as políticas de privacidade da
            Microsoft. Para saber mais, consulte a{' '}
            <TextLink href={analyticsPrivacy.microsoftClarity}>
              Política de Privacidade da Microsoft
            </TextLink>
            .
          </p>
        </Prose>
      </div>

      <div className="space-y-4">
        <SectionTitle>Sua escolha</SectionTitle>
        <Prose>
          <p>
            Ao aceitar os cookies opcionais, você concorda com a utilização do
            Microsoft Clarity para análise e melhoria contínua da plataforma.
          </p>
          <p>
            Essa escolha aparece no aviso da primeira visita. Para ver o aviso
            de novo,{' '}
            <button
              type="button"
              onClick={reopenCookieBanner}
              className="cursor-pointer border-0 bg-transparent p-0 font-semibold text-brand-500 underline decoration-brand-200 underline-offset-4 transition-colors hover:text-brand-400 hover:decoration-brand-300"
            >
              altere sua escolha
            </button>
            .
          </p>
        </Prose>
      </div>
    </InstitutionalPage>
  )
}
