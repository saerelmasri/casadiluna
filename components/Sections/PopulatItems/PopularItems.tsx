"use client";

import { Dot } from "lucide-react";
import ProductCarousel from "./ProductCarrousel";
import { ItemProps } from "./ItemCard";

const items: ItemProps[] = [
  {
    title: "Illuminate",
    itemName: "Illuminating cleansing gel",
    itemPhoto: "/images/product.png",
    hoverPhoto: "/images/girl.png",
    price: "36,00",
    itemLink: "",
  },
  {
    title: "Unify",
    itemName: "Unifying serum spray",
    itemPhoto: "/images/product.png",
    hoverPhoto: "/images/girl.png",
    price: "34,00",
    itemLink: "",
  },
  {
    title: "Natural Glow",
    itemName: "Super glow set",
    itemPhoto: "/images/product.png",
    hoverPhoto: "/images/girl.png",
    price: "82,00",
    itemLink: "",
  },
  {
    title: "Protect",
    itemName: "Hydration booster",
    itemPhoto: "/images/product.png",
    hoverPhoto: "/images/girl.png",
    price: "29,00",
    itemLink: "",
  },
  {
    title: "Revitalize",
    itemName: "Vitamin C serum",
    itemPhoto: "/images/product.png",
    hoverPhoto: "/images/girl.png",
    price: "45,00",
    itemLink: "",
  },
  {
    title: "Revitalize",
    itemName: "Vitamin C serum",
    itemPhoto: "/images/product.png",
    hoverPhoto: "/images/girl.png",
    price: "45,00",
    itemLink: "",
  },
  {
    title: "Revitalize",
    itemName: "Vitamin C serum",
    itemPhoto: "/images/product.png",
    hoverPhoto: "/images/girl.png",
    price: "45,00",
    itemLink: "",
  },
  {
    title: "Revitalize",
    itemName: "Vitamin C serum",
    itemPhoto: "/images/product.png",
    hoverPhoto: "/images/girl.png",
    price: "45,00",
    itemLink: "",
  },
];

export default function PopularItems() {
  return (
    <section className="relative min-h-[100vh] flex overflow-hidden">
      <div className="w-full flex flex-col">
        <div className="w-full flex items-center border px-3 py-6 space-x-1">
          <Dot size={50} />
          <h1 className="font-bricolage text-5xl ">best sellers</h1>
        </div>
        <div className="flex flex-1 h-[100vh]">
          <ProductCarousel items={items} />
        </div>
      </div>
    </section>
  );
}
