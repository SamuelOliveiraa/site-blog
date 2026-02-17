# Site Blog [(Acesse aqui)](https://site-blog-samuel.vercel.app/pt)

![Blog/Site Image](https://raw.githubusercontent.com/SamuelOliveiraa/site-blog/refs/heads/master/public/og-image.png)

This is a modern blog project developed with [Next.js](https://nextjs.org/), [React 18](https://react.dev/), [Contentlayer](https://www.contentlayer.dev/), and styled with [Tailwind CSS](https://tailwindcss.com/). The goal is to provide a simple and customizable platform to create an affiliate store and share content on a blog.

## Features

- Modern and responsive landing page
- Customer testimonials section
- Customizable products section
- Reusable components with React and TypeScript
- Post listing with search
- Post detail page
- Post sharing
- Responsive layout
- SEO optimized
- Internationalization (i18n) support: Portuguese and English

## Technologies Used

- [Next.js 13](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React Icons](https://lucide.dev/)
- [Contentlayer](https://www.contentlayer.dev/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [next-intl](https://next-intl-docs.vercel.app/) — Internationalization

## 🚀 How to run the project

1. **Install the dependencies:**

   ```sh
   npm install
   ```

2. **Generate the Contentlayer types:**

   ```sh
   npx contentlayer build
   ```

3. **Start the development server:**

   ```sh
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🛠️ Scripts

- `npm run dev` — Starts the development server
- `npm run build` — Generates the production build
- `npm run start` — Starts the server in production mode
- `npx contentlayer build` — Generates the Contentlayer types and data

## Project Structure

- `src/pages/` — Main pages of the site (Home, Blog, [slug], etc)
- `src/components/` — Reusable components (Layout, Button, Logo, Header, etc)
- `src/templates/landing-page/` — Landing page templates and sections
- `src/templates/blog/` — Blog templates and components (BlogList, PostCard, etc)
- `src/styles/` — Global style files
- `posts/` — Post content files (MDX/Markdown) _(if using Contentlayer)_
- `public/` — Images and static files
- `messages/` — Translation files for internationalization

## 📝 Notes

- The project was tested with Node.js 18+ and Windows.
- Contentlayer may display some warnings on Windows, but it works normally.
- To add new shadcn/ui components, use the command:
  ```sh
  npx shadcn@latest add <component>
  ```
- To add or edit translations, modify the files in [`messages/`](messages/).

## Customization

You can change the colors, fonts, and other styles in [`tailwind.config.ts`](tailwind.config.ts).

## License

This project is for study and demonstration purposes only.

---

Made with 💙 by Rocketseat and developed by me!
