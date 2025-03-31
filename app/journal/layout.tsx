import type React from "react";
import type { Metadata } from "next";
import Layout from "@/components/Sections/journal/Layout";

export const metadata: Metadata = {
  title: "BALANCE | Skincare Products",
  description: "1000+ top beauty products in one place",
};

export default function CollectionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Layout />
      <section className="w-full">{children}</section>
    </>
  );
}
