import { Dot } from "lucide-react";

export default function GoodToKnow() {
  return (
    <section className="relative h-[120vh] flex flex-col lg:flex-row overflow-hidden">
      <div
        className="w-full p-8 lg:p-24 lg:w-[50%] h-[400px] lg:h-full bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: "url('/images/tree.jpg')" }}
      ></div>
      <div className="bg-[#f1e4d3] w-full h-full lg:w-[50%] flex flex-col relative">
        <div className="h-auto lg:h-[50%] w-full p-8 lg:px-7 lg:py-5">
          <div className="flex items-center">
            <Dot size={32} />
            <p className="lowercase font-instrument text-xs">Good to know</p>
          </div>
          <h1 className="font-bricolage text-4xl md:text-5xl lg:text-5xl lowercase text-wrap">
            Founded by Sandrine Sixtine, Nüssa is the result of her search for
            natural solutions to soothe her acne and rosacea-prone skin.
          </h1>
        </div>
        <div className="h-full w-full bg-[#f1e4d3]">
          <div className="flex flex-col absolute items-start bottom-0 space-y-4 px-8 py-4 lg:px-7 lg:py-9">
            <p className="font-instrument text-sm text-black">
              Disappointed by conventional cosmetics, she discovered the power
              of plants and phytotherapy. Unable to find suitable skin care
              products, she decided to create clean, natural products, free from
              fashion or marketing.
            </p>
            <p className="font-instrument text-sm text-black">
              Sandrine surrounds herself with biologists and an R&D team to
              develop gentle, effective skincare products using organic and
              natural ingredients. The products are made in France, respecting
              traditional craftsmanship, and are suitable for all skin types,
              even the most sensitive. Nüssa formulas are water-free, using
              cold-pressed precious oils and patented active ingredients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
