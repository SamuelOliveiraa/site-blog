import Image from "next/image";

type AvatarProps = {
  src: string;
  name: string;
  date?: string;
};

export default function Avatar({ src, name, date }: AvatarProps) {
  return (
    <div className="flex items-center gap-3 py-4">
      <div
        className={`relative ${
          date ? "h-9 w-9" : "h-7 w-7 "
        } overflow-hidden rounded-full border-blue-200 border-[1px]`}
      >
        <Image
          src={src.trim()}
          alt={name}
          fill
          className="object-cover rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <span
          className={`text-body-sm ${date ? "text-gray-200" : "text-gray-300"}`}
        >
          {name}
        </span>
        {date && (
          <span className="text-body-xs text-gray-300">
            Publicado em {date}
          </span>
        )}
      </div>
    </div>
  );
}
