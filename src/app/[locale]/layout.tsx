import "@/styles/globals.css";

import Layout from "@/components/layout";
import { Metadata } from "next";

import { routing } from "@/i18n/routing";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";

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

type LayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang="pt">
      <body>
        <NextIntlClientProvider>
          <Layout>{children}</Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
