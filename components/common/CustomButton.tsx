import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type CustomButtonProps = {
  buttonText: string;
};

export default function CustomButton(props: CustomButtonProps) {
  return (
    <Link
      href="/"
      className={`mt-6 bg-white text-black py-3 px-6 rounded-full flex items-center text-xs transition-opacity duration-500 ease-in-out group hover:bg-black hover:text-white`}
    >
      {props.buttonText}
      <ArrowRight
        size="16"
        className="ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
      />
    </Link>
  );
}
