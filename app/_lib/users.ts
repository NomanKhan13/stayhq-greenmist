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
