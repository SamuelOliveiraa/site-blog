import "@/styles/globals.css";

import Layout from "@/components/layout";

export const metadata = {
  title: "Site Blog",
  description:
    "Plataforma de blog moderno desenvolvida com Next.js, React, Contentlayer e Tailwind CSS. Compartilhe dicas, estratégias e conteúdos sobre negócios digitais, produtividade, empreendedorismo e tecnologia."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
