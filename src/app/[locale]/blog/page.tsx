import { BlogList } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Dicas e estratégias para impulsionar seu negócio.",
  robots: "index, follow",
  openGraph: {
    title: "Blog",
    description: "Dicas e estratégias para impulsionar seu negócio",
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

export default function BlogListPage() {
  const sortedPost = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return <BlogList posts={sortedPost} />;
}
