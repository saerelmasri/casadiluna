"use client";

import { useState, useEffect } from "react";
import FadeButton from "../common/FadeButton";

const slides = [
  {
    type: "single",
    image: "/images/hero2.jpg",
    title: "clean & natural skincare.",
    description: "Made in France and 100% vegan.",
    buttonText: "discover our products",
  },
  {
    type: "split",
    leftImage: "/images/hero1.jpg",
    rightImage: "/images/hero3.jpg",
    title: "ethical beauty, sustainable impact.",
    description:
      "Committed to sustainable beauty and minimizing our impact on the planet.",
    buttonText: "about us",
  },
  {
    type: "single",
    image: "/images/hero4.jpg",
    title: "transform your skin now.",
    description:
      "Tone your skin and reduce cellulite with our X body selection.",
    buttonText: "shop beauty tools",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  // Auto-change slides every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true); // Start fading out

      // After fade-out completes, change the slide and fade it in
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length); // Change slide
        setFadeOut(false); // Start fading in the new slide
      }, 40); // Matches fade-out duration (500ms)
    }, 20000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background Images */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        {slides[currentSlide].type === "single" ? (
          <div
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-500 ${
              fadeOut ? "opacity-10" : "opacity-100"
            }`}
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
        ) : (
          <div className="absolute inset-0 flex w-full h-full">
            <div
              className={`w-1/2 h-full bg-cover bg-center transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
              }`}
              style={{
                backgroundImage: `url(${slides[currentSlide].leftImage})`,
              }}
            />
            <div
              className={`w-1/2 h-full bg-cover bg-center transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
              }`}
              style={{
                backgroundImage: `url(${slides[currentSlide].rightImage})`,
              }}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative w-full mx-auto px-6 py-16 flex flex-col items-start text-white z-10">
        <h1
          className={`text-8xl font-bricolage font-medium max-w-3xl transition-opacity duration-500 ease-in-out ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          {slides[currentSlide].title}
        </h1>
        <p
          className={`leading-tight max-w-2xl font-instrument text-sm mt-4 transition-opacity duration-500 ease-in-out ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          {slides[currentSlide].description}
        </p>
        <FadeButton
          buttonText={slides[currentSlide].buttonText}
          fadeOut={fadeOut}
        />
      </div>

      {/* Page Indicator Buttons */}
      {/* <div className="absolute bottom-6 right-6 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-white ${
              index === currentSlide
                ? "bg-white opacity-100"
                : "bg-white opacity-50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div> */}
    </section>
  );
}
