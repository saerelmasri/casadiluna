import CustomButton from "@/components/common/CustomButton";
import { Dot } from "lucide-react";

export default function AboutUS() {
  return (
    <div className="h-[100vh] bg-[#faf4f0]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center p-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center items-center mb-4">
            <Dot size={42} />
            <h3 className="text-sm lowercase tracking-wider text-black">
              About Us
            </h3>
          </div>
          <p className="text-2xl md:text-3xl lg:text-3xl leading-relaxed font-bricolage">
            We are a forward-thinking company dedicated to innovation and
            excellence. Founded in 2015, our mission has been to create
            solutions that transform industries and improve lives. Our team of
            passionate experts works tirelessly to push boundaries and challenge
            conventions.
          </p>
          <div className="flex justify-center items-center py-6">
            <CustomButton
              buttonText="Learn more"
              variant={"outlineTransparent"}
              href=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
