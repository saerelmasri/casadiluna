/* eslint-disable react/no-unescaped-entities */
"use client";

import { Dot } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const qa_products = [
  {
    title: "How do I know if these products are right for me?",
    description:
      "Each product featured on our platform is carefully selected for its quality, effectiveness, and compatibility with a range of skin types — including sensitive skin. We recommend exploring the detailed product descriptions, where you’ll find ingredient highlights, skin benefits, and usage tips to help you choose with confidence.",
  },
  {
    title: "Why include beauty tools in your skincare ritual?",
    description:
      "Thoughtfully chosen beauty tools — like natural sea sponges, facial brushes, or textured exfoliators — can elevate your skincare routine in both results and ritual. These tools help gently exfoliate, boost circulation, and enhance product absorption, all while offering a soothing, spa-like experience at home. We spotlight tools crafted from natural, sustainable materials — because beauty should feel good, do good, and leave a light footprint on the planet.",
  },
  {
    title: "Why use skincare products as a set?",
    description:
      " Skincare works best in harmony. Many of the products we feature are designed to complement each other — targeting different needs at different times of day to support the skin’s natural rhythm. Think of an antioxidant-rich day oil to protect and energize, paired with a restorative night formula that nourishes and renews while you sleep. Using products as a set creates a more complete, balanced ritual — leaving your skin radiant, resilient, and beautifully cared for.",
  },
];
// const shipping_products = [
//   {
//     title: "When does my order will be send?",
//     description:
//       "Once the order has been confirmed and payment validated, the products will be delivered according to the chosen method and to the delivery address indicated by the purchaser during the ordering process. Orders placed before 2:00 p.m. are prepared and dispatched the same day; after 2:00 p.m., they will be dispatched the following day.",
//   },
//   {
//     title: "How long does delivery take?",
//     description:
//       "Delivery times may vary according to destination. The Seller cannot be held responsible for any delays in delivery. As an indication, the usual delivery times are 48h after the order has been sent.",
//   },
//   {
//     title: "How can I change my delivery address?",
//     description:
//       "If your delivery address is incorrect, please send us an e-mail.",
//   },
// ];

export default function Faq() {
  return (
    <>
      <div
        className="relative h-[60vh] bg-cover bg-center flex justify-center items-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/shower.jpg')",
        }}
      >
        <h1 className="font-bricolage lowercase text-white text-5xl md:text-6xl lg:max-w-[40%] text-center">
          Frequently asked questions
        </h1>
      </div>
      <div className="w-full bg-[#faf4f0] flex flex-col justify-center items-center py-8 space-y-14">
        <div className="flex flex-col items-center py-7 px-5 space-y-9">
          <div className="flex items-center">
            <Dot color="black" size={32} />
            <p className="font-instrument text-xs font-semibold lowercase">
              We're here to help
            </p>
          </div>
          <p className="font-instrument text-sm">
            Use the FAQ section to answer your customers' most frequent
            questions.
          </p>
        </div>
        <div className="flex flex-col md:px-5 space-y-4 w-[90%] lg:w-1/2">
          <h1 className="font-bricolage text-xl lowercase">Products</h1>
          {qa_products.map((item, index) => (
            <Accordion
              key={index}
              type="single"
              collapsible
              className="w-full bg-white px-5 mb-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-instrument lowercase font-light">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent>{item.description}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        {/* <div className="flex flex-col md:px-5 space-y-4 w-[90%] lg:w-1/2">
          <h1 className="font-bricolage text-xl lowercase">
            Shipping & orders
          </h1>
          {shipping_products.map((item, index) => (
            <Accordion
              key={index}
              type="single"
              collapsible
              className="w-full bg-white px-5 mb-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-instrument lowercase font-light">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent>{item.description}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div> */}
      </div>
    </>
  );
}
