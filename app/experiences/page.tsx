import SectionHeader from "../_components/SectionHeader";
import Button from "../_components/ui/Button";

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
            <div
              key={experience.title}
              className="flex flex-col p-8 dark:bg-card/40 bg-card hover:bg-card/60 transition-colors"
            >
              <p className="text-xs uppercase tracking-widest text-foreground-secondary mb-3">
                {experience.category}
              </p>

              <h3 className="text-2xl font-light tracking-tight mb-4">
                {experience.title}
              </h3>
              <p className="text-base text-foreground-secondary leading-relaxed">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="dark:bg-card/40 bg-card py-20 px-6">
        <div className="mx-auto text-center">
          <p className="font-serif text-3xl font-light tracking-tight mb-8 text-balance">
            Ready to Escape
          </p>
          <Button link="/properties" variant="filled" isDisabled={false}>
            Explore Our Properties
          </Button>
        </div>
      </section>
    </main>
  );
}
