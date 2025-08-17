import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/logo.svg" alt="Logo do site" width={116} height={32} />
    </Link>
  );
}
