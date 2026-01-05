"use client";

import { Calendar } from "@/components/ui/calendar";
import { useReservation } from "@/app/_components/reservation-context";
import useMediaQuery from "@/app/_components/use-media-query";

export default function BookingDatePicker() {
  const { dateRange, setDateRange } = useReservation();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="flex min-w-0 flex-col gap-2 ">
      <Calendar
        mode="range"
        showOutsideDays={false}
        defaultMonth={dateRange?.from}
        selected={dateRange}
        onSelect={setDateRange}
        numberOfMonths={isDesktop ? 2 : 1}
        min={2}
        max={20}
        className="border border-border/50 bg-card/40 hover:bg-card/60 w-full max-w-[500px]"
        classNames={{
          day_range_start:
            "bg-primary text-primary-foreground hover:bg-primary",
          day_range_end: "bg-primary text-primary-foreground hover:bg-primary",
          day_range_middle: "bg-accent/60 text-foreground",
          day_selected: "bg-primary text-primary-foreground",
          day_today: "text-primary font-semibold",
        }}
      />
    </div>
  );
}
