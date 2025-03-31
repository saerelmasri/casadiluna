"use client";

export default function Layout() {
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
    </>
  );
}
