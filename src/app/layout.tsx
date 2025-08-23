import "@/styles/globals.css";

import Layout from "@/components/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site.set",
  description: "Venda seus produtos como afiliado em um único lugar.",
  robots: "index, follow",
  openGraph: {
    title: "Site.set",
    description: "Venda seus produtos como afiliado em um único lugar",
    url: "https://site-blog-rho.vercel.app/og-image.png",
    siteName: "Site.set",
    locale: "pt-BR",
    images: [
      {
        url: "https://site-blog-rho.vercel.app/og-image.png",
        width: 800,
        height: 600,
        alt: "Site.set"
      }
    ]
  }
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
