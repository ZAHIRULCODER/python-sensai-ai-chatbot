import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-[75px] flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/python-logo.png"}
            alt="Python Logo"
            width={200}
            height={70}
            className="h-14 py-1 w-auto object-contain"
          />
        </Link>

        <Link href="/chat">
          <Button size="lg" className="px-8">
            Get Started
          </Button>
        </Link>
      </nav>
    </header>
  );
}
