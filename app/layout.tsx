import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/NavBar";
import {
  Almarai,
  Bricolage_Grotesque,
  Instrument_Sans,
} from "next/font/google";

const almarai = Almarai({
  weight: ["300", "400", "700", "800"],
  subsets: ["arabic"],
  variable: "--font1",
});
const bricolage = Bricolage_Grotesque({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font2",
});
const instrumentSans = Instrument_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font3",
});

export const metadata: Metadata = {
  title: "BALANCE | Skincare Products",
  description: "1000+ top beauty products in one place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${almarai.variable} ${bricolage.variable} ${instrumentSans.variable}`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
