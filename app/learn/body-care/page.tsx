"use client";

import ManifestoSection from "@/components/Sections/about/Manifesto";
import Parallex from "@/components/Sections/about/Parallex";
import GoodToKnow from "@/components/Sections/about/goodToKnow";
import Link from "next/link";

export default function BodyCare() {
  return (
    <>
      <div className="relative h-[100vh] flex justify-center items-center overflow-hidden">
        <div
          className="w-1/2 h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/waves.jpg')" }}
        ></div>
        <div
          className="w-1/2 h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/girl.png')" }}
        ></div>
        {/* Text Section */}
        <div className="flex flex-col justify-center items-center text-center space-y-5 absolute">
          <h1 className="text-white font-bricolage text-5xl md: lg:text-7xl xl:text-9xl mt-4 relative lowercase">
            Body care.
          </h1>
        </div>
      </div>
      <ManifestoSection />
      <Parallex />
      <GoodToKnow />
      <div className="h-[100vh] flex flex-col md:flex-row">
        <Link
          href=""
          className="w-full h-1/2 md:w-1/2 md:h-full flex flex-col justify-center items-center space-y-4 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/ocean.jpg')" }}
        >
          <h1 className="lowercase text-5xl md:text-6xl text-white font-bricolage">
            Bod care.
          </h1>
          <p className="text-md text-white font-bricolage">
            Nutrition and regeneration for all.
          </p>
        </Link>
        <Link
          href=""
          className="w-full h-1/2 md:w-1/2 md:h-full flex flex-col justify-center items-center space-y-4 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/matas.jpg')" }}
        >
          <h1 className="lowercase text-5xl md:text-6xl text-white font-bricolage">
            Active ingredients.
          </h1>
          <p className="text-md text-white font-bricolage">
            A pioneer in sourcing precious assets.
          </p>
        </Link>
      </div>
    </>
  );
}
