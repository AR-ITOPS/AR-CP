import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/artour-hitam.png";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SiteFooter() {
  return (
    <>
      <footer className="border-t">
        <div className="container max-w-6xl py-6 bg-white/50 backdrop-blur-sm">
          <section className="flex items-center justify-between max-md:flex-col max-md:gap-4">
            <Link href="/">
              <Image src={logo} alt="Layers Logo" className="h-10 w-auto " />
            </Link>
            <nav className="flex items-center gap-6">
              <p className="cursor-pointer font-medium text-muted-foreground text-sm transition duration-300 hover:text-foreground">
                Contact
              </p>
              <p className="cursor-pointer font-medium text-muted-foreground text-sm transition duration-300 hover:text-foreground">
                Privacy
              </p>
              <p className="cursor-pointer font-medium text-muted-foreground text-sm transition duration-300 hover:text-foreground">
                Terms & Conditions
              </p>
            </nav>
          </section>
        </div>
      </footer>

    </>
  );
}
