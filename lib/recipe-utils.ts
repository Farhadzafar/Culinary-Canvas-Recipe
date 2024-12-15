import { Recipe } from "@/types/recipe";

export function filterRecipesBySearchAndTags(
  recipes: Recipe[],
  searchTerm: string,
  selectedTags: string[]
): Recipe[] {
  return recipes.filter((recipe) => {
    const matchesSearch = recipe.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => recipe.tags.includes(tag));
    return matchesSearch && matchesTags;
  });
}

export function getUniqueTags(recipes: Recipe[]): string[] {
  return Array.from(
    new Set(recipes.flatMap((recipe) => recipe.tags))
  ).sort();
}