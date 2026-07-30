# Export dos workflows n8n (Cloud → self-hosted)

Coloque aqui o JSON exportado do n8n Cloud (**Settings → Download your data** ou export por workflow).

## Estrutura sugerida

```
workflows/n8n-export/
  all-workflows.json          # export completo (se veio um arquivo só)
  Collector Parceiros.json    # ou um arquivo por workflow
  Scheduler.json
  ...
```

## Segurança

- **Não commite** credenciais — o export de workflows do Cloud **não inclui** secrets descriptografados.
- Se o export contiver dados sensíveis em nodes, mantenha a pasta no `.gitignore` local ou use um export privado fora do Git.

## Import

Siga `docs/n8n-self-hosted.md` — Fase 3.
