"use client";

import { Dot } from "lucide-react";

export default function BlogPost() {
  return (
    <>
      <div className="h-[90vh] flex">
        <div
          className="w-[50%] relative bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: "url('/images/hero2.jpg')",
          }}
        />
        <div className="w-[50%] bg-[#321e1e] flex flex-col justify-center">
          <div className="w-full flex items-center space-x-5">
            <Dot size={52} color="white" />
            <p className="font-instrument lowercase text-white text-sm">
              Treatment
            </p>
            <p className="font-instrument lowercase text-white text-sm">|</p>
            <p className="font-instrument lowercase text-white text-sm">
              Jan, 23, 2025
            </p>
            <p className="font-instrument lowercase text-white text-sm">|</p>
            <p className="font-instrument lowercase text-white text-sm">
              5 min read
            </p>
          </div>
          <h1 className="font-bricolage lowercase text-white text-7xl px-6">
            Day care.
          </h1>
        </div>
      </div>
    </>
  );
}
