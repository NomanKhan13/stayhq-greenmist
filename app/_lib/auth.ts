import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { ZodError } from "zod";

import { getGuest, createGuest } from "./users";
import { signInSchema } from "./zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),

    Credentials({
      name: "Credentials",
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },

      async authorize(credentials) {
        try {
          const { email, password } = await signInSchema.parseAsync(
            credentials
          );

          const user = await getGuest(email);
          if (!user) return null;

          if (!user.isVerified) return null;

          const isValid = await bcrypt.compare(password, user.pwHash);
          console.log("Yes", isValid);
          if (!isValid) return null;

          return user;
        } catch (error) {
          if (error instanceof ZodError) return null;
        }
      },
    }),
  ],

  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },

    async signIn({ user }) {
      try {
        if (!user?.email) return false;
        const existingGuest = await getGuest(user.email);

        if (!existingGuest) {
          await createGuest({
            email: user.email,
            fullName: user.name ?? "",
          });
        }
        console.log(user);
        return true;
      } catch {
        return false;
      }
    },

    async jwt({ token, user }) {
      if (user?.email) {
        const guest = await getGuest(user.email);
        token.guestId = guest.id;
        token.name = guest.fullName;
        console.log("HERE", guest.fullName);
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user && token.guestId) {
        session.user.guest = token.guestId as string;
        session.user.name = token.name as string;
      }
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
});
