import { Award, Heart, Users } from "lucide-react";

export function MissionSection() {
  return (
    <div className="py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">Our Mission</h3>
          <p className="text-muted-foreground">
            To inspire and empower people to discover the joy of cooking through
            accessible, high-quality recipes and a supportive community.
          </p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
            <Users className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">Our Community</h3>
          <p className="text-muted-foreground">
            A diverse, global network of food enthusiasts sharing their passion
            for cooking and learning from each other.
          </p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
            <Award className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">Our Values</h3>
          <p className="text-muted-foreground">
            Quality, authenticity, and inclusivity in every recipe and
            interaction within our community.
          </p>
        </div>
      </div>
    </div>
  );
}
