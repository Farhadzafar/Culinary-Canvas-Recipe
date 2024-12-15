import { Recipe } from "@/types/recipe";

export const featuredRecipes: Recipe[] = [
  {
    id: 1,
    title: "Creamy Garlic Pasta",
    description: "A rich and creamy pasta dish with roasted garlic and fresh herbs",
    cookTime: "25 mins",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=800",
    ingredients: [
      "1 lb fettuccine pasta",
      "6 cloves garlic, minced",
      "2 cups heavy cream",
      "1/2 cup butter",
      "1 cup grated Parmesan cheese",
      "Fresh parsley for garnish",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Bring a large pot of salted water to boil and cook pasta according to package instructions.",
      "In a large skillet, melt butter over medium heat. Add minced garlic and sauté until fragrant.",
      "Pour in heavy cream and bring to a simmer. Cook for 5 minutes until slightly thickened.",
      "Add Parmesan cheese and stir until melted and smooth.",
      "Drain pasta and add to the sauce, tossing to coat evenly.",
      "Season with salt and pepper to taste.",
      "Garnish with fresh parsley and serve hot."
    ],
    nutritionFacts: {
      calories: 650,
      protein: 18,
      carbs: 45,
      fat: 28
    },
    tags: ["pasta", "italian", "vegetarian", "dinner"]
  },
  {
    id: 2,
    title: "Mediterranean Quinoa Bowl",
    description: "Healthy bowl with quinoa, fresh vegetables, and feta cheese",
    cookTime: "30 mins",
    servings: 3,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    ingredients: [
      "1 cup quinoa",
      "2 cups vegetable broth",
      "1 cucumber, diced",
      "2 tomatoes, diced",
      "1/2 red onion, finely chopped",
      "1 cup kalamata olives",
      "200g feta cheese",
      "Extra virgin olive oil",
      "Lemon juice",
      "Fresh herbs (mint, parsley)"
    ],
    instructions: [
      "Rinse quinoa thoroughly and cook in vegetable broth according to package instructions.",
      "While quinoa cooks, prepare all vegetables and herbs.",
      "Let quinoa cool to room temperature.",
      "Combine quinoa with diced vegetables and olives.",
      "Crumble feta cheese over the top.",
      "Drizzle with olive oil and lemon juice.",
      "Season to taste and garnish with fresh herbs."
    ],
    nutritionFacts: {
      calories: 420,
      protein: 15,
      carbs: 35,
      fat: 18
    },
    tags: ["healthy", "vegetarian", "mediterranean", "lunch"]
  },
  {
    id: 3,
    title: "Grilled Salmon",
    description: "Fresh salmon with lemon herb butter and seasonal vegetables",
    cookTime: "20 mins",
    servings: 2,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
    ingredients: [
      "2 salmon fillets (6 oz each)",
      "2 tbsp butter",
      "2 cloves garlic, minced",
      "1 lemon",
      "Fresh dill and parsley",
      "Asparagus spears",
      "Cherry tomatoes",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat grill to medium-high heat.",
      "Mix softened butter with minced garlic, lemon zest, and chopped herbs.",
      "Season salmon fillets with salt and pepper.",
      "Grill salmon for 4-5 minutes per side.",
      "Grill asparagus and tomatoes until tender.",
      "Top salmon with herb butter and serve with grilled vegetables.",
      "Garnish with lemon wedges and fresh herbs."
    ],
    nutritionFacts: {
      calories: 380,
      protein: 34,
      carbs: 8,
      fat: 22
    },
    tags: ["seafood", "healthy", "dinner", "gluten-free"]
  }
];