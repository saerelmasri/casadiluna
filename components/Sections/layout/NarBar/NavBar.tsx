"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ActiveMenuEffect from "./ActiveMenu";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true); // Track navbar visibility
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileMenuOpen]);

  const handleMouseEnter = (menu: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMenu(null);
    }, 300);
    setCloseTimeout(timeout);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Change background color based on scroll
      if (currentScrollPos > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }

      // Handle navbar visibility (hide when scrolling down, show when scrolling up)
      if (currentScrollPos > prevScrollPos && currentScrollPos > 50) {
        setNavbarVisible(false); // Scroll down, hide navbar
      } else {
        setNavbarVisible(true); // Scroll up, show navbar
      }
      setPrevScrollPos(currentScrollPos); // Update the previous scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300`}
        initial={{ y: -80, opacity: 0 }} // Initial position (hidden above)
        animate={{
          y: navbarVisible ? 0 : -80, // Animate position up or down
          opacity: navbarVisible ? 1 : 0, // Animate opacity for smooth transition
          backgroundColor:
            scrolling || activeMenu || isMobileMenuOpen
              ? "white"
              : "transparent", // Change background based on scrolling
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          duration: 0.3,
        }}
      >
        <div className="mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className={`text-3xl font-instrument transition-colors ${
                scrolling || activeMenu || isMobileMenuOpen
                  ? "text-black"
                  : "text-white"
              }`}
            >
              Essenza
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {["shop", "learn"].map((item) => (
                <div
                  key={item}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className={`transition-colors text-sm ${
                      scrolling || activeMenu || isMobileMenuOpen
                        ? "text-black hover:text-gray-600"
                        : "text-white hover:text-gray-200"
                    }`}
                  >
                    {item}
                  </Link>
                </div>
              ))}
              <Link
                href="/journal"
                className={`transition-colors text-sm ${
                  scrolling || activeMenu || isMobileMenuOpen
                    ? "text-black hover:text-gray-600"
                    : "text-white hover:text-gray-200"
                }`}
              >
                journal
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <button
                className={`md:hidden p-2 rounded ${
                  scrolling || activeMenu || isMobileMenuOpen
                    ? "text-black"
                    : "text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <div className="relative w-6 h-5 flex items-center justify-center">
                  <div
                    className={`absolute w-6 h-[2px] bg-current transition-all duration-300 ${
                      isMobileMenuOpen
                        ? "rotate-45 translate-y-0"
                        : "translate-y-[-4px]"
                    }`}
                  />
                  <div
                    className={`absolute w-6 h-[2px] bg-current transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <div
                    className={`absolute w-6 h-[2px] bg-current transition-all duration-300 ${
                      isMobileMenuOpen
                        ? "-rotate-45 translate-y-0"
                        : "translate-y-[4px]"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white fixed top-16 left-0 w-full h-[calc(100vh-4rem)] z-40 overflow-y-auto"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="py-8 px-6 h-full flex flex-col">
              <nav className="flex flex-col space-y-6">
                {["shop", "learn", "journal"].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.1 * ["shop", "learn", "journal"].indexOf(item),
                      ease: "easeOut",
                    }}
                  >
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-gray-600 hover:text-black text-4xl font-bricolage"
                      onClick={handleMobileLinkClick}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ActiveMenuEffect
        activeMenu={activeMenu}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
    </>
  );
}
