import BookingSection from "./booking-section";
import NavigateToRooms from "./navigate-to-rooms";
import RoomInfo from "./room-info";

interface RoomDetailPageProps {
  id: string;
  slug: string;
  name: string;
  description: string;
  idealFor: string;
  pricePerNight: number;
  image: string;
  bedType: string;
  amenities: string[];
}

export function RoomDetailPageComponent({
  room,
}: {
  room: RoomDetailPageProps;
}) {
  return (
    <>
      <NavigateToRooms propertySlug={room.slug} />
      <RoomInfo room={room} />
      <BookingSection pricePerNight={room.pricePerNight} />
    </>
  );
}
