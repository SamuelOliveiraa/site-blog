import Search from "@/components/search";
import { allPosts } from "contentlayer/generated";
import { Inbox } from "lucide-react";
import { useRouter } from "next/router";
import PostCard from "./components/post-card";
import PostGridCard from "./components/post-grid-card";

export function BlogList() {
  const router = useRouter();
  const query = router.query.q;
  const pageTitle = query
    ? `Resultados de busca para: "${query}"`
    : "Dicas e estratégias para impulsionar seu negócio";

  const posts = query
    ? allPosts.filter(post => {
        post.title.toLowerCase().includes(query.toLocaleString());
      })
    : allPosts;

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
        {posts.map(post => (
          <PostCard
            key={post._id}
            date={new Date(post.date).toLocaleDateString("pt-BR")}
            slug={post.slug}
            title={post.title}
            image={post.image}
            description={post.description}
            author={{ name: post.author.name, avatar: post.author.avatar }}
          />
        ))}
      </PostGridCard>

      {posts.length === 0 && (
        <div className="container px-8">
          <div className="container flex flex-col justify-center gap-8 items-center border-dashed border-2 border-gray-300 p-8 md:p-12 rounded-lg">
            <Inbox className="h-12 w-12 text-cyan-100" />
            <p className="text-gray-100">Nenhuma postagem localizada.</p>
          </div>
        </div>
      )}
    </div>
  );
}
