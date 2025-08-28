import ButtonSection from "@/components/button";
import { Store } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CallToAction() {
  const t = useTranslations("CallToAction");
  return (
    <section className="py-24 mt-10 bg-gradient-to-b from-cyan-950/20 to-gray-700 relative">
      <div className="absolute inset-0 bg-[url('/background-footer.svg')] bg-cover bg-center bg-no-repeat opacity-90" />

      <div className="w-16 h-16 bg-cyan-300 rounded-full flex justify-center items-center absolute -top-6 right-1/2 translate-x-1/2 ">
        <Store className="w-8 h-8 text-cyan-100" />
      </div>

      <div className="container relative">
        <div className="container flex flex-col items-center gap-6 text-center ">
          <h2 className="text-gray-100 text-center text-heading-xl text-balance max-w-xl">
            {t("title")}
          </h2>
          <ButtonSection />
        </div>
      </div>
    </section>
  );
}
