"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

type CustomButtonProps = {
  buttonText: string;
  variant?:
    | "default"
    | "outline"
    | "ghost"
    | "destructive"
    | "secondary"
    | "link";
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
      variant={variant}
      size={size}
      className="group flex items-center gap-2 rounded-full"
    >
      <Link href={href}>
        {buttonText}
        <ArrowRight
          size={16}
          className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
        />
      </Link>
    </Button>
  );
}
