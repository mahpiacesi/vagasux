# Limpa dos grupos

Simulação local da limpa do #1 VagasUX, do #2 VagasUX e do Damas da VagasUX.

As pessoas da tela são casos fictícios. A ferramenta não conecta no WhatsApp e não remove ninguém de verdade. Cada grupo tem o próprio aviso: a reação vale só naquela mensagem, e a saída é só daquele grupo.

```bash
node tools/limpa-grupos/server.mjs
```

Abra `http://127.0.0.1:8787`.

Os testes da regra:

```bash
node --test tools/limpa-grupos/domain.test.mjs tools/limpa-grupos/engine.test.mjs
```
