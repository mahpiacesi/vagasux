# Conexão MCP — Supabase + n8n (VagasUX)

Este guia configura os servidores MCP para o agente do Cursor ler o schema/dados no **Supabase** e inspecionar/ajustar workflows no **n8n** — a base do agregador de vagas (Gupy, Greenhouse, Remotar, etc.).

## Status neste repositório

Arquivo de configuração do projeto:

- [`.cursor/mcp.json`](../.cursor/mcp.json) — Supabase (HTTP + OAuth) e n8n (stdio via `npx`)

Secrets **não** vão no Git. Use variáveis de ambiente ou o MCP Settings do Cursor.

---

## 1. Supabase MCP

Servidor oficial hospedado: `https://mcp.supabase.com/mcp`

### Cursor Desktop

1. Abra **Cursor Settings → Tools & MCP**.
2. Confirme que o servidor `supabase` aparece (vindo do `.cursor/mcp.json`).
3. Clique para conectar / autorizar (OAuth no navegador).
4. Escolha a org/projeto da VagasUX.
5. Reinicie o MCP se as tools não aparecerem.

### Escopo recomendado no início

A URL do projeto já usa `read_only=true` para evitar writes acidentais. Quando for criar tabelas/migrations via agente, troque temporariamente para:

```json
"url": "https://mcp.supabase.com/mcp"
```

Ou fixe um projeto:

```text
https://mcp.supabase.com/mcp?project_ref=SEU_PROJECT_REF&read_only=true
```

(`project_ref` está na URL do dashboard: `https://supabase.com/dashboard/project/<project_ref>`)

### Alternativa com Personal Access Token

Se preferir stdio em vez de OAuth:

```json
"supabase": {
  "command": "npx",
  "args": [
    "-y",
    "@supabase/mcp-server-supabase",
    "--read-only",
    "--project-ref",
    "SEU_PROJECT_REF"
  ],
  "env": {
    "SUPABASE_ACCESS_TOKEN": "sbp_..."
  }
}
```

Token: [Supabase Account → Access Tokens](https://supabase.com/dashboard/account/tokens).

---

## 2. n8n MCP

Usamos o servidor comunitário [`n8n-mcp`](https://github.com/czlonkowski/n8n-mcp) para:

- documentação/validação de nodes (sem API key)
- listar/ler/editar workflows da sua instância (com API key)

### Credenciais

No n8n: **Settings → API → Create API Key**.

Defina no ambiente (shell, Cursor Secrets, ou Cloud Agent env):

```bash
export N8N_API_URL="https://SUA-INSTANCIA.n8n.cloud"
export N8N_API_KEY="sua-api-key"
```

Sem trailing slash na URL.

### Só documentação (sem tocar na instância)

Remova `N8N_API_URL` e `N8N_API_KEY` do bloco `env` em `.cursor/mcp.json`. Restam tools de busca/validação de nodes.

### Cloudflare Access (se a instância estiver atrás de Zero Trust)

```bash
export N8N_CF_ACCESS_CLIENT_ID="..."
export N8N_CF_ACCESS_CLIENT_SECRET="..."
```

e adicione as mesmas chaves no `env` do servidor `n8n-mcp`.

---

## 3. Cloud Agents

Neste Cloud Agent, os MCPs ativos hoje são os do environment (ex.: Figma, Notion), **não** automaticamente o `.cursor/mcp.json` do repo.

Para o agente na nuvem usar Supabase/n8n:

1. Em [Cloud Agents → Environments](https://cursor.com/dashboard/cloud-agents), abra o environment `mahpiacesi/vagasux`.
2. Adicione os MCPs Supabase e n8n (mesma config do `.cursor/mcp.json`).
3. Configure secrets do environment: `N8N_API_URL`, `N8N_API_KEY` (e token Supabase se não usar OAuth).
4. Inicie um novo run do agente depois de salvar.

Enquanto isso não estiver feito, o agente na nuvem **não** consegue listar tabelas do Supabase nem workflows do n8n via MCP.

---

## 4. Checklist de validação

No Cursor (Desktop ou Cloud com MCP configurado), peça:

1. **Supabase:** “Liste as tabelas do projeto VagasUX.”
2. **n8n:** “Liste os workflows ativos na instância.”
3. Confirme que o workflow de ingestão (Gupy / Greenhouse / Remotar → Supabase) aparece e que as colunas batem com o schema.

---

## 5. Próximo passo do produto

Com MCP conectado, a sequência natural é:

1. Mapear o schema atual no Supabase (`jobs`, `sources`, `companies`, etc.).
2. Inspecionar o workflow n8n já iniciado (nodes, dedupe, schedule).
3. Expor a API/leitura no site (Next.js ou stack que escolherem) consumindo Supabase.
4. Ampliar fontes (Gupy, Greenhouse, Remotar, …) com o mesmo contrato de dados.
