"use client";

import { Dot } from "lucide-react";
import NewsCard, { NewsCardProp } from "./NewsCard";
import CustomButton from "@/components/common/CustomButton";

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
      <div className="flex justify-between px-6">
        <div className="flex items-center">
          <Dot size={100} />
          <h1 className="text-5xl font-bricolage lowercase">Latest News</h1>
        </div>
        <div className="flex items-center pr-7">
          <CustomButton buttonText="read journal" size="lg" variant="outline" />
        </div>
      </div>
      <div className="flex px-12">
        {dummyArticles.map((article, index) => (
          <NewsCard
            key={index}
            imageURL={article.imageURL}
            alt={article.alt}
            articleDescription={article.articleDescription}
            articleTitle={article.articleTitle}
            category={article.category}
          />
        ))}
      </div>
    </section>
  );
}
