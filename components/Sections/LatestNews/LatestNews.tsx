"use client";

import { Dot } from "lucide-react";

export default function LatestNews() {
  return (
    <section className="h-[100vh] border border-black">
      <div className="border border-black">
        <div className="flex items-center">
            <Dot size={50}/>
            <h1>Latest News</h1>
        </div>
      </div>
    </section>
  );
}
