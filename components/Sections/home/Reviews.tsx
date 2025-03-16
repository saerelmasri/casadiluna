"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, ArrowLeft } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Elodie M.",
    text: "After almost 2 years of use, I can attest that my sensitive skin loves this day oil! I pair it with the night oil, and my skin feels soft and supple again. Like the night oil, the scent is divine.",
    rating: 5,
    image: "/images/girl.png",
    productImage: "/images/product.png",
    productName: "Plumping flower oil",
    productPrice: "$72.00",
  },
  {
    id: 2,
    name: "James R.",
    text: "This product is amazing! My skin has never felt better. I've been using it for months now, and I can see a huge difference.",
    rating: 4,
    image: "/images/girl.png",
    productImage: "/images/product.png",
    productName: "Hydrating Serum",
    productPrice: "$65.00",
  },
  {
    id: 3,
    name: "Sophie L.",
    text: "I was skeptical at first, but this oil really works. My skin feels hydrated and refreshed every morning.",
    rating: 5,
    image: "/images/girl.png",
    productImage: "/images/product.png",
    productName: "Rejuvenating Night Oil",
    productPrice: "$80.00",
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="bg-[#faf4f0] w-full flex flex-col md:flex-row py-7 ">
      {/* LEFT SIDE - Review Text */}
      <div className="w-1/2 p-5">
        <motion.div
          key={reviews[currentIndex].id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {/* Star Ratings & Name */}
          <div className="w-full flex items-center space-x-4 px-5">
            <div className="flex">
              {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={10} fill="black" />
              ))}
            </div>
            <p className="font-instrument text-xs">
              {reviews[currentIndex].name}
            </p>
          </div>

          {/* Review Text */}
          <div className="px-3 py-2 w-[100vw] md:w-[80%]">
            <p className="font-bricolage md:text-4xl">
              {reviews[currentIndex].text}
            </p>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex space-x-2 h-auto relative px-2 py-4">
          <Button
            variant="outline"
            size={"icon"}
            className="bg-[#eae3df] rounded-full flex justify-center items-center hover:scale-110 hover:text-white hover:bg-black"
            onClick={prevSlide}
          >
            <ArrowLeft strokeWidth={1.5} />
          </Button>
          <Button
            variant="outline"
            size={"icon"}
            className="bg-[#eae3df] rounded-full flex justify-center items-center hover:scale-110 hover:text-white hover:bg-black"
            onClick={nextSlide}
          >
            <ArrowRight strokeWidth={1.5} />
          </Button>
        </div>
      </div>

      {/* RIGHT SIDE - Image & Product Info */}
      <motion.div
        key={reviews[currentIndex].id}
        className="w-full md:w-1/2 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="inset-0 bg-cover bg-center h-[300px] md:h-[80vh] w-[90%] px-7 py-5"
          style={{ backgroundImage: `url(${reviews[currentIndex].image})` }}
        >
          <div className="bg-white w-[40%] flex space-x-5 px-3 py-2">
            <div
              className="inset-0 bg-cover bg-center w-[25%] aspect-[1/1]"
              style={{
                backgroundImage: `url(${reviews[currentIndex].productImage})`,
              }}
            />
            <div className="flex flex-col justify-center items-start">
              <p className="font-instrument text-xs">
                {reviews[currentIndex].productName}
              </p>
              <p className="font-instrument text-[11px] text-gray-500">
                {reviews[currentIndex].productPrice}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
