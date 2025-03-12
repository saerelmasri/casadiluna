"use client"

import { useEffect, useRef, useState } from "react"

export default function AboutUS() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [filledWords, setFilledWords] = useState(0)

  // Sample text content - split into words
  const aboutUsText =
    "We are a forward-thinking company dedicated to innovation and excellence. Founded in 2015, our mission has been to create solutions that transform industries and improve lives. Our team of passionate experts works tirelessly to push boundaries and challenge conventions. We believe in sustainable growth, ethical practices, and putting our customers at the heart of everything we do. Through collaboration and creativity, we've established ourselves as leaders in our field, delivering exceptional products and services that make a real difference. As we look to the future, we remain committed to our core values while embracing new technologies and opportunities for growth."

  const words = aboutUsText.split(" ")
  const totalWords = words.length

  useEffect(() => {
    const container = containerRef.current

    if (!container) return

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect()
      const containerTop = containerRect.top - 500
      const containerHeight = container.offsetHeight
      const viewportHeight = window.innerHeight - 500

      // Calculate how far we've scrolled into the container (as a percentage)
      // When containerTop is at viewportHeight, we're just starting (0%)
      // When containerTop is at -containerHeight + viewportHeight, we're done (100%)
      const scrollRange = containerHeight - viewportHeight
      const scrollProgress = (viewportHeight - containerTop) / scrollRange
      const boundedProgress = Math.max(0, Math.min(1, scrollProgress))

      // Calculate how many words should be filled based on scroll progress
      const wordsToFill = Math.round(boundedProgress * totalWords)
      setFilledWords(wordsToFill)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [totalWords])

  return (
    <div
      ref={containerRef}
      className="h-[200vh]" // Reduced height of the container for better scroll interaction
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center p-4">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">About Us</h3>
          <p className="text-2xl md:text-3xl lg:text-3xl leading-relaxed font-bricolage">
            {words.map((word, index) => (
              <span
                key={index}
                className={`transition-colors ${index < filledWords ? "text-black" : "text-gray-400"}`}
              >
                {word}{" "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  )
}
