# UI system (shadcn + marca VagasUX)

O app em `web/` usa **shadcn/ui** (Radix Nova) sobre Tailwind v4, com tokens mapeados para a marca.

## Cores semânticas → marca

| Token shadcn | Marca |
|---|---|
| `primary` | Brand-300 `#5D6BF6` |
| `secondary` / `muted` | Brand-100 `#EFF0FF` |
| `foreground` | Neutral-500 `#07003A` |
| `background` | Neutral-100 `#FFFFFF` |
| `accent` | Complementary-100 `#FFFBF1` |
| `destructive` | Highlight-200 `#DA4946` |
| fonte | **Lato** (não Geist) |

Definição em `web/src/index.css` (`:root` + `@theme`).

## Componentes base

Já adicionados em `web/src/components/ui/`:

- `button`
- `input`
- `badge`

Adicionar novos:

```bash
cd web
npx shadcn@latest add <component>
```

## Uso no mural

Filtros, busca e “Ver mais vagas” já consomem `Button` / `Input` do shadcn, com a cor primária da marca.
