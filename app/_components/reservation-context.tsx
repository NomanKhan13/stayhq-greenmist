"use client";

import { differenceInCalendarDays, format } from "date-fns";
import { createContext, ReactNode, useContext, useState } from "react";
import { DateRange } from "react-day-picker";

export type AddOnProp = {
  id: string;
  name: string;
  price: number;
  description: string;
};

export const ReservationContext = createContext();

export const ReservationProvider = ({ children }: { children: ReactNode }) => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });
  const [selectedAddOns, setSelectedAddOns] = useState<AddOnProp[]>([]);

  // function handleDateChange(newDateRange: DateRange) {
  //   setDateRange(newDateRange);
  // }

  function calculateNights() {
    if (!dateRange?.from || !dateRange.to) return 0;
    const totalNights = Math.max(
      differenceInCalendarDays(dateRange?.to, dateRange?.from),
      0
    );

    return totalNights;
  }

  const handleAddOnToggle = (incomingAddOn: AddOnProp) => {
    const addOnExist = Boolean(
      selectedAddOns.find((addOn) => addOn.id === incomingAddOn?.id)?.id
    );
    setSelectedAddOns((prev) =>
      addOnExist
        ? prev.filter((addOn) => addOn.id !== incomingAddOn?.id)
        : [...prev, incomingAddOn]
    );
  };

  return (
    <ReservationContext
      value={{
        dateRange,
        setDateRange,
        calculateNights,
        selectedAddOns,
        handleAddOnToggle,
      }}
    >
      {children}
    </ReservationContext>
  );
};

export const useReservation = () => {
  const context = useContext(ReservationContext);
  if (context === undefined)
    throw new Error("Context is being used outside the provider");
  return context;
};
