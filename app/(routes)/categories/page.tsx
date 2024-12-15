import { CategoryGrid } from "@/components/categories/category-grid";
import { PageHeader } from "@/components/shared/page-header";

export default function CategoriesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <PageHeader 
        title="Recipe Categories" 
        description="Explore recipes by category to find exactly what you're looking for"
      />
      <CategoryGrid />
    </main>
  );
}