"use client";

import type React from "react";
import { usePathname } from "next/navigation";
import Category from "./all/categoryBtn";

const shopContent = {
  shop: {
    title: "shop",
    description:
      "Designed with respect for your skin and the planet, the entire Nüssa skincare range is made in France and certified organic and natural by Ecocert.",
  },
  cleansers: {
    title: "Cleansers",
    description:
      "For all skin types — removing impurities while maintaining your skin's balance.",
  },
  moisturizers: {
    title: "Moisturizers & Hydration",
    description:
      "Nourish and lock in moisture with creams, gels, and serums that promote skin's hydration and elasticity.",
  },
  serums: {
    title: "Serums & Treatments",
    description:
      "Target specific skin concerns like aging, pigmentation, or blemishes with potent, high-performance formulas.",
  },
  exfoliators: {
    title: "Exfoliators & Masks",
    description:
      "Revitalize your complexion with gentle exfoliants or rejuvenating masks for smoother, brighter skin.",
  },
  "sun-protection": {
    title: "Sun Protection",
    description:
      "High-quality sunscreens designed to protect against harmful UV rays, ensuring your skin remains radiant and youthful.",
  },
};

const displayedCategories = [
  "cleansers",
  "moisturizers",
  "serums",
  "exfoliators",
  "sun",
] as const;

export default function CategoryShop() {
  const pathname = usePathname();
  const pathKey = pathname.split("/").pop() || "shop";
  const content =
    shopContent[pathKey as keyof typeof shopContent] || shopContent.shop;

  return (
    <div className="w-full mt-[50px] px-9 py-5">
      <div className="mt-[50px]">
        <h1 className="lowercase text-5xl font-bricolage">{content.title}</h1>
      </div>
      <div className="max-w-3xl mt-4">
        <p className="text-sm font-instrument break-words whitespace-normal">
          {content.description}
        </p>
      </div>
      <div className="flex space-x-5 md:space-x-10 mt-4">
        {displayedCategories.map((category) => (
          <Category key={category} category={category} currentPath={pathKey} />
        ))}
      </div>
    </div>
  );
}
