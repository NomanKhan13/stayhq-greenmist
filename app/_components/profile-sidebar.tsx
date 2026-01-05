"use client";
import clsx from "clsx";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { signOutAction } from "../_lib/actions";
import { Button } from "@/components/ui/button";

const ProfileSidebar = () => {
  const path = usePathname();
  return (
    <aside className="md:col-span-1 space-y-6 font-medium tracking-wide">
      <nav className="flex flex-col gap-2">
        <Link
          href="/account"
          className={clsx(
            "text-foreground hover:bg-card/60 transition-all p-4",
            path === "/account" && "bg-card/60"
          )}
        >
          Profile Settings
        </Link>
        <Link
          href="/account/reservations"
          className={clsx(
            "text-foreground hover:bg-card/60 transition-all p-4",
            path === "/account/reservations" && "bg-card/60"
          )}
        >
          Reservations
        </Link>

        <form action={signOutAction}>
          <Button
            variant="destructive"
            className="rounded-none w-full justify-start bg-background cursor-pointer py-6"
          >
            Sign Out
          </Button>
        </form>
      </nav>
    </aside>
  );
};

export default ProfileSidebar;
