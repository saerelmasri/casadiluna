"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export type ItemProps = {
  title: string;
  itemName: string;
  itemPhoto: string;
  hoverPhoto: string;
  price: string;
  itemLink?: string;
};

export default function ItemCard(props: ItemProps) {
  return (
    <div className="group relative bg-cover bg-center flex flex-col justify-between overflow-hidden h-full w-full">
      {/* Default State */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out group-hover:opacity-0"
        style={{ backgroundImage: `url(${props.itemPhoto})` }}
      ></div>

      {/* Hover State */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
        style={{ backgroundImage: `url(${props.hoverPhoto})` }}
      ></div>

      <div className="relative z-10 w-full py-4 px-3">
        <div className="w-fit bg-white flex items-center px-2 py-1">
          <p className="uppercase text-[10px] font-instrument">{props.title}</p>
        </div>
      </div>

      {/* Default Text */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center py-2 space-y-1 transition-opacity duration-500 ease-in-out group-hover:opacity-0">
        <p className="font-instrument text-xs text-gray-800">{props.itemName}</p>
        <p className="font-instrument text-sm text-gray-800">${props.price}</p>
      </div>

      {/* Hover Button */}
      <div className="absolute bottom-4 left-0 right-0 mx-auto w-full px-2 py-1 z-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
        <Button
          asChild
          variant="secondary"
          size="default"
          className="w-full rounded-lg relative z-20"
        >
          <Link
            href="https://www.google.co.ve/?gfe_rd=cr&ei=_xG6VuPtCcvS-AX8oqvoBg&gws_rd=ssl"
            className="text-black transition-all duration-500 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
          >
            Buy Now
          </Link>
        </Button>
      </div>
    </div>
  );
}
