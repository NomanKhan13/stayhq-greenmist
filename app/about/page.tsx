import SectionHeader from "../_components/SectionHeader";
import CTABanner from "../_components/ui/cta-banner";
import InformationCard from "../_components/ui/InformationCard";

export default function About() {
  const pillars = [
    {
      value: "Minimal Design",
      detail:
        "Simplicity that lets nature shine. Our spaces feature clean lines and natural materials that celebrate rather than compete with the landscape.",
    },
    {
      value: "Intentional Hospitality",
      detail:
        "Personal service with respect for your solitude. We anticipate needs without intrusion, creating space for reflection and restoration.",
    },
    {
      value: "Sustainable Practice",
      detail:
        "Respectful stewardship of the land. Every decision considers our environmental impact and the preservation of natural habitats.",
    },
  ];

  const credentials = [
    {
      about: "Founded by",
      value: "Hospitality Visionaries",
      detail: "Decades of luxury retreat expertise shaped our philosophy.",
    },
    {
      about: "Designed by",
      value: "Award-Winning Architects",
      detail: "Each property seamlessly blends with its landscape.",
    },
    {
      about: "Guided by",
      value: "Conservation Specialists",
      detail: "Environmental stewardship in every decision.",
    },
  ];

  return (
    <main>
      <SectionHeader
        title="Who We Are"
        description=" GreenMist is a collection of three thoughtfully curated retreats where
          luxury means the freedom to reconnect with yourself and the natural
          world."
      />

      {/* Philosophy Pillars */}
      <section className="px-6 pb-20 md:pb-32">
        <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight mb-6 text-balance">
          Our Philosophy
        </h2>
        <div className="grid md:grid-cols-3 gap-4 md:gap-12">
          {pillars.map((pillar) => (
            <InformationCard
              key={pillar.value}
              value={pillar.value}
              detail={pillar.detail}
            />
          ))}
        </div>
      </section>

      {/* Credentials */}
      <section className="px-6 pb-20 md:pb-32">
        <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight mb-6 text-balance">
          Built on Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-4 md:gap-12">
          {credentials.map((cred) => (
            <InformationCard
              key={cred.about}
              about={cred.about}
              value={cred.value}
              detail={cred.detail}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTABanner
        title="Every detail is considered. Every moment designed for you."
        btnText="Explore Our Properties"
      />
    </main>
  );
}
