import { ReactNode } from "react";

const PropertyAndRoomWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="px-4 lg:px-6 grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
      {children}
    </div>
  );
};

export default PropertyAndRoomWrapper;
