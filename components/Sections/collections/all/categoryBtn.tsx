"use client";

import Image from "next/image";
import Link from "next/link";

type CategoryProps = {
  category: "face" | "body" | "sets" | "beauty-tools";
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
    categoryTitle: "beauty tools",
    image: "/images/product.png",
    url: "/collections/beauty-tools",
  },
};

export default function Category(props: CategoryProps) {
  const { category } = props;
  return (
    <Link
      href={categories[category].url}
      className="flex flex-col items-center space-y-4"
    >
      <div className="relative overflow-hidden flex-shrink-0 w-20 h-20 rounded-full">
        <Image
          src={categories[category].image || "/placeholder.svg"}
          alt="Face product"
          layout="fill"
          className="object-cover transition-transform duration-300 transform hover:scale-105"
        />
      </div>
      <p className="font-instrument text-xs">{categories[category].categoryTitle}</p>
    </Link>
  );
}
