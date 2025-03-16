"use client";

import { Dot } from "lucide-react";
import NewsCard, { NewsCardProp } from "../../section-components/home/NewsCard";
import CustomButton from "@/components/common/CustomButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const dummyArticles: NewsCardProp[] = [
  {
    imageURL: "/images/face.jpg",
    alt: "Girl Skin",
    category: "Knowledge",
    articleTitle: "Why use facial oils?",
    articleDescription:
      "Facial oils are an integral part of any skincare routine: whatever your skin type, there's an oil to suit it.",
  },
  {
    imageURL: "/images/body.jpg",
    alt: "Body Skin",
    category: "treatment",
    articleTitle: "day care.",
    articleDescription:
      "Essenza Cosmetics dreamt up, developed and then handmade in France, our ligne blanche is a range of day care products certified organic and natural by ECOCERT.",
  },
  {
    imageURL: "/images/girl.png",
    alt: "Body Skin",
    category: "treatment",
    articleTitle: "the skin.",
    articleDescription:
      "The skin is the only organ on the outside of the body. It is a key organ that protect us.",
  },
  {
    imageURL: "/images/hero2.jpg",
    alt: "Body Skin",
    category: "treatment",
    articleTitle: "it's cold outside.",
    articleDescription:
      "The cold weather is getting colder by the day, and our skin is being put to test.",
  },
];

export default function LatestNews() {
  return (
    <section className="h-[100vh]">
      {/* Header Section */}
      <div className="flex justify-between">
        <div className="flex items-center">
          <Dot size={100} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bricolage lowercase">
            Latest News
          </h1>
        </div>
        {/* Button (Only visible on Desktop) */}
        <div className="hidden md:flex items-center pr-7">
          <CustomButton buttonText="read journal" size="lg" variant="outline" />
        </div>
      </div>

      {/* Grid Layout for Desktop */}
      <div className="hidden md:flex px-12">
        {dummyArticles.map((article, index) => (
          <NewsCard key={index} {...article} />
        ))}
      </div>

      {/* Carousel for Mobile View */}
      <div className="md:hidden px-5">
        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 10000,
            }),
          ]}
        >
          <CarouselContent>
            {dummyArticles.map((article, index) => (
              <CarouselItem key={index}>
                <NewsCard {...article} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Mobile Button (hidden on Desktop) */}
      <div className="px-10 py-8 flex md:hidden items-center">
        <CustomButton buttonText="read journal" size="lg" variant="outline" />
      </div>
    </section>
  );
}
