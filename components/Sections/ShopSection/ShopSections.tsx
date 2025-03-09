"use client";

import SectionCard from "./SectionCard";

const cardContent = [
  {
    title: "face",
    buttonTitle: "check face",
    image: "/images/face.jpg",
  },
  {
    title: "beauty tools",
    buttonTitle: "check beauty tools",
    image: "/images/tools.jpg",
  },
  {
    title: "body",
    buttonTitle: "check body",
    image: "/images/body.jpg",
  },
];

export default function ShopSections() {
  console.log(cardContent);

  return (
    <section className="relative min-h-[90vh] flex overflow-hidden">
      {cardContent.map((content, index) => {
        return (
          <SectionCard
            key={index}
            title={content.title}
            buttonTitle={content.buttonTitle}
            image={content.image}
          />
        );
      })}
    </section>
  );
}
