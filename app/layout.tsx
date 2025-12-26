import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./_styles/globals.css";
// import { Footer } from "./_components/ui/Footer";
import Header from "./_components/ui/Header";
import { ReservationProvider } from "./_components/reservation-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StayHQ - Find it. Book it. Enjoy it.",
  description: "Find your stays with ease, book them and enjoy your trip.",
  icons: {
    icon: "/favicon.svg",
  },
};
// https://www.happyhues.co/palettes/6
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 sm:px-4 xl:px-8 py-12 grid">
          <ReservationProvider>
            <main className="max-w-7xl w-full mx-auto">{children}</main>
          </ReservationProvider>
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
