"use client";

import Image from "next/image";
import Link from "next/link";

type CategoryProps = {
  category: "cleansers" | "moisturizers" | "serums" | "exfoliators" | "sun"; 
  currentPath: string; 
};

const categories = {
  cleansers: {
    categoryTitle: "cleansers",
    image: "/images/cleanser.jpg",
    url: "/collections/cleansers",
  },
  moisturizers: {
    categoryTitle: "moisturizers",
    image: "/images/moisturizers.jpg",
    url: "/collections/moisturizers",
  },
  serums: {
    categoryTitle: "serums",
    image: "/images/face.jpg",
    url: "/collections/serums",
  },
  exfoliators: {
    categoryTitle: "exfoliators", 
    image: "/images/exfoliators.jpg",
    url: "/collections/exfoliators",
  },
  sun: {
    categoryTitle: "sun protection", 
    image: "/images/sun.jpg",
    url: "/collections/sun-protection",
  },
};

export default function Category({ category, currentPath }: CategoryProps) {
  const isActive = currentPath === category; 
  const categoryData = categories[category as keyof typeof categories];

  if (!categoryData) return null;
  const { image, url, categoryTitle } = categoryData;

  return (
    <Link href={url} className="flex flex-col items-center space-y-4">
      <div
        className={`relative overflow-hidden flex-shrink-0 w-15 h-15 md:w-20 md:h-20 rounded-full transition-all duration-300 ${
          isActive ? "border-2 border-black" : "border-none"
        }`}
      >
        <Image
          src={image || "/placeholder.svg"}
          alt={categoryTitle}
          layout="fill"
          className="object-cover transform hover:scale-105"
        />
      </div>
      <p className={`font-instrument text-xs `}>
        {categoryTitle}
      </p>
    </Link>
  );
}
