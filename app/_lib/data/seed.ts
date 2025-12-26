import { supabase } from "../supabase";
import { hillRooms, properties, teaGardenRooms, valleyRooms } from "./data";

export async function seed() {
  // console.log("🌱 Seeding properties...");

  // const { error: propError } = await supabase
  //   .from("properties")
  //   .upsert(properties, { onConflict: "id" });

  // if (propError) {
  //   console.error(propError);
  //   return;
  // }

  // console.log("🏨 Properties seeded");

  const rooms = [...hillRooms, ...teaGardenRooms, ...valleyRooms].map(
    (room) => ({
      propertyId: room.propertyId,
      slug: room.slug,
      name: room.name,
      description: room.description,
      bedType: room.bedType,
      bedCount: room.bedCount,
      type: room.type,
      occupancy: room.occupancy,
      pricePerNight: room.pricePerNight,
      amenities: room.amenities,
      images: room.images,
    })
  );

  console.log("🛏️ Seeding rooms...");

  const { error: roomError } = await supabase
    .from("rooms")
    .upsert(rooms, { onConflict: "id" });

  if (roomError) {
    console.error(roomError);
    return;
  }

  console.log("✅ Rooms seeded successfully");
}

// seed();
