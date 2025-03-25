"use client";

import { useEffect, useState } from "react";
import { Dot } from "lucide-react";
import ManifestoSection from "@/components/Sections/about/Manifesto";
import Parallex from "@/components/Sections/about/Parallex";
import GoodToKnow from "@/components/Sections/about/goodToKnow";
// import Link from "next/link";

export default function Shop() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative h-[100vh] bg-[#3e2626] flex justify-center items-center overflow-hidden">
        {/* Left Image */}
        <div
          className="absolute left-10 top-1/5 md:top-1/4 w-[200px] h-[300px] md:w-[400px] md:h-[500px] bg-cover bg-center transition-transform duration-500"
          style={{
            backgroundImage: "url('/images/body.jpg')",
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        />

        {/* Right Image */}
        <div
          className="absolute right-10 top-1/3 w-[250px] h-[350px] md:w-[350px] md:h-[450px] bg-cover bg-center transition-transform duration-500"
          style={{
            backgroundImage: "url('/images/body.jpg')",
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />

        {/* Text Section */}
        <div className="flex flex-col justify-center items-center text-center space-y-5">
          <div className="flex items-center space-x-2 z-10">
            <Dot color="white" size={24} />
            <p className="text-white text-md md:text-lg font-instrument lowercase">
              behind the brand
            </p>
          </div>
          <h1 className="text-white font-bricolage text-5xl md: lg:text-7xl xl:text-9xl mt-4 relative lowercase">
            How it all began.
          </h1>
        </div>
      </div>
      <ManifestoSection />
      <Parallex />
      <GoodToKnow />
      {/* <div className="h-[100vh] flex flex-col md:flex-row">
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
      </div> */}
    </>
  );
}
