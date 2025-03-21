import { Dot } from "lucide-react";

export default function ManifestoSection() {
  return (
    <section className="relative h-[120vh] flex flex-col md:flex-row overflow-hidden">
      <div className="bg-[#f1e4d3] w-full h-[500px] lg:h-full lg:w-[50%] flex flex-col relative">
        <div className="h-auto lg:h-[50%] w-full p-8 lg:px-7 lg:py-5 space-y-[250px] z-10">
          <div className="flex items-center">
            <Dot size={32} />
            <p className="lowercase font-instrument text-xs">Manifesto</p>
          </div>
          <h1 className="font-bricolage text-4xl md:text-5xl lg:text-6xl lowercase text-wrap text-[#321e1e]">
            Every skin deserves exceptional care.
          </h1>
        </div>
        <div className="h-auto lg:h-[50%] w-full bg-[#f1e4d3]">
          <div className="flex flex-col absolute items-start justify-end bottom-0 space-y-4 px-8 py-6 lg:px-7 lg:py-5">
            <p className="font-instrument text-md ">
              Our beauty products, certified organic and natural by Ecocert
              according to Cosmos standards, are designed to deliver visible
              results while preserving our planet.
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-full p-8 lg:p-24 lg:w-[50%] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: "url('/images/texture1.jpg')" }}
      >
        <div className="w-52 md:w-72 lg:w-96 aspect-square">
          {/* <img
            src="/videos/aesthetic.gif"
            alt="Aesthetic Vid"
            className="w-full h-full object-cover"
          /> */}
        </div>
      </div>
    </section>
  );
}
