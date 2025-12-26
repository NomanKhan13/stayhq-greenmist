import { supabase } from "./supabase";

export async function getProperties() {
  const { data: properties, error } = await supabase
    .from("properties")
    .select("*");

  if (error) {
    console.error(error);
    throw new Error("Properties could not be loaded");
  }

  return properties;
}

export async function getRooms() {
  const { data: rooms, error } = await supabase.from("rooms").select("*");

  if (error) {
    console.error(error);
    throw new Error("Rooms could not be loaded");
  }

  return rooms;
}

export async function getPropertyBySlug(slug: string) {
  const { data: property, error } = await supabase
    .from("properties")
    .select("*")
    .eq("slug", slug);
  if (error) {
    console.error(error);
    throw new Error("Property could not be loaded");
  }

  return property;
}

export async function getRoomsByProperty(id: string) {
  const { data: rooms, error } = await supabase
    .from("roomType")
    .select("*")
    .eq("propertyId", id);
  if (error) {
    console.error(error);
    throw new Error("Rooms could not be loaded");
  }

  return rooms;
}

export async function getRoomBySlug(roomSlug: string) {
  const { data: room, error } = await supabase
    .from("roomType")
    .select("*")
    .eq("slug", roomSlug)
    .single();
  if (error) {
    console.error(error);
    throw new Error("Room could not be loaded");
  }

  return room;
}
