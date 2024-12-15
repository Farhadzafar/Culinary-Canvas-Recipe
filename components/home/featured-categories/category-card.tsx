import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { CategoryType } from "./types";

interface CategoryCardProps {
  category: CategoryType;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href="/categories">
      <Card className="group hover:shadow-lg transition-all duration-300">
        <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
          <img
            src={category.image}
            alt={category.name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
          <p className="text-muted-foreground">{category.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}