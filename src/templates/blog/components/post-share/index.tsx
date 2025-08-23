"use client";

import { Button } from "@/components/ui/button";
import { useShare } from "@/hooks/use-share/use-share";

type PostShareProps = {
  url: string;
  title: string;
  description: string;
};

export default function PostShare({ url, title, description }: PostShareProps) {
  const { shareButtons } = useShare({
    url,
    title,
    text: description
  });
  return (
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
  );
}
