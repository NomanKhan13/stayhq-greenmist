"use client";
import BookingDatePicker from "@/components/booking-date-picker";
import { useState } from "react";

const DateSelector = ({}) => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [numberOfNights, setNumberOfNights] = useState(1);

  const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    setCheckInDate(date);
    if (checkOutDate && new Date(date) >= new Date(checkOutDate)) {
      setCheckOutDate("");
    }
    checkAvailability(date, checkOutDate);
  };

  const handleCheckOutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    setCheckOutDate(date);
    checkAvailability(checkInDate, date);
  };

  const checkAvailability = (checkIn: string, checkOut: string) => {
    if (checkIn && checkOut) {
      const check_in = new Date(checkIn);
      const check_out = new Date(checkOut);
      const nights = Math.ceil(
        (check_out.getTime() - check_in.getTime()) / (1000 * 60 * 60 * 24)
      );

      if (nights > 0) {
        setNumberOfNights(nights);
        // Simulate availability check (in real app, this would call an API)
        const available = Math.random() > 0.3;
        setIsAvailable(available);
      }
    }
  };

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const getMinCheckOutDate = () => {
    if (!checkInDate) return "";
    const checkIn = new Date(checkInDate);
    checkIn.setDate(checkIn.getDate() + 1);
    return checkIn.toISOString().split("T")[0];
  };

  return (
    <div>
      <h2 className="font-serif text-3xl font-light tracking-tight mb-8">
        Choose Your Dates
      </h2>

      <div className="space-y-6">
        {/* <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-foreground mb-4">
              Check-in
            </label>
            <input
              type="date"
              value={checkInDate}
              onChange={handleCheckInChange}
              min={getTodayDate()}
              className="w-full px-4 py-3 bg-card/60 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-foreground mb-4">
              Check-out
            </label>
            <input
              type="date"
              value={checkOutDate}
              onChange={handleCheckOutChange}
              min={getMinCheckOutDate()}
              disabled={!checkInDate}
              className="w-full px-4 py-3 bg-card/60 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
        </div> */}

        <BookingDatePicker />

        {/* Availability Status */}
        {isAvailable !== null && (
          <div className="flex items-center gap-3 pt-4 pb-4 border-b border-border/20">
            <div
              className={`w-2 h-2 rounded-full animate-ping ${
                isAvailable ? "bg-primary" : "bg-destructive"
              }`}
            ></div>
            <span className="text-sm">
              {isAvailable
                ? "Available for your dates"
                : "Not available for these dates"}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DateSelector;
