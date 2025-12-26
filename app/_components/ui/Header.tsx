"use client";

import Link from "next/link";
// import { Button } from "@/components/ui/button"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { User, LogOut } from "lucide-react"

export default function Header() {
  return (
    // <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
    <header>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 relative z-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">
            GM
          </div>
          <span className="hidden font-semibold text-foreground sm:inline">
            GreenMist
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-foreground/80 transition-colors hover:underline"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-foreground/80 transition-colors hover:underline"
          >
            About
          </Link>
          <Link
            href="/properties"
            className="text-sm font-medium text-foreground/80 transition-colors hover:underline"
          >
            Properties
          </Link>
          <Link
            href="/experiences"
            className="text-sm font-medium text-foreground/80 transition-colors hover:underline"
          >
            Experiences
          </Link>
          <Link
            href="/account"
            className="text-sm font-medium text-foreground/80 transition-colors hover:underline"
          >
            Noman Khan
          </Link>
        </div>

        {/* Account Button */}
        {/* <div className="flex items-center gap-4">
          LATER
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Account</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/profile" className="flex cursor-pointer items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>My Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/bookings" className="flex cursor-pointer items-center gap-2">
                  <span>My Bookings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex cursor-pointer items-center gap-2 text-destructive">
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div> */}
      </nav>
    </header>
  );
}
