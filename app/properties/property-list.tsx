import Image from "next/image";
import { SUPABASE_IMAGE_BASE_URL } from "@/constants";
import clsx from "clsx";
import PropertyAndRoomWrapper from "../_components/ui/property-and-room-wrapper";
import { getProperties } from "../_lib/rooms";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type PropertyProps = {
  name: string;
  images: string[];
  location: string;
  description: string;
  highlights: string[];
  slug: string;
};

const PropertyGrid = async () => {
  const properties = await getProperties();
  return (
    <section className="px-6 pb-20 md:pb-32">
      <div className="grid gap-48">
        {properties.map((property: PropertyProps, idx: number) => (
          <PropertyAndRoomWrapper key={property.name}>
            <div>
              <div
                className={`relative aspect-square w-full sm:h-96 overflow-hidden ${
                  idx % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                <Image
                  fill
                  // placeholder="blur"
                  quality={75}
                  src={`${SUPABASE_IMAGE_BASE_URL}${property.images[0]}`}
                  alt={property.name}
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className={clsx("grid", idx % 2 !== 0 ? "md:order-2" : "")}>
              <p className="text-xs text-muted-foreground mb-2 uppercase tracking-widest">
                {property.location}
              </p>
              <h2 className="hidden sm:block font-serif text-2xl lg:text-3xl font-light tracking-tight mb-6 text-balance">
                {property.name}
              </h2>
              <p className="text-lg text-secondary-foreground/90 mb-8 text-pretty leading-relaxed max-w-prose">
                {property.description}
              </p>

              <div className="mb-8">
                <p className="text-xs uppercase tracking-widest mb-3 text-foreground">
                  {`What's special?`}
                </p>
                <div className="flex flex-wrap gap-3">
                  {property.highlights.map((feature: string) => (
                    <span
                      key={feature}
                      className="p-2 border-b border-border text-sm hover:bg-card transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <Button
                size="lg"
                className="rounded-none py-6 px-8 text-base"
                asChild
              >
                <Link href={`/properties/${property.slug}/rooms`}>
                  View Stays & Rates
                </Link>
              </Button>
            </div>
          </PropertyAndRoomWrapper>
        ))}
      </div>
    </section>
  );
};

export default PropertyGrid;
