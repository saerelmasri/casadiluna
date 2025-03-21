"use client";

import CustomButton from "@/components/common/CustomButton";
import ItemCard, {
  ItemProps,
} from "@/components/section-components/home/ItemCard";
import ParallexAbout from "@/components/Sections/collections/all/ParallexAbout";
import { ArrowRight, Dot } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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

export default function Shop() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="w-full bg-[#faf4f0] border border-transparent">
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
      <ParallexAbout />
      <div
        className="w-full h-[50vh] md:h-screen flex flex-col justify-center items-center bg-[#faf4f0]"
        onMouseMove={handleMouseMove}
      >
        {hovering && (
          <div
            className="fixed w-10 h-10 bg-black rounded-full flex justify-center items-center pointer-events-none transition-transform duration-150 ease-out"
            style={{
              left: `${cursorPos.x - 20}px`,
              top: `${cursorPos.y - 20}px`,
            }}
          >
            <ArrowRight size={20} color="white" />
          </div>
        )}

        {/* Header */}
        <div className="flex items-center mb-6">
          <Dot size={42} />
          <p className="text-sm font-instrument lowercase">
            Explore our collections
          </p>
        </div>

        {/* Collection Links */}
        <div
          className="flex flex-col w-1/2 items-center md:w-1/4 md:space-y-7 cursor-none"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          {["face", "body", "sets", "beauty tools"].map((category, index) => (
            <div
              key={index}
              className="w-full flex flex-col items-center cursor-none"
            >
              <Link
                href="#"
                className="text-2xl md:text-6xl font-bricolage cursor-none"
              >
                {category}
              </Link>
              {index !== 3 && (
                <div className="w-full border-t border-gray-400 mt-3 cursor-none" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
