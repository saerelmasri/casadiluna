"use client";

import CustomButton from "../../common/CustomButton";
import { Carousel, CarouselContent, CarouselItem } from "../../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    type: "single",
    image: "/images/hero2.jpg",
    title: "clean & natural skincare.",
    description: "Made in France and 100% vegan.",
    buttonText: "discover our products",
  },
  {
    type: "single",
    image: "/images/hero1.jpg",
    title: "ethical beauty, sustainable impact.",
    description:
      "Committed to sustainable beauty and minimizing our impact on the planet.",
    buttonText: "about us",
  },
  {
    type: "single",
    image: "/images/hero4.jpg",
    title: "transform your skin now.",
    description:
      "Tone your skin and reduce cellulite with our X body selection.",
    buttonText: "shop beauty tools",
  },
];

export default function Hero() {
  return (
    <section className="min-h-[100vh] flex">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 10000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, key) => (
            <CarouselItem key={key}>
              <div className="relative w-full h-[100vh] flex items-center">
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <div className="text-white px-6 py-16 z-10 absolute left-10">
                  <h1 className="text-5xl md:text-6xl lg:text-8xl font-bricolage font-medium max-w-3xl">
                    {slide.title}
                  </h1>
                  <p className="leading-tight max-w-2xl font-instrument text-md mt-4">
                    {slide.description}
                  </p>
                  <div className="flex py-2">
                    <CustomButton
                      buttonText={slide.buttonText}
                      href=""
                      size="sm"
                      variant="secondary"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
