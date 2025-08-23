# Site Blog [(Acesse aqui)](https://site-blog-rho.vercel.app/)

Este é um projeto de blog moderno desenvolvido com [Next.js](https://nextjs.org/), [React 18](https://react.dev/), [Contentlayer](https://www.contentlayer.dev/) e estilizado com [Tailwind CSS](https://tailwindcss.com/). O objetivo é fornecer uma plataforma simples e personalizável para criar uma loja de afiliados e compartilhar conteúdos em um blog.

## Funcionalidades

- Landing page moderna e responsiva
- Seção de depoimentos de clientes
- Seção de produtos personalizável
- Componentes reutilizáveis com React e TypeScript
- Listagem de posts com busca
- Página de detalhes do post
- Compartilhamento de posts
- Layout responsivo
- SEO otimizado

## Tecnologias Utilizadas

- [Next.js 13](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React Icons](https://lucide.dev/)
- [Contentlayer](https://www.contentlayer.dev/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)

## 🚀 Como rodar o projeto

1. **Instale as dependências:**

   ```sh
   npm install
   ```

2. **Gere os tipos do Contentlayer:**

   ```sh
   npx contentlayer build
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```sh
   npm run dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 🛠️ Scripts

- `npm run dev` — Inicia o servidor de desenvolvimento
- `npm run build` — Gera o build de produção
- `npm run start` — Inicia o servidor em modo produção
- `npx contentlayer build` — Gera os tipos e dados do Contentlayer

## Estrutura do Projeto

- `src/pages/` — Páginas principais do site (Home, Blog, [slug], etc)
- `src/components/` — Componentes reutilizáveis (Layout, Botão, Logo, Header, etc)
- `src/templates/landing-page/` — Templates e seções da landing page
- `src/templates/blog/` — Templates e componentes do blog (BlogList, PostCard, etc)
- `src/styles/` — Arquivos de estilos globais
- `posts/` — Arquivos de conteúdo dos posts (MDX/Markdown) _(se usar Contentlayer)_
- `public/` — Imagens e arquivos estáticos

## 📝 Observações

- O projeto foi testado com Node.js 18+ e Windows.
- O Contentlayer pode exibir alguns avisos no Windows, mas funciona normalmente.
- Para adicionar novos componentes do shadcn/ui, utilize o comando:
  ```sh
  npx shadcn@latest add <componente>
  ```

## Personalização

Você pode alterar as cores, fontes e outros estilos em [`tailwind.config.ts`](tailwind.config.ts).

## Licença

Este projeto é apenas para fins de estudo e demonstração.

---

Feito com 💙 por Rocketseat e desenvolvido por mim!
