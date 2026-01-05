import { auth } from "@/app/_lib/auth";
import PriceBreakdown from "./price-breakdown";
import Link from "next/link";

const PriceSummary = async ({ pricePerNight }) => {
  const session = await auth();
  const isLoggedIn = !!session?.user;

  return (
    <div className="mt-8">
      <div className="bg-card/40 hover:bg-card/60 p-8 space-y-6">
        <h3 className="font-serif text-2xl font-light tracking-tight">
          Booking Summary
        </h3>

        {isLoggedIn ? (
          <PriceBreakdown pricePerNight={pricePerNight} />
        ) : (
          <p className="text-secondary-foreground/90 text-center">
            Please{" "}
            <Link href="/login" className="text-accent-foreground underline">
              login
            </Link>{" "}
            to continue with your reservation.
          </p>
        )}
      </div>
    </div>
  );
};

export default PriceSummary;
