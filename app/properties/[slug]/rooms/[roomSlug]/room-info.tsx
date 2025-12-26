import { Check, MoveDown } from "lucide-react";
import Image from "next/image";

import tempImg from "@/public/greenmist-tea-estate-retreat.jpg";
import { Button } from "@/components/ui/button";

type RoomDetail = {
  id: string;
  name: string;
  description: string;
  idealFor: string;
  pricePerNight: number;
  image: string;
  bedType: string;
  amenities: string[];
};

const RoomInfo = ({ room }: { room: RoomDetail }) => {
  return (
    <section className="px-6 pb-12 relative">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Image */}
        <div>
          <h1 className="block sm:hidden font-serif text-3xl md:text-4xl font-light tracking-tight mb-6 text-balance">
            {room.name}
          </h1>
          <div className="relative h-96 md:h-[400px] bg-card/40 overflow-hidden group">
            <Image
              fill
              quality={75}
              placeholder="blur"
              src={tempImg}
              alt={room.name}
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Room Info */}
        <div className="order-1 md:order-2">
          <h1 className="hidden sm:block font-serif text-3xl md:text-4xl font-light tracking-tight mb-4 text-balance">
            {room.name}
          </h1>
          <p className="text text-foreground-secondary mb-8 leading-relaxed text-pretty">
            {room.description}
          </p>

          {/* Key Details */}
          <div className="flex flex-col sm:flex-row justify-between sm:justify-start gap-8 pb-8 border-b border-border/20">
            <div>
              <p className="text-xs uppercase tracking-widest text-foreground mb-2">
                Ideal for
              </p>
              <p className="text-lg">{room.idealFor}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-foreground mb-2">
                From
              </p>
              <p className="font-serif font-light text-3xl text-foreground">
                ${room.pricePerNight}
                <span className="text-foreground-muted text-base">
                  {" "}
                  / night
                </span>
              </p>
            </div>
          </div>

          {/* Amenities */}
          {room.amenities && room.amenities.length > 0 && (
            <div className="pt-6 border-t border-border/20">
              <p className="uppercase tracking-widest text-foreground mb-4">
                Amenities
              </p>
              <div className="space-y-2">
                {room.amenities.map((amenity) => (
                  <p
                    key={amenity}
                    className="text-sm flex gap-2 items-end text-foreground-secondary"
                  >
                    <Check size={16} /> {amenity}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Button className="flex gap-2 items-center absolute bottom-0 right-0 p-6 rounded-full cursor-pointer">
        <MoveDown className="animate-bounce size-6" />
      </Button>
    </section>
  );
};

export default RoomInfo;
