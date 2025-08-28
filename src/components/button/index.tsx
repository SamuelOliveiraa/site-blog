import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

import { useTranslations } from "next-intl";

type ButtonSectionProps = {
  hidden?: boolean;
};

export default function ButtonSection({ hidden }: ButtonSectionProps) {
  const t = useTranslations("ButtonSection");

  return (
    <Button
      className={`${
        hidden ? "w-full md:hidden mt-auto" : "w-fit"
      } rounded-full`}
      asChild
    >
      <Link href="/">
        {t("text")}
        <ArrowRight />
      </Link>
    </Button>
  );
}
