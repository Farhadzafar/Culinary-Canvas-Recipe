import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { categories } from "@/data/categories";

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Card key={category.id} className="hover:shadow-lg transition-shadow">
          <div className="aspect-video relative">
            <img
              src={category.image}
              alt={category.name}
              className="object-cover w-full h-full rounded-t-lg"
            />
          </div>
          <CardHeader>
            <CardTitle>{category.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{category.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}