interface IngredientsListProps {
  ingredients: string[];
}

export function IngredientsList({ ingredients }: IngredientsListProps) {
  return (
    <ul className="list-disc pl-5 space-y-2">
      {ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
  );
}