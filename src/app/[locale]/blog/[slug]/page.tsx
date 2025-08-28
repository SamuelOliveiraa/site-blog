import { PostPage } from "@/templates/blog/post-page";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
  params: {
    slug: string;
    locale: string;
  };
};

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const { slug, locale } = params;
  const post = allPosts.find(
    post => post.slug === slug && post.locale.trim() === locale.trim()
  );

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author.name }],
    robots: "index, follow",
    openGraph: {
      images: [post.image]
    }
  };
}

export const dynamicParams = true;

export async function generateStaticParams() {
  return allPosts.map(post => ({
    slug: post.slug,
    locale: post.locale.trim()
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug, locale } = params;

  const post = allPosts.find(
    post => post.slug === slug && post.locale.trim() === locale.trim()
  );

  if (!post) {
    notFound();
  }

  return <PostPage post={post} />;
}
