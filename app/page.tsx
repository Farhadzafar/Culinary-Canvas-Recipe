import { HeroSection } from "@/components/home/hero-section";
import { FeaturedRecipes } from "@/components/home/featured-recipes";
import { FeaturedCategories } from "@/components/home/featured-categories";
import { Testimonials } from "@/components/home/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FeaturedCategories />
      <FeaturedRecipes />
      <Testimonials />
    </main>
  );
}