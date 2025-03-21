"use client";

import { useEffect, useState } from "react";
import { Dot } from "lucide-react";
import ManifestoSection from "@/components/Sections/about/Manifesto";
import Parallex from "@/components/Sections/about/Parallex";
import GoodToKnow from "@/components/Sections/about/goodToKnow";
import Link from "next/link";

export default function Shop() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative h-[120vh] bg-[#3e2626] flex justify-center items-center overflow-hidden">
        {/* Left Image */}
        <div
          className="absolute left-10 top-1/4 w-[300px] h-[400px] bg-cover bg-center transition-transform duration-500"
          style={{
            backgroundImage: "url('/images/body.jpg')",
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        />

        {/* Right Image */}
        <div
          className="absolute right-10 top-1/3 w-[250px] h-[350px] bg-cover bg-center transition-transform duration-500"
          style={{
            backgroundImage: "url('/images/body.jpg')",
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />

        {/* Text Section */}
        <div className="flex flex-col justify-center items-center text-center space-y-[100px]">
          <div className="flex items-center space-x-2">
            <Dot color="white" size={24} />
            <p className="text-white text-xs font-instrument lowercase">
              behind the brand
            </p>
          </div>
          <h1 className="text-white font-bricolage text-7xl mt-4 relative">
            how it all began.
          </h1>
        </div>
      </div>
      <ManifestoSection />
      <Parallex />
      <GoodToKnow />
      <div className="h-[100vh] flex">
        <Link href="" className="border border-black w-1/2 flex flex-col justify-center items-center space-y-4">
          <h1 className="lowercase text-5xl text-black font-bricolage">
            Bod care.
          </h1>
          <p className="text-md text-black font-bricolage">
            Nutrition and regeneration for all.
          </p>
        </Link>
        <Link href="" className="border border-black w-1/2 flex flex-col justify-center items-center space-y-4">
          <h1 className="lowercase text-5xl text-black font-bricolage">
            Active ingredients.
          </h1>
          <p className="text-md text-black font-bricolage">
            A pioneer in sourcing precious assets.
          </p>
        </Link>
      </div>
    </>
  );
}
