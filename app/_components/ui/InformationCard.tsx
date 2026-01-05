const InformationCard = ({
  about,
  value,
  detail,
}: {
  about?: string;
  value: string;
  detail: string;
}) => {
  return (
    <div className="flex flex-col p-8 bg-card/40 hover:bg-card/60 transition-colors">
      {about && (
        <p className="text-xs uppercase tracking-widest text-foreground-secondary mb-2">
          {about}
        </p>
      )}
      <h3 className="text-xl sm:text-2xl tracking-tight mb-4">{value}</h3>
      <p className="text-base text-secondary-foreground/95 leading-relaxed">
        {detail}
      </p>
    </div>
  );
};

export default InformationCard;
