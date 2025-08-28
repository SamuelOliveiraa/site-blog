import { useTranslations } from "next-intl";
import Image from "next/image";
import ButtonSection from "../../../../components/button";

export default function FeatureSection() {
  const t = useTranslations("FeatureSection");
  return (
    <section className="container gap-6 grid md:grid-cols-2 pb-8 pt-8 md:py-10">
      <div className="flex flex-col gap-4 rounded-lg p-6 bg-gray-500 md:p-12">
        <span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm uppercase">
          {t("items.item1.title")}
        </span>
        <h2 className="font-sans text-heading-lg text-gray-100 ">
          {t("items.item1.description")}
        </h2>
      </div>

      <div className="flex flex-col gap-4 rounded-lg p-6 bg-gray-500 md:p-12">
        <span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm uppercase">
          {t("items.item2.title")}
        </span>
        <h2 className="font-sans text-heading-lg text-gray-100 ">
          {t("items.item2.description")}
        </h2>
      </div>

      <div className="col-span-full flex flex-col gap-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 rounded-lg bg-gray-500 p-6 md:p-12 ">
          <div className="flex flex-col gap-4">
            <span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm uppercase">
              {t("items.item3.title")}
            </span>
            <h2 className="font-sans text-heading-lg text-gray-100 ">
              {t("items.item3.description")}
            </h2>
            <div className="hidden md:block">
              <ButtonSection />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-full max-w-md overflow-hidden ">
              <Image
                src="/feature-section.svg"
                alt="Features"
                width={440}
                height={330}
                className="object-cover w-full"
              />
            </div>

            <ButtonSection hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
