"use client";
import clsx from "clsx";
import Link from "next/link";

import { usePathname } from "next/navigation";

const ProfileSidebar = () => {
  const path = usePathname();
  return (
    <aside className="md:col-span-1 space-y-6 font-medium tracking-wide">
      <nav className="flex flex-col gap-2">
        <Link
          href="/account"
          className={clsx(
            "text-foreground dark:hover:bg-card/60 hover:bg-background-alt transition-all p-4",
            path === "/account" && "dark:bg-card/40 bg-card"
          )}
        >
          Profile Settings
        </Link>
        <Link
          href="/account/reservations"
          className={clsx(
            "text-foreground dark:hover:bg-card/60 hover:bg-background-alt transition-all p-4",
            path === "/account/reservations" && "dark:bg-card/40 bg-card"
          )}
        >
          Reservations
        </Link>

        <Link
          href="#"
          className="text-rose-500 hover:bg-rose-900 hover:text-foreground transition-colors p-4"
        >
          Sign Out
        </Link>
      </nav>
    </aside>
  );
};

export default ProfileSidebar;
