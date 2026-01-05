import aboutHill from "@/public/greenmist-hill-retreat.jpg";
import Image from "next/image";
import PropertyAndRoomWrapper from "@/app/_components/ui/property-and-room-wrapper";
import { getRoomsByProperty } from "@/app/_lib/rooms";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function RoomsList({
  propertyId,
  propertySlug,
}: {
  propertyId: string;
  propertySlug: string;
}) {
  const rooms = await getRoomsByProperty(propertyId);
  console.log(rooms);

  return (
    <section className="lg:px-6 pb-20 md:pb-32 grid">
      {/* <RoomFilter /> */}
      <div className="grid gap-16 md:gap-24">
        {rooms.map((room, index) => (
          <PropertyAndRoomWrapper key={room.id}>
            {/* Image */}
            <div
              className={`relative h-80 lg:h-96 bg-card/40 overflow-hidden group ${
                index % 2 !== 0 ? "md:order-2" : ""
              }`}
            >
              <Image
                src={aboutHill}
                fill
                quality={75}
                placeholder="blur"
                alt={room.name}
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Content */}
            <div
              className={`flex flex-col ${index % 2 !== 0 ? "md:order-1" : ""}`}
            >
              {/* Header */}
              <h3 className="font-serif mb-6 text-2xl lg:text-3xl font-light tracking-tight text-balance">
                {room.name}
              </h3>

              {/* Description */}
              <p className="text-lg truncate text-secondary-foreground/90 mb-8 leading-relaxed text-pretty max-w-prose">
                {room.description}
              </p>

              <div className="flex flex-col sm:flex-row justify-between sm:justify-start gap-8 pb-8 border-b border-border/20">
                <div>
                  <p className="text-xs uppercase tracking-widest text-secondary-foreground/90 mb-2">
                    Ideal for
                  </p>
                  <p className="font-medium">{room.idealFor}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-secondary-foreground/90 mb-2">
                    From
                  </p>
                  <p className="font-serif font-light text-2xl text-foreground">
                    ${room.pricePerNight}
                    <span className="text-secondary-foreground/90 text-base">
                      {" "}
                      / night
                    </span>
                  </p>
                </div>
              </div>

              <Button
                size="lg"
                className="rounded-none py-6 px-8 text-base"
                asChild
              >
                <Link href={`/properties/${propertySlug}/rooms/${room.slug}`}>
                  View This Stay
                </Link>
              </Button>
            </div>
          </PropertyAndRoomWrapper>
        ))}
      </div>
    </section>
  );
}

export default RoomsList;
