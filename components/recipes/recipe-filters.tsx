"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Recipe } from "@/types/recipe";

interface RecipeFiltersProps {
  recipes: Recipe[];
  onFilterChange: (filteredRecipes: Recipe[]) => void;
}

export function RecipeFilters({ recipes, onFilterChange }: RecipeFiltersProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get unique tags from all recipes
  const allTags = Array.from(
    new Set(recipes.flatMap((recipe) => recipe.tags))
  ).sort();

  const filterRecipes = () => {
    return recipes.filter((recipe) => {
      const matchesSearch = recipe.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => recipe.tags.includes(tag));
      return matchesSearch && matchesTags;
    });
  };

  useEffect(() => {
    const filteredRecipes = filterRecipes();
    onFilterChange(filteredRecipes);
  }, [searchTerm, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="space-y-4">
      <Input
        type="search"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-md"
      />
      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <Badge
            key={tag}
            variant={selectedTags.includes(tag) ? "default" : "secondary"}
            className="cursor-pointer"
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}