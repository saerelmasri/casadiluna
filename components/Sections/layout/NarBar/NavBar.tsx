"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ActiveMenuEffect from "./ActiveMenu";
import { AnimatePresence, motion } from "framer-motion";
import { NavBarContent } from "@/constants";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const router = usePathname();
  const [scrolling, setScrolling] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);

  console.log("Router:", router);
  const isCollection = router.startsWith("/collections");

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

      if (currentScrollPos > 50) setScrolling(true);
      else setScrolling(false);

      if (currentScrollPos > prevScrollPos && currentScrollPos > 50) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleMobileLinkClick = () => setIsMobileMenuOpen(false);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: navbarVisible ? 0 : -80,
          opacity: navbarVisible ? 1 : 0,
          backgroundColor:
            scrolling || activeMenu || isMobileMenuOpen
              ? "white"
              : "transparent",
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
                scrolling || activeMenu || isMobileMenuOpen || isCollection
                  ? "text-black"
                  : "text-white"
              }`}
            >
              Casa di Luna
            </Link>

            {/* Dynamic Navbar Links */}
            <nav className="hidden md:flex items-center space-x-8">
              {Object.keys(NavBarContent).map((menuKey) => (
                <div
                  key={menuKey}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(menuKey)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={
                      menuKey === "shop"
                        ? "/collections/all"
                        : `/${menuKey.toLowerCase()}`
                    }
                    className={`transition-colors text-sm ${
                      scrolling ||
                      activeMenu ||
                      isMobileMenuOpen ||
                      isCollection
                        ? "text-black hover:text-gray-600"
                        : "text-white hover:text-gray-200"
                    }`}
                  >
                    {menuKey}
                  </Link>
                </div>
              ))}

              <Link
                href="/journal"
                className={`transition-colors text-sm ${
                  scrolling || activeMenu || isMobileMenuOpen || isCollection
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
                  scrolling || activeMenu || isMobileMenuOpen || isCollection
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
                {Object.keys(NavBarContent)
                  .concat("journal")
                  .map((menuKey) => (
                    <motion.div
                      key={menuKey}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.3,
                        delay:
                          0.1 * Object.keys(NavBarContent).indexOf(menuKey),
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        href={
                          menuKey === "shop"
                            ? "/collections/all"
                            : `/collections/${menuKey.toLowerCase()}`
                        }
                        className="text-gray-600 hover:text-black text-4xl font-bricolage"
                        onClick={handleMobileLinkClick}
                      >
                        {menuKey}
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
