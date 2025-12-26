import { Suspense } from "react";
import SectionHeader from "../_components/SectionHeader";

import PropertyList from "./property-list";
import Spinner from "../_components/spinner";

export default async function Properties() {
  return (
    <>
      <SectionHeader
        title="Our Properties"
        description="Each retreat is a sanctuary designed to harmonize with its natural
          surroundings."
      />
      <Suspense fallback={<Spinner />}>
        <PropertyList />
      </Suspense>
    </>
  );
}
