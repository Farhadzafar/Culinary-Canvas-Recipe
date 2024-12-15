"use client";

import Link from "next/link";
import { Clock, Users, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { RecipeCardProps } from "./types";

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="object-cover w-full h-full"
        />
      </div>
      <CardHeader>
        <CardTitle>{recipe.title}</CardTitle>
        <CardDescription>{recipe.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {recipe.cookTime}
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            {recipe.servings} servings
          </div>
          <div className="flex items-center">
            <ChefHat className="w-4 h-4 mr-1" />
            {recipe.difficulty}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/recipes/${recipe.id}`} className="w-full">
          <Button className="w-full">
            View Recipe
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}