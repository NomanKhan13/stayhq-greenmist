export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="font-serif text-lg font-light tracking-tight">
            GreenMist
          </h3>
          <p className="text-sm text-muted-foreground font-light">
            Curated retreats for the discerning traveler
          </p>
        </div>
        <p className="text-xs text-muted-foreground font-light">
          © {new Date().getFullYear()} GreenMist. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
