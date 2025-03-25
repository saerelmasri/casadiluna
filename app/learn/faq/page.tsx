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
    title: "How do I know if Nüssa care is right for me?",
    description:
      "Nüssa products are suitable for all skin types. If you have any doubts, please consult our detailed product pages.",
  },
  {
    title: "Why use Nüssa beauty tools in your skincare routine?",
    description:
      "Using Nüssa beauty tools in your skincare routine offers many advantages. Our tools, such as sisal brushes and natural sea sponges, are made from natural, sustainable materials, respecting both your skin and the environment. They enhance the effectiveness of your skincare routine by gently exfoliating, stimulating blood circulation and facilitating product absorption. What's more, these tools provide a pleasant sensory experience, transforming your skincare routine into a genuine moment of well-being and relaxation.",
  },
  {
    title: "Why use Nüssa products as a set?",
    description:
      "Using Nüssa products as a set maximizes the benefits for your skin. Each product is formulated to target specific skin needs, and combining them produces even more effective results. For example, by using an antioxidant-rich day oil in the morning to protect skin from external aggressors, then applying a nourishing night oil at night to regenerate tissues while you sleep, you offer your skin a complete, balanced routine. By using Nüssa products as a set, you can enjoy healthier, radiant, revitalized skin.",
  },
];
const shipping_products = [
  {
    title: "When does my order will be send?",
    description:
      "Once the order has been confirmed and payment validated, the products will be delivered according to the chosen method and to the delivery address indicated by the purchaser during the ordering process. Orders placed before 2:00 p.m. are prepared and dispatched the same day; after 2:00 p.m., they will be dispatched the following day.",
  },
  {
    title: "How long does delivery take?",
    description:
      "Delivery times may vary according to destination. The Seller cannot be held responsible for any delays in delivery. As an indication, the usual delivery times are 48h after the order has been sent.",
  },
  {
    title: "How can I change my delivery address?",
    description:
      "If your delivery address is incorrect, please send us an e-mail.",
  },
];

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
        <div className="flex flex-col md:px-5 space-y-4 w-[90%] lg:w-1/2">
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
        </div>
      </div>
    </>
  );
}
