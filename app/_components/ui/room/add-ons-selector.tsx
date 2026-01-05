"use client";
import clsx from "clsx";
import { useReservation } from "../../reservation-context";
import { ADD_ONS } from "@/constants";

const AddOnsSelector = () => {
  const { calculateNights, selectedAddOns, handleAddOnToggle } =
    useReservation();
  const isValidDateRange = Boolean(calculateNights());

  return (
    <div>
      <h2 className="font-serif text-3xl font-light tracking-tight mb-8">
        Enhance Your Stay
      </h2>

      <div className="space-y-6">
        {ADD_ONS.map((addon) => (
          <div
            key={addon.id}
            className={clsx(
              "flex items-center justify-between p-4 bg-card/40 hover:bg-card/60 transition-colors cursor-pointer",
              !isValidDateRange && "pointer-events-none"
            )}
            onClick={() => handleAddOnToggle(addon)}
          >
            <div className="flex items-center gap-4 flex-1">
              <input
                type="checkbox"
                disabled={!isValidDateRange}
                checked={selectedAddOns.includes(addon)}
                // onChange={() => handleAddOnToggle(addon)}
                className="w-5 h-5 cursor-pointer disabled:cursor-not-allowed accent-primary"
              />
              <div>
                <p className="text-foreground">{addon.name}</p>
                <p className="text-sm text-secondary-foreground/90">
                  {addon.description}
                </p>
              </div>
            </div>
            <p className="text-foreground whitespace-nowrap ml-4">
              ${addon.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddOnsSelector;
