"use client";

import Image from "next/image";

export default function ProductGallery({ images }: { images: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src={images[0]}
        alt="Main product"
        width={500}
        height={500}
        className="rounded-2xl"
      />
      <div className="flex gap-4">
        {images.slice(1).map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`Gallery image ${i}`}
            width={240}
            height={240}
            className="rounded-2xl"
          />
        ))}
      </div>
    </div>
  );
}
