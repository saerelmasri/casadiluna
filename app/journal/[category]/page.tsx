"use client";

import Article from "@/components/Sections/journal/Article";
import { Skeleton } from "@/components/ui/skeleton";
import { BlogPostType } from "@/lib/notion";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Journal() {
  const { category } = useParams();
  let categoryPath = "";

  if (category === "latest") {
    categoryPath = "latest";
  } else if (category === "skincare-tips-guides") {
    categoryPath = "Skincare tips & Guides";
  } else if (category === "skin-concerns-solutions") {
    categoryPath = "Skin Concerns & Solutions";
  }

  const [posts, setPosts] = useState<BlogPostType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true);
      try {
        const response = await fetch("/api/notion");
        const data: BlogPostType[] = await response.json();
        setPosts(data);
      } catch (error) {
        setIsLoading(false);
        console.error("Failed to fetch posts:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col p-10 space-y-10">
        {/* Header Skeleton */}
        <Skeleton className="w-[600px] h-[50px]" />

        {/* Post Skeletons */}
        <div className="flex space-x-12">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex flex-col space-y-3">
              {/* Post image skeleton */}
              <Skeleton className="h-[500px] w-[400px] rounded-xl" />
              <div className="space-y-2">
                {/* Post title and description skeleton */}
                <Skeleton className="h-4 w-[400px]" />
                <Skeleton className="h-4 w-[300px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  console.log("isLoading", isLoading);

  return (
    <>
      <div className=" bg-white flex flex-col mt-6">
        <div className="flex space-x-5 px-12 py-8">
          <h1 className="font-instrument text-lg font-semibold">
            {categoryPath === "latest" ? "Latest Articles" : categoryPath}
          </h1>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-wrap">
          {posts
            .filter((post) =>
              category === "latest" ? true : post.category === categoryPath
            )
            .sort(
              (a, b) =>
                new Date(b.createdTime).getTime() -
                new Date(a.createdTime).getTime()
            )
            .map((post) => (
              <div key={post.id} className="flex w-[600px] h-[80vh] mb-8">
                <Article
                  ImageURL={post.cover}
                  Category={post.category}
                  Title={post.title}
                  Description={post.description}
                  ReadingTime={post.readingTime}
                  CreatedTime={post.date}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
