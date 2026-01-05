"use server";

import { signIn, signOut } from "./auth";

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
