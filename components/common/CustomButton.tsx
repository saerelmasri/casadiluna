"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CustomButtonProps = {
  buttonText: string;
  variant?:
    | "default"
    | "outline"
    | "ghost"
    | "destructive"
    | "secondary"
    | "link"
    | "outlineTransparent";
  href?: string;
  size?: "default" | "sm" | "lg" | "icon";
};

export default function CustomButton({
  buttonText,
  variant = "default",
  href = "/",
  size = "default",
}: CustomButtonProps) {
  return (
    <Button
      asChild
      variant={variant === "outlineTransparent" ? "outline" : variant}
      size={size}
      className={cn(
        "group flex items-center gap-2 rounded-full transition-all",
        size === "lg" && "px-6 py-3 text-lg",
        variant === "outlineTransparent" &&
          "border border-primary bg-transparent text-primary hover:bg-primary hover:text-white"
      )}
    >
      <Link href={href}>
        {buttonText}
        <ArrowRight
          size={18}
          className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
        />
      </Link>
    </Button>
  );
}
