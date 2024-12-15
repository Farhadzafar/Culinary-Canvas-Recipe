import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NavLinksProps {
  className?: string;
}

export function NavLinks({ className }: NavLinksProps) {
  return (
    <div className={className}>
      <Link href="/recipes">
        <Button variant="ghost">Recipes</Button>
      </Link>
      <Link href="/categories">
        <Button variant="ghost">Categories</Button>
      </Link>
      <Link href="/about">
        <Button variant="ghost">About</Button>
      </Link>
      <Link href="/submit-recipe">
        <Button>Submit Recipe</Button>
      </Link>
    </div>
  );
}
