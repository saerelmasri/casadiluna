import SectionCard from "../../section-components/home/SectionCard";

const cardContent = [
  {
    title: "cleansers",
    buttonTitle: "check cleansers",
    image: "/images/cleanser.jpg",
  },
  {
    title: "moisturizers",
    buttonTitle: "check moisturizers",
    image: "/images/moisturizers.jpg",
  },
  {
    title: "serums",
    buttonTitle: "check serums",
    image: "/images/face.jpg",
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
