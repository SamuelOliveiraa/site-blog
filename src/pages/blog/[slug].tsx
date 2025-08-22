import Avatar from "@/components/avatar";
import Markdown from "@/components/markdonw";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { useShare } from "@/hooks/use-share/use-share";
import { allPosts } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PostPage() {
  const router = useRouter();
  const slug = router.query.slug as string;
  const post = allPosts.find(
    post => post.slug.toLowerCase() === slug?.toLowerCase()
  );

  const postUrl = `https://site.set/blog/${slug}`;

  const { shareButtons } = useShare({
    url: postUrl,
    title: post?.title,
    text: post?.description
  });

  return (
    <main className="py-20 text-gray-100">
      {post && (
        <div className="container space-y-8 px-4 md:px-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild className="text-action-sm">
                  <Link href={"/blog"}>Blog</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <span className="text-blue-200 text-action-sm">
                  {post?.title}
                </span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="grid grid-cols-1  lg:grid-cols-[1fr_300px] gap-6 lg:gap-12">
            <article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border-[1px]">
              <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-t-lg">
                <Image
                  src={post.image ?? ""}
                  alt={post.title ?? ""}
                  fill
                  className="object-cover"
                />
              </figure>

              <header className="p-4 md:p-6 lg:p-12 pb-0 mt-12">
                <h1 className="mb-8  text-heading-lg md:text-heading-xl lg:text-heading-xl">
                  {post.title}
                </h1>
                <Avatar
                  src={post.author.avatar ?? ""}
                  name={post.author.name ?? ""}
                  date={new Date(post.date).toLocaleDateString("pt-BR")}
                />
              </header>
              <div className="prose prove-invert max-w-none px-4 md:px-6 lg:px-12">
                <Markdown content={post.body.raw} />
              </div>
            </article>

            <aside className="space-y-6">
              <div className="rounded-lg ">
                <h2 className="hidden sm:block mb-4 text-heading-xs text-gray-100">
                  Compartilhar
                </h2>

                <div className="flex flex-wrap justify-between sm:flex-col gap-2">
                  {shareButtons.map(provider => (
                    <Button
                      key={provider.provider}
                      variant="outline"
                      className="w-fit sm:w-full justify-start gap-2"
                      onClick={() => provider.action()}
                    >
                      {provider.icon}
                      <span className="hidden sm:block">{provider.name}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      )}
    </main>
  );
}
