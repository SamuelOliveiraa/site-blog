import { Button } from "@/components/ui/button";
import { TriangleAlert } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-gray-100 my-32 flex flex-col items-center justify-center gap-4">
      <TriangleAlert size={50} />
      <h1>Página não localizada</h1>
      <p className="text-balance text-center">
        Ops! A página que você está procurando não existe ou está em
        desenvolvimento.
      </p>

      <Button variant="outline">
        <Link href={"/"}>Voltar para o Inicio</Link>
      </Button>
    </div>
  );
}
