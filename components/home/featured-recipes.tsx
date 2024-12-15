import { RecipeCard } from "./recipe-card";
import { featuredRecipes } from "@/data/featured-recipes";

export function FeaturedRecipes() {
  // Only show first 3 featured recipes on home page
  const displayedRecipes = featuredRecipes.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Featured Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}