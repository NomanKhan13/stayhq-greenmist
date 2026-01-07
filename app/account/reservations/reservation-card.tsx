import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users } from "lucide-react";

interface Reservation {
  id: string;
  retreat: string;
  startDate: string;
  endDate: string;
  numGuest: number;
  status: "upcoming" | "past";
  bookingDate: string;
}

export function ReservationCard({ reservation }: { reservation: Reservation }) {
  const checkInDate = new Date(reservation.startDate);
  const checkOutDate = new Date(reservation.endDate);
  const nights = Math.ceil(
    (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  const retreatNames: { [key: string]: string } = {
    hill: "Hill Retreat",
    "tea-garden": "Tea Garden Retreat",
    valley: "Valley Retreat",
  };

  return (
    <div className="rounded bg-card p-6 hover:shadow-md transition-shadow duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-serif font-bold text-foreground">
            {reservation.roomType.name}
          </h3>
          <p className="text-sm text-foreground/60">{`Reservation #${reservation.id.slice(
            0,
            10
          )}`}</p>
        </div>
        <Badge
          className={
            reservation.status === "upcoming"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-foreground"
          }
        >
          {reservation.status === "upcoming" ? "Upcoming" : "Past"}
        </Badge>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-start gap-3">
          <Calendar className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-xs text-foreground/60 uppercase tracking-wider">
              Dates
            </p>
            <p className="text-sm font-medium text-foreground">
              {checkInDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}{" "}
              -{" "}
              {checkOutDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </p>
            <p className="text-xs text-foreground/50">{nights} nights</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Users className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-xs text-foreground/60 uppercase tracking-wider">
              Guests
            </p>
            <p className="text-sm font-medium text-foreground">
              {reservation.numGuest} guest{reservation.numGuest > 1 ? "s" : ""}
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
          View Details
        </Button>
        {reservation.status === "upcoming" && (
          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
            Modify
          </Button>
        )}
      </div>
    </div>
  );
}
