import SectionHeader from "@/app/_components/SectionHeader";
import { getPropertyBySlug } from "@/app/_lib/rooms";
import RoomsList from "./rooms-list";
import { Suspense } from "react";
import Spinner from "@/app/_components/spinner";
export default async function RoomsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);
  // const rooms = await getRoomsByPrope
  const sectionTitle = property[0]?.name;
  const sectionDescription = property[0]?.description;

  return (
    <main>
      <SectionHeader title={sectionTitle} description={sectionDescription} />
      <Suspense fallback={<Spinner />}>
        <RoomsList propertyId={property[0].id} propertySlug={slug} />
      </Suspense>
    </main>
  );
}
