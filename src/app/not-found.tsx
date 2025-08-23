import { Button } from "@/components/ui/button";
import { FileQuestion, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 flex-col">
      <div className="max-w-md w-full text-center">
        <FileQuestion className="text-gray-100 mx-auto mb-6" size={64} />
      </div>

      <div className="relative inline-block mb-3 font-sans">
        <span className="text-8xl font-bold text-white inline-block transform -rotate-12 -translate-y-2 -translate-x-1">
          4
        </span>
        <span className="text-8xl font-bold text-white inline-block">0</span>
        <span className="text-8xl font-bold text-white inline-block">4</span>
      </div>

      <p className="text-gray-100 mb-8">
        Pagina nao encontrada ou em desenvolvimento
      </p>

      <div className="flex mt-6 justify-center gap-4">
        <Button variant={"default"} asChild>
          <Link href={"/"}>Home</Link>
        </Button>

        <Button variant={"secondary"} asChild>
          <Link href={"/blog?q="}>
            <Search size={16} />
            Pesquisar Post
          </Link>
        </Button>
      </div>
    </div>
  );
}
