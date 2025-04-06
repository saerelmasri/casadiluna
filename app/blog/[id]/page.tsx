/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable @typescript-eslint/no-explicit-any
"use client";

import { Dot } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogPost() {
  const { id } = useParams();
  const [blocks, setBlocks] = useState<any[]>([]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`/api/notion/${id}`);
        if (!response.ok) throw new Error("Failed fetching content");

        const dataContent = await response.json();
        const fetchedBlocks = dataContent.results || dataContent || [];
        setBlocks(fetchedBlocks);
      } catch (error) {
        console.error("Error fetching page:", error);
      }
    };

    fetchContent();
  }, [id]);

  const renderRichText = (richText: any[]) => {
    return richText.map((textObj, i) => {
      const plain = textObj?.text?.content || "";
      const href = textObj?.text?.link?.url;
      const annotations = textObj?.annotations || {};

      let textElement = <span key={i}>{plain}</span>;

      if (annotations.bold)
        textElement = <strong key={i}>{textElement}</strong>;
      if (annotations.italic) textElement = <em key={i}>{textElement}</em>;

      if (href) {
        textElement = (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 underline hover:text-pink-400"
          >
            {textElement}
          </a>
        );
      }

      return textElement;
    });
  };

  const renderBlock = (block: any) => {
    const { type, id } = block;
    const value = block[type];

    switch (type) {
      case "paragraph":
        return (
          <p
            key={id}
            className="text-gray-800 text-base leading-7 my-4 font-light"
          >
            {renderRichText(value.rich_text)}
          </p>
        );

      case "heading_1":
        return (
          <h1
            key={id}
            className="text-[#321e1e] text-4xl font-semibold mt-10 mb-4"
          >
            {renderRichText(value.rich_text)}
          </h1>
        );

      case "heading_2":
        return (
          <h2
            key={id}
            className="text-[#543c3c] text-3xl font-medium mt-8 mb-3"
          >
            {renderRichText(value.rich_text)}
          </h2>
        );

      case "heading_3":
        return (
          <h3 key={id} className="text-[#543c3c] text-xl font-medium mt-6 mb-2">
            {renderRichText(value.rich_text)}
          </h3>
        );

      case "bulleted_list_item":
      case "numbered_list_item":
        return (
          <li key={id} className="text-gray-700 font-light">
            {renderRichText(value.rich_text)}
          </li>
        );

      case "image": {
        const source =
          value.type === "external" ? value.external.url : value.file?.url;
        const caption = value.caption?.[0]?.plain_text;

        return (
          <div key={id} className="my-10 w-full flex flex-col items-center">
            <div className="relative w-full max-w-3xl aspect-[4/3] overflow-hidden rounded-xl shadow-md">
              <Image
                src={source}
                alt={caption || "Notion image"}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
            </div>
            {caption && (
              <p className="text-center text-gray-500 text-sm mt-2 italic">
                {caption}
              </p>
            )}
          </div>
        );
      }

      case "column_list":
        return (
          <div key={id} className="flex flex-col md:flex-row gap-6 my-6 w-full">
            {block.children?.map((column: any, idx: number) => (
              <div key={idx} className="flex-1 flex flex-col gap-4">
                {column.children?.map((child: any) => renderBlock(child))}
              </div>
            ))}
          </div>
        );

      default:
        return (
          <p key={id} className="text-gray-500 italic text-sm">
            [Unsupported block type: {type}]
          </p>
        );
    }
  };

  const renderBlocks = () => {
    const elements: React.ReactNode[] = [];
    let listType: string | null = null;
    let listItems: any[] = [];

    blocks.forEach((block, index) => {
      if (
        block.type === "bulleted_list_item" ||
        block.type === "numbered_list_item"
      ) {
        if (!listType) listType = block.type;
        listItems.push(renderBlock(block));

        const nextBlock = blocks[index + 1];
        if (
          !nextBlock ||
          (nextBlock.type !== "bulleted_list_item" &&
            nextBlock.type !== "numbered_list_item")
        ) {
          const ListTag = listType === "bulleted_list_item" ? "ul" : "ol";
          elements.push(
            <ListTag
              key={`list-${index}`}
              className="ml-6 my-4 space-y-2 list-disc"
            >
              {listItems}
            </ListTag>
          );
          listItems = [];
          listType = null;
        }
      } else {
        elements.push(renderBlock(block));
      }
    });

    return elements;
  };

  return (
    <>
      {/* Hero Section */}
      <div className="h-[90vh] flex flex-col md:flex-row">
        <div
          className="w-full md:w-[50%] relative bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero2.jpg')",
          }}
        />
        <div className="w-full md:w-[50%] bg-[#321e1e] flex flex-col justify-center p-10">
          <div className="flex items-center space-x-5 text-white text-sm font-light mb-4">
            <Dot size={52} />
            <span>Treatment</span>
            <span>|</span>
            <span>Jan 23, 2025</span>
            <span>|</span>
            <span>5 min read</span>
          </div>
          <h1 className="font-bricolage text-white text-5xl md:text-7xl lowercase leading-tight">
            Day care.
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-[#faf4f0] w-full px-6 md:px-10 py-12 flex justify-center">
        <div className="max-w-6xl w-full">
          {blocks.length === 0 ? (
            <p className="text-gray-500">Loading or no content available...</p>
          ) : (
            renderBlocks()
          )}
        </div>
      </div>
    </>
  );
}
