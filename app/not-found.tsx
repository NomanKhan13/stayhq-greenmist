"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-background flex items-center justify-center pt-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        {/* 404 Display */}
        <div className="mb-8">
          <h1 className="font-serif text-7xl md:text-8xl font-light tracking-tight text-foreground-muted mb-2">
            404
          </h1>
          <div className="h-1 w-16 bg-primary mx-auto"></div>
        </div>

        {/* Error Message */}
        <h2 className="font-serif text-2xl font-light tracking-tight text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-sm text-foreground-secondary leading-relaxed mb-8">
          The page {"you're looking for doesn't"} exist. It might have been
          moved or removed.
        </p>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 text-sm bg-primary text-btn-text hover:bg-primary/90 transition-colors duration-300"
          >
            Back to Home
          </Link>
          <Link
            href="/properties"
            className="px-8 py-3 text-sm bg-card/50 text-foreground hover:bg-card transition-colors duration-300"
          >
            Explore Properties
          </Link>
        </div>
      </div>
    </div>
  );
}
