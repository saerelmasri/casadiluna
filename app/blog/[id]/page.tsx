/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Article from "@/components/Sections/journal/Article";
import { BlogPostType } from "@/lib/notion";
import { Dot } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogPost() {
  const { id } = useParams();
  const [loading, setLoading] = useState({
    content: true,
    rowContent: true,
    otherPosts: true,
  });
  const [error, setError] = useState({
    content: null,
    rowContent: null,
    otherPosts: null,
  });
  const [otherPosts, setOtherPosts] = useState<BlogPostType[]>([]);
  const [blocks, setBlocks] = useState<any[]>([]);
  const [pagePresentation, setPagePresentation] = useState<{
    Article: string;
    Category: string;
    Date: string;
    ReadingTime: number;
    Cover: string;
  }>({
    Article: "",
    Category: "",
    Date: "",
    ReadingTime: 0,
    Cover: "",
  });

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading({ content: true, rowContent: true, otherPosts: true });
        setError({ content: null, rowContent: null, otherPosts: null });

        const [contentRes, rowContentRes, allPostsRes] = await Promise.all([
          fetch(`/api/notion/${id}`),
          fetch(`/api/notion/post/${id}`),
          fetch("/api/notion"),
        ]);

        if (!contentRes.ok || !rowContentRes.ok || !allPostsRes.ok) {
          return new Error("One or more requests failed");
        }

        const contentData = await contentRes.json();
        const rowContentData = await rowContentRes.json();
        const allPostsData: BlogPostType[] = await allPostsRes.json();

        const blocks = contentData?.results || contentData || [];
        setBlocks(blocks);

        setPagePresentation({
          Article: rowContentData.title,
          Category: rowContentData.category,
          Cover: rowContentData.cover,
          ReadingTime: rowContentData.readingTime,
          Date: rowContentData.date,
        });

        const filteredPosts = allPostsData
          .filter(
            (post) =>
              post.id !== id && post.category === pagePresentation.Category
          )
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .slice(0, 3);

        setOtherPosts(filteredPosts);
      } catch (err: any) {
        console.error("Failed fetching data:", err);
        setError({
          content: err.message || "Error",
          rowContent: err.message || "Error",
          otherPosts: err.message || "Error",
        });
      } finally {
        setLoading({ content: false, rowContent: false, otherPosts: false });
      }
    };

    fetchAllData();
  }, [id, pagePresentation.Category]);

  console.log("OtherPosts:", otherPosts);

  const LoadingSkeleton = () => (
    <div className="space-y-4 animate-pulse">
      <div className="h-6 bg-gray-300 rounded w-1/2" />
      <div className="h-4 bg-gray-300 rounded w-full" />
      <div className="h-4 bg-gray-300 rounded w-5/6" />
      <div className="h-4 bg-gray-300 rounded w-2/3" />
    </div>
  );

  const ErrorMessage = ({ message }: { message: string }) => (
    <div className="bg-red-100 text-red-700 border border-red-300 p-4 rounded-md">
      <p className="font-medium">Oops! Something went wrong:</p>
      <p className="text-sm">{message}</p>
    </div>
  );

  const date = new Date(pagePresentation.Date);
  const dateFormat = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
      {loading.rowContent ? (
        <div className="h-[500px] md:h-[90vh] w-full flex items-center justify-center bg-[#321e1e] text-white">
          <p>Loading article info...</p>
        </div>
      ) : error.rowContent ? (
        <div className="h-[500px] md:h-[90vh] w-full flex items-center justify-center bg-red-100 text-red-700">
          <p>Error loading article: {error.rowContent}</p>
        </div>
      ) : (
        <>
          <div className="md:h-[90vh] flex flex-col md:flex-row">
            <div className="w-full md:w-[50%] h-[500px] md:h-full relative bg-cover bg-center">
              <Image
                src={pagePresentation.Cover}
                alt={"Notion image"}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="w-full md:w-[50%] bg-[#321e1e] flex flex-col justify-center p-10">
              <div className="flex items-center space-x-5 text-white text-xs md:text-sm font-light mb-4">
                <Dot size={52} />
                <span>{pagePresentation.Category}</span>
                <span>|</span>
                <span>{dateFormat}</span>
                <span>|</span>
                <span>{pagePresentation.ReadingTime} min read</span>
              </div>
              <h1 className="font-bricolage text-white text-2xl md:text-4xl lowercase leading-tight">
                {pagePresentation.Article}
              </h1>
            </div>
          </div>
        </>
      )}

      {/* Content Section */}
      <div className="bg-[#faf4f0] w-full px-6 md:px-10 py-12 flex justify-center">
        <div className="max-w-6xl w-full">
          {loading.content ? (
            <LoadingSkeleton />
          ) : error.content ? (
            <ErrorMessage message={error.content} />
          ) : blocks.length === 0 ? (
            <p className="text-gray-500">No content available.</p>
          ) : (
            renderBlocks()
          )}
        </div>
      </div>

      <div className="bg-[#faf4f0] w-full py-10 px-6 md:px-10 flex flex-col items-center">
        <div className="max-w-6xl w-full">
          <h2 className="font-instrument text-lg md:text-xl text-[#321e1e] mb-6 lowercase">
            Check more topics
          </h2>

          {loading.otherPosts ? (
            <LoadingSkeleton />
          ) : error.otherPosts ? (
            <ErrorMessage message={error.otherPosts} />
          ) : otherPosts.length === 0 ? (
            <p className="text-gray-600 text-sm">No related posts found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPosts.map((post) => (
                <Article
                  key={post.id}
                  ID={post.id}
                  ImageURL={post.cover}
                  Category={post.category}
                  Title={post.title}
                  Description={post.description}
                  ReadingTime={post.readingTime}
                  CreatedTime={post.date}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
