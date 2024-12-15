"use client";

import { useState } from "react";
import { Recipe } from "@/types/recipe";
import { RecipeList } from "./recipe-list";
import { RecipeFilters } from "./filters/recipe-filters";

interface RecipeGridProps {
  initialRecipes: Recipe[];
}

export function RecipeGrid({ initialRecipes }: RecipeGridProps) {
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(initialRecipes);

  return (
    <div className="space-y-6">
      <RecipeFilters 
        recipes={initialRecipes} 
        onFilterChange={setFilteredRecipes} 
      />
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
}