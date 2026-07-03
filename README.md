# vagasux

Comunidade brasileira de UX, Produto e Design.

## Landing page (exploração)

A landing page fica em `web/`. **Ela só abre depois que você iniciar o servidor no seu computador** — o `localhost` aponta para a sua máquina, não para outro ambiente.

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior (`node -v` no terminal)

### Rodar localmente

No terminal, na pasta do repositório:

```bash
cd web
npm install
npm run dev
```

Quando aparecer algo como `Local: http://localhost:5173/`, abra esse endereço no navegador.

### Se der "conexão recusada"

1. **Confirme que o servidor está rodando** — o terminal precisa ficar aberto com `npm run dev` ativo. Se fechar o terminal, o servidor para.
2. **Rode os comandos na pasta certa** — use `cd web` antes de `npm install` e `npm run dev`.
3. **Instale as dependências** — sem `npm install`, o `npm run dev` pode falhar antes de subir o servidor.
4. **Teste outra porta** — se a 5173 estiver ocupada:

```bash
cd web
npm run dev -- --port 5174
```

Depois abra `http://localhost:5174`.

### Alternativa: build + preview

Se preferir ver a versão de produção:

```bash
cd web
npm install
npm run build
npm run preview
```

Abra o endereço que o terminal mostrar (geralmente `http://localhost:4173`).
