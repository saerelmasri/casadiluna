"use client";

import CustomButton from "@/components/common/CustomButton";
import { Dot } from "lucide-react";

export default function CallToActionVideo() {
  return (
    <section className="relative md:min-h-[100vh] flex flex-col md:flex-row overflow-hidden">
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
          <div className="flex items-center space-x-2">
            <Dot size={42} />
            <p className="lowercase font-instrument">Nature for your skin</p>
          </div>
          <h1 className="font-bricolage text-4xl md:text-5xl lg:text-7xl lowercase text-wrap text-[#321e1e]">
            Routines for all skin types.
          </h1>
        </div>
        <div className="h-auto lg:h-[50%] w-full bg-[#f1e4d3]">
          <div className="flex flex-col absolute items-start bottom-0 space-y-4 px-8 py-6 lg:px-7 lg:py-5">
            <p className="font-instrument text-md lg:text-lg">
              At Nüssa, every skin deserves exceptional care. Our certified
              organic and natural formulas combine rare botanical plants and
              powerful active ingredients, carefully selected to nourish,
              protect and enhance every skin type.
            </p>
            <CustomButton
              buttonText="shop now"
              href=""
              variant="default"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
