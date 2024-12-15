import { RecipeGrid } from "@/components/recipes/recipe-grid";
import { PageHeader } from "@/components/shared/page-header";
import { featuredRecipes } from "@/data/featured-recipes";

export default function RecipesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <PageHeader 
        title="All Recipes" 
        description="Browse our collection of delicious recipes from around the world"
      />
      <RecipeGrid initialRecipes={featuredRecipes} />
    </main>
  );
}