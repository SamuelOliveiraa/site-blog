import { HeartHandshake, PaintbrushVertical, Store } from "lucide-react";
import { useTranslations } from "next-intl";

export default function SupportSection() {
  const t = useTranslations("SupportSection");
  return (
    <section className="relative pb-8 py-10 bg-gradient-to-r from-gray-500/80 to-gray-700/10 ">
      <div className="absolute inset-0 hidden md:block bg-[url('/background-features.svg')] bg-cover bg-center bg-no-repeat opacity-90" />

      <div className="container flex flex-col items-center gap-12 relative">
        <h2 className="text-balance text-center text-heading-xl text-gray-100 font-sans">
          {t("title")}
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-300 mb-4 ">
              <PaintbrushVertical className="h-6 w-4 text-white" />
            </div>
            <strong className="text-heading-sm text-gray-100">
              {t("cards.card1.title")}
            </strong>
            <p className="text-body-sm text-gray-200">
              {t("cards.card1.description")}
            </p>
          </div>

          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-cyan-300">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-200 mb-4 ">
              <Store className="h-6 w-4 text-white" />
            </div>
            <strong className="text-heading-sm text-gray-100">
              {t("cards.card2.title")}
            </strong>
            <p className="text-body-sm text-gray-200">
              {t("cards.card2.description")}
            </p>
          </div>

          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-300 mb-4 ">
              <HeartHandshake className="h-6 w-4 text-white" />
            </div>
            <strong className="text-heading-sm text-gray-100">
              {t("cards.card3.title")}
            </strong>
            <p className="text-body-sm text-gray-200">
              {t("cards.card3.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
