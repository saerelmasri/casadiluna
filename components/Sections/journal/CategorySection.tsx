import Link from "next/link";
import Article from "./Article";
import { Button } from "@/components/ui/button";
import { BlogPostType } from "@/lib/notion";

export function CategorySection({
  categoryName,
  categoryTitle,
  posts,
}: {
  categoryName: string;
  categoryTitle: string;
  posts: BlogPostType[];
}) {
  const filteredPosts = posts
    .filter((post) => post.category === categoryTitle)
    .sort(
      (a, b) =>
        new Date(b.createdTime).getTime() -
        new Date(a.createdTime).getTime()
    )
    .slice(0, 4);

  return (
    <div className="flex flex-col space-y-10 mt-16 ">
      {/* Section Header */}
      <div className="flex justify-between items-center pt-8 pl-8 pr-8">
        <h2 className="font-instrument text-xl md:text-2xl font-semibold text-[#321e1e]">
          {categoryTitle}
        </h2>
        {filteredPosts.length > 0 && (
          <Link href={`/journal/category/${categoryName}`}>
            <Button variant="link" className="text-sm">
              Explore more
            </Button>
          </Link>
        )}
      </div>

      {/* Articles Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
        <p className="text-gray-500 text-sm">No articles found in this category.</p>
      )}
    </div>
  );
}
