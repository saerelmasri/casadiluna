import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Sections/layout/NarBar/NavBar";
import {
  Almarai,
  Bricolage_Grotesque,
  Instrument_Sans,
} from "next/font/google";
import Footer from "@/components/Sections/layout/Footer/Footer";

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
  title: "Casa di Luna",
  description: "Where radiant skin meets refined ritual.",
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
        <Footer />
      </body>
    </html>
  );
}
