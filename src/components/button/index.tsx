import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function ButtonSection() {
  return (
    <Button className="rounded-full w-fit" asChild>
      <Link href="/">
        Criar Loja gratis
        <ArrowRight />
      </Link>
    </Button>
  );
}
