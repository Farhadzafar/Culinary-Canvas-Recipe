import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TestimonialType } from "./types";

interface TestimonialCardProps {
  testimonial: TestimonialType;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="border-none bg-background shadow-lg max-w-3xl mx-auto">
      <CardContent className="p-8">
        <Quote className="w-12 h-12 text-primary/20 mb-4" />
        <p className="text-lg mb-6">{testimonial.content}</p>
        
        <div className="flex items-center gap-4">
          <img
            src={testimonial.image}
            alt={testimonial.author}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{testimonial.author}</p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}