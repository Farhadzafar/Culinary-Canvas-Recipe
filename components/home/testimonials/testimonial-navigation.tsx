import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TestimonialNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
}

export function TestimonialNavigation({ onPrevious, onNext }: TestimonialNavigationProps) {
  return (
    <div className="flex justify-center gap-2 mt-6">
      <Button
        variant="outline"
        size="icon"
        onClick={onPrevious}
        className="rounded-full"
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={onNext}
        className="rounded-full"
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}