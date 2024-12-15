import { CategoryCard } from "./category-card";
import { CategoryType } from "./types";

interface CategoryGridProps {
  categories: CategoryType[];
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}