import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl font-bold mb-4">Recipe Not Found</h2>
      <p className="text-muted-foreground mb-8">
        Sorry, we couldn't find the recipe you're looking for.
      </p>
      <Link href="/recipes">
        <Button>Browse All Recipes</Button>
      </Link>
    </div>
  );
}