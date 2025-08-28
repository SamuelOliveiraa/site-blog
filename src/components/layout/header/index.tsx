import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import ActiveLink from "../../active-link";
import Logo from "../../logo";
import { Button } from "../../ui/button";

import LanguageSwitch from "@/components/language-switch";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <header className="bg-gray-500 fixed top-0 z-50 w-full border-b border-white/10 backdrop-blur ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden sm:flex items-center gap-6">
            <ActiveLink href={"/"}>{t("headerLink1")}</ActiveLink>
            <ActiveLink href={"/blog"}>{t("headerLink2")}</ActiveLink>

            <LanguageSwitch />

            <Button variant="secondary" asChild>
              <Link href="/">{t("headerButton")}</Link>
            </Button>
          </nav>

          <div className="block sm:hidden">
            <Sheet>
              <nav className="flex items-center gap-6">
                <SheetTrigger>
                  <div className="bg-gray-400 rounded-full p-2">
                    <Menu className="text-gray-100" />
                  </div>
                </SheetTrigger>
              </nav>

              <SheetContent className="w-[200px] flex sm:hidden sm:invisible bg-gray-700 border-none text-gray-100 justify-center items-center">
                <div className="flex flex-col justify-center gap-10  items-center h-full sm:hidden">
                  <div className="flex flex-col gap-4 items-center ">
                    <SheetClose className="items-center text-xl" asChild>
                      <ActiveLink href={"/"}>{t("headerLink1")}</ActiveLink>
                    </SheetClose>

                    <SheetClose className="items-center text-xl" asChild>
                      <ActiveLink href={"/blog"}>{t("headerLink2")}</ActiveLink>
                    </SheetClose>

                    <SheetClose className="items-center text-xl" asChild>
                      <LanguageSwitch />
                    </SheetClose>
                  </div>

                  <SheetClose asChild>
                    <Button variant="secondary" asChild>
                      <Link href="/">{t("headerButton")}</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
