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
        setIsLoading(false);
        console.error("Failed to fetch posts:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  let latestPosts: BlogPostType[] = [];
  if (posts && posts.length > 0) {
    latestPosts = posts
      .sort(
        (a, b) =>
          new Date(b.createdTime).getTime() - new Date(a.createdTime).getTime()
      )
      .slice(0, 4);
  }

  if (isLoading) {
    return (
      <div className="flex flex-col p-10 space-y-10">
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

  return (
    <>
      <div className="bg-white flex flex-col mt-6">
        <div className="flex space-x-5 px-12 py-8">
          <h1 className="font-instrument text-lg font-semibold">
            Latest Articles
          </h1>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex px-5">
          {latestPosts.map((post) => (
            <div key={post.id} className="flex w-[500px] h-[80vh] mb-8">
              <Article
                ID={post.id}
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
        <div className="w-full h-10 flex items-center p-12">
          <Link href="/journal/category/latest">
            <Button variant="link" className="cursor-pointer">
              Explore more
            </Button>
          </Link>
        </div>
      </div>

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
    </>
  );
}
