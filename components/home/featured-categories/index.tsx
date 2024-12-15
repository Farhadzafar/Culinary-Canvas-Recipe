import { CategoryGrid } from "./category-grid";
import { ViewAllButton } from "./view-all-button";
import { categories } from "@/data/categories";

export function FeaturedCategories() {
  // Display only the first 3 categories
  const featuredCategories = categories.slice(0, 3);

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Popular Categories</h2>
          <p className="text-muted-foreground">Explore our most popular recipe collections</p>
        </div>

        <CategoryGrid categories={featuredCategories} />
        <ViewAllButton />
      </div>
    </section>
  );
}