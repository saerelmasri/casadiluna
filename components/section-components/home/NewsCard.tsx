"use client";

import { BlogPostType } from "@/lib/notion";
import { Dot } from "lucide-react";
import Image from "next/image";


export default function NewsCard(props: BlogPostType) {
  const { title, category, description, cover } = props;

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-auto flex flex-col">
      <div className="relative w-full h-64 md:h-72 lg:h-[500px] overflow-hidden">
        <Image
          src={cover || "/images/girl.png"}
          alt={title || "Skin care"}
          fill
          className="object-cover transition-transform duration-300 transform hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <Dot size={24} />
          <h1 className="text-xs md:text-sm font-bricolage lowercase">
            {category}
          </h1>
        </div>
        <div className="mt-2 space-y-2">
          <h1 className="font-bricolage text-2xl md:text-3xl lowercase">
            {title}
          </h1>
          <p className="font-instrument text-xs md:text-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
