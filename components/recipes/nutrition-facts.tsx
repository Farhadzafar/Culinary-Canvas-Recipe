interface NutritionFactsProps {
  nutritionFacts: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

export function NutritionFacts({ nutritionFacts }: NutritionFactsProps) {
  return (
    <div className="border rounded-lg p-4 mt-8">
      <h3 className="font-semibold mb-3">Nutrition Facts (per serving)</h3>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <p className="text-sm text-muted-foreground">Calories</p>
          <p className="font-medium">{nutritionFacts.calories}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Protein</p>
          <p className="font-medium">{nutritionFacts.protein}g</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Carbs</p>
          <p className="font-medium">{nutritionFacts.carbs}g</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Fat</p>
          <p className="font-medium">{nutritionFacts.fat}g</p>
        </div>
      </div>
    </div>
  );
}