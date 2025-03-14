"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ItemCard, { ItemProps } from "./ItemCard";

type ProductCarouselProps = {
  items: ItemProps[];
};

export default function ProductCarousel({ items }: ProductCarouselProps) {
  return (
    <Carousel
      opts={{ align: "center", }}
      className="relative w-full "
    >
      {/* Previous Button */}
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10" />
      <CarouselContent className="h-[90vh] flex">
        {items.map((item, index) => (
          <CarouselItem key={index} className="flex-none w-1/4 p-0">
            {" "}
            {/* Set width to 25% for 4 items per slide */}
            <ItemCard {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Next Button */}
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10" />
    </Carousel>
  );
}
