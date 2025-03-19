"use client"

import type React from "react";
import { usePathname } from "next/navigation";
import Category from "./all/categoryBtn";

const shopContent = {
  shop: {
    title: "shop",
    description:
      "Designed with respect for your skin and the planet, the entire Nüssa skincare range is made in France and certified organic and natural by Ecocert.",
  },
  face: {
    title: "face",
    description:
      "Our daytime range adapts to all skin types, including those of pregnant and breastfeeding women. Enriched with hyaluronic acid, ceramides and vitamin C, our ultra-clean formulas stimulate, hydrate and regenerate the skin.",
  },
  body: {
    title: "body",
    description:
      "Formulated with patented, 100% natural ingredients, our products are suitable for all skin types, including pregnant and breastfeeding women. Treat your skin to optimal nutrition, cell regeneration and tissue unclogging.",
  },
  sets: {
    title: "sets",
    description:
      "To optimize the effects on the skin, we have formulated our treatments in sets so that the ingredients act in synergy and amplify their benefits.",
  },
  "beauty-tools": {
    title: "body tools",
    description:
      "Discover our innovative, eco-friendly range of beauty tools made from precious woods sourced from FSC-certified, ecologically managed forests. These tools are designed to deliver exceptional benefits to the skin, promoting cell regeneration, tissue firming and cellulite reduction.",
  },
};

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
          <Category category="face" currentPath={pathKey}/>
          <Category category="body" currentPath={pathKey}/>
          <Category category="sets" currentPath={pathKey}/>
          <Category category="beauty-tools" currentPath={pathKey}/>
        </div>
      </div>
  );
}
