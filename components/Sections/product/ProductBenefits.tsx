import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dot } from "lucide-react";

export default function GoodToKnow() {
  return (
    <section className="relative h-[120vh] flex flex-col lg:flex-row overflow-hidden">
      <div className="bg-[#321e1e] w-full h-full lg:w-[50%] flex flex-col relative">
        <div className="h-auto lg:h-[50%] w-full p-8 lg:px-7 lg:py-5 space-y-4">
          <div className="flex items-center">
            <Dot size={32} color="white" />
            <p className="lowercase font-instrument text-xs text-white">
              Cleansing oil
            </p>
          </div>
          <h1 className="font-bricolage text-4xl md:text-5xl lg:text-5xl lowercase text-wrap text-white">
            Benefits
          </h1>
          <p className="font-instrument text-sm text-white">
            Nüssa is another vision of beauty: simple, obvious, easy and
            natural. More than a routine, Nüssa is a manifesto for women.
          </p>
          <div className="w-full space-y-2">
            <Accordion type="single" collapsible className="w-full border-t ">
              <AccordionItem value="skin-type">
                <AccordionTrigger className="font-instrument font-light text-sm text-white">
                  Skin type
                </AccordionTrigger>
                <AccordionContent className="font-instrument text-white">
                  Whether your skin is dry, oily, combination or sensitive,
                  Nüssa Cleansing oil is ideal for all skin types. Its gentle,
                  moisturizing action is ideal for daily use. Use in the
                  evening.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="w-full border-t ">
              <AccordionItem value="skin-type">
                <AccordionTrigger className="font-instrument font-light text-sm text-white">
                  Skin type
                </AccordionTrigger>
                <AccordionContent className="font-instrument text-white">
                  Whether your skin is dry, oily, combination or sensitive,
                  Nüssa Cleansing oil is ideal for all skin types. Its gentle,
                  moisturizing action is ideal for daily use. Use in the
                  evening.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              type="single"
              collapsible
              className="w-full border-t border-b"
            >
              <AccordionItem value="skin-type">
                <AccordionTrigger className="font-instrument font-light text-sm text-white">
                  Skin type
                </AccordionTrigger>
                <AccordionContent className="font-instrument text-white">
                  Whether your skin is dry, oily, combination or sensitive,
                  Nüssa Cleansing oil is ideal for all skin types. Its gentle,
                  moisturizing action is ideal for daily use. Use in the
                  evening.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
