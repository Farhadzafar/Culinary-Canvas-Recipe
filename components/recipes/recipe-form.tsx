"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function RecipeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [image, setImage] = useState<File | null>(null); // State to hold the image file
  const [error, setError] = useState<string | null>(null); // State to hold error messages

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null); // Reset error state

    // Basic validation
    const title = (e.target as any).title.value;
    const description = (e.target as any).description.value;
    const cookTime = (e.target as any).cookTime.value;
    const servings = (e.target as any).servings.value;
    const difficulty = (e.target as any).difficulty.value;
    const ingredients = (e.target as any).ingredients.value;
    const instructions = (e.target as any).instructions.value;

    if (
      !title ||
      !description ||
      !cookTime ||
      !servings ||
      !difficulty ||
      !ingredients ||
      !instructions ||
      !image
    ) {
      setError("All fields are required, including an image upload.");
      setIsSubmitting(false);
      return;
    }

    // Handle form submission logic here
    // For example, you might want to send the data to an API

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && <div className="text-red-500">{error}</div>}{" "}
      {/* Display error message */}
      <div className="space-y-4">
        <div>
          <Label htmlFor="title">Recipe Title</Label>
          <Input id="title" placeholder="Enter recipe title" required />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Brief description of your recipe"
            required
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label htmlFor="cookTime">Cooking Time</Label>
            <Input id="cookTime" placeholder="e.g., 30 mins" required />
          </div>
          <div>
            <Label htmlFor="servings">Servings</Label>
            <Input
              id="servings"
              type="number"
              placeholder="Number of servings"
              required
            />
          </div>
          <div>
            <Label htmlFor="difficulty">Difficulty</Label>
            <Input id="difficulty" placeholder="e.g., Easy" required />
          </div>
        </div>

        <div>
          <Label htmlFor="ingredients">Ingredients</Label>
          <Textarea
            id="ingredients"
            placeholder="Enter ingredients (one per line)"
            required
            rows={6}
          />
        </div>

        <div>
          <Label htmlFor="instructions">Instructions</Label>
          <Textarea
            id="instructions"
            placeholder="Enter cooking instructions (one step per line)"
            required
            rows={8}
          />
        </div>

        <div>
          <Label htmlFor="image">Upload Image</Label>
          <Input
            id="image"
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files) {
                setImage(e.target.files[0]); // Set the selected image file
              }
            }}
            required
          />
        </div>
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Submitting..." : "Submit Recipe"}
      </Button>
    </form>
  );
}
