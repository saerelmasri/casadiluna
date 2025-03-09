"use client";

import CustomButton from "@/components/common/CustomButton";
import Link from "next/link";

type SectionCardProps = {
  title: string;
  buttonTitle: string;
  image: string;
};

export default function SectionCard(props: SectionCardProps) {
  return (
    <Link
      href=""
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="w-full text-right h-[80%] -rotate-90 py-5 px-10">
        <h1 className="text-6xl font-bricolage text-white">{props.title}</h1>
      </div>
      <div className="relative w-full px-6 py-16 flex flex-col items-start text-white z-10">
        <CustomButton buttonText={props.buttonTitle} />
      </div>
    </Link>
  );
}
