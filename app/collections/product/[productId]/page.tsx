/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import OtherProducts from "@/components/Sections/product/OtherProducts";
import ProductBenefits from "@/components/Sections/product/ProductBenefits";
import ProductDrawer from "@/components/Sections/product/ProductDrawer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dot, Star } from "lucide-react";
import Link from "next/link";

export default function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = params;
  console.log("ProductId:", productId);
  

  const highlights = [
    "Cruelty-Free",
    "Radiant Finish",
    "Vegan",
    "Dermatologist Tested",
    "Non-Comedogenic",
  ];

  return (
    <div className="w-full bg-[#faf4f0]">
      <div className="w-full flex">
        {/* Left: Product Image Gallery with Parallax Effect */}
        <div className="w-[60%] h-screen overflow-hidden relative">
          <div className="absolute inset-0 overflow-y-auto no-scrollbar">
            {/* Image 1 */}
            <div className="h-screen w-full">
              <img
                src="/images/cleanser.jpg"
                alt="Main product"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="h-screen w-full flex">
              <div className="w-1/2 h-full">
                <img
                  src="/images/cleanser.jpg"
                  alt="Product detail 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/2 h-full">
                <img
                  src="/images/cleanser.jpg"
                  alt="Product detail 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Right: Sticky Product Details */}
        <div className="w-[40%] h-screen px-6 py-14 space-y-6 flex flex-col sticky top-0 overflow-y-auto bg-[#faf4f0] no-scrollbar">
          {/* Tags */}
          <div className="flex space-x-3">
            {["Cleanse", "Nourish"].map((tag) => (
              <div key={tag} className="border px-2 py-1 bg-white rounded">
                <p className="text-[10px] font-medium uppercase">{tag}</p>
              </div>
            ))}
          </div>

          {/* Product Title & Price */}
          <div className="space-y-1">
            <h1 className="font-bricolage text-4xl lowercase">Cleansing oil</h1>
            <p className="font-bricolage text-lg">€48,00</p>
          </div>

          {/* Review Stars */}
          <div className="flex space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="black" color="black" />
            ))}
          </div>

          <Separator />

          {/* Volume info */}
          <div className="space-y-2">
            <p className="font-instrument text-xs opacity-80">
              Volume: <span className="opacity-100">100ml</span>
            </p>
            <div className="w-fit px-3 py-1 rounded-2xl bg-black">
              <p className="text-white font-instrument text-xs">100 ml</p>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="w-full">
            <Button className="w-full rounded-2xl text-white">
              <Link href="">Buy Now</Link>
            </Button>
          </div>

          {/* Product Description */}
          <div className="text-xs font-instrument text-justify opacity-90 leading-relaxed">
            <p>
              Discover the pleasure of cleansing with Nüssa Cleansing oil.
              Formulated with 100% natural ingredients, this delicate,
              ultra-sensorial oil is highly effective at dissolving make-up and
              eliminating impurities, while preserving the skin's softness.
              Enriched with cold-pressed organic plant oils and vitamin E, it
              provides intense hydration for radiant, healthy-looking skin.
            </p>
          </div>

          {/* Ingredients Drawer */}
          <div className="w-full">
            <ProductDrawer />
          </div>

          {/* Accordions */}
          <div className="w-full space-y-2">
            <Accordion
              type="single"
              collapsible
              className="w-full border-t border-b"
            >
              <AccordionItem value="skin-type">
                <AccordionTrigger className="font-instrument font-light text-xs">
                  Skin type
                </AccordionTrigger>
                <AccordionContent className="font-instrument">
                  Whether your skin is dry, oily, combination or sensitive,
                  Nüssa Cleansing oil is ideal for all skin types. Its gentle,
                  moisturizing action is ideal for daily use. Use in the
                  evening.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="w-full border-b">
              <AccordionItem value="eco">
                <AccordionTrigger className="font-instrument font-light text-xs">
                  Eco-responsibility
                </AccordionTrigger>
                <AccordionContent className="font-instrument">
                  Handcrafted in the South of France, guaranteeing quality and
                  expertise. Each product is the result of unique craftsmanship.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <div className="h-auto w-full p-8 lg:px-7 lg:py-5 space-y-4">
        <h1 className="font-bricolage text-4xl md:text-5xl lg:text-5xl lowercase text-wrap text-black">
          How to use.
        </h1>
        <div className="flex items-center">
          <Dot size={32} color="black" />
          <p className="font-instrument text-md text-black">
            Shake well before each use, and keep eyes closed during application.{" "}
          </p>
        </div>
        <div className="flex items-center">
          <Dot size={32} color="black" />
          <p className="font-instrument text-md text-black">
            Hold 10 to 12 inches away from face, and spray in a circular motion
            for even distribution on skin.
          </p>
        </div>
      </div>

      {/* Highlights Marquee Section */}
      <div className="w-full bg-[#faf4f0] border-t border-b border-black/10 overflow-hidden">
        <div className="py-6 overflow-hidden relative group">
          <div className="whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused] flex gap-12 px-6">
            {[...highlights, ...highlights].map((item, index) => (
              <span
                key={index}
                className="text-md md:text-lg font-instrument text-black opacity-90"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ProductBenefits />

      <OtherProducts />
    </div>
  );
}
