import { auth } from "@/app/_lib/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
// import { Button } from "@/components/ui/button"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { User, LogOut } from "lucide-react"

export default async function Header() {
  const session = await auth();
  console.log(session?.user?.image);
  return (
    // <header className="sticky top-0 z-50 border-b border-border">
    <header className="bg-linear-to-b from-background/25 to to-background/10 backdrop-blur-md supports-backdrop-filter:bg-linear-to-b supports-backdrop-filter:from-background/25 to supports-backdrop-filter:to-background/10">
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
        <div className="hidden gap-8 md:flex items-center">
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
          <Avatar asChild className="cursor-pointer">
            <Link href="/account" aria-label="Go to account">
              <AvatarImage
                src={session?.user?.image}
                referrerPolicy="no-referrer"
              />
              <AvatarFallback className="bg-accent/30 hover:bg-accent/50 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-log-in-icon lucide-log-in"
                >
                  <path d="m10 17 5-5-5-5" />
                  <path d="M15 12H3" />
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                </svg>
              </AvatarFallback>
            </Link>
          </Avatar>

          {/* <Link
            href="/account"
            className="text-sm font-medium text-foreground/80 transition-colors hover:underline"
          >
            Noman Khan
          </Link> */}
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
