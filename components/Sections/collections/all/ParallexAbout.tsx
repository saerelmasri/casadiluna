import CustomButton from "@/components/common/CustomButton";
import { Dot } from "lucide-react";

export default function ParallexAbout() {
  return (
    <div
      className="py-16 w-full flex flex-col md:flex-row justify-between bg-black"
        style={{
          backgroundImage: "url('/images/body.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
    >
      <div className="w-full flex flex-col justify-center">
        <div className="px-4 md:px-12 py-4 space-y-8">
          <div className="flex items-center">
            <Dot color="white" />
            <p className="font-instrument text-sm md:text-xs text-white">
              about us
            </p>
          </div>
          <h1 className="font-bricolage text-3xl md:text-6xl text-white max-w-4xl">
            We believe in beauty that respects nature and enhances your skin.
          </h1>
          <div className="max-w-[200px]">
            <CustomButton buttonText="about us" variant="secondary" size="sm"/>
          </div>
        </div>
      </div>
    </div>
  );
}
