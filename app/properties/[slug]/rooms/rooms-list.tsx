import aboutHill from "@/public/greenmist-hill-retreat.jpg";
import Image from "next/image";
import Button from "@/app/_components/ui/Button";
import PropertyAndRoomWrapper from "@/app/_components/ui/property-and-room-wrapper";
import { getRoomsByProperty } from "@/app/_lib/rooms";
// import { PROPERTY_OPTIONS } from "@/constants";
// import RoomFilter from "./room-filter";

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
              <div className="flex items-start justify-between gap-4 mb-6">
                <h3 className="font-serif text-2xl lg:text-3xl font-light tracking-tight text-balance">
                  {room.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-lg truncate text-foreground-secondary mb-8 leading-relaxed text-pretty">
                {room.description}
              </p>

              {/* Room Details */}
              <div className="flex justify-between sm:justify-start gap-12 pb-8 border-b border-border/20">
                <div>
                  <p className="text-xs uppercase tracking-widest text-foreground mb-2">
                    Ideal for
                  </p>
                  <p className="font-serif font-light tracking-wider text-lg">
                    {room.idealFor}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-foreground mb-2">
                    Nightly Rate
                  </p>
                  <p className="font-serif font-light text-3xl text-foreground">
                    ${room.pricePerNight}
                  </p>
                </div>
              </div>

              {/* CTA */}
              {/* add link later */}
              <Button
                variant="filled"
                link={`/properties/${propertySlug}/rooms/${room.slug}`}
                isDisabled={false}
              >
                View This Stay
              </Button>
            </div>
          </PropertyAndRoomWrapper>
        ))}
      </div>
    </section>
  );
}

export default RoomsList;
