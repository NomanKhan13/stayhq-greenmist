import Button from "./Button";

const CTABanner = ({ title, btnText }: { title: string; btnText: string }) => {
  return (
    <section className="dark:bg-card/40 bg-card py-20 px-6">
      <div className="mx-auto text-center">
        <p className="font-serif text-2xl sm:text-3xl font-light tracking-tight mb-8 text-balance">
          {title}
        </p>
        <Button link="/properties" variant="filled" isDisabled={false}>
          {btnText}
        </Button>
      </div>
    </section>
  );
};

export default CTABanner;
