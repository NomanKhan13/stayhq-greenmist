"use client";
import BookingDatePicker from "@/components/booking-calender";
import { useReservation } from "../../reservation-context";

const DateSelector = ({}) => {
  const { calculateNights } = useReservation();
  const isAvailable = Boolean(calculateNights());
  console.log(isAvailable);

  return (
    <div>
      <h2 className="font-serif text-3xl font-light tracking-tight mb-8">
        Choose Your Dates
      </h2>

      <div className="flex gap-6 items-start">
        <BookingDatePicker />

        {/* Availability Status */}
        {/* {isAvailable !== null && (
          <div className="flex items-center gap-3 pt-4 pb-4 border-b border-border/20">
            <div
              className={`w-2 h-2 rounded-full animate-ping ${
                isAvailable ? "bg-primary" : "bg-destructive"
              }`}
            ></div>
            <span className="text-sm">
              {isAvailable
                ? "Select dates to "
                : "Not available for these dates"}
            </span>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default DateSelector;
