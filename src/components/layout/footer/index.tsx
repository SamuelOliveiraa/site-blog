import { useTranslations } from "next-intl";
import Link from "next/link";
import Logo from "../../logo";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-gray-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex md:flex-row justify-between gap-8 py-8">
          <Logo />
          <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-blue-100">
            <Link href="/" className="hover:text-blue-200">
              {t("footerText1")}
            </Link>
            <Link
              href="/"
              className="hover:text-blue-200"
            >
              {t("footerText2")}
            </Link>
            <Link href="/" className="hover:text-blue-200">
              Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
