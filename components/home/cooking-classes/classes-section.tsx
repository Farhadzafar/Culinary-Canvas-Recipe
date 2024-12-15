import { ClassCard } from "./class-card";

const classes = [
  {
    title: "Italian Pasta Making",
    description: "Learn the art of making fresh pasta from scratch with traditional techniques.",
    image: "https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&q=80&w=800",
    date: "Every Saturday",
    duration: "3 hours",
    spots: 8,
    price: "$89"
  },
  {
    title: "Asian Street Food",
    description: "Master the flavors and techniques of popular Asian street food dishes.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    date: "Every Sunday",
    duration: "4 hours",
    spots: 10,
    price: "$99"
  },
  {
    title: "French Pastry Basics",
    description: "Discover the secrets of creating delicate French pastries and desserts.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
    date: "Every Friday",
    duration: "3 hours",
    spots: 6,
    price: "$109"
  }
];

export function CookingClassesSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Live Cooking Classes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our expert chefs for hands-on cooking classes and elevate your culinary skills
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem) => (
            <ClassCard key={classItem.title} {...classItem} />
          ))}
        </div>
      </div>
    </section>
  );
}