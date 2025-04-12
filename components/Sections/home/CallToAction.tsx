import CustomButton from "@/components/common/CustomButton";

export default function CallToAction() {
  return (
    <section className="relative h-[100vh] flex flex-col lg:flex-row overflow-hidden">
      <div className="bg-[#666a53] w-full h-[500px] lg:h-[110vh] lg:w-[50%] flex flex-col relative">
        <div className="h-auto lg:h-[50%] w-full p-8 lg:px-7 lg:py-5">
          <h1 className="font-bricolage text-4xl md:text-5xl lg:text-6xl lowercase text-wrap text-white">
            Commitments to the planet.
          </h1>
        </div>
        <div className="h-auto lg:h-[50%] w-full bg-[#666a53]">
          <div className="flex flex-col absolute items-start bottom-20 space-y-4 px-8 py-4 lg:px-7 lg:py-9">
            <p className="font-instrument text-sm text-white">
              Our commitment to beauty is intertwined with a deeper respect for
              the world we share. We believe in offering products that honor
              both your skin and the environment, carefully selecting brands
              that uphold sustainable practices, ethical sourcing, and
              eco-conscious packaging. Through every purchase, you contribute to
              a global movement toward more mindful, responsible beauty — one
              that respects nature’s resources and supports positive change.
            </p>
            <CustomButton
              size="sm"
              buttonText="shop now"
              href="/collections/all"
              variant="secondary"
            />
          </div>
        </div>
      </div>
      <div
        className="w-full p-8 lg:p-24 lg:w-[50%] h-[400px] lg:h-full bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: "url('/images/tree.jpg')" }}
      ></div>
    </section>
  );
}
