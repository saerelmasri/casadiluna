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
            We’re a modern, mindful skincare destination — built on the belief
            that beauty should be intentional, elevated, and rooted in care. Our
            mission is simple: to curate clean, effective skincare and wellness
            products that align with your skin’s needs and your values. Driven
            by a passion for skin health and sensory rituals, we thoughtfully
            select products that deliver results while honoring the art of
            self-care. Through trusted guidance, elegant routines, and
            ingredient transparency, we’re here to help you feel confident in
            your skin — every single day.
          </p>
          <div className="flex justify-center items-center py-6">
            <CustomButton
              buttonText="Learn more"
              variant={"outlineTransparent"}
              href="/learn/about-us"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
