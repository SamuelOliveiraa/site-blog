"use client";

import Search from "@/components/search";
import { Post } from "contentlayer/generated";
import { Inbox } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams, useSearchParams } from "next/navigation";
import PostCard from "./components/post-card";
import PostGridCard from "./components/post-grid-card";

export type BlogListProps = {
  posts: Post[];
};

export function BlogList({ posts }: BlogListProps) {
  const t = useTranslations("BlogListPage");

  const searchParams = useSearchParams();
  const query = searchParams?.get("q") ?? "";
  const pageTitle = query ? `${t("resultsQuery1")} "${query}"` : t("title");

  const params = useParams();
  const rawLocale = params.locale ?? "pt"; // o params locale pode me retornar um string ou string[]

  const locale = Array.isArray(rawLocale) ? rawLocale[0] : rawLocale; // utilizo o ternario para verificar se é array ou não e pegar somente a primeira string

  const postsByLocale = posts.filter(
    post => post.locale.trim() === locale.trim()
  );

  const postsList = query
    ? postsByLocale.filter(post =>
        post.title.toLowerCase()?.includes(query.toLocaleString().toLowerCase())
      )
    : postsByLocale;

  return (
    <div className="flex flex-col py-24 flex-grow h-full ">
      <header className="pb-14">
        <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4 md:px-0">
            <span className="text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300">
              BLOG
            </span>
            <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">
              {pageTitle}
            </h1>
          </div>
          <Search />
        </div>
      </header>

      <PostGridCard>
        {postsList.map(post => (
          <PostCard
            key={post._id}
            date={new Date(post.date).toLocaleDateString("pt-BR")}
            slug={post.slug}
            title={post.title}
            image={post.image}
            description={post.description}
            author={{ name: post.author.name, avatar: post.author.avatar }}
            locale={post.locale}
          />
        ))}
      </PostGridCard>

      {postsList.length === 0 && (
        <div className="container px-8">
          <div className="container flex flex-col justify-center gap-8 items-center border-dashed border-2 border-gray-300 p-8 md:p-12 rounded-lg">
            <Inbox className="h-12 w-12 text-cyan-100" />
            <p className="text-gray-100 text-center">{t("emptyPosts")}</p>
          </div>
        </div>
      )}
    </div>
  );
}
