import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Utensils, ScrollText } from "lucide-react";
import { Recipe } from "@/types/recipe";

interface RecipeContentProps {
  recipe: Recipe;
}

export function RecipeContent({ recipe }: RecipeContentProps) {
  return (
    <Tabs defaultValue="ingredients" className="w-full mt-8">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="ingredients" className="flex items-center">
          <Utensils className="w-4 h-4 mr-2" />
          Ingredients
        </TabsTrigger>
        <TabsTrigger value="instructions" className="flex items-center">
          <ScrollText className="w-4 h-4 mr-2" />
          Instructions
        </TabsTrigger>
      </TabsList>

      <TabsContent value="ingredients" className="mt-4">
        <ul className="list-disc pl-5 space-y-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </TabsContent>

      <TabsContent value="instructions" className="mt-4">
        <ol className="list-decimal pl-5 space-y-4">
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </TabsContent>
    </Tabs>
  );
}