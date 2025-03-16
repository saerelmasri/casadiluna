"use client";

import CustomButton from "@/components/common/CustomButton";

export default function CallToAction() {
  return (
    <section className="relative h-[100vh] flex flex-col md:flex-row overflow-hidden">
      <div className="bg-[#666a53] w-full h-[500px] lg:h-[110vh] lg:w-[50%] flex flex-col relative">
        <div className="h-auto lg:h-[50%] w-full p-8 lg:px-7 lg:py-5">
          <h1 className="font-bricolage text-4xl md:text-5xl lg:text-6xl lowercase text-wrap text-white">
            Commitments to the planet.
          </h1>
        </div>
        <div className="h-auto lg:h-[50%] w-full bg-[#666a53]">
          <div className="flex flex-col absolute items-start bottom-20 space-y-4 px-8 py-6 lg:px-7 lg:py-5">
            <p className="font-instrument text-sm text-white">
              Our commitment goes beyond beauty products. We aim to create a
              lasting positive impact on the environment and communities. Thanks
              to your orders on our Eshop, we are strengthening our commitment
              and continuing to replant trees around the world. Since 2018, we
              have replanted 200,000 trees, the equivalent of a small forest!
            </p>
            <CustomButton size="sm" buttonText="shop now" href="" variant="secondary" />
          </div>
        </div>
      </div>
      <div
        className="w-full p-8 lg:p-24 lg:w-[50%] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: "url('/images/tree.jpg')" }}
      >
      </div>
    </section>
  );
}
