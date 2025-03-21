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
  "anti-aging-first-wrinkles": {
    title: "Anti-aging & first wrinkles",
    description:
      "Fight the first wrinkles and signs of aging with our organic skin care products. Use our eye contour gel to reduce dark circles, puffiness and fine lines, our make-up remover oil rich in Marula oil for optimal hydration, our plumping spray serum with hyaluronic acid for firmer skin, and our high-performance flower oil duo to restore tone.",
  },
  "firmness-cellulite": {
    title: "Firmness & cellulite",
    description:
      "Tone your skin and reduce cellulite with our Nüssa body selection. Discover our beauty accessories for everyday use, as well as our specific disinfiltrating coffee treatment, for firm, smooth skin all year round.",
  },
  "acne-blemishes": {
    title: "Acne & blemishes",
    description:
      "Fight acne and blemishes with our skincare products for problem-prone skin. Organic solutions made in France, ideal for sensitive, blemish-prone skin.",
  },
  "dehydration-dullness": {
    title: "Dehydration & dullness",
    description:
      "Restore hydration and radiance to your skin with our range of specific care products, created in synergy to multiply their effects and all made in France with natural and organic ingredients. Suitable for all skin types, including sensitive skin and pregnant women.",
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
        {![
          "anti-aging-first-wrinkles",
          "firmness-cellulite",
          "acne-blemishes",
          "dehydration-dullness",
        ].includes(pathKey) ? (
          <>
            <Category category="face" currentPath={pathKey} />
            <Category category="body" currentPath={pathKey} />
            <Category category="sets" currentPath={pathKey} />
            <Category category="beauty-tools" currentPath={pathKey} />
          </>
        ) : null}
      </div>
    </div>
  );
}
