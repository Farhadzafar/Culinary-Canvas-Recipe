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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <NutritionItem label="Calories" value={nutritionFacts.calories} unit="" />
        <NutritionItem label="Protein" value={nutritionFacts.protein} unit="g" />
        <NutritionItem label="Carbs" value={nutritionFacts.carbs} unit="g" />
        <NutritionItem label="Fat" value={nutritionFacts.fat} unit="g" />
      </div>
    </div>
  );
}

interface NutritionItemProps {
  label: string;
  value: number;
  unit: string;
}

function NutritionItem({ label, value, unit }: NutritionItemProps) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-medium">
        {value}
        {unit}
      </p>
    </div>
  );
}