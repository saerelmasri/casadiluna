"use client";

import Image from "next/image";
import Link from "next/link";

type CategoryProps = {
  category: "face" | "body" | "sets" | "beauty-tools";
  currentPath: string; 
};

const categories = {
  face: {
    categoryTitle: "face",
    image: "/images/face.jpg",
    url: "/collections/face",
  },
  body: {
    categoryTitle: "body",
    image: "/images/body.jpg",
    url: "/collections/body",
  },
  sets: {
    categoryTitle: "sets",
    image: "/images/products.jpg",
    url: "/collections/sets",
  },
  "beauty-tools": {
    categoryTitle: "beauty-tools", 
    image: "/images/product.png",
    url: "/collections/beauty-tools",
  },
};

export default function Category({ category, currentPath }: CategoryProps) {
  const isActive = currentPath === category; // ✅ Compare currentPath directly with category

  return (
    <Link href={categories[category].url} className="flex flex-col items-center space-y-4">
      <div
        className={`relative overflow-hidden flex-shrink-0 w-15 h-15 md:w-20 md:h-20 rounded-full transition-all duration-300 ${
          isActive ? "border-2 border-black" : "border-none"
        }`}
      >
        <Image
          src={categories[category].image || "/placeholder.svg"}
          alt={categories[category].categoryTitle}
          layout="fill"
          className="object-cover transform hover:scale-105"
        />
      </div>
      <p className={`font-instrument text-xs `}>
        {categories[category].categoryTitle}
      </p>
    </Link>
  );
}
