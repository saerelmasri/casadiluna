import ScrollTextReveal from "@/components/Sections/AboutUs/AboutUs";
import CallToActionVideo from "@/components/Sections/CallToAction/CallToActionVideo";
import Hero from "@/components/Sections/Hero";
import IngredientsSection from "@/components/Sections/Ingredients/IngredientsSection";
import PopularItems from "@/components/Sections/PopulatItems/PopularItems";
import ShopSections from "@/components/Sections/ShopSection/ShopSections";

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularItems />
      <ShopSections />
      <IngredientsSection/>
      <CallToActionVideo/>
      <ScrollTextReveal/>
    </div>
  );
}
