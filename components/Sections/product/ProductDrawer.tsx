"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function ProductDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="text-xs underline cursor-pointer">
          full list of ingredients
        </button>
      </SheetTrigger>
      <SheetContent className="p-6 text-sm">
        <SheetHeader>
          <SheetTitle>
            <h2 className="text-2xl font-normal font-bricolage">Ingredients</h2>
          </SheetTitle>
        </SheetHeader>

        <SheetDescription>
          <p className="text-xs font-instrument">
            Sesamum Indicum Seed Oil*, Prunus Armeniaca Kernel Oil, Citrullus
            Vulgaris Seed Oil, Polyglyceryl•4 Oleate, Adansonia Digitata Seed
            Oil*, Aroma, Tocopherol, Helianthus Annuus Seed Oil, Geraniol,
            Limonene, Linalool.
            <br />
            <br />
            This skincare product is certified organic by Ecocert in accordance
            with Cosmos standards:
            <br />
            • 98% of total ingredients are of natural origin
            <br />• 43% of ingredients are organically grown
          </p>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
