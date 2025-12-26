"use client";
import {
  AddOnProp,
  useReservation,
} from "@/app/_components/reservation-context";

const PriceSummary = ({ pricePerNight }) => {
  // ACTUAL DATA
  const { calculateNights, selectedAddOns } = useReservation();
  console.log(selectedAddOns);
  const numberOfNights = calculateNights();
  const isValidDateRange = Boolean(numberOfNights);
  const roomTotal = pricePerNight * numberOfNights;
  const addOnsTotal = selectedAddOns.reduce(
    (prevTotal: number, addOn: AddOnProp) => Number(addOn.price) + prevTotal,
    0
  );
  const grandTotal = roomTotal + addOnsTotal;

  return (
    <div className="md:sticky md:top-32">
      <div className="bg-card/60 p-8 space-y-6">
        <h3 className="font-serif text-2xl font-light tracking-tight">
          Booking Summary
        </h3>

        {isValidDateRange ? (
          <>
            <div className="space-y-3 pb-6 border-b border-border/20">
              <div className="flex justify-between text-sm">
                <span className="text-foreground-secondary">
                  {numberOfNights} night{numberOfNights > 1 ? "s" : ""} × $
                  {pricePerNight}
                </span>
                <span className="text-foreground">${roomTotal}</span>
              </div>

              {selectedAddOns.length > 0 && (
                <div className="space-y-2">
                  {selectedAddOns.map((addon: AddOnProp) => (
                    <div
                      key={addon.id}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-foreground-secondary">
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
          <p className="text-sm text-foreground-secondary">
            Select dates to view pricing
          </p>
        )}

        <button
          disabled={!isValidDateRange}
          className={`w-full py-3 tracking-wide transition-all ${
            !isValidDateRange
              ? "bg-card text-foreground-secondary cursor-not-allowed"
              : "bg-primary text-foreground hover:opacity-90 cursor-pointer"
          }`}
        >
          {!isValidDateRange ? "Please Choose Your Dates" : "Reserve Your Stay"}
        </button>

        <p className="text-xs text-foreground-secondary text-center">
          You will be able to review and confirm your reservation on the next
          page.
        </p>
      </div>
    </div>
  );
};

export default PriceSummary;
