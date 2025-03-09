"use client";

import { Dot } from "lucide-react";

export default function PopularItems() {
  return (
    <section className="relative min-h-[100vh] flex overflow-hidden">
      <div className="w-full">
        <div className="w-full flex items-center border border-black py-6 space-x-1">
          <Dot size={100} />
          <h1 className="font-bricolage text-5xl ">best sellers</h1>
        </div>
      </div>
    </section>
  );
}
