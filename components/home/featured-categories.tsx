import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/data/categories";
import Link from "next/link";

export function FeaturedCategories() {
  // Display only the first 3 categories
  const featuredCategories = categories.slice(0, 3);

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Popular Categories</h2>
          <p className="text-muted-foreground">
            Explore our most popular recipe collections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCategories.map((category) => (
            <Link href="/categories" key={category.id}>
              <Card className="group hover:shadow-lg transition-all duration-300">
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/categories">
            <span className="text-primary hover:underline">
              View All Categories →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
