import AboutUS from "@/components/Sections/home/AboutUs";
import CallToAction from "@/components/Sections/home/CallToAction";
import CallToActionVideo from "@/components/Sections/home/CallToActionVideo";
import ColdEmail from "@/components/Sections/home/ColdEmailSubscription";
import Hero from "@/components/Sections/home/Hero";
import IngredientsSection from "@/components/Sections/home/IngredientsSection";
import LatestNews from "@/components/Sections/home/LatestNews";
import Parallex from "@/components/Sections/home/Parallex";
import PopularItems from "@/components/Sections/home/PopularItems";
import Reviews from "@/components/Sections/home/Reviews";
import ShopSections from "@/components/Sections/home/ShopSections";

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularItems />
      <ShopSections />
      <IngredientsSection />
      <CallToActionVideo />
      <AboutUS />
      <Reviews />
      <Parallex />
      <CallToAction />
      <CallToAction />
      <CallToAction />
      <CallToAction />
      <CallToAction />
      <CallToAction />
      <LatestNews />
      <ColdEmail />
    </div>
  );
}
