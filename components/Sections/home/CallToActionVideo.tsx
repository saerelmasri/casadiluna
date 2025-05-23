import CustomButton from "@/components/common/CustomButton";
import { Dot } from "lucide-react";

export default function CallToActionVideo() {
  return (
    <section className="relative h-[100vh] flex flex-col md:flex-row overflow-hidden">
      <div
        className="w-full p-8 lg:p-24 lg:w-[50%] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: "url('/images/texture1.jpg')" }}
      >
        <div className="w-52 md:w-72 lg:w-96 aspect-square">
          {/* <img
            src="/videos/aesthetic.gif"
            alt="Aesthetic Vid"
            className="w-full h-full object-cover"
          /> */}
        </div>
      </div>
      <div className="bg-[#f1e4d3] w-full h-[500px] lg:h-[110vh] lg:w-[50%] flex flex-col relative">
        <div className="h-auto lg:h-[50%] w-full p-8 lg:px-7 lg:py-5">
          <div className="flex items-center">
            <Dot size={32} />
            <p className="lowercase font-instrument text-xs">
              Nature for your skin
            </p>
          </div>
          <h1 className="font-bricolage text-4xl md:text-5xl lg:text-6xl lowercase text-wrap text-[#321e1e]">
            Routines for Every Skin Type
          </h1>
        </div>
        <div className="h-auto lg:h-[50%] w-full bg-[#f1e4d3]">
          <div className="flex flex-col absolute items-start bottom-20 space-y-4 px-8 py-6 lg:px-7 lg:py-5">
            <p className="font-instrument text-md ">
              Every skin deserves exceptional care — rooted in nature and
              elevated by science. Our curated selection brings together
              certified organic formulas and rare botanicals, enriched with
              powerful actives to nourish, protect, and enhance all skin types.
              From sensitive to resilient, oily to dry — discover rituals that
              honor your skin’s unique rhythm.
            </p>
            <CustomButton buttonText="shop now" href="/collections/all" variant="default" />
          </div>
        </div>
      </div>
    </section>
  );
}
