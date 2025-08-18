import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/router";
import { useCallback } from "react";

export default function Search() {
  const router = useRouter();
  const query = router.query.q as string;

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (query.trim()) {
        router.push(`/blog?q=${encodeURIComponent(query)}`);
      }
    },
    [query, router]
  );

  function handleQueryChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    const newQuery = e.target.value;

    router.push(`/blog?q=${encodeURIComponent(newQuery)}`, undefined, {
      shallow: true,
      scroll: false
    });
  }

  return (
    <form onSubmit={handleSearch} className="relative group">
      <SearchIcon
        className={cn(
          "text-gray-300 absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 transition-colors duration-200 group-focus-within:text-blue-300",
          query ? "text-blue-300" : ""
        )}
      />
      <input
        type="text"
        placeholder="Buscar"
        onChange={handleQueryChange}
        className="h-10 w-72 bg-transparent border border-gray-400 pl-9 text-gray-100 rounded-md text-body-sm outline-none transition-all duration-200 focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300 placeholder:text-gray-300 placeholder:text-body-sm"
      />
    </form>
  );
}
