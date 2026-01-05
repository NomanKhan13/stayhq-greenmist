import Link from "next/link";
import { auth } from "../_lib/auth";
import { getGuestById } from "../_lib/users";
import { format } from "date-fns";

export default async function Account() {
  // // Mock user data
  // const user = {
  //   name: "Sarah Mitchell",
  //   email: "sarah@example.com",
  //   phone: "+1 (555) 123-4567",
  //   memberSince: "January 2023",
  //   preferences: {
  //     newsletter: true,
  //     notifications: true,
  //   },
  // };
  const session = await auth();

  const user = session?.user;
  const guest = await getGuestById(user?.guest);
  const memberSince = format(guest.createdAt, "MMM dd yyyy");
  console.log(user);
  return (
    <section id="profile" className="space-y-8">
      <div>
        <h2 className="text-2xl mb-6">Profile Information</h2>
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Full Name
              </p>
              <p className="text-foreground">{user.name || user.fullName}</p>
            </div>
          </div>
          <div className="pt-4 border-t border-border/60">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Email
            </p>
            <p className="text-foreground">{user.email}</p>
          </div>
          {/* <div className="pt-4 border-t border-border/60">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Phone
            </p>
            <p className="text-foreground">{user.phone}</p>
          </div> */}
          <div className="pt-4 border-t border-muted">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Member Since
            </p>
            <p className="text-foreground">{memberSince}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
