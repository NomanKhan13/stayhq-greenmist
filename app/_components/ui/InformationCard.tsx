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
    <div className="flex flex-col p-8 dark:bg-card/40 bg-card dark:hover:bg-card/60 hover:bg-background-alt transition-colors">
      {about && (
        <p className="text-xs uppercase tracking-widest text-foreground-secondary mb-2">
          {about}
        </p>
      )}
      <h3 className="text-xl sm:text-2xl tracking-tight mb-4">{value}</h3>
      <p className="text-base text-foreground-secondary leading-relaxed">
        {detail}
      </p>
    </div>
  );
};

export default InformationCard;
