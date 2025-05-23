import { Dot } from "lucide-react";

export default function Parallex() {
  return (
    <div
      className="h-[100vh] w-full flex flex-col md:flex-row justify-between bg-[#faf4f0]"
      style={{
        backgroundImage: "url('/images/body.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full md:w-[60%] flex items-center">
        <div className="px-4 md:px-6 py-4 space-y-4">
          <div className="flex items-center">
            <Dot color="white" />
            <p className="font-instrument text-sm md:text-xs text-white lowercase">
              Our Commitment
            </p>
          </div>
          <h1 className="font-bricolage text-5xl md:text-6xl text-white">
            Beauty With Intention
          </h1>
        </div>
      </div>
      <div className="w-full md:w-[40%] flex justify-center items-end py-8">
        <div className="w-[80%]  bg-white flex flex-col space-y-2 p-6">
          <h1 className="font-bricolage text-lg lowercase">Did you know?</h1>
          <p className="font-instrument text-[13px]">
            Every minute, the world loses forest land equal to 36 soccer fields,
            a crisis that fuels climate change and threatens biodiversity. It’s
            why we advocate for conscious beauty, spotlighting brands that honor
            the planet, its people, and all living things that depend on it.
          </p>
        </div>
      </div>
    </div>
  );
}
