"use client";

import { useState, useEffect } from "react";
import { Recipe } from "@/types/recipe";
import { SearchInput } from "./search-input";
import { TagFilter } from "./tag-filter";
import { getUniqueTags, filterRecipesBySearchAndTags } from "@/lib/recipe-utils";

interface RecipeFiltersProps {
  recipes: Recipe[];
  onFilterChange: (filteredRecipes: Recipe[]) => void;
}

export function RecipeFilters({ recipes, onFilterChange }: RecipeFiltersProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = getUniqueTags(recipes);

  useEffect(() => {
    const filteredRecipes = filterRecipesBySearchAndTags(
      recipes,
      searchTerm,
      selectedTags
    );
    onFilterChange(filteredRecipes);
  }, [searchTerm, selectedTags, recipes, onFilterChange]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="space-y-4">
      <SearchInput value={searchTerm} onChange={setSearchTerm} />
      <TagFilter
        tags={allTags}
        selectedTags={selectedTags}
        onToggleTag={toggleTag}
      />
    </div>
  );
}