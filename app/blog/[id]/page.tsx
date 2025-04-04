/* eslint-disable @typescript-eslint/no-explicit-any */
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
            className="text-blue-400 underline hover:text-blue-300"
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
          <p key={id} className="text-white text-base my-2">
            {renderRichText(value.rich_text)}
          </p>
        );

      case "heading_1":
        return (
          <h1 key={id} className="text-white text-4xl font-bold mt-6">
            {renderRichText(value.rich_text)}
          </h1>
        );

      case "heading_2":
        return (
          <h2 key={id} className="text-white text-3xl font-semibold mt-4">
            {renderRichText(value.rich_text)}
          </h2>
        );

      case "heading_3":
        return (
          <h3 key={id} className="text-white text-2xl mt-4">
            {renderRichText(value.rich_text)}
          </h3>
        );

      case "bulleted_list_item":
      case "numbered_list_item":
        return (
          <li key={id} className="text-white">
            {renderRichText(value.rich_text)}
          </li>
        );

      case "image": {
        const source =
          value.type === "external" ? value.external.url : value.file?.url;
        const caption = value.caption?.[0]?.plain_text;


        return (
          <div key={id} className="my-6 flex flex-col items-center">
            <div className="relative w-full max-w-3xl h-[400px]">
              <Image
                src={source}
                alt={caption || "Notion image"}
                width={600} // Add width for external images
                height={400} // Add height for external images
                className="object-contain rounded-lg"
              />
            </div>
            {caption && (
              <p className="text-center text-white text-sm mt-2 italic">
                {caption}
              </p>
            )}
          </div>
        );
      }

      default:
        return (
          <p key={id} className="text-white italic text-sm">
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
            <ListTag key={`list-${index}`} className="ml-6 my-2 space-y-1">
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
      <div className="h-[90vh] flex">
        <div
          className="w-[50%] relative bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: "url('/images/hero2.jpg')",
          }}
        />
        <div className="w-[50%] bg-[#321e1e] flex flex-col justify-center">
          <div className="w-full flex items-center space-x-5">
            <Dot size={52} color="white" />
            <p className="font-instrument lowercase text-white text-sm">
              Treatment
            </p>
            <p className="font-instrument lowercase text-white text-sm">|</p>
            <p className="font-instrument lowercase text-white text-sm">
              Jan, 23, 2025
            </p>
            <p className="font-instrument lowercase text-white text-sm">|</p>
            <p className="font-instrument lowercase text-white text-sm">
              5 min read
            </p>
          </div>
          <h1 className="font-bricolage lowercase text-white text-7xl px-6">
            Day care.
          </h1>
        </div>
      </div>

      <div className="bg-black w-full px-10 py-8">
        {blocks.length === 0 ? (
          <p className="text-white">Loading or no content available...</p>
        ) : (
          renderBlocks()
        )}
      </div>
    </>
  );
}
