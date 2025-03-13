"use client";

import CustomButton from "@/components/common/CustomButton";

export default function IngredientsSection() {
  return (
    <section
      className="relative min-h-[110vh] flex flex-col lg:flex-row overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg.jpg')", opacity: "0.9" }}
    >
      {/* Text and Button Section */}
      <div className="absolute top-0 left-0 w-full lg:max-w-[40%] p-6 z-10">
        <div className="py-14 lg:pl-10 space-y-4">
          <h2 className="text-4xl lg:text-6xl font-bricolage lowercase">
            Precious ingredients sourcing.
          </h2>
          <p className="font-instrument">
            Ingredient sourcing is a crucial step, reflecting our commitment to
            quality and ethics. We carefully select precious, natural active
            ingredients from the best organic crops and wild harvesting. Our raw
            ingredients are chosen for their exceptional properties on the skin.
          </p>
          <div className="w-full flex flex-col items-start">
            <CustomButton
              buttonText="all ingredients"
              href=""
              variant="default"
              size="lg"
            />
          </div>
        </div>
      </div>

      {/* Image Section 1 - Botanical Complex */}
      <div className="absolute bottom-30 left-2 md:bottom-20 md:left-10 lg:bottom-10 lg:left-40 w-[50%] lg:w-[20%] h-[30%] lg:h-[50%] p-6 flex flex-col">
        <div
          className="bg-cover bg-center w-full h-full"
          style={{ backgroundImage: "url('/images/flowers.jpg')" }}
        />
        <p className="font-instrument text-black text-sm text-left">
          Complex of botanical and wild plants
        </p>
      </div>

      {/* Image Section 2 - Precious Marula Oil */}
      <div className="hidden lg:block absolute top-50 right-2 md:top-1/2 md:right-10 lg:top-1/4 lg:right-20 w-[20%] h-[50%] p-6 flex-col justify-center">
        <div
          className="bg-cover bg-center w-full h-full"
          style={{ backgroundImage: "url('/images/fruits.jpg')" }}
        />
        <p className="font-instrument text-black text-sm text-left">
          Precious marula oil
        </p>
      </div>

      {/* Image Section 3 - Organic Olive Oil */}
      <div className="absolute w-[50%] bottom-2 right-2 lg:bottom-10 lg:right-150 lg:w-[20%] h-[30%] lg:h-[50%] p-6 flex flex-col justify-center">
        <div
          className="bg-cover bg-center w-full h-full"
          style={{ backgroundImage: "url('/images/olive.jpg')" }}
        />
        <p className="font-instrument text-black text-sm text-left">Organic olive oil</p>
      </div>
    </section>
  );
}
