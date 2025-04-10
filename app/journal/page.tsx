"use client";

import Article from "@/components/Sections/journal/Article";
import { CategorySection } from "@/components/Sections/journal/CategorySection";
import { Button } from "@/components/ui/button";
import { BlogPostType } from "@/lib/notion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Journal() {
  const [posts, setPosts] = useState<BlogPostType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true);
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

  const latestPosts = posts
    .sort(
      (a, b) =>
        new Date(b.createdTime).getTime() -
        new Date(a.createdTime).getTime()
    )
    .slice(0, 4);

  return (
    <div className="bg-white w-full flex flex-col space-y-12 mt-6 px-6 md:px-10">
      {/* Latest Articles Header */}
      <div className=" flex justify-between items-center pt-8 pl-8 pr-8">
        <h1 className="font-instrument text-xl md:text-2xl font-semibold text-[#321e1e]">
          Latest Articles
        </h1>
        {!isLoading && posts.length > 0 && (
          <Link href="/journal/category/latest">
            <Button variant="link" className="text-sm">
              Explore more
            </Button>
          </Link>
        )}
      </div>

      {/* Articles Grid or Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex flex-col space-y-3">
                <Skeleton className="h-[300px] w-full rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            ))
          : latestPosts.map((post) => (
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

      {/* Category Sections */}
      <CategorySection
        categoryName="skincare-tips-guides"
        categoryTitle="Skincare tips & Guides"
        posts={posts}
      />
      <CategorySection
        categoryName="skin-concerns-solutions"
        categoryTitle="Skin Concerns & Solutions"
        posts={posts}
      />
      <div className="h-[10px]"/>
    </div>
  );
}
