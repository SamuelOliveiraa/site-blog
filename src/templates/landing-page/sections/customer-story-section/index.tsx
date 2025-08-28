import { useTranslations } from "next-intl";
import Image from "next/image";

export default function CustomerStorySection() {
  const t = useTranslations("CustomerStorySection");

  const customerStories = [
    {
      content: t("stories.story1.content"),
      author: {
        name: t("stories.story1.author.name"),
        role: t("stories.story1.author.role"),
        avatar: t("stories.story1.author.avatar")
      }
    },
    {
      content: t("stories.story2.content"),
      author: {
        name: t("stories.story2.author.name"),
        role: t("stories.story2.author.role"),
        avatar: t("stories.story2.author.avatar")
      }
    }
  ];
  return (
    <section className="container py-8 md:py-10 ">
      <div className="flex flex-col items-center gap-12  ">
        <h2 className="font-sans text-heading-xl text-gray-100">
          {t("title")}
        </h2>
        <div className="grid gap-7 md:grid-cols-2">
          {customerStories.map(customerStory => (
            <div
              key={customerStory.author.name}
              className="flex flex-col gap-6 rounded-lg bg-gray-500 p-6 md:p-10 "
            >
              <p className="text-gray-200">{customerStory.content}</p>
              <div className="flex items-center gap-3 ">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={customerStory.author.avatar}
                    alt={customerStory.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <strong className="text-gray-200 text-sm">
                    {customerStory.author.name}
                  </strong>
                  <span className="text-xs text-gray-300">
                    {customerStory.author.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
