"use client";

import { useState } from "react";
import { TestimonialCard } from "./testimonial-card";
import { TestimonialNavigation } from "./testimonial-navigation";
import { testimonialData } from "./testimonial-data";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);
  };

  return (
    <section className="bg-muted py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Community Says</h2>
        
        <div className="relative">
          <TestimonialCard testimonial={testimonialData[currentIndex]} />
          <TestimonialNavigation 
            onPrevious={prevTestimonial}
            onNext={nextTestimonial}
          />
        </div>
      </div>
    </section>
  );
}