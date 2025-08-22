import Avatar from "@/components/avatar";
import Image from "next/image";
import Link from "next/link";

type Author = {
  name: string;
  avatar: string;
};

type PostCardProps = {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: Author;
};

export default function PostCard({
  slug,
  title,
  description,
  image,
  date,
  author
}: PostCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="w-full max-w-2xl rounded-[12px] border-[1px] border-gray-400 bg-gray-600 overflow-hidden transition-all duration-300  hover:border-blue-300 "
    >
      <div className="p-2 rounded-md overflow-hidden">
        <div className="relative">
          <div className="absolute top-0 right-0 px-3 py-1 flex justify-center items-center bg-gray-600 backdrop-blur-sm rounded-bl-sm">
            <span className="text-gray-300 text-body-xs">{date}</span>
          </div>
          <Image
            src={image.trim()}
            alt="Post do projeto"
            width={288}
            height={144}
            className="w-full h-40 object-cover object-center rounded-[8px]"
          />
        </div>
        <div className="px-2 mt-4 space-y-4">
          <h2 className="text-heading-sm text-gray-100 line-clamp-3">
            {title}
          </h2>
          <p className="text-gray-300 text-body-sm line-clamp-3">
            {description}
          </p>

          <div className="w-full bg-gray-400 h-[0.1px]" />

          <Avatar src={author.avatar} name={author.name} />
        </div>
      </div>
    </Link>
  );
}
