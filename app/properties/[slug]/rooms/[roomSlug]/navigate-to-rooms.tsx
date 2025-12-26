import { MoveLeft } from "lucide-react";
import Link from "next/link";

const NavigateToRooms = ({ propertySlug }: { propertySlug: string }) => {
  return (
    <section className="px-6 pb-6">
      {/* Mobile */}
      <div className="flex">
        <Link
          href={`/properties/${propertySlug}/rooms`}
          className="text-sm flex items-center justify-start gap-2 text-foreground-muted hover:text-foreground transition-colors"
        >
          <MoveLeft size={18} /> <span>Back to rooms</span>
        </Link>
      </div>
    </section>
  );
};

export default NavigateToRooms;
