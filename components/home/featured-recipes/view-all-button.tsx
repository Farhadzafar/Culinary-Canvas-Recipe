import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ViewAllButton() {
  return (
    <div className="text-center mt-12">
      <Link href="/recipes">
        <Button variant="outline">Browse All Recipes</Button>
      </Link>
    </div>
  );
}