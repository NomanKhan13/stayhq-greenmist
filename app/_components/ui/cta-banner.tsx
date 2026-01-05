import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTABanner = ({ title, btnText }: { title: string; btnText: string }) => {
  return (
    <section className="bg-card/40 py-20 px-6">
      <div className="mx-auto text-center">
        <p className="font-serif text-2xl sm:text-3xl font-light tracking-tight mb-8 text-balance">
          {title}
        </p>
        <Button size="lg" className="rounded-none py-6 px-8 text-base" asChild>
          <Link href="/properties">{btnText}</Link>
        </Button>
      </div>
    </section>
  );
};

export default CTABanner;
