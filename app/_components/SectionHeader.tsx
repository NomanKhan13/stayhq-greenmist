const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section className="px-6 py-20 md:py-32">
      <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
        {title}
      </h1>
      <p className="text-lg sm:text-xl text-secondary-foreground/90 max-w-2xl text-pretty">
        {description}
      </p>
    </section>
  );
};

export default SectionHeader;
