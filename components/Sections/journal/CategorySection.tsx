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
        new Date(b.createdTime).getTime() - new Date(a.createdTime).getTime()
    )
    .slice(0, 4);

  return (
    <>
      <div className="bg-white flex flex-col mt-6">
        <div className="flex space-x-5 px-12 py-8">
          <h1 className="font-instrument text-lg font-semibold">
            {categoryTitle}
          </h1>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex px-5">
          {filteredPosts.map((post) => (
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
          <Link href={`/journal/category/${categoryName}`}>
            <Button variant="link" className="cursor-pointer">
              Explore more
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
