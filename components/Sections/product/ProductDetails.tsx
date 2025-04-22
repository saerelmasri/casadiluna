/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductDrawer from "./ProductDrawer";

export default function ProductDetails({ product }: { product: any }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-4xl font-medium lowercase">{product.name}</h1>
        <p className="text-xl mt-2">€{product.price.toFixed(2)}</p>
      </div>

      <div className="text-sm">Volume: {product.volume}</div>

      <div className="flex items-center gap-4">
        <span className="text-sm bg-black text-white px-3 py-1 rounded-full">
          100 ml
        </span>
        <span className="text-green-600 text-sm">{product.stock} in stock</span>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
        >
          −
        </Button>
        <span>{quantity}</span>
        <Button variant="outline" onClick={() => setQuantity((q) => q + 1)}>
          +
        </Button>
        <Button className="ml-auto">add to cart</Button>
      </div>

      <Button
        variant="default"
        className="w-full bg-black text-white hover:bg-neutral-800"
      >
        buy it now
      </Button>

      <p className="text-sm text-gray-700 leading-relaxed">
        {product.description}
      </p>

      <ProductDrawer />
    </div>
  );
}
