import { ReactNode } from "react";
import ProfileSidebar from "../_components/profile-sidebar";
import SectionHeader from "../_components/SectionHeader";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* Header Section */}
      <SectionHeader
        title="My Account"
        description="Manage your profile and reservations"
      />

      <div className="px-6 py-8 md:py-12">
        <div className="grid md:grid-cols-3 gap-12">
          <ProfileSidebar />

          {/* Main Content */}
          <div className="md:col-span-2 space-y-16">{children}</div>
        </div>
      </div>
    </>
  );
};

export default layout;
