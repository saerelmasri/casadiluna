"use client";

import CustomButton from "@/components/common/CustomButton";

export default function IngredientsSection() {
  return (
    <section
      className="relative min-h-[120vh] flex overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg.jpg')", opacity: "0.9" }}
    >
      <div className="absolute top-0 left-0 max-w-[40%] p-6">
        <div className="py-14 pl-10 space-y-4">
          <h2 className="text-6xl font-bricolage lowercase text-wrap">
            Precious ingredients sourcing.
          </h2>
          <p className="font-instrument">
            Ingredient sourcing is a crucial step, reflecting our commitment to
            quality and ethics. We carefully select precious, natural active
            ingredients from the best organic crops and wild harvesting. Our raw
            ingredients are chosen for their exceptional properties on the skin.
          </p>
          <div className=" w-full flex flex-col items-start z-10">
            <CustomButton
              buttonText="all ingredients"
              href=""
              variant="outline"
              size="lg"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-40 w-[20%] h-[50%] p-10 flex flex-col justify-center">
        <div
          className="bg-cover bg-center w-full h-full"
          style={{ backgroundImage: "url('/images/flowers.jpg')" }}
        />
        <p className="font-instrument text-black text-sm">
          Complex of botanical and wild plants
        </p>
      </div>

      <div className="absolute top-50 right-150 w-[20%] h-[50%] p-10 flex flex-col justify-center">
        <div
          className="bg-cover bg-center w-full h-full"
          style={{ backgroundImage: "url('/images/fruits.jpg')" }}
        />
        <p className="font-instrument text-black text-sm">
          Precious marula oil
        </p>
      </div>

      <div className="absolute bottom-10 right-40 w-[20%] h-[50%] p-10 flex flex-col justify-center">
        <div
          className="bg-cover bg-center w-full h-full"
          style={{ backgroundImage: "url('/images/olive.jpg')" }}
        />
        <p className="font-instrument text-black text-sm">Organic olive oil</p>
      </div>
    </section>
  );
}
