"use client";

import { Dot } from "lucide-react";
import ItemCard from "./ItemCard";


export default function PopularItems() {
  return (
    <section className="relative min-h-[100vh] flex overflow-hidden">
      <div className="w-full flex flex-col">
        <div className="w-full flex items-center border px-3 py-6 space-x-1">
          <Dot size={50} />
          <h1 className="font-bricolage text-5xl ">best sellers</h1>
        </div>
        <div className="h-full flex ">
          <ItemCard itemName="Super Glow set" itemPhoto="/images/product.png" price="90,00" title="Illuminate"/>
          
        </div>
        <div className="border border-black h-[20%]">
          <h1>slider</h1>
        </div>
      </div>
    </section>
  );
}
