import { supabase } from "./supabase";

type guestProp = {
  fullName: string;
  email: string;
  nationalID?: string;
  nationality?: string;
  countryFlag?: string;
  isVerified?: boolean;
  pwHash?: string;
};

export async function getGuest(email: string) {
  const { data: guest } = await supabase
    .from("guests")
    .select("*")
    .eq("email", email)
    .single();

  return guest;
}

export async function getGuestById(id: string) {
  const { data: guest } = await supabase
    .from("guests")
    .select("*")
    .eq("id", id)
    .single();

  return guest;
}

export async function createGuest(newGuest: guestProp) {
  const { data: guest, error } = await supabase
    .from("guests")
    .insert([newGuest])
    .select();
  if (error) {
    console.error(error);
    throw new Error("Guest could not be created");
  }

  return guest;
}

export async function getGuestReservationsById(guestId: string) {
  const { data: reservations, error } = await supabase
    .from("bookings")
    .select("*, roomType:roomTypeId(name, properties:propertyId(name))")
    .eq("guestId", guestId);

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }
  return reservations;
}

export async function updateProfile(newData, guestId) {
  const { error } = await supabase
    .from("guests")
    .update(newData)
    .eq("id", guestId)
    .select()
    .single();
  if (error) throw new Error("Profile could not be updated");

  return true;
}

export async function updateReservation(newData, reservationId) {
  const { data, error } = await supabase
    .from("reservations")
    .update(newData)
    .eq("id", reservationId)
    .select()
    .single();

  console.log(data);
  if (error) throw new Error("Booking could not be updated");

  return true;
}
