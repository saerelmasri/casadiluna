import { Dot } from "lucide-react";

export default function Parallex() {
  return (
    <div
      className="h-[80vh] w-full flex flex-col md:flex-row justify-between bg-[#faf4f0]"
      style={{
        backgroundImage: "url('/images/body.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full md:w-[60%]">
        <div className="px-2 md:px-6 py-4 space-y-4">
          <div className="flex items-center">
            <Dot color="white" />
            <p className="font-instrument text-sm md:text-xs text-white">
              take up the challenge
            </p>
          </div>
          <h1 className="font-bricolage text-5xl md:text-6xl text-white">
            transform your skin
          </h1>
        </div>
      </div>
      <div className="w-full md:w-[40%] flex justify-center items-end py-8">
        <div className="w-[80%]  bg-white flex flex-col space-y-2 p-6">
          <h1 className="font-bricolage text-lg">Awaken Radiance, Naturally</h1>
          <p className="font-instrument text-[13px]">
            Nature knows how to renew — and so does your skin. Our curated
            selection of organic and botanical-rich skincare is designed to
            support the skin’s natural rhythm. With plant-based ingredients,
            essential oils, and nutrient-rich extracts, these formulas help to
            hydrate, soothe, and restore balance over time. Embrace a gentle,
            effective ritual — and reveal skin that looks and feels revitalized.
          </p>
        </div>
      </div>
    </div>
  );
}
