"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import {
  getGuestReservationsById,
  updateProfile,
  updateReservation,
} from "./users";
import { redirect } from "next/navigation";

export async function googleFormAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function credentialsFormAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/account",
    });
  } catch (err: any) {
    if (err?.type === "CredentialsSignin") {
      return { error: "Invalid email or password" };
    }
    throw err;
  }
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateReservationAction(formData: FormData) {
  const reservationId = Number(formData.get("reservationId"));
  if (!reservationId) return;
  const session = await auth();
  if (!session?.user) return;

  const reservations = await getGuestReservationsById(session.user.guest);
  const reservationsIds = reservations.map((r) => r.id);
  if (!reservationsIds.includes(reservationId))
    throw new Error("You are not allowed to update this booking");

  const updateData = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
  };

  const isReservationUpdated = await updateReservation(
    updateData,
    reservationId
  );

  if (isReservationUpdated) {
    revalidatePath(`/account/reservations/edit/${reservationId}`);
    revalidatePath("/account/reservations");
  }
  redirect("/account/reservations");
}

export async function updateProfileAction(formData: FormData) {
  // check if user is authenticated
  const session = await auth();
  if (!session?.user) return;

  // check if nationalID is alpha numeric
  const isNationalIdValid = /^[a-z0-9]+$/i.test(
    String(formData.get("nationalID"))
  );
  if (!isNationalIdValid) return;

  // Make data
  const profileDataToUpdate = {
    nationalID: formData.get("nationalID"),
    nationality: formData.get("nationality"),
  };
  // update in supabase
  const profileUpdated = await updateProfile(
    profileDataToUpdate,
    session?.user?.guest
  );

  // revalidate cache if updated
  if (profileUpdated) {
    console.log(profileDataToUpdate);
    // revalidatePath("/account");
  }
}
