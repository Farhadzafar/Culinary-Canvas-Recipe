import { RecipeGrid } from "./recipe-grid";
import { ViewAllButton } from "./view-all-button";
import { featuredRecipes } from "@/data/featured-recipes";

export function FeaturedRecipes() {
  // Display only first 3 recipes on home page
  const displayedRecipes = featuredRecipes.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Featured Recipes</h2>
      <RecipeGrid recipes={displayedRecipes} />
      <ViewAllButton />
    </section>
  );
}