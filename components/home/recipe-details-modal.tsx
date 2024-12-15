"use client";

import { Recipe } from "@/types/recipe";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ChefHat, Utensils, ScrollText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface RecipeDetailsModalProps {
  recipe: Recipe;
  isOpen: boolean;
  onClose: () => void;
}

export function RecipeDetailsModal({ recipe, isOpen, onClose }: RecipeDetailsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{recipe.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Hero Image */}
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Quick Info */}
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

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {recipe.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Description */}
          <p className="text-muted-foreground">{recipe.description}</p>

          {/* Tabs */}
          <Tabs defaultValue="ingredients" className="w-full">
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

          {/* Nutrition Facts */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">Nutrition Facts (per serving)</h3>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Calories</p>
                <p className="font-medium">{recipe.nutritionFacts.calories}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Protein</p>
                <p className="font-medium">{recipe.nutritionFacts.protein}g</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Carbs</p>
                <p className="font-medium">{recipe.nutritionFacts.carbs}g</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Fat</p>
                <p className="font-medium">{recipe.nutritionFacts.fat}g</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}