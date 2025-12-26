import { Loader2 } from "lucide-react";

const Spinner = () => {
  return (
    <div className="bg-background flex items-center justify-center pt-20">
      <div className="max-w-2xl mx-auto px-6 flex flex-col items-center justify-center gap-6">
        {/* Loading Animation */}
        <Loader2 className="animate-spin text-primary size-16" />

        {/* Loading Text */}
        <div className="text-center">
          <h1 className="font-serif text-3xl font-light tracking-tight text-foreground mb-3">
            Loading
          </h1>
          <p className="text-sm text-foreground-secondary leading-relaxed">
            {"We're"} preparing something beautiful for you
          </p>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
