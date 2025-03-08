"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#bbb59e]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left section: Menu button and Logo */}
          <div className="flex items-center space-x-5">
            <button
              className="p-2 mr-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
            <Link href="/" className="text-white font-serif text-2xl">
              Essenza
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <Link
                  href="/presets"
                  className="text-white hover:text-gray-200"
                >
                  Presets
                </Link>
              </div>
              <div className="relative group">
                <Link
                  href="/catalog"
                  className="text-white hover:text-gray-200"
                >
                  Catalog
                </Link>
              </div>
              <Link href="/journal" className="text-white hover:text-gray-200">
                Journal
              </Link>
              <Link href="/about" className="text-white hover:text-gray-200">
                About
              </Link>
            </nav>
          </div>

          {/* Right section: Country and Cart only */}
          <div className="flex items-center space-x-4">
            {/* <button className="flex items-center text-white">
              <span className="w-5 h-5 flex items-center justify-center rounded-full border border-white text-xs mr-1">
                🇨🇦
              </span>
              <span className="text-sm">CA</span>
            </button> */}
            <Link href="/cart" className="p-1 text-white">
              <ShoppingBag className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#bbb59e] py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/presets"
              className="text-white hover:text-gray-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Presets
            </Link>
            <Link
              href="/catalog"
              className="text-white hover:text-gray-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Catalog
            </Link>
            <Link
              href="/journal"
              className="text-white hover:text-gray-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Journal
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-gray-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
