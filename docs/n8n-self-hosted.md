# n8n self-hosted (Community Edition)

Migrar de **n8n Cloud** (`vagasux.app.n8n.cloud`) para **n8n Community Edition** no seu servidor — sem pagar ~R$150/mês de Cloud, mantendo o mesmo pipeline VagasUX.

## Modelo de trabalho: Agente + você

| Quem | Faz o quê |
|------|-----------|
| **Você (manual)** | VPS, DNS, login inicial, credenciais (Notion, Supabase, Gemini), import UI se preferir |
| **Agente Cursor** | Infra no repo, comandos copy-paste, validar workflows via MCP, ajustar collectors, documentação |

Você **não precisa saber Docker** — copia e cola os comandos que o agente passa. O agente mantém `infra/n8n/` e `tools/n8n/` versionados.

---

## O que vocês já têm

- Export dos workflows do Cloud (guardar em `workflows/n8n-export/`)
- Workflows versionados em `tools/n8n/*.workflow.ts` (backup parcial)
- Supabase + site já integrados

## O que a Community Edition cobre (VagasUX)

- Schedule Trigger (Scheduler diário)
- Execute Workflow (sub-workflows)
- HTTP Request → Supabase RPC
- Notion, Gemini, Code nodes

Não precisam (por enquanto): SSO, Git sync, Environments, Projects.

---

## Fase 0 — Preparação (você, ~30 min)

### 0.1 Export (feito)

Coloque os JSON em:

```text
workflows/n8n-export/
```

Veja `workflows/n8n-export/README.md`.

### 0.2 Escolher hospedagem

Opções viáveis sem ser expert:

| Opção | Prós | Contras |
|-------|------|---------|
| **Hostinger VPS + template n8n** | Quase one-click | Menos controle |
| **Hetzner / Virtua Cloud CX22** | Barato (~€4–5/mês) | Copiar comandos do agente |
| **Railway / Render** | Simples | Custo pode subir; persistência exige cuidado |

Recomendação VagasUX: **VPS Linux 2 vCPU / 2–4 GB RAM** (Ubuntu 24.04).

### 0.3 DNS

Crie um registro apontando para o IP do VPS:

```text
n8n.vagasux.com.br  →  A  →  IP_DO_VPS
```

Informe o agente quando estiver propagado.

---

## Fase 1 — Subir n8n (agente guia, você executa no VPS)

No VPS, clone o repo e gere secrets:

```bash
git clone https://github.com/mahpiacesi/vagasux.git
cd vagasux
git checkout cursor/n8n-self-hosted-a8a9   # branch da migração

bash infra/n8n/bootstrap-env.sh
nano infra/n8n/.env   # ajuste N8N_HOST, WEBHOOK_URL, N8N_PROTOCOL
```

Subir:

```bash
cd infra/n8n
docker compose up -d
docker compose ps
docker compose logs -f n8n   # Ctrl+C para sair
```

Primeiro acesso (HTTP direto, antes do HTTPS):

```text
http://IP_DO_VPS:5678
```

Crie a conta **owner** (email + senha).

### HTTPS (Caddy recomendado)

Com DNS apontando, o agente pode montar um `Caddyfile` na Fase 1b. Exemplo mínimo:

```text
n8n.vagasux.com.br {
  reverse_proxy localhost:5678
}
```

Depois atualize no `.env`:

```env
N8N_PROTOCOL=https
WEBHOOK_URL=https://n8n.vagasux.com.br/
N8N_SECURE_COOKIE=true
```

Reinicie: `docker compose up -d`.

---

## Fase 2 — Community Edition registrada (você, 5 min)

1. n8n → **Settings → Usage and plan → Unlock**
2. Email → receber license key → **Activate**
3. Ganha: pastas, debug no editor, custom execution data (grátis)

---

## Fase 3 — Importar workflows (agente ou script)

### Opção A — Script (VPS)

```bash
bash infra/n8n/import-workflows.sh
```

### Opção B — UI

Workflows → **Import from file** → selecione cada JSON.

### Opção C — Agente recria via MCP

Com `N8N_API_URL` + `N8N_API_KEY` no environment do Cursor, o agente publica a partir de `tools/n8n/*.workflow.ts`.

---

## Fase 4 — Credenciais (você, ~30–45 min) — **obrigatório**

O Cloud **não exporta** credenciais. Recrie na instância nova:

| Credencial | Tipo n8n | Usada em |
|------------|----------|----------|
| Notion API | Notion | Collector VagasUX, Collector Parceiros |
| Supabase | Supabase API (service role) | Todos collectors + expire |
| Google Gemini | Google PaLM/Gemini | Enrichment |

Depois, abra **cada workflow** e selecione a credencial correta nos nodes.

Checklist:

- [ ] Notion account
- [ ] Supabase account (service role — mesma do Cloud)
- [ ] Google Gemini (PaLM) API
- [ ] Todos os nodes HTTP "Upsert" / "Deactivate" apontam Supabase
- [ ] Workflows **publicados** (não só salvos)

---

## Fase 5 — Validar pipeline (agente + você)

Ordem de teste manual (Execute workflow):

1. **Collector Parceiros** → bucket `partner-logos` + tabela `partners`
2. Collector VagasUX
3. Collector Greenhouse / Gupy / Remotar
4. Expire stale jobs (se workflow separado)
5. Enrichment
6. **Scheduler** — só ativar por último

Quando `N8N_API_URL` estiver no Cursor:

```bash
# Exemplo — agente usa MCP n8n
N8N_API_URL=https://n8n.vagasux.com.br
N8N_API_KEY=...
```

Peça ao agente: *"Execute Collector Parceiros no n8n self-hosted e confira Supabase"*.

---

## Fase 6 — Cursor MCP (agente configura no repo)

Atualize secrets locais / Cloud Agent environment:

```bash
N8N_API_URL=https://n8n.vagasux.com.br
N8N_API_KEY=<Settings → API → Create API Key>
```

Sem trailing slash na URL. Ver `docs/mcp-setup.md`.

---

## Backup

Semanal no VPS:

```bash
cd infra/n8n
docker compose exec postgres pg_dump -U n8n n8n > backups/n8n-$(date +%F).sql
```

Guarde **N8N_ENCRYPTION_KEY** no gerenciador de senhas — perder = credenciais irrecuperáveis.

---

## Custos estimados

| Item | Cloud Pro | Self-hosted CE |
|------|-----------|----------------|
| n8n | ~R$150/mês | R$ 0 |
| VPS | — | ~R$25–45/mês |
| **Total** | ~R$150 | ~R$25–45 |

---

## Próximo passo concreto

1. Você: contratar VPS + apontar `n8n.vagasux.com.br`
2. Você: colocar export em `workflows/n8n-export/` (commit opcional, pode ficar local)
3. Agente: te passa comandos exatos para Fase 1 no seu VPS
4. Você: Fase 4 credenciais
5. Agente: valida collectors + Parceiros no Supabase

Abra um Cloud Agent com: *"Estou na Fase 1 do n8n self-hosted, IP do VPS é X, DNS propagou"*.
