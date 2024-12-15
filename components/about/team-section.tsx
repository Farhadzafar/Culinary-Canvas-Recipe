import { Card, CardContent } from "@/components/ui/card";
import { Github, Twitter, Linkedin } from "lucide-react";

const team = [
  {
    name: "Emily Chen",
    role: "Founder & Head Chef",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    bio: "With 15 years of culinary experience, Emily founded Culinary Canvas to share her passion for cooking.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Marcus Rodriguez",
    role: "Recipe Developer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    bio: "A graduate of Le Cordon Bleu, Marcus specializes in fusion cuisine and modern cooking techniques.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Sarah Johnson",
    role: "Food Photographer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    bio: "Sarah brings recipes to life through her stunning photography and food styling expertise.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
];

export function TeamSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card key={member.name} className="overflow-hidden">
              <div className="aspect-square relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary mb-3">{member.role}</p>
                <p className="text-muted-foreground mb-4">{member.bio}</p>

                <div className="flex gap-4">
                  <a
                    href={member.social.twitter}
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.github}
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
