"use client";

import { Star } from "lucide-react";

export default function Reviews() {
  return (
    <div className="h-[100vh] bg-[#faf4f0] w-full flex">
      <div className="w-1/2 p-5">
        <div className="w-full flex items-center space-x-2  px-5">
          <div className="flex">
            <Star size={14} fill="black" />
            <Star size={14} fill="black" />
            <Star size={14} fill="black" />
            <Star size={14} fill="black" />
            <Star size={14} fill="black" />
          </div>
          <p className="font-instrument text-sm">Elodie M.</p>
        </div>
        <div className="px-3 py-2">
          <p className="font-bricolage text-4xl">
            After almost 2 years of use, I can attest that my sensitive skin
            loves this day oil! I pair it with the night oil, and my skin feels
            soft and supple again. Like the night oil, the scent is divine.
          </p>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-[90%] h-[90%] bg-black"></div>
      </div>
    </div>
  );
}
