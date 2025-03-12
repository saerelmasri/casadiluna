import ScrollTextReveal from "@/components/Sections/AboutUs/AboutUs";
import CallToActionVideo from "@/components/Sections/CallToAction/CallToActionVideo";
import Hero from "@/components/Sections/Hero";
import IngredientsSection from "@/components/Sections/Ingredients/IngredientsSection";
import ShopSections from "@/components/Sections/ShopSection/ShopSections";
// import PopularItems from "@/components/PopularItems";

export default function Home() {
  return (
    <div>
      <Hero />
      <ShopSections />
      {/* <PopularItems /> */}
      <IngredientsSection/>
      <CallToActionVideo/>
      <ScrollTextReveal/>
    </div>
  );
}
