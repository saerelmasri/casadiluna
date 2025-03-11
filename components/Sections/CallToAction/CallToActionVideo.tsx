"use client";

export default function CallToActionVideo() {
  return (
    <section className="relative min-h-[110vh] flex overflow-hidden">
      <div
        className="w-[50%] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: "url('/images/texture1.jpg')"}}
      ></div>
      <div className="w-[50%] bg-[#f1e4d3] flex flex-col">
        <div className="border border-black h-[50%] w-full">
            <h1>Routines for all skin types.</h1>
        </div>
        <div className="border border-black h-[50%] w-full"></div>
      </div>
    </section>
  );
}
