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
              Our packaging
            </p>
          </div>
          <h1 className="font-bricolage text-5xl md:text-6xl text-white">
            Fully biodegradable and compostable
          </h1>
        </div>
      </div>
      <div className="w-full md:w-[40%] flex justify-center items-end py-8">
        <div className="w-[80%]  bg-white flex flex-col space-y-2 p-6">
          <h1 className="font-bricolage text-lg lowercase">Did you know?</h1>
          <p className="font-instrument text-[13px]">
            Worldwide, the equivalent of 36 soccer pitches of forest disappear
            every minute. In addition, deforestation is responsible for 15% of
            annual global CO2 emissions, and therefore plays an important role
            in climate change. The lives of 80% of animals depend on forests, as
            do those of the millions of people who live and work in them.
          </p>
        </div>
      </div>
    </div>
  );
}
