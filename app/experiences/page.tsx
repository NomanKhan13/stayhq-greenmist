import SectionHeader from "../_components/SectionHeader";
import Button from "../_components/ui/Button";
import CTABanner from "../_components/ui/cta-banner";
import InformationCard from "../_components/ui/InformationCard";

const experiences = [
  {
    title: "Mountain Sunrise Meditation",
    description:
      "Begin your day with guided meditation as the sun rises over mountain peaks, creating a moment of perfect stillness.",
    category: "Wellness",
  },
  {
    title: "Tea Garden Walk & Tasting",
    description:
      "Explore terraced gardens with our heritage expert, learning the stories behind each tea variety grown on our estates.",
    category: "Culture",
  },
  {
    title: "Valley Nature Trail",
    description:
      "Guided walks through pristine valleys, discovering native flora and the subtle rhythms of the natural world.",
    category: "Nature",
  },
  {
    title: "Architectural Appreciation Tour",
    description:
      "Understand how each property was designed to harmonize with its landscape through exclusive guided tours.",
    category: "Design",
  },
  {
    title: "Spa & Wellness Retreat",
    description:
      "Bespoke spa treatments using natural ingredients, designed to restore and rejuvenate in serene private settings.",
    category: "Wellness",
  },
  {
    title: "Culinary Forest Experience",
    description:
      "Farm-to-table dining experiences showcasing local, sustainable ingredients prepared by our talented chefs.",
    category: "Culinary",
  },
];

export default function Experiences() {
  return (
    <main>
      <SectionHeader
        title="Curated Experiences"
        description="Thoughtfully designed moments that connect you with nature, culture,
          and inner peace."
      />

      {/* Experiences Grid */}
      <section className="px-6 pb-20 md:pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <InformationCard
              key={experience.title}
              about={experience.category}
              value={experience.title}
              detail={experience.description}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTABanner title="Ready to Escape" btnText="Explore Our Properties" />
    </main>
  );
}
