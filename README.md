# Guilherme Costa — Personal Trainer (Next.js)

Cartão de visitas digital migrado de TanStack Start para **Next.js 15**.

## Setup

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Estrutura

```
app/
  layout.tsx      # Layout raiz com metadata SEO
  page.tsx        # Página principal (cartão de visitas)
  globals.css     # Estilos globais + design tokens
public/
  logo.png        # Logo/foto do trainer
next.config.ts
```

## Personalizar contatos

Edite o array `CONTACTS` em `app/page.tsx`:

```ts
{ href: "https://wa.me/55XXXXXXXXXXX", label: "WHATSAPP", sublabel: "..." }
```

## Personalizar foto

Substitua `public/logo.png` pela foto do trainer e ajuste o `objectPosition` no `<Image>` se necessário.

## Deploy

```bash
npm run build
npm run start
```

Compatível com Vercel, Railway, ou qualquer host Node.js.
