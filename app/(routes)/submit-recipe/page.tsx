"use client";

import { RecipeForm } from "@/components/recipes/recipe-form";
import { PageHeader } from "@/components/shared/page-header";

export default function SubmitRecipePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <PageHeader 
        title="Submit a Recipe" 
        description="Share your favorite recipe with our community"
      />
      <RecipeForm />
    </main>
  );
}