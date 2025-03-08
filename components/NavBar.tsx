"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import ActiveMenuEffect from "./ActiveMenu";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      // Add class to prevent scrolling
      document.body.classList.add("overflow-hidden");
    } else {
      // Remove class when menu is closed
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileMenuOpen]);

  const handleMouseEnter = (menu: string) => {
    // Clear any existing timeout to prevent the menu from closing
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    // Set a timeout to close the menu after a short delay
    const timeout = setTimeout(() => {
      setActiveMenu(null);
    }, 300); // 300ms delay gives enough time to move to the dropdown

    setCloseTimeout(timeout);
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }
    };
  }, [closeTimeout]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolling || activeMenu || isMobileMenuOpen
            ? "bg-white"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto px-6">
          <div className="flex items-center justify-between h-16 ">
            {/* Left: Brand Name */}
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

            {/* Center: Navigation */}
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

            {/* Right: Shopping Cart */}
            <div className="flex items-center space-x-4">
              <Link
                href="/cart"
                className={`p-1 transition-colors ${
                  scrolling || activeMenu || isMobileMenuOpen
                    ? "text-black"
                    : "text-white"
                }`}
              >
                <ShoppingBag className="h-4 w-4" />
              </Link>

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
                  {/* First line */}
                  <div
                    className={`absolute w-6 h-[2px] bg-current transition-all duration-300 ${
                      isMobileMenuOpen
                        ? "rotate-45 translate-y-0"
                        : "translate-y-[-4px]"
                    }`}
                  />
                  {/* Second line - only visible when menu is closed */}
                  <div
                    className={`absolute w-6 h-[2px] bg-current transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  {/* Third line */}
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

        {/* Mobile Menu (shown when open) */}
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
                        className="text-gray-600 hover:text-black text-4xl font-bricolage "
                        onClick={handleMobileLinkClick}
                      >
                        {item}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Additional content for the mobile menu */}
                <div className="mt-auto pt-8 border-t border-gray-100">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col space-y-4"
                  >
                    <Link
                      href="/account"
                      className="text-sm text-gray-500 hover:text-black"
                    >
                      Account
                    </Link>
                    <Link
                      href="/contact"
                      className="text-sm text-gray-500 hover:text-black"
                    >
                      Contact
                    </Link>
                    <div className="flex space-x-4 pt-4">
                      <Link href="#" className="text-gray-400 hover:text-black">
                        <span className="sr-only">Instagram</span>
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path fillRule="evenodd" clipRule="evenodd" />
                        </svg>
                      </Link>
                      <Link href="#" className="text-gray-400 hover:text-black">
                        <span className="sr-only">Twitter</span>
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        ></svg>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <ActiveMenuEffect
        activeMenu={activeMenu}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
    </>
  );
}
