import SectionCard from "../../section-components/home/SectionCard";

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
  return (
    <section className="relative min-h-[80vh] flex flex-col lg:flex-row overflow-hidden">
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
