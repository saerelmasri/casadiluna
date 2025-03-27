"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Journal() {
  return (
    <>
      <div
        className="relative h-[50vh] bg-cover bg-center flex flex-col justify-center items-center overflow-hidden space-y-5"
        style={{
          backgroundImage: "url('/images/hero2.jpg')",
        }}
      >
        <h1 className="font-bricolage lowercase text-white text-5xl md:text-7xl lg:max-w-[40%] text-center">
          Journal
        </h1>
        <p className="font-instrument lowercase text-white text-5xl md:text-xs lg:max-w-[40%] text-center">
          Insights into health and well-being - expert tips, skincare tutorials,
          and more...
        </p>
      </div>
      <div className=" bg-white flex flex-col">
        <div className="flex space-x-5 px-14 py-8">
          {["All post", "Interview", "Knowledge", "Treatment"].map(
            (item, key) => (
              <Link
                href=""
                key={key}
                className="font-instrument lowercase text-sm relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
              </Link>
            )
          )}
        </div>
        <Separator className="w-full" />
      </div>
      <div className=" bg-white flex flex-col">
        <div className="flex space-x-5 px-14 py-8">
          {["All post", "Interview", "Knowledge", "Treatment"].map(
            (item, key) => (
              <Link
                href=""
                key={key}
                className="font-instrument lowercase text-sm relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
              </Link>
            )
          )}
        </div>
        <Separator className="w-full" />
      </div>
    </>
  );
}
