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
            Founded from a passion for elevated skincare and a desire for real
            results, this platform was born out of personal experience — the
            kind that searches endlessly for comfort, clarity, and confidence in
            every product used.
          </h1>
        </div>
        <div className="h-full w-full bg-[#f1e4d3]">
          <div className="flex flex-col absolute items-start bottom-0 space-y-4 px-8 py-4 lg:px-7 lg:py-9">
            <p className="font-instrument text-sm text-black">
              Disillusioned by overwhelming claims and ingredient confusion, we
              set out to create a space that cuts through the noise — curating
              only what works, what feels good, and what aligns with modern,
              mindful beauty values.
            </p>
            <p className="font-instrument text-sm text-black">
              Every product featured here is handpicked — chosen for its
              integrity, innovation, and intention. From heritage formulas to
              breakthrough actives, we believe skincare should be a ritual, not
              a routine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
