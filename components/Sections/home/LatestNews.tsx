"use client";

import { useEffect, useState } from "react";
import { Dot } from "lucide-react";
import NewsCard from "../../section-components/home/NewsCard";
import CustomButton from "@/components/common/CustomButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { BlogPostType } from "@/lib/notion";
import { Skeleton } from "@/components/ui/skeleton";

export default function LatestNews() {
  const [posts, setPosts] = useState<BlogPostType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("/api/notion");
        if (!response.ok) throw new Error("Network response was not ok");
        const data: BlogPostType[] = await response.json();
        setPosts(data);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("We couldn’t load the latest news. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const latestPosts = posts
    .sort(
      (a, b) =>
        new Date(b.createdTime).getTime() - new Date(a.createdTime).getTime()
    )
    .slice(0, 4);

  const renderPlaceholder = () =>
    Array(4)
      .fill(null)
      .map((_, idx) => (
        <Skeleton
          key={idx}
          className="h-[500px] w-3/4 rounded-xl  m-2"
        />
      ));

  return (
    <section className="w-full py-10 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center px-5 md:px-10">
        <div className="flex items-center gap-2">
          <Dot size={100} />
          <h1 className="text-3xl md:text-4xl font-bricolage lowercase">
            latest news
          </h1>
        </div>
        <div className="hidden md:block">
          <CustomButton
            buttonText="read journal"
            size="default"
            variant="outline"
            href="/journal"
          />
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:flex px-12 gap-5">
        {isLoading && renderPlaceholder()}
        {error && !isLoading && (
          <div className="text-red-500 font-instrument text-sm">{error}</div>
        )}
        {!isLoading &&
          !error &&
          latestPosts.map((article, index) => (
            <NewsCard key={index} {...article} />
          ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden px-5">
        {isLoading ? (
          <div className="flex space-x-3 overflow-x-auto">
            {renderPlaceholder()}
          </div>
        ) : error ? (
          <div className="text-red-500 font-instrument text-sm px-4">
            {error}
          </div>
        ) : (
          <Carousel
            className="w-full"
            plugins={[
              Autoplay({
                delay: 10000,
              }),
            ]}
          >
            <CarouselContent>
              {latestPosts.map((article, index) => (
                <CarouselItem key={index}>
                  <NewsCard {...article} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}
      </div>

      {/* Mobile Button */}
      <div className="px-10 py-8 flex md:hidden justify-center">
        <CustomButton
          buttonText="read journal"
          size="lg"
          variant="outline"
          href="/journal"
        />
      </div>
    </section>
  );
}
