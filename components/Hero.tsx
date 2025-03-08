"use client";

// import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-[#bbb59e] min-h-[90vh] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative flex flex-col items-center text-center">
        {/* Heading & Button */}
        <p className="text-white text-sm tracking-wider uppercase font-semibold">
          1000+ TOP BEAUTY PRODUCTS IN ONE PLACE
        </p>
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif leading-tight max-w-2xl">
          Ideal Skin Care Products for Every Skin Type
        </h1>
        <Link
          href="/catalog"
          className="mt-6 bg-[#7a7665] hover:bg-[#5d5a4e] text-white py-3 px-6 rounded flex items-center transition-colors duration-300"
        >
          Explore Our Store
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>

        {/* Floating Images */}
        <div className="relative w-full max-w-6xl mx-auto mt-8">
          {/* Left Images */}
          <motion.div
            whileHover={{ x: -10 }}
            className="absolute left-0 top-[-20px] w-[180px] h-[220px]"
          >
            {/* <Image
              src=""
              alt="Skincare product"
              width={180}
              height={220}
              className="object-cover rounded-lg"
            /> */}
          </motion.div>
          <motion.div
            whileHover={{ x: -10 }}
            className="absolute left-10 top-[120px] w-[140px] h-[180px]"
          >
            {/* <Image
              src=""
              alt="Skincare product"
              width={140}
              height={180}
              className="object-cover rounded-lg"
            /> */}
          </motion.div>

          {/* Right Images */}
          <motion.div
            whileHover={{ x: 10 }}
            className="absolute right-0 top-[-10px] w-[200px] h-[220px]"
          >
            {/* <Image
              src=""
              alt="Skincare product"
              width={200}
              height={220}
              className="object-cover rounded-lg"
            /> */}
          </motion.div>
          <motion.div
            whileHover={{ x: 10 }}
            className="absolute right-12 top-[140px] w-[150px] h-[180px]"
          >
            {/* <Image
              src=""
              alt="Skincare product"
              width={150}
              height={180}
              className="object-cover rounded-lg"
            /> */}
          </motion.div>

          {/* Bottom Barely Visible Image */}
          {/* <motion.div
            whileHover={{ y: 10 }}
            className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-[180px] h-[100px]"
          >
            <Image
              src=""
              alt="Skincare product"
              width={180}
              height={100}
              className="object-cover rounded-lg"
            />
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
