import { notFound } from "next/navigation";
import { featuredRecipes } from "@/data/featured-recipes";
import { RecipeHeader } from "@/components/recipes/details/recipe-header";
import { RecipeContent } from "@/components/recipes/details/recipe-content";
import { NutritionFacts } from "@/components/recipes/details/nutrition-facts";

interface RecipePageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return featuredRecipes.map((recipe) => ({
    id: recipe.id.toString(),
  }));
}

export default function RecipePage({ params }: RecipePageProps) {
  const recipe = featuredRecipes.find(r => r.id === Number(params.id));

  if (!recipe) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <RecipeHeader recipe={recipe} />
      <RecipeContent recipe={recipe} />
      <NutritionFacts nutritionFacts={recipe.nutritionFacts} />
    </main>
  );
}