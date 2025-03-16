import CustomButton from "@/components/common/CustomButton";
import { Input } from "@/components/ui/input";
import { MailOpen } from "lucide-react";

export default function ColdEmail() {
  return (
    <section className="h-auto md:h-[50vh] bg-[#321e1e] flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div
          className="w-full h-64 md:h-[80%] bg-center bg-cover"
          style={{ backgroundImage: "url('/images/products.jpg')" }}
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col px-6 py-8 md:py-5 justify-center">
        {/* Icon */}
        <div className="w-full p-6 flex items-center">
          <MailOpen color="white" size={50} strokeWidth={1.5} />
        </div>

        {/* Text */}
        <div className="w-full p-6 text-center md:text-left">
          <p className="font-bricolage text-white text-2xl md:text-4xl lowercase">
            Subscribe for inspiring stories, offers & news.
          </p>
        </div>

        {/* Input & Button */}
        <div className="w-full p-6 space-y-4">
          <div className="flex flex-col md:flex-row items-center space-x-4">
            <Input
              type="email"
              placeholder="Email"
              className=" md:w-2/3 md:h-2/3 px-4 py-2 text-white"
              color="white"
            />
            <CustomButton
              buttonText="Subscribe"
              size="sm"
              variant="secondary"
              href=""
            />
          </div>
          <p className="font-instrument text-white text-xs lowercase text-center md:text-left mt-2">
            By signing up, you agree with our privacy policy.
          </p>
        </div>
      </div>
    </section>
  );
}
