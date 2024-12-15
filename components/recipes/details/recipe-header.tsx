import { Clock, Users, ChefHat } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Recipe } from "@/types/recipe";

interface RecipeHeaderProps {
  recipe: Recipe;
}

export function RecipeHeader({ recipe }: RecipeHeaderProps) {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">{recipe.title}</h1>
      
      <div className="aspect-video relative rounded-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          <span className="text-sm">{recipe.cookTime}</span>
        </div>
        <div className="flex items-center">
          <Users className="w-4 h-4 mr-1" />
          <span className="text-sm">{recipe.servings} servings</span>
        </div>
        <div className="flex items-center">
          <ChefHat className="w-4 h-4 mr-1" />
          <span className="text-sm">{recipe.difficulty}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {recipe.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      <p className="text-lg text-muted-foreground">{recipe.description}</p>
    </div>
  );
}