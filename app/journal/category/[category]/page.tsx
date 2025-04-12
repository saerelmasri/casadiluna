"use client";

import Article from "@/components/Sections/journal/Article";
import { Skeleton } from "@/components/ui/skeleton";
import { BlogPostType } from "@/lib/notion";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CATEGORY_MAP: Record<string, string> = {
  latest: "Latest Articles",
  "skincare-tips-guides": "Skincare tips & Guides",
  "skin-concerns-solutions": "Skin Concerns & Solutions",
};

export default function JournalCategoryPage() {
  const { category } = useParams();
  const categoryTitle = CATEGORY_MAP[category as string] || "Articles";

  const [posts, setPosts] = useState<BlogPostType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/notion");
        const data: BlogPostType[] = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const filteredPosts = posts
    .filter((post) =>
      category === "latest" ? true : post.category === categoryTitle
    )
    .sort(
      (a, b) =>
        new Date(b.createdTime).getTime() - new Date(a.createdTime).getTime()
    );

  if (isLoading) {
    return (
      <div className="flex flex-col space-y-10 px-6 md:px-10 py-10">
        <Skeleton className="w-[300px] md:w-[600px] h-10 mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="space-y-3">
              <Skeleton className="h-[300px] md:h-[500px] w-full rounded-xl" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col px-6 md:px-10 py-10 space-y-10">
      <div className="flex justify-between items-center">
        <h1 className="font-instrument text-2xl font-semibold text-[#321e1e]">
          {categoryTitle}
        </h1>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
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
      ) : (
        <p className="text-sm text-gray-500">No posts found in this category.</p>
      )}
    </div>
  );
}
