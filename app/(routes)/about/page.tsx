import { PageHeader } from "@/components/shared/page-header";
import { TeamSection } from "@/components/about/team-section";
import { ContactSection } from "@/components/about/contact-section";

export default function AboutPage() {
  return (
    <main>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <PageHeader
          title="About Culinary Canvas"
          description="Our mission is to bring people together through the joy of cooking"
        />

        <div className="prose prose-lg dark:prose-invert mt-8">
          <p>
            Welcome to Culinary Canvas, where passion for cooking meets the art
            of sharing. Our platform is designed to inspire both novice cooks
            and seasoned chefs to explore new flavors and techniques.
          </p>

          <h3>Our Story</h3>
          <p>
            Founded by a group of food enthusiasts, Culinary Canvas began as a
            small collection of family recipes. Today, it has grown into a
            vibrant community of food lovers sharing their culinary creations
            and stories.
          </p>

          <h3>Our Mission</h3>
          <p>
            We believe that cooking is more than just preparing meals - it's
            about creativity, tradition, and bringing people together. Our
            mission is to make cooking accessible and enjoyable for everyone,
            while preserving and celebrating diverse culinary traditions.
          </p>
        </div>
      </div>

      <TeamSection />
      <ContactSection />
    </main>
  );
}
