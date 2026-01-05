"use client";
import {
  AddOnProp,
  useReservation,
} from "@/app/_components/reservation-context";
import { Button } from "@/components/ui/button";

const PriceBreakdown = ({ pricePerNight }) => {
  const { calculateNights, selectedAddOns } = useReservation();
  const numberOfNights = calculateNights();
  const isValidDateRange = Boolean(numberOfNights);
  const roomTotal = pricePerNight * numberOfNights;
  const addOnsTotal = selectedAddOns.reduce(
    (prevTotal: number, addOn: AddOnProp) => Number(addOn.price) + prevTotal,
    0
  );
  const grandTotal = roomTotal + addOnsTotal;

  return (
    <>
      {isValidDateRange ? (
        <>
          <div className="space-y-3 pb-6 border-b border-border/20">
            <div className="flex justify-between text-sm">
              <span className="text-secondary-foreground/90">
                {numberOfNights} night{numberOfNights > 1 ? "s" : ""} × $
                {pricePerNight}
              </span>
              <span className="text-foreground">${roomTotal}</span>
            </div>

            {selectedAddOns.length > 0 && (
              <div className="space-y-2">
                {selectedAddOns.map((addon: AddOnProp) => (
                  <div key={addon.id} className="flex justify-between text-sm">
                    <span className="text-secondary-foreground/90">
                      {addon.name}
                    </span>
                    <span className="text-foreground">${addon.price}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm">Total</span>
            <span className="font-serif text-3xl">${grandTotal}</span>
          </div>
        </>
      ) : (
        <p className="text-sm text-secondary-foreground/90">
          Select dates to view pricing
        </p>
      )}

      <Button
        size="lg"
        disabled={!isValidDateRange}
        className="w-full rounded-none py-6 px-8 text-base cursor-pointer"
      >
        {!isValidDateRange ? "Please Choose Your Dates" : "Reserve Your Stay"}
      </Button>
    </>
  );
};

export default PriceBreakdown;
