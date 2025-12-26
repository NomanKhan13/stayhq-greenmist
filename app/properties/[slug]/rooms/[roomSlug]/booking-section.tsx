// "use client";

import AddOnsSelector from "@/app/_components/ui/room/add-ons-selector";
import DateSelector from "@/app/_components/ui/room/date-selector";
import PriceSummary from "@/app/_components/ui/room/price-summary";
// import clsx from "clsx";
// import { useState } from "react";
// const addOns = [
//   {
//     id: "airport-pickup",
//     name: "Airport Pickup",
//     price: 80,
//     description: "Seamless arrival experience",
//   },
//   {
//     id: "airport-drop",
//     name: "Airport Drop-off",
//     price: 80,
//     description: "Convenient departure",
//   },
//   {
//     id: "breakfast",
//     name: "Daily Breakfast",
//     price: 45,
//     description: "Per person, per day",
//   },
//   {
//     id: "spa",
//     name: "Spa Treatment",
//     price: 150,
//     description: "Relaxation experience",
//   },
//   {
//     id: "guided-tour",
//     name: "Guided Nature Tour",
//     price: 95,
//     description: "Explore surroundings",
//   },
//   {
//     id: "meals",
//     name: "Full Board Meals",
//     price: 120,
//     description: "Breakfast, lunch & dinner",
//   },
// ];

const BookingSection = ({ pricePerNight }: { pricePerNight: number }) => {
  // const [checkInDate, setCheckInDate] = useState("");
  // const [checkOutDate, setCheckOutDate] = useState("");
  // const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  // const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  // const [numberOfNights, setNumberOfNights] = useState(1);

  // const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const date = e.target.value;
  //   setCheckInDate(date);
  //   if (checkOutDate && new Date(date) >= new Date(checkOutDate)) {
  //     setCheckOutDate("");
  //   }
  //   checkAvailability(date, checkOutDate);
  // };

  // const handleCheckOutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const date = e.target.value;
  //   setCheckOutDate(date);
  //   checkAvailability(checkInDate, date);
  // };

  // const checkAvailability = (checkIn: string, checkOut: string) => {
  //   if (checkIn && checkOut) {
  //     const check_in = new Date(checkIn);
  //     const check_out = new Date(checkOut);
  //     const nights = Math.ceil(
  //       (check_out.getTime() - check_in.getTime()) / (1000 * 60 * 60 * 24)
  //     );

  //     if (nights > 0) {
  //       setNumberOfNights(nights);
  //       // Simulate availability check (in real app, this would call an API)
  //       const available = Math.random() > 0.3;
  //       setIsAvailable(available);
  //     }
  //   }
  // };

  // const handleAddOnToggle = (incomingAddOn: string) => {
  //   const addOnExist = selectedAddOns.find((addOn) => addOn === incomingAddOn);
  //   setSelectedAddOns((prev) =>
  //     addOnExist
  //       ? prev.filter((id) => id !== incomingAddOn)
  //       : [...prev, incomingAddOn]
  //   );
  // };

  // const selectedAddOnsDetails = addOns.filter((addon) =>
  //   selectedAddOns.includes(addon.id)
  // );
  // const addOnsTotal = selectedAddOnsDetails.reduce(
  //   (sum, addon) => sum + addon.price,
  //   0
  // );
  // const roomTotal = pricePerNight * numberOfNights;
  // const grandTotal = roomTotal + addOnsTotal;

  // const getTodayDate = () => {
  //   const today = new Date();
  //   return today.toISOString().split("T")[0];
  // };

  // const getMinCheckOutDate = () => {
  //   if (!checkInDate) return "";
  //   const checkIn = new Date(checkInDate);
  //   checkIn.setDate(checkIn.getDate() + 1);
  //   return checkIn.toISOString().split("T")[0];
  // };

  return (
    <section
      id="#booking-section"
      className="px-6 py-20 border-t border-border/20"
    >
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Dates & Add-ons */}
        <div className="md:col-span-2 space-y-16">
          {/* Date Selection */}
          <DateSelector />

          {/* Add-ons Section */}
          <AddOnsSelector />
        </div>

        {/* Pricing Summary */}
        <PriceSummary pricePerNight={pricePerNight} />
      </div>
    </section>
  );
};

export default BookingSection;
