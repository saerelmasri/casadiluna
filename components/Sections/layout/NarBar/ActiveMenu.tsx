/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */

"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { NavBarContent } from "@/constants";

type ActiveMenuProps = {
  activeMenu: string | null;
  handleMouseEnter: (menu: string) => void;
  handleMouseLeave: () => void;
};

export default function ActiveMenuEffect(props: ActiveMenuProps) {
  const { activeMenu, handleMouseEnter, handleMouseLeave } = props;

  // @ts-ignore
  const menuContent = activeMenu ? NavBarContent[activeMenu] : null;

  if (!menuContent) {
    return null;
  }

  const renderItem = (content: any) => {
    return content.map((item: any, index: number) => {
      const sectionTitle = Object.keys(item)[0]; // Extracts the key (e.g., "collections", "concerns", "activeIngredients")
      const items = item[sectionTitle]; // Extracts the array of objects under the key

      return (
        <div key={index} className="w-auto">
          <h3 className="text-sm font-medium text-gray-400 mb-4">
            {sectionTitle}
          </h3>
          <ul>
            {items.map((subItem: any, subIndex: number) => (
              <li key={subIndex} className="mb-2">
                <Link href={subItem.url} className="text-sm text-black relative group">
                  {subItem.title}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    });
  };

  const renderPhotos = (content: any) => {
    return content.map((item: any, index: number) => {
      return (
        <Link key={index} href="" className="space-y-1">
          <div className="relative overflow-hidden flex-shrink-0 w-64 h-64">
            <Image
              src={item.imageURL || "/placeholder.svg"}
              alt="Face product"
              layout="fill"
              className="object-cover transition-transform duration-300 transform hover:scale-105"
            />
          </div>
          <h4 className="text-2xl font-medium font-bricolage">{item.title}</h4>
          <p className="text-sm text-gray-600">{item.subtitle}</p>
        </Link>
      );
    });
  };

  return (
    <AnimatePresence>
      {activeMenu && (
        <motion.div
          key={activeMenu}
          className="fixed top-16 left-0 right-0 bg-white z-40"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => handleMouseEnter(activeMenu)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="mx-auto px-4 md:px-6 py-8">
            <div className="flex justify-between px-3 py-4">
              <div className="flex flex-row space-x-14">
                {renderItem(menuContent.items)}
              </div>

              <div className="grid grid-cols-3 gap-2">
                {renderPhotos(menuContent.photos)}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
