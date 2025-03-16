"use client";

import { Dot } from "lucide-react";

export default function Parallex() {
  return (
    <div
      className="h-[80vh] w-full flex bg-[#faf4f0]"
      style={{
        backgroundImage: "url('/images/body.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-[60%]">
        <div className="px-6 py-4 space-y-4">
          <div className="flex items-center">
            <Dot color="white"/>
            <p className="font-instrument text-xs text-white">take up the challenge</p>
          </div>
          <h1 className="font-bricolage text-6xl text-white">transform your skin</h1>
        </div>
      </div>
      <div className="w-[40%] flex justify-center items-end py-8">
        <div className="w-[80%] h-[50%] bg-white border flex flex-col space-y-2 p-6">
          <h1 className="font-bricolage text-lg">Revitalised skin in 28 days.</h1>
          <p className="font-instrument text-[13px]">
            Organic cosmetics, rich in natural ingredients such as plant
            extracts, essential oils and vitamins, work in harmony with the skin
            to revitalise it in less than 28 days. Thanks to their composition
            free from harsh chemicals, they respect the natural balance of the
            epidermis, promoting better hydration, cell regeneration and reduced
            irritation.
          </p>
        </div>
      </div>
    </div>
  );
}
