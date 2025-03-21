"use client";

import CustomButton from "@/components/common/CustomButton";
import ItemCard, {
  ItemProps,
} from "@/components/section-components/home/ItemCard";
import { Dot } from "lucide-react";
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
  }
];

export default function CollectionPage() {
    // const {category} = params;
  return (
    <div className="w-full bg-[#faf4f0] border">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-auto-rows-[500px]">
        {items.slice(0, 2).map((item, index) => (
          <div key={index} className="h-[500px] flex">
            <ItemCard {...item} />
          </div>
        ))}
        <div
          className="col-span-2 bg-cover bg-center scale-x-[-1] h-[500px] flex flex-col justify-end"
          style={{ backgroundImage: "url(/images/girls.jpeg)" }}
        >
          <div className="px-6 py-7 space-y-5 scale-x-[-1]">
            <div className="flex items-center">
              <Dot color="white" size={24} />
              <p className="text-white font-instrument text-xs">
                super glow set
              </p>
            </div>
            <h1 className="font-bricolage text-5xl text-white">
              sublimate skin and eyes
            </h1>
            <p className="text-white font-instrument text-sm max-w-md">
              Enhance skin and eyes with our set of our best-selling skincare
              products: the Cleansing oil and the Eye contour gel.
            </p>
            <div className="max-w-xs pr-6">
              <CustomButton buttonText="view product" variant="secondary" />
            </div>
          </div>
        </div>
        {items.slice(2).map((item, index) => (
          <div key={index + 2} className="h-[500px] flex">
            <ItemCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
