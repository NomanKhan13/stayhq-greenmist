import { getRoomBySlug } from "@/app/_lib/rooms";
import { RoomDetailPageComponent } from "./room-detail-page";

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ roomSlug: string }>;
}) {
  const { roomSlug } = await params;
  const room = await getRoomBySlug(roomSlug);

  return <RoomDetailPageComponent room={room} />;
}
