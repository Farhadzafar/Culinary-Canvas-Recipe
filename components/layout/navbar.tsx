import Link from "next/link";
import { ChefHat } from "lucide-react";
import { MobileNav } from "@/components/layout/mobile-nav";
import { NavLinks } from "@/components/layout/nav-links";

export function Navbar() {
  return (
    <nav className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <MobileNav />
            <Link href="/" className="flex items-center">
              <ChefHat className="w-6 h-6 mr-2" />
              <span className="text-xl font-bold">Culinary Canvas</span>
            </Link>
          </div>
          <NavLinks className="hidden md:flex items-center space-x-4" />
        </div>
      </div>
    </nav>
  );
}
