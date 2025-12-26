"use client";

import { Ban } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-background flex items-center justify-center pt-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        {/* Error Icon */}
        <div className="mb-8 flex justify-center">
          <Ban className="size-12 text-rose-500" />
        </div>

        {/* Error Message */}
        <h1 className="font-serif text-2xl font-light tracking-tight text-foreground mb-4">
          Something went wrong
        </h1>
        <p className="text-sm text-foreground-secondary leading-relaxed mb-4">
          We encountered an unexpected error. {"Don't worry"}, our team has been
          notified.
        </p>

        {/* Error Details (development only) */}
        {process.env.NODE_ENV === "development" && error.message && (
          <div className="mb-8 p-4 bg-background-card rounded text-left">
            <p className="text-xs font-mono text-foreground-secondary wrap-break-word">
              {error.message}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-8 py-3 text-sm bg-primary text-btn-text hover:bg-primary/90 transition-colors duration-300"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-8 py-3 text-sm bg-card/50 text-foreground hover:bg-card transition-colors duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
