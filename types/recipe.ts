export interface Recipe {
  id: number;
  title: string;
  description: string;
  cookTime: string;
  servings: number;
  difficulty: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  nutritionFacts: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  tags: string[];
}