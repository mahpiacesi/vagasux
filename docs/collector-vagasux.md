# Collector VagasUX (curadoria Notion)

Ingestão da base **Vagas para iniciantes** no Notion para o Supabase.

## Fonte

| Campo | Valor |
|-------|-------|
| `source` | `VagasUX` |
| Notion database (page) | `875a7396-c095-474c-9a45-d8543ee03fdb` |
| Notion data source | `f40df86d-dfc7-4fce-bcbd-dd1ff8b47ab0` |
| Workflow n8n | **Collector VagasUX** (tag VagasUX) |

## Mapeamento Notion → contrato

| Notion | Supabase |
|--------|----------|
| `page.id` | `source_job_id` |
| `Empresa` | `company` |
| `Função` | `title` |
| `Descrição` | `description` |
| `Link da vaga/empresa` | `url` (normalizada, sem UTM) |
| `Localização` | `location` (só geografia: SP e região, Exterior…) |
| `Formato` | `work_model` (`Remoto`→`remote`, `Híbrido`→`hybrid`, `Presencial`→`onsite`, `Não informado`→`unknown`) |
| `Data da inclusão` | `published_at` |

## Dedup cross-source

O collector usa `upsert_collector_job` (mesmo RPC do Remotar):

- **`source_job_id`** = ID da page no Notion (re-sync da curadoria)
- **`url`** = link de candidatura → dedup com Gupy/Remotar/Greenhouse
- Se a URL já existir → `updated_by_url` (sem duplicata; `source` original preservado)
- Se for vaga exclusiva da curadoria → insert com `source = 'VagasUX'`

## Filtros no collector

Linhas ignoradas (`skip = true`):

- sem `Empresa`, `Função` ou `Link da vaga/empresa`
- `Inscrições aberta até` no passado (quando preenchido)

## Setup n8n (obrigatório)

1. Em [notion.so/my-integrations](https://www.notion.so/my-integrations), crie uma **internal integration** (ex.: `VagasUX Collector`).
2. Compartilhe a base **Vagas para iniciantes** com a integration (⋯ → Connections).
3. No n8n: **Credentials → Notion API** → cole o token (`secret_...`).
4. No workflow **Collector VagasUX**, associe a credencial no node **Fetch curated jobs**.
5. Publique o workflow e rode manualmente ou via **Scheduler**.

## Scheduler

Ordem diária: Greenhouse + Gupy → Remotar → **VagasUX** → expire >60d → enrichment.
