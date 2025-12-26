import Link from "next/link";

export default function Account() {
  // Mock user data
  const user = {
    name: "Sarah Mitchell",
    email: "sarah@example.com",
    phone: "+1 (555) 123-4567",
    memberSince: "January 2023",
    preferences: {
      newsletter: true,
      notifications: true,
    },
  };

  return (
    <section id="profile" className="space-y-8">
      <div>
        <h2 className="text-2xl mb-6">Profile Information</h2>
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-foreground-secondary mb-2">
                Full Name
              </p>
              <p className="text-foreground">{user.name}</p>
            </div>
            <Link
              href="/account/profile"
              className="text-sm text-primary font-medium hover:text-foreground transition-colors"
            >
              Edit
            </Link>
          </div>
          <div className="pt-4 border-t border-border/60">
            <p className="text-xs uppercase tracking-widest text-foreground-secondary mb-2">
              Email
            </p>
            <p className="text-foreground">{user.email}</p>
          </div>
          <div className="pt-4 border-t border-border/60">
            <p className="text-xs uppercase tracking-widest text-foreground-secondary mb-2">
              Phone
            </p>
            <p className="text-foreground">{user.phone}</p>
          </div>
          <div className="pt-4 border-t border-muted">
            <p className="text-xs uppercase tracking-widest text-foreground-secondary mb-2">
              Member Since
            </p>
            <p className="text-foreground">{user.memberSince}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
