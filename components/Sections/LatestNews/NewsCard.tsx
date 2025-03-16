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
    <div className=" w-[25%] h-[80vh] flex flex-col">
      <div className="bg-cover bg-center w-full h-[75%] relative overflow-hidden flex-shrink-0">
        <Image
          src={imageURL || "/images/girl.png"}
          alt={alt || "Skin care"}
          layout="fill"
          className="object-cover transition-transform duration-300 transform hover:scale-105"
        />
      </div>
      <div>
        <div className="w-full flex items-center pt-3">
          <Dot size={50} />
          <h1 className="text-sm font-bricolage lowercase">{category}</h1>
        </div>
        <div className="px-2 space-y-3">
          <h1 className="font-bricolage text-[40px] lowercase">
            {articleTitle}
          </h1>
          <p className="font-instrument text-sm">{articleDescription}</p>
        </div>
      </div>
    </div>
  );
}
