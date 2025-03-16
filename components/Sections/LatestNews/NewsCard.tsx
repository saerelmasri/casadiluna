"use client";

import { Dot } from "lucide-react";
import Image from "next/image";

export type NewsCardProp = {
  imageURL: string;
  alt: string;
  category: string;
  articleTitle: string;
  articleDescription: string;
};

export default function NewsCard(props: NewsCardProp) {
  const { imageURL, alt, category, articleTitle, articleDescription } = props;

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-auto flex flex-col">
      <div className="relative w-full h-64 md:h-72 lg:h-[500px] overflow-hidden">
        <Image
          src={imageURL || "/images/girl.png"}
          alt={alt || "Skin care"}
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
            {articleTitle}
          </h1>
          <p className="font-instrument text-xs md:text-sm">
            {articleDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
