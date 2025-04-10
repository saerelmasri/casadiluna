"use client";

import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ArticleProps = {
  ID: string;
  ImageURL: string;
  Category: string;
  Title: string;
  Description: string;
  ReadingTime: number;
  CreatedTime: string;
};

export default function Article(props: ArticleProps) {
  const date = new Date(props.CreatedTime);
  const dateFormat = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${props.ID}`}
      className="flex flex-col items-center"
    >
      <div className="w-[90%] aspect-video relative overflow-hidden">
        <Image
          src={props.ImageURL}
          alt={props.Title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="w-[90%] py-4 space-y-3">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <Dot size={24} />
            <p className="font-instrument text-xs">{props.Category}</p>
          </div>
          <p className="font-instrument text-xs">|</p>
          <p className="font-instrument text-xs">
            {props.ReadingTime} min read
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bricolage text-2xl">{props.Title}</h1>
          <p className="font-instrument text-sm">{props.Description}</p>
        </div>
        <div className="flex flex-col">
          <h1 className="font-instrument text-xs">{dateFormat}</h1>
        </div>
      </div>
    </Link>
  );
}
