import type React from "react";
import type { Metadata } from "next";
import CategoryShop from "@/components/Sections/collections/Category";

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
      <CategoryShop/>
      <section className="w-full">{children}</section>
    </>
  );
}
