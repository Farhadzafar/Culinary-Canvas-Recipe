import { PageHeader } from "@/components/shared/page-header";
import { MissionSection } from "@/components/about/mission-section";
import { TeamMemberCard } from "@/components/about/team-member-card";

const teamMembers = [
  {
    name: "Alex Thompson",
    role: "Founder & Head Chef",
    bio: "Professional chef with 15 years of experience in Michelin-starred restaurants.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    name: "Maria Garcia",
    role: "Recipe Developer",
    bio: "Culinary arts graduate passionate about creating accessible recipes for home cooks.",
    image:
      "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80&w=400",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "David Kim",
    role: "Food Photographer",
    bio: "Award-winning photographer specializing in food and lifestyle photography.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <PageHeader
        title="About Culinary Canvas"
        description="Our mission is to bring people together through the joy of cooking"
      />

      <div className="prose prose-lg dark:prose-invert mt-8">
        <p>
          Welcome to Culinary Canvas, where passion for cooking meets the art of
          sharing. Our platform is designed to inspire both novice cooks and
          seasoned chefs to explore new flavors and techniques.
        </p>
      </div>

      <MissionSection />

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </section>
    </main>
  );
}
